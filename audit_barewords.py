# -*- coding: utf-8 -*-
"""审计 build_nf_days.py 的 MATCHERS：找出单裸词（无 \b 无空格）子串误伤的真实错分。
复用 build_nf_days.py 的 MATCHERS（截断 build()）。
"""
import json, re, os
HERE = os.path.dirname(os.path.abspath(__file__))
src = open(os.path.join(HERE, 'build_nf_days.py'), encoding='utf-8').read()
cut = src.index('nfDays = build()')
ns = {'__file__': os.path.join(HERE, 'build_nf_days.py')}
exec(src[:cut], ns)
MATCHERS = ns['MATCHERS']
LIB = ns['LIB']
books = ns['books']

def classify(theme, title):
    nt = re.sub(r'[^a-z0-9 ]', ' ', title.lower()).strip()
    for theme_m, key, rg in MATCHERS:
        if rg.search(nt):
            return theme_m, key
    return theme, 'other'

def alts_of(pattern):
    parts = []
    cur = ''
    for ch in pattern:
        if ch == '\\':
            cur += ch
            continue
        if ch == '|':
            parts.append(cur)
            cur = ''
        else:
            cur += ch
    parts.append(cur)
    return parts

def firing_alt(pattern, nt):
    for alt in alts_of(pattern):
        try:
            if re.search(alt, nt):
                return alt
        except re.error:
            if re.search(alt.replace('\\s', ' '), nt):
                return alt
    return None

def strip_alt(alt):
    return alt.replace('\\b', '').replace('\\s', ' ').replace('?', '')

def is_unsafe_single(alt):
    # 单裸词：无词边界、无空格
    if '\\b' in alt or ' ' in alt:
        return False
    s = strip_alt(alt)
    return re.fullmatch(r'[a-z]+', s) is not None

# 真实错分：命中匹配器，但 firing alt 是单裸词且为子串误中
problems = []          # (lv, title, true_theme, fam, key, alt)
theme_mismatch = []    # 整词命中但 theme 与落点族不符（供人工看）
token_hits = {}        # alt -> 命中书数

for b in books:
    if b['level'] == 'SAZ':
        continue
    if b.get('type') != 'NF':
        continue
    true_theme = b.get('theme') or '生命世界'
    nt = re.sub(r'[^a-z0-9 ]', ' ', b['title'].lower()).strip()
    # 首个命中匹配器
    win = None
    for theme_m, key, rg in MATCHERS:
        if rg.search(nt):
            win = (theme_m, key, rg)
            break
    if win is None:
        continue
    fam, key, rg = win
    alt = firing_alt(rg.pattern, nt)
    if alt is None:
        continue
    if is_unsafe_single(alt):
        token = strip_alt(alt)
        if re.search(alt, nt) and not re.search(r'\b' + token + r'\b', nt):
            problems.append((b['level'], b['title'], true_theme, fam, key, token))
            token_hits[token] = token_hits.get(token, 0) + 1
    else:
        if fam != true_theme:
            theme_mismatch.append((b['level'], b['title'], true_theme, fam, key, alt))

print('=== 裸词子串真实错分：%d 本 ===' % len(problems))
by_token = {}
for lv, t, tt, fam, key, tok in problems:
    by_token.setdefault(tok, []).append((lv, t, tt, fam, key))
for tok in sorted(by_token, key=lambda x: -len(by_token[x])):
    print('\n--- 裸词 "%s" : %d 本 ---' % (tok, len(by_token[tok])))
    for lv, t, tt, fam, key in by_token[tok]:
        print('  [%s] %-42s true=%-8s -> %s/%s' % (lv, t[:42], tt, fam, key))

print('\n=== 整词命中但 theme≠落点族（非子串，供查）：%d 本 ===' % len(theme_mismatch))
for lv, t, tt, fam, key, alt in sorted(theme_mismatch):
    print('  [%s] %-42s true=%-8s -> %s/%s  (alt=%s)' % (lv, t[:42], tt, fam, key, alt))
