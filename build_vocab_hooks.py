# -*- coding: utf-8 -*-
"""给 RAZ 每本书补全 vocab（核心词）+ hook（今日小问题），写入 raz_library.json。
质量策略：
  - aa–E（低级，OCR 薄且易错字）：优先用人工精标 NF_VOCAB；缺失则用「书名派生词」（干净）。
  - F+（高级，OCR 密且较干净）：优先 NF_VOCAB；否则用 OCR 抽取词（强过滤）。
  - 所有词过 valid_word 校验（含元音、非中文、非停用/地名形容词）；不足 3 词用族通用词补齐。
  - 钩子引用 2 个具体词，绝不出现「关键词」占位或 OCR 错字。
仅用元数据/单词与自写钩子，不抄 RAZ 原文；不进 git（复用本地 OCR 资产）。
"""
import json, re, os

HERE = os.path.dirname(os.path.abspath(__file__))
PDF = json.load(open(os.path.join(HERE, '_pdf_text.json'), encoding='utf-8'))
LIB = json.load(open(os.path.join(HERE, 'raz_library.json'), encoding='utf-8'))
books = LIB['books']

STOP = set("""a an and or but he she it i me my we you they them their our his her us
am is are was were be been being do does did doing have has had having will would can could
should may might must shall get got getting go going come came coming make made making know
known now then just too very also not no yes so if as at by for from in on of to with up down
out into over under again about away back off all some more most many much other each every
new old big little small good bad this that these those here there what where when who why how
which one two three see look book books read reading leveled written illustrated www com az
password removed readinga ebook electronic pdf the and of level levels page pages word words
without into over under first next also around still always never every than""".split())

NOISE = set("""thinkstock dreamstime alamy getty istock shutterstock corbis imagemore
stock photo photos picture pictures credit credits rosenbloom harper gabriel terry robert
herman charles hughes minden vic moors recovery visit iphoto folio beijing
main inset cover images title rights npl flpa christian david things looks together""".split())

RAZ_TPL = set("readinga leveled password removed ebook electronic pdf az www com book books".split())

DEMONYM = set("""chinese american japanese mexican brazilian brazil indian india canadian
australian african european spanish french german english korean italian russian egyptian
korea japan mexico brazil canada australia africa europe spain france germany england
russian egypt texas california""".split())

CJK = re.compile(r'[\u4e00-\u9fff]')

def valid_word(w):
    if not w or len(w) < 3:
        return False
    if CJK.search(w):
        return False
    if not re.search(r'[aeiouy]', w):
        return False
    if w in STOP or w in NOISE or w in DEMONYM or w in RAZ_TPL:
        return False
    return True

FAM_PAD = {
    '生命世界': ['animal', 'plant', 'grow', 'live', 'eat'],
    '地球与宇宙': ['weather', 'water', 'sun', 'wind', 'earth'],
    '身体与健康': ['body', 'healthy', 'eat', 'move'],
    '社会与人文': ['place', 'people', 'community', 'work'],
    '思维与创意': ['color', 'number', 'shape', 'count'],
    '物质与能量': ['energy', 'light', 'heat', 'move'],
}

def norm(t):
    t = t.lower()
    t = re.sub(r'[^a-z0-9 ]', ' ', t)
    t = re.sub(r'\s+', ' ', t).strip()
    return t

def folder_level(folder):
    m = re.match(r'^([A-Za-z]{1,3})', folder)
    if not m:
        return None
    lv = m.group(1)
    return 'aa' if lv.upper() == 'AA' else lv.upper()

def parse_title(fname):
    base = re.sub(r'_Password_Removed\.pdf$', '', fname, flags=re.I)
    base = re.sub(r'^\d+\s*[-\.]*\s*', '', base)
    return base.strip()

html = open(os.path.join(HERE, 'raz_library.html'), encoding='utf-8').read()
NF_VOCAB = {}
m = re.search(r'const NF_VOCAB\s*=\s*\{(.*?)\n\};', html, re.S)
if m:
    for key, arr in re.findall(r'"([A-Za-z]{1,3}\d+)":\s*\[([^\]]*)\]', m.group(1)):
        ws = re.findall(r'"([^"]+)"', arr)
        if ws:
            NF_VOCAB[key] = [w for w in ws if valid_word(w.lower())] or ws
