# -*- coding: utf-8 -*-
"""解析小花生 SAZ G3-4 / G5-6 series 页面 HTML -> [num,title,band] 记录。
段内编号全局续接现有 level_saz_clean.json（GK-G2 已占 1-99），G3-4 从 100 起，G5-6 接其后。
band 格式：G3-4 + 档位(LOW/MID/HIGH) 或仅 G3-4；G5-6 同理。
档位缺失者仅标段（如实，不臆测）。
剔除含"画册/合集"的相册条目。
"""
import re, glob, json, os
from collections import Counter

HERE = os.path.dirname(os.path.abspath(__file__))

def parse_file(fp, seg_prefix):
    txt = open(fp, encoding="utf-8", errors="ignore").read()
    # 匹配 SAZ3-4 <标题> 或 SAZ5-6 <标题>，标题可含括号档位，止于 </a>
    pat = re.compile(r"SAZ" + seg_prefix + r"\s+([^<]+)")
    out = []
    for m in pat.finditer(txt):
        raw = m.group(1).strip()
        # 剥离尾随档位 (LOW)/(Mid)/-LOW/ (high) 等
        mm = re.search(r"\s*[(-]\s*(LOW|MID|HIGH)\s*\)?\s*$", raw, re.I)
        lvl = ""
        title = raw
        if mm:
            lvl = mm.group(1).upper()
            title = raw[:mm.start()].strip()
        if "画册" in title or "合集" in title:
            continue
        if not title:
            continue
        out.append((title, lvl))
    return out

files34 = sorted(glob.glob(os.path.join(HERE, "saz_g34_p*.html")))
files56 = sorted(glob.glob(os.path.join(HERE, "saz_g56_p*.html")))
g34 = []
for f in files34:
    g34 += parse_file(f, "3-4")
g56 = []
for f in files56:
    g56 += parse_file(f, "5-6")

def dedupe(lst):
    seen = set(); res = []
    for t, l in lst:
        k = t.lower()
        if k in seen:
            continue
        seen.add(k); res.append((t, l))
    return res

g34 = dedupe(g34)
g56 = dedupe(g56)

existing = json.load(open(os.path.join(HERE, "level_saz_clean.json"), encoding="utf-8"))
maxnum = max(r[0] for r in existing)
print("现有 SAZ(GK-G2) 最大编号:", maxnum, " 现有本数:", len(existing))

start34 = maxnum + 1
recs = []
for i, (t, l) in enumerate(g34):
    num = start34 + i
    band = "G3-4" + l if l else "G3-4"
    recs.append([num, t, band])
start56 = start34 + len(g34)
for i, (t, l) in enumerate(g56):
    num = start56 + i
    band = "G5-6" + l if l else "G5-6"
    recs.append([num, t, band])

json.dump(recs, open(os.path.join(HERE, "saz_g_ext.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)

print("G3-4 去重后本数:", len(g34), " 编号", start34, "-", start34 + len(g34) - 1)
print("G5-6 去重后本数:", len(g56), " 编号", start56, "-", start56 + len(g56) - 1)
print("扩展记录总数:", len(recs), " 编号区间", recs[0][0], "-", recs[-1][0])
print("扩展 band 分布:", dict(Counter(r[2] for r in recs)))
print("---- G3-4 样本(前5) ----")
for r in recs[:5]:
    print(r)
print("---- G5-6 样本(后5) ----")
for r in recs[-5:]:
    print(r)
# 检查 G3-4 内无档位占比（供决策）
n34_no = sum(1 for r in recs if r[2] == "G3-4")
n56_no = sum(1 for r in recs if r[2] == "G5-6")
print("G3-4 无档位本数:", n34_no, " G5-6 无档位本数:", n56_no)
