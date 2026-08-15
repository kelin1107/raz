import json, os, re
from difflib import SequenceMatcher
ROOT = "C:/Users/kitekreek/Downloads/raz-pdf"
LIB = "C:/Users/kitekreek/WorkBuddy/2026-07-31-23-21-19/raz-library/raz_library.json"
data = json.load(open(LIB, encoding='utf-8'))
q_lib = [b['title'] for b in data['books'] if b['level'] == 'Q']

def base(f):
    s = f[:-4] if f.lower().endswith('.pdf') else f
    s = re.sub(r'^Q-?\d{1,3}[\.\-_]\s*', '', s)
    s = re.sub(r'_password_removed$', '', s, flags=re.I)
    return s.strip()

q_local = sorted(base(f) for f in os.listdir(os.path.join(ROOT, "Q[PDF]")) if f.lower().endswith('.pdf'))
STOP = {'the','a','an','of','and','to','in','on','for','book','is','are','1','2','3','4','5','6','7','8','9','0'}
def words(s):
    return set(w.rstrip('s') for w in re.findall(r"[a-z0-9]+", s.lower()) if w not in STOP)

print("Q[PDF] 真实 PDF 数:", len(q_local))
print("库 Q 书数:", len(q_lib))

# 库里每本是否能匹配到 Q[PDF]（词集包含 或 相似>=0.85）
def match_pdf(t):
    L = words(t)
    for loc in q_local:
        W = words(loc)
        if L <= W or W <= L:
            return loc, 1.0
        r = SequenceMatcher(None, t.lower(), loc.lower()).ratio()
        if r >= 0.85:
            return loc, r
    return None, 0.0

# 反向：Q[PDF] 每本是否匹配到库
lib_words = {t: words(t) for t in q_lib}
def match_lib(loc):
    L = words(loc)
    for t in q_lib:
        W = lib_words[t]
        if L <= W or W <= L:
            return t, 1.0
        r = SequenceMatcher(None, loc.lower(), t.lower()).ratio()
        if r >= 0.85:
            return t, r
    return None, 0.0

covered = set()
extra_lib = []  # 库里有、Q[PDF] 无
for t in q_lib:
    loc, r = match_pdf(t)
    if loc:
        covered.add(loc)
    else:
        extra_lib.append(t)

print("\n=== 库 Q 中【未在 Q[PDF] 找到对应】的书:", len(extra_lib), "本 ===")
for t in extra_lib:
    # 找最相似的 PDF，判断是异写还是真新书
    best = max(q_local, key=lambda loc: SequenceMatcher(None, t.lower(), loc.lower()).ratio())
    r = SequenceMatcher(None, t.lower(), best.lower()).ratio()
    print(f"  L:{t:<42} ~ PDF:{best:<40} sim={r:.2f}")

print("\n=== Q[PDF] 中【未覆盖进库】的书(应=0 才全对上):", len(set(q_local)-covered), "本 ===")
for loc in sorted(set(q_local)-covered):
    t, r = match_lib(loc)
    print(f"  PDF:{loc:<40} ~ 库:{t} sim={r:.2f}")
