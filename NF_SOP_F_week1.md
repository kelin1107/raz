# NF 主题周 · 内容大纲 + 画面指令 SOP

> 用途：给定「级别 + 周次（或编号列表）」，产出每本书的 **内容大纲（中文）** 与 **画面内容指令（英文 ImageGen prompt）**。
> 后续两步（本 SOP 不执行）：① ImageGen 按画面指令出插画（风格由公共风格块锁定，稳定）；② HTML/PDF 用清晰字体排版文字（中英文都不糊）。
> 合规：书名/元数据参考 RAZ（非官方、研究/教学用途）；大纲为衍生内容，不抄书籍正文。

---

## 一、SOP 流程（输入 → 输出）

**输入**
- `级别`：aa / A / B / … / Z2（必填）
- `周次`：第 N 周；或不填→默认第 1 周；或给 `编号列表`（如 F03,F04,F05）
- 可选 `主题族`：生命世界 / 地球与宇宙 / 身体与健康 / 社会与人文 / 思维与创意 / 物质与能量（限定取书范围）

**取书规则**（与网站 NF 周计划一致）
1. 取该级别 `type=NF` 的全部书，按 6 主题族分组。
2. 周循环：第 1 周=生命世界族前 5 本；第 2 周=地球与宇宙族前 5 本；…第 7 周回到生命世界族第 6–10 本（第二轮），依此类推。
3. 某族不足 5 本则该周取实际数量。

**每本书输出两项**
- **内容大纲（中文）**：书名(中译+原文) · 级别 · 主题族 · 一句话主旨 · 3 个核心知识点 · 4 岁娃读法/互动 · 1 个 Fun Fact · RAZ 编号
- **画面内容指令（英文）**：`[公共风格块]` + `[本书主题画面]`（含"不含可读正文文字"约束）

---

## 二、公共画面风格块（raz-style-illustrator，每次复用，保证风格稳定）

```
A hand-drawn children's educational infographic illustration in watercolor and ink style,
reminiscent of Reading A-Z (RAZ) science posters and worksheets.
Watercolor wash backgrounds with visible brush texture and soft color bleeding; black ink
outlines on all elements; slightly imperfect organic hand-drawn quality; textured cream
paper background with subtle grain. Warm inviting pastel base: cream (#FFF8E7), soft sage
green, sky blue, warm yellow; nature accents terracotta, olive, coral, periwinkle. Cute
rounded friendly proportions, large heads, expressive faces. Diverse child explorer
character(s) present for scale/relatability. Cheerful curiosity mood; generous negative
space so text areas stay readable; landscape/horizontal composition.
IMPORTANT: Do NOT render any readable body text, sentences, or labels. Any text-like marks
are abstract decorative scribbles only — clean typography is added in a separate step.
```

---

## 三、F 级 · 第 1 周（生命世界 · 5 本）

> 取书：F 级 NF 共 44 本；生命世界族前 5 本 = F03 / F04 / F05 / F06 / F08。

### F03 · In a Chinese Garden（中国花园）
**内容大纲**
- 级别 F · 生命世界 · 编号 F03
- 主旨：带孩子逛一座中国风花园，看池塘里的鱼、竹子、莲花和飞来飞去的昆虫，理解"植物和动物在花园里一起生长"。
- 核心知识点：
  1. 花园里有不同的动物（鱼、鸟、昆虫）和植物（竹、莲、花）。
  2. 植物需要阳光和水才能 grow（生长）。
  3. 中国花园把自然和人的设计（桥、亭子）放在一起。
- 4 岁娃读法：指图说"这是鱼/这是竹子"；种一颗豆子观察生长。
- Fun Fact：花园池塘里的锦鲤能活几十年。

**画面内容指令（ImageGen）**
```
[公共风格块]
TOPIC: A Chinese-style garden with pond, koi fish, bamboo, lotus, and a dragonfly.
Include: a diverse child explorer in simple Chinese-style clothing looking at the pond;
gentle koi fish with friendly faces swimming among lily pads; tall bamboo stalks; a pink
lotus bloom; a small stone bridge in background. Soft water ripples, calm cheerful nature
scene. No readable text.
```

### F04 · Night Animals（夜行动物）
**内容大纲**
- 级别 F · 生命世界 · 编号 F04
- 主旨：有些动物白天睡觉、晚上出来活动（猫头鹰、蝙蝠、负鼠、豹），它们用大眼睛、尖耳朵在黑暗里找路。
- 核心知识点：
  1. 夜行动物在夜里活跃、白天躲起来睡觉。
  2. 它们用大眼睛、好耳朵、鼻子在黑暗里认路。
  3. 不同夜行动物吃不同东西（虫、果、小动物）。
