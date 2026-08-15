"""合并 OCR 分片 -> 统一 _pdf_text.json

把已完成的 _pdf_part_*.json（分片并行产出）合并回主 _pdf_text.json。
主文件已有条目保留；分片条目覆盖同名 key（分片是后抽的、更可信）。
合并后统计总数 / 有文本 / 空 / 错误。

用法: python _ocr_merge.py
"""
import os, json, glob

DIR = r"C:/Users/kitekreek/WorkBuddy/2026-07-31-23-21-19/raz-library"
OUT = os.path.join(DIR, "_pdf_text.json")
PARTS = sorted(glob.glob(os.path.join(DIR, "_pdf_part_*.json")))


def main():
    # 主文件（已有 1300 条）
    main_d = {}
    if os.path.exists(OUT):
        try:
            main_d = json.load(open(OUT, encoding="utf-8"))
        except Exception:
            main_d = {}
    print(f"主文件已有: {len(main_d)}")

    merged = dict(main_d)
    part_total = 0
    for pf in PARTS:
        try:
            pd = json.load(open(pf, encoding="utf-8"))
        except Exception as e:
            print(f"  跳过损坏分片 {os.path.basename(pf)}: {e}")
            continue
        part_total += len(pd)
        # 分片覆盖主文件同名 key
        for k, v in pd.items():
            merged[k] = v
        print(f"  合并 {os.path.basename(pf)}: {len(pd)} 条")

    json.dump(merged, open(OUT, "w", encoding="utf-8"), ensure_ascii=False, indent=0)
    total = len(merged)
    err = sum(1 for v in merged.values() if v.startswith("ERROR"))
    empty = sum(1 for v in merged.values() if not v.strip())
    has = total - err - empty
    print(f"合并完成: total={total} has_text={has} empty={empty} error={err} (分片贡献 {part_total} 条)")


if __name__ == "__main__":
    main()
