import re, json, glob, os
HERE = os.path.dirname(os.path.abspath(__file__))
files = sorted(glob.glob(os.path.join(HERE, "saz_main_p*.html")))
recs = {}  # num -> list of (title, band)
pat = re.compile(r'title="Saz\s*(\d+)[ :]([^"]*?)"')
for f in files:
    txt = open(f, encoding="utf-8", errors="ignore").read()
    for m in pat.finditer(txt):
        num = int(m.group(1))
        rest = m.group(2).strip()
        band = ""
        title = rest
        mm = re.search(r'\s+(GK|G1|G2)?\s*(low|mid|high)\s*$', rest, re.I)
        if mm:
            g = (mm.group(1) or "GK").upper()
            lvl = mm.group(2).lower()
            band = g + lvl.upper()
            title = rest[:mm.start()].strip()
        mg = re.search(r'(GK|G1|G2)(LOW|MID|HIGH)\s*$', title, re.I)
        if mg and not band:
            band = mg.group(1).upper() + mg.group(2).upper()
            title = title[:mg.start()].strip()
        recs.setdefault(num, []).append((title, band))

print("distinct Saz numbers in HTML:", len(recs))
nums = sorted(recs)
print("min", nums[0], "max", nums[-1])
print("numbers >99:", [n for n in nums if n > 99])
clean = {}
for n in nums:
    cands = recs[n]
    best = cands[0]
    for c in cands:
        if c[1] and not best[1]:
            best = c
    clean[n] = best
for n in nums:
    ts = set(t for t, b in recs[n])
    if len(ts) > 1:
        print("MULTI-TITLE num", n, recs[n])
out = {n: {"title": clean[n][0], "band": clean[n][1]} for n in nums}
json.dump(out, open(os.path.join(HERE, "saz_html_clean.json"), "w"), ensure_ascii=False, indent=1)
print("written saz_html_clean.json")
