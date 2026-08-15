# -*- coding: utf-8 -*-
"""把 build_nf_days.py 的 SUBTOPICS 里所有「单裸词」匹配器加 \\b 词边界（防子串误伤）。
先 dry-run 打印每个被改的 pattern 的 old->new；确认后把 DRY_RUN=False 再跑写回。
"""
import re, os
HERE = os.path.dirname(os.path.abspath(__file__))
PATH = os.path.join(HERE, 'build_nf_days.py')
DRY_RUN = False

# 定制覆盖：保留正确复数/复合词，同时排除已知误伤子串
OVERRIDE = {
    'sea': r'sea(?!son)',                 # 保留 seashell/seahorse/undersea，排除 season
    'car': r'\bcars?\b',                  # 保留 Electric Cars
    'rain': r'\brains?\b|\braining\b',    # 排除 train，保留 raining
    'wind': r'\bwinds?\b|\bwindy\b',       # 排除 window
    'day': r'\bdays?\b',                   # 排除 today
    'fossi': None,                         # earth 里冗余，删（dino 已兜 fossil）
}

def transform_pattern(pat):
    alts = []
    cur = ''
    for ch in pat:
        if ch == '\\':
            cur += ch
            continue
        if ch == '|':
            alts.append(cur)
            cur = ''
        else:
            cur += ch
    alts.append(cur)
    out = []
    for a in alts:
        s = a.replace('\\b', '')
        if re.fullmatch(r'[a-z]+', s):           # 纯字母单裸词
            w = s
            if w in OVERRIDE:
                if OVERRIDE[w] is None:
                    continue                      # 删除该 alt
                out.append(OVERRIDE[w])
            else:
                out.append(r'\b' + w + r's?\b')   # 单/复数都匹配，起点 \b 仍在，不会子串误伤
        else:
            out.append(a)                          # 已是边界/复合词/短语，原样保留
    return '|'.join(out)

src = open(PATH, encoding='utf-8').read()
# 匹配 SUBTOPICS 元组里 ('family','key', r'PATTERN', ...)
pat_re = re.compile(r"\(\s*'([^']+)'\s*,\s*'([^']+)'\s*,\s*r'([^']*)'\s*,")
changes = []

def repl(m):
    fam, key, old = m.group(1), m.group(2), m.group(3)
    new = transform_pattern(old)
    if new != old:
        changes.append((fam, key, old, new))
    return m.group(0)   # 不直接改原文，下面用精确替换

# 先扫描打印
for m in pat_re.finditer(src):
    fam, key, old = m.group(1), m.group(2), m.group(3)
    new = transform_pattern(old)
    if new != old:
        print('[%s/%s]' % (fam, key))
        print('  - %s' % old)
        print('  + %s' % new)
        print()

print('=== 共 %d 处 pattern 将被修改 ===' % len(changes))

if not DRY_RUN:
    def repl2(m):
        old = m.group(3)
        new = transform_pattern(old)
        return "('%s', '%s', r'%s', " % (m.group(1), m.group(2), new)
    new_src = pat_re.sub(repl2, src)
    open(PATH, 'w', encoding='utf-8').write(new_src)
    print('已写回 build_nf_days.py')
