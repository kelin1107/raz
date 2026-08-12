#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
一行命令激活 Cloudflare Web Analytics 统计（免费、无 cookie）。
用法（在本目录 raz-library/ 下运行）：
    python set_analytics_token.py <你的真实token>

token 在 Cloudflare 侧栏 Analytics & Logs → Web Analytics → 添加站点 后复制。
脚本会：替换占位符 → 重灌数据 → 重建 dist → git 提交并推送（推送会弹 GitHub 授权）。
已激活过再跑会把 token 改成新值（幂等）。
"""
import sys, os, subprocess

HERE = os.path.dirname(os.path.abspath(__file__))

def main():
    token = sys.argv[1] if len(sys.argv) > 1 else ""
    if not token or token == "YOUR_TOKEN":
        print("用法: python set_analytics_token.py <真实token>")
        print("token 在 Cloudflare → Analytics & Logs → Web Analytics → 添加站点 后复制")
        sys.exit(1)

    html = os.path.join(HERE, "raz_library.html")
    s = open(html, encoding="utf-8").read()
    if '"token": "YOUR_TOKEN"' not in s and '"token": "%s"' % token not in s:
        print("未找到占位符 YOUR_TOKEN，可能已激活或文件被改。请检查。")
        sys.exit(1)
    s = s.replace('"token": "YOUR_TOKEN"', '"token": "%s"' % token)
    open(html, "w", encoding="utf-8").write(s)
    print("✓ 已写入 token")

    subprocess.run([sys.executable, "sync_html.py"], check=True, cwd=HERE)
    subprocess.run([sys.executable, "_mkdist.py"], check=True, cwd=HERE)
    print("✓ 已重建 dist/index.html")

    subprocess.run(["git", "add", "-A"], check=True, cwd=HERE)
    subprocess.run(["git", "commit", "-q", "-m", "activate Cloudflare Web Analytics"],
                   check=True, cwd=HERE)
    print("✓ 已 git 提交")
    print("→ 推送中（会弹 GitHub 授权窗口，登录即可）：")
    subprocess.run(["git", "push"], cwd=HERE)
    print("✓ 推送完成，约 1 分钟后统计即在 Cloudflare 后台可见")

if __name__ == "__main__":
    main()
