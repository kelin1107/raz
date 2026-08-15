import json, os, re
from difflib import SequenceMatcher
ROOT = "C:/Users/kitekreek/Downloads/raz-pdf"
orig = json.load(open('level_q_clean.json.bak', encoding='utf-8'))
orig48 = set(t for _, t in orig)

def base(f):
    s = f[:-4] if f.lower().endswith('.pdf') else f
    s = re.sub(r'^Q-?\d{1,3}[\.\-_]\s*', '', s)
    s = re.sub(r'_password_removed$', '', s, flags=re.I)
    return s.strip()

qpdf = set(base(f) for f in os.listdir(os.path.join(ROOT, "Q[PDF]")) if f.lower().endswith('.pdf'))
cur = json.load(open('level_q_clean.json', encoding='utf-8'))
cur96 = set(t for _, t in cur)
STOP = {'the','a','an','of','and','to','in','on','for','book','is','are','1','2','3','4','5','6','7','8','9','0'}

def w(s):
    return set(x.rstrip('s') for x in re.findall(r"[a-z0-9]+", s.lower()) if x not in STOP)

def alike(a, b):
    wa, wb = w(a), w(b)
    if wa <= wb or wb <= wa:
        return True
    return SequenceMatcher(None, a.lower(), b.lower()).ratio() >= 0.85

both = []
orig_only = []
qpdf_only = []
for t in cur96:
    ino = t in orig48
    inq = any(alike(t, p) for p in qpdf)
    if ino and inq:
        both.append(t)
    elif ino:
        orig_only.append(t)
    else:
        qpdf_only.append(t)

print("当前96本来源拆分:")
print(f"  原始48 AND Q[PDF] 都有: {len(both)}")
print(f"  仅原始48(不在Q[PDF]): {len(orig_only)}")
print(f"  仅Q[PDF](不在原48): {len(qpdf_only)}")
print(f"  合计 {len(both)+len(orig_only)+len(qpdf_only)}")

print("\n=== 仅原始48 的 19本: 真新书 还是 与Q[PDF]异写? ===")
for t in sorted(orig_only):
    best = max(qpdf, key=lambda p: SequenceMatcher(None, t.lower(), p.lower()).ratio())
    r = SequenceMatcher(None, t.lower(), best.lower()).ratio()
    print(f"  {t:<42} ~Q[PDF] {best:<38} sim={r:.2f}")

print("\n=== 'Book 1' 重复核对 ===")
print("  cur96含 'Book 1: The Kid Who Couldn't Save':", "Book 1: The Kid Who Couldn't Save" in cur96)
print("  cur96含 'The Kid Who Couldn't Save':", "The Kid Who Couldn't Save" in cur96)
print("  qpdf含 'The Kid Who Couldn't Save':", "The Kid Who Couldn't Save" in qpdf)
