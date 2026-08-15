# -*- coding: utf-8 -*-
"""验证新匹配器：以当前 nfDays 为基准，确保没有书被错误跨族拉入 生命世界。"""
import json, re, os
HERE = os.path.dirname(os.path.abspath(__file__))
src = open(os.path.join(HERE, 'build_nf_days.py'), encoding='utf-8').read()
cut = src.index('nfDays = build()')
ns = {'__file__': os.path.join(HERE, 'build_nf_days.py')}
exec(src[:cut], ns)
MATCHERS = ns['MATCHERS']

LIB = json.load(open(os.path.join(HERE, 'raz_library.json'), encoding='utf-8'))
books = LIB['books']

def classify(theme, title):
    nt = re.sub(r'[^a-z0-9 ]', ' ', title.lower()).strip()
    for theme_m, key, rg in MATCHERS:
        if rg.search(nt):
            return theme_m, key
    return theme, 'other'

# 当前落点：book_id -> (theme, topic)
cur = {}
for lv, days in LIB.get('nfDays', {}).items():
    for d in days:
        for b in d['books']:
            cur[b['id']] = (d['theme'], d['topic'])

pulls = []          # 负向：跨族拉入 生命世界
into_class = []     # 正向：生命世界/other -> 具体子类
rescued = []        # 真增量：原 🌿生命其他 -> 具体子类
for b in books:
    if b['level'] == 'SAZ':
        continue
    if b.get('type') != 'NF':
        continue
    theme = b.get('theme') or '生命世界'
    t, key = classify(theme, b['title'])
    c = cur.get(b['id'])
    if c is None:
        continue
    ct, ctopic = c
    if ct != '生命世界' and t == '生命世界':
        pulls.append((b['level'], b['title'], ct, key, b.get('theme') or '生命世界'))
    if ct == '生命世界' and ctopic == '🌿 生命其他' and t == '生命世界' and key != 'other':
        rescued.append((b['level'], b['title'], key))

print('=== 负向（跨族被拉入生命世界）共 %d 本 ===' % len(pulls))
for lv, t, ct, k, bth in sorted(pulls):
    print('  %s | %s  (原落点 %s -> 新 %s | 书theme=%s)' % (lv, t, ct, k, bth))

# 统计各具体动物子类命中
from collections import Counter
cnt = Counter(k for _, _, k in into_class)
print()
print('=== 本次真增量：原 🌿生命其他 -> 具体子类 共 %d 本 ===' % len(rescued))
rcnt = Counter(k for _, _, k in rescued)
for k, n in rcnt.most_common():
    print('  %s : %d' % (k, n))
print()
print('明细：')
for lv, t, k in sorted(rescued):
    print('  [%s] %s' % (k, t))
