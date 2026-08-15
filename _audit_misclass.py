import json
with open('raz_library.json','r',encoding='utf-8') as f:
    data=json.load(f)

animals={"orca","coyote","wolf","fox","bear","deer","horse","cow","pig","chicken","duck","owl","insect","snake","turtle","lizard","worm","ant","butterfly","monkey","lion","tiger","elephant","rabbit","mouse","rat","goat","sheep","farm","zoo","ocean","sea","pond","forest","desert","polar","arctic","jungle","reef","coral","dinosaur","otter","reindeer","sloth","kangaroo","loon","tadpole","pet","creature","creatures","hop","hops","hopping","whale","frog","bee","fish","swamp","bat","cat","dog","bird","robin","robins","penguin","shark","octopus","crab","seal","eagle","hawk","crow","beaver","raccoon","squirrel","skunk","porcupine","hedgehog","moose","pouch","joey","marsupial","platypus","koala","wombat","meerkat","puffin","pelican","seagull","heron","flamingo","swan","goose","turkey","hummingbird","woodpecker","raven","magpie","stork","crane","albatross","sealion","walrus","manatee","dolphin","porpoise","narwhal","beluga","squid","jellyfish","starfish","seahorse","lobster","shrimp","oyster","clam","snail","slug","beetle","ladybug","spider","scorpion","centipede","millipede","caterpillar","moth","dragonfly","grasshopper","cricket","mantis","fly","mosquito","bee","ant","wasp","hornet","chameleon","iguana","gecko","tortoise","alligator","crocodile","toad","salamander","newt"}
plants={"plant","tree","flower","seed","leaf","garden","grass","vegetable","fruit","pumpkin","bean","grow","root","strawberry","berry","carve","lemonade","apple","orange","banana","corn","wheat","rice","tomato","potato","onion","carrot","cabbage","lettuce","mushroom","fungus","algae"}
earth={"weather","fog","cloud","rain","snow","wind","sun","moon","star","space","earth","rock","mountain","volcano","season","spring","summer","fall","winter","water","ice","storm","sky","light","shadow","solar","planet","fire","heat","cold","temperature","tide","blastoff","thunder","lightning","hurricane","tornado","flood","drought","rainbow","sunset","sunrise","geology","mineral","crystal","sand","soil","cave","canyon","valley","river","lake","pond","ocean","sea","beach","coast","island","continent","glacier","iceberg","volcanic","lava","magma","earthquake","tsunami","erosion","weathering","atmosphere","ozone"}
body={"teeth","tooth","brush","hand","wash","body","healthy","sick","eye","ear","nose","food","eat","breakfast","lunch","dinner","exercise","sleep","feeling","calm","hospital","doctor","bath","hair","clothes","wear","shoes","snoring","bed","tired","hug","scare","scares","heart","blood","brain","muscle","bone","skin","finger","toe","foot","feet","leg","arm","head","face","mouth","tongue","stomach","digest","breath","lung","voice","hear","see","smell","taste","touch","feel","emotion","angry","happy","sad","scared","worried","nervous","tired","sick","ill","pain","hurt","medicine","dentist","nurse"}

bad=[]
for b in data['books']:
    if b.get('level') in ['aa','A','B','C']:
        continue
    t=b.get('title','').lower()
    th=b.get('theme','')
    if th in ['社会与人文','思维与创意']:
        hits=[]
        for w in animals:
            if w in t: hits.append(('animal',w))
        for w in plants:
            if w in t: hits.append(('plant',w))
        for w in earth:
            if w in t: hits.append(('earth',w))
        for w in body:
            if w in t: hits.append(('body',w))
        if hits:
            bad.append((b['id'],b['title'],th,b.get('type'),list(set(hits))[:5]))
print(f"Found {len(bad)} D+ books in 社会/思维 with nature/body keywords")
for x in bad[:120]:
    print(x)
