# -*- coding: utf-8 -*-
"""模式 1：给每个 RAZ 级别的 NF 书自动聚类成「阅读日」。
同一天集中读主题相近的书（如鸟/恐龙/天气/交通），每天给：
  - topic 主题标签
  - intro 导读建议（为何放同一天读）
  - books 书单（id+title+level）
  - ext   详细拓展活动
  - img   生图建议（ verdict + 画面描述，供后续 ImageGen）
写入 raz_library.json['nfDays'][level] = [day, ...]
复用 build_nf_cards 的主题族 + 子话题关键词分类。
"""
import json, re, os

HERE = os.path.dirname(os.path.abspath(__file__))
LIB = json.load(open(os.path.join(HERE, 'raz_library.json'), encoding='utf-8'))
books = LIB['books']

FAM_ORDER = ['生命世界', '地球与宇宙', '物质与能量', '身体与健康', '社会与人文', '思维与创意']

# 子话题分类：key 稳定，kw 用于匹配书名，label/intro/ext/img 为阅读日内容。
# intro：1-2 句，讲清这个主题 + 为何同一天读有帮助。
# ext：3 条具体可操作拓展（会注入 {lv} 级别、{n} 本数）。
# img.verdict：strong(强烈建议) / opt(可选) / no(不建议)；img.desc：若生图，画面描述。
SUBTOPICS = [
    # ---------------- 生命世界 ----------------
    ('生命世界', 'bird', r'\bbirds?\b|\bbirdss?\b|\beagles?\b|\bowls?\b|\bpenguins?\b|\bhens?\b|\bchickens?\b|\bducks?\b|\bgooses?\b|\bgeeses?\b|\brobins?\b|\bparrots?\b|\bflamingos?\b|\bcranes?\b|\bcrows?\b|\bpuffins?\b',   '🐦 鸟类',
     '这几本都讲鸟的外形、飞行或食物。同一天读，孩子会在反复出现的 feather/wing/beak/nest 里自然建立「鸟」的图式，并练习用同一组词描述不同鸟。',
     '1) 模仿秀：读一本模仿一种鸟飞/啄食/游泳，读到下一本换动作，体会差异。\n2) 拼贴卡：画或贴出每本书里鸟的 {w} 部位（羽毛/嘴/脚），旁边写英文词。\n3) 观察任务：出门找一种真鸟，对照书说出它像哪一本里的鸟。', 'strong',
     '横向 3-4 格水彩卡，每格一只拟人化小鸟（麻雀/猫头鹰/企鹅/鸭子），大眼萌系，标部位不写正文；暖色背景，童趣。'),
    ('生命世界', 'dino', r'\bdinosaurs?\b|\bdinosaurss?\b|\bfossils?\b|\bfossilss?\b|\bextincts?\b|\bprehistorics?\b',   '🦕 恐龙',
     '恐龙书常讲外形、食物与灭绝。放一天读，能让孩子在对比中理解「肉食/草食」「大/小」「化石」等概念，并练习提问「它为什么消失」。',
     '1) 模型秀：用废纸/黏土做一本里的恐龙，标出 teeth/tail，讲一个灭绝小猜想。\n2) 食物链：把几本恐龙按吃草/吃肉排一排，画箭头。\n3) 考古角：埋几个「化石」（玩具/石头）让孩子挖出并对应书名。', 'strong',
     '横向拼图式：一只大恐龙骨架+一只活体恐龙+挖掘化石场景，水彩探险风，戴帽小考古学家。'),
    ('生命世界', 'sea', r'\bfishs?\b|\bsharks?\b|\bdolphins?\b|\bwhales?\b|\bseals?\b|\boctopuss?\b|\bjellyfishs?\b|\bcrabs?\b|\blobsters?\b|sea(?!son)|\boceans?\b|\bunderwaters?\b|\bturtles?\b|\bfishs?\b|\bcorals?\b',   '🐠 海洋动物',
     '海洋动物书集中讲鳍、游泳、呼吸。一天读下来，fin/tail/water/swim 反复出现，孩子容易把「在水里生活」这件事想明白。',
     '1) 拓印/折纸：做一本里的海洋动物，标 fin/tail，说说怎么游。\n2) 沉浮实验：水盆放小物，联系书里动物「住在水里」。\n3) 分类表：把读过的海洋动物按「有壳/没壳」「大/小」分两列。', 'strong',
     '海底世界横向长卷：海豚/鲨鱼/章鱼/螃蟹同框不同格，气泡与水草，明亮水彩。'),
    ('生命世界', 'insect', r'\binsects?\b|\bbugs?\b|\bbutterflys?\b|\bbees?\b|\bants?\b|\bspiders?\b|\bworms?\b|\bbeetles?\b|\bdragonflys?\b|\bladybugs?\b|\bscorpions?\b',   '🐛 mini-beasts',
     'mini-beasts 书讲腿、身体分段、栖息地（昆虫有翅膀和蜕变，蜘蛛/蝎子等多足、无翅膀）。一天读这几本，leg/body/segment 反复出现，还能串起「毛毛虫→蝴蝶」的生命周期。',
     '1) 找 mini-beasts：小区/公园找一只小虫或蜘蛛，对照书数腿、看身体分段。\n2) 生命周期：画 caterpillar→chrysalis→butterfly，贴顺序。\n3) 虫屋：用纸筒做一只书里的 mini-beast，标 body/leg。', 'opt',
     '放大镜下的 mini-beasts 世界：蚂蚁搬家/蝴蝶采蜜/蜜蜂蜂窝/蝎子与蜘蛛，圆框聚焦，童趣水彩。'),
    ('生命世界', 'reptile', r'\blizards?\b|\bsnakess?\b|\brattlers?\b|\bsnakebites?\b|\bkomodos?\b|\bturtles?\b|\btortoises?\b|\bcrocodiles?\b|\balligators?\b',   '🦎 爬行动物',
     '这些书都讲爬行动物（蛇/蜥蜴/龟/鳄）：鳞片、冷血、卵生。一天读，scale/egg/cold 反复出现，孩子把「爬行动物长什么样、怎么动」想明白，并练习用同一组词描述不同爬行类。',
     '1) 摸材质：用砂纸/布模仿 scale（鳞片），比光滑皮肤。\n2) 排序：画 卵→小蛇→大蛇 的成长。\n3) 找：小区/公园找一只真爬虫（壁虎/蜗牛），对照书说它像哪本。', 'opt',
     '爬行动物图鉴：蛇/蜥蜴/龟/鳄各一格，标鳞片与卵，写实水彩。'),
    ('生命世界', 'amphibian', r'\bfrogs?\b|\btoads?\b',   '🐸 两栖动物',
     '这些书讲两栖动物（蛙/蟾蜍）：小时候在水里、长大上岸、皮肤湿湿会变态。一天读，tadpole/frog/water 反复出现，孩子把「从蝌蚪到蛙」的生命周期串起来。',
     '1) 生命周期：画 egg→tadpole→frog 三步。\n2) 摸材质：用湿海绵模仿 amphibian 的湿皮肤。\n3) 找：雨后小区找一只真蛙/蟾，对照书。', 'opt',
     '两栖成长图：蝌蚪→小蛙→大蛙，水边草丛，清新水彩。'),
    ('生命世界', 'plant', r'\bplants?\b|\bflowers?\b|\btrees?\b|\bseeds?\b|\bleafs?\b|\bleavess?\b|\bgardens?\b|\bgrasss?\b|\bfruits?\b|\bvegetables?\b|\broots?\b|\bstems?\b|\bforests?\b',   '🌱 植物',
     '植物书讲根、茎、叶、种子与生长。一天读，root/leaf/seed/water/sun 反复出现，孩子能把「植物怎么长大」串成一条线。',
     '1) 种豆：泡豆子放湿棉花，每天画高度，对应书里的 grow。\n2) 标部位：画一株植物标 root/stem/leaf/flower。\n3) 收集：捡落叶/种子分类，说它来自哪本书。', 'strong',
     '植物生长横向时间轴：种子→芽→小花→大树四格，阳光雨滴点缀，清新水彩。'),
    ('生命世界', 'habitat', r'\bhabitats?\b|\bhabitatss?\b|\bhomes?\b|\bnests?\b|\bdens?\b|\bburrows?\b|\bshelters?\b|\bforests?\b|\bdeserts?\b|\bponds?\b|\bjungles?\b|\bfarms?\b',   '🏠 动物的家',
     '这几本讲不同动物住哪（窝/洞/农场/森林）。一天读能练「谁住哪儿」的对应，建立 habitat 概念。',
     '1) 鞋盒场景：做一个书里的栖息地，放对应动物。\n2) 配对：动物卡+家卡，玩配对游戏。\n3) 地图：在你家附近找「像书里那种家」的地方。', 'opt',
     '四种栖息地拼贴：树洞/地洞/农场/池塘各一格，住着对应动物，水彩场景。'),
    ('生命世界', 'foodchain', r'food chain|\bpredators?\b|\bpreys?\b|\beats?\b|\bhunts?\b|food web',   '🍖 食物链',
     '食物链书讲「谁吃谁」。一天读，animal/plant/eat 反复出现，孩子开始理解「吃与被吃」的秩序。',
     '1) 摆链：贴纸摆出 草→虫→鸟，再补一个吃鸟的动物。\n2) 角色：你当猎物、孩子当捕食者，演一遍。\n3) 画：画一条食物链，标每个角色英文名。', 'opt',
     '圆形食物链图：草/虫/蛙/蛇围成圈，箭头相连，卡通生态风。'),
    ('生命世界', 'lifecycle', r'life cycle|\bcycles?\b|\beggs?\b|\bcaterpillars?\b|\bchrysaliss?\b|\btadpoles?\b|\bpupas?\b|\blarvas?\b|\bgrows?\b|\bborns?\b',   '🔄 生命周期',
     '生命周期书讲从小到大怎么变。一天读，egg/young/adult/grow 反复出现，孩子把「变化」变成可讲的词。',
     '1) 排序：把书里 stages 卡片按先后排。\n2) 画：画一种动物的成长四步。\n3) 观察：若有蚕/豆，对照记录真实变化。', 'opt',
     '四格成长图：蛋→幼→成→老（或蝌蚪→蛙），暖色阶梯水彩。'),
    ('生命世界', 'adapt', r'\badaptations?\b|\badapts?\b|\bcamouflages?\b|\bmigrates?\b|\bhibernates?\b|\bcovers?\b|\bcoverings?\b|\bshells?\b|\bfeathers?\b|\bscales?\b|\bfurs?\b',   '🛡️ 动物的本领与覆盖',
     '这几本讲动物怎么靠颜色/壳/羽毛/刺生存。一天读能练 compare：谁有壳、谁有羽毛、谁会藏。',
     '1) 摸材质：用纸/布/贝壳模仿 fur/feather/shell，比手感。\n2) 藏猫猫：把动物卡放对应背景，讲 camouflage。\n3) 分类：按「壳/羽/毛/刺」把书里的动物分四堆。', 'strong',
     '对比卡：羽毛鸟/鳞片鱼/壳龟/刺猬同框，各标覆盖物，水彩科普风。'),
    ('生命世界', 'sense', r'\bsenses?\b|\bsensess?\b|\beyes?\b|\bnoses?\b|\btongues?\b|\bsmells?\b|\btastes?\b|\btouchs?\b|\bhears?\b|\bsees?\b',   '👀 感官',
     '感官书讲看/听/闻/尝/摸。一天读，eye/ear/nose 反复出现，孩子把「五种感觉」一次认全。',
     '1) 盲猜：蒙眼尝酸/甜、摸材质，对应书里的 sense。\n2) 感官瓶：装不同东西摇一摇听声音。\n3) 画：画脸标 five senses 部位。', 'opt',
     '五感小人：脸上有眼耳口鼻手，各发小光，圆润水彩。'),
    ('生命世界', 'mammal', r'\botters?\b|\bbats?\b|\bfoxess?\b|\bcoyotes?\b|\borcas?\b|\breindeers?\b|\bwolves?\b|\btigers?\b|\bgorillas?\b|\bmanatees?\b|\bhedgehogs?\b|\bsquirrels?\b|\brabbits?\b|\bhorses?\b|polar\s+bear|\bseals?\b|\bbearss?\b|\belephants?\b|\bpandas?\b',   '🐾 哺乳动物',
     '这些书都讲哺乳动物：胎生、吃奶、有毛发（fur），如河狸/蝙蝠/狐狸/狼/虎/猩猩/海牛等。一天读，fur/body/baby 反复出现，孩子把「哺乳动物长什么样、怎么带宝宝」想明白，并练习用同一组词描述不同的哺乳动物。',
     '1) 摸材质：用毛绒/布模仿 fur，比手感冷暖软硬。\n2) 配对：动物卡 + 它的家卡（森林/草原/河边）。\n3) 画：画一种哺乳动物，标 body/fur/leg。', 'opt',
     '哺乳动物一家：河边水獭 + 枝头蝙蝠同框不同格，毛绒质感，暖色水彩。'),
    ('生命世界', 'animals', r'\banimals?\b',   '🦒 动物（其他）',
     '这几本以「动物」为总称（农场/乡村/动物园等），没有更具体的物种关键词。放在一天泛读，练 animal/live/habitat 等总称词，并让孩子自己给书里的动物按哺乳/鸟/虫等归类。',
     '1) 分类墙：把书里动物按「会飞/会游/四条腿/没腿」分贴。\n2) 画：选一种最喜欢的动物画下来，标 body 部位。\n3) 找家：说出每种动物可能住哪（farm/forest/pond/zoo）。', 'opt',
     '农场/动物园场景：牛/羊/鸡/马在栅栏内外，明亮水彩，孩子客串饲养员。'),

    # ---------------- 地球与宇宙 ----------------
    ('地球与宇宙', 'weather', r'\bweathers?\b|\bclouds?\b|\brains?\b|\brainings?\b|\brainstorms?\b|\bfogs?\b|\bspring\b|\bfall\b|\bwinds?\b|\bwindys?\b|\bstorms?\b|\bsnows?\b|\bsunnys?\b|\btemperatures?\b|\bseasons?\b|\bforecasts?\b|\bthunders?\b|\btornados?\b|\bhurricanes?\b',   '🌤️ 天气',
     '天气书讲云/雨/风/雪。一天读，cloud/rain/wind/snow 反复出现，还能练「今天像哪本」的真实观察。',
     '1) 天气表：连续 3 天画符号记录，对应书里的词。\n2) 风实验：用扇子/吹气让小物动，理解 wind。\n3) 云朵：棉花贴出不同云，说名字。', 'strong',
     '天气四宫格：微风/大雨/雪花/雷电各一格，拟人云朵娃娃，明快水彩。'),
    ('地球与宇宙', 'water', r'\bwaters?\b|\brivers?\b|\boceans?\b|\blakes?\b|\bponds?\b|\brains?\b|\brainings?\b|\bfloods?\b|\bices?\b|\bsnows?\b|\bcycles?\b|\bdrops?\b|\bwaves?\b',   '💧 水',
     '水书讲流动、沉浮、循环。一天读，water/rain/ice 反复出现，孩子把「水去哪了」想清楚。',
     '1) 沉浮：水盆放小物记沉/浮。\n2) 蒸发：杯装水放窗台 daily 观察。\n3) 循环图：画 云→雨→河→海 的圈。', 'opt',
     '水循环横向图：云下雨→溪流→大海→蒸发回云，蓝绿水彩。'),
    ('地球与宇宙', 'earth', r'\bearths?\b|\brocks?\b|\bsoils?\b|\bmountains?\b|\bvolcanos?\b|\blands?\b|\blandforms?\b|\blandformss?\b|\bgrounds?\b|\berosions?\b|\bearthquakes?\b|\bminerals?\b|\bsands?\b',   '⛰️ 岩石与土壤',
     '岩石土壤书讲地球表面。一天读，rock/soil/mountain 反复出现，孩子理解「脚下的地」从哪来。',
     '1) 石头盒：收集不同石头/土分类。\n2) 火山：小苏打+醋模拟 eruption。\n3) 画：画一层层地层。', 'opt',
     '剖面图：草地→土壤层→岩石层，小铲子挖出石头，土系水彩。'),
    ('地球与宇宙', 'space', r'\bsuns?\b|\bmoons?\b|\bearths?\b|\bspaces?\b|\bplanets?\b|\bsolars?\b|\bstars?\b|\buniverses?\b|\borbits?\b|\bnights?\b|\bdays?\b|\bastronauts?\b|\brockets?\b|\bgalaxys?\b',   '🪐 太空与日月',
     '太空书讲太阳/月亮/行星/白天黑夜。一天读，sun/moon/earth/star 反复出现，孩子把「天为啥会亮」讲明白。',
     '1) 模拟：球+灯演 地球转出自天黑。\n2) 贴纸：贴出太阳系顺序。\n3) 画：画白天/黑夜各做什么。', 'strong',
     '夜空横向：太阳/月亮/地球/星星+小火箭，深蓝点缀亮星，梦幻水彩。'),

    # ---------------- 物质与能量 ----------------
    ('物质与能量', 'light', r'\blights?\b|\bshadows?\b|\breflects?\b|\bmirrors?\b|\bsunlights?\b|\bdarks?\b|\bbrights?\b|\brainbows?\b|\bcolors?\b',   '💡 光与影子',
     '光书讲发光、影子、折射。一天读，light/shadow/dark 反复出现，孩子把「挡光出影子」变成可试的实验。',
     '1) 手电：用手/玩具挡光看影子变化。\n2) 镜：用镜子把光「拐弯」照到墙。\n3) 画：画一束光和你的影子。', 'opt',
     '光影实验图：手电照出动物影子，暖黄光斑，童趣水彩。'),
    ('物质与能量', 'sound', r'\bsounds?\b|\bnoises?\b|\bmusics?\b|\bhears?\b|\blouds?\b|\bquiets?\b|\bechos?\b|\bvibrations?\b|\binstruments?\b',   '🔊 声音',
     '声音书讲怎么发声、大小。一天读，sound/loud/quiet 反复出现，孩子理解「振动出声」。',
     '1) 杯琴：装不同水量的杯敲出高低音。\n2) 比大小：用嘴/物品比 loud/quiet。\n3) 画：画一个会响的东西。', 'opt',
     '声音波横向：鼓/铃/喇叭发出彩色声波，圆润卡通。'),
    ('物质与能量', 'heat', r'\bheats?\b|\bhots?\b|\bcolds?\b|\btemperatures?\b|\bwarms?\b|\bcools?\b|\bthermometers?\b|\bburns?\b|\bfires?\b|\bmelts?\b',   '🌡️ 冷与热',
     '冷热处理讲温度变化。一天读，hot/cold/warm 反复出现，孩子练「摸起来怎样」。',
     '1) 摸物：冰/温水/室温物品排温度序。\n2) 融化：冰放杯里看 melt。\n3) 画：画冷热对比。', 'no',
     '（建议不做合成图：冷热概念抽象，更适合动手实验，不做生图。）'),
    ('物质与能量', 'magnet', r'\bmagnets?\b|\bmagnetss?\b|\bmagnetics?\b|\battracts?\b|\bpoles?\b|\bmetals?\b',   '🧲 磁铁',
     '磁铁书讲吸什么、两极。一天读，magnet/metal 反复出现，孩子把「哪些被吸」做成实验。',
     '1) 测试：磁铁试家里物品记✓/✗。\n2) 钓鱼：纸鱼加回形针用磁铁钓。\n3) 画：画磁铁吸一堆铁物。', 'opt',
     '磁铁吸物图：磁铁吸起钥匙/回形针/小车，蓝色磁感线，趣味水彩。'),
    ('物质与能量', 'motion', r'\bforces?\b|\bmotions?\b|\bmoves?\b|\bspeeds?\b|\bgravitys?\b|\bpushs?\b|\bpulls?\b|\bfrictions?\b|\baccelerations?\b|\bramps?\b|\brolls?\b',   '🚀 力与运动',
     '力与运动书讲推/拉/滑。一天读，push/pull/move 反复出现，孩子把「怎么让东西动」试出来。',
     '1) 小车：斜面推/拉看滑多远。\n2) 拔河：和家长比 push/pull。\n3) 画：画一个运动场景。', 'opt',
     '推拉场景：孩子推箱/拉车/球滚下坡，动感线条，明快水彩。'),
    ('物质与能量', 'machine', r'\bmachines?\b|simple machines|\blevers?\b|\bwheels?\b|\bpulleys?\b|\bramps?\b|\baxles?\b|\binclines?\b|\bgears?\b',   '⚙️ 简单机械',
     '简单机械书讲杠杆/轮/斜面。一天读，wheel/lever/ramp 反复出现，孩子认出生活里的「省力工具」。',
     '1) 撬：用尺+橡皮做杠杆撬书。\n2) 轮：玩具车轮滚物比搬省力。\n3) 画：画一种机械。', 'no',
     '（建议不做合成图：机械结构细，更适合动手做，不做生图。）'),
    ('物质与能量', 'energy', r'\benergys?\b|\belectricitys?\b|\bpowers?\b|\bfuels?\b|\bbatterys?\b|\bsolars?\b|wind power|\bcoals?\b',   '⚡ 能量',
     '能量书讲电/太阳/风从哪来。一天读，energy/sun/wind 反复出现，孩子理解「东西要能量才动」。',
     '1) 找电：家里圈出用电的东西。\n2) 太阳能：用镜聚光感温度。\n3) 画：画一种能量来源。', 'no',
     '（建议不做合成图：能量抽象，更适合分类讨论，不做生图。）'),
    ('物质与能量', 'matter', r'\bsolids?\b|\bliquids?\b|\bgass?\b|\bstates?\b|\bmatters?\b|\bmixtures?\b|\bpropertys?\b|\bmaterials?\b|\bfloats?\b|\bsinks?\b',   '🧪 物质三态',
     '物质书讲固/液/气。一天读，solid/liquid/gas/water 反复出现，孩子把「同一样东西三种样子」分清。',
     '1) 三态：找冰/水/蒸汽对应 solid/liquid/gas。\n2) 融化：冰→水观察。\n3) 画：画三态。', 'opt',
     '三态对比：冰块/水杯/云气同框，蓝白水彩。'),

    # ---------------- 身体与健康 ----------------
    ('身体与健康', 'body', r'\bbodys?\b|\bhearts?\b|\blungs?\b|\bbones?\b|\bboness?\b|\bmuscles?\b|\bmuscless?\b|\bbloods?\b|\bbrains?\b|\bstomachs?\b|\bdigests?\b|\borgans?\b|\bskeletons?\b',   '🫀 身体器官',
     '身体器官书讲心/肺/骨/脑。一天读，heart/lung/bone 反复出现，孩子把「身体里面有什么」认出来。',
     '1) 指认：照镜子/摸胸口说 heart 在哪。\n2) 骨架：用棉签拼 skeleton。\n3) 画：画身体内部标器官。', 'strong',
     '身体透视卡：皮肤外+骨架/器官内双格，圆润科普水彩。'),
    ('身体与健康', 'food', r'\bfoods?\b|\beats?\b|\bhealthys?\b|\bnutritions?\b|\bfruits?\b|\bvegetables?\b|\bsnacks?\b|\bmeals?\b|\bgrains?\b|\bproteins?\b|\bgroups?\b|\bpyramids?\b',   '🍎 食物与健康',
     '食物书讲吃什么、怎么均衡。一天读，food/fruit/vegetable 反复出现，孩子练「这顿健康吗」。',
     '1) 餐盘：画健康一餐分组。\n2) 采购：假装超市挑水果蔬菜。\n3) 画：画喜欢的健康食物。', 'strong',
     '健康餐盘图：蔬果/谷物/蛋白分区，鲜艳食物卡通。'),
    ('身体与健康', 'safety', r'\bsafetys?\b|\bsafes?\b|\brules?\b|\bfires?\b|\bcrosss?\b|\bstreets?\b|\bhelmets?\b|\bstrangers?\b|\bemergencys?\b',   '⚠️ 安全',
     '安全书讲过马路/防火/陌生人。一天读，safe/rule 反复出现，孩子记住几个保命规则。',
     '1) 演练：演过马路看红绿。\n2) 火警：找家里 escape route。\n3) 画：画一个安全规则。', 'no',
     '（建议不做合成图：安全规则重演练，不做生图。）'),
    ('身体与健康', 'habit', r'\bexercises?\b|\bsports?\b|\bsleeps?\b|\bhygienes?\b|\bwashs?\b|\btooths?\b|\bbrushs?\b|\bhealths?\b|\bgerms?\b|\bcleans?\b',   '🪥 健康习惯',
     '习惯书讲运动/洗手/刷牙/睡。一天读，sleep/wash/brush 反复出现，孩子把日常习惯串成节奏。',
     '1) 步骤：演刷牙/洗手步骤。\n2) 图表：做一周 sleep/brush 打卡。\n3) 画：画一个健康习惯。', 'opt',
     '习惯打卡图：刷牙/洗手/睡觉三格小图，清新水彩。'),
    ('身体与健康', 'emotion', r'\bcalms?\b|\bcalmings?\b|\bangrys?\b|\bangers?\b|\bhappy\b|\bhappiness\b|\bsads?\b|\bsadness\b|\bworried\b|\bworries?\b|\bscared?\b|\bafraids?\b|\bfears?\b|\bbraves?\b|\bbravery\b|\bfeelings?\b|\bemotions?\b|\bmoods?\b|\bshys?\b|\bprouds?\b|\bjealous\b|\bkindness\b|\bsorry\b|\bgrumpy\b|\blonely\b|\bexcited\b|\bbored\b|\btired\b|\bsleepy\b|\bfrustrated\b',   '🧘 情绪与感受',
     '情绪书讲怎么辨认和安放自己的感受。一天读，calm/happy/sad/worried 反复出现，孩子开始给情绪命名，并知道「有情绪很正常」。',
     '1) 情绪卡：画 today I feel ___，贴到脸上或日记里。\n2) 冷静角：找一个舒服角落，读 calm 书时练习深呼吸三次。\n3) 角色：演一种情绪，让对方猜。', 'opt',
     '情绪小怪兽：红黄蓝紫小毛球各代表一种情绪，围坐一圈，温暖水彩。'),

    # ---------------- 社会与人文 ----------------
    ('社会与人文', 'community', r'\bcommunitys?\b|\bcitys?\b|\btowns?\b|\bneighborhoods?\b|\bmaps?\b|\bplaces?\b|\bbuildings?\b|\bstreets?\b|\bparks?\b|\bschools?\b|\blibrarys?\b|\bhospitals?\b|\bstores?\b',   '🏘️ 社区与地点',
     '社区书讲学校/公园/医院/商店。一天读，school/park/shop 反复出现，孩子把「家附近有什么」画成地图。',
     '1) 地图：画家到公园的路线。\n2) 角色：演去图书馆借书。\n3) 标：给地图地点写英文。', 'strong',
     '社区地图横向：学校/公园/医院/商店排布，小路相连，暖色水彩。'),
    ('社会与人文', 'culture', r'\bcountrys?\b|\bcultures?\b|\bflags?\b|\bworlds?\b|\bchinas?\b|\bchineses?\b|\bamericans?\b|\bjapans?\b|\bjapaneses?\b|\bmexicos?\b|\bafricas?\b|\bindias?\b|\bindians?\b|\bbrazils?\b|\beuropes?\b',   '🌍 国家与文化',
     '国家文化书讲不同地方的旗/衣/食。一天读，flag/food/country 反复出现，孩子练「我和你不一样」。',
     '1) 国旗：画读到的国旗。\n2) 食物：对比两国早餐。\n3) 画：画一个国家符号。', 'strong',
     '世界小朋友对比：两国孩子各一格+国旗/服饰，多样肤色萌系。'),
    ('社会与人文', 'people', r'\bbiographys?\b|\blifes?\b|\bpresidents?\b|\bscientists?\b|\binventors?\b|\bartists?\b|\bwriters?\b|\bleaders?\b|\bheros?\b|\bfamouss?\b',   '🧑 人物',
     '人物书讲科学家/艺术家/领袖。一天读，work/help/make 反复出现，孩子理解「一个人能做大事」。',
     '1) 人物卡：做一本主角的时间线。\n2) 故事：讲一段他做的事。\n3) 画：画这位人物。', 'no',
     '（建议不做合成图：人物各异难同框，更适合做人物卡，不做生图。）'),
    ('社会与人文', 'job', r'\bjobs?\b|\bjobss?\b|\bworks?\b|\bworkers?\b|\bfarmers?\b|\bdoctors?\b|\bteachers?\b|\bpolices?\b|\bfirefighters?\b|\bnurses?\b|\bdrivers?\b|\bcooks?\b|\bvets?\b|community workers',   '👷 职业',
     '职业书讲医生/警察/农民/厨师。一天读，work/help/tool 反复出现，孩子把「大人做什么」认全。',
     '1) 扮演：演一本里的职业+道具。\n2) 工具：画职业工具。\n3) 采访：问家长「你做什么工作」。', 'strong',
     '职业墙：医生/警察/厨师/农夫同框拿工具，卡通职业装。'),
    ('社会与人文', 'transport', r'\btransportations?\b|\bcars?\b|\bbuss?\b|\btrains?\b|\bplanes?\b|\bboats?\b|\bships?\b|\bbikes?\b|\btrucks?\b|\bsubways?\b|\btravels?\b|\bairports?\b|\broads?\b|\bmotorcycles?\b',   '🚗 交通工具',
     '交通书讲车/船/飞机/火车。一天读，car/bus/train 反复出现，孩子练「怎么去、多快」。',
     '1) 分类：按 空/陆/海 分三堆。\n2) 比速：排快慢顺序。\n3) 画：画一种交通工具。', 'strong',
     '交通分类图：飞机/火车/汽车/船四格，按空陆海排，动感水彩。'),
    ('社会与人文', 'history', r'\bhistorys?\b|\bpasts?\b|long ago|\bancients?\b|\bthens?\b|\bnows?\b|\btimes?\b|\bcenturys?\b|\bchanges?\b',   '🕰️ 过去与现在',
     '过去现在书讲事物怎么变。一天读，old/new/past 反复出现，孩子练「以前 vs 现在」。',
     '1) 对比：画 过去/现在 两幅。\n2) 采访：问长辈小时候玩什么。\n3) 画：画一种变化。', 'no',
     '（建议不做合成图：对比类更适合两图并列，不做单合成图。）'),
    ('社会与人文', 'citizen', r'\bcitizenships?\b|\bgovernments?\b|\bvotes?\b|\blaws?\b|\brules?\b|\bleaders?\b|\brightss?\b|\bmoneys?\b|\beconomys?\b',   '🤝 好公民',
     '公民书讲规则/投票/助人。一天读，people/rule/help 反复出现，孩子理解「我是社区一员」。',
     '1) 海报：做「好公民」海报。\n2) 规则：定一条家里规则。\n3) 画：画助人场景。', 'no',
     '（建议不做合成图：偏抽象，不做生图。）'),

    # ---------------- 思维与创意 ----------------
    ('思维与创意', 'math', r'\bmaths?\b|\bnumbers?\b|\bcounts?\b|\badds?\b|\bsubtracts?\b|\bmultiplys?\b|\bdivides?\b|\bfractions?\b|\bsums?\b|\bmores?\b|\blesss?\b|\bequals?\b|\bgraphs?\b',   '🔢 数字与运算',
     '数学书讲数数/加减/多少。一天读，number/count/more 反复出现，孩子把「数」变成游戏。',
     '1) 数物：用豆/积木数一数。\n2) 比多少：两堆比 more/less。\n3) 画：画数字卡。', 'opt',
     '数字游乐场：123+算珠+比多少，彩色卡通。'),
    ('思维与创意', 'shape', r'\bshapes?\b|\bcircles?\b|\bsquares?\b|\btriangles?\b|\brectangles?\b|\bpatterns?\b|\bsymmetrys?\b|\blines?\b|\bcorners?\b|\bsides?\b|\bsorts?\b',   '🔷 形状与规律',
     '形状书讲圆/方/三角与规律。一天读，circle/square/pattern 反复出现，孩子出门「找形状」。',
     '1) 寻宝：在家找圆形/方形。\n2) 规律串：用珠子排 ABAB。\n3) 画：画形状/规律。', 'strong',
     '形状派对：圆/方/三角/星散落+规律串，撞色水彩。'),
    ('思维与创意', 'color', r'\bcolors?\b|\breds?\b|\bblues?\b|\byellows?\b|\bgreens?\b|\bbrowns?\b|\bmixs?\b|\bpaints?\b|\bprimarys?\b',   '🎨 颜色',
     '颜色书讲红黄蓝与混色。一天读，red/blue/yellow 反复出现，孩子把「混出橙绿紫」试出来。',
     '1) 调色：红+黄=橙 做实。\n2) 找色：家里找三原色物。\n3) 画：画色轮。', 'strong',
     '调色盘图：红黄蓝三原色+混出橙绿紫，溅色水彩。'),
    ('思维与创意', 'size', r'\bsizes?\b|\bbigs?\b|\bsmalls?\b|\blongs?\b|\bshorts?\b|\btalls?\b|\bheavys?\b|\blights?\b|\bwides?\b|\bnarrows?\b|\bthicks?\b|\bthins?\b|\bmeasures?\b',   '📏 大小',
     '大小书讲大/小/长/短。一天读，big/small/long 反复出现，孩子练「排一排」。',
     '1) 排队：把玩具按大小排。\n2) 比：用身体比 tall/short。\n3) 画：画大小对比。', 'opt',
     '大小阶梯：动物/杯子由小到大排列，渐变水彩。'),
    ('思维与创意', 'opposite', r'\bopposites?\b|\boppositess?\b|\bconcepts?\b|\bsames?\b|\bdifferents?\b|\bcompares?\b|\bpairs?\b|\bups?\b|\bdowns?\b|\bfasts?\b|\bslows?\b',   '🔁 反义词',
     '反义词书讲 大/小、上/下、快/慢。一天读，一对对词同时出现，孩子一次认两组相对概念。',
     '1) 配对卡：画反义词卡玩配对。\n2) 动作：用身体演 up/down。\n3) 画：画一对反义词。', 'opt',
     '反义词对对碰：大/小、上/下、快/慢各一格，对比萌趣。'),
    ('思维与创意', 'art', r'\bdraws?\b|\bpaints?\b|\bmusics?\b|\bdances?\b|\bcrafts?\b|\bsings?\b|\bsongs?\b|\binstruments?\b|\bcreatives?\b|\bmakes?\b',   '🎶 艺术与创作',
     '艺术书讲画/唱/做。一天读，color/shape/music 反复出现，孩子把书当创作灵感。',
     '1) 临摹：照书做一幅小创作。\n2) 演奏：用家中物当乐器。\n3) 画：画/做一件作品。', 'no',
     '（建议不做合成图：创作重动手，不做生图。）'),
]

