# -*- coding: utf-8 -*-
"""分析：当前 生命世界 里落点=other 的散堆书（即未匹配到具体动物子类的书）。
复用 build_nf_days.py 的 SUBTOPICS/MATCHERS（截断 build() 执行部分，避免覆盖 json）。
"""
import json, re, os
HERE = os.path.dirname(os.path.abspath(__file__))
src = open(os.path.join(HERE, 'build_nf_days.py'), encoding='utf-8').read()
cut = src.index('nfDays = build()')
ns = {'__file__': os.path.join(HERE, 'build_nf_days.py')}
exec(src[:cut], ns)
MATCHERS = ns['MATCHERS']

LIB = json.load(open(os.path.join(HERE, 'raz_library.json'), encoding='utf-8'))
books = LIB['books']

def classify(theme, title):
    nt = re.sub(r'[^a-z0-9 ]', ' ', title.lower()).strip()
    for theme_m, key, rg in MATCHERS:
        if rg.search(nt):
            return theme_m, key
    return theme, 'other'

# 1) 生命世界 other（散堆）
others = []
# 2) 动物书被误归其它族（title 含明显动物词 但 theme!=生命世界）
animal_words = r'fox|tiger|lion|bear|rabbit|kangaroo|monkey|elephant|snake|lizard|turtle|tortoise|crocodile|alligator|frog|toad|wolf|deer|horse|cow|pig|sheep|goat|cat|dog|mouse|rat|duck|goose|hen|chick|bee|ant|spider|worm|butterfly|whale|dolphin|seal|octopus|crab|shark|fish|otter|bat|penguin|eagle|owl|parrot|worm|insect|bug|bug|reptile|mammal|animal'

mis = []
for b in books:
    if b['level'] == 'SAZ':
        continue
    if b.get('type') != 'NF':
        continue
    theme = b.get('theme') or '生命世界'
    t, key = classify(theme, b['title'])
    if t == '生命世界' and key == 'other':
        others.append((b['level'], b['title']))
    if t != '生命世界' and re.search(animal_words, b['title'].lower()):
        mis.append((b['level'], b['title'], t, key))

print('=== 生命世界 other（散堆动物书）共 %d 本 ===' % len(others))
for lv, t in sorted(others):
    print('  %s | %s' % (lv, t))

print()
print('=== 动物词命中但 theme!=生命世界（可能误归）共 %d 本 ===' % len(mis))
for lv, t, th, k in sorted(mis):
    print('  %s | %s -> %s/%s' % (lv, t, th, k))
