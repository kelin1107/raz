# -*- coding: utf-8 -*-
"""给每本 NF 书生成定制化小问题(q)、活动(act)、画+话认字(draw)。
基于书名关键词、核心词、主题族、句式类型做规则匹配；
不比原文，只输出元数据驱动的中文提示。
"""
import json, re, os

HERE = os.path.dirname(os.path.abspath(__file__))
LIB = json.load(open(os.path.join(HERE, 'raz_library.json'), encoding='utf-8'))
books = LIB['books']

# 通用词：小问题尽量避开它们作为焦点
GENERIC = {'animal', 'animals', 'plant', 'plants', 'book', 'books', 'learn', 'read',
           'early', 'late', 'big', 'small', 'many', 'some', 'all', 'look', 'see'}
STOP = set("""a an and or but the of to in on at for from with by about as into through
over under up down out off this that these those my your his her its our their
am is are was were be been being do does did done have has had can could will would
should may might must shall get got go went come came make made take took see saw
look looked read book books page pages level words one two three four five six seven
eight nine ten all some any no not yes so if then than just only very also too
here there where when what who why how which each every many much more most other
new old good bad long short little big high low""".split())

# 当书名/核心词不够时，用主题族的兜底词补第二位，避免重复
THEME_PAD = {
    '生命世界': ['water', 'food', 'home', 'body', 'grow'],
    '地球与宇宙': ['water', 'sun', 'earth', 'air', 'rock'],
    '物质与能量': ['light', 'heat', 'sound', 'move', 'machine'],
    '身体与健康': ['body', 'food', 'move', 'sleep', 'wash'],
    '社会与人文': ['place', 'people', 'work', 'map', 'home'],
    '思维与创意': ['color', 'shape', 'number', 'size', 'pattern'],
}

def norm_title(t):
    return re.sub(r'[^a-z0-9 ]', ' ', t.lower()).strip()

def stem(w):
    if w.endswith('s') and len(w) > 3:
        return w[:-1]
    if w.endswith('es') and len(w) > 4:
        return w[:-2]
    return w

def pick_words(vocab, title, candidates=None, n=2, theme='生命世界'):
    """优先从候选词和书名里挑相关词；其次用书名词；再不够才用通用 vocab；最后用主题兜底词。"""
    picked = []
    seen = set()
    src = ' '.join(vocab + [title.lower()])
    cand_set = set(candidates or [])

    def add(w):
        s = stem(w.lower())
        if s in seen or w in STOP or len(w) < 3:
            return False
        if w in GENERIC and w not in cand_set:
            return False
        seen.add(s); picked.append(w); return True

    # 1) 候选词里出现过的高相关词
    if candidates:
        for c in candidates:
            if re.search(r'\b' + re.escape(c) + r'(s|es)?\b', src):
                add(c)
            if len(picked) >= n:
                break
    # 2) 书名词（干净且相关）
    if len(picked) < n:
        for w in re.findall(r'[a-z]+', title.lower()):
            if add(w) and len(picked) >= n:
                break
    # 3) vocab 中非通用词
    if len(picked) < n:
        for w in vocab:
            if add(w) and len(picked) >= n:
                break
    # 4) 主题兜底词，避免重复
    if len(picked) < n:
        for w in THEME_PAD.get(theme, THEME_PAD['生命世界']):
            if add(w) and len(picked) >= n:
                break
    while len(picked) < n:
        picked.append(picked[-1] if picked else 'word')
    return picked[:n]