# 标题级覆盖：正则只看关键词，不懂整句话意；这些书名语义明确，强制归位。
# key: 归一化后小写书名；value: (family, subtopic_key)
OVERRIDES = {
    'calming down': ('身体与健康', 'emotion'),
    'what makes me happy?': ('身体与健康', 'emotion'),
}

# LLM 语义分类主映射（按 id + 标题 复合键），由 llm_map.json 提供；正则仅作兜底。
# 复合键 = book['id'] + '\x00' + book['title']，可唯一区分源数据中同 id 的不同书。
LLM_MAP = {}
_LLM_PATH = os.path.join(HERE, 'llm_map.json')
if os.path.exists(_LLM_PATH):
    LLM_MAP = json.load(open(_LLM_PATH, encoding='utf-8'))

# 建 (theme,key)->内容 与 匹配表
CLUSTER = {}
MATCHERS = []
for theme, key, kw, label, intro, ext, verdict, desc in SUBTOPICS:
    CLUSTER[(theme, key)] = dict(label=label, intro=intro, ext=ext, verdict=verdict, desc=desc)
    MATCHERS.append((theme, key, re.compile(kw)))

def classify(theme, title):
    nt = re.sub(r'[^a-z0-9 ]', ' ', title.lower()).strip()
    if nt in OVERRIDES:
        return OVERRIDES[nt]
    for theme_m, key, rg in MATCHERS:
        if rg.search(nt):
            return theme_m, key
    return theme, 'other'

