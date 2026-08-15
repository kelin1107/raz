import json, os, re
from collections import Counter
pdf = json.load(open('_pdf_text.json'))
sep = os.sep
pref = Counter()
for k in pdf:
    d = os.path.dirname(k).split(sep)[-1]
    pref[d] += 1
print("=== 各级目录下的 PDF 数 ===")
for d, c in pref.most_common():
    print("  %s: %d" % (d, c))
print("\n=== 抽样文件名 ===")
for k in list(pdf)[:6]:
    print("  ", k)
# 各级命中
for lv in ['aa', 'A', 'B', 'C', 'D', 'F', 'S', 'SAZ']:
    cnt = sum(1 for k in pdf if re.search(r'[%s]级别' % lv, k) or ('%s[' % lv in k))
    print("含 %s 的 key 数: %d" % (lv, cnt))
