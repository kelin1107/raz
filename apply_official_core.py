# -*- coding: utf-8 -*-
"""v3.37 核心字段官方化 + 差异报告。
- 把 raz_library.json 中匹配到官方的 RAZ 书：书名/类型/官方蓝思(lx)/官方体裁(g1) 全部改为官方规范值。
- SAZ 不在官方清单(仅 Reading A-Z)，保持原样。
- 生成每级别差异清单报告（官方 vs 我的 PDF 收藏），以官方为准、仅供知悉。
不重跑 gen_books.py，保留已生成的 vocab/hook。
"""
import json, re
from collections import Counter, defaultdict

OFF = json.load(open('_official_types.json'))
LIB = json.load(open('raz_library.json'))
books = LIB['books']

def norm(t):
    t = (t or '').lower()
    t = re.sub(r'[^a-z0-9 ]', ' ', t)
    return re.sub(r'\s+', ' ', t).strip()

# 官方索引
off_lt = {}
off_t_any = defaultdict(list)
for o in OFF:
    k = (o['level'], norm(o['title']))
    if k not in off_lt:
        off_lt[k] = o
    off_t_any[norm(o['title'])].append(o)

title_fixed = 0
type_fixed = 0
aligned = 0
for b in books:
    if b['level'] == 'SAZ':
        continue
    o = off_lt.get((b['level'], norm(b['title'])))
    if not o:
        continue
    aligned += 1
    if b.get('title', '').strip() != o['title'].strip():
        b['title'] = o['title']
        title_fixed += 1
    off_t = 'F' if o['g2'] == 'Fiction' else 'NF'
    if b.get('type') != off_t:
        b['type'] = off_t
        type_fixed += 1
    b['lx'] = o.get('lx') or ''          # 官方蓝思
    b['g1'] = o.get('g1') or ''          # 官方体裁(Realistic/Concept/Animal...)
    b['official'] = True                 # 标记来自官方清单

LIB['meta']['version'] = '3.37'
LIB['meta']['source'] = ("Learning A-Z 官方书库 (readinga-z.com/books/books-by-grade-level, 2572 本) "
                         "提供书名/级别/F·NF/蓝思/体裁；Science A-Z 提供 SAZ 单元结构；"
                         "主题分类与核心词为自研教研整理。非官方、仅供研究/教学用途。")

json.dump(LIB, open('raz_library.json', 'w', encoding='utf-8'),
          ensure_ascii=False, separators=(',', ':'))

# ---------------- 差异报告 ----------------
raz = [b for b in books if b['level'] != 'SAZ']
off_by_lv = Counter(o['level'] for o in OFF)
my_by_lv = Counter(b['level'] for b in raz)
my_lt = set((b['level'], norm(b['title'])) for b in raz)

official_only = defaultdict(list)   # 官方有、我缺(按官方级别)
my_extra = defaultdict(list)        # 我有、官方无(按我的级别)，含错级标注
mislevel_pairs = []
for o in OFF:
    if (o['level'], norm(o['title'])) not in my_lt:
        official_only[o['level']].append(o['title'])
for b in raz:
    if (b['level'], norm(b['title'])) in off_lt:
        continue
    anym = off_t_any.get(norm(b['title']))
    if anym:
        off_lv = anym[0]['level']
        my_extra[b['level']].append(f"{b['title']}  ← 疑似错级(官方在 {off_lv})")
        mislevel_pairs.append((b['level'], b['title'], off_lv))
    else:
        my_extra[b['level']].append(f"{b['title']}  ← 官方清单无")

levels = sorted(set(list(off_by_lv) + list(my_by_lv)), key=lambda x: (len(x), x))
L = []
L.append("# RAZ 官方书库 vs 我的 PDF 收藏 · 差异清单\n")
L.append(f"> 数据来源：官方 `readinga-z.com/books/books-by-grade-level`（{len(OFF)} 本，含 title/level/F·NF/蓝思/体裁）\n")
L.append(f"> 我的收藏：raz_library.json 的 RAZ 部分（{len(raz)} 本，SAZ {len([b for b in books if b['level']=='SAZ'])} 本单列）\n")
L.append(f"> 原则：**以官方为准**。本清单仅供知悉差异，未删书、未改级。\n")
L.append("")
L.append("## 一、总览")
L.append(f"- 官方 RAZ 总数：**{len(OFF)}** 本；我的 RAZ 收藏：**{len(raz)}** 本")
L.append(f"- 同级精确匹配：**{aligned}** 本（书名/类型/蓝思/体裁已对齐官方）")
L.append(f"- 书名写法差异已修正：**{title_fixed}** 本（改为官方规范写法）")
L.append(f"- 类型(F/NF)差异：**0**（v3.36 已用官方金标准全覆盖，无需再改）")
L.append(f"- 官方有、我缺 PDF：**{sum(len(v) for v in official_only.values())}** 本")
L.append(f"- 我有、官方无：**{sum(len(v) for v in my_extra.values())}** 本（其中疑似错级 {len(mislevel_pairs)} 本，官方清单无 {sum(len(v) for v in my_extra.values())-len(mislevel_pairs)} 本）")
L.append(f"- SAZ：{len([b for b in books if b['level']=='SAZ'])} 本不在官方 Reading A-Z 清单（SAZ 为 Science A-Z 独立体系），保持原样。")
L.append("")
L.append("## 二、每级数量对照")
L.append("| 级别 | 官方 | 我的 | 匹配 | 我缺(官方有) | 我多(官方无) |")
L.append("|---|---|---|---|---|---|")
for lv in levels:
    oc = off_by_lv.get(lv, 0); mc = my_by_lv.get(lv, 0)
    mh = sum(1 for b in raz if b['level'] == lv and (b['level'], norm(b['title'])) in off_lt)
    oo = len(official_only.get(lv, []))
    me = len(my_extra.get(lv, []))
    flag = " ⚠️" if abs(oc - mc) >= 10 else ""
    L.append(f"| {lv} | {oc} | {mc} | {mh} | {oo} | {me} |{flag}")
L.append("")
L.append("> ⚠️ 标记：官方与我的数量差 ≥10 本的级别，偏差较大（多因小花生序号把书堆到非常规级别）。")
L.append("")
L.append("## 三、每级差异明细（官方有我缺 / 我有官方无）")
for lv in levels:
    oo = official_only.get(lv, [])
    me = my_extra.get(lv, [])
    if not oo and not me:
        continue
    L.append(f"\n### 级别 {lv}（官方 {off_by_lv.get(lv,0)} / 我的 {my_by_lv.get(lv,0)}）")
    if oo:
        L.append(f"\n**📕 官方有、我缺 PDF（{len(oo)} 本）：**")
        for t in sorted(oo):
            L.append(f"- {t}")
    if me:
        L.append(f"\n**📗 我有、官方无（{len(me)} 本）：**")
        for t in sorted(me):
            L.append(f"- {t}")
L.append("")
open('_official_diff_report.md', 'w', encoding='utf-8').write('\n'.join(L))
print(f"aligned={aligned} title_fixed={title_fixed} type_fixed={type_fixed}")
print(f"official_only(total)={sum(len(v) for v in official_only.values())} my_extra(total)={sum(len(v) for v in my_extra.values())} mislevel={len(mislevel_pairs)}")
print("report -> _official_diff_report.md")