# ---------- 按主题族的模板库 ----------
# 每个条目：keywords 为正则匹配词（或），q/act/draw 为 f-string，可用 {title}、{w1}、{w2}
TEMPLATES = {
    '生命世界': [
        {'kw': r'\bbird\b|birds|eagle|owl|penguin|hen|chicken|duck|goose',
         'q': '《{title}》里，{w1} 和 {w2} 长什么样？它们是怎么飞、怎么吃东西的？指一指或画出来。',
         'act': '读《{title}》，用动作模仿鸟儿飞/啄食；画出它并标出 {w1}、{w2}。',
         'draw': '画一只 {title} 里的鸟，写下 {w1}、{w2}。',
         'cand': ['bird','birds','feather','wing','beak','nest','egg','fly','tail']},
        {'kw': r'dinosaur|dinosaurs|fossil|fossils|extinct',
         'q': '《{title}》里，{w1} 和 {w2} 告诉了我们恐龙哪些秘密？你觉得它为什么灭绝了？',
         'act': '用废纸/黏土做一只恐龙模型，标出 {w1}、{w2}，并讲一个恐龙小故事。',
         'draw': '画一只恐龙，写上 {w1}、{w2}。',
         'cand': ['dinosaur','dinosaurs','fossil','fossils','bone','teeth','tail','egg']},
        {'kw': r'fish|shark|dolphin|whale|seal|octopus|jellyfish|crab|lobster|sea|ocean|underwater',
         'q': '《{title}》里，{w1} 和 {w2} 怎么帮助它在水里生活？',
         'act': '画/折一只海洋动物，标出 {w1}、{w2}，说说它怎么游泳、怎么呼吸。',
         'draw': '画 {title} 里的海洋动物，写下 {w1}、{w2}。',
         'cand': ['dolphin','dolphins','fish','shark','fin','tail','water','swim','ocean','sea']},
        {'kw': r'insect|bug|butterfly|bee|ant|spider|worm|beetle|dragonfly',
         'q': '《{title}》里，{w1} 和 {w2} 你能在真实的小虫身上找到吗？',
         'act': '出门找一只小虫（或观察图片），画下它的 {w1}、{w2}，并数它有几条腿。',
         'draw': '画一只小虫，标出 {w1}、{w2}。',
         'cand': ['leg','wing','body','antenna','head']},
        {'kw': r'plant|flower|tree|seed|leaf|leaves|garden|grass|fruit|vegetable|root|stem',
         'q': '《{title}》里，{w1} 和 {w2} 对植物生长有什么用？',
         'act': '种一颗豆子或画一株植物，标出根、茎、叶、{w1}、{w2}，说说阳光和水的作用。',
         'draw': '画一株植物，写下 {w1}、{w2}。',
         'cand': ['root','leaf','seed','flower','water','sun','stem']},
        {'kw': r'habitat|habitats|home|nest|den|burrow|shelter',
         'q': '《{title}》里，{w1} 和 {w2} 让这个地方适合谁住？',
         'act': '用鞋盒做一个小栖息地，放上/画出 {w1}、{w2}，并说出一种住在里面的动物。',
         'draw': '画一个栖息地，写下 {w1}、{w2}。',
         'cand': ['tree','water','cave','grass','nest']},
        {'kw': r'food chain|predator|prey|hunt',
         'q': '《{title}》里，{w1} 和 {w2} 在食物链里是什么角色？谁是吃的一方、谁是被吃的？',
         'act': '用贴纸/画画摆出食物链，把 {w1}、{w2} 标在合适位置，再补上一个相关生物。',
         'draw': '画一条食物链，写 {w1}、{w2}。',
         'cand': ['food','chain','animal','plant','grass','bug']},
        {'kw': r'life cycle|cycle|egg|caterpillar|chrysalis|tadpole|pupa|larva',
         'q': '《{title}》里，{w1} 和 {w2} 在生命周期里排在第几？',
         'act': '画生命周期图，把 {w1}、{w2} 标在正确位置，按顺序讲一遍。',
         'draw': '画生命周期图，写 {w1}、{w2}。',
         'cand': ['egg','young','adult','grow','change']},
        {'kw': r'adaptation|adapt|camouflage|migrate|hibernate',
         'q': '《{title}》里，{w1} 和 {w2} 是怎么帮助它适应环境的？',
         'act': '比较两种动物/植物，说说 {w1}、{w2} 为什么能帮助它活下去。',
         'draw': '画一种有特色的身体部位，标 {w1}、{w2}。',
         'cand': ['color','shape','body','foot','tail']},
        {'kw': r'sense|senses|eye|ear|nose|tongue|skin|smell|taste|touch',
         'q': '《{title}》里，{w1} 和 {w2} 帮你感受到什么？',
         'act': '做一个小感官实验，说说 {w1}、{w2} 让你感觉到了什么。',
         'draw': '画五官/感觉，写 {w1}、{w2}。',
         'cand': ['eye','ear','nose','hand','tongue']},
    ],
    '地球与宇宙': [
        {'kw': r'weather|cloud|rain|wind|storm|snow|sunny|temperature|season|forecast',
         'q': '今天天气和《{title}》里的 {w1}、{w2} 像吗？出门观察并记录。',
         'act': '画一个天气符号/做天气表，标 {w1}、{w2}，连续记 3 天。',
         'draw': '画今天的天气，写 {w1}、{w2}。',
         'cand': ['cloud','rain','sun','wind','snow','hot','cold']},
        {'kw': r'water|river|ocean|lake|pond|rain|flood|ice|snow|cycle',
         'q': '《{title}》里，{w1} 和 {w2} 是怎么流动的？做个小实验观察一下。',
         'act': '水盆里放小物，看沉/浮，说 {w1}、{w2}；或接一杯水观察蒸发。',
         'draw': '画水循环/河流，写 {w1}、{w2}。',
         'cand': ['water','rain','river','ice','drop']},
        {'kw': r'earth|rock|soil|mountain|volcano|land|ground|erosion|earthquake',
         'q': '《{title}》里，{w1} 和 {w2} 属于地球表面的哪一部分？',
         'act': '收集/画出不同石头/土壤，标 {w1}、{w2}，说说它们从哪来。',
         'draw': '画地球表面的一部分，写 {w1}、{w2}。',
         'cand': ['rock','soil','mountain','earth','sand']},
        {'kw': r'sun|moon|earth|space|planet|solar|star|universe|orbit|night|day',
         'q': '《{title}》里，{w1} 和 {w2} 在天空中怎么运动？',
         'act': '用球+灯模拟太阳/地球/月亮，说 {w1}、{w2}，解释白天黑夜。',
         'draw': '画太阳系/昼夜，写 {w1}、{w2}。',
         'cand': ['sun','moon','earth','star','planet']},
    ],
    '物质与能量': [
        {'kw': r'light|shadow|reflect|mirror|sunlight|dark|bright',
         'q': '《{title}》里，{w1} 和 {w2} 是怎么发光的？挡住光会怎样？',
         'act': '用手电筒做影子/折射实验，说 {w1}、{w2}，记录影子变化。',
         'draw': '画一束光和影子，写 {w1}、{w2}。',
         'cand': ['light','shadow','mirror','dark','sun']},
        {'kw': r'sound|noise|music|hear|loud|quiet|echo|vibration',
         'q': '《{title}》里，{w1} 和 {w2} 是怎么发出声音的？',
         'act': '用家里物品做声音实验，说 {w1}、{w2}，比较声音大小。',
         'draw': '画一个发声的东西，写 {w1}、{w2}。',
         'cand': ['sound','hear','loud','quiet','music']},
        {'kw': r'heat|hot|cold|temperature|warm|cool|thermometer|burn',
         'q': '《{title}》里，{w1} 和 {w2} 怎么让东西变热/变冷？',
         'act': '摸冷热物品，记录温度变化，说 {w1}、{w2}。',
         'draw': '画冷热对比，写 {w1}、{w2}。',
         'cand': ['hot','cold','heat','warm','temperature']},
        {'kw': r'magnet|magnets|magnetic|attract|pole|metal',
         'q': '《{title}》里，{w1} 和 {w2} 能被磁铁吸住吗？',
         'act': '用磁铁测试家里物品，记录哪些被吸住，说 {w1}、{w2}。',
         'draw': '画磁铁吸东西，写 {w1}、{w2}。',
         'cand': ['magnet','metal','stick','pull','iron']},
        {'kw': r'force|motion|move|speed|gravity|push|pull|friction|acceleration',
         'q': '《{title}》里，{w1} 和 {w2} 是怎么让东西动起来的？',
         'act': '做推/拉/斜面小实验，说 {w1}、{w2}，记录小车滑多远。',
         'draw': '画一个运动场景，写 {w1}、{w2}。',
         'cand': ['push','pull','move','fast','slow']},
        {'kw': r'machine|simple machines|lever|wheel|pulley|ramp|axle|incline',
         'q': '《{title}》里，{w1} 和 {w2} 属于哪种简单机械？',
         'act': '用家里材料做一个杠杆/滑轮/斜面，说 {w1}、{w2}。',
         'draw': '画一种简单机械，写 {w1}、{w2}。',
         'cand': ['wheel','lever','ramp','move','lift']},
        {'kw': r'energy|electricity|power|fuel|battery|solar|wind|water power',
         'q': '《{title}》里，{w1} 和 {w2} 给我们提供什么能量？',
         'act': '找出家里用电/用燃料的东西，说 {w1}、{w2}，区分可再生与不可再生。',
         'draw': '画一种能量来源，写 {w1}、{w2}。',
         'cand': ['energy','sun','wind','water','power']},
        {'kw': r'solid|liquid|gas|state|matter|mixture|property|material|float|sink',
         'q': '《{title}》里，{w1} 和 {w2} 是固体、液体还是气体？',
         'act': '找三种状态的东西分类并记录，说 {w1}、{w2}。',
         'draw': '画固/液/气，写 {w1}、{w2}。',
         'cand': ['solid','liquid','gas','water','ice']},
    ],
    '身体与健康': [
        {'kw': r'body|heart|lung|bone|bones|muscle|muscles|blood|brain|stomach|digest|organ',
         'q': '《{title}》里，{w1} 和 {w2} 在身体中做什么工作？',
         'act': '指一指/画身体部位，说 {w1}、{w2}，讲讲它有什么用。',
         'draw': '画身体内部/外部，写 {w1}、{w2}。',
         'cand': ['heart','lung','bone','muscle','brain','blood']},
        {'kw': r'sense|senses|eye|ear|nose|tongue|skin|smell|taste|touch',
         'q': '《{title}》里，{w1} 和 {w2} 帮你感受到什么？',
         'act': '做一个小感官游戏，说 {w1}、{w2}，记录你的发现。',
         'draw': '画五官/感觉，写 {w1}、{w2}。',
         'cand': ['eye','ear','nose','hand','tongue']},
        {'kw': r'food|eat|healthy|nutrition|fruit|vegetable|snack|meal|grain|protein',
         'q': '《{title}》里，{w1} 和 {w2} 哪些更健康？',
         'act': '画/摆出健康一餐，说 {w1}、{w2}，说说为什么选它们。',
         'draw': '画健康食物，写 {w1}、{w2}。',
         'cand': ['food','fruit','vegetable','milk','water']},
        {'kw': r'safety|safe|rule|fire|cross|street|helmet|stranger',
         'q': '《{title}》里，{w1} 和 {w2} 怎么保护你的安全？',
         'act': '演一个安全场景，说 {w1}、{w2}，记住一个安全规则。',
         'draw': '画安全规则图，写 {w1}、{w2}。',
         'cand': ['safe','rule','fire','cross','stop']},
        {'kw': r'exercise|sport|sleep|hygiene|wash|tooth|brush|sleep|health',
         'q': '《{title}》里，{w1} 和 {w2} 怎么让你更健康？',
         'act': '做一个小运动/洗手步骤演示，说 {w1}、{w2}。',
         'draw': '画一个健康习惯，写 {w1}、{w2}。',
         'cand': ['sleep','wash','brush','run','healthy']},
    ],
    '社会与人文': [
        {'kw': r'community|city|town|neighborhood|map|place|building|street|park|school|library|hospital',
         'q': '《{title}》里，{w1} 和 {w2} 是什么地方？你生活里有没有？',
         'act': '画一张家/社区地图，标 {w1}、{w2}，说怎么去。',
         'draw': '画社区地图，写 {w1}、{w2}。',
         'cand': ['school','park','shop','home','bus']},
        {'kw': r'country|culture|flag|world|china|chinese|american|japan|japanese|mexico|mexican|africa|african|europe|european|india|indian',
         'q': '《{title}》里，{w1} 和 {w2} 代表哪个国家/文化？',
         'act': '画国旗/服饰/食物，说 {w1}、{w2}，比较异同。',
         'draw': '画一个国家/文化符号，写 {w1}、{w2}。',
         'cand': ['flag','food','clothes','country','world']},
        {'kw': r'biography|life|president|scientist|inventor|artist|writer|leader|hero',
         'q': '《{title}》里，{w1} 和 {w2} 让这个人做了什么特别的事？',
         'act': '做一个人物卡/时间线，说 {w1}、{w2}，讲一段他的故事。',
         'draw': '画这位人物，写 {w1}、{w2}。',
         'cand': ['work','help','make','life','world']},
        {'kw': r'job|jobs|work|worker|farmer|doctor|teacher|police|firefighter|nurse|driver|cook|vet',
         'q': '《{title}》里，{w1} 和 {w2} 是做什么工作的？',
         'act': '角色扮演这个职业，说 {w1}、{w2}，展示它的工具。',
         'draw': '画这个职业，写 {w1}、{w2}。',
         'cand': ['work','help','tool','people','doctor']},
        {'kw': r'transportation|car|bus|train|plane|boat|ship|bike|truck|subway|travel',
         'q': '《{title}》里，{w1} 和 {w2} 是怎么移动的？',
         'act': '用玩具/画画展示交通工具，说 {w1}、{w2}，比较快慢。',
         'draw': '画一种交通工具，写 {w1}、{w2}。',
         'cand': ['car','bus','train','plane','boat']},
        {'kw': r'history|past|long ago|ancient|then|now|time|century',
         'q': '《{title}》里，{w1} 和 {w2} 以前和现在有什么不同？',
         'act': '画两幅「过去/现在」对比图，说 {w1}、{w2}。',
         'draw': '画过去与现在，写 {w1}、{w2}。',
         'cand': ['old','new','past','now','change']},
        {'kw': r'citizenship|government|vote|law|rule|leader|country|rights',
         'q': '《{title}》里，{w1} 和 {w2} 为什么对社区重要？',
         'act': '做一个「好公民」海报，说 {w1}、{w2}。',
         'draw': '画好公民行为，写 {w1}、{w2}。',
         'cand': ['people','rule','help','vote','community']},
    ],
    '思维与创意': [
        {'kw': r'math|number|count|add|subtract|multiply|divide|fraction|sum|more|less|equal',
         'q': '《{title}》里，{w1} 和 {w2} 和数字有什么关系？',
         'act': '用实物数一数/算一算，说 {w1}、{w2}，把结果画出来。',
         'draw': '画数字/算式，写 {w1}、{w2}。',
         'cand': ['number','count','add','subtract','more']},
        {'kw': r'shape|circle|square|triangle|rectangle|pattern|symmetry|line|corner|side',
         'q': '《{title}》里，{w1} 和 {w2} 是什么形状/规律？',
         'act': '在家找形状/做规律串，说 {w1}、{w2}，记录你找到的。',
         'draw': '画形状/规律，写 {w1}、{w2}。',
         'cand': ['circle','square','triangle','pattern','shape']},
        {'kw': r'color|red|blue|yellow|green|brown|black|white|mix|paint',
         'q': '《{title}》里，{w1} 和 {w2} 是什么颜色？',
         'act': '用颜料/彩笔调色，说 {w1}、{w2}，记录混色结果。',
         'draw': '画颜色混合，写 {w1}、{w2}。',
         'cand': ['red','blue','yellow','green','color']},
        {'kw': r'size|big|small|long|short|tall|heavy|light|wide|narrow|thick|thin',
         'q': '《{title}》里，{w1} 和 {w2} 谁大/谁小/谁长？',
         'act': '比较家里物品大小/长短，说 {w1}、{w2}，按顺序排一排。',
         'draw': '画大小对比，写 {w1}、{w2}。',
         'cand': ['big','small','long','short','tall']},
        {'kw': r'opposite|opposites|concept|same|different|compare|pair|up|down|in|out|hot|cold|fast|slow',
         'q': '《{title}》里，{w1} 和 {w2} 是一对反义词/相对概念吗？',
         'act': '做反义词配对卡/动作演示，说 {w1}、{w2}。',
         'draw': '画一对反义词，写 {w1}、{w2}。',
         'cand': ['big','small','up','down','fast','slow']},
        {'kw': r'art|draw|paint|music|dance|craft|sing|song|instrument|creative',
         'q': '《{title}》里，{w1} 和 {w2} 能做什么艺术作品？',
         'act': '用书中材料/灵感做一幅小创作，说 {w1}、{w2}。',
         'draw': '画/做一个小艺术作品，写 {w1}、{w2}。',
         'cand': ['color','shape','line','music','paint']},
    ],
}

