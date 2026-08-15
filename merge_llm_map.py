# -*- coding: utf-8 -*-
"""合并 4 份 LLM 分类结果为统一 llm_map.json（复合键 id + SEP + title），并做完整性/合法性校验。"""
import json, os, re

HERE = os.path.dirname(os.path.abspath(__file__))
SEP = '\x00'

# 合法 (family,key) 集合
src = open(os.path.join(HERE, 'build_nf_days.py'), encoding='utf-8').read()
ns = {'__file__': os.path.join(HERE, 'build_nf_days.py')}
exec(src[:src.index('nfDays = build()')], ns)
SUBTOPICS = ns['SUBTOPICS']; OTHER = ns['OTHER']; FAM_ORDER = ns['FAM_ORDER']
VALID = set()
for fam in FAM_ORDER:
    VALID.add((fam, 'other'))
for theme, key, kw, label, intro, ext, verdict, desc in SUBTOPICS:
    VALID.add((theme, key))

# id -> title（用于 parts 1-3 转复合键）
titles = json.load(open(os.path.join(HERE, 'llm_titles.json'), encoding='utf-8'))
id2title = {}
for b in titles:
    id2title.setdefault(b['id'], b['title'])

# 合法 id 集合
valid_ids = set(id2title)

merged = {}
errors = []

# parts 1-3：agent 输出 id 键，转复合键
for p in (1, 2, 3):
    m = json.load(open(os.path.join(HERE, 'llm_map_part%d.json' % p), encoding='utf-8'))
    for bid, fk in m.items():
        if bid not in valid_ids:
            errors.append('part%d 未知 id: %s' % (p, bid)); continue
        fam, key = fk
        if (fam, key) not in VALID:
            errors.append('part%d 非法 (family,key): %s -> %s' % (p, bid, fk)); continue
        title = id2title[bid]
        comp = bid + SEP + title
        if comp in merged:
            errors.append('复合键重复: ' + comp)
        merged[comp] = [fam, key]

# part4：已是复合键 id||title（竖线分隔），转成 SEP
m4 = json.load(open(os.path.join(HERE, 'llm_map_part4.json'), encoding='utf-8'))
for comp, fk in m4.items():
    if '||' not in comp:
        errors.append('part4 键无 ||: ' + comp); continue
    bid, title = comp.split('||', 1)
    fam, key = fk
    if (fam, key) not in VALID:
        errors.append('part4 非法 (family,key): %s -> %s' % (comp, fk)); continue
    c2 = bid + SEP + title
    if c2 in merged:
        errors.append('part4 复合键重复: ' + c2)
    merged[c2] = [fam, key]

print('合并后条目数:', len(merged))
print('错误/警告:', len(errors))
for e in errors[:30]:
    print('  !', e)

# 完整性：每个书名是否都有分类
covered = set(merged.keys())
missing = []
for b in titles:
    comp = b['id'] + SEP + b['title']
    if comp not in covered:
        missing.append(b['id'])
print('缺失书名数:', len(missing))
for x in missing[:20]:
    print('  ?', x)

if errors or missing:
    print('>>> 有错误，未写出文件')
else:
    json.dump(merged, open(os.path.join(HERE, 'llm_map.json'), 'w', encoding='utf-8'),
              ensure_ascii=False, indent=1)
    print('>>> 已写出 llm_map.json')
