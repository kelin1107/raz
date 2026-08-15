# -*- coding: utf-8 -*-
import json, os
HERE = os.path.dirname(os.path.abspath(__file__))
src = open(os.path.join(HERE, 'build_nf_days.py'), encoding='utf-8').read()
ns = {'__file__': os.path.join(HERE, 'build_nf_days.py')}
exec(src[:src.index('nfDays = build()')], ns)
classify = ns['classify']; LLM_MAP = ns['LLM_MAP']

L = json.load(open(os.path.join(HERE, 'raz_library.json'), encoding='utf-8'))
books = [b for b in L['books'] if b.get('level') != 'SAZ' and b.get('type') == 'NF']

chg = 0; fam_change = {}; moved_out_other = 0; moved_into_other = 0; samples = []
for b in books:
    comp = b['id'] + '\x00' + b['title']
    new = LLM_MAP.get(comp)
    if new is None:
        continue
    old = classify(b.get('theme') or '生命世界', b['title'])
    if old != tuple(new):
        chg += 1
        key = '%s -> %s' % (old[0], new[0])
        fam_change[key] = fam_change.get(key, 0) + 1
        if old[1] == 'other' and new[1] != 'other': moved_out_other += 1
        if old[1] != 'other' and new[1] == 'other': moved_into_other += 1
        if len(samples) < 30:
            samples.append((b['level'], b['title'], old, new))

print('总书:', len(books), '| 分类变动:', chg, '| 由other救出:', moved_out_other, '| 被打回other:', moved_into_other)
print()
print('=== 跨族移动分布（old族 -> new族: 数量）===')
for k, v in sorted(fam_change.items(), key=lambda x: -x[1]):
    print('  %-22s %d' % (k, v))
print()
print('=== 抽样变动（level | title | old | new）===')
for lv, t, o, n in samples:
    print('  %s | %-34s | %s/%s -> %s/%s' % (lv, t, o[0], o[1], n[0], n[1]))
