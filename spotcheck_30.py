# -*- coding: utf-8 -*-
import json, os, random
HERE = os.path.dirname(os.path.abspath(__file__))
src = open(os.path.join(HERE, 'build_nf_days.py'), encoding='utf-8').read()
ns = {'__file__': os.path.join(HERE, 'build_nf_days.py')}
exec(src[:src.index('nfDays = build()')], ns)
classify = ns['classify']; LLM_MAP = ns['LLM_MAP']
L = json.load(open(os.path.join(HERE, 'raz_library.json'), encoding='utf-8'))
books = [b for b in L['books'] if b.get('level') != 'SAZ' and b.get('type') == 'NF']

random.seed(20260815)
# 按 new family 分层抽样，每族取 changed 里 5 本
byfam = {}
for b in books:
    comp = b['id'] + '\x00' + b['title']
    new = LLM_MAP.get(comp)
    if new is None:
        continue
    old = classify(b.get('theme') or '生命世界', b['title'])
    if old != tuple(new):
        byfam.setdefault(new[0], []).append((b['level'], b['title'], old, new))

picks = []
for fam in sorted(byfam):
    lst = byfam[fam]
    random.shuffle(lst)
    picks.extend(lst[:5])
print('抽样 %d 本（每族最多5，取自分类变动本）：' % len(picks))
for lv, t, o, n in picks:
    print('  %s | %-32s | %s/%s -> %s/%s' % (lv, t, o[0], o[1], n[0], n[1]))
