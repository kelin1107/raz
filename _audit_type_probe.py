import json, os, re
lib = json.load(open('raz_library.json'))
pdf = json.load(open('_pdf_text.json'))

def norm(s):
    s = s.lower()
    s = re.sub(r'[^a-z0-9 ]', ' ', s)
    return re.sub(r'\s+', ' ', s).strip()

pdfmap = {}
for k, v in pdf.items():
    base = os.path.basename(k)
    base = re.sub(r'(_password_removed|_password|password_removed|password)', '', base, flags=re.I)
    base = base.replace('书本', '')
    base = re.sub(r'^\d+[-._]?', '', base)
    pdfmap[norm(base)] = v

def find_pdf(title):
    t = norm(title)
    if t in pdfmap:
        return pdfmap[t]
    tw = t.split()
    if len(tw) >= 3:
        for k, v in pdfmap.items():
            if t in k:
                return v
    return None

# Ground truth: A/B/C 手工精标（可靠 type）
known = {}
for b in lib['books']:
    if b['level'] in ('A', 'B', 'C'):
        known[b['title']] = b['type']

NF_SIG = ['focus question', 'glossary', 'index', 'photographs by',
          'table of contents', 'about the author', 'diagram', 'caption',
          'this book is nonfiction', 'read more', 'did you know', 'label']
F_SIG = ['once upon', 'characters', 'setting', 'the end', 'one day', 'lived']

def nf_signals(t):
    tl = t.lower()
    return [s for s in NF_SIG if s in tl]

nf_tot = nf_hit = f_tot = f_hit = 0
f_hit_examples = []
nf_miss_examples = []
for title, typ in known.items():
    t = find_pdf(title)
    if not t:
        continue
    nf = nf_signals(t)
    if typ == 'NF':
        nf_tot += 1
        if nf:
            nf_hit += 1
        else:
            nf_miss_examples.append(title)
    else:
        f_tot += 1
        if nf:
            f_hit += 1
            f_hit_examples.append((title, nf))

print('已知NF(有OCR): %d, 命中NF信号: %d (%.0f%%)' % (nf_tot, nf_hit, 100*nf_hit/nf_tot))
print('已知F(有OCR): %d, 误命中NF信号: %d (%.0f%%)' % (f_tot, f_hit, 100*f_hit/f_tot))
print('\n-- 已知F却命中NF信号(误报,前20) --')
for title, nf in f_hit_examples[:20]:
    print('  F| %s  <- %s' % (title, nf))
print('\n-- 已知NF未命中任何信号(漏报,前20) --')
for title in nf_miss_examples[:20]:
    print('  NF| %s' % title)