# 平铺为按标题优先匹配的列表（可跨主题族修正错误分类）
MATCHERS = []
for theme, tpls in TEMPLATES.items():
    for tpl in tpls:
        MATCHERS.append((theme, tpl))

FALLBACK = {
    '生命世界': {
        'q': '《{title}》里，{w1} 和 {w2} 是什么？它们靠什么活下来、有什么不一样？',
        'act': '读《{title}》，圈出/说出 {w1}、{w2}；用玩具或画画把这个生命做出来。',
        'draw': '画《{title}》里的关键事物，写下 {w1}、{w2}。'},
    '地球与宇宙': {
        'q': '《{title}》里，{w1} 和 {w2} 是怎么变化的？你能出门找到真实例子吗？',
        'act': '读《{title}》，观察/记录 {w1}、{w2}；画下或拍下真实场景。',
        'draw': '画《{title}》里的自然现象，写下 {w1}、{w2}。'},
    '物质与能量': {
        'q': '《{title}》里，{w1} 是怎么工作的？{w2} 会让它发生什么变化？',
        'act': '读《{title}》，用家里材料动手试一试 {w1}、{w2}，记录现象。',
        'draw': '画《{title}》里的一个实验/装置，写下 {w1}、{w2}。'},
    '身体与健康': {
        'q': '《{title}》里，{w1} 和 {w2} 跟你的身体有什么关系？照镜子比一比。',
        'act': '读《{title}》，指认/画出 {w1}、{w2}，做一个相关的小实验或动作。',
        'draw': '画身体相关的事物，写下 {w1}、{w2}。'},
    '社会与人文': {
        'q': '《{title}》里，{w1} 和 {w2} 在什么地方/什么时候出现？你能联想到生活里吗？',
        'act': '读《{title}》，画出 {w1}、{w2} 所在的场景，并讲给大人听。',
        'draw': '画《{title}》里的场景，写下 {w1}、{w2}。'},
    '思维与创意': {
        'q': '《{title}》里，{w1} 和 {w2} 有什么规律？你能找一组出来吗？',
        'act': '读《{title}》，用实物摆出 {w1}、{w2}，数一数/比一比。',
        'draw': '画《{title}》里的规律/概念，写下 {w1}、{w2}。'},
}

