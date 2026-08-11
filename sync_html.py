# -*- coding: utf-8 -*-
"""把 raz_library.json 的最新 DATA 同步进 raz_library.html 的 inline `const DATA = {...}`。

原理：在 HTML 中找到 `const DATA = ` 后的 JSON 对象，用 json.JSONDecoder.raw_decode
定位其边界（正确处理嵌套花括号），整体替换为最新 JSON。这样每次 gen_books.py 更新
JSON 后，一键把页面数据刷成最新，无需手动改 inline 数据、也不会破坏其它 JS。

用法：python sync_html.py
"""
import json, os

HERE = os.path.dirname(os.path.abspath(__file__))
JSON_PATH = os.path.join(HERE, "raz_library.json")
HTML_PATH = os.path.join(HERE, "raz_library.html")

def sync():
    data = json.load(open(JSON_PATH, encoding="utf-8"))
    html = open(HTML_PATH, encoding="utf-8").read()
    marker = "const DATA = "
    i = html.index(marker) + len(marker)
    dec = json.JSONDecoder()
    obj, end = dec.raw_decode(html[i:])   # 定位当前 inline JSON 的结束位置
    new_json = json.dumps(data, ensure_ascii=False, indent=2)
    html2 = html[:i] + new_json + html[i + end:]
    open(HTML_PATH, "w", encoding="utf-8").write(html2)
    print("synced -> html bytes:", len(html2.encode("utf-8")),
          "| books:", len(data.get("books", [])),
          "| levels:", len(data.get("levels", [])))

if __name__ == "__main__":
    sync()