# 通用「其他」兜底内容（按族）
OTHER = {
    '生命世界': ('🌿 生命其他', '这几本都属生命科学但主题较散，可挑孩子最感兴趣的一本深读，其余作泛读。', '1) 挑一本画关键事物。\n2) 用书中词造一句英文。\n3) 找生活里的例子。', 'no', '（主题散，不建议合成图。）'),
    '地球与宇宙': ('🌍 地球其他', '这几本都讲自然世界但角度不同，建议各读一本、用「今天天气/在外面看到什么」串起来。', '1) 出门观察对应现象。\n2) 画看到的自然事物。\n3) 说一句英文。', 'no', '（主题散，不建议合成图。）'),
    '物质与能量': ('⚡ 科学其他', '这几本偏科学现象，建议各做一件小实验，不强行合并。', '1) 选一本做实验。\n2) 记现象。\n3) 画装置。', 'no', '（偏实验，不建议合成图。）'),
    '身体与健康': ('💪 健康其他', '这几本讲身体或健康但角度不同，各读一本、用「我今天做了什么」串。', '1) 演一个健康动作。\n2) 画身体相关。\n3) 打卡一天。', 'no', '（主题散，不建议合成图。）'),
    '社会与人文': ('🏙️ 社会其他', '这几本讲人或社会但角度不同，建议各做一张小卡。', '1) 做人物/地点卡。\n2) 讲给大人听。\n3) 画场景。', 'no', '（主题散，不建议合成图。）'),
    '思维与创意': ('🧩 思维其他', '这几本偏思维/逻辑，建议各玩一个小游戏。', '1) 玩书中游戏。\n2) 数/比/排。\n3) 画规律。', 'no', '（偏游戏，不建议合成图。）'),
}

