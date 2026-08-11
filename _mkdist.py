# -*- coding: utf-8 -*-
"""构建对外发布的 dist/：单一合并页 index.html（含总表/查/重复规则/阅读方法/
级别/AR/阶梯/主题分类/SAZ/主题书单生成器/NF周计划 全部 tab，共用一份 DATA）。
纯静态、零 fetch，天然适配 Cloudflare Pages。
"""
import os, io

SRC = r"C:\Users\kitekreek\WorkBuddy\2026-07-31-23-21-19\raz-library"
DST = os.path.join(SRC, "dist")
os.makedirs(DST, exist_ok=True)

# 合并后只发布一个入口；顶部 tab 栏即为导航，无需浮层 site-nav
pages = {
    "index.html": "raz_library.html",
}

for out, src in pages.items():
    txt = io.open(os.path.join(SRC, src), encoding="utf-8").read()
    io.open(os.path.join(DST, out), "w", encoding="utf-8").write(txt)
    print("built", out, "from", src, "bytes=", len(txt.encode("utf-8")))

print("DIST READY:", DST)
