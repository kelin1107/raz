# -*- coding: utf-8 -*-
"""把官方 Science A-Z 20 个 unit 页的 [书名->档位] 映射应用到 level_saz_clean.json。
- G3-4 书查 TIER34，G5-6 书查 TIER56。
- 仅给「当前只有年级段（G3-4 / G5-6）」的书补 LOW/MID/HIGH；已有精确档位的保留。
- 孤儿书（官方 unit 里不存在，如 Sound/Plasma/Metallurgy 等声音物质类）维持年级段，如实不臆测。
- 单位主题书（Unit NF，同名三档）若 xiaohuasheng 未给档则保持年级段。
"""
import json, re, os

HERE = os.path.dirname(os.path.abspath(__file__))

# ---- G3-4 书名 -> 档位（来自官方 10 个 unit 页，已剔除同名三档的 Unit NF 书）----
TIER34 = {
 "extreme amphibians":"LOW","mammals of the trees":"MID","our wild pets":"MID",
 "vertebrates of madagascar":"MID","animals in groups":"HIGH","king cobra":"LOW",
 "flying dragon":"MID","galapagos tortoise":"MID","nile crocodile":"MID",
 "tuatara":"MID","panther chameleon":"HIGH","caecilian":"LOW",
 "silky spiderwebs":"LOW","anemones":"MID","annelids: world of worms":"MID",
 "invertebrate fossils":"MID","mouthparts for every meal":"HIGH","sally lightfoot crab":"LOW",
 "arizona bark scorpion":"MID","giant african millipede":"MID","leaf insect":"MID",
 "mexican redknee tarantula":"MID","bombardier beetle":"HIGH","tardigrades":"LOW",
 "traveling seeds":"LOW","deforestation":"MID","how a flower gets its color":"MID",
 "pollinators":"MID","succulents":"MID","air plants":"HIGH","horsetail":"LOW",
 "ginkgo":"MID","orchid":"MID","watermelon":"HIGH","moss":"LOW",
 "exercise: get moving!":"LOW","asthma":"MID","skin: it has you covered":"MID",
 "your hardworking heart":"MID","sports injuries":"HIGH","ribs":"LOW",
 "hands and feet":"MID","skull":"MID","spine":"HIGH","cartilage":"LOW",
 "the mermaid's purse":"LOW","inheriting stripes":"MID","life in the pouch":"MID",
 "maggots, grubs, and nymphs":"MID","pollywogs and friends":"MID","hot and cold reptiles":"HIGH",
 "veligers and polyps":"HIGH","frogs":"LOW","elephants":"MID","moths":"MID",
 "parrots":"MID","trees":"MID","barnacles":"HIGH",
 "bloomin' algae":"LOW","clever camouflage":"MID","extreme environments":"MID",
 "life along the colorado":"MID","clever animals":"HIGH","habitats then and now":"HIGH",
 "animals of the florida keys":"LOW","animals of the midwestern prairie":"MID",
 "animals of the namib desert":"MID","animals of papua new guinea":"HIGH",
 "fog":"LOW","ice storms":"MID","mountain winds":"MID","storm chasers":"MID",
 "thunderstorms":"HIGH","anemometer":"LOW","barometer":"MID","weather radar":"MID",
 "weather satellite":"HIGH","quicksand!":"LOW","diamonds":"MID","fossils":"MID",
 "moon rocks":"MID","minerals in a computer":"HIGH","shale":"LOW","basalt":"MID",
 "gneiss":"MID","granite":"MID","marble":"MID","conglomerate":"HIGH","chalk":"LOW",
 "missions to mars":"LOW","galileo's moons":"MID","the asteroid belt":"MID",
 "the outer solar system":"MID","comets":"HIGH","saturn":"LOW","earth":"MID",
 "jupiter":"MID","mars":"MID","neptune":"MID","venus":"HIGH",
 "the mole machine":"LOW","let's ride a bike!":"MID","waterwheels and windmills":"MID",
 "wrecking ball vs. strong wall":"MID","spaceship motions and deep, deep oceans":"HIGH",
 "ferris wheels":"LOW","can openers":"MID","sailboats":"MID","clocks and watches":"HIGH",
 "the heat of kilauea":"LOW","campfire science":"MID","get warm, stay warm!":"MID",
 "science friction":"MID","get cool, stay cool!":"HIGH","wildfires":"LOW","geysers":"MID",
 "sea vents":"MID","volcanoes":"HIGH","body heat":"LOW",
 # -- Solids, Liquids, and Gases (unit/57) --
 "gases in your world":"LOW","changing states":"MID","plasma: the fourth state":"MID",
 "strange fluids":"MID","metallurgy":"HIGH",
 # -- Sound (unit/4) --
 "shhh!":"LOW","animal ears":"MID","making music":"MID","seeing sound":"MID","animal sounds":"HIGH",
}

