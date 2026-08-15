"""OCR RAZ PDFs — 文字层优先，无文字层再 OCR 首页/前几页。

策略（针对混合 PDF 包：AA 级部分带文字层，E/I 级多为纯扫描）：
  1. 先用 PyMuPDF 抽全部页文字层；若有效文字 > 阈值，直接返回（快、准）。
  2. 否则渲染指定页为图片，用 RapidOCR 识别英文正文。
输出裁剪到前若干字符，便于人工/脚本核对分类信号。

用法:
  python _ocr_pdf.py <pdf_path> [--dpi 250] [--pages 2] [--force-ocr] [--limit 4000]
  pages=0 表示全部页；默认只 OCR 前 2 页（封面+标题页通常已够判 NF/F 与主题）。
"""
import sys, os, argparse
import fitz  # pymupdf


def extract_text_layer(path):
    doc = fitz.open(path)
    chunks = []
    for pg in doc:
        t = pg.get_text()
        if t.strip():
            chunks.append(t)
    doc.close()
    return "\n".join(chunks)


def ocr_pages(path, dpi=250, max_pages=2):
    from rapidocr_onnxruntime import RapidOCR
    engine = RapidOCR()
    doc = fitz.open(path)
    n = doc.page_count
    pages = range(n) if max_pages <= 0 else range(min(max_pages, n))
    out = []
    for i in pages:
        pix = doc[i].get_pixmap(dpi=dpi)
        import io
        from PIL import Image
        im = Image.open(io.BytesIO(pix.tobytes("png"))).convert("RGB")
        import numpy as np
        res, _ = engine(np.array(im))
        if res:
            out.append("\n".join(line[1] for line in res))
    doc.close()
    return "\n".join(out)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("pdf")
    ap.add_argument("--dpi", type=int, default=250)
    ap.add_argument("--pages", type=int, default=2)
    ap.add_argument("--force-ocr", action="store_true")
    ap.add_argument("--limit", type=int, default=4000)
    ap.add_argument("--min-text", type=int, default=50)
    args = ap.parse_args()

    if not args.force_ocr:
        tl = extract_text_layer(args.pdf)
        if len(tl.strip()) >= args.min_text:
            print("=== TEXT LAYER ({}) ===".format(len(tl)))
            print(tl[:args.limit])
            return
    print("=== OCR (dpi={}, pages={}) ===".format(args.dpi, args.pages))
    print(ocr_pages(args.pdf, args.dpi, args.pages)[:args.limit])


if __name__ == "__main__":
    main()