SAZ_VOCAB = {}
m2 = re.search(r'const SAZ_VOCAB\s*=\s*\{(.*?)\n\};', html, re.S)
if m2:
    for key, arr in re.findall(r'"([a-z][a-z0-9]+)":\s*\[([^\]]*)\]', m2.group(1)):
        ws = re.findall(r'"([^"]+)"', arr)
        if ws:
            SAZ_VOCAB[key] = ws

by_level = {}
for b in books:
    by_level.setdefault(b['level'], []).append(b)
ALL_NT = {norm(b['title']): b for b in books if norm(b['title'])}
def match_book(level, title):
    tn = norm(title)
    if not tn:
        return None
    if level in by_level:
        cands = by_level[level]
        exact = [b for b in cands if norm(b['title']) == tn]
        if exact:
            return exact[0]
        sub = [b for b in cands if tn and (tn in norm(b['title']) or norm(b['title']) in tn)]
        if sub:
            return sub[0]
    if tn in ALL_NT:
        return ALL_NT[tn]
    for nt, b in ALL_NT.items():
        if tn and (tn in nt or nt in tn):
            return b
    return None

CREDIT_KW = ['written by', 'illustrated by', 'photographs by', 'photograph',
             'www.readinga-z', 'readinga-z', 'copyright', 'learning a-z',
             'all rights reserved', 'consult', 'edited by', 'title page',
             'inset', 'main image', 'cover image', 'permissions',
             'used by permission', 'additional', 'www.raz']
def clean_credits(text):
    out = []
    for line in text.split('\n'):
        if any(k in line.lower() for k in CREDIT_KW):
            continue
        out.append(line)
    return '\n'.join(out)

def extract_vocab(text, n=8):
    text = clean_credits(text)
    toks = re.findall(r"[A-Za-z][A-Za-z'\-]+", text)
    freq, cap = {}, {}
    for raw in toks:
        low = raw.lower()
        if len(low) < 3:
            continue
        if low.startswith('readinga'):
            continue
        if low in STOP or low in RAZ_TPL or low in NOISE:
            continue
        if low.endswith("'s"):
            low = low[:-2]
        freq[low] = freq.get(low, 0) + 1
        if raw[0].isupper():
            cap[low] = cap.get(low, 0) + 1
    scored = []
    for w, f in freq.items():
        if f == 1 and cap.get(w):
            continue
        scored.append((f * 2 + (1 if cap.get(w) else 0), w))
    scored.sort(reverse=True)
    out, seen = [], set()
    for s, w in scored:
        if w in seen:
            continue
        seen.add(w)
        out.append(w)
        if len(out) >= n:
            break
    return out

ocr_result = {}
for key, text in PDF.items():
    folder = key.split('\\')[0]
    fname = key.split('\\')[-1]
    level = folder_level(folder)
    b = match_book(level, parse_title(fname))
    if not b:
        continue
    ocr_result[b['id']] = extract_vocab(text)

def title_words(b):
    tw = []
    for w in re.findall(r'[A-Za-z]+', b['title'].lower()):
        if valid_word(w) and w not in tw:
            tw.append(w)
    return tw

LOW = ('aa', 'A', 'B', 'C', 'D', 'E')
def dedup_stem(v):
    seen, out = set(), []
    for w in v:
        st = w[:-1] if (w.endswith('s') and len(w) > 3) else w
        if st in seen:
            continue
        seen.add(st)
        out.append(w)
    return out

def build_vocab(b):
    vid, theme = b['id'], b['theme']
    curated = NF_VOCAB.get(vid)
    if curated:
        v = list(curated)
    elif b['level'] not in LOW and vid in ocr_result:
        v = ocr_result[vid][:]
    else:
        v = title_words(b)
    v = dedup_stem([w for w in v if valid_word(w)])
    pad = FAM_PAD.get(theme, [])
    for w in pad:
        if w not in v:
            v.append(w)
        if len(v) >= 3:
            break
    if not v:
        v = (FAM_PAD.get(theme, ['word']) * 3)[:3]
    return v[:8]