def build():
    # 级别内书的出现顺序（保持稳定）
    order = {b['id']: i for i, b in enumerate(books)}
    levels = {}
    for b in books:
        lv = b['level']
        if lv == 'SAZ':
            continue
        if b.get('type') != 'NF':
            continue
        theme = b.get('theme') or '生命世界'
        comp = b['id'] + '\x00' + b['title']
        if comp in LLM_MAP:
            t, key = LLM_MAP[comp]
        else:
            t, key = classify(theme, b['title'])
        levels.setdefault(lv, {}).setdefault((t, key), []).append(b)
    nfDays = {}
    for lv, groups in levels.items():
        days = []
        # 按族顺序，再按组内首书顺序
        fam_rank = {f: i for i, f in enumerate(FAM_ORDER)}
        items = sorted(groups.items(), key=lambda kv: (fam_rank.get(kv[0][0], 9), min(order[b['id']] for b in kv[1])))
        for di, ((t, key), blist) in enumerate(items, 1):
            if key == 'other':
                label, intro, ext, verdict, desc = OTHER.get(t, OTHER['生命世界'])
            else:
                c = CLUSTER[(t, key)]
                label, intro, ext, verdict, desc = c['label'], c['intro'], c['ext'], c['verdict'], c['desc']
            blist_sorted = sorted(blist, key=lambda b: order[b['id']])
            days.append({
                'day': di,
                'topic': label,
                'theme': t,
                'intro': intro,
                'books': [{'id': b['id'], 'title': b['title'], 'level': b['level']} for b in blist_sorted],
                'ext': ext,
                'img': {'verdict': verdict, 'desc': desc},
            })
        nfDays[lv] = days
    return nfDays

nfDays = build()
LIB['nfDays'] = nfDays
json.dump(LIB, open(os.path.join(HERE, 'raz_library.json'), 'w', encoding='utf-8'),
          ensure_ascii=False, separators=(',', ':'))

tot_days = sum(len(v) for v in nfDays.values())
tot_books = sum(len(d['books']) for v in nfDays.values() for d in v)
print('levels:', len(nfDays), '| reading days:', tot_days, '| books placed:', tot_books)
for lv in sorted(nfDays):
    print('  %s: %d 天' % (lv, len(nfDays[lv])))