# ---- G5-6 书名 -> 档位（来自官方 10 个 unit 页）----
TIER56 = {
 "plants vs. animals":"LOW","apex predators":"MID","broken chains":"MID",
 "jurassic food chains":"MID","micro food chains":"HIGH","sonoran desert":"LOW",
 "african savanna":"MID","amazon rainforest":"MID","antarctica":"MID",
 "florida everglades":"MID","yellowstone national park":"HIGH","urban habitat":"LOW",
 "emperors of the ice":"LOW","darwin's finches":"MID","plant behavior":"MID",
 "the curious case of the peppered moth":"MID","dogs by design":"HIGH","carnivorous plants":"LOW",
 "corpse flower":"MID","hammerhead shark":"MID","kiwi":"MID","naked mole rat":"MID",
 "horseshoe crab":"HIGH","monarch butterfly":"LOW","hydroponics":"LOW","eating insects":"MID",
 "rainbow on your plate":"MID","sugar: too much of a good thing?":"MID","how to build a tree":"HIGH",
 "salad":"LOW","pasta":"MID","waffles":"MID","kung pao chicken with rice":"HIGH","multivitamins":"MID",
 "incredible eyes":"LOW","parasites":"MID","transport systems in plants":"MID",
 "you've got a lot of nerve!":"MID","fighting infection!":"HIGH",
 "grasshopper":"LOW","bee hummingbird":"MID","sidewinder":"MID","bat ray":"HIGH","sea slug":"LOW",
 "galaxies far, far away":"LOW","nebulae":"MID","powerful telescopes":"MID",
 "the voyager program":"MID","exoplanets":"HIGH","red giant":"LOW","blue supergiant":"MID",
 "red dwarf":"MID","white dwarf":"MID","yellow dwarf":"MID","neutron star":"HIGH",
 "seasons and climate":"LOW","curtains of light":"MID","el niño and la niña":"MID",
 "going up!":"MID","climate change":"HIGH","temperate climate zone: new zealand":"LOW",
 "tropical climate zone: indonesia":"MID","polar climate zone: greenland":"MID",
 "dry climate zone: egypt":"HIGH","underwater volcanoes":"LOW","landslides":"LOW",
 "earthquakes":"MID","the great lakes":"MID","waterfalls":"MID","what's inside planet earth?":"HIGH",
 "sea stacks":"LOW","hoodoos":"MID","mesas and buttes":"MID","sinkholes":"MID","yardangs":"MID",
 "the matterhorn":"HIGH","alluvial fans":"LOW","water for the people":"LOW","hailstorms":"MID",
 "life in the current":"MID","the cryosphere":"MID","tsunami!":"HIGH","mississippi watershed":"LOW",
 "amazon watershed":"MID","nile watershed":"MID","yangtze watershed":"HIGH","caspian sea":"LOW",
 "the science of lemonade":"LOW","dmitri's table":"MID","the chemistry of art":"MID",
 "the science of baking":"MID","curious marie curie":"HIGH","kitchen chemistry":"LOW",
 "digestion":"MID","fire":"MID","nature's glow":"MID","plant chemistry":"MID","rockets":"HIGH",
 "blackout!":"LOW","battle of the currents":"MID","electrical safety":"MID","remote control":"MID",
 "setting up circuits":"HIGH","drill":"LOW","electric toothbrush":"MID","vacuum cleaner":"MID",
 "toy helicopter":"HIGH",
 # -- Force and Motion (unit/60) --
 "soccer":"LOW","gravity in the solar system":"MID","racecars":"MID","roller coasters":"MID",
 "perpetual motion: fact or fiction?":"HIGH",
 # -- Energy Resources (unit/68) --
 "green towns":"LOW","before the gas pump":"MID","now we're cooking!":"MID","river power":"MID",
 "bioenergy":"HIGH","tidal power":"LOW","biofuel":"MID","hydroelectric power":"MID",
 "solar energy":"MID","wind energy":"MID","geothermal energy":"HIGH",
 # -- Light Energy (unit/9) --
 "luminescence in nature":"LOW","light pollution":"MID","light and art":"MID","lighting our world":"MID",
 "lasers":"HIGH","visible light":"LOW","infrared radiation":"MID","radio waves":"MID","gamma rays":"HIGH",
}

# 已知数据 typo 修正（归一化前替换）
TYPO = {
 "vertebrates of madagasear":"vertebrates of madagascar",
 "how a flower gets lts color":"how a flower gets its color",
 "sports lnjuries":"sports injuries",
 "quicksand":"quicksand!",
 "emperors of the lce":"emperors of the ice",
 "el nino and la niña":"el niño and la niña",
 "how to build a tree high":"how to build a tree",
}

def clean(s):
    s = s.strip().lower()
    s = re.sub(r"\s+", " ", s)
    return s.rstrip(" !?.")

def norm(t):
    t = t.strip()
    t = TYPO.get(t.lower(), t)
    return clean(t)

TIER34 = {clean(k): v for k, v in TIER34.items()}
TIER56 = {clean(k): v for k, v in TIER56.items()}

def main():
    fp = os.path.join(HERE, "level_saz_clean.json")
    data = json.load(open(fp, encoding="utf-8"))
    changed = 0
    still_grade = []  # 仍为纯年级段的（孤儿 + Unit NF 书）
    for r in data:
        num, title, band = r
        if num <= 99:
            continue  # GK-G2 已精确
        grade = "G3-4" if 100 <= num <= 181 else "G5-6"
        # 已有精确档位则保留
        if band in ("G3-4LOW","G3-4MID","G3-4HIGH","G5-6LOW","G5-6MID","G5-6HIGH"):
            continue
        if band != grade:
            continue
        key = norm(title)
        m = TIER34.get(key) if grade == "G3-4" else TIER56.get(key)
        if m:
            r[2] = grade + m
            changed += 1
        else:
            still_grade.append((num, title))
    json.dump(data, open(fp, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print("已补档位本数:", changed)
    print("仍为纯年级段(未匹配到官方档位)的本数:", len(still_grade))
    print("---- 未匹配样本 ----")
    for n, t in still_grade:
        print(n, t)
    # 统计
    from collections import Counter
    print("---- 应用后 band 分布 ----")
    print(dict(Counter(r[2] for r in data)))

if __name__ == "__main__":
    main()