def match_template(theme, title):
    nt = norm_title(title)
    for t_theme, tpl in MATCHERS:
        if re.search(tpl['kw'], nt):
            return t_theme, tpl
    return theme, FALLBACK.get(theme, FALLBACK['生命世界'])

def generate(b):
    theme = b.get('theme') or '生命世界'
    title = b['title']
    vocab = b.get('vocab', [])
    eff_theme, tpl = match_template(theme, title)
    w1, w2 = pick_words(vocab, title, tpl.get('cand'), n=2, theme=eff_theme)
    q = tpl['q'].format(title=title, w1=w1, w2=w2)
    act = tpl['act'].format(title=title, w1=w1, w2=w2)
    draw = tpl['draw'].format(title=title, w1=w1, w2=w2)
    return q, act, draw

# 生成并写入
changed = 0
for b in books:
    if b.get('type') != 'NF':
        continue
    q, act, draw = generate(b)
    b['q'] = q
    b['act'] = act
    b['draw'] = draw
    changed += 1

json.dump(LIB, open(os.path.join(HERE, 'raz_library.json'), 'w', encoding='utf-8'),
          ensure_ascii=False, separators=(',', ':'))

print('Generated q/act/draw for', changed, 'NF books')
print('Samples:')
for t in ['Birds', 'Discovering Dinosaurs', 'Dolphins', 'Clouds', 'Magnets', 'The Food Chain']:
    for b in books:
        if b['title'] == t:
            print('\n[%s] %s  theme=%s' % (b['level'], b['title'], b['theme']))
            print('  q  :', b['q'])
            print('  act:', b['act'])
            print('  draw:', b['draw'])
            break
