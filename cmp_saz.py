import json
HERE = "."
# existing JSON
existing = json.load(open("level_saz_clean.json", encoding="utf-8"))
ex_nums = [r[0] for r in existing]
ex_map = {r[0]: r for r in existing}
# html recs
html = json.load(open("saz_html_clean.json", encoding="utf-8"))
html_nums = list(html.keys())
print("existing count:", len(existing), "range", min(ex_nums), max(ex_nums))
print("html distinct:", len(html_nums))
# numbers 1..99
full = set(range(1,100))
missing_from_ex = sorted(full - set(ex_nums))
missing_from_html = sorted(full - set(int(n) for n in html_nums))
print("nums 1..99 missing from EXISTING JSON:", missing_from_ex)
print("nums 1..99 missing from HTML parse:", missing_from_html)
# show Saz35/48/73 from html
for n in [35,48,73]:
    print(f"HTML Saz{n}: {html.get(str(n))}")
# show existing 48/73
print("EXISTING 48:", ex_map.get(48))
print("EXISTING 73:", ex_map.get(73))
print("EXISTING 34/36 (around 35):", ex_map.get(34), ex_map.get(36))
