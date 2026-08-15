import re, json

html = open('raz_books_raw.html', encoding='utf-8').read()

# 提取所有书对象：从每个 "title" 向前找最近的 '{'，向后平衡括号到 '}'
titles = list(re.finditer(r'"title":\s*"([^"]*)"', html))
books = []
for m in titles:
    start = html.rfind('{', 0, m.start())
    depth = 0
    i = start
    while i < len(html):
        c = html[i]
        if c == '{':
            depth += 1
        elif c == '}':
            depth -= 1
            if depth == 0:
                break
        i += 1
    blk = html[start:i + 1]
    try:
        obj = json.loads(blk)
    except Exception:
        continue
    if 'level' in obj and 'g2' in obj and 'title' in obj:
        books.append(obj)

print("提取到书对象总数:", len(books))

# g2 取值分布
from collections import Counter
g2 = Counter(b.get('g2') for b in books)
print("g2(文体)分布:", dict(g2))
g1 = Counter(b.get('g1') for b in books)
print("g1(子类)分布:", dict(g1))
levels = Counter(b.get('level') for b in books)
print("level 取值样例(前35):", dict(list(levels.items())[:35]))

# 唯一 (title, level) 对数
pairs = set((b['title'], b['level']) for b in books)
print("唯一 (title,level) 对:", len(pairs))

# 看 Election Day 完整对象
for b in books:
    if b['title'] == 'Election Day':
        print("\n--- Election Day 完整对象 ---")
        print(json.dumps(b, ensure_ascii=False, indent=2))
        break

# 保存提取结果
out = []
for b in books:
    out.append({
        'title': b['title'],
        'level': b['level'],
        'grade': b.get('grade'),
        'lx': b.get('lx'),
        'g1': b.get('g1'),
        'g2': b.get('g2'),
        'ml': b.get('ml'),
    })
with open('_official_types.json', 'w', encoding='utf-8') as f:
    json.dump(out, f, ensure_ascii=False, indent=1)
print("\n已保存 _official_types.json:", len(out), "条")