HOOK = {
    '生命世界': '🔍 今日小问题：《{t}》里，找一找 {w1} 和 {w2}——它们靠什么活下来、有什么不一样？用 "I see ___" 指给大人看。',
    '地球与宇宙': '🔍 今日小问题：《{t}》里，{w1} 和 {w2} 是怎么变化的？出门找一找真实的例子。',
    '身体与健康': '🔍 今日小问题：《{t}》里，你的 {w1} 能做什么？和书里比一比、照镜子说一说。',
    '社会与人文': '🔍 今日小问题：《{t}》里，{w1} 在什么地方？用 "I go to ___" 说一说。',
    '思维与创意': '🔍 今日小问题：《{t}》里，找一找 {w1} 和 {w2}——比一比哪个大 / 多 / 一样？',
    '物质与能量': '🔍 今日小问题：《{t}》里，{w1} 是怎么工作的？动手试一试。',
}
def pick_hook_words(vocab, theme=''):
    GENERIC = {'animal', 'animals', 'plant', 'plants', 'book', 'books'}
    spec = [w for w in vocab if w not in GENERIC]
    if spec:
        w1 = spec[0]
        rest = [w for w in vocab if w != w1]
        spec_rest = [w for w in rest if w not in GENERIC]
        w2 = spec_rest[0] if spec_rest else (rest[0] if rest else w1)
    else:
        w1 = vocab[0]
        w2 = vocab[1] if len(vocab) > 1 else w1
    if w2 == w1:
        for w in FAM_PAD.get(theme, []):
            if w != w1:
                w2 = w
                break
    return w1, w2
def make_hook(theme, title, vocab):
    w1, w2 = pick_hook_words(vocab, theme)
    tpl = HOOK.get(theme) or '🔍 今日小问题：读《{t}》，找一找书里你认识的一个词，画下来标英文。'
    return tpl.format(t=title, w1=w1, w2=w2)

saz_ids = set()
for b in books:
    if b.get('type') == 'SAZ' or b['level'] == 'SAZ':
        saz_ids.add(b['id'])
        sv = SAZ_VOCAB.get(b['id'], [])
        vocab = [w for w in sv if valid_word(w)][:8] if sv else title_words(b)
        if len(vocab) < 3:
            for w in FAM_PAD['物质与能量']:
                if w not in vocab:
                    vocab.append(w)
                if len(vocab) >= 3:
                    break
        b['vocab'] = vocab[:8] or FAM_PAD['物质与能量'][:3]
        b['hook'] = make_hook('物质与能量', b['title'], b['vocab'])

for b in books:
    if b['id'] in saz_ids:
        continue
    vocab = build_vocab(b)
    b['vocab'] = vocab
    b['hook'] = make_hook(b['theme'], b['title'], vocab)

json.dump(LIB, open(os.path.join(HERE, 'raz_library.json'), 'w', encoding='utf-8'),
          ensure_ascii=False, separators=(',', ':'))

nf = [b for b in books if b['type'] == 'NF']
bad = [b for b in books if not b.get('vocab') or any((ord(c) > 0x4e00) for c in ' '.join(b.get('vocab', [])))
       or '关键词' in b.get('vocab', [])]
print('NF_VOCAB parsed:', len(NF_VOCAB), '| SAZ_VOCAB parsed:', len(SAZ_VOCAB))
print('OCR matched:', len(ocr_result))
print('books with vocab:', sum(1 for b in books if b.get('vocab')), '/', len(books))
print('NF with vocab:', sum(1 for b in nf if b.get('vocab')), '/', len(nf))
print('BAD vocab (empty/CJK/placeholder):', len(bad))
print('\n=== SAMPLE ===')
for t in ['The Food Chain', 'In a Chinese Garden', '.Night Animals', 'Tiger Sharks',
         'Who Runs Faster?', 'Boats', 'How Many Wheels?', 'So Many Fish', 'Clouds']:
    for b in books:
        if b['title'] == t:
            print(f"[{b['level']}] {t}")
            print('   vocab:', ', '.join(b['vocab']))
            print('   hook :', b['hook'])
            break
