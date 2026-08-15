# -*- coding: utf-8 -*-
"""导出全部 NF 书名 + 分类体系清单，供 LLM 批量语义分类。

输出：
  llm_titles.json  : [{id, level, title, theme}]  全部 NF 非 SAZ 书（theme 仅作参考，LLM 应忽略）
  llm_taxonomy.txt : 可读的分类体系（6 大族 + 子话题 + 每族 other 兜底），含合法 (family|key|label)
LLM 必须只从合法集合里选 (family, key)。
"""
import json, os, re

HERE = os.path.dirname(os.path.abspath(__file__))
# 复用 build_nf_days.py 的 SUBTOPICS / OTHER / FAM_ORDER（只读，不执行 build()）
src = open(os.path.join(HERE, 'build_nf_days.py'), encoding='utf-8').read()
ns = {'__file__': os.path.join(HERE, 'build_nf_days.py')}
cut = src.index('nfDays = build()')
exec(src[:cut], ns)
SUBTOPICS = ns['SUBTOPICS']
OTHER = ns['OTHER']
FAM_ORDER = ns['FAM_ORDER']

LIB = json.load(open(os.path.join(HERE, 'raz_library.json'), encoding='utf-8'))

# 1) 书名清单
titles = []
for b in LIB['books']:
    if b.get('level') == 'SAZ':
        continue
    if b.get('type') != 'NF':
        continue
    titles.append({'id': b['id'], 'level': b['level'], 'title': b['title'], 'theme': b.get('theme') or '生命世界'})
print('NF 非 SAZ 书总数：', len(titles))
json.dump(titles, open(os.path.join(HERE, 'llm_titles.json'), 'w', encoding='utf-8'),
          ensure_ascii=False, indent=1)

# 2) 分类体系（合法 (family,key,label) 全集）
lines = []
lines.append('=== RAZ NF 书语义分类体系（LLM 必须严格从下列 (family|key) 中选，不得自拟）===')
lines.append('')
lines.append('说明：每本书根据「整句书名含义」归到一个 (family, key)。')
lines.append('family 共 6 个，顺序无关；key 为该 family 下的子话题键。')
lines.append('若一本书确实无法归入任何具体子话题，归到该 family 的 key=other（兜底）。')
lines.append('')
for fam in FAM_ORDER:
    lines.append('【%s】' % fam)
    for theme, key, kw, label, intro, ext, verdict, desc in SUBTOPICS:
        if theme == fam:
            lines.append('  %s | %s | %s' % (fam, key, label))
    # other 兜底
    if fam in OTHER:
        lines.append('  %s | other | %s' % (fam, OTHER[fam][0]))
    lines.append('')
tax = '\n'.join(lines)
open(os.path.join(HERE, 'llm_taxonomy.txt'), 'w', encoding='utf-8').write(tax)
print(tax)
