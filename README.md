# RAZ + SAZ 知识库（非官方）

一个**纯静态、零后端**的 RAZ / SAZ 英文分级阅读参考知识库，单文件部署。

> ⚠️ 非官方整理 · 仅供研究 / 教学用途。本库为**元数据参考**（级别、AR/蓝思对应、主题分类、重复阅读规则、SAZ 单元），**不含任何书籍正文**。书名与级别体系数据来源 Reading A-Z / Science A-Z（Learning A-Z 商业资产），编号与官方排序一致；完整书目请从官方 Raz-Plus / Science A-Z 账号导出。本页面不替代、不售卖任何官方订阅。

## 页面结构（单一 `raz_library.html`，11 个 tab 共用一份数据）
总表 · 书名⇄编号查询 · 书际重复规则（语言/主题）· 阅读方法 · 级别/AR/主题/SAZ 对照 · 主题书单生成 · NF 周计划

## 本地构建（如需改数据后重新生成 `dist/`）
```bash
python gen_books.py      # 生成 raz_library.json（数据种子）
python sync_html.py      # 把 JSON 注入 raz_library.html 的 inline DATA
python _mkdist.py        # 产出 dist/index.html（发布产物）
```
> 需要 Python 3.10+。也可直接用 `raz_library.html` 作为单文件入口（它自带全部数据）。

## 发布
见 `CLAUDFLARE_DEPLOY.md`（推荐 Cloudflare Pages：免费、全球 CDN、自动 HTTPS，且与 GitHub 联动自动部署）。
