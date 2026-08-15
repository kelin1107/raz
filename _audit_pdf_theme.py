"""用 PDF 正文 OCR 文本审计 raz_library.json 的现有主题分类 (v2)

策略:
  - 加载 _pdf_text.json (每本 PDF 可用文本, 文字层优先 / 否则 OCR 首页2页)
  - 按归一化书名匹配到 raz_library.json 的书 (覆盖 D+ 自动打标的书)
  - 用正文"强主题信号词"(严格单词边界) 给每本判一个正文主导主题
  - 若正文主导主题 != 库 theme 且信号强, 列为疑似错分, 并打印 OCR 原文片段供人工确认

输出:
  1) 高置信冲突列表 (含正文前 160 字片段)
  2) 末尾可直接粘贴进 gen_books.THEME_OVERRIDE 的片段

注意: 主题名必须与库一致 (生命世界/地球与宇宙/物质与能量/身体与健康/社会与人文)。
"""
import json, re, os
from collections import Counter

LIB = r"C:/Users/kitekreek/WorkBuddy/2026-07-31-23-21-19/raz-library/raz_library.json"
PDF = r"C:/Users/kitekreek/WorkBuddy/2026-07-31-23-21-19/raz-library/_pdf_text.json"

# 正文强信号词（严格单词边界；主题名与库 6 大族一致）
SIG = {
    "生命世界": ["mammal", "mammals", "dolphin", "dolphins", "orca", "orcas", "whale", "whales",
        "bear", "bears", "fox", "foxes", "frog", "frogs", "insect", "insects", "spider",
        "spiders", "penguin", "penguins", "reptile", "reptiles", "habitat", "prey", "predator",
        "offspring", "species", "arctic", "rainforest", "camouflage", "endangered", "migrate",
        "hibernate", "scales", "feathers", "gills", "herd", "herds", "colony", "coral", "reef",
        "beak", "paws", "chick", "cub", "animals", "animal", "fish", "bird", "birds",
        "insect", "predators", "eggs", "nest", "fur", "wild", "zoo", "farm"],
    "地球与宇宙": ["weather", "climate", "volcano", "volcanoes", "earthquake", "glacier", "glaciers",
        "canyon", "erosion", "orbit", "planet", "planets", "gravity", "atmosphere", "ecosystem",
        "condensation", "precipitation", "meteorologist", "tornado", "hurricane", "flood",
        "drought", "cave", "caves", "mineral", "lava", "magma", "solar", "stars",
        "mountain", "seasons", "space", "moon phases", "moon"],
    "身体与健康": ["muscle", "muscles", "skeleton", "bones", "digestion", "digest", "lung", "lungs",
        "heart", "brain", "bloodstream", "nutrients", "exercise", "hygiene", "teeth", "tooth",
        "healthy", "sick", "doctor", "hospital", "bodies"],
    "物质与能量": ["matter", "energy", "force", "machine", "machines", "magnet", "magnetic",
        "electric", "electricity", "invent", "invention", "engine", "gear", "gears",
        "pulley", "wheel", "axle", "circuit", "battery", "light", "sound", "heat", "temperature",
        "solid", "liquid", "gas", "motion", "simple machine"],
    "社会与人文": ["community", "culture", "tradition", "traditions", "festival", "government",
        "history", "biography", "leader", "citizen", "citizens", "rights", "immigrants",
        "immigrant", "career", "celebrate", "celebrates", "holiday", "holidays", "country",
        "nation", "family", "families", "people", "school", "town", "city", "neighborhood"],
}

# 排除：正文信号词命中但这些词常出现在非该类书，需更高阈值才采信
WEAK = {"people": 3, "family": 3, "school": 3, "city": 3, "town": 3}


def norm(s):
    s = s.lower()
    s = re.sub(r"[^a-z0-9 ]", " ", s)
    return re.sub(r"\s+", " ", s).strip()


lib = json.load(open(LIB, encoding="utf-8"))
pdf = json.load(open(PDF, encoding="utf-8"))

pdfmap = {}
for k, v in pdf.items():
    base = os.path.basename(k)
    base = re.sub(r"(_password_removed|_password|password_removed|password)", "", base, flags=re.I)
    base = base.replace("书本", "")
    base = re.sub(r"^\d+[-._]?", "", base)
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


conflicts = []
matched = 0
for b in lib["books"]:
    if b["level"] in ["aa", "A", "B", "C", "SAZ"]:
        continue
    th = b.get("theme", "")
    txt = find_pdf(b["title"])
    if not txt:
        continue
    matched += 1
    tl = txt.lower()
    scores = {}
    for cat, words in SIG.items():
        c = 0
        for w in words:
            n = len(re.findall(r"\b" + re.escape(w) + r"\b", tl))
            if n:
                # 弱词需超过阈值才计
                if w in WEAK and n < WEAK[w]:
                    continue
                c += n
        if c:
            scores[cat] = c
    if not scores:
        continue
    best = max(scores, key=scores.get)
    bestc = scores[best]
    if best != th and bestc >= 2:
        conflicts.append((b["id"], b["title"], th, best, bestc, scores, txt))

print(f"D+ 库书总数(已抽范围内): {matched} 匹配到正文")
print(f"高置信冲突(正文强信号>=2 且 != 库theme): {len(conflicts)}\n")

# 末尾收集 override 片段
ov = {}
for x in conflicts:
    bid, title, th, best, bestc, scores, txt = x
    snippet = " ".join(txt.split())[:160]
    print(f"[{bid}] {title}")
    print(f"    库:{th}  ->  正文:{best} (命中{bestc})  分布:{scores}")
    print(f"    正文: {snippet}")
    ov[norm(title)] = best

print("\n=== 可直接粘贴进 THEME_OVERRIDE 的片段 ===")
for k in sorted(ov):
    print(f'    "{k}": "{ov[k]}",')
