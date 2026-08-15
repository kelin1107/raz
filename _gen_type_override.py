import json, re, os
HERE = os.path.dirname(os.path.abspath(__file__))
# 复刻 gen_books 的关键词（与运行时一致）
ANIMALS=["animal","cat","dog","bird","fish","lion","tiger","bear","elephant","monkey","rabbit","horse","cow","pig","sheep","duck","chick","frog","snake","mouse","fox","wolf","deer","whale","shark","penguin","bee","ant","butterfly","spider","owl","eagle","seal","otter","bat","crab","turtle","dinosaur","insect","zoo","pet","farm","pony","kitten","puppy","cub","fawn","calf"]
PLANTS=["plant","tree","flower","seed","leaf","grass","garden","rose","pine","fern","moss","root","stem","fruit","vegetable","apple","pumpkin","bean","corn","wheat","oak","maple","blossom"]
EARTH=["earth","weather","climate","sun","moon","star","planet","space","solar","rock","mountain","volcano","water","ocean","atmosphere","wind","storm","season","hurricane","glacier","fossil","earthquake","soil","river","lake","pond","cloud","rain","snow","ice","tide","coral","reef","desert","forest","wetland","prairie","biome","landform","mineral","canyon","island","beach"]
BODY=["body","health","sense","brain","bone","muscle","heart","blood","breath","disease","nutri","medicine","teeth","tooth","skin","sleep","organ","nerv","digest","immune","germ","virus","hunger","taste","smell","touch","hear","see","feel","eye","ear","hand","foot"]
FICTION_MARK=["goldilocks","three little","three pigs","little red riding","lion and the mouse","wolf in sheep","bonk","monster","magic","fairy tale","fairy","gnome","troll","unicorn","dragon","pirate","princess","knight","wizard","witch","ghost","spooky","creepy","the greedy","the silly","santa","elves","curious george","cinderella","sleeping beauty","snow white","gingerbread"]
NF_TOPIC=ANIMALS+PLANTS+EARTH+BODY+["national park","state park","museum","aquarium","how to","build","robot","machine","tool","soccer","basketball","baseball","swimming","volcano","earthquake","dinosaur","fossil","ocean","river","mountain","forest","desert","reef","insect","bird","fish","mammal","reptile","plant","tree","flower","seed","body","brain","energy","force","motion","light","sound","magnet","electric","matter","pollution","recycle"]
CIVICS=["election","vote","voting","ballot","president","government","democracy","constitution","congress","senate","mayor","citizen","citizens","law","court","justice","rights","freedom","memorial day","independence day","veterans day","labor day","earth day","presidents day","inauguration","flag day","constitution day","civil war","revolution","ancient","empire","pyramid","temple","tomb","ruins","statue","monument","map","geography","culture","tradition","festival","celebrat","history","historic","invent","inventor","invention","museum","library","community","neighbor","school","mail","post","money","bank","calendar","clock","time","holiday","holidays"]
EXCLUDE_FICTION={"zots goes to school","the sometimes friend","the mystery of granville library","the school versus james holt",
    "a selection from robinson crusoe","the creature constitution","following the map",
    "it u0027s time for the park","statues in the sand","mythical creatures of ancient greece"}
def _norm_title(s):
    s=s.lower(); s=re.sub(r"[^a-z0-9 ]"," ",s); return re.sub(r"\s+"," ",s).strip()
def is_nf_old(t):
    if any(k in t for k in FICTION_MARK): return False
    if any(k in t for k in NF_TOPIC): return True
    return False
def is_nf_new(t):
    if any(k in t for k in FICTION_MARK): return False
    if any(k in t for k in NF_TOPIC): return True
    if any(k in t for k in CIVICS): return True
    return False
# 复刻 build() 读取源：D/E 直接，F-Z2 走 fj_map
fj_map={"D":"level_d_clean.json","E":"level_e_clean.json","F":"level_f_clean.json","G":"level_g_clean.json","H":"level_h_clean.json","I":"level_i_clean.json","J":"level_j_clean.json","K":"level_k_clean.json","L":"level_l_clean.json","M":"level_m_clean.json","N":"level_n_clean.json","O":"level_o_clean.json","P":"level_p_clean.json","Q":"level_q_clean.json","R":"level_r_clean.json","S":"level_s_clean.json","T":"level_t_clean.json","U":"level_u_clean.json","V":"level_v_clean.json","W":"level_w_clean.json","X":"level_x_clean.json","Y":"level_y_clean.json","Z":"level_z_clean.json","Z1":"level_z1_clean.json","Z2":"level_z2_clean.json"}
flips={}
for lvl,fname in fj_map.items():
    fp=os.path.join(HERE,fname)
    if not os.path.exists(fp): continue
    for num,title in json.load(open(fp,encoding="utf-8")):
        t=title.lower()
        # 当前类型（与 gen_books tag_generic 一致）
        cur="NF" if (is_nf_old(t)) else "F"
        # tag_generic 实际: is_nf = NF_MARK or _title_is_nf(t)；这里近似用 is_nf_old
        if cur=="F" and is_nf_new(t) and not is_nf_old(t):
            n=_norm_title(title)
            if n in EXCLUDE_FICTION: continue
            flips[n]="NF"
print("TYPE_OVERRIDE 条数(源文件生成): %d" % len(flips))
for k in sorted(flips):
    print('    "%s": "NF",' % k)
