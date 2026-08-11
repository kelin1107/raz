# 上线指引：Cloudflare Pages（连 GitHub 自动部署）

你已有 GitHub 账号 → 走 **Cloudflare Pages + Git 集成** 是最顺的：代码存在 GitHub（免费、可版本管理），Cloudflare 负责托管（免费 CDN + 自动 HTTPS），**以后 push 一下就自动重新上线**，不用每次手动传文件。

整条链路分两部分：
- **A. 本地 git 初始化**（本文件已替你做好提交，下面只差连远端）
- **B. 网页上 3 步**（注册 Cloudflare → 连 GitHub → 选仓库部署）

---

## A. 本地已就绪 —— 你只需把代码推到 GitHub

本机已 `git init` 并提交了 `main` 分支（源码 + `dist/index.html`）。
你只需要在 GitHub 网页上建一个**空仓库**，然后在本机终端执行两条命令：

1. 到 https://github.com/new 新建仓库
   - Repository name：`raz-saz-library`（或你喜欢的名字）
   - **不要**勾选 “Add a README” / “Add .gitignore” / “Add license”（保持空仓库）
   - 点 **Create repository**

2. 复制页面上给出的仓库地址（形如 `https://github.com/<你的用户名>/raz-saz-library.git`），在本机 `raz-library/` 目录下执行：
   ```bash
   git remote add origin https://github.com/<你的用户名>/raz-saz-library.git
   git branch -M main
   git push -u origin main
   ```
   （首次会弹出 GitHub 登录授权，按提示完成即可。）

推完之后，GitHub 上就能看到全部代码了。

---

## B. Cloudflare 网页 3 步上线（无需命令行）

### 第 1 步：注册 Cloudflare（免费）
1. 打开 https://dash.cloudflare.com/sign-up ，用邮箱注册（免费套餐足够）。
2. 验证邮箱 → 进入 Dashboard。

### 第 2 步：连接 GitHub
1. 左侧菜单 **Workers & Pages** → 右上角 **Create** → 选 **Pages** 标签。
2. 点击 **Connect to Git**（或 “连接到 Git 仓库”）。
3. 授权 Cloudflare 访问你的 GitHub（勾选对应账号/仓库权限，点 Allow）。
4. 在仓库列表里选中刚建好的 `raz-saz-library`。

### 第 3 步：填写构建设置并部署
设置如下（关键！本项目是**预构建好的纯静态站**）：

| 项 | 填什么 |
|---|---|
| Framework preset | **None** |
| Build command | **留空**（dist 已生成好） |
| Build output directory | **`dist`** |
| Node version / 环境变量 | 不用动 |

点 **Save and Deploy**。约 30–60 秒后，Cloudflare 会给你一个地址：
`https://raz-saz-library.pages.dev`（可自定义前缀）。打开即上线 ✅

---

## 以后怎么更新（最重要的部分）
改完代码后，本机执行：
```bash
python gen_books.py && python sync_html.py && python _mkdist.py   # 改数据时才需要
git add -A && git commit -m "说明" && git push
```
Cloudflare 检测到 push 会**自动重新部署**，无需再到 Cloudflare 操作。

---

## 可选增强
- **自定义域名**：Cloudflare 项目页 → Custom domains → 填你的域名（需域名 DNS 托管在 Cloudflare，免费）。
- **访问统计（免费、无 cookie、合规）**：`raz_library.html` 的 `<head>` 已预置 Cloudflare Web Analytics 埋点脚本（目前 token 为占位符 `YOUR_TOKEN`）。
  启用步骤：Cloudflare 侧栏 **Analytics & Logs → Web Analytics → 添加站点（填你的 pages.dev 或自定义域名）** → 复制它给的 beacon 脚本里的 `token` → 替换 `raz_library.html` 中 `data-cf-beacon='{"token": "YOUR_TOKEN"}'` 的 `YOUR_TOKEN` → 重新 `python sync_html.py && python _mkdist.py && git push` 即生效。无需后端。
- **可用率监控**：https://uptimerobot.com 免费版加一个 URL 监控（5 分钟一次）。

---

## 版权合规（已内置）
页面顶部横幅 + 页脚已写明「非官方 · 仅供研究/教学用途 · 数据来源 Reading A-Z / Science A-Z · 不替代官方订阅」，公开使用符合 Learning A-Z 资产的使用红线。

## 备选：不想连 GitHub？纯拖拽上传
若只想一次性发布、不想维护 Git：Cloudflare Dashboard → **Workers & Pages → Create → Pages → 直接上传** → 把本目录的 `dist/` 文件夹拖进去即可。缺点：以后更新要手动再传，不会自动同步。