- 4 岁娃读法：白天/黑夜角色扮演；用手电筒玩"夜间寻宝"。
- Fun Fact：猫头鹰的头能转到很大的角度看身后。

**画面内容指令（ImageGen）**
```
[公共风格块]
TOPIC: Night forest with nocturnal animals — owl, bat, opossum, leopard — awake at night.
Include: a smiling moon and a few stars; a cute owl with huge round eyes on a branch; a
small bat with friendly face flying; a leopard with big eyes peeking from bushes; a diverse
child explorer holding a flashlight looking up in wonder. Dark-but-warm night palette
(deep blue with warm lantern glow). No readable text.
```

### F05 · Some Birds Go（鸟儿去哪儿）
**内容大纲**
- 级别 F · 生命世界 · 编号 F05
- 主旨：不同鸟用不同方式移动——飞、游、走、跳；用 "birds go up / down / around" 的句式认识动作。
- 核心知识点：
  1. 大多数鸟会飞（wings 翅膀）。
  2. 有些鸟会游泳（企鹅、鸭）而不会飞。
  3. 有些鸟走路或跳（鸡、鸵鸟）。
- 4 岁娃读法：模仿鸟飞/游/走的动作游戏；读 "go" 句式做肢体反应。
- Fun Fact：企鹅是鸟，但不会飞，会游泳。

**画面内容指令（ImageGen）**
```
[公共风格块]
TOPIC: Different birds moving in different ways — one flying, one swimming, one walking.
Include: a cheerful bird with outstretched wings flying up; a penguin paddling in water; a
chicken hopping on ground; a diverse child explorer imitating the bird movements with arms
out. Sky-meets-pond scene, playful motion lines (swirls/arrows as decoration only). No
readable text.
```

### F06 · Animal Dads（动物爸爸）
**内容大纲**
- 级别 F · 生命世界 · 编号 F06
- 主旨：动物爸爸也会照顾宝宝——企鹅爸爸孵蛋、海马爸爸用育儿袋、大猩猩爸爸背娃，体现"爸爸的爱"。
- 核心知识点：
  1. 不只妈妈，爸爸也照顾宝宝。
  2. 不同动物爸爸方式不同（孵蛋 / 背 / 保护）。
  3. 照顾帮助小宝宝长大。
- 4 岁娃读法：爸爸抱娃角色扮演；聊"爸爸怎么爱你"。
- Fun Fact：海马爸爸用肚子上的育儿袋生下宝宝。

**画面内容指令（ImageGen）**
```
[公共风格块]
TOPIC: Animal dads caring for their babies — penguin dad on egg, seahorse dad with pouch,
gorilla dad carrying baby.
Include: a gentle penguin father sitting on an egg; a seahorse father with a round pouch; a
gorilla father carrying a small baby on back; all with warm smiling faces. A diverse child
observer hugging a parent figure. Tender, loving mood, warm pastel tones. No readable text.
```

### F08 · Seashells（贝壳）
**内容大纲**
- 级别 F · 生命世界 · 编号 F08
- 主旨：贝壳是软体动物（mollusks）的"家"和"盔甲"，保护它们；海边能捡到各种形状的贝壳。
- 核心知识点：
  1. 贝壳保护软软的动物身体。
  2. 贝壳有不同形状（螺旋、扇贝、圆）。
  3. 海边沙滩能找到贝壳。
- 4 岁娃读法：实物/画里捡贝壳；给螺旋壳涂色。
- Fun Fact：有些贝壳里住着章鱼的远房亲戚。

**画面内容指令（ImageGen）**
```
[公共风格块]
TOPIC: Seashells on a beach — spiral, fan, and round shells protecting mollusks.
Include: close-up of a spiral shell with a tiny mollusk peeking out; a fan shell and a round
shell half-buried in wet sand; a diverse child explorer crouching to collect shells with a
small bucket; gentle waves and sunny beach background. Soft sandy palette. No readable text.
```

---

## 四、本 SOP 后续衔接（不在本次执行）

1. **ImageGen 出插画**：对每本把 `[公共风格块]` + `[本书 TOPIC]` 拼接，调用 ImageGen（每张约 5–10 credits）。
2. **HTML/PDF 排版**：用清晰字体把"内容大纲"排成横向海报（大标题+副标题+4 卡片+Fun Fact+书单），把插画作为背景/配图嵌入，导出 PNG/PDF（文字绝不走 AI，保证清晰）。
3. 重复以上，即可批量产出整套主题周海报。
