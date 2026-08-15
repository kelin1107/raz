import json, re
lib = json.load(open('raz_library.json'))
# 复刻现有关键词表（从 gen_books.py 提取的逻辑）
ANIMALS = ["animal","cat","dog","bird","fish","lion","tiger","bear","elephant","monkey","rabbit",
    "horse","cow","pig","sheep","duck","chick","frog","snake","mouse","fox","wolf","deer","whale",
    "shark","penguin","bee","ant","butterfly","spider","owl","eagle","seal","otter","bat","crab",
    "turtle","dinosaur","insect","zoo","pet","farm","pony","kitten","puppy","cub","fawn","calf"]
PLANTS = ["plant","tree","flower","seed","leaf","grass","garden","rose","pine","fern","moss","root",
    "stem","fruit","vegetable","apple","pumpkin","bean","corn","wheat","oak","maple","blossom"]
EARTH = ["earth","weather","climate","sun","moon","star","planet","space","solar","rock","mountain",
    "volcano","water","ocean","atmosphere","wind","storm","season","hurricane","glacier","fossil",
    "earthquake","soil","river","lake","pond","cloud","rain","snow","ice","tide","coral","reef",
    "desert","forest","wetland","prairie","biome","landform","mineral","canyon","island","beach"]
BODY = ["body","health","sense","brain","bone","muscle","heart","blood","breath","disease","nutri",
    "medicine","teeth","tooth","skin","sleep","organ","nerv","digest","immune","germ","virus",
    "hunger","taste","smell","touch","hear","see","feel","eye","ear","hand","foot"]
FICTION_MARK = ["goldilocks","three little","three pigs","little red riding","lion and the mouse",
    "wolf in sheep","bonk","monster","magic","fairy tale","fairy","gnome","troll","unicorn","dragon",
    "pirate","princess","knight","wizard","witch","ghost","spooky","creepy","the greedy","the silly",
    "santa","elves","curious george","cinderella","sleeping beauty","snow white","gingerbread"]
NF_TOPIC = ANIMALS + PLANTS + EARTH + BODY + ["national park","state park","museum","aquarium","how to",
    "build","robot","machine","tool","soccer","basketball","baseball","swimming","volcano","earthquake",
    "dinosaur","fossil","ocean","river","mountain","forest","desert","reef","insect","bird","fish",
    "mammal","reptile","plant","tree","flower","seed","body","brain","energy","force","motion","light",
    "sound","magnet","electric","matter","pollution","recycle"]

# 拟新增的公民/历史/节日 NF 词表
CIVICS = ["election","vote","voting","ballot","president","government","democracy","constitution",
    "congress","senate","mayor","citizen","citizens","law","court","justice","rights","freedom",
    "memorial day","independence day","veterans day","labor day","earth day","presidents day",
    "inauguration","flag day","constitution day","civil war","revolution","ancient","empire",
    "pyramid","temple","tomb","ruins","statue","monument","map","geography","culture","tradition",
    "festival","celebrat","history","historic","invent","inventor","invention","museum","library",
    "community","neighbor","school","mail","post","money","bank","calenda r","clock","time",
    "calendar","holiday","holidays"]

def is_nf_old(t):
    if any(k in t for k in FICTION_MARK): return False
    if any(k in t for k in NF_TOPIC): return True
    return False
def is_nf_new(t):
    if any(k in t for k in FICTION_MARK): return False
    if any(k in t for k in NF_TOPIC): return True
    if any(k in t for k in CIVICS): return True
    return False

# 只看 D+（tag_generic 自动判定的）书
flip_f_to_nf=[]; flip_nf_to_f=[]
for b in lib['books']:
    lvl=b['level']
    if lvl in ('aa','A','B','C','SAZ'): continue
    t=b['title'].lower()
    old=is_nf_old(t); new=is_nf_new(t)
    cur=b['type']
    if cur=='F' and new and not old:
        flip_f_to_nf.append((b['id'],lvl,b['title']))
    if cur=='NF' and old and not new:
        flip_nf_to_f.append((b['id'],lvl,b['title']))

print('拟新增词表将把 F->NF 翻转为 NF 的书: %d 本' % len(flip_f_to_nf))
for x in flip_f_to_nf:
    print('  ',x)
print('\n拟误伤(NF->F, 应不会发生): %d 本' % len(flip_nf_to_f))
for x in flip_nf_to_f:
    print('  ',x)
