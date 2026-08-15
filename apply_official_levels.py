# 以官方为准：把"真错级"书改到官方级别（仅当当前级别不在官方列表时才挪，目标取官方列表里离当前级最近的级别）
# 只改 level 字段 + 书名/类型/蓝思/体裁对齐官方；保留 id / num / vocab / hook 等已生成教学内容。
# 不重跑 gen_books.py（避免冲掉 vocab/hook）。
import json, re, os
HERE = os.path.dirname(os.path.abspath(__file__))
OFF = json.load(open(os.path.join(HERE, "_official_types.json"), encoding="utf-8"))
LIB = os.path.join(HERE, "raz_library.json")
d = json.load(open(LIB, encoding="utf-8"))
ORDER = d["meta"]["levelOrder"]
IDX = {L: i for i, L in enumerate(ORDER)}

def norm(t):
    t = (t or "").lower()
    t = re.sub(r"[^a-z0-9 ]", " ", t)
    return re.sub(r"\s+", " ", t).strip()

off_by_title = {}
for o in OFF:
    k = norm(o["title"])
    if k not in off_by_title:
        off_by_title[k] = []
    off_by_title[k].append(o)

def nearest(recs, cur):
    cs = IDX[cur]
    return min(recs, key=lambda r: (abs(IDX[r["level"]] - cs), IDX[r["level"]]))

moved = 0
for b in d["books"]:
    if b.get("level") == "SAZ":
        continue
    recs = off_by_title.get(norm(b["title"]))
    if not recs:
        continue  # 官方无此书：保持我的级
    lvset = {r["level"] for r in recs}
    if b["level"] in lvset:
        # 官方也认当前级：确保核心字段官方化（标题写法/类型/蓝思/体裁）
        rec = next((r for r in recs if r["level"] == b["level"]), recs[0])
        if b["title"].strip() != rec["title"].strip():
            b["title"] = rec["title"]
        if b.get("type") != ("F" if rec["g2"] == "Fiction" else "NF"):
            b["type"] = "F" if rec["g2"] == "Fiction" else "NF"
        b["lx"] = rec.get("lx") or ""
        b["g1"] = rec.get("g1") or ""
        b["official"] = True
        continue
    # 真错级：挪到最近官方级
    rec = nearest(recs, b["level"])
    b["level"] = rec["level"]
    b["title"] = rec["title"]
    b["type"] = "F" if rec["g2"] == "Fiction" else "NF"
    b["lx"] = rec.get("lx") or ""
    b["g1"] = rec.get("g1") or ""
    b["official"] = True
    moved += 1

d["meta"]["version"] = "3.38"
d["meta"]["updated"] = "2026-08-14"
json.dump(d, open(LIB, "w", encoding="utf-8"), ensure_ascii=False, separators=(",", ":"))
print("真错级改级完成:", moved, "本；版本升 v3.38")
