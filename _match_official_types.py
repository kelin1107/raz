import json, re
from collections import Counter

lib = json.load(open('raz_library.json', encoding='utf-8'))
off = json.load(open('_official_types.json', encoding='utf-8'))

def norm(s):
    s = s.lower()
    s = re.sub(r'[^a-z0-9 ]', ' ', s)
    return re.sub(r'\s+', ' ', s).strip()

# 官方索引：(norm_title, level) -> NF/F ；以及 norm_title -> NF/F（同书类型应一致）
off_by_pair = {}
off_by_title = {}
for b in off:
    t = norm(b['title']); lv = b['level']
    flag = 'NF' if b['g2'] == 'Nonfiction' else 'F'
    off_by_pair[(t, lv)] = flag
    off_by_title.setdefault(t, flag)  # 同书名取第一个

official_levels = set(b['level'] for b in off)

matched = 0
unmatched = 0
agree = 0
disagree = []
our_total = 0
for b in lib['books']:
    lv = b['level']
    if lv not in official_levels:
        continue  # SAZ 等跳过
    our_total += 1
    t = norm(b['title'])
    official = off_by_pair.get((t, lv)) or off_by_title.get(t)
    if official is None:
        unmatched += 1
        continue
    matched += 1
    if b['type'] == official:
        agree += 1
    else:
        disagree.append({
            'id': b['id'], 'level': lv, 'title': b['title'],
            'our': b['type'], 'official': official,
            'g1': off_by_title.get(t),
        })

print(f"我们库中 RAZ 主线书(可匹配范围): {our_total}")
print(f"  匹配到官方: {matched}")
print(f"  未匹配(官方无此书/书名差异): {unmatched}")
print(f"  类型一致: {agree}")
print(f"  ★ 类型不一致(我们错分): {len(disagree)}")
print()
# 我们错分的方向分布
dirc = Counter(f"{d['our']}→{d['official']}" for d in disagree)
print("错分方向:", dict(dirc))
print()
print("=== 错分清单(全部) ===")
for d in disagree:
    print(f"  {d['id']:>6} {d['level']:>3} 我们={d['our']:<3} 官方={d['official']:<3} g1={str(d['g1']):<14} | {d['title']}")

with open('_type_mismatch.txt', 'w', encoding='utf-8') as f:
    for d in disagree:
        f.write(f"{d['id']}\t{d['level']}\t{d['our']}\t{d['official']}\t{d['title']}\n")
print("\n已存 _type_mismatch.txt")
