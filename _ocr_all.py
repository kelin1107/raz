"""批量抽取 raz-pdf 全部 PDF 的可用文本 -> _pdf_text.json

策略（混合 PDF 包：AA 级部分带文字层，E/I 级多为纯扫描）：
  - 每本先试 PyMuPDF 抽文字层；有效文字 >=50 字符则用文字层（快、准）。
  - 否则渲染首页(默认2页, dpi 200) 用 RapidOCR 识别英文正文。
输出: { 相对路径: 文本(截断到 LIMIT 字符) }，供分类审计脚本复用。

用法:
  python _ocr_all.py                      # 全量续跑 -> _pdf_text.json
  python _ocr_all.py --only "Q[PDF]"      # 仅处理某目录(匹配 basename(dirname(rel)))
  python _ocr_all.py --slice missing1.json --out _pdf_part_1.json  # 分片并行
"""
import os, sys, io, json, argparse
import fitz  # pymupdf
import numpy as np
from PIL import Image
from rapidocr_onnxruntime import RapidOCR

BASE = r"C:/Users/kitekreek/Downloads/raz-pdf"
OUT = r"C:/Users/kitekreek/WorkBuddy/2026-07-31-23-21-19/raz-library/_pdf_text.json"
DP1 = 200
MAXPAGES = 2
LIMIT = 1500
MIN_LAYER = 50

engine = RapidOCR()  # 顶层实例化一次，循环复用


def layer_text(p):
    doc = fitz.open(p)
    chunks = [pg.get_text() for pg in doc if pg.get_text().strip()]
    doc.close()
    return "\n".join(chunks)


def ocr_text(p):
    doc = fitz.open(p)
    n = doc.page_count
    out = []
    for i in range(min(MAXPAGES, n)):
        pix = doc[i].get_pixmap(dpi=DP1)
        im = np.array(Image.open(io.BytesIO(pix.tobytes("png"))).convert("RGB"))
        res, _ = engine(im)
        if res:
            out.append("\n".join(line[1] for line in res))
    doc.close()
    return "\n".join(out)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--only", help="仅处理此目录名(匹配 basename(dirname(rel)))")
    ap.add_argument("--slice", help="待处理相对路径列表 json 文件")
    ap.add_argument("--out", default=OUT, help="输出 json 文件")
    args = ap.parse_args()

    out = args.out
    # 断点续跑：若已有部分产出，加载并跳过已成功抽取的本
    res = {}
    if os.path.exists(out):
        try:
            res = json.load(open(out, encoding="utf-8"))
            print(f"resumed with {len(res)} existing entries -> {os.path.basename(out)}", flush=True)
        except Exception:
            res = {}
    # 双保险：slice 模式也加载主文件 OUT 用于 skip（但不并入 res，避免 part 冗余）
    skip = set()
    if args.slice and out != OUT and os.path.exists(OUT):
        try:
            main_done = json.load(open(OUT, encoding="utf-8"))
            skip = set(k for k, v in main_done.items() if not v.startswith("ERROR") and v.strip())
            print(f"  + main _pdf_text.json skip {len(skip)} already-done", flush=True)
        except Exception:
            pass

    # 收集待处理目标
    if args.slice:
        sl = json.load(open(args.slice, encoding="utf-8"))
        targets = []
        for rel in sl:
            p = os.path.join(BASE, rel)
            if os.path.exists(p):
                targets.append((rel, p))
        print(f"slice mode: {len(targets)} targets from {args.slice}", flush=True)
    else:
        targets = []
        for root, _, files in os.walk(BASE):
            for f in files:
                if not f.lower().endswith(".pdf"):
                    continue
                p = os.path.join(root, f)
                rel = os.path.relpath(p, BASE)
                if args.only and os.path.basename(os.path.dirname(p)) != args.only:
                    continue
                targets.append((rel, p))

    layer_cnt = ocr_cnt = err_cnt = 0
    cnt = 0
    for rel, p in targets:
        cnt += 1
        if rel in res and not res[rel].startswith("ERROR") and res[rel].strip():
            continue
        if rel in skip:
            continue
        try:
            tl = layer_text(p)
            if len(tl.strip()) >= MIN_LAYER:
                txt = tl
                layer_cnt += 1
            else:
                txt = ocr_text(p)
                ocr_cnt += 1
        except Exception as e:
            txt = "ERROR: %s" % e
            err_cnt += 1
        res[rel] = txt[:LIMIT]
        if cnt % 10 == 0:
            json.dump(res, open(out, "w", encoding="utf-8"), ensure_ascii=False, indent=0)
            print(f"[{cnt}/{len(targets)}] layer={layer_cnt} ocr={ocr_cnt} err={err_cnt} saved", flush=True)
    json.dump(res, open(out, "w", encoding="utf-8"), ensure_ascii=False, indent=0)
    print(f"DONE total={len(res)} new_layer={layer_cnt} new_ocr={ocr_cnt} new_err={err_cnt} -> {out}")


if __name__ == "__main__":
    main()
