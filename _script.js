
const DATA = {
  "meta": {
    "name": "RAZ + SAZ 知识库 (Reading A-Z & Science A-Z Reference Library)",
    "version": "3.14",
    "updated": "2026-08-10",
    "source": "Learning A-Z 官方级别对应表 (Handley Regional Library 版) + Science A-Z 单元结构 + 公开教研整理；AR/蓝思/DRA/F&P/RR/非虚构占比 为近似值",
    "note": "本库为元数据参考（级别、AR 对应、主题分类、重复阅读规则、SAZ 单元），不含任何书籍正文。完整书目需从 Raz-Plus / Raz-Plus (Science A-Z) 账号导出后结构化导入。",
    "levelsCount": 29,
    "levelOrder": [
      "aa",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "Z1",
      "Z2",
      "SAZ"
    ],
    "nonFictionEmphasis": "non-fiction（科普）是 RAZ 词汇最稳扎稳打的地基：术语与说明性句式在后续级别反复复现，且 Q 级以上非虚构占比超 60%，是 KET/PET/FCE 等考试科普阅读的前置积累。"
  },
  "levels": [
    {
      "level": "aa",
      "grade": "K",
      "ages": "4-6",
      "lexile": "BR70L-10L",
      "arLow": 0,
      "arHigh": 0.9,
      "dra": "A-1",
      "fp": "A",
      "rr": "1",
      "stage": "启蒙 GK",
      "pageWords": "1-3",
      "nonFic": 60,
      "focus": "单词认知，每页 1-2 个词，高度依赖图片；建立音-形-义关联"
    },
    {
      "level": "A",
      "grade": "K",
      "ages": "4-6",
      "lexile": "BR70L-10L",
      "arLow": 0,
      "arHigh": 0.9,
      "dra": "A-1",
      "fp": "A",
      "rr": "1",
      "stage": "启蒙 GK",
      "pageWords": "3-6",
      "nonFic": 60,
      "focus": "简单主谓句，基础动词 (run/jump/play) 与高频 sight words；日常生活/家庭/学校"
    },
    {
      "level": "B",
      "grade": "K",
      "ages": "4-6",
      "lexile": "BR40L-160L",
      "arLow": 0,
      "arHigh": 0.9,
      "dra": "2",
      "fp": "B",
      "rr": "2",
      "stage": "启蒙 GK",
      "pageWords": "10-15",
      "nonFic": 60,
      "focus": "完整句子，出现简单过去时；主题扩展至自然、天气、身体部位"
    },
    {
      "level": "C",
      "grade": "K",
      "ages": "4-6",
      "lexile": "BR40L-160L",
      "arLow": 0,
      "arHigh": 0.9,
      "dra": "3-4",
      "fp": "C",
      "rr": "3-4",
      "stage": "启蒙 GK",
      "pageWords": "15-25",
      "nonFic": 55,
      "focus": "故事性增强，简单情节；更多形容词/副词；理解开头-经过-结尾"
    },
    {
      "level": "D",
      "grade": "1",
      "ages": "4-7",
      "lexile": "160L-310L",
      "arLow": 1,
      "arHigh": 2.4,
      "dra": "6",
      "fp": "D",
      "rr": "5-6",
      "stage": "基础 G1",
      "pageWords": "20-30",
      "nonFic": 55,
      "focus": "篇幅增长，句式多样；识别故事要素(人物/场景/问题/解决)，比较级雏形"
    },
    {
      "level": "E",
      "grade": "1",
      "ages": "6-7",
      "lexile": "160L-310L",
      "arLow": 1,
      "arHigh": 2.4,
      "dra": "8",
      "fp": "E",
      "rr": "7-8",
      "stage": "基础 G1",
      "pageWords": "25-40",
      "nonFic": 55,
      "focus": "复合句雏形；科普小知识(动植物/简单物理)；用文本证据回答问题"
    },
    {
      "level": "F",
      "grade": "1",
      "ages": "6-7",
      "lexile": "300L-450L",
      "arLow": 1,
      "arHigh": 2.4,
      "dra": "10",
      "fp": "F",
      "rr": "9-10",
      "stage": "基础 G1",
      "pageWords": "40-60",
      "nonFic": 55,
      "focus": "非虚构比例上升，信息密度提高；时间顺序/因果/对比逻辑"
    },
    {
      "level": "G",
      "grade": "1",
      "ages": "6-7",
      "lexile": "300L-450L",
      "arLow": 1,
      "arHigh": 2.4,
      "dra": "12",
      "fp": "G",
      "rr": "11-12",
      "stage": "基础 G1",
      "pageWords": "50-70",
      "nonFic": 50,
      "focus": "提取关键信息、总结段落大意；理解图表和标题作用"
    },
    {
      "level": "H",
      "grade": "1",
      "ages": "6-7",
      "lexile": "430L-530L",
      "arLow": 1,
      "arHigh": 2.4,
      "dra": "14",
      "fp": "H",
      "rr": "13-14",
      "stage": "基础 G1",
      "pageWords": "60-80",
      "nonFic": 50,
      "focus": "流畅度提升；虚构/非虚构各半，题材更丰富"
    },
    {
      "level": "I",
      "grade": "1",
      "ages": "6-7",
      "lexile": "430L-530L",
      "arLow": 1,
      "arHigh": 2.4,
      "dra": "16",
      "fp": "I",
      "rr": "15-16",
      "stage": "基础 G1",
      "pageWords": "70-100",
      "nonFic": 50,
      "focus": "多句式熟练；开始关注作者意图与文本结构"
    },
    {
      "level": "J",
      "grade": "1",
      "ages": "6-8",
      "lexile": "430L-530L",
      "arLow": 1,
      "arHigh": 2.4,
      "dra": "18",
      "fp": "J",
      "rr": "17",
      "stage": "基础 G1",
      "pageWords": "80-120",
      "nonFic": 50,
      "focus": "流利阅读过渡；长句与多段落建立"
    },
    {
      "level": "K",
      "grade": "2",
      "ages": "7-8",
      "lexile": "510L-620L",
      "arLow": 2.5,
      "arHigh": 3.5,
      "dra": "18",
      "fp": "J",
      "rr": "17",
      "stage": "进阶 G2",
      "pageWords": "100-150",
      "nonFic": 50,
      "focus": "段落式文本；虚构+非虚构并重；培养信息提取与归纳"
    },
    {
      "level": "L",
      "grade": "2",
      "ages": "7-8",
      "lexile": "510L-620L",
      "arLow": 2.5,
      "arHigh": 3.5,
      "dra": "20",
      "fp": "K",
      "rr": "18",
      "stage": "进阶 G2",
      "pageWords": "120-180",
      "nonFic": 50,
      "focus": "题材丰富(虚构+非虚构)；复杂情节与说明文结构"
    },
    {
      "level": "M",
      "grade": "2",
      "ages": "7-8",
      "lexile": "530L-810L",
      "arLow": 2.5,
      "arHigh": 3.5,
      "dra": "24",
      "fp": "L",
      "rr": "19",
      "stage": "进阶 G2",
      "pageWords": "150-220",
      "nonFic": 50,
      "focus": "多段落，说明/叙述结合；能概括主旨"
    },
    {
      "level": "N",
      "grade": "2",
      "ages": "7-8",
      "lexile": "530L-810L",
      "arLow": 2.5,
      "arHigh": 3.5,
      "dra": "28",
      "fp": "L",
      "rr": "20",
      "stage": "进阶 G2",
      "pageWords": "180-250",
      "nonFic": 50,
      "focus": "推断与总结；跨文化/跨学科内容增加"
    },
    {
      "level": "O",
      "grade": "2",
      "ages": "7-8",
      "lexile": "600L-850L",
      "arLow": 2.5,
      "arHigh": 3.5,
      "dra": "28",
      "fp": "M",
      "rr": "20",
      "stage": "进阶 G2",
      "pageWords": "200-300",
      "nonFic": 50,
      "focus": "非虚构占比开始超过 50%；学术词汇引入"
    },
    {
      "level": "P",
      "grade": "2",
      "ages": "7-8",
      "lexile": "600L-850L",
      "arLow": 2.5,
      "arHigh": 3.5,
      "dra": "28",
      "fp": "M",
      "rr": "28",
      "stage": "进阶 G2",
      "pageWords": "250-350",
      "nonFic": 50,
      "focus": "长段落说明文；能复述并讨论"
    },
    {
      "level": "Q",
      "grade": "3",
      "ages": "7-9",
      "lexile": "660L-930L",
      "arLow": 3.6,
      "arHigh": 4.2,
      "dra": "30",
      "fp": "N",
      "rr": "30",
      "stage": "学术 G3",
      "pageWords": "300-400",
      "nonFic": 60,
      "focus": "章节入门；多段落、复杂主题；非虚构占 60%"
    },
    {
      "level": "R",
      "grade": "3",
      "ages": "8-9",
      "lexile": "660L-930L",
      "arLow": 3.6,
      "arHigh": 4.2,
      "dra": "30",
      "fp": "N",
      "rr": "30",
      "stage": "学术 G3",
      "pageWords": "350-450",
      "nonFic": 60,
      "focus": "批判性阅读萌芽；观点与证据区分"
    },
    {
      "level": "S",
      "grade": "3",
      "ages": "8-9",
      "lexile": "790L-940L",
      "arLow": 3.6,
      "arHigh": 4.2,
      "dra": "34",
      "fp": "O",
      "rr": "34",
      "stage": "学术 G3",
      "pageWords": "400-500",
      "nonFic": 60,
      "focus": "中篇文章；学术词汇增加"
    },
    {
      "level": "T",
      "grade": "3",
      "ages": "8-9",
      "lexile": "790L-940L",
      "arLow": 3.6,
      "arHigh": 4.2,
      "dra": "38",
      "fp": "P",
      "rr": "38",
      "stage": "学术 G3",
      "pageWords": "450-600",
      "nonFic": 60,
      "focus": "长文章；接近初中难度"
    },
    {
      "level": "U",
      "grade": "4",
      "ages": "8-11",
      "lexile": "820L-1030L",
      "arLow": 4.3,
      "arHigh": 4.9,
      "dra": "40",
      "fp": "Q",
      "rr": "40",
      "stage": "学术 G4",
      "pageWords": "500-700",
      "nonFic": 60,
      "focus": "学术阅读；专业术语与多源信息整合"
    },
    {
      "level": "V",
      "grade": "4",
      "ages": "9-11",
      "lexile": "820L-1030L",
      "arLow": 4.3,
      "arHigh": 4.9,
      "dra": "40",
      "fp": "R",
      "rr": "40",
      "stage": "学术 G4",
      "pageWords": "550-750",
      "nonFic": 60,
      "focus": "论证结构与作者立场分析"
    },
    {
      "level": "W",
      "grade": "4",
      "ages": "9-11",
      "lexile": "820L-1030L",
      "arLow": 4.3,
      "arHigh": 4.9,
      "dra": "40",
      "fp": "S",
      "rr": "40",
      "stage": "学术 G4",
      "pageWords": "600-800",
      "nonFic": 60,
      "focus": "跨文本比较；抽象概念"
    },
    {
      "level": "X",
      "grade": "5",
      "ages": "9-11",
      "lexile": "890L-1080L",
      "arLow": 5.0,
      "arHigh": 5.5,
      "dra": "40",
      "fp": "S",
      "rr": "40",
      "stage": "学术 G5",
      "pageWords": "700-900",
      "nonFic": 60,
      "focus": "原版长文衔接；复杂修辞"
    },
    {
      "level": "Y",
      "grade": "5",
      "ages": "9-11",
      "lexile": "890L-1080L",
      "arLow": 5.0,
      "arHigh": 5.5,
      "dra": "40",
      "fp": "T",
      "rr": "40",
      "stage": "学术 G5",
      "pageWords": "800-1000",
      "nonFic": 60,
      "focus": "文学与百科并重；深度分析"
    },
    {
      "level": "Z",
      "grade": "5",
      "ages": "9-11",
      "lexile": "890L-1080L",
      "arLow": 5.0,
      "arHigh": 5.5,
      "dra": "50",
      "fp": "U-V",
      "rr": "N/A",
      "stage": "学术 G5",
      "pageWords": "900-1100",
      "nonFic": 60,
      "focus": "自由阅读前夜；接近母语五年级"
    },
    {
      "level": "Z1",
      "grade": "5+",
      "ages": "9-11+",
      "lexile": "920L-1120L",
      "arLow": 5.6,
      "arHigh": 6.3,
      "dra": "60",
      "fp": "W-X",
      "rr": "N/A",
      "stage": "高阶 G5+",
      "pageWords": "1000-1200",
      "nonFic": 65,
      "focus": "高年级学术水平；独立研究性阅读"
    },
    {
      "level": "Z2",
      "grade": "5+",
      "ages": "9-11+",
      "lexile": "920L-1120L",
      "arLow": 6.4,
      "arHigh": 6.9,
      "dra": "70+",
      "fp": "Y-Z",
      "rr": "N/A",
      "stage": "高阶 G5+",
      "pageWords": "1100-1400",
      "nonFic": 65,
      "focus": "最高级；学术文献与批判写作衔接"
    }
  ],
  "repetitionRules": {
    "placement": [
      {
        "name": "五指法则 (Five-finger Rule)",
        "detail": "翻开书中页开始读，每遇一个不认识的词竖一根手指。1 根=太简单；2-3 根=合适；4 根=有点难但可尝试；5 根=不适合本级别。"
      },
      {
        "name": "80% / Quiz 正确率定级",
        "detail": "试读 1 本做 quiz：90-100%=太简单可跳 1-2 级；80-89%=刚好合适；60-79%=有挑战但可行；<60%=太难建议降 1-2 级。"
      },
      {
        "name": "生词密度法",
        "detail": "从 AA 起连读 3-5 本：每本生词 ≤3 个且能答对 quiz 即合适；若一页有 3-5 个生词建议降一级。理想：80% 单词能直接读出，20% 需思考。"
      },
      {
        "name": "起步降一级",
        "detail": "测出级别后，降低一个级别作为起步更顺畅，利于坚持。"
      }
    ],
    "dailyRoutine": [
      {
        "step": 1,
        "name": "Listen 听",
        "detail": "点击 Listen 听原声 1-2 遍（低级别 AA-C 可反复 2-3 遍）；手指跟随文字，听发音/语调/断句。"
      },
      {
        "step": 2,
        "name": "Read 读",
        "detail": "孩子自己朗读并可用 Record 录音；遇生词点词汇帮助；鼓励大声朗读，不默读。"
      },
      {
        "step": 3,
        "name": "Quiz 测",
        "detail": "完成 5-10 道选择题；错题回书相关段落重读。全程建议控制在 15-25 分钟。"
      }
    ],
    "threePass": [
      {
        "pass": 1,
        "name": "第一遍 · 边听边看",
        "detail": "音画同步，理解性输入为主。听懂重点词即可——说出单词孩子能指图或做动作即达标。"
      },
      {
        "pass": 2,
        "name": "第二遍 · 指读跟读",
        "detail": "音频/点读笔读一句孩子跟一句，音字一致。整个级别 80% 跟读流利可进入下一阶段；若 >50% 不流利需再跟一遍。"
      },
      {
        "pass": 3,
        "name": "第三遍 · 自主阅读",
        "detail": "脱离音频/点读笔，仅借图片提示流畅读出。自读 80% 即可进入下一级别。"
      }
    ],
    "advancement": [
      {
        "name": "升级核心标准",
        "detail": "Quiz 正确率 ≥ 80% 即代表当前级别理解良好，可进入下一级。"
      },
      {
        "name": "不必读完所有书",
        "detail": "读够该级别 70-80% 书目；连续 5-10 本 quiz 正确率 ≥80% 即可升级。官方建议每个阶段挑 40-50 本孩子感兴趣的即可晋级。"
      },
      {
        "name": "升级频率参考",
        "detail": "AA-C 每 2-3 周；D-J 每 3-4 周；K-P 每 4-6 周；Q-Z2 每 6-8 周。"
      }
    ],
    "review": [
      {
        "name": "间隔复习 (艾宾浩斯)",
        "detail": "每本新书读完后，间隔 1 天、3 天、7 天各复习一次，防止遗忘。"
      },
      {
        "name": "听力先行",
        "detail": "每天 30 分钟以上碎片磨耳朵；一本书听 3-5 遍。有裸听能力的孩子可听比阅读高 1-2 级的书。"
      },
      {
        "name": "三分听七分读",
        "detail": "理解性输入优先；重点单词会在后续级别反复出现，泛读为主，完成比完美重要。"
      }
    ],
    "pacing": [
      {
        "mode": "慢节奏 (佛系启蒙)",
        "daily": "每天 1 本，周末休息",
        "monthly": "每月升级约 1 级"
      },
      {
        "mode": "标准节奏 (推荐)",
        "daily": "每天 2 本 (1 新 + 1 复习)",
        "monthly": "每月升级约 2 级"
      },
      {
        "mode": "快节奏 (冲刺)",
        "daily": "每天 3 本 (含精读+练习)",
        "monthly": "每月升级 3-4 级"
      }
    ]
  },
  "saz": {
    "name": "Science A-Z (SAZ)",
    "desc": "Learning A-Z 旗下独立的科学分级读物，纯非虚构（科普），与 RAZ 的 non-fiction 部分互补。按三个阅读级别组织，每个主题含 Core Book + Focus Books + 扩展读物，均有范读/录音/Quiz。",
    "levelSystem": {
      "easier": "Easier 阅读级 · 对应 K-2 年级（≈ RAZ aa–M）",
      "medium": "Medium 阅读级 · 对应 3-4 年级（≈ RAZ N–T）",
      "harder": "Harder 阅读级 · 对应 5-6 年级（≈ RAZ U–Z2）"
    },
    "domains": {
      "life": {
        "label": "🌱 生命科学 Life Science",
        "easier": [
          "动物 Animals",
          "有生命·无生命 Living & Non-Living",
          "植物 Plants",
          "感官 Senses"
        ],
        "medium": [
          "生活环境 Habitats",
          "人体 The Human Body",
          "无脊椎动物 Invertebrates",
          "生命周期 Life Cycles",
          "植物生命 Plant Life",
          "脊椎动物 Vertebrates"
        ],
        "harder": [
          "适应环境 Adaptations",
          "食物链 Food Chain",
          "食物与营养 Food & Nutrition",
          "生物内部构造 Inside Living Things"
        ]
      },
      "earth": {
        "label": "🌍 地球与太空 Earth & Space",
        "easier": [
          "地球表面 Earth's Surface",
          "地球·月亮·太阳",
          "天气 Weather"
        ],
        "medium": [
          "云·风·风暴",
          "矿物·岩石·土壤",
          "太阳系 Solar System"
        ],
        "harder": [
          "大气层与气候",
          "地貌改变",
          "太阳系之外",
          "水 Water"
        ]
      },
      "physical": {
        "label": "⚡ 物理科学 Physical Science",
        "easier": [
          "做功 Doing Work",
          "能源 Energy",
          "光 Light",
          "磁性 Magnets",
          "属性 Properties",
          "物体运动 Things Move"
        ],
        "medium": [
          "热能 Heat",
          "机械 Machines",
          "固液气 Solids·Liquids·Gases",
          "声音 Sound"
        ],
        "harder": [
          "电与磁 Electricity & Magnetism",
          "能源资源",
          "力与运动 Force & Motion",
          "光能 Light Energy",
          "混合物质 Mixing Matter"
        ]
      },
      "process": {
        "label": "🛠 工程与实践 Process (Engineering)",
        "note": "科学探究与工程实践，分 Easier / Medium / Harder 三档，与以上三大学科并列；培养提问-调查-设计-改进的科学思维。"
      }
    },
    "razMappingNote": "SAZ 与 RAZ 的级别体系不同：SAZ 只有 3 档阅读级，RAZ 有 29 个字母级。上表『≈ RAZ』为近似对应，用于交叉选书——例如孩子在 RAZ K 级，可平行读 SAZ Easier 的 Habitats / Plant Life 做主题拓展。"
  },
  "themes": {
    "macroCategories": [
      {
        "id": "fiction",
        "name": "虚构类 Fiction",
        "type": "fiction",
        "desc": "人物故事 / 童话 / 奇幻 / 冒险 / 校园；故事性强，培养阅读兴趣",
        "examples": "三只小猪、龟兔赛跑、小红帽、小怪兽系列"
      },
      {
        "id": "animals",
        "name": "动物 Animals",
        "type": "nonfiction",
        "desc": "从农场/宠物到低阶科普，再到脊椎/无脊椎动物、栖息地",
        "examples": "Farm Animals, Plains Animals, Strange Animals"
      },
      {
        "id": "plants",
        "name": "植物 Plants",
        "type": "nonfiction",
        "desc": "植物生长周期、植物生命、植物与人类",
        "examples": "Apple Tree, Plant Life"
      },
      {
        "id": "earth",
        "name": "地球与太空 Earth & Space",
        "type": "nonfiction",
        "desc": "地球表面、天气、太阳系、地貌、气候、水",
        "examples": "The Moon, Weather, Solar System"
      },
      {
        "id": "lifesci",
        "name": "生命科学 Life Science",
        "type": "nonfiction",
        "desc": "感官、生命周期、食物链、适应环境、生物构造",
        "examples": "Life Cycles, Food Chain, Adaptations"
      },
      {
        "id": "physical",
        "name": "物理科学 Physical Science",
        "type": "nonfiction",
        "desc": "能量、光、磁、力与运动、声音、物质状态",
        "examples": "Energy, Magnets, Force and Motion"
      },
      {
        "id": "social",
        "name": "社会研究 Social Studies",
        "type": "nonfiction",
        "desc": "历史、文化、民俗、节日、地理、公民意识",
        "examples": "节日文化、国家地理、传记"
      },
      {
        "id": "concepts",
        "name": "概念与数理 Concepts / Math",
        "type": "nonfiction",
        "desc": "数字、颜色、形状、测量、时间、规律、统计",
        "examples": "数字认知、颜色、形状"
      },
      {
        "id": "health",
        "name": "健康与人体 Health",
        "type": "nonfiction",
        "desc": "身体部位、营养、健康习惯",
        "examples": "The Human Body, Food and Nutrition"
      },
      {
        "id": "art",
        "name": "艺术与创意 Art",
        "type": "nonfiction",
        "desc": "音乐、绘画、手工、建筑、设计",
        "examples": "绘画、手工、建筑"
      }
    ],
    "mergeFamilies": [
      {
        "family": "🐾 生命世界",
        "nonfiction": true,
        "merge": [
          "动物 Animals",
          "植物 Plants",
          "生活环境 Habitats",
          "生命周期 Life Cycles",
          "食物链 Food Chain",
          "适应环境 Adaptations",
          "脊椎/无脊椎动物",
          "有生命·无生命",
          "感官 Senses",
          "植物生命 Plant Life",
          "生物内部构造"
        ],
        "source": "SAZ 生命科学 + RAZ 动物/植物",
        "why": "RAZ 低阶以动物/植物单本切入，中高阶拆成栖息地、生命周期、食物链等。串成『生命世界』一条线，孩子能横向比较，词汇也反复复用。"
      },
      {
        "family": "🌍 地球与宇宙",
        "nonfiction": true,
        "merge": [
          "地球表面",
          "地貌改变",
          "矿物·岩石·土壤",
          "水 Water",
          "天气 Weather",
          "云·风·风暴",
          "大气层与气候",
          "地球·月亮·太阳",
          "太阳系",
          "太阳系之外"
        ],
        "source": "SAZ 地球与太空 + RAZ 地理/天文",
        "why": "地质 + 气象 + 天文分散在多级别。合并为『地球与宇宙』，按『近→远』(脚下土地→天气→月球→太阳系→系外) 排顺序，符合认知递进。"
      },
      {
        "family": "⚡ 物质与能量",
        "nonfiction": true,
        "merge": [
          "能源 Energy",
          "光 Light",
          "磁性 Magnets",
          "力与运动",
          "声音 Sound",
          "热能 Heat",
          "电与磁",
          "属性 Properties",
          "做功",
          "机械 Machines",
          "固液气",
          "混合物质"
        ],
        "source": "SAZ 物理科学",
        "why": "物理概念彼此牵连(能量→光/热/电/声；力→运动→机械)。合并成『物质与能量』，避免零散记术语。"
      },
      {
        "family": "🧍 身体与健康",
        "nonfiction": true,
        "merge": [
          "人体 The Human Body",
          "食物与营养 Food & Nutrition",
          "感官 Senses",
          "健康 Health"
        ],
        "source": "SAZ 生命科学/人体 + RAZ 健康",
        "why": "身体构造、营养、感官、健康习惯本质都关于『我』。可做成自我认知 + 健康习惯单元。"
      },
      {
        "family": "👥 社会与人文",
        "nonfiction": true,
        "merge": [
          "社会研究 Social Studies",
          "历史与文化",
          "地理 Geography",
          "公民意识 Citizenship",
          "传记 Biography"
        ],
        "source": "RAZ 社科",
        "why": "历史/文化/地理/传记/公民分册但主题互通。合并为『社会与人文』，做国家或人物主题周。"
      },
      {
        "family": "🔢 思维与创意",
        "nonfiction": true,
        "merge": [
          "概念 Concepts",
          "数理 Math",
          "艺术与创意 Art"
        ],
        "source": "RAZ 概念/数理/艺术",
        "why": "数字/颜色/形状/规律与艺术手工可并入跨领域『思维与创意』，适合低龄做游戏化 PBL，不强求单独成线。"
      }
    ]
  },
  "books": [
    {
      "id": "AA01",
      "level": "aa",
      "num": 1,
      "title": "Farm Animals",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "AA02",
      "level": "aa",
      "num": 2,
      "title": "Go, Go, Go",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "AA03",
      "level": "aa",
      "num": 3,
      "title": "Jump Over",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "介词反义"
    },
    {
      "id": "AA04",
      "level": "aa",
      "num": 4,
      "title": "Pets",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "AA05",
      "level": "aa",
      "num": 5,
      "title": "Plains Animals",
      "type": "NF",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "AA06",
      "level": "aa",
      "num": 6,
      "title": "Rainforest Animals",
      "type": "NF",
      "theme": "生命世界",
      "lang": "天气水句式"
    },
    {
      "id": "AA07",
      "level": "aa",
      "num": 7,
      "title": "The Coast",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "AA08",
      "level": "aa",
      "num": 8,
      "title": "Water",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "AA09",
      "level": "aa",
      "num": 9,
      "title": "Spring",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "季节句式"
    },
    {
      "id": "AA10",
      "level": "aa",
      "num": 10,
      "title": "Summer",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "季节句式"
    },
    {
      "id": "AA11",
      "level": "aa",
      "num": 11,
      "title": "It Is Fall",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "季节句式"
    },
    {
      "id": "AA12",
      "level": "aa",
      "num": 12,
      "title": "Winter",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "季节句式"
    },
    {
      "id": "AA13",
      "level": "aa",
      "num": 13,
      "title": "The Ocean",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "AA14",
      "level": "aa",
      "num": 14,
      "title": "The Plant",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "AA15",
      "level": "aa",
      "num": 15,
      "title": "The Chicken",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "AA16",
      "level": "aa",
      "num": 16,
      "title": "These Birds",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "AA17",
      "level": "aa",
      "num": 17,
      "title": "Rain on Fairyland",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "AA18",
      "level": "aa",
      "num": 18,
      "title": "Jungle Friends",
      "type": "F",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "AA19",
      "level": "aa",
      "num": 19,
      "title": "Animals Nap",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "AA20",
      "level": "aa",
      "num": 20,
      "title": "Colorful eggs",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "颜色句式"
    },
    {
      "id": "AA21",
      "level": "aa",
      "num": 21,
      "title": "Purple",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "颜色句式"
    },
    {
      "id": "AA22",
      "level": "aa",
      "num": 22,
      "title": "Yellow",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "颜色句式"
    },
    {
      "id": "AA23",
      "level": "aa",
      "num": 23,
      "title": "Blue",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "颜色句式"
    },
    {
      "id": "AA24",
      "level": "aa",
      "num": 24,
      "title": "Green",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "颜色句式"
    },
    {
      "id": "AA25",
      "level": "aa",
      "num": 25,
      "title": "Orange",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "颜色句式"
    },
    {
      "id": "AA26",
      "level": "aa",
      "num": 26,
      "title": "Red",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "颜色句式"
    },
    {
      "id": "AA27",
      "level": "aa",
      "num": 27,
      "title": "White",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "颜色句式"
    },
    {
      "id": "AA28",
      "level": "aa",
      "num": 28,
      "title": "Black",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "颜色句式"
    },
    {
      "id": "AA29",
      "level": "aa",
      "num": 29,
      "title": "One",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "数字句式"
    },
    {
      "id": "AA30",
      "level": "aa",
      "num": 30,
      "title": "Two",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "数字句式"
    },
    {
      "id": "AA31",
      "level": "aa",
      "num": 31,
      "title": "Three",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "数字句式"
    },
    {
      "id": "AA32",
      "level": "aa",
      "num": 32,
      "title": "Four",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "数字句式"
    },
    {
      "id": "AA33",
      "level": "aa",
      "num": 33,
      "title": "Five",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "数字句式"
    },
    {
      "id": "AA34",
      "level": "aa",
      "num": 34,
      "title": "Six",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "数字句式"
    },
    {
      "id": "AA35",
      "level": "aa",
      "num": 35,
      "title": "Seven",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "数字句式"
    },
    {
      "id": "AA36",
      "level": "aa",
      "num": 36,
      "title": "Eight",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "数字句式"
    },
    {
      "id": "AA37",
      "level": "aa",
      "num": 37,
      "title": "Nine",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "数字句式"
    },
    {
      "id": "AA38",
      "level": "aa",
      "num": 38,
      "title": "Ten",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "数字句式"
    },
    {
      "id": "AA39",
      "level": "aa",
      "num": 39,
      "title": "Eleven",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "数字句式"
    },
    {
      "id": "AA40",
      "level": "aa",
      "num": 40,
      "title": "Twelve",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "数字句式"
    },
    {
      "id": "AA41",
      "level": "aa",
      "num": 41,
      "title": "Counting Bugs",
      "type": "NF",
      "theme": "生命世界",
      "lang": "数字句式"
    },
    {
      "id": "AA42",
      "level": "aa",
      "num": 42,
      "title": "One Insect",
      "type": "NF",
      "theme": "生命世界",
      "lang": "数字句式"
    },
    {
      "id": "AA43",
      "level": "aa",
      "num": 43,
      "title": "Counting Letters",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "数字句式"
    },
    {
      "id": "AA44",
      "level": "aa",
      "num": 44,
      "title": "The Street",
      "type": "NF",
      "theme": "生命世界",
      "lang": "场景认知"
    },
    {
      "id": "AA45",
      "level": "aa",
      "num": 45,
      "title": "City Street",
      "type": "NF",
      "theme": "生命世界",
      "lang": "场景认知"
    },
    {
      "id": "AA46",
      "level": "aa",
      "num": 46,
      "title": "The City",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "场景认知"
    },
    {
      "id": "AA47",
      "level": "aa",
      "num": 47,
      "title": "The Playground",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "场景认知"
    },
    {
      "id": "AA48",
      "level": "aa",
      "num": 48,
      "title": "Christmas Eve",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "AA49",
      "level": "aa",
      "num": 49,
      "title": "My Hanukkah",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "AA50",
      "level": "aa",
      "num": 50,
      "title": "Too Many Sweets",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "AA51",
      "level": "aa",
      "num": 51,
      "title": "Lunch at School",
      "type": "F",
      "theme": "社会与人文",
      "lang": "场景认知"
    },
    {
      "id": "AA52",
      "level": "aa",
      "num": 52,
      "title": "Valentine's Day Gifts",
      "type": "F",
      "theme": "思维与创意",
      "lang": "介词反义"
    },
    {
      "id": "AA53",
      "level": "aa",
      "num": 53,
      "title": "Pasta!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "AA54",
      "level": "aa",
      "num": 54,
      "title": "My Gift for Mom",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "AA55",
      "level": "aa",
      "num": 55,
      "title": "The Garden",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "AA56",
      "level": "aa",
      "num": 56,
      "title": "Play Ball!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "AA57",
      "level": "aa",
      "num": 57,
      "title": "The Baseball Game",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "AA58",
      "level": "aa",
      "num": 58,
      "title": "The Trip",
      "type": "F",
      "theme": "社会与人文",
      "lang": "场景认知"
    },
    {
      "id": "AA59",
      "level": "aa",
      "num": 59,
      "title": "The Supermarket",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "场景认知"
    },
    {
      "id": "AA60",
      "level": "aa",
      "num": 60,
      "title": "The Zoo",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "AA61",
      "level": "aa",
      "num": 61,
      "title": "The School",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "场景认知"
    },
    {
      "id": "AA62",
      "level": "aa",
      "num": 62,
      "title": "The Classroom",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "场景认知"
    },
    {
      "id": "AA63",
      "level": "aa",
      "num": 63,
      "title": "Summer Camp",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "季节句式"
    },
    {
      "id": "AA64",
      "level": "aa",
      "num": 64,
      "title": "Summer Picnics",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "季节句式"
    },
    {
      "id": "AA65",
      "level": "aa",
      "num": 65,
      "title": "The Post Office",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "AA66",
      "level": "aa",
      "num": 66,
      "title": "The Bookstore",
      "type": "F",
      "theme": "社会与人文",
      "lang": "场景认知"
    },
    {
      "id": "AA67",
      "level": "aa",
      "num": 67,
      "title": "On an Airplane",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "介词反义"
    },
    {
      "id": "AA68",
      "level": "aa",
      "num": 68,
      "title": "The Subway",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "场景认知"
    },
    {
      "id": "AA69",
      "level": "aa",
      "num": 69,
      "title": "At the Lake",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "AA70",
      "level": "aa",
      "num": 70,
      "title": "The Backyard",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "场景认知"
    },
    {
      "id": "AA71",
      "level": "aa",
      "num": 71,
      "title": "My School Bus",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "场景认知"
    },
    {
      "id": "AA72",
      "level": "aa",
      "num": 72,
      "title": "Fido Gets Dressed",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "AA73",
      "level": "aa",
      "num": 73,
      "title": "Picking Apples",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "介词反义"
    },
    {
      "id": "AA74",
      "level": "aa",
      "num": 74,
      "title": "My Closet",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "AA75",
      "level": "aa",
      "num": 75,
      "title": "The Birthday Party",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "AA76",
      "level": "aa",
      "num": 76,
      "title": "Show Some Love",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "AA77",
      "level": "aa",
      "num": 77,
      "title": "This Kitchen",
      "type": "NF",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "AA78",
      "level": "aa",
      "num": 78,
      "title": "My Bath",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "AA79",
      "level": "aa",
      "num": 79,
      "title": "Toys",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "AA80",
      "level": "aa",
      "num": 80,
      "title": "We Build",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "AA81",
      "level": "aa",
      "num": 81,
      "title": "We Go Camping",
      "type": "F",
      "theme": "思维与创意",
      "lang": "介词反义"
    },
    {
      "id": "AA82",
      "level": "aa",
      "num": 82,
      "title": "The Fort",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "AA83",
      "level": "aa",
      "num": 83,
      "title": "My Garden",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "AA84",
      "level": "aa",
      "num": 84,
      "title": "The Book",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "AA85",
      "level": "aa",
      "num": 85,
      "title": "My Easter",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "AA86",
      "level": "aa",
      "num": 86,
      "title": "Mom",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "AA87",
      "level": "aa",
      "num": 87,
      "title": "The Movie",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "AA88",
      "level": "aa",
      "num": 88,
      "title": "My Family",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "AA89",
      "level": "aa",
      "num": 89,
      "title": "Good Night",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "AA90",
      "level": "aa",
      "num": 90,
      "title": "Funny Cat",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "AA91",
      "level": "aa",
      "num": 91,
      "title": "Big",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "AA92",
      "level": "aa",
      "num": 92,
      "title": "Little",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "AA93",
      "level": "aa",
      "num": 93,
      "title": "Under",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "介词反义"
    },
    {
      "id": "AA94",
      "level": "aa",
      "num": 94,
      "title": "On",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "介词反义"
    },
    {
      "id": "AA95",
      "level": "aa",
      "num": 95,
      "title": "In",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "介词反义"
    },
    {
      "id": "AA96",
      "level": "aa",
      "num": 96,
      "title": "Out",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "介词反义"
    },
    {
      "id": "AA97",
      "level": "aa",
      "num": 97,
      "title": "Off",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "介词反义"
    },
    {
      "id": "AA98",
      "level": "aa",
      "num": 98,
      "title": "Over",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "介词反义"
    },
    {
      "id": "AA99",
      "level": "aa",
      "num": 99,
      "title": "The Market",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "场景认知"
    },
    {
      "id": "AA100",
      "level": "aa",
      "num": 100,
      "title": "These Are Opposites",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "介词反义"
    },
    {
      "id": "A01",
      "level": "A",
      "num": 1,
      "title": "Pond Animals",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "A02",
      "level": "A",
      "num": 2,
      "title": "My Dog",
      "type": "F",
      "theme": "社会与人文",
      "lang": "My句式"
    },
    {
      "id": "A03",
      "level": "A",
      "num": 3,
      "title": "The Big Cat",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "A04",
      "level": "A",
      "num": 4,
      "title": "The Forest",
      "type": "NF",
      "theme": "生命世界",
      "lang": "场景认知"
    },
    {
      "id": "A05",
      "level": "A",
      "num": 5,
      "title": "Mom and I",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "A06",
      "level": "A",
      "num": 6,
      "title": "What Lives Here?",
      "type": "NF",
      "theme": "生命世界",
      "lang": "What句式"
    },
    {
      "id": "A07",
      "level": "A",
      "num": 7,
      "title": "Baby Animals",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "A08",
      "level": "A",
      "num": 8,
      "title": "I Love Flowers",
      "type": "NF",
      "theme": "生命世界",
      "lang": "I句式"
    },
    {
      "id": "A09",
      "level": "A",
      "num": 9,
      "title": "Hamster Home",
      "type": "NF",
      "theme": "生命世界",
      "lang": "场景认知"
    },
    {
      "id": "A10",
      "level": "A",
      "num": 10,
      "title": "Oh, Raccoon",
      "type": "F",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "A11",
      "level": "A",
      "num": 11,
      "title": "Bird Goes Home",
      "type": "NF",
      "theme": "生命世界",
      "lang": "Goes句式"
    },
    {
      "id": "A12",
      "level": "A",
      "num": 12,
      "title": "Spring Weather",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "A13",
      "level": "A",
      "num": 13,
      "title": "Vegetables",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "A14",
      "level": "A",
      "num": 14,
      "title": "Fruit Colors",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "颜色句式"
    },
    {
      "id": "A15",
      "level": "A",
      "num": 15,
      "title": "Hello, Butterfly",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "A16",
      "level": "A",
      "num": 16,
      "title": "Shapes in Nature",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "Shapes句式"
    },
    {
      "id": "A17",
      "level": "A",
      "num": 17,
      "title": "Spring and Fall",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "季节句式"
    },
    {
      "id": "A18",
      "level": "A",
      "num": 18,
      "title": "The Rainstorm",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "A19",
      "level": "A",
      "num": 19,
      "title": "Rabbits",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "A20",
      "level": "A",
      "num": 20,
      "title": "Snake Colors",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "颜色句式"
    },
    {
      "id": "A21",
      "level": "A",
      "num": 21,
      "title": "I See My Colors",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "颜色句式"
    },
    {
      "id": "A22",
      "level": "A",
      "num": 22,
      "title": "Bird Colors",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "颜色句式"
    },
    {
      "id": "A23",
      "level": "A",
      "num": 23,
      "title": "Bedtime Counting",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "数字句式"
    },
    {
      "id": "A24",
      "level": "A",
      "num": 24,
      "title": "Carlos Counts Kittens",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "数字句式"
    },
    {
      "id": "A25",
      "level": "A",
      "num": 25,
      "title": "Maria Counts Pumpkins",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "数字句式"
    },
    {
      "id": "A26",
      "level": "A",
      "num": 26,
      "title": "This Insect",
      "type": "NF",
      "theme": "生命世界",
      "lang": "This句式"
    },
    {
      "id": "A27",
      "level": "A",
      "num": 27,
      "title": "Halloween Pumpkins",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "A28",
      "level": "A",
      "num": 28,
      "title": "Fruit",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "A29",
      "level": "A",
      "num": 29,
      "title": "Going Places",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合"
    },
    {
      "id": "A30",
      "level": "A",
      "num": 30,
      "title": "Now We Bake!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "A31",
      "level": "A",
      "num": 31,
      "title": "My Easter Eggs",
      "type": "F",
      "theme": "社会与人文",
      "lang": "My句式"
    },
    {
      "id": "A32",
      "level": "A",
      "num": 32,
      "title": "This Is My Halloween",
      "type": "F",
      "theme": "社会与人文",
      "lang": "This句式"
    },
    {
      "id": "A33",
      "level": "A",
      "num": 33,
      "title": "Halloween Houses",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "A34",
      "level": "A",
      "num": 34,
      "title": "Smells Like Thanksgiving",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "A35",
      "level": "A",
      "num": 35,
      "title": "This Feels",
      "type": "NF",
      "theme": "身体与健康",
      "lang": "This句式"
    },
    {
      "id": "A36",
      "level": "A",
      "num": 36,
      "title": "Where to Go",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "A37",
      "level": "A",
      "num": 37,
      "title": "Car Parts",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合"
    },
    {
      "id": "A38",
      "level": "A",
      "num": 38,
      "title": "Fun in the Water",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "A39",
      "level": "A",
      "num": 39,
      "title": "I Draw a Bunny",
      "type": "F",
      "theme": "思维与创意",
      "lang": "I句式"
    },
    {
      "id": "A40",
      "level": "A",
      "num": 40,
      "title": "Sundae Time",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "A41",
      "level": "A",
      "num": 41,
      "title": "This Tastes",
      "type": "NF",
      "theme": "身体与健康",
      "lang": "This句式"
    },
    {
      "id": "A42",
      "level": "A",
      "num": 42,
      "title": "What Do I Hear?",
      "type": "NF",
      "theme": "身体与健康",
      "lang": "What句式"
    },
    {
      "id": "A43",
      "level": "A",
      "num": 43,
      "title": "The Mall",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "场景认知"
    },
    {
      "id": "A44",
      "level": "A",
      "num": 44,
      "title": "All Kinds of Buttons",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "AllKinds句式"
    },
    {
      "id": "A45",
      "level": "A",
      "num": 45,
      "title": "Make a Salad",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "A46",
      "level": "A",
      "num": 46,
      "title": "Move It!",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合"
    },
    {
      "id": "A47",
      "level": "A",
      "num": 47,
      "title": "Our Apartment Building",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "场景认知"
    },
    {
      "id": "A48",
      "level": "A",
      "num": 48,
      "title": "This Is My Bear",
      "type": "F",
      "theme": "社会与人文",
      "lang": "This句式"
    },
    {
      "id": "A49",
      "level": "A",
      "num": 49,
      "title": "Write!",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "A50",
      "level": "A",
      "num": 50,
      "title": "This Sounds",
      "type": "NF",
      "theme": "身体与健康",
      "lang": "This句式"
    },
    {
      "id": "A51",
      "level": "A",
      "num": 51,
      "title": "Time for Eggs",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "A52",
      "level": "A",
      "num": 52,
      "title": "This Looks",
      "type": "NF",
      "theme": "身体与健康",
      "lang": "This句式"
    },
    {
      "id": "A53",
      "level": "A",
      "num": 53,
      "title": "I Go",
      "type": "F",
      "theme": "物质与能量",
      "lang": "I句式"
    },
    {
      "id": "A54",
      "level": "A",
      "num": 54,
      "title": "My Room",
      "type": "F",
      "theme": "社会与人文",
      "lang": "My句式"
    },
    {
      "id": "A55",
      "level": "A",
      "num": 55,
      "title": "A Fish Sees",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "A56",
      "level": "A",
      "num": 56,
      "title": "Go Fly a Kite",
      "type": "F",
      "theme": "物质与能量",
      "lang": "综合"
    },
    {
      "id": "A57",
      "level": "A",
      "num": 57,
      "title": "He Runs",
      "type": "F",
      "theme": "物质与能量",
      "lang": "综合"
    },
    {
      "id": "A58",
      "level": "A",
      "num": 58,
      "title": "Maria Goes to School",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Goes句式"
    },
    {
      "id": "A59",
      "level": "A",
      "num": 59,
      "title": "Carlos Goes to School",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Goes句式"
    },
    {
      "id": "A60",
      "level": "A",
      "num": 60,
      "title": "I Can",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "I句式"
    },
    {
      "id": "A61",
      "level": "A",
      "num": 61,
      "title": "Getting Dressed",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "A62",
      "level": "A",
      "num": 62,
      "title": "These Shoes",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "A63",
      "level": "A",
      "num": 63,
      "title": "What I Like",
      "type": "F",
      "theme": "身体与健康",
      "lang": "What句式"
    },
    {
      "id": "A64",
      "level": "A",
      "num": 64,
      "title": "I Love Pirates",
      "type": "F",
      "theme": "社会与人文",
      "lang": "I句式"
    },
    {
      "id": "A65",
      "level": "A",
      "num": 65,
      "title": "The Parade",
      "type": "F",
      "theme": "社会与人文",
      "lang": "场景认知"
    },
    {
      "id": "A66",
      "level": "A",
      "num": 66,
      "title": "I Dream",
      "type": "F",
      "theme": "思维与创意",
      "lang": "I句式"
    },
    {
      "id": "A67",
      "level": "A",
      "num": 67,
      "title": "Clean, Not Clean",
      "type": "NF",
      "theme": "身体与健康",
      "lang": "Not反义句式"
    },
    {
      "id": "A68",
      "level": "A",
      "num": 68,
      "title": "Building with Blocks",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "A69",
      "level": "A",
      "num": 69,
      "title": "My House",
      "type": "F",
      "theme": "社会与人文",
      "lang": "My句式"
    },
    {
      "id": "A70",
      "level": "A",
      "num": 70,
      "title": "Smile",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "A71",
      "level": "A",
      "num": 71,
      "title": "Make Me Laugh",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "A72",
      "level": "A",
      "num": 72,
      "title": "I Set the Table",
      "type": "F",
      "theme": "社会与人文",
      "lang": "I句式"
    },
    {
      "id": "A73",
      "level": "A",
      "num": 73,
      "title": "I Save Money",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "I句式"
    },
    {
      "id": "A74",
      "level": "A",
      "num": 74,
      "title": "My Body",
      "type": "NF",
      "theme": "身体与健康",
      "lang": "My句式"
    },
    {
      "id": "A75",
      "level": "A",
      "num": 75,
      "title": "What Makes Me Happy?",
      "type": "F",
      "theme": "身体与健康",
      "lang": "What句式"
    },
    {
      "id": "A76",
      "level": "A",
      "num": 76,
      "title": "My Hair",
      "type": "NF",
      "theme": "身体与健康",
      "lang": "My句式"
    },
    {
      "id": "A77",
      "level": "A",
      "num": 77,
      "title": "Athletes",
      "type": "NF",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "A78",
      "level": "A",
      "num": 78,
      "title": "Nice, Not Nice",
      "type": "F",
      "theme": "身体与健康",
      "lang": "Not反义句式"
    },
    {
      "id": "A79",
      "level": "A",
      "num": 79,
      "title": "Safe, Not Safe",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "Not反义句式"
    },
    {
      "id": "A80",
      "level": "A",
      "num": 80,
      "title": "You Can Dance",
      "type": "F",
      "theme": "物质与能量",
      "lang": "综合"
    },
    {
      "id": "A81",
      "level": "A",
      "num": 81,
      "title": "I Can Skate",
      "type": "F",
      "theme": "物质与能量",
      "lang": "I句式"
    },
    {
      "id": "A82",
      "level": "A",
      "num": 82,
      "title": "My Little Brother",
      "type": "F",
      "theme": "社会与人文",
      "lang": "My句式"
    },
    {
      "id": "A83",
      "level": "A",
      "num": 83,
      "title": "Muscles",
      "type": "NF",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "A84",
      "level": "A",
      "num": 84,
      "title": "Dad and I",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "A85",
      "level": "A",
      "num": 85,
      "title": "For Mom",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "A86",
      "level": "A",
      "num": 86,
      "title": "My Face",
      "type": "NF",
      "theme": "身体与健康",
      "lang": "My句式"
    },
    {
      "id": "A87",
      "level": "A",
      "num": 87,
      "title": "All Kinds of Faces",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "AllKinds句式"
    },
    {
      "id": "A88",
      "level": "A",
      "num": 88,
      "title": "Grandparents Are Great!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "A89",
      "level": "A",
      "num": 89,
      "title": "We Can Make Sounds",
      "type": "NF",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "A90",
      "level": "A",
      "num": 90,
      "title": "In and Out",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "介词反义"
    },
    {
      "id": "A91",
      "level": "A",
      "num": 91,
      "title": "Up and Down",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "介词反义"
    },
    {
      "id": "A92",
      "level": "A",
      "num": 92,
      "title": "Who Has It?",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "A93",
      "level": "A",
      "num": 93,
      "title": "This Smells!",
      "type": "NF",
      "theme": "身体与健康",
      "lang": "This句式"
    },
    {
      "id": "A94",
      "level": "A",
      "num": 94,
      "title": "Opposites",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "介词反义"
    },
    {
      "id": "A95",
      "level": "A",
      "num": 95,
      "title": "Hot and Cold",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "介词反义"
    },
    {
      "id": "A96",
      "level": "A",
      "num": 96,
      "title": "Christmas Cookies",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "A97",
      "level": "A",
      "num": 97,
      "title": "Where They Hid",
      "type": "F",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "A98",
      "level": "A",
      "num": 98,
      "title": "This Lizard",
      "type": "NF",
      "theme": "生命世界",
      "lang": "This句式"
    },
    {
      "id": "A99",
      "level": "A",
      "num": 99,
      "title": "Scary, Not Scary",
      "type": "F",
      "theme": "身体与健康",
      "lang": "Not反义句式"
    },
    {
      "id": "A100",
      "level": "A",
      "num": 100,
      "title": "I Push",
      "type": "F",
      "theme": "物质与能量",
      "lang": "I句式"
    },
    {
      "id": "B01",
      "level": "B",
      "num": 1,
      "title": "Taking Care of Chase",
      "type": "F",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "B02",
      "level": "B",
      "num": 2,
      "title": "The Pet Rats",
      "type": "F",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "B03",
      "level": "B",
      "num": 3,
      "title": "Gracie's Nose",
      "type": "F",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "B04",
      "level": "B",
      "num": 4,
      "title": "Playful Puppy",
      "type": "F",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "B05",
      "level": "B",
      "num": 5,
      "title": "My Pet Dinosaur",
      "type": "F",
      "theme": "生命世界",
      "lang": "My句式"
    },
    {
      "id": "B06",
      "level": "B",
      "num": 6,
      "title": "On the Farm",
      "type": "NF",
      "theme": "生命世界",
      "lang": "场景认知"
    },
    {
      "id": "B07",
      "level": "B",
      "num": 7,
      "title": "Bonkers Likes to Bark",
      "type": "F",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "B08",
      "level": "B",
      "num": 8,
      "title": "Animal Sounds",
      "type": "NF",
      "theme": "生命世界",
      "lang": "感官句式"
    },
    {
      "id": "B09",
      "level": "B",
      "num": 9,
      "title": "Pond Life",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "B10",
      "level": "B",
      "num": 10,
      "title": "Where Is Water?",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "B11",
      "level": "B",
      "num": 11,
      "title": "I Love the Earth",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "I句式"
    },
    {
      "id": "B12",
      "level": "B",
      "num": 12,
      "title": "Animal Coverings",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "B13",
      "level": "B",
      "num": 13,
      "title": "Animal Ears",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "B14",
      "level": "B",
      "num": 14,
      "title": "The New Forest Path",
      "type": "F",
      "theme": "生命世界",
      "lang": "场景认知"
    },
    {
      "id": "B15",
      "level": "B",
      "num": 15,
      "title": "What Has These Feet?",
      "type": "NF",
      "theme": "生命世界",
      "lang": "What句式"
    },
    {
      "id": "B16",
      "level": "B",
      "num": 16,
      "title": "What Has These Stripes?",
      "type": "NF",
      "theme": "生命世界",
      "lang": "What句式"
    },
    {
      "id": "B17",
      "level": "B",
      "num": 17,
      "title": "What Has This Tail?",
      "type": "NF",
      "theme": "生命世界",
      "lang": "What句式"
    },
    {
      "id": "B18",
      "level": "B",
      "num": 18,
      "title": "What Has These Spots?",
      "type": "NF",
      "theme": "生命世界",
      "lang": "What句式"
    },
    {
      "id": "B19",
      "level": "B",
      "num": 19,
      "title": "Amazing Caves",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "B20",
      "level": "B",
      "num": 20,
      "title": "Animals Can Move",
      "type": "NF",
      "theme": "生命世界",
      "lang": "Can句式"
    },
    {
      "id": "B21",
      "level": "B",
      "num": 21,
      "title": "Rain in the City",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "B22",
      "level": "B",
      "num": 22,
      "title": "Rain in the Country",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "B23",
      "level": "B",
      "num": 23,
      "title": "Gobi Desert Animals",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "B24",
      "level": "B",
      "num": 24,
      "title": "Wind Blows",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "B25",
      "level": "B",
      "num": 25,
      "title": "How Many Legs?",
      "type": "NF",
      "theme": "生命世界",
      "lang": "数字句式"
    },
    {
      "id": "B26",
      "level": "B",
      "num": 26,
      "title": "What Flies in the Sky?",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "What句式"
    },
    {
      "id": "B27",
      "level": "B",
      "num": 27,
      "title": "Paint It Purple",
      "type": "F",
      "theme": "思维与创意",
      "lang": "颜色句式"
    },
    {
      "id": "B28",
      "level": "B",
      "num": 28,
      "title": "Our Show",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "B29",
      "level": "B",
      "num": 29,
      "title": "Ten",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "数字句式"
    },
    {
      "id": "B30",
      "level": "B",
      "num": 30,
      "title": "My Brain",
      "type": "NF",
      "theme": "身体与健康",
      "lang": "My句式"
    },
    {
      "id": "B31",
      "level": "B",
      "num": 31,
      "title": "High or Low?",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "介词反义"
    },
    {
      "id": "B32",
      "level": "B",
      "num": 32,
      "title": "Healthy Snacks",
      "type": "NF",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "B33",
      "level": "B",
      "num": 33,
      "title": "Things Made of Wood",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合"
    },
    {
      "id": "B34",
      "level": "B",
      "num": 34,
      "title": "What Gives Cover?",
      "type": "NF",
      "theme": "生命世界",
      "lang": "What句式"
    },
    {
      "id": "B35",
      "level": "B",
      "num": 35,
      "title": "Fun with Paper",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "B36",
      "level": "B",
      "num": 36,
      "title": "Bananas Sometimes",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "B37",
      "level": "B",
      "num": 37,
      "title": "Henry's Hike",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "B38",
      "level": "B",
      "num": 38,
      "title": "Applesauce",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "B39",
      "level": "B",
      "num": 39,
      "title": "We Pack a Picnic",
      "type": "F",
      "theme": "社会与人文",
      "lang": "We句式"
    },
    {
      "id": "B40",
      "level": "B",
      "num": 40,
      "title": "The Picnic",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "B41",
      "level": "B",
      "num": 41,
      "title": "We Make Cookies",
      "type": "F",
      "theme": "身体与健康",
      "lang": "We句式"
    },
    {
      "id": "B42",
      "level": "B",
      "num": 42,
      "title": "Halloween Costumes",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "B43",
      "level": "B",
      "num": 43,
      "title": "On Thanksgiving",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "B44",
      "level": "B",
      "num": 44,
      "title": "The Aquarium",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "B45",
      "level": "B",
      "num": 45,
      "title": "Too High",
      "type": "F",
      "theme": "物质与能量",
      "lang": "介词反义"
    },
    {
      "id": "B46",
      "level": "B",
      "num": 46,
      "title": "Trucks",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合"
    },
    {
      "id": "B47",
      "level": "B",
      "num": 47,
      "title": "So Many Shops",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "AllKinds句式"
    },
    {
      "id": "B48",
      "level": "B",
      "num": 48,
      "title": "Animal Caution Signs",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "B49",
      "level": "B",
      "num": 49,
      "title": "Stop That Cat!",
      "type": "F",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "B50",
      "level": "B",
      "num": 50,
      "title": "Go Animals Go",
      "type": "NF",
      "theme": "生命世界",
      "lang": "Go句式"
    },
    {
      "id": "B51",
      "level": "B",
      "num": 51,
      "title": "I Read a Book",
      "type": "F",
      "theme": "社会与人文",
      "lang": "I句式"
    },
    {
      "id": "B52",
      "level": "B",
      "num": 52,
      "title": "I Pick Up",
      "type": "F",
      "theme": "社会与人文",
      "lang": "I句式"
    },
    {
      "id": "B53",
      "level": "B",
      "num": 53,
      "title": "You and I",
      "type": "F",
      "theme": "社会与人文",
      "lang": "I句式"
    },
    {
      "id": "B54",
      "level": "B",
      "num": 54,
      "title": "Carlos and His Teacher",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "B55",
      "level": "B",
      "num": 55,
      "title": "Maria and Her Teacher",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "B56",
      "level": "B",
      "num": 56,
      "title": "I Love Art Class",
      "type": "F",
      "theme": "思维与创意",
      "lang": "I句式"
    },
    {
      "id": "B57",
      "level": "B",
      "num": 57,
      "title": "Games We Play",
      "type": "F",
      "theme": "社会与人文",
      "lang": "We句式"
    },
    {
      "id": "B58",
      "level": "B",
      "num": 58,
      "title": "The Big Game",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "B59",
      "level": "B",
      "num": 59,
      "title": "Clean Is Not for Me!",
      "type": "F",
      "theme": "身体与健康",
      "lang": "Not反义句式"
    },
    {
      "id": "B60",
      "level": "B",
      "num": 60,
      "title": "Beach Fun",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "B61",
      "level": "B",
      "num": 61,
      "title": "Taking the Bus",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "B62",
      "level": "B",
      "num": 62,
      "title": "Too Many Leaves",
      "type": "F",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "B63",
      "level": "B",
      "num": 63,
      "title": "A Cold Day",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "B64",
      "level": "B",
      "num": 64,
      "title": "The Kids Built It",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "B65",
      "level": "B",
      "num": 65,
      "title": "Firefly",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "B66",
      "level": "B",
      "num": 66,
      "title": "Under My Bed",
      "type": "F",
      "theme": "身体与健康",
      "lang": "介词反义"
    },
    {
      "id": "B67",
      "level": "B",
      "num": 67,
      "title": "We Do Not Share",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Not反义句式"
    },
    {
      "id": "B68",
      "level": "B",
      "num": 68,
      "title": "After School",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "B69",
      "level": "B",
      "num": 69,
      "title": "All By Myself",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "B70",
      "level": "B",
      "num": 70,
      "title": "Boats",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合"
    },
    {
      "id": "B71",
      "level": "B",
      "num": 71,
      "title": "Old and New",
      "type": "F",
      "theme": "思维与创意",
      "lang": "介词反义"
    },
    {
      "id": "B72",
      "level": "B",
      "num": 72,
      "title": "The Sandwich",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "B73",
      "level": "B",
      "num": 73,
      "title": "Valentines All Around",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "B74",
      "level": "B",
      "num": 74,
      "title": "Mixing Colors",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "颜色句式"
    },
    {
      "id": "B75",
      "level": "B",
      "num": 75,
      "title": "It Is School Time",
      "type": "F",
      "theme": "社会与人文",
      "lang": "It句式"
    },
    {
      "id": "B76",
      "level": "B",
      "num": 76,
      "title": "Time for Soccer",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "B77",
      "level": "B",
      "num": 77,
      "title": "I Am a Community Worker",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "I句式"
    },
    {
      "id": "B78",
      "level": "B",
      "num": 78,
      "title": "Winter Fun",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "B79",
      "level": "B",
      "num": 79,
      "title": "It Is Spring",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "季节句式"
    },
    {
      "id": "B80",
      "level": "B",
      "num": 80,
      "title": "Sophie Goes for a Walk",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Goes句式"
    },
    {
      "id": "B81",
      "level": "B",
      "num": 81,
      "title": "Yours or Mine?",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "B82",
      "level": "B",
      "num": 82,
      "title": "Near and Far Away",
      "type": "F",
      "theme": "思维与创意",
      "lang": "介词反义"
    },
    {
      "id": "B83",
      "level": "B",
      "num": 83,
      "title": "You Can Go",
      "type": "F",
      "theme": "物质与能量",
      "lang": "Can句式"
    },
    {
      "id": "B84",
      "level": "B",
      "num": 84,
      "title": "Swing, Sydney, Swing!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "B85",
      "level": "B",
      "num": 85,
      "title": "Bridges",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合"
    },
    {
      "id": "B86",
      "level": "B",
      "num": 86,
      "title": "Where?",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "B87",
      "level": "B",
      "num": 87,
      "title": "Are These His or Hers?",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "B88",
      "level": "B",
      "num": 88,
      "title": "Lazy Lulu",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "B89",
      "level": "B",
      "num": 89,
      "title": "Light and Heavy",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "介词反义"
    },
    {
      "id": "B90",
      "level": "B",
      "num": 90,
      "title": "The Hungry Goat",
      "type": "F",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "B91",
      "level": "B",
      "num": 91,
      "title": "Three Baby Birds",
      "type": "NF",
      "theme": "生命世界",
      "lang": "数字句式"
    },
    {
      "id": "B92",
      "level": "B",
      "num": 92,
      "title": "Two Little Dicky Birds",
      "type": "NF",
      "theme": "生命世界",
      "lang": "数字句式"
    },
    {
      "id": "B93",
      "level": "B",
      "num": 93,
      "title": "Wet Wally",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "B94",
      "level": "B",
      "num": 94,
      "title": "Drop It!",
      "type": "F",
      "theme": "物质与能量",
      "lang": "综合"
    },
    {
      "id": "B95",
      "level": "B",
      "num": 95,
      "title": "Mouse in the City",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "B96",
      "level": "B",
      "num": 96,
      "title": "Crows On a Wire",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "B97",
      "level": "B",
      "num": 97,
      "title": "Wake Up, Rooster!",
      "type": "F",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "B98",
      "level": "B",
      "num": 98,
      "title": "Make a Superhero!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "B99",
      "level": "B",
      "num": 99,
      "title": "This Turtle",
      "type": "NF",
      "theme": "生命世界",
      "lang": "This句式"
    },
    {
      "id": "C01",
      "level": "C",
      "num": 1,
      "title": "What Is at the Zoo?",
      "type": "NF",
      "theme": "生命世界",
      "lang": "What句式"
    },
    {
      "id": "C02",
      "level": "C",
      "num": 2,
      "title": "More Baby Animals",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "C03",
      "level": "C",
      "num": 3,
      "title": "All About Spiders",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "C04",
      "level": "C",
      "num": 4,
      "title": "Ladybugs",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "C05",
      "level": "C",
      "num": 5,
      "title": "Apple Tree",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "C06",
      "level": "C",
      "num": 6,
      "title": "How Frogs Grow",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "C07",
      "level": "C",
      "num": 7,
      "title": "Moms Do So Much",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "C08",
      "level": "C",
      "num": 8,
      "title": "Allie and Ollie",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "C09",
      "level": "C",
      "num": 9,
      "title": "What Animals Eat",
      "type": "NF",
      "theme": "生命世界",
      "lang": "What句式"
    },
    {
      "id": "C10",
      "level": "C",
      "num": 10,
      "title": "The Animals of Canada",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "C11",
      "level": "C",
      "num": 11,
      "title": "Different Kinds of Sharks",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "C12",
      "level": "C",
      "num": 12,
      "title": "We Count",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "数字句式"
    },
    {
      "id": "C13",
      "level": "C",
      "num": 13,
      "title": "Many Kinds of Dinosaurs",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "C14",
      "level": "C",
      "num": 14,
      "title": "Snow Falls",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "C15",
      "level": "C",
      "num": 15,
      "title": "Strange Animals",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "C16",
      "level": "C",
      "num": 16,
      "title": "That's a Fruit?",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "C17",
      "level": "C",
      "num": 17,
      "title": "All About Penguins",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "C18",
      "level": "C",
      "num": 18,
      "title": "All About Earthworms",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "C19",
      "level": "C",
      "num": 19,
      "title": "Ice",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "C20",
      "level": "C",
      "num": 20,
      "title": "Animals That Sting",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "C21",
      "level": "C",
      "num": 21,
      "title": "How Many?",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "数字句式"
    },
    {
      "id": "C22",
      "level": "C",
      "num": 22,
      "title": "Spirals, Spirals Everywhere",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "Shapes句式"
    },
    {
      "id": "C23",
      "level": "C",
      "num": 23,
      "title": "SPACE",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "C24",
      "level": "C",
      "num": 24,
      "title": "The Moon",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "C25",
      "level": "C",
      "num": 25,
      "title": "Then and Now",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "C26",
      "level": "C",
      "num": 26,
      "title": "The Woodsy Band Jam",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "C27",
      "level": "C",
      "num": 27,
      "title": "Yummy, Yummy",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "C28",
      "level": "C",
      "num": 28,
      "title": "Mash the Potatoes",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "C29",
      "level": "C",
      "num": 29,
      "title": "Making Salsa!",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "C30",
      "level": "C",
      "num": 30,
      "title": "We Learn to Swim",
      "type": "F",
      "theme": "身体与健康",
      "lang": "We句式"
    },
    {
      "id": "C31",
      "level": "C",
      "num": 31,
      "title": "The Easter Egg Hunt",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "C32",
      "level": "C",
      "num": 32,
      "title": "What Can I Be?",
      "type": "F",
      "theme": "社会与人文",
      "lang": "What句式"
    },
    {
      "id": "C33",
      "level": "C",
      "num": 33,
      "title": "Going Away",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "C34",
      "level": "C",
      "num": 34,
      "title": "A Place Called Home",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "C35",
      "level": "C",
      "num": 35,
      "title": "City Shapes",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "Shapes句式"
    },
    {
      "id": "C36",
      "level": "C",
      "num": 36,
      "title": "Road Trip",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "C37",
      "level": "C",
      "num": 37,
      "title": "Shadows",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "C38",
      "level": "C",
      "num": 38,
      "title": "Building a Road",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "C39",
      "level": "C",
      "num": 39,
      "title": "Airplanes",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合"
    },
    {
      "id": "C40",
      "level": "C",
      "num": 40,
      "title": "Rocks",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "C41",
      "level": "C",
      "num": 41,
      "title": "Get In",
      "type": "F",
      "theme": "物质与能量",
      "lang": "介词反义"
    },
    {
      "id": "C42",
      "level": "C",
      "num": 42,
      "title": "We Buy",
      "type": "F",
      "theme": "社会与人文",
      "lang": "We句式"
    },
    {
      "id": "C43",
      "level": "C",
      "num": 43,
      "title": "Birthday Party",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "C44",
      "level": "C",
      "num": 44,
      "title": "Fall Fun",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "季节句式"
    },
    {
      "id": "C45",
      "level": "C",
      "num": 45,
      "title": "Busy at School",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "C46",
      "level": "C",
      "num": 46,
      "title": "Taking Turns",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "C47",
      "level": "C",
      "num": 47,
      "title": "What Can We Draw?",
      "type": "F",
      "theme": "思维与创意",
      "lang": "What句式"
    },
    {
      "id": "C48",
      "level": "C",
      "num": 48,
      "title": "I Can Be",
      "type": "F",
      "theme": "社会与人文",
      "lang": "I句式"
    },
    {
      "id": "C49",
      "level": "C",
      "num": 49,
      "title": "At the Fair",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "C50",
      "level": "C",
      "num": 50,
      "title": "Teeth Brushing Fun",
      "type": "NF",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "C51",
      "level": "C",
      "num": 51,
      "title": "What I Want",
      "type": "F",
      "theme": "社会与人文",
      "lang": "What句式"
    },
    {
      "id": "C52",
      "level": "C",
      "num": 52,
      "title": "My Clothes Are Too Small",
      "type": "F",
      "theme": "身体与健康",
      "lang": "My句式"
    },
    {
      "id": "C53",
      "level": "C",
      "num": 53,
      "title": "Pairs",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "数字句式"
    },
    {
      "id": "C55",
      "level": "C",
      "num": 55,
      "title": "I Won't",
      "type": "F",
      "theme": "社会与人文",
      "lang": "I句式"
    },
    {
      "id": "C56",
      "level": "C",
      "num": 56,
      "title": "Jack and Lily's Favorite Food",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "C57",
      "level": "C",
      "num": 57,
      "title": "Spring-Cleaning!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "季节句式"
    },
    {
      "id": "C58",
      "level": "C",
      "num": 58,
      "title": "Machines at Home",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合"
    },
    {
      "id": "C59",
      "level": "C",
      "num": 59,
      "title": "I Wonder",
      "type": "F",
      "theme": "思维与创意",
      "lang": "I句式"
    },
    {
      "id": "C60",
      "level": "C",
      "num": 60,
      "title": "Go Away, Lily",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Go句式"
    },
    {
      "id": "C61",
      "level": "C",
      "num": 61,
      "title": "Lucy Did It",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "C62",
      "level": "C",
      "num": 62,
      "title": "We Make a Snowman",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "季节句式"
    },
    {
      "id": "C63",
      "level": "C",
      "num": 63,
      "title": "New Again",
      "type": "F",
      "theme": "物质与能量",
      "lang": "综合"
    },
    {
      "id": "C64",
      "level": "C",
      "num": 64,
      "title": "Water Fight!",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "C65",
      "level": "C",
      "num": 65,
      "title": "Tools",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合"
    },
    {
      "id": "C66",
      "level": "C",
      "num": 66,
      "title": "Pick Me!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "C67",
      "level": "C",
      "num": 67,
      "title": "We Make Good Choices",
      "type": "F",
      "theme": "社会与人文",
      "lang": "We句式"
    },
    {
      "id": "C68",
      "level": "C",
      "num": 68,
      "title": "What's for Breakfast?",
      "type": "F",
      "theme": "身体与健康",
      "lang": "What句式"
    },
    {
      "id": "C69",
      "level": "C",
      "num": 69,
      "title": "Winter Hats",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "季节句式"
    },
    {
      "id": "C70",
      "level": "C",
      "num": 70,
      "title": "You Like What?",
      "type": "F",
      "theme": "社会与人文",
      "lang": "What句式"
    },
    {
      "id": "C71",
      "level": "C",
      "num": 71,
      "title": "The Festival of Lights",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "C72",
      "level": "C",
      "num": 72,
      "title": "I Can Help",
      "type": "F",
      "theme": "社会与人文",
      "lang": "I句式"
    },
    {
      "id": "C73",
      "level": "C",
      "num": 73,
      "title": "Quiet or Loud?",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "介词反义"
    },
    {
      "id": "C74",
      "level": "C",
      "num": 74,
      "title": "How Many Wheels?",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "数字句式"
    },
    {
      "id": "C75",
      "level": "C",
      "num": 75,
      "title": "What Do I Wear?",
      "type": "F",
      "theme": "身体与健康",
      "lang": "What句式"
    },
    {
      "id": "C76",
      "level": "C",
      "num": 76,
      "title": "Wash Your Hands",
      "type": "NF",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "C77",
      "level": "C",
      "num": 77,
      "title": "Elephant Car Wash",
      "type": "F",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "C78",
      "level": "C",
      "num": 78,
      "title": "How Things Move",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合"
    },
    {
      "id": "C79",
      "level": "C",
      "num": 79,
      "title": "Fall Foods",
      "type": "NF",
      "theme": "身体与健康",
      "lang": "季节句式"
    },
    {
      "id": "C80",
      "level": "C",
      "num": 80,
      "title": "Feelings",
      "type": "NF",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "C81",
      "level": "C",
      "num": 81,
      "title": "What's My Job?",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "What句式"
    },
    {
      "id": "C82",
      "level": "C",
      "num": 82,
      "title": "When Is Nighttime?",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "C83",
      "level": "C",
      "num": 83,
      "title": "Take a Bite",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "C84",
      "level": "C",
      "num": 84,
      "title": "Fall",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "季节句式"
    },
    {
      "id": "C85",
      "level": "C",
      "num": 85,
      "title": "What Season Is It?",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "季节句式"
    },
    {
      "id": "C86",
      "level": "C",
      "num": 86,
      "title": "My Teacher",
      "type": "F",
      "theme": "社会与人文",
      "lang": "My句式"
    },
    {
      "id": "C87",
      "level": "C",
      "num": 87,
      "title": "Sherman Sure Is Shy",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "C88",
      "level": "C",
      "num": 88,
      "title": "Selfish Sasha",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "C89",
      "level": "C",
      "num": 89,
      "title": "Open and Close",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "介词反义"
    },
    {
      "id": "C90",
      "level": "C",
      "num": 90,
      "title": "There Is a Mouse in the House",
      "type": "F",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "C91",
      "level": "C",
      "num": 91,
      "title": "Mongo and Cutie",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "C92",
      "level": "C",
      "num": 92,
      "title": "One Stubborn Horse",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "C93",
      "level": "C",
      "num": 93,
      "title": "Who Stole the North Pole?",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "C94",
      "level": "C",
      "num": 94,
      "title": "Who, Who, Who?",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "C95",
      "level": "C",
      "num": 95,
      "title": "Abby and Zots",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "C96",
      "level": "C",
      "num": 96,
      "title": "I Want to Be a Cat",
      "type": "F",
      "theme": "生命世界",
      "lang": "I句式"
    },
    {
      "id": "C97",
      "level": "C",
      "num": 97,
      "title": "The Box",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "C98",
      "level": "C",
      "num": 98,
      "title": "Too Hot!",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "C99",
      "level": "C",
      "num": 99,
      "title": "Build a World",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "C100",
      "level": "C",
      "num": 100,
      "title": "What Does the Wind Move?",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "What句式"
    },
    {
      "id": "D01",
      "level": "D",
      "num": 1,
      "title": "Grow",
      "type": "F",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "D02",
      "level": "D",
      "num": 2,
      "title": "Bees Feed Me",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "D03",
      "level": "D",
      "num": 3,
      "title": "Whale Watching",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "D04",
      "level": "D",
      "num": 4,
      "title": "Frog Is Hungry",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "D05",
      "level": "D",
      "num": 5,
      "title": "Where Animals Live",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "D06",
      "level": "D",
      "num": 6,
      "title": "Swamps",
      "type": "NF",
      "theme": "生命世界",
      "lang": "天气水句式"
    },
    {
      "id": "D07",
      "level": "D",
      "num": 7,
      "title": "Bats Day and Night",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "D08",
      "level": "D",
      "num": 8,
      "title": "Welcome Back",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "D09",
      "level": "D",
      "num": 9,
      "title": "Where Plants Grow",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "D10",
      "level": "D",
      "num": 10,
      "title": "Fog",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "D11",
      "level": "D",
      "num": 11,
      "title": "Clouds",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "D12",
      "level": "D",
      "num": 12,
      "title": "Future Flowers",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "D13",
      "level": "D",
      "num": 13,
      "title": "Under That Rock",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "介词反义"
    },
    {
      "id": "D14",
      "level": "D",
      "num": 14,
      "title": "No",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Not反义句式"
    },
    {
      "id": "D15",
      "level": "D",
      "num": 15,
      "title": "Polly Gets Out",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "D16",
      "level": "D",
      "num": 16,
      "title": "Lily the Cat",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "D17",
      "level": "D",
      "num": 17,
      "title": "Insect Wings",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "D18",
      "level": "D",
      "num": 18,
      "title": "Animal Horns",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "D19",
      "level": "D",
      "num": 19,
      "title": "To the Woods",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "D20",
      "level": "D",
      "num": 20,
      "title": "The Busy Pond",
      "type": "NF",
      "theme": "生命世界",
      "lang": "天气水句式"
    },
    {
      "id": "D21",
      "level": "D",
      "num": 21,
      "title": "Tadpole Teasing",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "D22",
      "level": "D",
      "num": 22,
      "title": "Cranberries",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "D23",
      "level": "D",
      "num": 23,
      "title": "River Otters",
      "type": "NF",
      "theme": "生命世界",
      "lang": "天气水句式"
    },
    {
      "id": "D24",
      "level": "D",
      "num": 24,
      "title": "Reindeer Are Real",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "D25",
      "level": "D",
      "num": 25,
      "title": "All About Foxes",
      "type": "NF",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "D26",
      "level": "D",
      "num": 26,
      "title": "Tiger Sharks",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "D27",
      "level": "D",
      "num": 27,
      "title": "Who Runs Faster?",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "D28",
      "level": "D",
      "num": 28,
      "title": "How Do They Swim?",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "D29",
      "level": "D",
      "num": 29,
      "title": "Animal Tongues",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "D30",
      "level": "D",
      "num": 30,
      "title": "Why Does an Octopus Need Eight Arms?",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "D31",
      "level": "D",
      "num": 31,
      "title": "Less Than",
      "type": "F",
      "theme": "思维与创意",
      "lang": "数字句式"
    },
    {
      "id": "D32",
      "level": "D",
      "num": 32,
      "title": "Greater Than",
      "type": "F",
      "theme": "身体与健康",
      "lang": "数字句式"
    },
    {
      "id": "D33",
      "level": "D",
      "num": 33,
      "title": "I Count 100 Things",
      "type": "F",
      "theme": "思维与创意",
      "lang": "I句式"
    },
    {
      "id": "D34",
      "level": "D",
      "num": 34,
      "title": "At the Library",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "D35",
      "level": "D",
      "num": 35,
      "title": "A Day for Dad",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "D36",
      "level": "D",
      "num": 36,
      "title": "My Neighborhood",
      "type": "F",
      "theme": "社会与人文",
      "lang": "My句式"
    },
    {
      "id": "D37",
      "level": "D",
      "num": 37,
      "title": "Getting Around the City",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "D38",
      "level": "D",
      "num": 38,
      "title": "Give Them Back!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "D39",
      "level": "D",
      "num": 39,
      "title": "Maria's Halloween",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "D40",
      "level": "D",
      "num": 40,
      "title": "Country Places",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "数字句式"
    },
    {
      "id": "D41",
      "level": "D",
      "num": 41,
      "title": "My New School",
      "type": "F",
      "theme": "社会与人文",
      "lang": "My句式"
    },
    {
      "id": "D42",
      "level": "D",
      "num": 42,
      "title": "My New City",
      "type": "F",
      "theme": "社会与人文",
      "lang": "My句式"
    },
    {
      "id": "D43",
      "level": "D",
      "num": 43,
      "title": "At a Fall Fair",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "季节句式"
    },
    {
      "id": "D44",
      "level": "D",
      "num": 44,
      "title": "Imagine the Beach",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "D45",
      "level": "D",
      "num": 45,
      "title": "Bubbles",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "D46",
      "level": "D",
      "num": 46,
      "title": "We Give Away",
      "type": "F",
      "theme": "社会与人文",
      "lang": "We句式"
    },
    {
      "id": "D47",
      "level": "D",
      "num": 47,
      "title": "To the Store",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "D48",
      "level": "D",
      "num": 48,
      "title": "Our Good Night Story",
      "type": "F",
      "theme": "思维与创意",
      "lang": "Go句式"
    },
    {
      "id": "D49",
      "level": "D",
      "num": 49,
      "title": "Nothing Scares Me!",
      "type": "F",
      "theme": "身体与健康",
      "lang": "Not反义句式"
    },
    {
      "id": "D50",
      "level": "D",
      "num": 50,
      "title": "What Do You See?",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "What句式"
    },
    {
      "id": "D51",
      "level": "D",
      "num": 51,
      "title": "Let's Make a Bird Feeder",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "D52",
      "level": "D",
      "num": 52,
      "title": "Mud Balls!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "D53",
      "level": "D",
      "num": 53,
      "title": "Animal Costumes",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "D54",
      "level": "D",
      "num": 54,
      "title": "Because You Recycle",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "D55",
      "level": "D",
      "num": 55,
      "title": "I Need an Eraser",
      "type": "F",
      "theme": "社会与人文",
      "lang": "I句式"
    },
    {
      "id": "D56",
      "level": "D",
      "num": 56,
      "title": "Buddy the Bear",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "D57",
      "level": "D",
      "num": 57,
      "title": "Shave It Off!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "D58",
      "level": "D",
      "num": 58,
      "title": "Katie and Katie",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "D59",
      "level": "D",
      "num": 59,
      "title": "Just a Trim",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "D60",
      "level": "D",
      "num": 60,
      "title": "My First Class Play",
      "type": "F",
      "theme": "社会与人文",
      "lang": "My句式"
    },
    {
      "id": "D61",
      "level": "D",
      "num": 61,
      "title": "Backyard Camping",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "D62",
      "level": "D",
      "num": 62,
      "title": "I Hide",
      "type": "F",
      "theme": "社会与人文",
      "lang": "I句式"
    },
    {
      "id": "D63",
      "level": "D",
      "num": 63,
      "title": "Pillow Fort Password",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "D64",
      "level": "D",
      "num": 64,
      "title": "Tootsie Can Talk",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Can句式"
    },
    {
      "id": "D65",
      "level": "D",
      "num": 65,
      "title": "Dollars and Cents",
      "type": "F",
      "theme": "思维与创意",
      "lang": "数字句式"
    },
    {
      "id": "D66",
      "level": "D",
      "num": 66,
      "title": "I Like My Hair",
      "type": "F",
      "theme": "身体与健康",
      "lang": "I句式"
    },
    {
      "id": "D67",
      "level": "D",
      "num": 67,
      "title": "I Did Not Give Up!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "I句式"
    },
    {
      "id": "D68",
      "level": "D",
      "num": 68,
      "title": "Who Wants to Play Basketball?",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "D69",
      "level": "D",
      "num": 69,
      "title": "Hobbies",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "D70",
      "level": "D",
      "num": 70,
      "title": "Senses",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "D71",
      "level": "D",
      "num": 71,
      "title": "Community Helpers",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "D72",
      "level": "D",
      "num": 72,
      "title": "Caretakers",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "D73",
      "level": "D",
      "num": 73,
      "title": "Workers",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "D74",
      "level": "D",
      "num": 74,
      "title": "The Team",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "D75",
      "level": "D",
      "num": 75,
      "title": "Amazing Places to Work",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "D76",
      "level": "D",
      "num": 76,
      "title": "Why Can't I?",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "Can句式"
    },
    {
      "id": "D77",
      "level": "D",
      "num": 77,
      "title": "Sky High!",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "D78",
      "level": "D",
      "num": 78,
      "title": "Best Friends Q and U",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "D79",
      "level": "D",
      "num": 79,
      "title": "The Sky Is Falling",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "季节句式"
    },
    {
      "id": "D80",
      "level": "D",
      "num": 80,
      "title": "What?",
      "type": "F",
      "theme": "社会与人文",
      "lang": "What句式"
    },
    {
      "id": "D81",
      "level": "D",
      "num": 81,
      "title": "Swamp Music",
      "type": "F",
      "theme": "生命世界",
      "lang": "天气水句式"
    },
    {
      "id": "D82",
      "level": "D",
      "num": 82,
      "title": "The Mitten",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "D83",
      "level": "D",
      "num": 83,
      "title": "Stone Soup",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "D84",
      "level": "D",
      "num": 84,
      "title": "Little Loon",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "D85",
      "level": "D",
      "num": 85,
      "title": "Pick a Pie",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "D86",
      "level": "D",
      "num": 86,
      "title": "Do Not Eat That!",
      "type": "F",
      "theme": "身体与健康",
      "lang": "Not反义句式"
    },
    {
      "id": "D87",
      "level": "D",
      "num": 87,
      "title": "What to Wear?",
      "type": "NF",
      "theme": "身体与健康",
      "lang": "What句式"
    },
    {
      "id": "D88",
      "level": "D",
      "num": 88,
      "title": "Silent e",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "D89",
      "level": "D",
      "num": 89,
      "title": "How We Get to School",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "We句式"
    },
    {
      "id": "D90",
      "level": "D",
      "num": 90,
      "title": "The Wheel",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "D91",
      "level": "D",
      "num": 91,
      "title": "These Bees",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "D92",
      "level": "D",
      "num": 92,
      "title": "So Many Fish",
      "type": "NF",
      "theme": "生命世界",
      "lang": "数字句式"
    },
    {
      "id": "E01",
      "level": "E",
      "num": 1,
      "title": "Arctic Animals",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "E02",
      "level": "E",
      "num": 2,
      "title": "All About Orcas",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "E03",
      "level": "E",
      "num": 3,
      "title": "Which Tree?",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "E04",
      "level": "E",
      "num": 4,
      "title": "Places Plants and Animals Live",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "E05",
      "level": "E",
      "num": 5,
      "title": "Not Enough Snow",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "Not反义句式"
    },
    {
      "id": "E06",
      "level": "E",
      "num": 6,
      "title": "I Am Your New Plant",
      "type": "F",
      "theme": "生命世界",
      "lang": "I句式"
    },
    {
      "id": "E07",
      "level": "E",
      "num": 7,
      "title": "Country Animals",
      "type": "NF",
      "theme": "生命世界",
      "lang": "数字句式"
    },
    {
      "id": "E08",
      "level": "E",
      "num": 8,
      "title": "What's in That Pouch?",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "What句式"
    },
    {
      "id": "E09",
      "level": "E",
      "num": 9,
      "title": "In the Mountains",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "介词反义"
    },
    {
      "id": "E10",
      "level": "E",
      "num": 10,
      "title": "The First Strawberry",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "E11",
      "level": "E",
      "num": 11,
      "title": "The Four Seasons",
      "type": "NF",
      "theme": "生命世界",
      "lang": "季节句式"
    },
    {
      "id": "E12",
      "level": "E",
      "num": 12,
      "title": "The Storm",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "E13",
      "level": "E",
      "num": 13,
      "title": "A Walk With Mom",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "E14",
      "level": "E",
      "num": 14,
      "title": "Sloth Wants to Snooze",
      "type": "F",
      "theme": "生命世界",
      "lang": "Not反义句式"
    },
    {
      "id": "E15",
      "level": "E",
      "num": 15,
      "title": "Class Pets",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "E16",
      "level": "E",
      "num": 16,
      "title": "City Animals",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "E18",
      "level": "E",
      "num": 18,
      "title": "All About Coyotes",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "E19",
      "level": "E",
      "num": 19,
      "title": "Shapes in Tide Pools",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "Shapes句式"
    },
    {
      "id": "E20",
      "level": "E",
      "num": 20,
      "title": "All Kinds of Musical Instruments",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "AllKinds句式"
    },
    {
      "id": "E21",
      "level": "E",
      "num": 21,
      "title": "How Many Teeth?",
      "type": "NF",
      "theme": "身体与健康",
      "lang": "数字句式"
    },
    {
      "id": "E22",
      "level": "E",
      "num": 22,
      "title": "Five Seconds to Blastoff!",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "数字句式"
    },
    {
      "id": "E23",
      "level": "E",
      "num": 23,
      "title": "Ava Is a Vegan",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "E24",
      "level": "E",
      "num": 24,
      "title": "Crazy Cakes",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "E25",
      "level": "E",
      "num": 25,
      "title": "Skateboards",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "E26",
      "level": "E",
      "num": 26,
      "title": "City Places",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "E27",
      "level": "E",
      "num": 27,
      "title": "Let's Make Lemonade",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "E28",
      "level": "E",
      "num": 28,
      "title": "Say \"Cheese\"",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "E29",
      "level": "E",
      "num": 29,
      "title": "Let's Carve a Pumpkin",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "E30",
      "level": "E",
      "num": 30,
      "title": "Nothing for Father's Day",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Not反义句式"
    },
    {
      "id": "E31",
      "level": "E",
      "num": 31,
      "title": "KADEN'S KWANZAA",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "E32",
      "level": "E",
      "num": 32,
      "title": "The Leaning Tower",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "E33",
      "level": "E",
      "num": 33,
      "title": "Goodbye Snow",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "Go句式"
    },
    {
      "id": "E34",
      "level": "E",
      "num": 34,
      "title": "Muddy Boots",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "E35",
      "level": "E",
      "num": 35,
      "title": "Caring for Earth",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "E36",
      "level": "E",
      "num": 36,
      "title": "At the Rodeo!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "E37",
      "level": "E",
      "num": 37,
      "title": "Lunch Boxes",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "E38",
      "level": "E",
      "num": 38,
      "title": "Hooray for the Farmer's Market!",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "E39",
      "level": "E",
      "num": 39,
      "title": "Fantastic Phil",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "E40",
      "level": "E",
      "num": 40,
      "title": "Shoes Men Wear",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "E41",
      "level": "E",
      "num": 41,
      "title": "Shoes Women Wear",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "E42",
      "level": "E",
      "num": 42,
      "title": "Getting Ready for School",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "E43",
      "level": "E",
      "num": 43,
      "title": "Stop Snoring",
      "type": "F",
      "theme": "身体与健康",
      "lang": "Not反义句式"
    },
    {
      "id": "E44",
      "level": "E",
      "num": 44,
      "title": "When I Grow Up",
      "type": "NF",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "E45",
      "level": "E",
      "num": 45,
      "title": "How to Tie Your Shoes",
      "type": "NF",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "E46",
      "level": "E",
      "num": 46,
      "title": "Make a Tree Friend",
      "type": "F",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "E47",
      "level": "E",
      "num": 47,
      "title": "Jobs We Do at School",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "E48",
      "level": "E",
      "num": 48,
      "title": "What Is in the Box?",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "What句式"
    },
    {
      "id": "E49",
      "level": "E",
      "num": 49,
      "title": "The Contest",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "E50",
      "level": "E",
      "num": 50,
      "title": "Hugs",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "E51",
      "level": "E",
      "num": 51,
      "title": "Lost and Found",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "E52",
      "level": "E",
      "num": 52,
      "title": "Dolly's Drama Queen Day",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "E53",
      "level": "E",
      "num": 53,
      "title": "The Class Pet",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "E54",
      "level": "E",
      "num": 54,
      "title": "Winter Sports",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "季节句式"
    },
    {
      "id": "E55",
      "level": "E",
      "num": 55,
      "title": "Food Trucks",
      "type": "NF",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "E56",
      "level": "E",
      "num": 56,
      "title": "Bath Time",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "E57",
      "level": "E",
      "num": 57,
      "title": "All Kinds of Factories",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "AllKinds句式"
    },
    {
      "id": "E58",
      "level": "E",
      "num": 58,
      "title": "A Day of Firsts",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "E59",
      "level": "E",
      "num": 59,
      "title": "All Kinds of Farms",
      "type": "NF",
      "theme": "生命世界",
      "lang": "AllKinds句式"
    },
    {
      "id": "E60",
      "level": "E",
      "num": 60,
      "title": "I Am Thankful",
      "type": "F",
      "theme": "社会与人文",
      "lang": "I句式"
    },
    {
      "id": "E61",
      "level": "E",
      "num": 61,
      "title": "Making Pizza",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "E62",
      "level": "E",
      "num": 62,
      "title": "The Sisters C",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "E63",
      "level": "E",
      "num": 63,
      "title": "Sew Who?",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "E64",
      "level": "E",
      "num": 64,
      "title": "Grandparents Day",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "E65",
      "level": "E",
      "num": 65,
      "title": "Doctor Jen",
      "type": "NF",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "E66",
      "level": "E",
      "num": 66,
      "title": "I'd Like to Be",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "E67",
      "level": "E",
      "num": 67,
      "title": "I Work at The Stables",
      "type": "F",
      "theme": "社会与人文",
      "lang": "I句式"
    },
    {
      "id": "E68",
      "level": "E",
      "num": 68,
      "title": "Police Officers",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "E69",
      "level": "E",
      "num": 69,
      "title": "Time for Bed",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "E70",
      "level": "E",
      "num": 70,
      "title": "Calming Down",
      "type": "F",
      "theme": "身体与健康",
      "lang": "介词反义"
    },
    {
      "id": "E71",
      "level": "E",
      "num": 71,
      "title": "A Week With Grandpa",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "E72",
      "level": "E",
      "num": 72,
      "title": "Try, Try Again",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "E73",
      "level": "E",
      "num": 73,
      "title": "The Boy Who Cried \"Wolf!\"",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "E74",
      "level": "E",
      "num": 74,
      "title": "What's for Dinner?",
      "type": "F",
      "theme": "身体与健康",
      "lang": "What句式"
    },
    {
      "id": "E75",
      "level": "E",
      "num": 75,
      "title": "The Brothers G",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "E76",
      "level": "E",
      "num": 76,
      "title": "Too Much Work!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "数字句式"
    },
    {
      "id": "E77",
      "level": "E",
      "num": 77,
      "title": "Maddy Loves to March",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "E78",
      "level": "E",
      "num": 78,
      "title": "Happy Birthday, Snag!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "E79",
      "level": "E",
      "num": 79,
      "title": "Wake Up, Bear!",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "E80",
      "level": "E",
      "num": 80,
      "title": "Tiny Tugboat",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "E81",
      "level": "E",
      "num": 81,
      "title": "Bear and Kangaroo",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "E82",
      "level": "E",
      "num": 82,
      "title": "Runaway Snowball",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "Not反义句式"
    },
    {
      "id": "E83",
      "level": "E",
      "num": 83,
      "title": "Carlos's First Halloween",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "E84",
      "level": "E",
      "num": 84,
      "title": "A Sweet Tale",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "E85",
      "level": "E",
      "num": 85,
      "title": "Where Are My Things?",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "E86",
      "level": "E",
      "num": 86,
      "title": "Zots Goes to School",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Go句式"
    },
    {
      "id": "E87",
      "level": "E",
      "num": 87,
      "title": "Zots Learns to Play",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "E88",
      "level": "E",
      "num": 88,
      "title": "In the Sea",
      "type": "NF",
      "theme": "生命世界",
      "lang": "天气水句式"
    },
    {
      "id": "E89",
      "level": "E",
      "num": 89,
      "title": "The Vet",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "E90",
      "level": "E",
      "num": 90,
      "title": "I'd Like to Be",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "E91",
      "level": "E",
      "num": 91,
      "title": "Police Officers",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "F01",
      "level": "F",
      "num": 1,
      "title": "Gaggle, Herd, and Murder",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F02",
      "level": "F",
      "num": 2,
      "title": "The Food Chain",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "F03",
      "level": "F",
      "num": 3,
      "title": "In a Chinese Garden",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "F04",
      "level": "F",
      "num": 4,
      "title": ".Night Animals",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "F05",
      "level": "F",
      "num": 5,
      "title": "Some Birds Go",
      "type": "F",
      "theme": "生命世界",
      "lang": "Go句式"
    },
    {
      "id": "F06",
      "level": "F",
      "num": 6,
      "title": "Animal Dads",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "F07",
      "level": "F",
      "num": 7,
      "title": "At the Watering Hole",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "F08",
      "level": "F",
      "num": 8,
      "title": "Seashells",
      "type": "F",
      "theme": "生命世界",
      "lang": "天气水句式"
    },
    {
      "id": "F09",
      "level": "F",
      "num": 9,
      "title": "How Do They Move?",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F10",
      "level": "F",
      "num": 10,
      "title": "Who Needs Rain?",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "F11",
      "level": "F",
      "num": 11,
      "title": "How Is the Weather Today?",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "F12",
      "level": "F",
      "num": 12,
      "title": "Best of Friends",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F13",
      "level": "F",
      "num": 13,
      "title": "What's in That Shell?",
      "type": "F",
      "theme": "社会与人文",
      "lang": "What句式"
    },
    {
      "id": "F14",
      "level": "F",
      "num": 14,
      "title": "Hibernation",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F15",
      "level": "F",
      "num": 15,
      "title": "Taste This",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F16",
      "level": "F",
      "num": 16,
      "title": "Color Wheel Colors",
      "type": "F",
      "theme": "思维与创意",
      "lang": "颜色句式"
    },
    {
      "id": "F17",
      "level": "F",
      "num": 17,
      "title": "Battery Power!",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "F18",
      "level": "F",
      "num": 18,
      "title": "A Look at Fossils",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F19",
      "level": "F",
      "num": 19,
      "title": "Tunnels",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F20",
      "level": "F",
      "num": 20,
      "title": "On the Moon",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "介词反义"
    },
    {
      "id": "F21",
      "level": "F",
      "num": 21,
      "title": "A Clown Face",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F22",
      "level": "F",
      "num": 22,
      "title": "Flashlight Shadow Show",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "F23",
      "level": "F",
      "num": 23,
      "title": "Friends in the Stars",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "介词反义"
    },
    {
      "id": "F24",
      "level": "F",
      "num": 24,
      "title": ".Does It Sink or Float?",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F25",
      "level": "F",
      "num": 25,
      "title": "Following the Map",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F26",
      "level": "F",
      "num": 26,
      "title": "Double It!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F27",
      "level": "F",
      "num": 27,
      "title": "Stella Storyteller",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "F28",
      "level": "F",
      "num": 28,
      "title": "Princess Prefix",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F29",
      "level": "F",
      "num": 29,
      "title": "Are You From India?",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F30",
      "level": "F",
      "num": 30,
      "title": ".Sleds",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F31",
      "level": "F",
      "num": 31,
      "title": "Pi&#241;atas Are Fun",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F32",
      "level": "F",
      "num": 32,
      "title": "At the Airport",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F33",
      "level": "F",
      "num": 33,
      "title": "Motorcycles",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F34",
      "level": "F",
      "num": 34,
      "title": "Are You From Brazil?",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F35",
      "level": "F",
      "num": 35,
      "title": "Thank You, Everyone!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F36",
      "level": "F",
      "num": 36,
      "title": "Mother's Day",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F37",
      "level": "F",
      "num": 37,
      "title": "Fishtank Fun",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "F38",
      "level": "F",
      "num": 38,
      "title": "Hatching Eggs",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F39",
      "level": "F",
      "num": 39,
      "title": "Cascarones",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F40",
      "level": "F",
      "num": 40,
      "title": "Firefighters",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "F41",
      "level": "F",
      "num": 41,
      "title": ".Weird White House Pets",
      "type": "F",
      "theme": "生命世界",
      "lang": "颜色句式"
    },
    {
      "id": "F42",
      "level": "F",
      "num": 42,
      "title": "At the MOVIES",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F43",
      "level": "F",
      "num": 43,
      "title": ".The Sunflower Hut",
      "type": "F",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "F44",
      "level": "F",
      "num": 44,
      "title": "Fishing with Grandpa",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "F45",
      "level": "F",
      "num": 45,
      "title": "Our Camping Trip",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F46",
      "level": "F",
      "num": 46,
      "title": "Trucking",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F47",
      "level": "F",
      "num": 47,
      "title": "Cleaning My Room",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F48",
      "level": "F",
      "num": 48,
      "title": "The Snowstorm",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "Not反义句式"
    },
    {
      "id": "F49",
      "level": "F",
      "num": 49,
      "title": "Our Class Flag",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F50",
      "level": "F",
      "num": 50,
      "title": "Josh Gets Glasses",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F51",
      "level": "F",
      "num": 51,
      "title": "Jobs for James",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F52",
      "level": "F",
      "num": 52,
      "title": "Using Less Energy",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F53",
      "level": "F",
      "num": 53,
      "title": "I Need a Snow Day!",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "I句式"
    },
    {
      "id": "F54",
      "level": "F",
      "num": 54,
      "title": "Super Thrift",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "F55",
      "level": "F",
      "num": 55,
      "title": "Ramadan Is Here",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F56",
      "level": "F",
      "num": 56,
      "title": "Rock Climbing",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "F57",
      "level": "F",
      "num": 57,
      "title": "Many Roads",
      "type": "F",
      "theme": "社会与人文",
      "lang": "数字句式"
    },
    {
      "id": "F58",
      "level": "F",
      "num": 58,
      "title": "Election Day",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "F59",
      "level": "F",
      "num": 59,
      "title": "The Last Piece of Cake",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "F60",
      "level": "F",
      "num": 60,
      "title": "How to Make a Snow Person",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "Not反义句式"
    },
    {
      "id": "F61",
      "level": "F",
      "num": 61,
      "title": "Smart Crows",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "F62",
      "level": "F",
      "num": 62,
      "title": "Community Workers",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F63",
      "level": "F",
      "num": 63,
      "title": "I Am a Gymnast",
      "type": "F",
      "theme": "社会与人文",
      "lang": "I句式"
    },
    {
      "id": "F64",
      "level": "F",
      "num": 64,
      "title": "We Do Yoga",
      "type": "F",
      "theme": "社会与人文",
      "lang": "We句式"
    },
    {
      "id": "F65",
      "level": "F",
      "num": 65,
      "title": "Changing Seasons",
      "type": "F",
      "theme": "生命世界",
      "lang": "季节句式"
    },
    {
      "id": "F66",
      "level": "F",
      "num": 66,
      "title": "Lou's Flu",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F67",
      "level": "F",
      "num": 67,
      "title": "Eat Like a Pig",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "F68",
      "level": "F",
      "num": 68,
      "title": "Two for Me, One for You",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F69",
      "level": "F",
      "num": 69,
      "title": "Glassblowing",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F70",
      "level": "F",
      "num": 70,
      "title": "SuperZero",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "F71",
      "level": "F",
      "num": 71,
      "title": "A Pet for Jupe",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "F72",
      "level": "F",
      "num": 72,
      "title": ".Farm Friends",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "F73",
      "level": "F",
      "num": 73,
      "title": "Needs and Wants",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "F74",
      "level": "F",
      "num": 74,
      "title": "Monster Reading Buddies",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F75",
      "level": "F",
      "num": 75,
      "title": "The Three Little Pigs",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "F76",
      "level": "F",
      "num": 76,
      "title": "The Giant Turnip",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "F77",
      "level": "F",
      "num": 77,
      "title": "The Tortoise and the Hare",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F78",
      "level": "F",
      "num": 78,
      "title": "Sir Suffix",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F79",
      "level": "F",
      "num": 79,
      "title": "Are You Okay?",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F80",
      "level": "F",
      "num": 80,
      "title": "Four Friends",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F81",
      "level": "F",
      "num": 81,
      "title": "Scaredy Crow",
      "type": "F",
      "theme": "身体与健康",
      "lang": "颜色句式"
    },
    {
      "id": "F82",
      "level": "F",
      "num": 82,
      "title": ". Where Is Cub?",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F83",
      "level": "F",
      "num": 83,
      "title": "Hide and Seek with Zog",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F84",
      "level": "F",
      "num": 84,
      "title": "Zots Helps Out",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "F85",
      "level": "F",
      "num": 85,
      "title": "Bake Sale",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F86",
      "level": "F",
      "num": 86,
      "title": "Stop It, Zots!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "F87",
      "level": "F",
      "num": 87,
      "title": "Monkey to the Top",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "F88",
      "level": "F",
      "num": 88,
      "title": "Terrific Tree Houses",
      "type": "F",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "F89",
      "level": "F",
      "num": 89,
      "title": "Why Exercise?",
      "type": "NF",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "F90",
      "level": "F",
      "num": 90,
      "title": "The Bald Eagle",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G01",
      "level": "G",
      "num": 1,
      "title": "Let's Go to the Circus!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Go句式"
    },
    {
      "id": "G02",
      "level": "G",
      "num": 2,
      "title": "A Seed Grows",
      "type": "F",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "G03",
      "level": "G",
      "num": 3,
      "title": "ANIMAL EYES",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "G04",
      "level": "G",
      "num": 4,
      "title": "Beanie and the Missing Bear",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "G05",
      "level": "G",
      "num": 5,
      "title": "Signs Are Everywhere",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G06",
      "level": "G",
      "num": 6,
      "title": "Carlos Joins the Team",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G07",
      "level": "G",
      "num": 7,
      "title": "Billy Gets Lost",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G08",
      "level": "G",
      "num": 8,
      "title": "Bonk's Bad Dream",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G09",
      "level": "G",
      "num": 9,
      "title": "Going to the Dentist",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Go句式"
    },
    {
      "id": "G10",
      "level": "G",
      "num": 10,
      "title": "Going to the Doctor",
      "type": "F",
      "theme": "身体与健康",
      "lang": "Go句式"
    },
    {
      "id": "G11",
      "level": "G",
      "num": 11,
      "title": "Gordon Finds His Way",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Go句式"
    },
    {
      "id": "G12",
      "level": "G",
      "num": 12,
      "title": "Grow Tomatoes in Six Steps",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "G13",
      "level": "G",
      "num": 13,
      "title": "How to Build a Guitar",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G14",
      "level": "G",
      "num": 14,
      "title": "I Bet I Can",
      "type": "F",
      "theme": "社会与人文",
      "lang": "I句式"
    },
    {
      "id": "G15",
      "level": "G",
      "num": 15,
      "title": "Long Ago And Today",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Go句式"
    },
    {
      "id": "G16",
      "level": "G",
      "num": 16,
      "title": "Look At This Book!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G17",
      "level": "G",
      "num": 17,
      "title": "Monsters' Stormy Day",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "G18",
      "level": "G",
      "num": 18,
      "title": "New Rule!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G19",
      "level": "G",
      "num": 19,
      "title": "Rude Robot",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G20",
      "level": "G",
      "num": 20,
      "title": "Stormingo!",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "Go句式"
    },
    {
      "id": "G21",
      "level": "G",
      "num": 21,
      "title": "The Camel and the Pig",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "G22",
      "level": "G",
      "num": 22,
      "title": "The Chase",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G23",
      "level": "G",
      "num": 23,
      "title": "Time of Day",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G24",
      "level": "G",
      "num": 24,
      "title": "Troll Bridge",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G25",
      "level": "G",
      "num": 25,
      "title": "We Build a Robot",
      "type": "F",
      "theme": "社会与人文",
      "lang": "We句式"
    },
    {
      "id": "G26",
      "level": "G",
      "num": 26,
      "title": "Harriet Tubman",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G27",
      "level": "G",
      "num": 27,
      "title": "Moving Bridges",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G28",
      "level": "G",
      "num": 28,
      "title": "How Many Rhymes?",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "数字句式"
    },
    {
      "id": "G29",
      "level": "G",
      "num": 29,
      "title": "Laws for Kids",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G30",
      "level": "G",
      "num": 30,
      "title": "Loose Tooth",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "G31",
      "level": "G",
      "num": 31,
      "title": "Maria Joins the Team",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G32",
      "level": "G",
      "num": 32,
      "title": "Monster Halloween",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G33",
      "level": "G",
      "num": 33,
      "title": "My Day",
      "type": "F",
      "theme": "社会与人文",
      "lang": "My句式"
    },
    {
      "id": "G34",
      "level": "G",
      "num": 34,
      "title": "Mystery Valentine",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G35",
      "level": "G",
      "num": 35,
      "title": "Pedro's Burro",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G36",
      "level": "G",
      "num": 36,
      "title": "The Legend of Nian",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G37",
      "level": "G",
      "num": 37,
      "title": "The Little Red Hen",
      "type": "F",
      "theme": "社会与人文",
      "lang": "颜色句式"
    },
    {
      "id": "G38",
      "level": "G",
      "num": 38,
      "title": "The Queen Ant's Birthday",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "G39",
      "level": "G",
      "num": 39,
      "title": "Two Daughters",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G40",
      "level": "G",
      "num": 40,
      "title": "Places People Live",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G41",
      "level": "G",
      "num": 41,
      "title": "Penny the Rude Penguin",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "G42",
      "level": "G",
      "num": 42,
      "title": "Ants, Ants, and More Ants",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "G43",
      "level": "G",
      "num": 43,
      "title": "Bonk's Loose Tooth",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "G44",
      "level": "G",
      "num": 44,
      "title": "Building a House",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G45",
      "level": "G",
      "num": 45,
      "title": "Groundhog Goes outside",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Go句式"
    },
    {
      "id": "G46",
      "level": "G",
      "num": 46,
      "title": "Let's Build a Fairy Bridge",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G47",
      "level": "G",
      "num": 47,
      "title": "Miles the Nile Crocodile",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G48",
      "level": "G",
      "num": 48,
      "title": "Science Fair",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G49",
      "level": "G",
      "num": 49,
      "title": "The Reason For Sneezing",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "G50",
      "level": "G",
      "num": 50,
      "title": "What in The World Is That?",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "What句式"
    },
    {
      "id": "G51",
      "level": "G",
      "num": 51,
      "title": "A Taste for Blood",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G52",
      "level": "G",
      "num": 52,
      "title": "A Trip to Petra",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "G53",
      "level": "G",
      "num": 53,
      "title": "Are you From Australia?",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G54",
      "level": "G",
      "num": 54,
      "title": "Caring for Your Dog",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "G55",
      "level": "G",
      "num": 55,
      "title": "Chess",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G56",
      "level": "G",
      "num": 56,
      "title": "Good Luck!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Go句式"
    },
    {
      "id": "G57",
      "level": "G",
      "num": 57,
      "title": "Homemade Halloween",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G58",
      "level": "G",
      "num": 58,
      "title": "On the Roof",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "G59",
      "level": "G",
      "num": 59,
      "title": "Peace and Quiet",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G60",
      "level": "G",
      "num": 60,
      "title": "A President's Day",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G61",
      "level": "G",
      "num": 61,
      "title": "All Kinds of Homes",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "AllKinds句式"
    },
    {
      "id": "G62",
      "level": "G",
      "num": 62,
      "title": "Amazing Mummies",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G63",
      "level": "G",
      "num": 63,
      "title": "Being a Leftie",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G64",
      "level": "G",
      "num": 64,
      "title": "Cockroaches",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G65",
      "level": "G",
      "num": 65,
      "title": "Fire Safety",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "G66",
      "level": "G",
      "num": 66,
      "title": "Living or Nonliving?",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Not反义句式"
    },
    {
      "id": "G67",
      "level": "G",
      "num": 67,
      "title": "Ready, Set, Bike!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G68",
      "level": "G",
      "num": 68,
      "title": "The Hard Frost",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G69",
      "level": "G",
      "num": 69,
      "title": "Ride, Cling, Run",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G70",
      "level": "G",
      "num": 70,
      "title": "Rock Hunting",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "G71",
      "level": "G",
      "num": 71,
      "title": "Meet the Beetles",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "G72",
      "level": "G",
      "num": 72,
      "title": "Squirrel Acrobats",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "G73",
      "level": "G",
      "num": 73,
      "title": "Taking the Train",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "G74",
      "level": "G",
      "num": 74,
      "title": "The Spider's Web",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G75",
      "level": "G",
      "num": 75,
      "title": "This Is a Bird",
      "type": "F",
      "theme": "生命世界",
      "lang": "This句式"
    },
    {
      "id": "G76",
      "level": "G",
      "num": 76,
      "title": "Whose Eggs Are These?",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G77",
      "level": "G",
      "num": 77,
      "title": "Why Do Leaves Change Color?",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "颜色句式"
    },
    {
      "id": "G78",
      "level": "G",
      "num": 78,
      "title": "The Food We Eat",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "G79",
      "level": "G",
      "num": 79,
      "title": "Wiggly Worms",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "G80",
      "level": "G",
      "num": 80,
      "title": "Ough Is Tough",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G81",
      "level": "G",
      "num": 81,
      "title": "Scorpions",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G82",
      "level": "G",
      "num": 82,
      "title": "American Symbols",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Can句式"
    },
    {
      "id": "G83",
      "level": "G",
      "num": 83,
      "title": "Stars and Stripes",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "G84",
      "level": "G",
      "num": 84,
      "title": "Zots Learns to Share",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "G85",
      "level": "G",
      "num": 85,
      "title": "Zots Gets Clean",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "G86",
      "level": "G",
      "num": 86,
      "title": "Dogs at Work",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "G87",
      "level": "G",
      "num": 87,
      "title": "The Golden Rule",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Go句式"
    },
    {
      "id": "G88",
      "level": "G",
      "num": 88,
      "title": "Doing the Right Thing",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "H01",
      "level": "H",
      "num": 1,
      "title": "A Desert Counting Book",
      "type": "F",
      "theme": "生命世界",
      "lang": "数字句式"
    },
    {
      "id": "H02",
      "level": "H",
      "num": 2,
      "title": "A Monster Fish Tale",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "H03",
      "level": "H",
      "num": 3,
      "title": "Abigail Adams",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "H04",
      "level": "H",
      "num": 4,
      "title": "American Football",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Can句式"
    },
    {
      "id": "H05",
      "level": "H",
      "num": 5,
      "title": "Animals, Animals",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "H06",
      "level": "H",
      "num": 6,
      "title": "Anna and The Dancing Goose",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Go句式"
    },
    {
      "id": "H07",
      "level": "H",
      "num": 7,
      "title": "At a Touch Tank",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "H08",
      "level": "H",
      "num": 8,
      "title": "Blackbeard the Pirate",
      "type": "F",
      "theme": "生命世界",
      "lang": "颜色句式"
    },
    {
      "id": "H09",
      "level": "H",
      "num": 9,
      "title": "Blizzard Blackout",
      "type": "F",
      "theme": "社会与人文",
      "lang": "颜色句式"
    },
    {
      "id": "H10",
      "level": "H",
      "num": 10,
      "title": "Blue Whales: Giant Mammals",
      "type": "F",
      "theme": "生命世界",
      "lang": "颜色句式"
    },
    {
      "id": "H11",
      "level": "H",
      "num": 11,
      "title": "Brainstorm Bear",
      "type": "F",
      "theme": "生命世界",
      "lang": "天气水句式"
    },
    {
      "id": "H12",
      "level": "H",
      "num": 12,
      "title": "Brother Messy, Brother Neat",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "H13",
      "level": "H",
      "num": 13,
      "title": "Butterfly Caf&#233;",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "H14",
      "level": "H",
      "num": 14,
      "title": "Carlos's First Thanksgiving",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "H15",
      "level": "H",
      "num": 15,
      "title": "Cinderella",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "H16",
      "level": "H",
      "num": 16,
      "title": "City Falcons",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "H17",
      "level": "H",
      "num": 17,
      "title": "Club Monster",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "H18",
      "level": "H",
      "num": 18,
      "title": "Condors: Giant Birds",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "H19",
      "level": "H",
      "num": 19,
      "title": "Cool as a Cuke",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "H20",
      "level": "H",
      "num": 20,
      "title": "Dr.King's Memorial",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "H21",
      "level": "H",
      "num": 21,
      "title": "Earth's Water",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "H22",
      "level": "H",
      "num": 22,
      "title": "Elephants: Giant Mammals",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "H23",
      "level": "H",
      "num": 23,
      "title": "Flies",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "H24",
      "level": "H",
      "num": 24,
      "title": "Friends Around the World",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "H25",
      "level": "H",
      "num": 25,
      "title": "Goats Are Great!",
      "type": "F",
      "theme": "生命世界",
      "lang": "Go句式"
    },
    {
      "id": "H26",
      "level": "H",
      "num": 26,
      "title": ". Grasshopper's Gross Lunch",
      "type": "F",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "H27",
      "level": "H",
      "num": 27,
      "title": "Grounded to Earth",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "H28",
      "level": "H",
      "num": 28,
      "title": "Hawaii Volcanoes National Park",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "Can句式"
    },
    {
      "id": "H29",
      "level": "H",
      "num": 29,
      "title": "Hedgehogs",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "H30",
      "level": "H",
      "num": 30,
      "title": "How the Mice Beat the Men",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "H31",
      "level": "H",
      "num": 31,
      "title": "How to Make a Drum",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "H32",
      "level": "H",
      "num": 32,
      "title": "I Collect That!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "I句式"
    },
    {
      "id": "H33",
      "level": "H",
      "num": 33,
      "title": "I Live in the City",
      "type": "F",
      "theme": "社会与人文",
      "lang": "I句式"
    },
    {
      "id": "H34",
      "level": "H",
      "num": 34,
      "title": "I'd Like to Be",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "H35",
      "level": "H",
      "num": 35,
      "title": "Leap Year Birthday",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "H36",
      "level": "H",
      "num": 36,
      "title": "Legs, Wings, Fins, and Flippers",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "H37",
      "level": "H",
      "num": 37,
      "title": "Maria's Thanksgiving",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "H38",
      "level": "H",
      "num": 38,
      "title": "Math Test Mix-Up",
      "type": "F",
      "theme": "思维与创意",
      "lang": "介词反义"
    },
    {
      "id": "H39",
      "level": "H",
      "num": 39,
      "title": "Monsters on Wheels",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "H40",
      "level": "H",
      "num": 40,
      "title": "Moose on the Move",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "H41",
      "level": "H",
      "num": 41,
      "title": "My Bones",
      "type": "F",
      "theme": "社会与人文",
      "lang": "My句式"
    },
    {
      "id": "H42",
      "level": "H",
      "num": 42,
      "title": "My Eid al-Fitr",
      "type": "F",
      "theme": "社会与人文",
      "lang": "My句式"
    },
    {
      "id": "H43",
      "level": "H",
      "num": 43,
      "title": "My First Library Card",
      "type": "F",
      "theme": "社会与人文",
      "lang": "My句式"
    },
    {
      "id": "H44",
      "level": "H",
      "num": 44,
      "title": "Nami's Gifts",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "H45",
      "level": "H",
      "num": 45,
      "title": "Nature Stinks!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "H46",
      "level": "H",
      "num": 46,
      "title": "Our Five Senses",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "数字句式"
    },
    {
      "id": "H47",
      "level": "H",
      "num": 47,
      "title": "Pip, the Monster Princess",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "H48",
      "level": "H",
      "num": 48,
      "title": "PIZZA!",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "H49",
      "level": "H",
      "num": 49,
      "title": "Pocket Parks",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "H50",
      "level": "H",
      "num": 50,
      "title": "Police Officers",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "H51",
      "level": "H",
      "num": 51,
      "title": "Rapunzel",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "H52",
      "level": "H",
      "num": 52,
      "title": "Sam's Fourth of July",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "H53",
      "level": "H",
      "num": 53,
      "title": "Ships and Boats",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "H54",
      "level": "H",
      "num": 54,
      "title": "Sister Daisy, Sister Rose",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "H55",
      "level": "H",
      "num": 55,
      "title": "Sled Dogs to the Rescue",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "H56",
      "level": "H",
      "num": 56,
      "title": "Smaller and Smaller",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "H57",
      "level": "H",
      "num": 57,
      "title": "Soccer",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "H58",
      "level": "H",
      "num": 58,
      "title": "Spring Is Here",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "季节句式"
    },
    {
      "id": "H59",
      "level": "H",
      "num": 59,
      "title": "Statues in the Ice",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "H60",
      "level": "H",
      "num": 60,
      "title": "Statues in the Sand",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "H61",
      "level": "H",
      "num": 61,
      "title": "Summer Olympics Events",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "季节句式"
    },
    {
      "id": "H62",
      "level": "H",
      "num": 62,
      "title": "Tag-Along Goat",
      "type": "F",
      "theme": "生命世界",
      "lang": "Go句式"
    },
    {
      "id": "H63",
      "level": "H",
      "num": 63,
      "title": "Terell's Taste Buds",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "H64",
      "level": "H",
      "num": 64,
      "title": "The Butterfly Life Cycle",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "H65",
      "level": "H",
      "num": 65,
      "title": "The Day I Needed Help",
      "type": "F",
      "theme": "社会与人文",
      "lang": "I句式"
    },
    {
      "id": "H66",
      "level": "H",
      "num": 66,
      "title": "The Drum",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "H67",
      "level": "H",
      "num": 67,
      "title": "The Empty Pot",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "H68",
      "level": "H",
      "num": 68,
      "title": "The Five Brothers",
      "type": "F",
      "theme": "社会与人文",
      "lang": "数字句式"
    },
    {
      "id": "H69",
      "level": "H",
      "num": 69,
      "title": "The Goat and the Singing Wolf",
      "type": "F",
      "theme": "生命世界",
      "lang": "Go句式"
    },
    {
      "id": "H70",
      "level": "H",
      "num": 70,
      "title": "THE Grand CANYON",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Can句式"
    },
    {
      "id": "H71",
      "level": "H",
      "num": 71,
      "title": "The Mighty Mississippi",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "H72",
      "level": "H",
      "num": 72,
      "title": "The Owl and the Pussycat",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "H73",
      "level": "H",
      "num": 73,
      "title": "The Parking Ticket",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "H74",
      "level": "H",
      "num": 74,
      "title": "The Stonecutter",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "H75",
      "level": "H",
      "num": 75,
      "title": "WEIRD BIRD BEAKS",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "H76",
      "level": "H",
      "num": 76,
      "title": "What Built This?",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "What句式"
    },
    {
      "id": "H77",
      "level": "H",
      "num": 77,
      "title": "What Lives in This Hole?",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "What句式"
    },
    {
      "id": "H78",
      "level": "H",
      "num": 78,
      "title": "Wing's Visit to Singapore",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "H79",
      "level": "H",
      "num": 79,
      "title": "Yellowstone: A Place of Wild Wonders",
      "type": "F",
      "theme": "社会与人文",
      "lang": "颜色句式"
    },
    {
      "id": "H80",
      "level": "H",
      "num": 80,
      "title": "You Can Cross",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Can句式"
    },
    {
      "id": "H81",
      "level": "H",
      "num": 81,
      "title": "Our Sun",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "H82",
      "level": "H",
      "num": 82,
      "title": "Molly's New Home",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "H83",
      "level": "H",
      "num": 83,
      "title": "Welcome to Turkey",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "I01",
      "level": "I",
      "num": 1,
      "title": "The 100th Day Project",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "I02",
      "level": "I",
      "num": 2,
      "title": "ACADIA National Park",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "I03",
      "level": "I",
      "num": 3,
      "title": "Alistair's Night",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "I04",
      "level": "I",
      "num": 4,
      "title": "Amazing Beaches",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "I05",
      "level": "I",
      "num": 5,
      "title": "The Animal Bridge",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "I06",
      "level": "I",
      "num": 6,
      "title": "Armadillo's Song",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "I07",
      "level": "I",
      "num": 7,
      "title": "Arthur's Bad-News Day",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "I08",
      "level": "I",
      "num": 8,
      "title": "Basketball",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "I09",
      "level": "I",
      "num": 9,
      "title": "Bigger Than a Monster Truck",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "I10",
      "level": "I",
      "num": 10,
      "title": "Birds",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "I11",
      "level": "I",
      "num": 11,
      "title": "Blizzards!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "I12",
      "level": "I",
      "num": 12,
      "title": "Bonk and the Big Splash",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "I13",
      "level": "I",
      "num": 13,
      "title": "Bonk and the Lucky Buckeye",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "I14",
      "level": "I",
      "num": 14,
      "title": "A Broken Leg for Bonk",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "I15",
      "level": "I",
      "num": 15,
      "title": "Building a Bridge",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "I16",
      "level": "I",
      "num": 16,
      "title": "Camping with Bonk",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "I17",
      "level": "I",
      "num": 17,
      "title": "Childhood Stories of George Washington",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "I18",
      "level": "I",
      "num": 18,
      "title": "Cinderello",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "I19",
      "level": "I",
      "num": 19,
      "title": "Cy and Medusa",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "I20",
      "level": "I",
      "num": 20,
      "title": "Discovering Dinosaurs",
      "type": "F",
      "theme": "生命世界",
      "lang": "Not反义句式"
    },
    {
      "id": "I21",
      "level": "I",
      "num": 21,
      "title": "Dolphins",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "I22",
      "level": "I",
      "num": 22,
      "title": "Dragonflies!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Go句式"
    },
    {
      "id": "I23",
      "level": "I",
      "num": 23,
      "title": "Fantastic Flying Machines",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "I24",
      "level": "I",
      "num": 24,
      "title": "Extreme Insects",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "I25",
      "level": "I",
      "num": 25,
      "title": "Families",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "I26",
      "level": "I",
      "num": 26,
      "title": "Goldilocks and the Three Bears",
      "type": "F",
      "theme": "生命世界",
      "lang": "Go句式"
    },
    {
      "id": "I27",
      "level": "I",
      "num": 27,
      "title": "Hippo's Toothache",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "I28",
      "level": "I",
      "num": 28,
      "title": "Goldilocks and the Other Three Bears",
      "type": "F",
      "theme": "生命世界",
      "lang": "Go句式"
    },
    {
      "id": "I29",
      "level": "I",
      "num": 29,
      "title": "Hockey",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "I30",
      "level": "I",
      "num": 30,
      "title": "Golf",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Go句式"
    },
    {
      "id": "I31",
      "level": "I",
      "num": 31,
      "title": "Healthy Me",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "I32",
      "level": "I",
      "num": 32,
      "title": "Here Come the Cranes!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "I33",
      "level": "I",
      "num": 33,
      "title": "Hibernation",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "I34",
      "level": "I",
      "num": 34,
      "title": "How Glooskap Found Summer",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "季节句式"
    },
    {
      "id": "I35",
      "level": "I",
      "num": 35,
      "title": "How to Make Paper",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "I36",
      "level": "I",
      "num": 36,
      "title": "Is That a Fish?",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "I37",
      "level": "I",
      "num": 37,
      "title": "Jane Goodall",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Go句式"
    },
    {
      "id": "I38",
      "level": "I",
      "num": 38,
      "title": "Karate",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "I39",
      "level": "I",
      "num": 39,
      "title": "The Last Day of School",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "I40",
      "level": "I",
      "num": 40,
      "title": "Life at the Pond",
      "type": "F",
      "theme": "生命世界",
      "lang": "天气水句式"
    },
    {
      "id": "I41",
      "level": "I",
      "num": 41,
      "title": "Lincoln Loved to Learn",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "I42",
      "level": "I",
      "num": 42,
      "title": "The Lion and the Mouse",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "I43",
      "level": "I",
      "num": 43,
      "title": "Komodo Dragons: Giant Reptiles",
      "type": "F",
      "theme": "生命世界",
      "lang": "Go句式"
    },
    {
      "id": "I44",
      "level": "I",
      "num": 44,
      "title": "Little Red Riding Hood",
      "type": "F",
      "theme": "社会与人文",
      "lang": "颜色句式"
    },
    {
      "id": "I45",
      "level": "I",
      "num": 45,
      "title": "The Loser",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "I46",
      "level": "I",
      "num": 46,
      "title": "The Magic Bike",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "I47",
      "level": "I",
      "num": 47,
      "title": "Mike's Good Bad Day",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Go句式"
    },
    {
      "id": "I48",
      "level": "I",
      "num": 48,
      "title": "Monster Moving Day",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "I49",
      "level": "I",
      "num": 49,
      "title": "Monster Music",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "I50",
      "level": "I",
      "num": 50,
      "title": "The Monster Pumpkins",
      "type": "F",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "I51",
      "level": "I",
      "num": 51,
      "title": "Monster Soccer",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "I52",
      "level": "I",
      "num": 52,
      "title": "Monster Snow Day",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "Not反义句式"
    },
    {
      "id": "I53",
      "level": "I",
      "num": 53,
      "title": "My Brain",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "My句式"
    },
    {
      "id": "I54",
      "level": "I",
      "num": 54,
      "title": "A Monument for George",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "I55",
      "level": "I",
      "num": 55,
      "title": "My Lungs",
      "type": "F",
      "theme": "社会与人文",
      "lang": "My句式"
    },
    {
      "id": "I56",
      "level": "I",
      "num": 56,
      "title": "My Muscles",
      "type": "F",
      "theme": "社会与人文",
      "lang": "My句式"
    },
    {
      "id": "I57",
      "level": "I",
      "num": 57,
      "title": "My Skin",
      "type": "F",
      "theme": "社会与人文",
      "lang": "My句式"
    },
    {
      "id": "I58",
      "level": "I",
      "num": 58,
      "title": "My Stomach",
      "type": "F",
      "theme": "社会与人文",
      "lang": "My句式"
    },
    {
      "id": "I59",
      "level": "I",
      "num": 59,
      "title": "Owls Overhead",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "I60",
      "level": "I",
      "num": 60,
      "title": "Paco's Tacos",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "I61",
      "level": "I",
      "num": 61,
      "title": "A Pocket Park for Tiny",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "I62",
      "level": "I",
      "num": 62,
      "title": "Roadside Oddities",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "I63",
      "level": "I",
      "num": 63,
      "title": "Ruby Bridges",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "I64",
      "level": "I",
      "num": 64,
      "title": "Slow and Slower",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "I65",
      "level": "I",
      "num": 65,
      "title": "Soup and a Sandwish",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "I66",
      "level": "I",
      "num": 66,
      "title": "The Spelling Bee",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "I67",
      "level": "I",
      "num": 67,
      "title": "The Three Little Pigs",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "I68",
      "level": "I",
      "num": 68,
      "title": "Tian Tian, a Giant Panda",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "I69",
      "level": "I",
      "num": 69,
      "title": "Turkeys in the Trees",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "I70",
      "level": "I",
      "num": 70,
      "title": "Two Make Twins",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "I71",
      "level": "I",
      "num": 71,
      "title": "A Visit to the Zoo",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "I72",
      "level": "I",
      "num": 72,
      "title": "We Make Maple Syrup",
      "type": "F",
      "theme": "社会与人文",
      "lang": "We句式"
    },
    {
      "id": "I73",
      "level": "I",
      "num": 73,
      "title": "Whale Sharks: Giant Fish",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "I74",
      "level": "I",
      "num": 74,
      "title": "Why Robins Hop",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "I75",
      "level": "I",
      "num": 75,
      "title": "The Wild Swans",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "I76",
      "level": "I",
      "num": 76,
      "title": "William Shakespeare",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "I77",
      "level": "I",
      "num": 77,
      "title": "Winter Vacation",
      "type": "F",
      "theme": "生命世界",
      "lang": "季节句式"
    },
    {
      "id": "I78",
      "level": "I",
      "num": 78,
      "title": "The Everglades",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "I79",
      "level": "I",
      "num": 79,
      "title": "How to Make a Paper Airplane",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "I80",
      "level": "I",
      "num": 80,
      "title": "Istanbul",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "I81",
      "level": "I",
      "num": 81,
      "title": "Lice Aren't Nice",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "I82",
      "level": "I",
      "num": 82,
      "title": "Rocket Boots",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "I83",
      "level": "I",
      "num": 83,
      "title": "Rocky Mountain National Park",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "介词反义"
    },
    {
      "id": "I84",
      "level": "I",
      "num": 84,
      "title": "A Wolf in Sheep's Clothing",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "J01",
      "level": "J",
      "num": 1,
      "title": "Darby's Birthday Party",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J02",
      "level": "J",
      "num": 2,
      "title": "Let's Make Shapes!",
      "type": "F",
      "theme": "思维与创意",
      "lang": "Shapes句式"
    },
    {
      "id": "J03",
      "level": "J",
      "num": 3,
      "title": "Ostriches: Giant Birds",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "J04",
      "level": "J",
      "num": 4,
      "title": "Uzzle, the Football Star",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "J05",
      "level": "J",
      "num": 5,
      "title": "Bonk, the Healthy Monster",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "J06",
      "level": "J",
      "num": 6,
      "title": "Garrett Morgan and the Traffic Signal",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J07",
      "level": "J",
      "num": 7,
      "title": "I'm Kind to Me",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J08",
      "level": "J",
      "num": 8,
      "title": "Look Again",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J09",
      "level": "J",
      "num": 9,
      "title": "Bonk at the Barbershop",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J10",
      "level": "J",
      "num": 10,
      "title": "Riding With Rosa Parks",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J11",
      "level": "J",
      "num": 11,
      "title": "A Trip to Rio",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J12",
      "level": "J",
      "num": 12,
      "title": "The Creature Constitution",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "J13",
      "level": "J",
      "num": 13,
      "title": "It's Cinco de Mayo, Carlos!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J14",
      "level": "J",
      "num": 14,
      "title": "The Princess and the Pea",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J15",
      "level": "J",
      "num": 15,
      "title": "The Ship of Shapes",
      "type": "F",
      "theme": "思维与创意",
      "lang": "Shapes句式"
    },
    {
      "id": "J16",
      "level": "J",
      "num": 16,
      "title": "The Woodpecker",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J17",
      "level": "J",
      "num": 17,
      "title": "When Bad Things Happen",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J18",
      "level": "J",
      "num": 18,
      "title": "Being Bilingual",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J19",
      "level": "J",
      "num": 19,
      "title": "Broken Arm Blues",
      "type": "F",
      "theme": "社会与人文",
      "lang": "颜色句式"
    },
    {
      "id": "J20",
      "level": "J",
      "num": 20,
      "title": "The Disappearing Moon",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "J21",
      "level": "J",
      "num": 21,
      "title": "I Broke It",
      "type": "F",
      "theme": "社会与人文",
      "lang": "I句式"
    },
    {
      "id": "J22",
      "level": "J",
      "num": 22,
      "title": "My Heart",
      "type": "F",
      "theme": "身体与健康",
      "lang": "My句式"
    },
    {
      "id": "J23",
      "level": "J",
      "num": 23,
      "title": "Ocean Animals",
      "type": "F",
      "theme": "生命世界",
      "lang": "天气水句式"
    },
    {
      "id": "J24",
      "level": "J",
      "num": 24,
      "title": "Whose Tracks Are These?",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J25",
      "level": "J",
      "num": 25,
      "title": "Why Do Leaves Change Color?",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "颜色句式"
    },
    {
      "id": "J26",
      "level": "J",
      "num": 26,
      "title": "Daisy in the Desert",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "J27",
      "level": "J",
      "num": 27,
      "title": "If I Were in Charge",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "J28",
      "level": "J",
      "num": 28,
      "title": "Bonk's New Bike",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J29",
      "level": "J",
      "num": 29,
      "title": "Changes",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J30",
      "level": "J",
      "num": 30,
      "title": "The Cinnamon Bun Mystery",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "J31",
      "level": "J",
      "num": 31,
      "title": "Goliath Beetles: Giant Insects",
      "type": "F",
      "theme": "生命世界",
      "lang": "Go句式"
    },
    {
      "id": "J32",
      "level": "J",
      "num": 32,
      "title": "Guess That President",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J33",
      "level": "J",
      "num": 33,
      "title": "Hannah's Townspeople",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J34",
      "level": "J",
      "num": 34,
      "title": "Number Twelve",
      "type": "F",
      "theme": "思维与创意",
      "lang": "数字句式"
    },
    {
      "id": "J35",
      "level": "J",
      "num": 35,
      "title": "What Pet Should You Get?",
      "type": "NF",
      "theme": "生命世界",
      "lang": "What句式"
    },
    {
      "id": "J36",
      "level": "J",
      "num": 36,
      "title": "Why I'm Late Today",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J37",
      "level": "J",
      "num": 37,
      "title": "Wonders of Nature",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J38",
      "level": "J",
      "num": 38,
      "title": "Monster Cowboy",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "J39",
      "level": "J",
      "num": 39,
      "title": "Edison's Inventions",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J40",
      "level": "J",
      "num": 40,
      "title": "Brazil",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J41",
      "level": "J",
      "num": 41,
      "title": "I'm the Tall One",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J42",
      "level": "J",
      "num": 42,
      "title": "Mexico",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J43",
      "level": "J",
      "num": 43,
      "title": "The Other Book Of World Records",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J44",
      "level": "J",
      "num": 44,
      "title": "The Story of the Statue",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "J45",
      "level": "J",
      "num": 45,
      "title": "Sugar, Sugar, Everywhere",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J46",
      "level": "J",
      "num": 46,
      "title": "The Heart of a Monkey",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "J47",
      "level": "J",
      "num": 47,
      "title": "Can You Say Pterodactyl?",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Can句式"
    },
    {
      "id": "J48",
      "level": "J",
      "num": 48,
      "title": "Goliath Bird-Eating Spiders: Giant Arachnids",
      "type": "F",
      "theme": "生命世界",
      "lang": "Go句式"
    },
    {
      "id": "J49",
      "level": "J",
      "num": 49,
      "title": "Ichiro Suzuki",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J50",
      "level": "J",
      "num": 50,
      "title": "Picture Day",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J51",
      "level": "J",
      "num": 51,
      "title": "The Pirate Substitute",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "J52",
      "level": "J",
      "num": 52,
      "title": "A Rainbow of Food",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "J53",
      "level": "J",
      "num": 53,
      "title": "Rent a Llama",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J54",
      "level": "J",
      "num": 54,
      "title": "Wiggly Worms",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "J55",
      "level": "J",
      "num": 55,
      "title": "The Legend of the Giant's Causeway",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "J56",
      "level": "J",
      "num": 56,
      "title": "Leopard, Ram, and Jackal",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J57",
      "level": "J",
      "num": 57,
      "title": "Baseball",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J58",
      "level": "J",
      "num": 58,
      "title": "Fall Forward Spring Back",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "季节句式"
    },
    {
      "id": "J59",
      "level": "J",
      "num": 59,
      "title": "Feliz Navidad, Carlos!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J60",
      "level": "J",
      "num": 60,
      "title": "GOING TO THE ART MUSEUM",
      "type": "F",
      "theme": "思维与创意",
      "lang": "Go句式"
    },
    {
      "id": "J61",
      "level": "J",
      "num": 61,
      "title": "Lacrosse",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J62",
      "level": "J",
      "num": 62,
      "title": "Monkey and Crocodile",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "J63",
      "level": "J",
      "num": 63,
      "title": "Rainbows",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "J64",
      "level": "J",
      "num": 64,
      "title": "Safe Biking with Dad",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J65",
      "level": "J",
      "num": 65,
      "title": "Egypt",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J66",
      "level": "J",
      "num": 66,
      "title": "Heroes of September 11",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J67",
      "level": "J",
      "num": 67,
      "title": "I'm the Small One",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "J68",
      "level": "J",
      "num": 68,
      "title": "Sharks",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "J69",
      "level": "J",
      "num": 69,
      "title": "Want to Be a Beaver?",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "J70",
      "level": "J",
      "num": 70,
      "title": "The Amazing Octopus",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "J71",
      "level": "J",
      "num": 71,
      "title": "Argentina",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J72",
      "level": "J",
      "num": 72,
      "title": "Canada",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Can句式"
    },
    {
      "id": "J73",
      "level": "J",
      "num": 73,
      "title": "Cricket",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J74",
      "level": "J",
      "num": 74,
      "title": "Incredible Places to Stay",
      "type": "F",
      "theme": "社会与人文",
      "lang": "颜色句式"
    },
    {
      "id": "J75",
      "level": "J",
      "num": 75,
      "title": "My Uncle Is A Firefighter",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "My句式"
    },
    {
      "id": "J76",
      "level": "J",
      "num": 76,
      "title": "Tornadoes",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J77",
      "level": "J",
      "num": 77,
      "title": "All About Snakes",
      "type": "NF",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "J78",
      "level": "J",
      "num": 78,
      "title": "Dia for Maria",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J79",
      "level": "J",
      "num": 79,
      "title": "Where's the Joey?",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J80",
      "level": "J",
      "num": 80,
      "title": "Dogs at Work",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "J81",
      "level": "J",
      "num": 81,
      "title": "The Thanksgiving the Jacks Built",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J82",
      "level": "J",
      "num": 82,
      "title": "The Thanksgiving the Other Jacks Built",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J83",
      "level": "J",
      "num": 83,
      "title": "Mud Runs",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J84",
      "level": "J",
      "num": 84,
      "title": "Firefighters",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "J85",
      "level": "J",
      "num": 85,
      "title": "Welcome, Carlos!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "J86",
      "level": "J",
      "num": 86,
      "title": "Amazing Antarctica",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "K01",
      "level": "K",
      "num": 1,
      "title": "All About Kites",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "K02",
      "level": "K",
      "num": 2,
      "title": "All About Snakes",
      "type": "NF",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "K03",
      "level": "K",
      "num": 3,
      "title": "Anna and the Magic Coat",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "K04",
      "level": "K",
      "num": 4,
      "title": "Brainstorm Bear",
      "type": "F",
      "theme": "生命世界",
      "lang": "天气水句式"
    },
    {
      "id": "K05",
      "level": "K",
      "num": 5,
      "title": "Carlos\\u0027s Family Celebration",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "K06",
      "level": "K",
      "num": 6,
      "title": "Chickens in My Backyard",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "K07",
      "level": "K",
      "num": 7,
      "title": "Cinderella",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "K08",
      "level": "K",
      "num": 8,
      "title": "Community Government",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Go句式"
    },
    {
      "id": "K09",
      "level": "K",
      "num": 9,
      "title": "D\\u00eda de los Muertos",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "K10",
      "level": "K",
      "num": 10,
      "title": "The Dragon in the Closet",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Go句式"
    },
    {
      "id": "K11",
      "level": "K",
      "num": 11,
      "title": "The Empty Pot",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "K12",
      "level": "K",
      "num": 12,
      "title": "Extreme Animals",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "K13",
      "level": "K",
      "num": 13,
      "title": "Extreme Insects",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "K14",
      "level": "K",
      "num": 14,
      "title": "Fast and Faster",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "K15",
      "level": "K",
      "num": 15,
      "title": "Fishing in the Rain",
      "type": "F",
      "theme": "生命世界",
      "lang": "天气水句式"
    },
    {
      "id": "K16",
      "level": "K",
      "num": 16,
      "title": "The Five Brothers",
      "type": "F",
      "theme": "社会与人文",
      "lang": "数字句式"
    },
    {
      "id": "K17",
      "level": "K",
      "num": 17,
      "title": "Flying Kites",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "K18",
      "level": "K",
      "num": 18,
      "title": "France",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "K19",
      "level": "K",
      "num": 19,
      "title": "Gorillas",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Go句式"
    },
    {
      "id": "K20",
      "level": "K",
      "num": 20,
      "title": "The Grand Canyon",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Can句式"
    },
    {
      "id": "K21",
      "level": "K",
      "num": 21,
      "title": "Half Is Fair",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "K22",
      "level": "K",
      "num": 22,
      "title": "High Fives and Other Signs",
      "type": "F",
      "theme": "社会与人文",
      "lang": "数字句式"
    },
    {
      "id": "K23",
      "level": "K",
      "num": 23,
      "title": "How Do We Use Money?",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "K24",
      "level": "K",
      "num": 24,
      "title": "How Many Squares?",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "数字句式"
    },
    {
      "id": "K25",
      "level": "K",
      "num": 25,
      "title": "Hugs for Daddy",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "K26",
      "level": "K",
      "num": 26,
      "title": "I Fly Hot-Air Balloons",
      "type": "F",
      "theme": "生命世界",
      "lang": "I句式"
    },
    {
      "id": "K27",
      "level": "K",
      "num": 27,
      "title": "I Love City Parks",
      "type": "F",
      "theme": "社会与人文",
      "lang": "I句式"
    },
    {
      "id": "K28",
      "level": "K",
      "num": 28,
      "title": "I\\u0027d Like To Be",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "K29",
      "level": "K",
      "num": 29,
      "title": "I\\u0027m Allergic to Peanuts",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "K30",
      "level": "K",
      "num": 30,
      "title": "It\\u0027s About Time",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "K31",
      "level": "K",
      "num": 31,
      "title": "Japan",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "K32",
      "level": "K",
      "num": 32,
      "title": "Julia\\u0027s Castle",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "K33",
      "level": "K",
      "num": 33,
      "title": "Leah\\u0027s Lousy Day",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "K34",
      "level": "K",
      "num": 34,
      "title": "Leap Year Birthday",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "K35",
      "level": "K",
      "num": 35,
      "title": "Leap! A Salmon\\u0027s Story",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "K36",
      "level": "K",
      "num": 36,
      "title": "The Leprechaun Trap",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "K37",
      "level": "K",
      "num": 37,
      "title": "Lola the Llama",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "K38",
      "level": "K",
      "num": 38,
      "title": "The Mail Carrier\\u0027s Hat",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "K39",
      "level": "K",
      "num": 39,
      "title": "Maria\\u0027s Family Celebration",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "K40",
      "level": "K",
      "num": 40,
      "title": "The Mighty Mississippi",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "K41",
      "level": "K",
      "num": 41,
      "title": "Migrating Geese",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "K42",
      "level": "K",
      "num": 42,
      "title": "The Mind Game",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "K43",
      "level": "K",
      "num": 43,
      "title": "Model Rockets",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "K44",
      "level": "K",
      "num": 44,
      "title": "Mongo\\u0027s Migration",
      "type": "F",
      "theme": "生命世界",
      "lang": "Go句式"
    },
    {
      "id": "K45",
      "level": "K",
      "num": 45,
      "title": "New Planet, New School",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "K46",
      "level": "K",
      "num": 46,
      "title": "Odd Number Thirteen",
      "type": "F",
      "theme": "思维与创意",
      "lang": "数字句式"
    },
    {
      "id": "K47",
      "level": "K",
      "num": 47,
      "title": "One Pony Too Many",
      "type": "F",
      "theme": "社会与人文",
      "lang": "数字句式"
    },
    {
      "id": "K48",
      "level": "K",
      "num": 48,
      "title": "Playing It Safe",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "K49",
      "level": "K",
      "num": 49,
      "title": "Ratty Rats",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "K50",
      "level": "K",
      "num": 50,
      "title": "Russia",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "K51",
      "level": "K",
      "num": 51,
      "title": "Sadko and the Sea Kingdom",
      "type": "F",
      "theme": "生命世界",
      "lang": "天气水句式"
    },
    {
      "id": "K52",
      "level": "K",
      "num": 52,
      "title": "Sam\\u0027s Fourth of July",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "K53",
      "level": "K",
      "num": 53,
      "title": "Ships and Boats",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "K54",
      "level": "K",
      "num": 54,
      "title": "Simple Machines",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "K55",
      "level": "K",
      "num": 55,
      "title": "Slithery and Slimy",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "K56",
      "level": "K",
      "num": 56,
      "title": "Slow and Slower",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "K57",
      "level": "K",
      "num": 57,
      "title": "Soccer Is a Kick!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "K58",
      "level": "K",
      "num": 58,
      "title": "Soggy Stepsisters",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "K59",
      "level": "K",
      "num": 59,
      "title": "The Sorcerer\\u0027s Apprentice",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "K60",
      "level": "K",
      "num": 60,
      "title": "South Korea",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "K61",
      "level": "K",
      "num": 61,
      "title": "Strange Plants",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "K62",
      "level": "K",
      "num": 62,
      "title": "Sugar, Sugar, Everywhere",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "K63",
      "level": "K",
      "num": 63,
      "title": "Summer Olympic Events",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "季节句式"
    },
    {
      "id": "K64",
      "level": "K",
      "num": 64,
      "title": "Tarantula!",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "K65",
      "level": "K",
      "num": 65,
      "title": "The Thanksgiving the Jacks Built",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "K66",
      "level": "K",
      "num": 66,
      "title": "The Thanksgiving the Other Jacks Built",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "K67",
      "level": "K",
      "num": 67,
      "title": "That\\u0027s Close Enough",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Not反义句式"
    },
    {
      "id": "K68",
      "level": "K",
      "num": 68,
      "title": "To the Circus",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "K69",
      "level": "K",
      "num": 69,
      "title": "To the Pumpkin Patch",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "K70",
      "level": "K",
      "num": 70,
      "title": "Where We Get Energy",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "We句式"
    },
    {
      "id": "K71",
      "level": "K",
      "num": 71,
      "title": "Where\\u0027s the Joey?",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "K72",
      "level": "K",
      "num": 72,
      "title": "Yellowstone: A Place of Wild Wonders",
      "type": "F",
      "theme": "社会与人文",
      "lang": "颜色句式"
    },
    {
      "id": "L01",
      "level": "L",
      "num": 1,
      "title": "The 100th Day Project",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "L02",
      "level": "L",
      "num": 2,
      "title": "Ancient Egypt",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "L03",
      "level": "L",
      "num": 3,
      "title": "Anna and the Painted Eggs",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "L04",
      "level": "L",
      "num": 4,
      "title": "Big Ben and Westminster Palace",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "L05",
      "level": "L",
      "num": 5,
      "title": "Big Machines",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "L06",
      "level": "L",
      "num": 6,
      "title": "Bigger Than a Monster Truck",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "L07",
      "level": "L",
      "num": 7,
      "title": "Catching Santa",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "L08",
      "level": "L",
      "num": 8,
      "title": "Chich\\u00e9n Itz\\u00e1",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "L09",
      "level": "L",
      "num": 9,
      "title": "Cinderello",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "L10",
      "level": "L",
      "num": 10,
      "title": "Coins Count",
      "type": "F",
      "theme": "思维与创意",
      "lang": "数字句式"
    },
    {
      "id": "L11",
      "level": "L",
      "num": 11,
      "title": "Crocs and Gators",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "L12",
      "level": "L",
      "num": 12,
      "title": "Diabetes and Me",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "L13",
      "level": "L",
      "num": 13,
      "title": "Eggy\\u0027s Easy Out",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "L14",
      "level": "L",
      "num": 14,
      "title": "Fantastic Flying Machines",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "L15",
      "level": "L",
      "num": 15,
      "title": "Feliz Navidad, Carlos!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "L16",
      "level": "L",
      "num": 16,
      "title": "Ghost Towns",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "L17",
      "level": "L",
      "num": 17,
      "title": "Goldilocks and the Other Three Bears",
      "type": "F",
      "theme": "生命世界",
      "lang": "Go句式"
    },
    {
      "id": "L18",
      "level": "L",
      "num": 18,
      "title": "Goldilocks and the Three Bears",
      "type": "F",
      "theme": "生命世界",
      "lang": "Go句式"
    },
    {
      "id": "L19",
      "level": "L",
      "num": 19,
      "title": "The Gray Wolf",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "L20",
      "level": "L",
      "num": 20,
      "title": "Harold the Hungry Plant",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "L21",
      "level": "L",
      "num": 21,
      "title": "A Hero\\u0027s Name",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "L22",
      "level": "L",
      "num": 22,
      "title": "How Animals Sleep",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "L23",
      "level": "L",
      "num": 23,
      "title": "How to Become a Superhero",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "L24",
      "level": "L",
      "num": 24,
      "title": "How to Make Ice Cream",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "L25",
      "level": "L",
      "num": 25,
      "title": "How We Measure",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "L26",
      "level": "L",
      "num": 26,
      "title": "The Igloo",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "L27",
      "level": "L",
      "num": 27,
      "title": "Independence Day",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "L28",
      "level": "L",
      "num": 28,
      "title": "Insect Life Cycle",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "L29",
      "level": "L",
      "num": 29,
      "title": "Introducing Planet Earth",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "L30",
      "level": "L",
      "num": 30,
      "title": "Jessica Loves Soccer",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "L31",
      "level": "L",
      "num": 31,
      "title": "Joey\\u0027s Stop Sign",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "L32",
      "level": "L",
      "num": 32,
      "title": "Lice Aren\\u0027t Nice",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "L33",
      "level": "L",
      "num": 33,
      "title": "The Lonely Woman and the Sea Spirit",
      "type": "F",
      "theme": "生命世界",
      "lang": "天气水句式"
    },
    {
      "id": "L34",
      "level": "L",
      "num": 34,
      "title": "Maria\\u0027s Family Christmas",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "L35",
      "level": "L",
      "num": 35,
      "title": "Noise in the Night",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Not反义句式"
    },
    {
      "id": "L36",
      "level": "L",
      "num": 36,
      "title": "Observing Ramadan",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "L37",
      "level": "L",
      "num": 37,
      "title": "Oil: A Messy Resource",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "L38",
      "level": "L",
      "num": 38,
      "title": "Plant Defenses",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "L39",
      "level": "L",
      "num": 39,
      "title": "Shoes Around the World",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "L40",
      "level": "L",
      "num": 40,
      "title": "Sign Language",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "L41",
      "level": "L",
      "num": 41,
      "title": "Smelly Clyde",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "L42",
      "level": "L",
      "num": 42,
      "title": "Standing Up to the Bullies",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "L43",
      "level": "L",
      "num": 43,
      "title": "Teotihuacan",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Can句式"
    },
    {
      "id": "L44",
      "level": "L",
      "num": 44,
      "title": "The Tinosaur",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Not反义句式"
    },
    {
      "id": "L45",
      "level": "L",
      "num": 45,
      "title": "Two Thanksgivings",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "L46",
      "level": "L",
      "num": 46,
      "title": "United Arab Emirates",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "L47",
      "level": "L",
      "num": 47,
      "title": "Valentine\\u0027s Day",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "L48",
      "level": "L",
      "num": 48,
      "title": "Vampire Dentist",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "L49",
      "level": "L",
      "num": 49,
      "title": "The Water Cycle",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "L50",
      "level": "L",
      "num": 50,
      "title": "William Shakespeare",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "L51",
      "level": "L",
      "num": 51,
      "title": "Wonderful Winter",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "季节句式"
    },
    {
      "id": "L52",
      "level": "L",
      "num": 52,
      "title": "World Holidays",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "M01",
      "level": "M",
      "num": 1,
      "title": "Aesop\\u0027s Fables",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "M02",
      "level": "M",
      "num": 2,
      "title": "Animal Defenses",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "M03",
      "level": "M",
      "num": 3,
      "title": "Art Around Us",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "M04",
      "level": "M",
      "num": 4,
      "title": "Arthur\\u0027s Bad-News Day",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "M05",
      "level": "M",
      "num": 5,
      "title": "The Baobab",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "M06",
      "level": "M",
      "num": 6,
      "title": "The Best Guess",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "M07",
      "level": "M",
      "num": 7,
      "title": "Can I Vote?",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Can句式"
    },
    {
      "id": "M08",
      "level": "M",
      "num": 8,
      "title": "The Day Before Thanksgiving",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "M09",
      "level": "M",
      "num": 9,
      "title": "The Day It Rained Tortillas",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "M10",
      "level": "M",
      "num": 10,
      "title": "Empire State Building",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "M11",
      "level": "M",
      "num": 11,
      "title": "Endangered Birds",
      "type": "F",
      "theme": "生命世界",
      "lang": "颜色句式"
    },
    {
      "id": "M12",
      "level": "M",
      "num": 12,
      "title": "Frogs and Toads",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "M13",
      "level": "M",
      "num": 13,
      "title": "Giant\\u0027s Tale",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "M14",
      "level": "M",
      "num": 14,
      "title": "Go Away, Sun!",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "Go句式"
    },
    {
      "id": "M15",
      "level": "M",
      "num": 15,
      "title": "Hansel and Gretel",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "M16",
      "level": "M",
      "num": 16,
      "title": "Hermit Crabs",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "M17",
      "level": "M",
      "num": 17,
      "title": "History of the Bicycle",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "M18",
      "level": "M",
      "num": 18,
      "title": "The Hoppers Start School",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "M19",
      "level": "M",
      "num": 19,
      "title": "Horseshoes Aren\\u0027t Just for Good Luck",
      "type": "F",
      "theme": "生命世界",
      "lang": "Go句式"
    },
    {
      "id": "M20",
      "level": "M",
      "num": 20,
      "title": "How Much Is a Trillion?",
      "type": "NF",
      "theme": "生命世界",
      "lang": "数字句式"
    },
    {
      "id": "M21",
      "level": "M",
      "num": 21,
      "title": "How to Make Lemonade",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "M22",
      "level": "M",
      "num": 22,
      "title": "Incredible Places to Stay",
      "type": "F",
      "theme": "社会与人文",
      "lang": "颜色句式"
    },
    {
      "id": "M23",
      "level": "M",
      "num": 23,
      "title": "Inside Your Body",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "M24",
      "level": "M",
      "num": 24,
      "title": "Jack\\u0027s Tale",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "M25",
      "level": "M",
      "num": 25,
      "title": "Keb Needs a Home",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "M26",
      "level": "M",
      "num": 26,
      "title": "The Legend of John Henry",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "M27",
      "level": "M",
      "num": 27,
      "title": "The Legend of the Giant\\u0027s Causeway",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "M28",
      "level": "M",
      "num": 28,
      "title": "Louis Braille: A Man and His Method",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "M29",
      "level": "M",
      "num": 29,
      "title": "Marcus Loses Patches",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "M30",
      "level": "M",
      "num": 30,
      "title": "Measuring Is Believing",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "M31",
      "level": "M",
      "num": 31,
      "title": "A New Way of Speaking",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "M32",
      "level": "M",
      "num": 32,
      "title": "Ocean Animals",
      "type": "F",
      "theme": "生命世界",
      "lang": "天气水句式"
    },
    {
      "id": "M33",
      "level": "M",
      "num": 33,
      "title": "Parrots",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "M34",
      "level": "M",
      "num": 34,
      "title": "The Pincoya\\u0027s Dance",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "M35",
      "level": "M",
      "num": 35,
      "title": "The Pirate Substitute",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "M36",
      "level": "M",
      "num": 36,
      "title": "Popo\\u0027s Place",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "M37",
      "level": "M",
      "num": 37,
      "title": "A Prairie Dog\\u0027s Life",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "M38",
      "level": "M",
      "num": 38,
      "title": "The Sleeping Dog",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "M39",
      "level": "M",
      "num": 39,
      "title": "Snow Camping in a Quinzhee",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "Not反义句式"
    },
    {
      "id": "M40",
      "level": "M",
      "num": 40,
      "title": "Solids All Around",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "M41",
      "level": "M",
      "num": 41,
      "title": "The Sometimes Friend",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "M42",
      "level": "M",
      "num": 42,
      "title": "Sound All Around",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "M43",
      "level": "M",
      "num": 43,
      "title": "Spiders",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "M44",
      "level": "M",
      "num": 44,
      "title": "The Story of Rapa Nui",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "M45",
      "level": "M",
      "num": 45,
      "title": "Story of the Sun",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "M46",
      "level": "M",
      "num": 46,
      "title": "The Three Little Pigs",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "M47",
      "level": "M",
      "num": 47,
      "title": "Tokyo Imperial Palace",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "M48",
      "level": "M",
      "num": 48,
      "title": "Tornadoes",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "M49",
      "level": "M",
      "num": 49,
      "title": "A Trip to Rio",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "M50",
      "level": "M",
      "num": 50,
      "title": "The Umbrella Trick",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "M51",
      "level": "M",
      "num": 51,
      "title": "Vacation Time!",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "M52",
      "level": "M",
      "num": 52,
      "title": "What\\u0027s Your Money Worth?",
      "type": "F",
      "theme": "社会与人文",
      "lang": "What句式"
    },
    {
      "id": "M53",
      "level": "M",
      "num": 53,
      "title": "You Stink!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "N01",
      "level": "N",
      "num": 1,
      "title": "Abigail Adams",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "N02",
      "level": "N",
      "num": 2,
      "title": "The Animal Bridge",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "N03",
      "level": "N",
      "num": 3,
      "title": "Asthma",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "N04",
      "level": "N",
      "num": 4,
      "title": "Awesome Ants",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "N05",
      "level": "N",
      "num": 5,
      "title": "Barack Obama",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "N06",
      "level": "N",
      "num": 6,
      "title": "Bedbugs Bite!",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "N07",
      "level": "N",
      "num": 7,
      "title": "Beyond the Five Senses",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "数字句式"
    },
    {
      "id": "N08",
      "level": "N",
      "num": 8,
      "title": "Birthday Blues",
      "type": "F",
      "theme": "社会与人文",
      "lang": "颜色句式"
    },
    {
      "id": "N09",
      "level": "N",
      "num": 9,
      "title": "Bringing Back the Buffalo",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "N10",
      "level": "N",
      "num": 10,
      "title": "The Butterfly Life Cycle",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "N11",
      "level": "N",
      "num": 11,
      "title": "Canada",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Can句式"
    },
    {
      "id": "N12",
      "level": "N",
      "num": 12,
      "title": "Coding Camp",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "N13",
      "level": "N",
      "num": 13,
      "title": "Colleen and the Leprechaun",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "N14",
      "level": "N",
      "num": 14,
      "title": "Coral Reefs",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "N15",
      "level": "N",
      "num": 15,
      "title": "The Creature Constitution",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "N16",
      "level": "N",
      "num": 16,
      "title": "Crows Share a Pie",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "N17",
      "level": "N",
      "num": 17,
      "title": "D\\u00eda for Mar\\u00eda",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "N18",
      "level": "N",
      "num": 18,
      "title": "The Drum",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "N19",
      "level": "N",
      "num": 19,
      "title": "Elephants",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "N20",
      "level": "N",
      "num": 20,
      "title": "The Empty Pot",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "N21",
      "level": "N",
      "num": 21,
      "title": "Extreme Animals",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "N22",
      "level": "N",
      "num": 22,
      "title": "The Fishing Derby",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "N23",
      "level": "N",
      "num": 23,
      "title": "Friends Around the World",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "N24",
      "level": "N",
      "num": 24,
      "title": "Great Mosque of Djenn\\u00e9",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "N25",
      "level": "N",
      "num": 25,
      "title": "The Great Wall of China",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "N26",
      "level": "N",
      "num": 26,
      "title": "Grounded to Earth",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "N27",
      "level": "N",
      "num": 27,
      "title": "Istanbul",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "N28",
      "level": "N",
      "num": 28,
      "title": "Karate",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "N29",
      "level": "N",
      "num": 29,
      "title": "The Last Day of School",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "N30",
      "level": "N",
      "num": 30,
      "title": "The Magic Lake",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "N31",
      "level": "N",
      "num": 31,
      "title": "Making Rice",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "N32",
      "level": "N",
      "num": 32,
      "title": "Measuring Tails",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "N33",
      "level": "N",
      "num": 33,
      "title": "Memorial Day",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "N34",
      "level": "N",
      "num": 34,
      "title": "My Asthma Attack",
      "type": "F",
      "theme": "社会与人文",
      "lang": "My句式"
    },
    {
      "id": "N35",
      "level": "N",
      "num": 35,
      "title": "Old Fears, New Trade",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "N36",
      "level": "N",
      "num": 36,
      "title": "Persephone: a Greek Myth",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "N37",
      "level": "N",
      "num": 37,
      "title": "Petra",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "N38",
      "level": "N",
      "num": 38,
      "title": "Puppets",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "N39",
      "level": "N",
      "num": 39,
      "title": "Rainbows",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "N40",
      "level": "N",
      "num": 40,
      "title": "Rapunzel",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "N41",
      "level": "N",
      "num": 41,
      "title": "Real-Life Multiplication",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "N42",
      "level": "N",
      "num": 42,
      "title": "Roadside Oddities",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "N43",
      "level": "N",
      "num": 43,
      "title": "The Secret Lives of Snails and Slugs",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "N44",
      "level": "N",
      "num": 44,
      "title": "Sharks",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "N45",
      "level": "N",
      "num": 45,
      "title": "Ships and Boats",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "N46",
      "level": "N",
      "num": 46,
      "title": "Slithery Snakes",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "N47",
      "level": "N",
      "num": 47,
      "title": "Smart Savings",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "N48",
      "level": "N",
      "num": 48,
      "title": "Spare the Turkey",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "N49",
      "level": "N",
      "num": 49,
      "title": "Sparky\\u0027s Mystery Fortune",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "N50",
      "level": "N",
      "num": 50,
      "title": "The St. Patrick\\u0027s Day Mystery",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "N51",
      "level": "N",
      "num": 51,
      "title": "Stonehenge",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "N52",
      "level": "N",
      "num": 52,
      "title": "Taj Mahal",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "N53",
      "level": "N",
      "num": 53,
      "title": "The UpDown Boy",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "N54",
      "level": "N",
      "num": 54,
      "title": "Valley of the Kings",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "N55",
      "level": "N",
      "num": 55,
      "title": "Watching Earth From Space",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "N56",
      "level": "N",
      "num": 56,
      "title": "Weird Bird Beaks",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "N57",
      "level": "N",
      "num": 57,
      "title": "What Lives in This Hole?",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "What句式"
    },
    {
      "id": "N58",
      "level": "N",
      "num": 58,
      "title": "Wiggly Worms",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "N59",
      "level": "N",
      "num": 59,
      "title": "The Wild Swans",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "O01",
      "level": "O",
      "num": 1,
      "title": "All About Chocolate",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "O02",
      "level": "O",
      "num": 2,
      "title": "Anansi and the Talking Watermelon",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "O03",
      "level": "O",
      "num": 3,
      "title": "Animals, Animals",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "O04",
      "level": "O",
      "num": 4,
      "title": "Annie Oakley",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "O05",
      "level": "O",
      "num": 5,
      "title": "The Backpack Tax",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "O06",
      "level": "O",
      "num": 6,
      "title": "A Bad Movie",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "O07",
      "level": "O",
      "num": 7,
      "title": "Badlands National Park",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "O08",
      "level": "O",
      "num": 8,
      "title": "Baltic Rescue",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "O09",
      "level": "O",
      "num": 9,
      "title": "Bats",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "O10",
      "level": "O",
      "num": 10,
      "title": "Bigger Than a Monster Truck",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "O11",
      "level": "O",
      "num": 11,
      "title": "Blizzards!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "O12",
      "level": "O",
      "num": 12,
      "title": "Brad Needs a Budget",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "O13",
      "level": "O",
      "num": 13,
      "title": "China",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "O14",
      "level": "O",
      "num": 14,
      "title": "A COVID Birthday",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "O15",
      "level": "O",
      "num": 15,
      "title": "Cy and Medusa",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "O16",
      "level": "O",
      "num": 16,
      "title": "Deep in the Ocean",
      "type": "F",
      "theme": "生命世界",
      "lang": "天气水句式"
    },
    {
      "id": "O17",
      "level": "O",
      "num": 17,
      "title": "A Dog\\u0027s Tale",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "O18",
      "level": "O",
      "num": 18,
      "title": "Dogs at Work",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "O19",
      "level": "O",
      "num": 19,
      "title": "Earth\\u0027s Water",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "O20",
      "level": "O",
      "num": 20,
      "title": "The Everglades",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "O21",
      "level": "O",
      "num": 21,
      "title": "Giant Pumpkins",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "O22",
      "level": "O",
      "num": 22,
      "title": "The Great Land Run",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "O23",
      "level": "O",
      "num": 23,
      "title": "HeroRATs: Rats Who Save Lives",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "O24",
      "level": "O",
      "num": 24,
      "title": "Hibernation",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "O25",
      "level": "O",
      "num": 25,
      "title": "Hooray! Arrays!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "O26",
      "level": "O",
      "num": 26,
      "title": "Hoover Dam",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "O27",
      "level": "O",
      "num": 27,
      "title": "I Collect That!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "I句式"
    },
    {
      "id": "O28",
      "level": "O",
      "num": 28,
      "title": "I Just Want to Go to School!",
      "type": "F",
      "theme": "生命世界",
      "lang": "I句式"
    },
    {
      "id": "O29",
      "level": "O",
      "num": 29,
      "title": "Ichiro Suzuki",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "O30",
      "level": "O",
      "num": 30,
      "title": "India",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "O31",
      "level": "O",
      "num": 31,
      "title": "Irma\\u0027s Sandwich Shop",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "O32",
      "level": "O",
      "num": 32,
      "title": "It\\u0027s Time for the Park",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "O33",
      "level": "O",
      "num": 33,
      "title": "Jane Goodall",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Go句式"
    },
    {
      "id": "O34",
      "level": "O",
      "num": 34,
      "title": "Jenny Loves Yoga",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "O35",
      "level": "O",
      "num": 35,
      "title": "A Landforms Adventure",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "O36",
      "level": "O",
      "num": 36,
      "title": "Li\\u0027s Tangram Animals",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "O37",
      "level": "O",
      "num": 37,
      "title": "Little Red Riding Hood",
      "type": "F",
      "theme": "社会与人文",
      "lang": "颜色句式"
    },
    {
      "id": "O38",
      "level": "O",
      "num": 38,
      "title": "Little Red\\u0027s Secret Sauce",
      "type": "F",
      "theme": "社会与人文",
      "lang": "颜色句式"
    },
    {
      "id": "O39",
      "level": "O",
      "num": 39,
      "title": "The Loser",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "O40",
      "level": "O",
      "num": 40,
      "title": "Machu Picchu",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "O41",
      "level": "O",
      "num": 41,
      "title": "Makusani\\u0027s Lesson",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "O42",
      "level": "O",
      "num": 42,
      "title": "Meeting Father in Plymouth",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "O43",
      "level": "O",
      "num": 43,
      "title": "Mud Runs",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "O44",
      "level": "O",
      "num": 44,
      "title": "Nature Stinks!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "O45",
      "level": "O",
      "num": 45,
      "title": "Off to Join the Circus",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "O46",
      "level": "O",
      "num": 46,
      "title": "The Other Book of World Records",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "O47",
      "level": "O",
      "num": 47,
      "title": "Owls Overhead",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "O48",
      "level": "O",
      "num": 48,
      "title": "Paul Bunyan and Babe the Blue Ox",
      "type": "F",
      "theme": "社会与人文",
      "lang": "颜色句式"
    },
    {
      "id": "O49",
      "level": "O",
      "num": 49,
      "title": "Pecos Bill Rides a Tornado",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "O50",
      "level": "O",
      "num": 50,
      "title": "Pepper: The King of Spices",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "O51",
      "level": "O",
      "num": 51,
      "title": "Pluto\\u0027s New Friends",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "O52",
      "level": "O",
      "num": 52,
      "title": "Rainy-Day Savings",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "O53",
      "level": "O",
      "num": 53,
      "title": "Rocky Mountain National Park",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "介词反义"
    },
    {
      "id": "O54",
      "level": "O",
      "num": 54,
      "title": "Sally Ride",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "O55",
      "level": "O",
      "num": 55,
      "title": "Salt Rocks!",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "O56",
      "level": "O",
      "num": 56,
      "title": "The Shadow People",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "O57",
      "level": "O",
      "num": 57,
      "title": "The Spelling Bee",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "O58",
      "level": "O",
      "num": 58,
      "title": "Spider Monkey\\u0027s Question",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "O59",
      "level": "O",
      "num": 59,
      "title": "The Story of the Statue",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "O60",
      "level": "O",
      "num": 60,
      "title": "Thomas Edison",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "O61",
      "level": "O",
      "num": 61,
      "title": "Three Little Pigs: The Wolf\\u0027s Story",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "O62",
      "level": "O",
      "num": 62,
      "title": "Thurgood Marshall",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Go句式"
    },
    {
      "id": "O63",
      "level": "O",
      "num": 63,
      "title": "Troika: Canine Superhero",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Can句式"
    },
    {
      "id": "O64",
      "level": "O",
      "num": 64,
      "title": "Whales",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "O65",
      "level": "O",
      "num": 65,
      "title": "Why Do Leaves Change Color?",
      "type": "NF",
      "theme": "思维与创意",
      "lang": "颜色句式"
    },
    {
      "id": "O66",
      "level": "O",
      "num": 66,
      "title": "Wonders of Nature",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "P01",
      "level": "P",
      "num": 1,
      "title": "About Trees",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "P02",
      "level": "P",
      "num": 2,
      "title": "Acropolis Adventure",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "P03",
      "level": "P",
      "num": 3,
      "title": "Adding It Up",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "P04",
      "level": "P",
      "num": 4,
      "title": "Alia and the Furniture Troll",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "P05",
      "level": "P",
      "num": 5,
      "title": "Amazing Antarctica",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "P06",
      "level": "P",
      "num": 6,
      "title": "The Animal Data Files",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "P07",
      "level": "P",
      "num": 7,
      "title": "Becky\\u0027s Puzzle Problem",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "P08",
      "level": "P",
      "num": 8,
      "title": "Blackbeard the Pirate",
      "type": "F",
      "theme": "生命世界",
      "lang": "颜色句式"
    },
    {
      "id": "P09",
      "level": "P",
      "num": 9,
      "title": "Colosseum",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "P10",
      "level": "P",
      "num": 10,
      "title": "Deep Inside a Copper Mine",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "P11",
      "level": "P",
      "num": 11,
      "title": "Dictionary Dave",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "P12",
      "level": "P",
      "num": 12,
      "title": "Dinosaurs",
      "type": "F",
      "theme": "生命世界",
      "lang": "Not反义句式"
    },
    {
      "id": "P13",
      "level": "P",
      "num": 13,
      "title": "Discovering Dinosaurs",
      "type": "F",
      "theme": "生命世界",
      "lang": "Not反义句式"
    },
    {
      "id": "P14",
      "level": "P",
      "num": 14,
      "title": "Dr. King\\u0027s Memorial",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "P15",
      "level": "P",
      "num": 15,
      "title": "Dragonflies!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Go句式"
    },
    {
      "id": "P16",
      "level": "P",
      "num": 16,
      "title": "Eiffel Tower",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "P17",
      "level": "P",
      "num": 17,
      "title": "Fall Forward, Spring Back",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "季节句式"
    },
    {
      "id": "P18",
      "level": "P",
      "num": 18,
      "title": "Fantastic Flying Machines",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "P19",
      "level": "P",
      "num": 19,
      "title": "Firefighters",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "P20",
      "level": "P",
      "num": 20,
      "title": "A Golden Tragedy",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Go句式"
    },
    {
      "id": "P21",
      "level": "P",
      "num": 21,
      "title": "Goldilocks and the Other Three Bears",
      "type": "F",
      "theme": "生命世界",
      "lang": "Go句式"
    },
    {
      "id": "P22",
      "level": "P",
      "num": 22,
      "title": "Goldilocks and the Three Bears",
      "type": "F",
      "theme": "生命世界",
      "lang": "Go句式"
    },
    {
      "id": "P23",
      "level": "P",
      "num": 23,
      "title": "Gotta Get Away from Gravity",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Go句式"
    },
    {
      "id": "P24",
      "level": "P",
      "num": 24,
      "title": "Great Zimbabwe",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "P25",
      "level": "P",
      "num": 25,
      "title": "I Am the Hope Diamond",
      "type": "F",
      "theme": "社会与人文",
      "lang": "I句式"
    },
    {
      "id": "P26",
      "level": "P",
      "num": 26,
      "title": "I\\u0027m the Small One",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "P27",
      "level": "P",
      "num": 27,
      "title": "Inside the Beast",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "P28",
      "level": "P",
      "num": 28,
      "title": "Jack-o\\u0027-Lanterns",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "P29",
      "level": "P",
      "num": 29,
      "title": "Kenya",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "P30",
      "level": "P",
      "num": 30,
      "title": "Landon\\u0027s Pumpkins",
      "type": "F",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "P31",
      "level": "P",
      "num": 31,
      "title": "A Late Night Chat with a Parakeet",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "P32",
      "level": "P",
      "num": 32,
      "title": "The Legend of Sleepy Hollow",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "P33",
      "level": "P",
      "num": 33,
      "title": "Magnetism",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "P34",
      "level": "P",
      "num": 34,
      "title": "Martin Luther King, Jr.",
      "type": "F",
      "theme": "思维与创意",
      "lang": "介词反义"
    },
    {
      "id": "P35",
      "level": "P",
      "num": 35,
      "title": "The Mona Lisa Mystery",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "P36",
      "level": "P",
      "num": 36,
      "title": "Mother Teresa",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "P37",
      "level": "P",
      "num": 37,
      "title": "My Uncle Is a Firefighter",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "My句式"
    },
    {
      "id": "P38",
      "level": "P",
      "num": 38,
      "title": "New Year Celebrations",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "P39",
      "level": "P",
      "num": 39,
      "title": "Picture Day",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "P40",
      "level": "P",
      "num": 40,
      "title": "The Pirate Substitute",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "P41",
      "level": "P",
      "num": 41,
      "title": "Presidents\\u0027 Day",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "P42",
      "level": "P",
      "num": 42,
      "title": "Rainbows",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "P43",
      "level": "P",
      "num": 43,
      "title": "Rent a Llama",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "P44",
      "level": "P",
      "num": 44,
      "title": "Rockin\\u0027 Rhythm and Sweet Harmony",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "P45",
      "level": "P",
      "num": 45,
      "title": "Sally Takayama\\u0027s Worst Day Ever",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "P46",
      "level": "P",
      "num": 46,
      "title": "Seals, Sea Lions, and Walruses",
      "type": "F",
      "theme": "生命世界",
      "lang": "天气水句式"
    },
    {
      "id": "P47",
      "level": "P",
      "num": 47,
      "title": "The Seed Sowers",
      "type": "F",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "P48",
      "level": "P",
      "num": 48,
      "title": "Sled Dogs to the Rescue",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "P49",
      "level": "P",
      "num": 49,
      "title": "Spain",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "P50",
      "level": "P",
      "num": 50,
      "title": "The Story of Jeans",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "P51",
      "level": "P",
      "num": 51,
      "title": "Two Make Twins",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "P52",
      "level": "P",
      "num": 52,
      "title": "What\\u0027s the Difference?",
      "type": "F",
      "theme": "社会与人文",
      "lang": "What句式"
    },
    {
      "id": "P53",
      "level": "P",
      "num": 53,
      "title": "Why We Sleep",
      "type": "NF",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "Q01",
      "level": "Q",
      "num": 1,
      "title": "Aesop\\u0027s Fables",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Q02",
      "level": "Q",
      "num": 2,
      "title": "Amelia Earhart: A Legend in Flight",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "介词反义"
    },
    {
      "id": "Q03",
      "level": "Q",
      "num": 3,
      "title": "The Ant in the Photograph",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "Q04",
      "level": "Q",
      "num": 4,
      "title": "Bison Came Back",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "Q05",
      "level": "Q",
      "num": 5,
      "title": "Book 1: The Hollow",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Q06",
      "level": "Q",
      "num": 6,
      "title": "Book 1: The Kid Who Couldn\\u0027t Save",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Q07",
      "level": "Q",
      "num": 7,
      "title": "Book 2: The Cave of the Lost",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Q08",
      "level": "Q",
      "num": 8,
      "title": "Book 2: Who Likes Lemonade?",
      "type": "F",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "Q09",
      "level": "Q",
      "num": 9,
      "title": "The Castaway Pines",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "Q10",
      "level": "Q",
      "num": 10,
      "title": "Celebrating Food and Family",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "Q11",
      "level": "Q",
      "num": 11,
      "title": "Chesa\\u0027s Oasis",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Q12",
      "level": "Q",
      "num": 12,
      "title": "Eleventeen",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Q13",
      "level": "Q",
      "num": 13,
      "title": "European Castles",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Q14",
      "level": "Q",
      "num": 14,
      "title": "The Farmer and the Horse",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "Q15",
      "level": "Q",
      "num": 15,
      "title": "Fireworks",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "Q16",
      "level": "Q",
      "num": 16,
      "title": "The Footprint",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Q17",
      "level": "Q",
      "num": 17,
      "title": "The Great Lemon Bake-Off",
      "type": "F",
      "theme": "身体与健康",
      "lang": "介词反义"
    },
    {
      "id": "Q18",
      "level": "Q",
      "num": 18,
      "title": "Hattie in the Attic",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "Q19",
      "level": "Q",
      "num": 19,
      "title": "His Biggest Fan",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Q20",
      "level": "Q",
      "num": 20,
      "title": "How Memory Works",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Q21",
      "level": "Q",
      "num": 21,
      "title": "Hula: The Heartbeat of Hawai\\u0027i",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "Q22",
      "level": "Q",
      "num": 22,
      "title": "The Icy Tent",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Q23",
      "level": "Q",
      "num": 23,
      "title": "Jackie Robinson",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Q24",
      "level": "Q",
      "num": 24,
      "title": "Katie\\u0027s Forest Finds",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "Q25",
      "level": "Q",
      "num": 25,
      "title": "The Little Fir Tree",
      "type": "F",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "Q26",
      "level": "Q",
      "num": 26,
      "title": "Mermaid in a Teacup",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "Q27",
      "level": "Q",
      "num": 27,
      "title": "Morty and the Oatmeal Babysitter",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Q28",
      "level": "Q",
      "num": 28,
      "title": "Morty and the Teacher\\u0027s Apples",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Q29",
      "level": "Q",
      "num": 29,
      "title": "Morty and the Walkathon",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Q30",
      "level": "Q",
      "num": 30,
      "title": "Morty\\u0027s Swim Surprise",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Q31",
      "level": "Q",
      "num": 31,
      "title": "My Earth Day Birthday",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "My句式"
    },
    {
      "id": "Q32",
      "level": "Q",
      "num": 32,
      "title": "Mysterious Mars",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Q33",
      "level": "Q",
      "num": 33,
      "title": "Mystery at Camp White Cloud",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "颜色句式"
    },
    {
      "id": "Q34",
      "level": "Q",
      "num": 34,
      "title": "The New Soccer Ball",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Q35",
      "level": "Q",
      "num": 35,
      "title": "On Eagle River",
      "type": "F",
      "theme": "社会与人文",
      "lang": "天气水句式"
    },
    {
      "id": "Q36",
      "level": "Q",
      "num": 36,
      "title": "Park Rangers",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Q37",
      "level": "Q",
      "num": 37,
      "title": "Queen Elizabeth I",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Q38",
      "level": "Q",
      "num": 38,
      "title": "The Science of Hiccups",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "Q39",
      "level": "Q",
      "num": 39,
      "title": "Sharks",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "Q40",
      "level": "Q",
      "num": 40,
      "title": "Sinkhole Science",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Q41",
      "level": "Q",
      "num": 41,
      "title": "Slithery Snakes",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "Q42",
      "level": "Q",
      "num": 42,
      "title": "Sonia Sotomayor Joins the Supreme Court",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "Q43",
      "level": "Q",
      "num": 43,
      "title": "SPRAK!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Q44",
      "level": "Q",
      "num": 44,
      "title": "The Steam Engine",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Q45",
      "level": "Q",
      "num": 45,
      "title": "Summer Olympic Events",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "季节句式"
    },
    {
      "id": "Q46",
      "level": "Q",
      "num": 46,
      "title": "The Terry Fox Story",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "Q47",
      "level": "Q",
      "num": 47,
      "title": "The WeatherBot Warning",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "Q48",
      "level": "Q",
      "num": 48,
      "title": "Zookeeping",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "R01",
      "level": "R",
      "num": 1,
      "title": "The Amazing Amazon",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "R02",
      "level": "R",
      "num": 2,
      "title": "The Animal Bridge",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "R03",
      "level": "R",
      "num": 3,
      "title": "April Fools\\u0027 Day",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "R04",
      "level": "R",
      "num": 4,
      "title": "Barack Obama",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "R05",
      "level": "R",
      "num": 5,
      "title": "Beowulf",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "R06",
      "level": "R",
      "num": 6,
      "title": "The Bird\\u0027s Nest",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "R07",
      "level": "R",
      "num": 7,
      "title": "Book 1: Charly Did It",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "R08",
      "level": "R",
      "num": 8,
      "title": "Book 2: Charly\\u0027s New Year\\u0027s Revolution",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "R09",
      "level": "R",
      "num": 9,
      "title": "Book 3: April Fool\\u0027s",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "R10",
      "level": "R",
      "num": 10,
      "title": "Book 3: Charly Sings \\u0027til It Drops",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "R11",
      "level": "R",
      "num": 11,
      "title": "Book 3: Seeds and Sunflowers",
      "type": "F",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "R12",
      "level": "R",
      "num": 12,
      "title": "Book 4: Raining Cats, Dogs, and Other Animals",
      "type": "F",
      "theme": "生命世界",
      "lang": "天气水句式"
    },
    {
      "id": "R13",
      "level": "R",
      "num": 13,
      "title": "Book 4: Scaredy Camp",
      "type": "F",
      "theme": "身体与健康",
      "lang": "颜色句式"
    },
    {
      "id": "R14",
      "level": "R",
      "num": 14,
      "title": "Book 4: Trick or Treat?",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "R15",
      "level": "R",
      "num": 15,
      "title": "Catherine\\u0027s Sea of Cortez Journal",
      "type": "F",
      "theme": "生命世界",
      "lang": "天气水句式"
    },
    {
      "id": "R16",
      "level": "R",
      "num": 16,
      "title": "Cinderello",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "R17",
      "level": "R",
      "num": 17,
      "title": "D\\u00eda de los Muertos",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "R18",
      "level": "R",
      "num": 18,
      "title": "Electric Eels!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "R19",
      "level": "R",
      "num": 19,
      "title": "The Five Brothers",
      "type": "F",
      "theme": "社会与人文",
      "lang": "数字句式"
    },
    {
      "id": "R20",
      "level": "R",
      "num": 20,
      "title": "Glow-in-the-Dark Animals",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "R21",
      "level": "R",
      "num": 21,
      "title": "Hansel and Gretel",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "R22",
      "level": "R",
      "num": 22,
      "title": "The Hard Stuff! All About Bones",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "R23",
      "level": "R",
      "num": 23,
      "title": "How the Robin Stole Fire",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "介词反义"
    },
    {
      "id": "R24",
      "level": "R",
      "num": 24,
      "title": "Inventions",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "R25",
      "level": "R",
      "num": 25,
      "title": "Itching and Scratching",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "R26",
      "level": "R",
      "num": 26,
      "title": "King George III",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "R27",
      "level": "R",
      "num": 27,
      "title": "The Lost Dutchman",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "R28",
      "level": "R",
      "num": 28,
      "title": "Lucia\\u0027s New School",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "R29",
      "level": "R",
      "num": 29,
      "title": "Martin Luther King, Jr.",
      "type": "F",
      "theme": "思维与创意",
      "lang": "介词反义"
    },
    {
      "id": "R30",
      "level": "R",
      "num": 30,
      "title": "Morty and Charming Theo",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "R31",
      "level": "R",
      "num": 31,
      "title": "Morty and the Monster Truck Madness",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "R32",
      "level": "R",
      "num": 32,
      "title": "Morty and the Twice-Fit Mice",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "R33",
      "level": "R",
      "num": 33,
      "title": "Morty Takes a Wooden Nickel",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "R34",
      "level": "R",
      "num": 34,
      "title": "Mozart",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "R35",
      "level": "R",
      "num": 35,
      "title": "Murdoch\\u0027s Path",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "R36",
      "level": "R",
      "num": 36,
      "title": "Nature Reuses and Recycles",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "R37",
      "level": "R",
      "num": 37,
      "title": "Owls Overhead",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "R38",
      "level": "R",
      "num": 38,
      "title": "Recipe for Disaster",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "R39",
      "level": "R",
      "num": 39,
      "title": "Remembering September 11",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "R40",
      "level": "R",
      "num": 40,
      "title": "Saved by the Stars",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "R41",
      "level": "R",
      "num": 41,
      "title": "Sister Sleuth and the Silver Blaze",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "R42",
      "level": "R",
      "num": 42,
      "title": "Skydiving",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "R43",
      "level": "R",
      "num": 43,
      "title": "The Story of the Statue",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "R44",
      "level": "R",
      "num": 44,
      "title": "Strange Plants",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "R45",
      "level": "R",
      "num": 45,
      "title": "Sugar, Sugar, Everywhere",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "R46",
      "level": "R",
      "num": 46,
      "title": "The Thesaurus",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "R47",
      "level": "R",
      "num": 47,
      "title": "Thomas Edison",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "R48",
      "level": "R",
      "num": 48,
      "title": "Thurgood Marshall",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Go句式"
    },
    {
      "id": "R49",
      "level": "R",
      "num": 49,
      "title": "Treasure Found",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "R50",
      "level": "R",
      "num": 50,
      "title": "The Treasure of El Dorado",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "R51",
      "level": "R",
      "num": 51,
      "title": "Turtle Tom",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "R52",
      "level": "R",
      "num": 52,
      "title": "We\\u0027re in Business",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "R53",
      "level": "R",
      "num": 53,
      "title": "What Built This?",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "What句式"
    },
    {
      "id": "R54",
      "level": "R",
      "num": 54,
      "title": "What Lives in This Hole?",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "What句式"
    },
    {
      "id": "R55",
      "level": "R",
      "num": 55,
      "title": "Wiggly Worms",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "R56",
      "level": "R",
      "num": 56,
      "title": "Wonders of Nature",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "R57",
      "level": "R",
      "num": 57,
      "title": "Yellow Brick Roadies",
      "type": "F",
      "theme": "社会与人文",
      "lang": "颜色句式"
    },
    {
      "id": "S01",
      "level": "S",
      "num": 1,
      "title": "The 100th Day Project",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S02",
      "level": "S",
      "num": 2,
      "title": "1849: The California Gold Rush",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Go句式"
    },
    {
      "id": "S03",
      "level": "S",
      "num": 3,
      "title": "A Crafty Escape",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S04",
      "level": "S",
      "num": 4,
      "title": "All About Kites",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "S05",
      "level": "S",
      "num": 5,
      "title": "Amazing Antarctica",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "S06",
      "level": "S",
      "num": 6,
      "title": "Animal Discoveries",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "S07",
      "level": "S",
      "num": 7,
      "title": "Animal Groups: Strength in Numbers",
      "type": "F",
      "theme": "生命世界",
      "lang": "数字句式"
    },
    {
      "id": "S08",
      "level": "S",
      "num": 8,
      "title": "Argentina",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S09",
      "level": "S",
      "num": 9,
      "title": "Arrows",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S10",
      "level": "S",
      "num": 10,
      "title": "Badlands National Park",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S11",
      "level": "S",
      "num": 11,
      "title": "The Best Worst Thanksgiving",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S12",
      "level": "S",
      "num": 12,
      "title": "Blizzards!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S13",
      "level": "S",
      "num": 13,
      "title": "Book 5: Finding the Tome",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S14",
      "level": "S",
      "num": 14,
      "title": "Book 5: Let a Smiley Face Be Your Umbrella",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S15",
      "level": "S",
      "num": 15,
      "title": "Book 5: No Fair, Tooth Fairy",
      "type": "F",
      "theme": "身体与健康",
      "lang": "Not反义句式"
    },
    {
      "id": "S16",
      "level": "S",
      "num": 16,
      "title": "Book 6: Mike on Strike!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "S17",
      "level": "S",
      "num": 17,
      "title": "Book 6: The Hidden Room",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S18",
      "level": "S",
      "num": 18,
      "title": "Book 7: No Sense of Style",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Not反义句式"
    },
    {
      "id": "S19",
      "level": "S",
      "num": 19,
      "title": "Brainstorm Bear",
      "type": "F",
      "theme": "生命世界",
      "lang": "天气水句式"
    },
    {
      "id": "S20",
      "level": "S",
      "num": 20,
      "title": "Butterflies and Moths",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S21",
      "level": "S",
      "num": 21,
      "title": "The Butterfly Life Cycle",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "S22",
      "level": "S",
      "num": 22,
      "title": "Chef Morty\\u0027s Party Surprise",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S23",
      "level": "S",
      "num": 23,
      "title": "Chili Pepper Powder Surprise",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S24",
      "level": "S",
      "num": 24,
      "title": "Cinderella",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S25",
      "level": "S",
      "num": 25,
      "title": "Coral Reefs",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "S26",
      "level": "S",
      "num": 26,
      "title": "A COVID Birthday",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S27",
      "level": "S",
      "num": 27,
      "title": "The Creature Constitution",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "S28",
      "level": "S",
      "num": 28,
      "title": "Critter Crossings",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S29",
      "level": "S",
      "num": 29,
      "title": "Cry For Me",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S30",
      "level": "S",
      "num": 30,
      "title": "Cy and Medusa",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S31",
      "level": "S",
      "num": 31,
      "title": "D\\u00eda for Mar\\u00eda",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S32",
      "level": "S",
      "num": 32,
      "title": "Dogs at Work",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "S33",
      "level": "S",
      "num": 33,
      "title": "Dragonflies!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Go句式"
    },
    {
      "id": "S34",
      "level": "S",
      "num": 34,
      "title": "Earthquakes, Volcanoes, and Tsunamis",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "Can句式"
    },
    {
      "id": "S35",
      "level": "S",
      "num": 35,
      "title": "The Everglades",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S36",
      "level": "S",
      "num": 36,
      "title": "The Executive Branch",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S37",
      "level": "S",
      "num": 37,
      "title": "Explorer\\u0027s Guide to World Weather",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "S38",
      "level": "S",
      "num": 38,
      "title": "Extreme Animals",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "S39",
      "level": "S",
      "num": 39,
      "title": "Frederick Douglass: Forever Free",
      "type": "F",
      "theme": "社会与人文",
      "lang": "颜色句式"
    },
    {
      "id": "S40",
      "level": "S",
      "num": 40,
      "title": "Galileo",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S41",
      "level": "S",
      "num": 41,
      "title": "Gandhi",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S42",
      "level": "S",
      "num": 42,
      "title": "George Washington Carver",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "S43",
      "level": "S",
      "num": 43,
      "title": "Ghost Towns",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S44",
      "level": "S",
      "num": 44,
      "title": "Ghosts in the House",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "S45",
      "level": "S",
      "num": 45,
      "title": "The Great Gallardo\\u0027s Books",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "S46",
      "level": "S",
      "num": 46,
      "title": "Guardian Dogs: Penguin Protectors",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "S47",
      "level": "S",
      "num": 47,
      "title": "The Guest Ranch",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S48",
      "level": "S",
      "num": 48,
      "title": "Guy Fawkes Day",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S49",
      "level": "S",
      "num": 49,
      "title": "Harriet Tubman and the Underground Railroad",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "S50",
      "level": "S",
      "num": 50,
      "title": "Hawaii Volcanoes National Park",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "Can句式"
    },
    {
      "id": "S51",
      "level": "S",
      "num": 51,
      "title": "Here Come the Locusts",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S52",
      "level": "S",
      "num": 52,
      "title": "Horseshoes Aren\\u0027t Just for Good Luck",
      "type": "F",
      "theme": "生命世界",
      "lang": "Go句式"
    },
    {
      "id": "S53",
      "level": "S",
      "num": 53,
      "title": "Ichiro Suzuki",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S54",
      "level": "S",
      "num": 54,
      "title": "The International T-Shirt Challenge",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S55",
      "level": "S",
      "num": 55,
      "title": "Introducing the Penny",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S56",
      "level": "S",
      "num": 56,
      "title": "Istanbul",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S57",
      "level": "S",
      "num": 57,
      "title": "John Muir",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S58",
      "level": "S",
      "num": 58,
      "title": "The Judicial Branch",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S59",
      "level": "S",
      "num": 59,
      "title": "The Kingdom of Happiness",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S60",
      "level": "S",
      "num": 60,
      "title": "The Last Day of School",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S61",
      "level": "S",
      "num": 61,
      "title": "The Legislative Branch",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S62",
      "level": "S",
      "num": 62,
      "title": "Lice Aren\\u0027t Nice",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "S63",
      "level": "S",
      "num": 63,
      "title": "Losing Grandpa",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S64",
      "level": "S",
      "num": 64,
      "title": "Michelle Obama",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S65",
      "level": "S",
      "num": 65,
      "title": "Mighty Glaciers",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S66",
      "level": "S",
      "num": 66,
      "title": "The Mighty Mississippi",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S67",
      "level": "S",
      "num": 67,
      "title": "Miguel and King Arthur",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "S68",
      "level": "S",
      "num": 68,
      "title": "Miguel in the Secret Garden",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "S69",
      "level": "S",
      "num": 69,
      "title": "Mom for City Council",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S70",
      "level": "S",
      "num": 70,
      "title": "Morocco",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S71",
      "level": "S",
      "num": 71,
      "title": "Morty the Meany",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S72",
      "level": "S",
      "num": 72,
      "title": "A Nation on Wheels",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "S73",
      "level": "S",
      "num": 73,
      "title": "New Year Celebrations",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "S74",
      "level": "S",
      "num": 74,
      "title": "Noah Had a House",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Not反义句式"
    },
    {
      "id": "S75",
      "level": "S",
      "num": 75,
      "title": "Noni and the Book Ban",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Not反义句式"
    },
    {
      "id": "S76",
      "level": "S",
      "num": 76,
      "title": "The Other Book of World Records",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S77",
      "level": "S",
      "num": 77,
      "title": "Polar Bear\\u0027s Promise",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "S78",
      "level": "S",
      "num": 78,
      "title": "The Power of Magnets",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S79",
      "level": "S",
      "num": 79,
      "title": "Roadside Oddities",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S80",
      "level": "S",
      "num": 80,
      "title": "Saint Patrick\\u0027s Day",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S81",
      "level": "S",
      "num": 81,
      "title": "Salmon: A Link in the Food Chain",
      "type": "F",
      "theme": "身体与健康",
      "lang": "介词反义"
    },
    {
      "id": "S82",
      "level": "S",
      "num": 82,
      "title": "Samson: A Horse Story",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "S83",
      "level": "S",
      "num": 83,
      "title": "Say It With Pictures",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S84",
      "level": "S",
      "num": 84,
      "title": "Science Dad: Lessons in Light",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "介词反义"
    },
    {
      "id": "S85",
      "level": "S",
      "num": 85,
      "title": "Scotty\\u0027s Spring Training",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "季节句式"
    },
    {
      "id": "S86",
      "level": "S",
      "num": 86,
      "title": "A Selection From Alice in Wonderland",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "S87",
      "level": "S",
      "num": 87,
      "title": "Shelter Pets Are Best",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "S88",
      "level": "S",
      "num": 88,
      "title": "Shirley Chisholm",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S89",
      "level": "S",
      "num": 89,
      "title": "Stories from Asgard: Norse Myths",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Not反义句式"
    },
    {
      "id": "S90",
      "level": "S",
      "num": 90,
      "title": "Supply and Demand",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "S91",
      "level": "S",
      "num": 91,
      "title": "Talking to Each Other",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S92",
      "level": "S",
      "num": 92,
      "title": "The Three-R Plan",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S93",
      "level": "S",
      "num": 93,
      "title": "A Trip to Rio",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S94",
      "level": "S",
      "num": 94,
      "title": "The U.S. Constitution",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S95",
      "level": "S",
      "num": 95,
      "title": "The U.S. Government At Work",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Go句式"
    },
    {
      "id": "S96",
      "level": "S",
      "num": 96,
      "title": "Voyagers in Space",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "介词反义"
    },
    {
      "id": "S97",
      "level": "S",
      "num": 97,
      "title": "What\\u0027s Next?",
      "type": "F",
      "theme": "社会与人文",
      "lang": "What句式"
    },
    {
      "id": "S98",
      "level": "S",
      "num": 98,
      "title": "Wheeling the Snake",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "S99",
      "level": "S",
      "num": 99,
      "title": "Why Abe Lincoln Grew a Beard",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "S100",
      "level": "S",
      "num": 100,
      "title": "Why We Sleep",
      "type": "NF",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "S101",
      "level": "S",
      "num": 101,
      "title": "The Wild Swans",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S102",
      "level": "S",
      "num": 102,
      "title": "Woods of Wonder",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "S103",
      "level": "S",
      "num": 103,
      "title": "The Yanomami: Deep in the Amazon",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Not反义句式"
    },
    {
      "id": "S104",
      "level": "S",
      "num": 104,
      "title": "Yellowstone: A Place of Wild Wonders",
      "type": "F",
      "theme": "社会与人文",
      "lang": "颜色句式"
    },
    {
      "id": "T01",
      "level": "T",
      "num": 1,
      "title": "Abigail Adams",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "T02",
      "level": "T",
      "num": 2,
      "title": "Acadia National Park",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "T03",
      "level": "T",
      "num": 3,
      "title": "Adventures with Abuela",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "T04",
      "level": "T",
      "num": 4,
      "title": "Aladdin and the Wonderful Lamp",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "T05",
      "level": "T",
      "num": 5,
      "title": "Alice\\u0027s Birthday Cake",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "T06",
      "level": "T",
      "num": 6,
      "title": "Ants in My Bed",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "T07",
      "level": "T",
      "num": 7,
      "title": "An Apple a Day",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "T08",
      "level": "T",
      "num": 8,
      "title": "Art Around Us",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "T09",
      "level": "T",
      "num": 9,
      "title": "Arthur\\u0027s Bad-News Day",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "T10",
      "level": "T",
      "num": 10,
      "title": "Awesome Ants",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "T11",
      "level": "T",
      "num": 11,
      "title": "Bats in the Attic",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "T12",
      "level": "T",
      "num": 12,
      "title": "The Beekeeper",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "T13",
      "level": "T",
      "num": 13,
      "title": "Bessie Coleman",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "T14",
      "level": "T",
      "num": 14,
      "title": "Birds of Prey",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "T15",
      "level": "T",
      "num": 15,
      "title": "The Black Stones",
      "type": "F",
      "theme": "社会与人文",
      "lang": "颜色句式"
    },
    {
      "id": "T16",
      "level": "T",
      "num": 16,
      "title": "Blackbeard the Pirate",
      "type": "F",
      "theme": "生命世界",
      "lang": "颜色句式"
    },
    {
      "id": "T17",
      "level": "T",
      "num": 17,
      "title": "Book 10: The Fizzy Wizard",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "T18",
      "level": "T",
      "num": 18,
      "title": "Book 7: The Return to the Hollow (Part I)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "T19",
      "level": "T",
      "num": 19,
      "title": "Book 8: The Return to the Hollow (Part II)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "T20",
      "level": "T",
      "num": 20,
      "title": "Book 8: Who Likes Hot Chocolate?",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "T21",
      "level": "T",
      "num": 21,
      "title": "Book 9: An Interest in Interest",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "T22",
      "level": "T",
      "num": 22,
      "title": "Book 9: The Return to the Hollow (Part III)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "T23",
      "level": "T",
      "num": 23,
      "title": "Breeds of Dogs",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "T24",
      "level": "T",
      "num": 24,
      "title": "C Is for Canada",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Can句式"
    },
    {
      "id": "T25",
      "level": "T",
      "num": 25,
      "title": "Cali and Wanda Lou",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "T26",
      "level": "T",
      "num": 26,
      "title": "Captain Morty Commands the Sky",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "介词反义"
    },
    {
      "id": "T27",
      "level": "T",
      "num": 27,
      "title": "China",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "T28",
      "level": "T",
      "num": 28,
      "title": "Code Talkers",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "T29",
      "level": "T",
      "num": 29,
      "title": "Deep in the Ocean",
      "type": "F",
      "theme": "生命世界",
      "lang": "天气水句式"
    },
    {
      "id": "T30",
      "level": "T",
      "num": 30,
      "title": "Discovering Dinosaurs",
      "type": "F",
      "theme": "生命世界",
      "lang": "Not反义句式"
    },
    {
      "id": "T31",
      "level": "T",
      "num": 31,
      "title": "Dr. Elizabeth Blackwell",
      "type": "F",
      "theme": "社会与人文",
      "lang": "颜色句式"
    },
    {
      "id": "T32",
      "level": "T",
      "num": 32,
      "title": "Edible Bugs",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "T33",
      "level": "T",
      "num": 33,
      "title": "Expedition Zero",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "T34",
      "level": "T",
      "num": 34,
      "title": "Exploring Tide Pools",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "T35",
      "level": "T",
      "num": 35,
      "title": "Famous First Ladies",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "T36",
      "level": "T",
      "num": 36,
      "title": "The Force of Water",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "T37",
      "level": "T",
      "num": 37,
      "title": "Giant Pandas",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "T38",
      "level": "T",
      "num": 38,
      "title": "The Grand Canyon",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Can句式"
    },
    {
      "id": "T39",
      "level": "T",
      "num": 39,
      "title": "Helen Keller",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "T40",
      "level": "T",
      "num": 40,
      "title": "The Hero Maui",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "T41",
      "level": "T",
      "num": 41,
      "title": "Hiking the Appalachian Trail",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "T42",
      "level": "T",
      "num": 42,
      "title": "Hillary Clinton",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "T43",
      "level": "T",
      "num": 43,
      "title": "The History of Halloween",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "T44",
      "level": "T",
      "num": 44,
      "title": "The History of House Cats",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "T45",
      "level": "T",
      "num": 45,
      "title": "History to Chew On",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "T46",
      "level": "T",
      "num": 46,
      "title": "I Collect That!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "I句式"
    },
    {
      "id": "T47",
      "level": "T",
      "num": 47,
      "title": "Incredible Places to Stay",
      "type": "F",
      "theme": "社会与人文",
      "lang": "颜色句式"
    },
    {
      "id": "T48",
      "level": "T",
      "num": 48,
      "title": "India",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "T49",
      "level": "T",
      "num": 49,
      "title": "Jack-o\\u0027-Lanterns",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "T50",
      "level": "T",
      "num": 50,
      "title": "Jane Goodall",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Go句式"
    },
    {
      "id": "T51",
      "level": "T",
      "num": 51,
      "title": "Jesse Owens",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "T52",
      "level": "T",
      "num": 52,
      "title": "Karate",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "T53",
      "level": "T",
      "num": 53,
      "title": "Kid Inventors",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "T54",
      "level": "T",
      "num": 54,
      "title": "Laura Ingalls Wilder",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "T55",
      "level": "T",
      "num": 55,
      "title": "The Legend of the Giant\\u0027s Causeway",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "T56",
      "level": "T",
      "num": 56,
      "title": "Let\\u0027s Make Snowflakes!",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "Not反义句式"
    },
    {
      "id": "T57",
      "level": "T",
      "num": 57,
      "title": "Like Night and Day",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "T58",
      "level": "T",
      "num": 58,
      "title": "Looking for Bigfoot",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "T59",
      "level": "T",
      "num": 59,
      "title": "Manatees",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "T60",
      "level": "T",
      "num": 60,
      "title": "Maria Tallchief: Prima Ballerina",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "T61",
      "level": "T",
      "num": 61,
      "title": "Morty Finds It No Laughing Matter",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Not反义句式"
    },
    {
      "id": "T62",
      "level": "T",
      "num": 62,
      "title": "Mount Rushmore",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "T63",
      "level": "T",
      "num": 63,
      "title": "Mud Runs",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "T64",
      "level": "T",
      "num": 64,
      "title": "Muhammad Ali",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "T65",
      "level": "T",
      "num": 65,
      "title": "Musical Instruments",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "T66",
      "level": "T",
      "num": 66,
      "title": "My Uncle Is a Firefighter",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "My句式"
    },
    {
      "id": "T67",
      "level": "T",
      "num": 67,
      "title": "Mythical Creatures of Ancient Greece",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "T68",
      "level": "T",
      "num": 68,
      "title": "Nature Stinks!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "T69",
      "level": "T",
      "num": 69,
      "title": "A New Skyline",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "T70",
      "level": "T",
      "num": 70,
      "title": "Ocean Animals",
      "type": "F",
      "theme": "生命世界",
      "lang": "天气水句式"
    },
    {
      "id": "T71",
      "level": "T",
      "num": 71,
      "title": "On the Lookout",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "T72",
      "level": "T",
      "num": 72,
      "title": "Owen and the Tortoise",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "T73",
      "level": "T",
      "num": 73,
      "title": "Pinocchio, Part 1",
      "type": "F",
      "theme": "思维与创意",
      "lang": "Not反义句式"
    },
    {
      "id": "T74",
      "level": "T",
      "num": 74,
      "title": "Pinocchio, Part 2",
      "type": "F",
      "theme": "思维与创意",
      "lang": "Not反义句式"
    },
    {
      "id": "T75",
      "level": "T",
      "num": 75,
      "title": "Pinocchio, Part 3",
      "type": "F",
      "theme": "思维与创意",
      "lang": "Not反义句式"
    },
    {
      "id": "T76",
      "level": "T",
      "num": 76,
      "title": "A Place for Wild Things",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "T77",
      "level": "T",
      "num": 77,
      "title": "Popcorn Through the Ages",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "T78",
      "level": "T",
      "num": 78,
      "title": "The Power of Wind",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "T79",
      "level": "T",
      "num": 79,
      "title": "Rainbows",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "T80",
      "level": "T",
      "num": 80,
      "title": "Ricardo\\u0027s Dilemma",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "T81",
      "level": "T",
      "num": 81,
      "title": "Rocky Mountain National Park",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "介词反义"
    },
    {
      "id": "T82",
      "level": "T",
      "num": 82,
      "title": "Route 66",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "T83",
      "level": "T",
      "num": 83,
      "title": "Running for Freedom",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "T84",
      "level": "T",
      "num": 84,
      "title": "Sadie\\u0027s Incredible Essay",
      "type": "F",
      "theme": "社会与人文",
      "lang": "颜色句式"
    },
    {
      "id": "T85",
      "level": "T",
      "num": 85,
      "title": "Sally\\u0027s Secret Ambition",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "T86",
      "level": "T",
      "num": 86,
      "title": "Sam\\u0027s Fourth of July",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "T87",
      "level": "T",
      "num": 87,
      "title": "Saving the Last Wild Tigers",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "T88",
      "level": "T",
      "num": 88,
      "title": "Severe Weather",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "T89",
      "level": "T",
      "num": 89,
      "title": "Sled Dogs to the Rescue",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "T90",
      "level": "T",
      "num": 90,
      "title": "The State Hermitage: Russia\\u0027s Amazing Museum",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "T91",
      "level": "T",
      "num": 91,
      "title": "The Story of the Mayflower",
      "type": "F",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "T92",
      "level": "T",
      "num": 92,
      "title": "Summer Olympics Legends",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "季节句式"
    },
    {
      "id": "T93",
      "level": "T",
      "num": 93,
      "title": "Thomas Jefferson",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "T94",
      "level": "T",
      "num": 94,
      "title": "Through a Microscope",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "T95",
      "level": "T",
      "num": 95,
      "title": "Titanic Treasure",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "T96",
      "level": "T",
      "num": 96,
      "title": "Tornadoes",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "T97",
      "level": "T",
      "num": 97,
      "title": "Totem Poles",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "T98",
      "level": "T",
      "num": 98,
      "title": "Two Make Twins",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "T99",
      "level": "T",
      "num": 99,
      "title": "Vincent\\u0027s Bedroom",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "T100",
      "level": "T",
      "num": 100,
      "title": "Weather Wizards: Floods",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "T101",
      "level": "T",
      "num": 101,
      "title": "Weird Bird Beaks",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "T102",
      "level": "T",
      "num": 102,
      "title": "What Happens When You Flush?",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "What句式"
    },
    {
      "id": "T103",
      "level": "T",
      "num": 103,
      "title": "What\\u0027s in Washington, D.C.?",
      "type": "F",
      "theme": "身体与健康",
      "lang": "What句式"
    },
    {
      "id": "T104",
      "level": "T",
      "num": 104,
      "title": "Where\\u0027s Your Hair?",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "T105",
      "level": "T",
      "num": 105,
      "title": "William Shakespeare",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "T106",
      "level": "T",
      "num": 106,
      "title": "Writing on the Wall",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "T107",
      "level": "T",
      "num": 107,
      "title": "Yo-Yo Ma",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "T108",
      "level": "T",
      "num": 108,
      "title": "You\\u0027re a Jellyfish!",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "U01",
      "level": "U",
      "num": 1,
      "title": "A Crafty Escape",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "U02",
      "level": "U",
      "num": 2,
      "title": "Adventure in London",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "U03",
      "level": "U",
      "num": 3,
      "title": "Alien Collective I: Resistance",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "U04",
      "level": "U",
      "num": 4,
      "title": "Alien Collective II: The Link",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "U05",
      "level": "U",
      "num": 5,
      "title": "Alien Collective III: Transition",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "U06",
      "level": "U",
      "num": 6,
      "title": "The Amazing Amazon",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "U07",
      "level": "U",
      "num": 7,
      "title": "April Fools\\u0027 Day",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "U08",
      "level": "U",
      "num": 8,
      "title": "The Blitz",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "U09",
      "level": "U",
      "num": 9,
      "title": "Book 10: The Thing in the Forest",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "U10",
      "level": "U",
      "num": 10,
      "title": "Book 11: The Village",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "U11",
      "level": "U",
      "num": 11,
      "title": "Dawn of the Doughnut",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "U12",
      "level": "U",
      "num": 12,
      "title": "D\\u00eda for Mar\\u00eda",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "U13",
      "level": "U",
      "num": 13,
      "title": "Don\\u0027t Wake the Mummy",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "U14",
      "level": "U",
      "num": 14,
      "title": "Dungeons and Downloads",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "U15",
      "level": "U",
      "num": 15,
      "title": "Egypt",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "U16",
      "level": "U",
      "num": 16,
      "title": "The Executive Branch",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "U17",
      "level": "U",
      "num": 17,
      "title": "Fabulous Faberg\\u00e9 Eggs",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "U18",
      "level": "U",
      "num": 18,
      "title": "Get Moving! All About Muscles",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "U19",
      "level": "U",
      "num": 19,
      "title": "Growing Up Green",
      "type": "F",
      "theme": "生命世界",
      "lang": "颜色句式"
    },
    {
      "id": "U20",
      "level": "U",
      "num": 20,
      "title": "Hansel and Gretel",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "U21",
      "level": "U",
      "num": 21,
      "title": "The Hard Stuff! All About Bones",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "U22",
      "level": "U",
      "num": 22,
      "title": "Hillary Clinton",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "U23",
      "level": "U",
      "num": 23,
      "title": "How Sound Works",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "U24",
      "level": "U",
      "num": 24,
      "title": "Hubble: An Out-of-This-World Telescope",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "U25",
      "level": "U",
      "num": 25,
      "title": "In Huck\\u0027s Shoes",
      "type": "F",
      "theme": "身体与健康",
      "lang": "介词反义"
    },
    {
      "id": "U26",
      "level": "U",
      "num": 26,
      "title": "The Inuit: Northern Living",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Not反义句式"
    },
    {
      "id": "U27",
      "level": "U",
      "num": 27,
      "title": "Jackie Robinson",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "U28",
      "level": "U",
      "num": 28,
      "title": "Japan",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "U29",
      "level": "U",
      "num": 29,
      "title": "Kenya",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "U30",
      "level": "U",
      "num": 30,
      "title": "Labor Day",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "U31",
      "level": "U",
      "num": 31,
      "title": "Life Cycles",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "U32",
      "level": "U",
      "num": 32,
      "title": "Meteors and Meteorites",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "U33",
      "level": "U",
      "num": 33,
      "title": "Microbes: Friend or Foe?",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "U34",
      "level": "U",
      "num": 34,
      "title": "The Mighty Saguaro Cactus",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "U35",
      "level": "U",
      "num": 35,
      "title": "Morty and the Suitcase Caper",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "U36",
      "level": "U",
      "num": 36,
      "title": "Mortyangelo and the Mystery Art",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "U37",
      "level": "U",
      "num": 37,
      "title": "Mystery in the Moonlight",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "介词反义"
    },
    {
      "id": "U38",
      "level": "U",
      "num": 38,
      "title": "Napoleon Bonaparte",
      "type": "F",
      "theme": "思维与创意",
      "lang": "介词反义"
    },
    {
      "id": "U39",
      "level": "U",
      "num": 39,
      "title": "No Escape?",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Not反义句式"
    },
    {
      "id": "U40",
      "level": "U",
      "num": 40,
      "title": "Noni and the Copper Captain",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Not反义句式"
    },
    {
      "id": "U41",
      "level": "U",
      "num": 41,
      "title": "Noni\\u0027s Newspaper",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Not反义句式"
    },
    {
      "id": "U42",
      "level": "U",
      "num": 42,
      "title": "The Outburst",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "U43",
      "level": "U",
      "num": 43,
      "title": "Page\\u0027s School Report",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "U44",
      "level": "U",
      "num": 44,
      "title": "Pirate Ships and Flags",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "U45",
      "level": "U",
      "num": 45,
      "title": "Polar Regions of the Earth",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "U46",
      "level": "U",
      "num": 46,
      "title": "Say It With Pictures",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "U47",
      "level": "U",
      "num": 47,
      "title": "The Secret Service",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "U48",
      "level": "U",
      "num": 48,
      "title": "Snow White and Rose Red",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "Not反义句式"
    },
    {
      "id": "U49",
      "level": "U",
      "num": 49,
      "title": "Strange Plants",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "U50",
      "level": "U",
      "num": 50,
      "title": "The Sun, Earth, and Moon",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "U51",
      "level": "U",
      "num": 51,
      "title": "Tanya Takes Out a Loan",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "U52",
      "level": "U",
      "num": 52,
      "title": "Teotihuacan",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Can句式"
    },
    {
      "id": "U53",
      "level": "U",
      "num": 53,
      "title": "Thomas Edison",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "U54",
      "level": "U",
      "num": 54,
      "title": "Thurgood Marshall",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Go句式"
    },
    {
      "id": "U55",
      "level": "U",
      "num": 55,
      "title": "The Treasure of El Dorado",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "U56",
      "level": "U",
      "num": 56,
      "title": "United Arab Emirates",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "U57",
      "level": "U",
      "num": 57,
      "title": "Veterans Day",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "U58",
      "level": "U",
      "num": 58,
      "title": "What Built This?",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "What句式"
    },
    {
      "id": "U59",
      "level": "U",
      "num": 59,
      "title": "Wimbledon",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "U60",
      "level": "U",
      "num": 60,
      "title": "Word Smith, Private I \\u0022Rhyme Crime\\u0022",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "V01",
      "level": "V",
      "num": 1,
      "title": "1849: The California Gold Rush",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Go句式"
    },
    {
      "id": "V02",
      "level": "V",
      "num": 2,
      "title": "Acadia National Park",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V03",
      "level": "V",
      "num": 3,
      "title": "Aesop\\u0027s Fables",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V04",
      "level": "V",
      "num": 4,
      "title": "Albert Einstein",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V05",
      "level": "V",
      "num": 5,
      "title": "Alexander the Great",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "V06",
      "level": "V",
      "num": 6,
      "title": "All About Chocolate",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "V07",
      "level": "V",
      "num": 7,
      "title": "Alternative Fuel Cars",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V08",
      "level": "V",
      "num": 8,
      "title": "Amelia Earhart: A Legend in Flight",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "介词反义"
    },
    {
      "id": "V09",
      "level": "V",
      "num": 9,
      "title": "Ancient Cliff Dwellers",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V10",
      "level": "V",
      "num": 10,
      "title": "Animal Communication",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "V11",
      "level": "V",
      "num": 11,
      "title": "Animal Discoveries",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "V12",
      "level": "V",
      "num": 12,
      "title": "Arrows",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V13",
      "level": "V",
      "num": 13,
      "title": "Art Around Us",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "V14",
      "level": "V",
      "num": 14,
      "title": "Australia",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V15",
      "level": "V",
      "num": 15,
      "title": "Barack Obama",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V16",
      "level": "V",
      "num": 16,
      "title": "Before the Internet",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V17",
      "level": "V",
      "num": 17,
      "title": "Beowulf",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V18",
      "level": "V",
      "num": 18,
      "title": "The Bird\\u0027s Nest",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "V19",
      "level": "V",
      "num": 19,
      "title": "Book 12: The House in the Desert",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "V20",
      "level": "V",
      "num": 20,
      "title": "Book 13: The Cat and the Tunnel",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "V21",
      "level": "V",
      "num": 21,
      "title": "Book of Blood",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V22",
      "level": "V",
      "num": 22,
      "title": "Brazil",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V23",
      "level": "V",
      "num": 23,
      "title": "Bullying Hurts Everyone",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V24",
      "level": "V",
      "num": 24,
      "title": "Carlos\\u0027s Puzzle",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V25",
      "level": "V",
      "num": 25,
      "title": "Chick-a-Dude",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V26",
      "level": "V",
      "num": 26,
      "title": "Clara Barton: The Angel of the Battlefield",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "V27",
      "level": "V",
      "num": 27,
      "title": "Color Blindness",
      "type": "F",
      "theme": "思维与创意",
      "lang": "颜色句式"
    },
    {
      "id": "V28",
      "level": "V",
      "num": 28,
      "title": "The Cyberbully",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V29",
      "level": "V",
      "num": 29,
      "title": "Daniel Inouye",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Not反义句式"
    },
    {
      "id": "V30",
      "level": "V",
      "num": 30,
      "title": "Deep in the Ocean",
      "type": "F",
      "theme": "生命世界",
      "lang": "天气水句式"
    },
    {
      "id": "V31",
      "level": "V",
      "num": 31,
      "title": "Dr. King\\u0027s Memorial",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V32",
      "level": "V",
      "num": 32,
      "title": "Earth\\u0027s Water",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "V33",
      "level": "V",
      "num": 33,
      "title": "Earthquakes, Volcanoes, and Tsunamis",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "Can句式"
    },
    {
      "id": "V34",
      "level": "V",
      "num": 34,
      "title": "Electric Eels!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V35",
      "level": "V",
      "num": 35,
      "title": "The Eurovision Song Contest!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "V36",
      "level": "V",
      "num": 36,
      "title": "Forests on Fire",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "V37",
      "level": "V",
      "num": 37,
      "title": "France",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V38",
      "level": "V",
      "num": 38,
      "title": "Galileo",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V39",
      "level": "V",
      "num": 39,
      "title": "Gandhi",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V40",
      "level": "V",
      "num": 40,
      "title": "Gems: Treasures from the Earth",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "V41",
      "level": "V",
      "num": 41,
      "title": "George Washington",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "V42",
      "level": "V",
      "num": 42,
      "title": "George Washington Carver",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "V43",
      "level": "V",
      "num": 43,
      "title": "Ghost Towns",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V44",
      "level": "V",
      "num": 44,
      "title": "Giant Insects",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "V45",
      "level": "V",
      "num": 45,
      "title": "Golf",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Go句式"
    },
    {
      "id": "V46",
      "level": "V",
      "num": 46,
      "title": "The Gossip Monster",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Go句式"
    },
    {
      "id": "V47",
      "level": "V",
      "num": 47,
      "title": "Grasslands",
      "type": "F",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "V48",
      "level": "V",
      "num": 48,
      "title": "Groundwater",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "V49",
      "level": "V",
      "num": 49,
      "title": "The Guest Ranch",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V50",
      "level": "V",
      "num": 50,
      "title": "How Advertising Works",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V51",
      "level": "V",
      "num": 51,
      "title": "In the Name of Discovery",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "V52",
      "level": "V",
      "num": 52,
      "title": "Jazz Greats",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "V53",
      "level": "V",
      "num": 53,
      "title": "John Muir",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V54",
      "level": "V",
      "num": 54,
      "title": "The Judicial Branch",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V55",
      "level": "V",
      "num": 55,
      "title": "Julius Caesar",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V56",
      "level": "V",
      "num": 56,
      "title": "Katherine Johnson",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V57",
      "level": "V",
      "num": 57,
      "title": "The Kingdom of Happiness",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V58",
      "level": "V",
      "num": 58,
      "title": "A Landforms Adventure",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V59",
      "level": "V",
      "num": 59,
      "title": "Laura Ingalls Wilder",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V60",
      "level": "V",
      "num": 60,
      "title": "Life in Space",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "介词反义"
    },
    {
      "id": "V61",
      "level": "V",
      "num": 61,
      "title": "Living in Deserts",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "V62",
      "level": "V",
      "num": 62,
      "title": "Machu Picchu",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V63",
      "level": "V",
      "num": 63,
      "title": "The Magic of Migration",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "V64",
      "level": "V",
      "num": 64,
      "title": "March Madness",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V65",
      "level": "V",
      "num": 65,
      "title": "Margaret\\u0027s Secret Message",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V66",
      "level": "V",
      "num": 66,
      "title": "Maria Tallchief: Prima Ballerina",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V67",
      "level": "V",
      "num": 67,
      "title": "Mexico",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V68",
      "level": "V",
      "num": 68,
      "title": "Mexico\\u0027s Fight for Independence",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V69",
      "level": "V",
      "num": 69,
      "title": "Mirroring Miranda",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V70",
      "level": "V",
      "num": 70,
      "title": "Morty and the Mousetown Gazette",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "V71",
      "level": "V",
      "num": 71,
      "title": "Morty and the Mousetown Talent Show",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "V72",
      "level": "V",
      "num": 72,
      "title": "Morty\\u0027s Roadside Refreshments",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V73",
      "level": "V",
      "num": 73,
      "title": "Mysterious Caves",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V74",
      "level": "V",
      "num": 74,
      "title": "The Mysterious Object",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V75",
      "level": "V",
      "num": 75,
      "title": "Mythical Creatures of Ancient Greece",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "V76",
      "level": "V",
      "num": 76,
      "title": "Natural Wonders of the World",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V77",
      "level": "V",
      "num": 77,
      "title": "Noni and the Book Ban",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Not反义句式"
    },
    {
      "id": "V78",
      "level": "V",
      "num": 78,
      "title": "The Nor\\u0027easter",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Not反义句式"
    },
    {
      "id": "V79",
      "level": "V",
      "num": 79,
      "title": "The Olympics: Past and Present",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V80",
      "level": "V",
      "num": 80,
      "title": "Owls Overhead",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "V81",
      "level": "V",
      "num": 81,
      "title": "A Place for Wild Things",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V82",
      "level": "V",
      "num": 82,
      "title": "The Plague!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V83",
      "level": "V",
      "num": 83,
      "title": "Polynesia",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V84",
      "level": "V",
      "num": 84,
      "title": "Puffins",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V85",
      "level": "V",
      "num": 85,
      "title": "Ramses II",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V86",
      "level": "V",
      "num": 86,
      "title": "Razor and the Wolves",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V87",
      "level": "V",
      "num": 87,
      "title": "Route 66",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "V88",
      "level": "V",
      "num": 88,
      "title": "The Science of Cooking",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V89",
      "level": "V",
      "num": 89,
      "title": "A Selection From Robinson Crusoe",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "V90",
      "level": "V",
      "num": 90,
      "title": "Ships of Discovery",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "V91",
      "level": "V",
      "num": 91,
      "title": "Slithery Snakes",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "V92",
      "level": "V",
      "num": 92,
      "title": "Snakebite!",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "V93",
      "level": "V",
      "num": 93,
      "title": "Soccer",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V94",
      "level": "V",
      "num": 94,
      "title": "South Korea",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "V95",
      "level": "V",
      "num": 95,
      "title": "The Stanley Cup: Hockey\\u0027s Greatest Prize",
      "type": "F",
      "theme": "身体与健康",
      "lang": "介词反义"
    },
    {
      "id": "V96",
      "level": "V",
      "num": 96,
      "title": "Stories from Asgard: Norse Myths",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Not反义句式"
    },
    {
      "id": "V97",
      "level": "V",
      "num": 97,
      "title": "Sugar, Sugar, Everywhere",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V98",
      "level": "V",
      "num": 98,
      "title": "The Terry Fox Story",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "V99",
      "level": "V",
      "num": 99,
      "title": "Test Anxiety",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V100",
      "level": "V",
      "num": 100,
      "title": "Tokyo Imperial Palace",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V101",
      "level": "V",
      "num": 101,
      "title": "Treasure in Puget Sound",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "V102",
      "level": "V",
      "num": 102,
      "title": "A Trip to a Prehistoric Cave",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V103",
      "level": "V",
      "num": 103,
      "title": "The U.S. Government At Work",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Go句式"
    },
    {
      "id": "V104",
      "level": "V",
      "num": 104,
      "title": "Underground Cities",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "V105",
      "level": "V",
      "num": 105,
      "title": "Voyagers in Space",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "介词反义"
    },
    {
      "id": "V106",
      "level": "V",
      "num": 106,
      "title": "The Wall",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V107",
      "level": "V",
      "num": 107,
      "title": "Water Cities",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "V108",
      "level": "V",
      "num": 108,
      "title": "What Is Water Worth?",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "What句式"
    },
    {
      "id": "V109",
      "level": "V",
      "num": 109,
      "title": "Why We Sleep",
      "type": "NF",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "V110",
      "level": "V",
      "num": 110,
      "title": "Wild and Wacky World of Wigs",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V111",
      "level": "V",
      "num": 111,
      "title": "Women of the Supreme Court",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "V112",
      "level": "V",
      "num": 112,
      "title": "Woods of Wonder",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V113",
      "level": "V",
      "num": 113,
      "title": "Word Smith, Private I",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "V114",
      "level": "V",
      "num": 114,
      "title": "World Traveler Ibn Battuta",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "V115",
      "level": "V",
      "num": 115,
      "title": "Yo-Yo Ma",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "V116",
      "level": "V",
      "num": 116,
      "title": "The Zoo of Extinct Animals",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "W01",
      "level": "W",
      "num": 1,
      "title": "Acropolis Adventure",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W02",
      "level": "W",
      "num": 2,
      "title": "Adventure in Bear Valley",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "W03",
      "level": "W",
      "num": 3,
      "title": "Alaska",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W04",
      "level": "W",
      "num": 4,
      "title": "American Football",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Can句式"
    },
    {
      "id": "W05",
      "level": "W",
      "num": 5,
      "title": "Amina and the Great Green Wall",
      "type": "F",
      "theme": "身体与健康",
      "lang": "颜色句式"
    },
    {
      "id": "W06",
      "level": "W",
      "num": 6,
      "title": "Ancient Greek and Roman Gods and Goddesses",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Go句式"
    },
    {
      "id": "W07",
      "level": "W",
      "num": 7,
      "title": "Ancient Mesopotamia",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W08",
      "level": "W",
      "num": 8,
      "title": "Animals Feel Emotions",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "W09",
      "level": "W",
      "num": 9,
      "title": "April Fools\\u0027 Day",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W10",
      "level": "W",
      "num": 10,
      "title": "The Arctic Seed Vault",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "W11",
      "level": "W",
      "num": 11,
      "title": "Atlantic Crossing",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "W12",
      "level": "W",
      "num": 12,
      "title": "Awesome Ants",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "W13",
      "level": "W",
      "num": 13,
      "title": "Baseball",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W14",
      "level": "W",
      "num": 14,
      "title": "Basketball",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W15",
      "level": "W",
      "num": 15,
      "title": "Bears",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "W16",
      "level": "W",
      "num": 16,
      "title": "Ben Franklin",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W17",
      "level": "W",
      "num": 17,
      "title": "Big Ben and Westminster Palace",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "W18",
      "level": "W",
      "num": 18,
      "title": "The Bill of Rights",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W19",
      "level": "W",
      "num": 19,
      "title": "The Black Stones",
      "type": "F",
      "theme": "社会与人文",
      "lang": "颜色句式"
    },
    {
      "id": "W20",
      "level": "W",
      "num": 20,
      "title": "Blue Whales: Giant Mammals",
      "type": "F",
      "theme": "生命世界",
      "lang": "颜色句式"
    },
    {
      "id": "W21",
      "level": "W",
      "num": 21,
      "title": "Book 14: The Creature and the Queen",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "W22",
      "level": "W",
      "num": 22,
      "title": "Book 15: The Other Side of the Glass",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W23",
      "level": "W",
      "num": 23,
      "title": "The Buffalo Soldiers",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W24",
      "level": "W",
      "num": 24,
      "title": "Building Big Dreams",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "W25",
      "level": "W",
      "num": 25,
      "title": "Building Tunnels",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W26",
      "level": "W",
      "num": 26,
      "title": "Camouflage",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W27",
      "level": "W",
      "num": 27,
      "title": "Canada",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Can句式"
    },
    {
      "id": "W28",
      "level": "W",
      "num": 28,
      "title": "Cheerleading",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W29",
      "level": "W",
      "num": 29,
      "title": "Chich\\u00e9n Itz\\u00e1",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W30",
      "level": "W",
      "num": 30,
      "title": "China: Past, Present, and Future",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W31",
      "level": "W",
      "num": 31,
      "title": "Climbing Mountains: An Interview with Erik Weihenmayer",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "W32",
      "level": "W",
      "num": 32,
      "title": "Code Talkers",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W33",
      "level": "W",
      "num": 33,
      "title": "Colosseum",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W34",
      "level": "W",
      "num": 34,
      "title": "Coral Reefs",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "W35",
      "level": "W",
      "num": 35,
      "title": "Cricket",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W36",
      "level": "W",
      "num": 36,
      "title": "Curiosity on Mars",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "W37",
      "level": "W",
      "num": 37,
      "title": "Deserts Dry",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "W38",
      "level": "W",
      "num": 38,
      "title": "D\\u00eda de los Muertos",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W39",
      "level": "W",
      "num": 39,
      "title": "Digestion",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W40",
      "level": "W",
      "num": 40,
      "title": "Drums and Drumming",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W41",
      "level": "W",
      "num": 41,
      "title": "Ellis Island",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W42",
      "level": "W",
      "num": 42,
      "title": "Emily",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W43",
      "level": "W",
      "num": 43,
      "title": "Expedition 25: The Subtropics",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "W44",
      "level": "W",
      "num": 44,
      "title": "Expedition 40: The Secret of the Seasons",
      "type": "F",
      "theme": "生命世界",
      "lang": "季节句式"
    },
    {
      "id": "W45",
      "level": "W",
      "num": 45,
      "title": "First Day of School",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W46",
      "level": "W",
      "num": 46,
      "title": "Floods",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W47",
      "level": "W",
      "num": 47,
      "title": "Frederick Douglass: Forever Free",
      "type": "F",
      "theme": "社会与人文",
      "lang": "颜色句式"
    },
    {
      "id": "W48",
      "level": "W",
      "num": 48,
      "title": "Galapagos Wonder",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Go句式"
    },
    {
      "id": "W49",
      "level": "W",
      "num": 49,
      "title": "The Genius of Tesla",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W50",
      "level": "W",
      "num": 50,
      "title": "Goliath Bird-Eating Spiders: Giant Arachnids",
      "type": "F",
      "theme": "生命世界",
      "lang": "Go句式"
    },
    {
      "id": "W51",
      "level": "W",
      "num": 51,
      "title": "Guy Fawkes Day",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W52",
      "level": "W",
      "num": 52,
      "title": "Hawaii Volcanoes National Park",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "Can句式"
    },
    {
      "id": "W53",
      "level": "W",
      "num": 53,
      "title": "The Hero Maui",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W54",
      "level": "W",
      "num": 54,
      "title": "High-Tech Treasure Hunt",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W55",
      "level": "W",
      "num": 55,
      "title": "Hiking the Appalachian Trail",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W56",
      "level": "W",
      "num": 56,
      "title": "The History of Anime",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "W57",
      "level": "W",
      "num": 57,
      "title": "The History of Halloween",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "W58",
      "level": "W",
      "num": 58,
      "title": "Hockey",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W59",
      "level": "W",
      "num": 59,
      "title": "Holidays Around the World",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W60",
      "level": "W",
      "num": 60,
      "title": "Hoofed Animals",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "W61",
      "level": "W",
      "num": 61,
      "title": "Horseshoes Aren\\u0027t Just for Good Luck",
      "type": "F",
      "theme": "生命世界",
      "lang": "Go句式"
    },
    {
      "id": "W62",
      "level": "W",
      "num": 62,
      "title": "How Bees Make Honey",
      "type": "NF",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "W63",
      "level": "W",
      "num": 63,
      "title": "Hurricanes",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Can句式"
    },
    {
      "id": "W64",
      "level": "W",
      "num": 64,
      "title": "Incredible Icebergs",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "颜色句式"
    },
    {
      "id": "W65",
      "level": "W",
      "num": 65,
      "title": "InFLUenza",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W66",
      "level": "W",
      "num": 66,
      "title": "Komodo Dragons: Giant Reptiles",
      "type": "F",
      "theme": "生命世界",
      "lang": "Go句式"
    },
    {
      "id": "W67",
      "level": "W",
      "num": 67,
      "title": "Lacrosse",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W68",
      "level": "W",
      "num": 68,
      "title": "Landfills: What a Load of Garbage!",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "What句式"
    },
    {
      "id": "W69",
      "level": "W",
      "num": 69,
      "title": "The Legend of Nessie",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W70",
      "level": "W",
      "num": 70,
      "title": "The Legislative Branch",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W71",
      "level": "W",
      "num": 71,
      "title": "Let\\u0027s Make Vegetable Soup",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "W72",
      "level": "W",
      "num": 72,
      "title": "Life Spans",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W73",
      "level": "W",
      "num": 73,
      "title": "Lost Cities",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W74",
      "level": "W",
      "num": 74,
      "title": "Magnificent Meatball Maker",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "W75",
      "level": "W",
      "num": 75,
      "title": "Making Mosaics",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W76",
      "level": "W",
      "num": 76,
      "title": "Mapping the Woods: Maps and Cartography",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W77",
      "level": "W",
      "num": 77,
      "title": "Marie Curie",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W78",
      "level": "W",
      "num": 78,
      "title": "Martin Luther King, Jr.",
      "type": "F",
      "theme": "思维与创意",
      "lang": "介词反义"
    },
    {
      "id": "W79",
      "level": "W",
      "num": 79,
      "title": "Microbes: Friend or Foe?",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W80",
      "level": "W",
      "num": 80,
      "title": "Mike Van Zee, Special Olympian",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W81",
      "level": "W",
      "num": 81,
      "title": "Miltie Math-head: Football Hero?",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "W82",
      "level": "W",
      "num": 82,
      "title": "Monkey Business",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "W83",
      "level": "W",
      "num": 83,
      "title": "Morocco",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W84",
      "level": "W",
      "num": 84,
      "title": "Morty and the Fancy-Pants Wedding",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "W85",
      "level": "W",
      "num": 85,
      "title": "Morty and the Floating Rubbish",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W86",
      "level": "W",
      "num": 86,
      "title": "Mudslides",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W87",
      "level": "W",
      "num": 87,
      "title": "Mummies",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W88",
      "level": "W",
      "num": 88,
      "title": "Mysteries of Flight",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "W89",
      "level": "W",
      "num": 89,
      "title": "The Mystery of Granville Library",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W90",
      "level": "W",
      "num": 90,
      "title": "Mythical Creatures of Ancient Greece",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "W91",
      "level": "W",
      "num": 91,
      "title": "Nelson Mandela",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "W92",
      "level": "W",
      "num": 92,
      "title": "A New Skyline",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "W93",
      "level": "W",
      "num": 93,
      "title": "New Year Celebrations",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "W94",
      "level": "W",
      "num": 94,
      "title": "The Nobel Prize",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Not反义句式"
    },
    {
      "id": "W95",
      "level": "W",
      "num": 95,
      "title": "Paving the Way: American Sports Legends",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Can句式"
    },
    {
      "id": "W96",
      "level": "W",
      "num": 96,
      "title": "Penguins",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "W97",
      "level": "W",
      "num": 97,
      "title": "Pirates and Privateers",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "W98",
      "level": "W",
      "num": 98,
      "title": "Plight of the Polar Bear",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "W99",
      "level": "W",
      "num": 99,
      "title": "Puerto Rico",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W100",
      "level": "W",
      "num": 100,
      "title": "Rattlers",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "W101",
      "level": "W",
      "num": 101,
      "title": "Return of the Jaguar",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W102",
      "level": "W",
      "num": 102,
      "title": "Roadside Oddities",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W103",
      "level": "W",
      "num": 103,
      "title": "Robots",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W104",
      "level": "W",
      "num": 104,
      "title": "Rumpelstiltskin",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W105",
      "level": "W",
      "num": 105,
      "title": "Russia",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W106",
      "level": "W",
      "num": 106,
      "title": "Salah al-Din",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W107",
      "level": "W",
      "num": 107,
      "title": "Scratching a Good Story",
      "type": "F",
      "theme": "生命世界",
      "lang": "Go句式"
    },
    {
      "id": "W108",
      "level": "W",
      "num": 108,
      "title": "Sea Turtles",
      "type": "F",
      "theme": "生命世界",
      "lang": "天气水句式"
    },
    {
      "id": "W109",
      "level": "W",
      "num": 109,
      "title": "Seahorses",
      "type": "F",
      "theme": "生命世界",
      "lang": "天气水句式"
    },
    {
      "id": "W110",
      "level": "W",
      "num": 110,
      "title": "Searching for the Loch Ness Monster",
      "type": "F",
      "theme": "生命世界",
      "lang": "天气水句式"
    },
    {
      "id": "W111",
      "level": "W",
      "num": 111,
      "title": "The Secrets of Skara Brae",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W112",
      "level": "W",
      "num": 112,
      "title": "Snow White and the Queen",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "Not反义句式"
    },
    {
      "id": "W113",
      "level": "W",
      "num": 113,
      "title": "Space Camp",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "W114",
      "level": "W",
      "num": 114,
      "title": "Spain",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W115",
      "level": "W",
      "num": 115,
      "title": "Speed",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W116",
      "level": "W",
      "num": 116,
      "title": "St. Augustine",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W117",
      "level": "W",
      "num": 117,
      "title": "The Super School Bus System",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "W118",
      "level": "W",
      "num": 118,
      "title": "Supply and Demand",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "W119",
      "level": "W",
      "num": 119,
      "title": "Surfing",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W120",
      "level": "W",
      "num": 120,
      "title": "Temperate Deciduous Forests",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "W121",
      "level": "W",
      "num": 121,
      "title": "The Trouble with Exotic Pets",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "W122",
      "level": "W",
      "num": 122,
      "title": "Through a Microscope",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W123",
      "level": "W",
      "num": 123,
      "title": "The Titanic: Lost and Found",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W124",
      "level": "W",
      "num": 124,
      "title": "Too Much Screen Time?",
      "type": "F",
      "theme": "社会与人文",
      "lang": "数字句式"
    },
    {
      "id": "W125",
      "level": "W",
      "num": 125,
      "title": "Tornadoes",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W126",
      "level": "W",
      "num": 126,
      "title": "Tundra",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W127",
      "level": "W",
      "num": 127,
      "title": "The U.S. Constitution",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W128",
      "level": "W",
      "num": 128,
      "title": "The University of Arizona College of Science Biosphere 2",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W129",
      "level": "W",
      "num": 129,
      "title": "A Visit to Kitt Peak",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W130",
      "level": "W",
      "num": 130,
      "title": "Volcanoes",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "Can句式"
    },
    {
      "id": "W131",
      "level": "W",
      "num": 131,
      "title": "Walking in Roman Footsteps",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "W132",
      "level": "W",
      "num": 132,
      "title": "Weather Wizards: High Winds",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "W133",
      "level": "W",
      "num": 133,
      "title": "Whale Sharks: Giant Fish",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "W134",
      "level": "W",
      "num": 134,
      "title": "What the Boys Found",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "What句式"
    },
    {
      "id": "W135",
      "level": "W",
      "num": 135,
      "title": "Wild Horses",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "W136",
      "level": "W",
      "num": 136,
      "title": "Wildlife Rescue",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W137",
      "level": "W",
      "num": 137,
      "title": "Woolly and Fang",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W138",
      "level": "W",
      "num": 138,
      "title": "World Cup Soccer",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "W139",
      "level": "W",
      "num": 139,
      "title": "The World\\u0027s Biggest Library",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "W140",
      "level": "W",
      "num": 140,
      "title": "Yee Haw! The Real Lives of the Cowboys",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "X01",
      "level": "X",
      "num": 1,
      "title": "Alice\\u0027s Adventures in Wonderland (Part 1)",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "X02",
      "level": "X",
      "num": 2,
      "title": "Alice\\u0027s Adventures in Wonderland (Part 10)",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "X03",
      "level": "X",
      "num": 3,
      "title": "Alice\\u0027s Adventures in Wonderland (Part 2)",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "X04",
      "level": "X",
      "num": 4,
      "title": "Alice\\u0027s Adventures in Wonderland (Part 3)",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "X05",
      "level": "X",
      "num": 5,
      "title": "Alice\\u0027s Adventures in Wonderland (Part 4)",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "X06",
      "level": "X",
      "num": 6,
      "title": "Alice\\u0027s Adventures in Wonderland (Part 5)",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "X07",
      "level": "X",
      "num": 7,
      "title": "Alice\\u0027s Adventures in Wonderland (Part 6)",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "X08",
      "level": "X",
      "num": 8,
      "title": "Alice\\u0027s Adventures in Wonderland (Part 7)",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "X09",
      "level": "X",
      "num": 9,
      "title": "Alice\\u0027s Adventures in Wonderland (Part 8)",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "X10",
      "level": "X",
      "num": 10,
      "title": "Alice\\u0027s Adventures in Wonderland (Part 9)",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "X11",
      "level": "X",
      "num": 11,
      "title": "Alien Collective I: Resistance",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "X12",
      "level": "X",
      "num": 12,
      "title": "Alien Collective II: The Link",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "X13",
      "level": "X",
      "num": 13,
      "title": "Alien Collective III: Transition",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "X14",
      "level": "X",
      "num": 14,
      "title": "The Amazing Amazon",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "X15",
      "level": "X",
      "num": 15,
      "title": "Amazing Animal Adaptations",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "X16",
      "level": "X",
      "num": 16,
      "title": "The Balloon Brothers",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "X17",
      "level": "X",
      "num": 17,
      "title": "Book 16: The Queen\\u0027s Proposal",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "X18",
      "level": "X",
      "num": 18,
      "title": "Canada",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Can句式"
    },
    {
      "id": "X19",
      "level": "X",
      "num": 19,
      "title": "Catching Air",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "X20",
      "level": "X",
      "num": 20,
      "title": "Comic Cons",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "X21",
      "level": "X",
      "num": 21,
      "title": "Deep Trouble: The Gulf Coast Oil Spill",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "X22",
      "level": "X",
      "num": 22,
      "title": "Deserts",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "X23",
      "level": "X",
      "num": 23,
      "title": "Dust Bowl Disaster",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "X24",
      "level": "X",
      "num": 24,
      "title": "Egypt",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "X25",
      "level": "X",
      "num": 25,
      "title": "Grandpa Smoke Jumper",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "X26",
      "level": "X",
      "num": 26,
      "title": "Hungry Right Here?",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "X27",
      "level": "X",
      "num": 27,
      "title": "The Internet",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "X28",
      "level": "X",
      "num": 28,
      "title": "Invasion of the Pythons",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "X29",
      "level": "X",
      "num": 29,
      "title": "Jacey Nova: Starship Pilot",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "Not反义句式"
    },
    {
      "id": "X30",
      "level": "X",
      "num": 30,
      "title": "Jackie Robinson",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "X31",
      "level": "X",
      "num": 31,
      "title": "King George III",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "X32",
      "level": "X",
      "num": 32,
      "title": "The Labors of Hercules",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "X33",
      "level": "X",
      "num": 33,
      "title": "The Last Great Race",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "X34",
      "level": "X",
      "num": 34,
      "title": "Leo the Lion",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "X35",
      "level": "X",
      "num": 35,
      "title": "Making Big Bolstead Bucks",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "X36",
      "level": "X",
      "num": 36,
      "title": "Malala the Brave",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "X37",
      "level": "X",
      "num": 37,
      "title": "Many Faces of Autism",
      "type": "F",
      "theme": "社会与人文",
      "lang": "数字句式"
    },
    {
      "id": "X38",
      "level": "X",
      "num": 38,
      "title": "Many Happy Returns",
      "type": "F",
      "theme": "社会与人文",
      "lang": "数字句式"
    },
    {
      "id": "X39",
      "level": "X",
      "num": 39,
      "title": "Meeting Mrs. Pierce",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "X40",
      "level": "X",
      "num": 40,
      "title": "The Mongol Empire",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Go句式"
    },
    {
      "id": "X41",
      "level": "X",
      "num": 41,
      "title": "More Valuable Than Gold",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Go句式"
    },
    {
      "id": "X42",
      "level": "X",
      "num": 42,
      "title": "National Parks",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "X43",
      "level": "X",
      "num": 43,
      "title": "Oceans",
      "type": "F",
      "theme": "生命世界",
      "lang": "天气水句式"
    },
    {
      "id": "X44",
      "level": "X",
      "num": 44,
      "title": "The Panama Canal",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Can句式"
    },
    {
      "id": "X45",
      "level": "X",
      "num": 45,
      "title": "Pat Summitt: Coaching Legend",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "X46",
      "level": "X",
      "num": 46,
      "title": "Prehistoric Trade",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "X47",
      "level": "X",
      "num": 47,
      "title": "Rainforests",
      "type": "F",
      "theme": "生命世界",
      "lang": "天气水句式"
    },
    {
      "id": "X48",
      "level": "X",
      "num": 48,
      "title": "Rosalind Franklin\\u0027s Beautiful Twist",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "X49",
      "level": "X",
      "num": 49,
      "title": "Saving the Salmon",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "X50",
      "level": "X",
      "num": 50,
      "title": "The School Versus James Holt",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "X51",
      "level": "X",
      "num": 51,
      "title": "Takehito\\u0027s Tango",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Go句式"
    },
    {
      "id": "X52",
      "level": "X",
      "num": 52,
      "title": "Through the Looking Glass (Part 1)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "X53",
      "level": "X",
      "num": 53,
      "title": "Through the Looking Glass (Part 10)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "X54",
      "level": "X",
      "num": 54,
      "title": "Through the Looking Glass (Part 2)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "X55",
      "level": "X",
      "num": 55,
      "title": "Through the Looking Glass (Part 3)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "X56",
      "level": "X",
      "num": 56,
      "title": "Through the Looking Glass (Part 4)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "X57",
      "level": "X",
      "num": 57,
      "title": "Through the Looking Glass (Part 5)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "X58",
      "level": "X",
      "num": 58,
      "title": "Through the Looking Glass (Part 6)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "X59",
      "level": "X",
      "num": 59,
      "title": "Through the Looking Glass (Part 7)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "X60",
      "level": "X",
      "num": 60,
      "title": "Through the Looking Glass (Part 8)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "X61",
      "level": "X",
      "num": 61,
      "title": "Through the Looking Glass (Part 9)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "X62",
      "level": "X",
      "num": 62,
      "title": "To Drill or Not to Drill?",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Not反义句式"
    },
    {
      "id": "X63",
      "level": "X",
      "num": 63,
      "title": "The Transcontinental Railroad",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "X64",
      "level": "X",
      "num": 64,
      "title": "The Treasure of El Dorado",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "X65",
      "level": "X",
      "num": 65,
      "title": "What Makes You, You?",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "What句式"
    },
    {
      "id": "X66",
      "level": "X",
      "num": 66,
      "title": "The Wonderful World Series",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "X67",
      "level": "X",
      "num": 67,
      "title": "Yosemite and the Badge",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "X68",
      "level": "X",
      "num": 68,
      "title": "Your Road to the White House",
      "type": "F",
      "theme": "社会与人文",
      "lang": "颜色句式"
    },
    {
      "id": "Y01",
      "level": "Y",
      "num": 1,
      "title": "1849: The California Gold Rush",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Go句式"
    },
    {
      "id": "Y02",
      "level": "Y",
      "num": 2,
      "title": "9\\/11: A Dark Day",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y03",
      "level": "Y",
      "num": 3,
      "title": "A Crafty Escape",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y04",
      "level": "Y",
      "num": 4,
      "title": "Abraham Lincoln: From Log Cabin to the White House",
      "type": "F",
      "theme": "社会与人文",
      "lang": "颜色句式"
    },
    {
      "id": "Y05",
      "level": "Y",
      "num": 5,
      "title": "Ali Baba",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y06",
      "level": "Y",
      "num": 6,
      "title": "All About Chocolate",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "Y07",
      "level": "Y",
      "num": 7,
      "title": "The Amazing Brain",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "Y08",
      "level": "Y",
      "num": 8,
      "title": "The Amazing Undersea Food Web",
      "type": "F",
      "theme": "生命世界",
      "lang": "天气水句式"
    },
    {
      "id": "Y09",
      "level": "Y",
      "num": 9,
      "title": "Amelia Earhart: A Legend in Flight",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "介词反义"
    },
    {
      "id": "Y10",
      "level": "Y",
      "num": 10,
      "title": "American Women in Sports",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Can句式"
    },
    {
      "id": "Y11",
      "level": "Y",
      "num": 11,
      "title": "Andrew Carnegie",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y12",
      "level": "Y",
      "num": 12,
      "title": "Arrows",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y13",
      "level": "Y",
      "num": 13,
      "title": "The Art of Photography",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Y14",
      "level": "Y",
      "num": 14,
      "title": "Attila and the Fall of the Roman Empire",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "季节句式"
    },
    {
      "id": "Y15",
      "level": "Y",
      "num": 15,
      "title": "Battling for Independence",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "Y16",
      "level": "Y",
      "num": 16,
      "title": "Believe It or Not?",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Not反义句式"
    },
    {
      "id": "Y17",
      "level": "Y",
      "num": 17,
      "title": "Biomimicry",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y18",
      "level": "Y",
      "num": 18,
      "title": "Book 17: The Cat in the Palace",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "Y19",
      "level": "Y",
      "num": 19,
      "title": "Born on Sable Island",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "Y20",
      "level": "Y",
      "num": 20,
      "title": "The Calgary Stampede",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y21",
      "level": "Y",
      "num": 21,
      "title": "D-Day",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y22",
      "level": "Y",
      "num": 22,
      "title": "Early Immigration in the United States",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "Y23",
      "level": "Y",
      "num": 23,
      "title": "Earthquakes, Volcanoes, and Tsunamis",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "Can句式"
    },
    {
      "id": "Y24",
      "level": "Y",
      "num": 24,
      "title": "Eclipses",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y25",
      "level": "Y",
      "num": 25,
      "title": "Eight Billion and Counting",
      "type": "F",
      "theme": "生命世界",
      "lang": "数字句式"
    },
    {
      "id": "Y26",
      "level": "Y",
      "num": 26,
      "title": "Escape From the Holocaust",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y27",
      "level": "Y",
      "num": 27,
      "title": "Fearless Felix",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "Y28",
      "level": "Y",
      "num": 28,
      "title": "The Firefighter",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "Y29",
      "level": "Y",
      "num": 29,
      "title": "Gandhi",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y30",
      "level": "Y",
      "num": 30,
      "title": "Gems: Treasures from the Earth",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "Y31",
      "level": "Y",
      "num": 31,
      "title": "George Washington",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "Y32",
      "level": "Y",
      "num": 32,
      "title": "George Washington Carver",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "Y33",
      "level": "Y",
      "num": 33,
      "title": "Going to the Super Bowl",
      "type": "F",
      "theme": "生命世界",
      "lang": "Go句式"
    },
    {
      "id": "Y34",
      "level": "Y",
      "num": 34,
      "title": "The Great Charter",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "Y35",
      "level": "Y",
      "num": 35,
      "title": "The Great Hunger",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "Y36",
      "level": "Y",
      "num": 36,
      "title": "Groundwater",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "Y37",
      "level": "Y",
      "num": 37,
      "title": "The Guest Ranch",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y38",
      "level": "Y",
      "num": 38,
      "title": "The Hard Stuff! All About Bones",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "Y39",
      "level": "Y",
      "num": 39,
      "title": "The History of Anime",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Y40",
      "level": "Y",
      "num": 40,
      "title": "How to Build a Greenhouse",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "颜色句式"
    },
    {
      "id": "Y41",
      "level": "Y",
      "num": 41,
      "title": "Jamestown",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y42",
      "level": "Y",
      "num": 42,
      "title": "The Jr. Iditarod",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y43",
      "level": "Y",
      "num": 43,
      "title": "Julius Caesar",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y44",
      "level": "Y",
      "num": 44,
      "title": "The Kingdom of Happiness",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y45",
      "level": "Y",
      "num": 45,
      "title": "Labor Day",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y46",
      "level": "Y",
      "num": 46,
      "title": "Lakes",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y47",
      "level": "Y",
      "num": 47,
      "title": "A Landforms Adventure",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y48",
      "level": "Y",
      "num": 48,
      "title": "Leaving Home",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y49",
      "level": "Y",
      "num": 49,
      "title": "Lewis Howard Latimer",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y50",
      "level": "Y",
      "num": 50,
      "title": "Life in Space",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "介词反义"
    },
    {
      "id": "Y51",
      "level": "Y",
      "num": 51,
      "title": "A Little Princess (Part 1)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Y52",
      "level": "Y",
      "num": 52,
      "title": "A Little Princess (Part 10)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Y53",
      "level": "Y",
      "num": 53,
      "title": "A Little Princess (Part 11)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Y54",
      "level": "Y",
      "num": 54,
      "title": "A Little Princess (Part 12)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Y55",
      "level": "Y",
      "num": 55,
      "title": "A Little Princess (Part 13)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Y56",
      "level": "Y",
      "num": 56,
      "title": "A Little Princess (Part 14)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Y57",
      "level": "Y",
      "num": 57,
      "title": "A Little Princess (Part 15)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Y58",
      "level": "Y",
      "num": 58,
      "title": "A Little Princess (Part 16)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Y59",
      "level": "Y",
      "num": 59,
      "title": "A Little Princess (Part 17)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Y60",
      "level": "Y",
      "num": 60,
      "title": "A Little Princess (Part 18)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Y61",
      "level": "Y",
      "num": 61,
      "title": "A Little Princess (Part 19)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Y62",
      "level": "Y",
      "num": 62,
      "title": "A Little Princess (Part 2)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Y63",
      "level": "Y",
      "num": 63,
      "title": "A Little Princess (Part 20)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Y64",
      "level": "Y",
      "num": 64,
      "title": "A Little Princess (Part 21)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Y65",
      "level": "Y",
      "num": 65,
      "title": "A Little Princess (Part 22)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Y66",
      "level": "Y",
      "num": 66,
      "title": "A Little Princess (Part 3)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Y67",
      "level": "Y",
      "num": 67,
      "title": "A Little Princess (Part 4)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Y68",
      "level": "Y",
      "num": 68,
      "title": "A Little Princess (Part 5)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Y69",
      "level": "Y",
      "num": 69,
      "title": "A Little Princess (Part 6)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Y70",
      "level": "Y",
      "num": 70,
      "title": "A Little Princess (Part 7)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Y71",
      "level": "Y",
      "num": 71,
      "title": "A Little Princess (Part 8)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Y72",
      "level": "Y",
      "num": 72,
      "title": "A Little Princess (Part 9)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Y73",
      "level": "Y",
      "num": 73,
      "title": "Living in Deserts",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "Y74",
      "level": "Y",
      "num": 74,
      "title": "The Magellan Expedition",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y75",
      "level": "Y",
      "num": 75,
      "title": "March Madness",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y76",
      "level": "Y",
      "num": 76,
      "title": "Marco Polo and the Silk Road",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y77",
      "level": "Y",
      "num": 77,
      "title": "Meegor and the Master",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Go句式"
    },
    {
      "id": "Y78",
      "level": "Y",
      "num": 78,
      "title": "Miltie Math-head Takes the Mound",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Y79",
      "level": "Y",
      "num": 79,
      "title": "Muhammad Ali",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y80",
      "level": "Y",
      "num": 80,
      "title": "Mysteries of the Lost Civilization",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y81",
      "level": "Y",
      "num": 81,
      "title": "The Mysterious Object",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y82",
      "level": "Y",
      "num": 82,
      "title": "Mysterious Shipwrecks",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y83",
      "level": "Y",
      "num": 83,
      "title": "The Mystery Twin",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y84",
      "level": "Y",
      "num": 84,
      "title": "Neil deGrasse Tyson: Star Man",
      "type": "F",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "Y85",
      "level": "Y",
      "num": 85,
      "title": "Noni and the Book Ban",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Not反义句式"
    },
    {
      "id": "Y86",
      "level": "Y",
      "num": 86,
      "title": "The Olympics: Past and Present",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y87",
      "level": "Y",
      "num": 87,
      "title": "Ostriches: Giant Birds",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "Y88",
      "level": "Y",
      "num": 88,
      "title": "Our Solar System",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "Y89",
      "level": "Y",
      "num": 89,
      "title": "Pi Day",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y90",
      "level": "Y",
      "num": 90,
      "title": "The Plague!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y91",
      "level": "Y",
      "num": 91,
      "title": "Plate Tectonics",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y92",
      "level": "Y",
      "num": 92,
      "title": "Prehistoric Giants (Other Than Dinosaurs)",
      "type": "F",
      "theme": "生命世界",
      "lang": "Not反义句式"
    },
    {
      "id": "Y93",
      "level": "Y",
      "num": 93,
      "title": "Puffins",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y94",
      "level": "Y",
      "num": 94,
      "title": "Refugees",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y95",
      "level": "Y",
      "num": 95,
      "title": "Sacagawea and the Corps of Discovery",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "Y96",
      "level": "Y",
      "num": 96,
      "title": "Say It With Pictures",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y97",
      "level": "Y",
      "num": 97,
      "title": "Seeds of Revolution",
      "type": "F",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "Y98",
      "level": "Y",
      "num": 98,
      "title": "Seeing the Evidence: Forensic Scientists at Work",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y99",
      "level": "Y",
      "num": 99,
      "title": "Seven Wonders of the Modern World",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y100",
      "level": "Y",
      "num": 100,
      "title": "Ships of Discovery",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "Y101",
      "level": "Y",
      "num": 101,
      "title": "The Smithsonian Institution",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y102",
      "level": "Y",
      "num": 102,
      "title": "South Korea",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "Y103",
      "level": "Y",
      "num": 103,
      "title": "Spain",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y104",
      "level": "Y",
      "num": 104,
      "title": "The Story of Plastic",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Y105",
      "level": "Y",
      "num": 105,
      "title": "The Sun",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "Y106",
      "level": "Y",
      "num": 106,
      "title": "Taiga",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y107",
      "level": "Y",
      "num": 107,
      "title": "Two Artists: Vermeer\\u0027s Forger",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Y108",
      "level": "Y",
      "num": 108,
      "title": "Ukraine",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "Y109",
      "level": "Y",
      "num": 109,
      "title": "The United Nations",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y110",
      "level": "Y",
      "num": 110,
      "title": "Voyagers in Space",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "介词反义"
    },
    {
      "id": "Y111",
      "level": "Y",
      "num": 111,
      "title": "The War for North America",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Not反义句式"
    },
    {
      "id": "Y112",
      "level": "Y",
      "num": 112,
      "title": "Water Cities",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "Y113",
      "level": "Y",
      "num": 113,
      "title": "Westward Journey",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y114",
      "level": "Y",
      "num": 114,
      "title": "What Do You Think About Climate Change?",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "What句式"
    },
    {
      "id": "Y115",
      "level": "Y",
      "num": 115,
      "title": "What Happens When You Flush?",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "What句式"
    },
    {
      "id": "Y116",
      "level": "Y",
      "num": 116,
      "title": "What Is Water Worth?",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "What句式"
    },
    {
      "id": "Y117",
      "level": "Y",
      "num": 117,
      "title": "Winston Churchill: \\u0022Never Give In\\u0022",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "Y118",
      "level": "Y",
      "num": 118,
      "title": "The Wonderful Wizard of Oz (Part 1)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Y119",
      "level": "Y",
      "num": 119,
      "title": "The Wonderful Wizard of Oz (Part 10)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Y120",
      "level": "Y",
      "num": 120,
      "title": "The Wonderful Wizard of Oz (Part 11)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Y121",
      "level": "Y",
      "num": 121,
      "title": "The Wonderful Wizard of Oz (Part 12)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Y122",
      "level": "Y",
      "num": 122,
      "title": "The Wonderful Wizard of Oz (Part 2)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Y123",
      "level": "Y",
      "num": 123,
      "title": "The Wonderful Wizard of Oz (Part 3)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Y124",
      "level": "Y",
      "num": 124,
      "title": "The Wonderful Wizard of Oz (Part 4)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Y125",
      "level": "Y",
      "num": 125,
      "title": "The Wonderful Wizard of Oz (Part 5)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Y126",
      "level": "Y",
      "num": 126,
      "title": "The Wonderful Wizard of Oz (Part 6)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Y127",
      "level": "Y",
      "num": 127,
      "title": "The Wonderful Wizard of Oz (Part 7)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Y128",
      "level": "Y",
      "num": 128,
      "title": "The Wonderful Wizard of Oz (Part 8)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Y129",
      "level": "Y",
      "num": 129,
      "title": "The Wonderful Wizard of Oz (Part 9)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Y130",
      "level": "Y",
      "num": 130,
      "title": "Woods of Wonder",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Y131",
      "level": "Y",
      "num": 131,
      "title": "World Traveler Ibn Battuta",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "Y132",
      "level": "Y",
      "num": 132,
      "title": "The Zoo of Extinct Animals",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "Z01",
      "level": "Z",
      "num": 1,
      "title": "1865: The End of the Civil War",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z02",
      "level": "Z",
      "num": 2,
      "title": "Acropolis Adventure",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z03",
      "level": "Z",
      "num": 3,
      "title": "Albert Einstein",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z04",
      "level": "Z",
      "num": 4,
      "title": "Alexander the Great",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "Z05",
      "level": "Z",
      "num": 5,
      "title": "Amazing Migrations",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "Z06",
      "level": "Z",
      "num": 6,
      "title": "Ancient Mesopotamia",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z07",
      "level": "Z",
      "num": 7,
      "title": "Animal Discoveries",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "Z08",
      "level": "Z",
      "num": 8,
      "title": "Anne Frank",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z09",
      "level": "Z",
      "num": 9,
      "title": "Apollo 11",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z10",
      "level": "Z",
      "num": 10,
      "title": "Beowulf",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z11",
      "level": "Z",
      "num": 11,
      "title": "A Big League for Little Players",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z12",
      "level": "Z",
      "num": 12,
      "title": "The Bill of Rights",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z13",
      "level": "Z",
      "num": 13,
      "title": "The Birmingham Children\\u0027s Crusade",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z14",
      "level": "Z",
      "num": 14,
      "title": "Bites and Stings",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z15",
      "level": "Z",
      "num": 15,
      "title": "The Black Stones",
      "type": "F",
      "theme": "社会与人文",
      "lang": "颜色句式"
    },
    {
      "id": "Z16",
      "level": "Z",
      "num": 16,
      "title": "Book 18: The Queen\\u0027s Loss (Part I)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Z17",
      "level": "Z",
      "num": 17,
      "title": "Book 19: The Queen\\u0027s Loss (Part II)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Z18",
      "level": "Z",
      "num": 18,
      "title": "Building a Nation",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z19",
      "level": "Z",
      "num": 19,
      "title": "The Case of the Disappearing Honeybees",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "Z20",
      "level": "Z",
      "num": 20,
      "title": "Cathy Freeman",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "Z21",
      "level": "Z",
      "num": 21,
      "title": "A Christmas Carol (Part 1)",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z22",
      "level": "Z",
      "num": 22,
      "title": "A Christmas Carol (Part 10)",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z23",
      "level": "Z",
      "num": 23,
      "title": "A Christmas Carol (Part 2)",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z24",
      "level": "Z",
      "num": 24,
      "title": "A Christmas Carol (Part 3)",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z25",
      "level": "Z",
      "num": 25,
      "title": "A Christmas Carol (Part 4)",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z26",
      "level": "Z",
      "num": 26,
      "title": "A Christmas Carol (Part 5)",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z27",
      "level": "Z",
      "num": 27,
      "title": "A Christmas Carol (Part 6)",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z28",
      "level": "Z",
      "num": 28,
      "title": "A Christmas Carol (Part 7)",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z29",
      "level": "Z",
      "num": 29,
      "title": "A Christmas Carol (Part 8)",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z30",
      "level": "Z",
      "num": 30,
      "title": "A Christmas Carol (Part 9)",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z31",
      "level": "Z",
      "num": 31,
      "title": "Code Talkers",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z32",
      "level": "Z",
      "num": 32,
      "title": "Color Blindness",
      "type": "F",
      "theme": "思维与创意",
      "lang": "颜色句式"
    },
    {
      "id": "Z33",
      "level": "Z",
      "num": 33,
      "title": "Condors: Giant Birds",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "Z34",
      "level": "Z",
      "num": 34,
      "title": "COVID-19: A Challenging Pandemic",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z35",
      "level": "Z",
      "num": 35,
      "title": "Dinner Around the World",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "Z36",
      "level": "Z",
      "num": 36,
      "title": "Dino Duel",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Not反义句式"
    },
    {
      "id": "Z37",
      "level": "Z",
      "num": 37,
      "title": "Drones",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z38",
      "level": "Z",
      "num": 38,
      "title": "Dust Storms and Sandstorms",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "Z39",
      "level": "Z",
      "num": 39,
      "title": "Eiffel Tower",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z40",
      "level": "Z",
      "num": 40,
      "title": "Electric Eels!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z41",
      "level": "Z",
      "num": 41,
      "title": "Elephants: Giant Mammals",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "Z42",
      "level": "Z",
      "num": 42,
      "title": "Ella Fitzgerald",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z43",
      "level": "Z",
      "num": 43,
      "title": "Empire State Building",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z44",
      "level": "Z",
      "num": 44,
      "title": "Energy Sources: The Pros and Cons",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z45",
      "level": "Z",
      "num": 45,
      "title": "The Erie Canal",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Can句式"
    },
    {
      "id": "Z46",
      "level": "Z",
      "num": 46,
      "title": "The Eurovision Song Contest!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "Z47",
      "level": "Z",
      "num": 47,
      "title": "Everest: On Top of the World",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "Z48",
      "level": "Z",
      "num": 48,
      "title": "Expedition 60: The Subarctic",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "Z49",
      "level": "Z",
      "num": 49,
      "title": "Famous Hispanic Americans: A Proud Heritage",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Can句式"
    },
    {
      "id": "Z50",
      "level": "Z",
      "num": 50,
      "title": "Fun by Remote Control",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z51",
      "level": "Z",
      "num": 51,
      "title": "Genetics at Work",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z52",
      "level": "Z",
      "num": 52,
      "title": "The Genius of Tesla",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z53",
      "level": "Z",
      "num": 53,
      "title": "The Gettysburg Address",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z54",
      "level": "Z",
      "num": 54,
      "title": "The Gift of the Magi",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z55",
      "level": "Z",
      "num": 55,
      "title": "Goliath Beetles: Giant Insects",
      "type": "F",
      "theme": "生命世界",
      "lang": "Go句式"
    },
    {
      "id": "Z56",
      "level": "Z",
      "num": 56,
      "title": "Great Mosque of Djenn\\u00e9",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "Z57",
      "level": "Z",
      "num": 57,
      "title": "The Great Wall of China",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "Z58",
      "level": "Z",
      "num": 58,
      "title": "Great Zimbabwe",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "Z59",
      "level": "Z",
      "num": 59,
      "title": "Guy Fawkes Day",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z60",
      "level": "Z",
      "num": 60,
      "title": "Hiking the Appalachian Trail",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z61",
      "level": "Z",
      "num": 61,
      "title": "A Hip-Hop History",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Z62",
      "level": "Z",
      "num": 62,
      "title": "Historic Peacemakers",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z63",
      "level": "Z",
      "num": 63,
      "title": "The History of Halloween",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Z64",
      "level": "Z",
      "num": 64,
      "title": "Hoover Dam",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "Z65",
      "level": "Z",
      "num": 65,
      "title": "The Hunting Trip",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z66",
      "level": "Z",
      "num": 66,
      "title": "Hybrid Animals",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "Z67",
      "level": "Z",
      "num": 67,
      "title": "The Ides of March",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z68",
      "level": "Z",
      "num": 68,
      "title": "India",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z69",
      "level": "Z",
      "num": 69,
      "title": "The Industrial Revolution",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z70",
      "level": "Z",
      "num": 70,
      "title": "Isaac Newton: Matter, Math, and Motion",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Z71",
      "level": "Z",
      "num": 71,
      "title": "Joe Kittinger: An Unsung Hero",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "Z72",
      "level": "Z",
      "num": 72,
      "title": "Jupiter\\u0027s Secrets Revealed",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "Z73",
      "level": "Z",
      "num": 73,
      "title": "Laura Ingalls Wilder",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z74",
      "level": "Z",
      "num": 74,
      "title": "Lighter Than Air",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "Z75",
      "level": "Z",
      "num": 75,
      "title": "M Is for Mexico",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z76",
      "level": "Z",
      "num": 76,
      "title": "Maria Tallchief: Prima Ballerina",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z77",
      "level": "Z",
      "num": 77,
      "title": "The Message",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z78",
      "level": "Z",
      "num": 78,
      "title": "The Metropolitan Museum of Art",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Z79",
      "level": "Z",
      "num": 79,
      "title": "Microbes: Friend or Foe?",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z80",
      "level": "Z",
      "num": 80,
      "title": "Money in the USA",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "Z81",
      "level": "Z",
      "num": 81,
      "title": "Money, Money, Money",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z82",
      "level": "Z",
      "num": 82,
      "title": "Mount Fuji",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z83",
      "level": "Z",
      "num": 83,
      "title": "Mount Kilimanjaro",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z84",
      "level": "Z",
      "num": 84,
      "title": "The Mystery of King Tut",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z85",
      "level": "Z",
      "num": 85,
      "title": "Napoleon Bonaparte",
      "type": "F",
      "theme": "思维与创意",
      "lang": "介词反义"
    },
    {
      "id": "Z86",
      "level": "Z",
      "num": 86,
      "title": "Natural Wonders of the World",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z87",
      "level": "Z",
      "num": 87,
      "title": "The Necklace",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z88",
      "level": "Z",
      "num": 88,
      "title": "Paragliding",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z89",
      "level": "Z",
      "num": 89,
      "title": "The Paralympics",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z90",
      "level": "Z",
      "num": 90,
      "title": "Paving the Way: American Sports Legends",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Can句式"
    },
    {
      "id": "Z91",
      "level": "Z",
      "num": 91,
      "title": "Petra",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "Z92",
      "level": "Z",
      "num": 92,
      "title": "A Place for Wild Things",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z93",
      "level": "Z",
      "num": 93,
      "title": "Prairies Alive!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z94",
      "level": "Z",
      "num": 94,
      "title": "Private Spaceships",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "Z95",
      "level": "Z",
      "num": 95,
      "title": "Pyramids",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z96",
      "level": "Z",
      "num": 96,
      "title": "Queen Elizabeth I",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z97",
      "level": "Z",
      "num": 97,
      "title": "Rachel Carson",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z98",
      "level": "Z",
      "num": 98,
      "title": "Ramses II",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z99",
      "level": "Z",
      "num": 99,
      "title": "The Remarkable Case of Davidson\\u0027s Eyes",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "Z100",
      "level": "Z",
      "num": 100,
      "title": "Remembering the Alamo",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z101",
      "level": "Z",
      "num": 101,
      "title": "The Round Earth",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "Z102",
      "level": "Z",
      "num": 102,
      "title": "Route 66",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "Z103",
      "level": "Z",
      "num": 103,
      "title": "Salah al-Din",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z104",
      "level": "Z",
      "num": 104,
      "title": "Scuba",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z105",
      "level": "Z",
      "num": 105,
      "title": "A Selection From Robinson Crusoe",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "Z106",
      "level": "Z",
      "num": 106,
      "title": "Sergeant Stubby",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "Z107",
      "level": "Z",
      "num": 107,
      "title": "Seven Wonders You Can Visit",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Can句式"
    },
    {
      "id": "Z108",
      "level": "Z",
      "num": 108,
      "title": "Should Anyone Own the North Pole?",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Not反义句式"
    },
    {
      "id": "Z109",
      "level": "Z",
      "num": 109,
      "title": "Skin Color",
      "type": "F",
      "theme": "思维与创意",
      "lang": "颜色句式"
    },
    {
      "id": "Z110",
      "level": "Z",
      "num": 110,
      "title": "So You Want to Go to Mars?",
      "type": "F",
      "theme": "生命世界",
      "lang": "Go句式"
    },
    {
      "id": "Z111",
      "level": "Z",
      "num": 111,
      "title": "Special Effects",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z112",
      "level": "Z",
      "num": 112,
      "title": "Stonehenge",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z113",
      "level": "Z",
      "num": 113,
      "title": "Stories from Asgard: Norse Myths",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Not反义句式"
    },
    {
      "id": "Z114",
      "level": "Z",
      "num": 114,
      "title": "Storm Chasers",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "Z115",
      "level": "Z",
      "num": 115,
      "title": "The Super School Bus System",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "Z116",
      "level": "Z",
      "num": 116,
      "title": "Supply and Demand",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "Z117",
      "level": "Z",
      "num": 117,
      "title": "Symbiotic Wildlife",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z118",
      "level": "Z",
      "num": 118,
      "title": "Taj Mahal",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z119",
      "level": "Z",
      "num": 119,
      "title": "Telescopes: Eyes on Space",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "介词反义"
    },
    {
      "id": "Z120",
      "level": "Z",
      "num": 120,
      "title": "The Terry Fox Story",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "Z121",
      "level": "Z",
      "num": 121,
      "title": "Tessa\\u0027s Family Day",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z122",
      "level": "Z",
      "num": 122,
      "title": "Threats to Our Atmosphere",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "Z123",
      "level": "Z",
      "num": 123,
      "title": "Tsunamis",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "Z124",
      "level": "Z",
      "num": 124,
      "title": "Valley of the Kings",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z125",
      "level": "Z",
      "num": 125,
      "title": "Vanishing Languages",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z126",
      "level": "Z",
      "num": 126,
      "title": "Venus: Beauty and Beast",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z127",
      "level": "Z",
      "num": 127,
      "title": "Volcanoes",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "Can句式"
    },
    {
      "id": "Z128",
      "level": "Z",
      "num": 128,
      "title": "Wild and Wacky World of Wigs",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z129",
      "level": "Z",
      "num": 129,
      "title": "Wildlife Rescue",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z130",
      "level": "Z",
      "num": 130,
      "title": "The World of NASCAR",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z131",
      "level": "Z",
      "num": 131,
      "title": "X Games",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z132",
      "level": "Z",
      "num": 132,
      "title": "Yo-Yo Ma",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z101",
      "level": "Z1",
      "num": 1,
      "title": "Abraham Lincoln: From Log Cabin to the White House",
      "type": "F",
      "theme": "社会与人文",
      "lang": "颜色句式"
    },
    {
      "id": "Z102",
      "level": "Z1",
      "num": 2,
      "title": "Ali Baba",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z103",
      "level": "Z1",
      "num": 3,
      "title": "Alien Collective I: Resistance",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z104",
      "level": "Z1",
      "num": 4,
      "title": "Alien Collective II: The Link",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z105",
      "level": "Z1",
      "num": 5,
      "title": "Alien Collective III: Transition",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z106",
      "level": "Z1",
      "num": 6,
      "title": "The Amazing Undersea Food Web",
      "type": "F",
      "theme": "生命世界",
      "lang": "天气水句式"
    },
    {
      "id": "Z107",
      "level": "Z1",
      "num": 7,
      "title": "Ancient Mesopotamia",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z108",
      "level": "Z1",
      "num": 8,
      "title": "Are GMOs Safe?",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z109",
      "level": "Z1",
      "num": 9,
      "title": "The Balloon Brothers",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "Z110",
      "level": "Z1",
      "num": 10,
      "title": "Battling for Independence",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "Z111",
      "level": "Z1",
      "num": 11,
      "title": "Believe It or Not?",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Not反义句式"
    },
    {
      "id": "Z112",
      "level": "Z1",
      "num": 12,
      "title": "Big Ben and Westminster Palace",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Z113",
      "level": "Z1",
      "num": 13,
      "title": "Biomimicry",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z114",
      "level": "Z1",
      "num": 14,
      "title": "The Blues: More Than A Feeling",
      "type": "F",
      "theme": "身体与健康",
      "lang": "颜色句式"
    },
    {
      "id": "Z115",
      "level": "Z1",
      "num": 15,
      "title": "The Bones of a King",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z116",
      "level": "Z1",
      "num": 16,
      "title": "Brazil",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z117",
      "level": "Z1",
      "num": 17,
      "title": "The Buffalo Soldiers",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z118",
      "level": "Z1",
      "num": 18,
      "title": "Building a Nation",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z119",
      "level": "Z1",
      "num": 19,
      "title": "By Hook or by Crook",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z120",
      "level": "Z1",
      "num": 20,
      "title": "China",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z121",
      "level": "Z1",
      "num": 21,
      "title": "Comic Cons",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z122",
      "level": "Z1",
      "num": 22,
      "title": "Condors: Giant Birds",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "Z123",
      "level": "Z1",
      "num": 23,
      "title": "Cricket",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z124",
      "level": "Z1",
      "num": 24,
      "title": "Crowdsourcing",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z125",
      "level": "Z1",
      "num": 25,
      "title": "D-Day",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z126",
      "level": "Z1",
      "num": 26,
      "title": "Digital Reality Tech",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z127",
      "level": "Z1",
      "num": 27,
      "title": "Early Birds: Fossils and Feathers",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "Z128",
      "level": "Z1",
      "num": 28,
      "title": "Eight Billion and Counting",
      "type": "F",
      "theme": "生命世界",
      "lang": "数字句式"
    },
    {
      "id": "Z129",
      "level": "Z1",
      "num": 29,
      "title": "Electric Cars: History and Future",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z130",
      "level": "Z1",
      "num": 30,
      "title": "Escape From the Holocaust",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z131",
      "level": "Z1",
      "num": 31,
      "title": "France",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z132",
      "level": "Z1",
      "num": 32,
      "title": "Frederick Douglass: Forever Free",
      "type": "F",
      "theme": "社会与人文",
      "lang": "颜色句式"
    },
    {
      "id": "Z133",
      "level": "Z1",
      "num": 33,
      "title": "Fungus Among Us",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z134",
      "level": "Z1",
      "num": 34,
      "title": "Gems: Treasures from the Earth",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "Z135",
      "level": "Z1",
      "num": 35,
      "title": "The Gettysburg Address",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z136",
      "level": "Z1",
      "num": 36,
      "title": "Great City Fires",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "Z137",
      "level": "Z1",
      "num": 37,
      "title": "Groundwater",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "Z138",
      "level": "Z1",
      "num": 38,
      "title": "The Hero Maui",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z139",
      "level": "Z1",
      "num": 39,
      "title": "A Hip-Hop History",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Z140",
      "level": "Z1",
      "num": 40,
      "title": "The Ides of March",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z141",
      "level": "Z1",
      "num": 41,
      "title": "InFLUenza",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z142",
      "level": "Z1",
      "num": 42,
      "title": "Introverts and Extroverts",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "Z143",
      "level": "Z1",
      "num": 43,
      "title": "Japan",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z144",
      "level": "Z1",
      "num": 44,
      "title": "John Muir",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z145",
      "level": "Z1",
      "num": 45,
      "title": "Jonas Salk",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z146",
      "level": "Z1",
      "num": 46,
      "title": "The Judicial Branch",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z147",
      "level": "Z1",
      "num": 47,
      "title": "Kenya",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z148",
      "level": "Z1",
      "num": 48,
      "title": "Komodo Dragons: Giant Reptiles",
      "type": "F",
      "theme": "生命世界",
      "lang": "Go句式"
    },
    {
      "id": "Z149",
      "level": "Z1",
      "num": 49,
      "title": "Labor Day",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z150",
      "level": "Z1",
      "num": 50,
      "title": "The Labors of Hercules",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z151",
      "level": "Z1",
      "num": 51,
      "title": "The Lakota",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z152",
      "level": "Z1",
      "num": 52,
      "title": "The Legacy of da Vinci",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z153",
      "level": "Z1",
      "num": 53,
      "title": "The Legislative Branch",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z154",
      "level": "Z1",
      "num": 54,
      "title": "Life in Space",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "介词反义"
    },
    {
      "id": "Z155",
      "level": "Z1",
      "num": 55,
      "title": "Make an Impression",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z156",
      "level": "Z1",
      "num": 56,
      "title": "Mexico",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z157",
      "level": "Z1",
      "num": 57,
      "title": "The Mill Girl",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z158",
      "level": "Z1",
      "num": 58,
      "title": "Morocco",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z159",
      "level": "Z1",
      "num": 59,
      "title": "Muhammad Ali",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z160",
      "level": "Z1",
      "num": 60,
      "title": "The Mysterious Object",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z161",
      "level": "Z1",
      "num": 61,
      "title": "Mysterious Shipwrecks",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z162",
      "level": "Z1",
      "num": 62,
      "title": "The Mystery of King Tut",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z163",
      "level": "Z1",
      "num": 63,
      "title": "A New Skyline",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "Z164",
      "level": "Z1",
      "num": 64,
      "title": "The Nobel Prize",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Not反义句式"
    },
    {
      "id": "Z165",
      "level": "Z1",
      "num": 65,
      "title": "Odysseus and the Bag of Winds",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "Z166",
      "level": "Z1",
      "num": 66,
      "title": "Ostriches: Giant Birds",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "Z167",
      "level": "Z1",
      "num": 67,
      "title": "Otzi: The Iceman",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "Z168",
      "level": "Z1",
      "num": 68,
      "title": "The Panama Canal",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Can句式"
    },
    {
      "id": "Z169",
      "level": "Z1",
      "num": 69,
      "title": "The Plague!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z170",
      "level": "Z1",
      "num": 70,
      "title": "The Rise of Rock \\u0027n\\u0027 Roll",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "Z171",
      "level": "Z1",
      "num": 71,
      "title": "Russia",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z172",
      "level": "Z1",
      "num": 72,
      "title": "Samuel de Champlain, Father of New France",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z173",
      "level": "Z1",
      "num": 73,
      "title": "Satellites",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z174",
      "level": "Z1",
      "num": 74,
      "title": "Seeds of Revolution",
      "type": "F",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "Z175",
      "level": "Z1",
      "num": 75,
      "title": "Space Camp",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "Z176",
      "level": "Z1",
      "num": 76,
      "title": "Spoiled Sports: The Dangers of Steroids",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z177",
      "level": "Z1",
      "num": 77,
      "title": "The Stanley Cup: Hockey\\u0027s Greatest Prize",
      "type": "F",
      "theme": "身体与健康",
      "lang": "介词反义"
    },
    {
      "id": "Z178",
      "level": "Z1",
      "num": 78,
      "title": "The Story of Lewis and Clark Book 1: Up the Missouri River",
      "type": "F",
      "theme": "思维与创意",
      "lang": "天气水句式"
    },
    {
      "id": "Z179",
      "level": "Z1",
      "num": 79,
      "title": "Teotihuacan",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Can句式"
    },
    {
      "id": "Z180",
      "level": "Z1",
      "num": 80,
      "title": "The Reluctant Dragon (Part 1)",
      "type": "F",
      "theme": "生命世界",
      "lang": "Go句式"
    },
    {
      "id": "Z181",
      "level": "Z1",
      "num": 81,
      "title": "The Reluctant Dragon (Part 2)",
      "type": "F",
      "theme": "生命世界",
      "lang": "Go句式"
    },
    {
      "id": "Z182",
      "level": "Z1",
      "num": 82,
      "title": "The Reluctant Dragon (Part 3)",
      "type": "F",
      "theme": "生命世界",
      "lang": "Go句式"
    },
    {
      "id": "Z183",
      "level": "Z1",
      "num": 83,
      "title": "Through a Microscope",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z184",
      "level": "Z1",
      "num": 84,
      "title": "Tokyo Imperial Palace",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z185",
      "level": "Z1",
      "num": 85,
      "title": "The U.S. Constitution",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z186",
      "level": "Z1",
      "num": 86,
      "title": "The U.S. Government At Work",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Go句式"
    },
    {
      "id": "Z187",
      "level": "Z1",
      "num": 87,
      "title": "United Arab Emirates",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "Z188",
      "level": "Z1",
      "num": 88,
      "title": "The Velveteen Rabbit",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "Z189",
      "level": "Z1",
      "num": 89,
      "title": "Water Cities",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "Z190",
      "level": "Z1",
      "num": 90,
      "title": "Weave It!",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z191",
      "level": "Z1",
      "num": 91,
      "title": "Weaving Around the World",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z192",
      "level": "Z1",
      "num": 92,
      "title": "Whale Sharks: Giant Fish",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "Z193",
      "level": "Z1",
      "num": 93,
      "title": "What Is Water Worth?",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "What句式"
    },
    {
      "id": "Z194",
      "level": "Z1",
      "num": 94,
      "title": "The Wind in the Willows (Part 1)",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "Z195",
      "level": "Z1",
      "num": 95,
      "title": "The Wind in the Willows (Part 2)",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "Z196",
      "level": "Z1",
      "num": 96,
      "title": "The Wind in the Willows (Part 3)",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "Z197",
      "level": "Z1",
      "num": 97,
      "title": "The Wind in the Willows (Part 4)",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "Z198",
      "level": "Z1",
      "num": 98,
      "title": "The Wind in the Willows (Part 5)",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "Z199",
      "level": "Z1",
      "num": 99,
      "title": "The Wind in the Willows (Part 6)",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "Z1100",
      "level": "Z1",
      "num": 100,
      "title": "The Wind in the Willows (Part 7)",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "Z1101",
      "level": "Z1",
      "num": 101,
      "title": "The Wind in the Willows (Part 8)",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "Z1102",
      "level": "Z1",
      "num": 102,
      "title": "The Wind in the Willows (Part 9)",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "Z1103",
      "level": "Z1",
      "num": 103,
      "title": "The Wind in the Willows (Part 10)",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "Z1104",
      "level": "Z1",
      "num": 104,
      "title": "The Wind in the Willows (Part 11)",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "Z1105",
      "level": "Z1",
      "num": 105,
      "title": "The Wind in the Willows (Part 12)",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "Z1106",
      "level": "Z1",
      "num": 106,
      "title": "The Wind in the Willows (Part 13)",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "Z1107",
      "level": "Z1",
      "num": 107,
      "title": "The Wind in the Willows (Part 14)",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "Z1108",
      "level": "Z1",
      "num": 108,
      "title": "The Wind in the Willows (Part 15)",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "Z1109",
      "level": "Z1",
      "num": 109,
      "title": "Women and the Vote",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z1110",
      "level": "Z1",
      "num": 110,
      "title": "You Can Print What?",
      "type": "F",
      "theme": "社会与人文",
      "lang": "What句式"
    },
    {
      "id": "Z1111",
      "level": "Z1",
      "num": 111,
      "title": "The Zoo of Extinct Animals",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "Z201",
      "level": "Z2",
      "num": 1,
      "title": "1865: The End of the Civil War",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z202",
      "level": "Z2",
      "num": 2,
      "title": "Abraham Lincoln: From Log Cabin to the White House",
      "type": "F",
      "theme": "社会与人文",
      "lang": "颜色句式"
    },
    {
      "id": "Z203",
      "level": "Z2",
      "num": 3,
      "title": "The Adventure of the Speckled Band (Part 1)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Z204",
      "level": "Z2",
      "num": 4,
      "title": "The Adventure of the Speckled Band (Part 2)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Z205",
      "level": "Z2",
      "num": 5,
      "title": "The Adventure of the Speckled Band (Part 3)",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Z206",
      "level": "Z2",
      "num": 6,
      "title": "Albert Einstein",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z207",
      "level": "Z2",
      "num": 7,
      "title": "Alexander the Great",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "Z208",
      "level": "Z2",
      "num": 8,
      "title": "The Amazing Brain",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "Z209",
      "level": "Z2",
      "num": 9,
      "title": "The Amazing Undersea Food Web",
      "type": "F",
      "theme": "生命世界",
      "lang": "天气水句式"
    },
    {
      "id": "Z210",
      "level": "Z2",
      "num": 10,
      "title": "American Farms: Past, Present, and Future",
      "type": "NF",
      "theme": "生命世界",
      "lang": "Can句式"
    },
    {
      "id": "Z211",
      "level": "Z2",
      "num": 11,
      "title": "American Football",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Can句式"
    },
    {
      "id": "Z212",
      "level": "Z2",
      "num": 12,
      "title": "Anne Frank",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z213",
      "level": "Z2",
      "num": 13,
      "title": "Are GMOs Safe?",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z214",
      "level": "Z2",
      "num": 14,
      "title": "Argentina",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z215",
      "level": "Z2",
      "num": 15,
      "title": "The Balloon Brothers",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "Z216",
      "level": "Z2",
      "num": 16,
      "title": "Baseball",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z217",
      "level": "Z2",
      "num": 17,
      "title": "Basketball",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z218",
      "level": "Z2",
      "num": 18,
      "title": "Battle Over Britain",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "Z219",
      "level": "Z2",
      "num": 19,
      "title": "Battling for Independence",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "Z220",
      "level": "Z2",
      "num": 20,
      "title": "Believe It or Not?",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Not反义句式"
    },
    {
      "id": "Z221",
      "level": "Z2",
      "num": 21,
      "title": "The Berlin Wall",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "Z222",
      "level": "Z2",
      "num": 22,
      "title": "The Bill of Rights",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z223",
      "level": "Z2",
      "num": 23,
      "title": "Biomimicry",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z224",
      "level": "Z2",
      "num": 24,
      "title": "Blue Whales: Giant Mammals",
      "type": "F",
      "theme": "生命世界",
      "lang": "颜色句式"
    },
    {
      "id": "Z225",
      "level": "Z2",
      "num": 25,
      "title": "Building a Nation",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z226",
      "level": "Z2",
      "num": 26,
      "title": "The Case of the Disappearing Honeybees",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "Z227",
      "level": "Z2",
      "num": 27,
      "title": "The Celebrated Jumping Frog of Calaveras County",
      "type": "F",
      "theme": "生命世界",
      "lang": "数字句式"
    },
    {
      "id": "Z228",
      "level": "Z2",
      "num": 28,
      "title": "Chich\\u00e9n Itz\\u00e1",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z229",
      "level": "Z2",
      "num": 29,
      "title": "Color Blindness",
      "type": "F",
      "theme": "思维与创意",
      "lang": "颜色句式"
    },
    {
      "id": "Z230",
      "level": "Z2",
      "num": 30,
      "title": "Colosseum",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z231",
      "level": "Z2",
      "num": 31,
      "title": "Comic Cons",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z232",
      "level": "Z2",
      "num": 32,
      "title": "D-Day",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z233",
      "level": "Z2",
      "num": 33,
      "title": "Eiffel Tower",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z234",
      "level": "Z2",
      "num": 34,
      "title": "Elephants: Giant Mammals",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "Z235",
      "level": "Z2",
      "num": 35,
      "title": "Empire State Building",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z236",
      "level": "Z2",
      "num": 36,
      "title": "Endurance on the Ice",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "Z237",
      "level": "Z2",
      "num": 37,
      "title": "Escape From the Holocaust",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z238",
      "level": "Z2",
      "num": 38,
      "title": "The Executive Branch",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z239",
      "level": "Z2",
      "num": 39,
      "title": "Fun by Remote Control",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z240",
      "level": "Z2",
      "num": 40,
      "title": "Genetics at Work",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z241",
      "level": "Z2",
      "num": 41,
      "title": "George Washington",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "Z242",
      "level": "Z2",
      "num": 42,
      "title": "Golf",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Go句式"
    },
    {
      "id": "Z243",
      "level": "Z2",
      "num": 43,
      "title": "Goliath Beetles: Giant Insects",
      "type": "F",
      "theme": "生命世界",
      "lang": "Go句式"
    },
    {
      "id": "Z244",
      "level": "Z2",
      "num": 44,
      "title": "Goliath Bird-Eating Spiders: Giant Arachnids",
      "type": "F",
      "theme": "生命世界",
      "lang": "Go句式"
    },
    {
      "id": "Z245",
      "level": "Z2",
      "num": 45,
      "title": "The Great Charter",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "Z246",
      "level": "Z2",
      "num": 46,
      "title": "Great Mosque of Djenn\\u00e9",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "Z247",
      "level": "Z2",
      "num": 47,
      "title": "The Great Wall of China",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "Z248",
      "level": "Z2",
      "num": 48,
      "title": "Great Zimbabwe",
      "type": "F",
      "theme": "身体与健康",
      "lang": "综合"
    },
    {
      "id": "Z249",
      "level": "Z2",
      "num": 49,
      "title": "High-Speed Trains",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "Z250",
      "level": "Z2",
      "num": 50,
      "title": "A Hip-Hop History",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Z251",
      "level": "Z2",
      "num": 51,
      "title": "The History of Anime",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Z252",
      "level": "Z2",
      "num": 52,
      "title": "The History of the Piano",
      "type": "F",
      "theme": "思维与创意",
      "lang": "Not反义句式"
    },
    {
      "id": "Z253",
      "level": "Z2",
      "num": 53,
      "title": "Hockey",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z254",
      "level": "Z2",
      "num": 54,
      "title": "Hoover Dam",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "Z255",
      "level": "Z2",
      "num": 55,
      "title": "Hungry Right Here?",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z256",
      "level": "Z2",
      "num": 56,
      "title": "Hybrid Animals",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "Z257",
      "level": "Z2",
      "num": 57,
      "title": "Ivory or Elephants",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "Z258",
      "level": "Z2",
      "num": 58,
      "title": "Japanese American Incarceration During World War II",
      "type": "F",
      "theme": "生命世界",
      "lang": "Can句式"
    },
    {
      "id": "Z259",
      "level": "Z2",
      "num": 59,
      "title": "Jonas Salk",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z260",
      "level": "Z2",
      "num": 60,
      "title": "Julius Caesar",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z261",
      "level": "Z2",
      "num": 61,
      "title": "King George III",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z262",
      "level": "Z2",
      "num": 62,
      "title": "The Labors of Hercules",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z263",
      "level": "Z2",
      "num": 63,
      "title": "Lacrosse",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z264",
      "level": "Z2",
      "num": 64,
      "title": "Living in Deserts",
      "type": "F",
      "theme": "生命世界",
      "lang": "介词反义"
    },
    {
      "id": "Z265",
      "level": "Z2",
      "num": 65,
      "title": "The Lumber-Room",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z266",
      "level": "Z2",
      "num": 66,
      "title": "Machu Picchu",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z267",
      "level": "Z2",
      "num": 67,
      "title": "March Madness",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z268",
      "level": "Z2",
      "num": 68,
      "title": "Marie Curie",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z269",
      "level": "Z2",
      "num": 69,
      "title": "The Metropolitan Museum of Art",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Z270",
      "level": "Z2",
      "num": 70,
      "title": "Money, Money, Money",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z271",
      "level": "Z2",
      "num": 71,
      "title": "The Mystery of King Tut",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z272",
      "level": "Z2",
      "num": 72,
      "title": "Napoleon Bonaparte",
      "type": "F",
      "theme": "思维与创意",
      "lang": "介词反义"
    },
    {
      "id": "Z273",
      "level": "Z2",
      "num": 73,
      "title": "Natural Wonders of the World",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z274",
      "level": "Z2",
      "num": 74,
      "title": "Nellie Bly",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z275",
      "level": "Z2",
      "num": 75,
      "title": "The Olympics: Past and Present",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z276",
      "level": "Z2",
      "num": 76,
      "title": "The Panama Canal",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Can句式"
    },
    {
      "id": "Z277",
      "level": "Z2",
      "num": 77,
      "title": "The Paralympics",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z278",
      "level": "Z2",
      "num": 78,
      "title": "Paving the Way: American Sports Legends",
      "type": "F",
      "theme": "社会与人文",
      "lang": "Can句式"
    },
    {
      "id": "Z279",
      "level": "Z2",
      "num": 79,
      "title": "The Peloponnesian War: Athens Versus Sparta",
      "type": "F",
      "theme": "思维与创意",
      "lang": "综合"
    },
    {
      "id": "Z280",
      "level": "Z2",
      "num": 80,
      "title": "Petra",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "Z281",
      "level": "Z2",
      "num": 81,
      "title": "Prehistoric Giants (Other Than Dinosaurs)",
      "type": "F",
      "theme": "生命世界",
      "lang": "Not反义句式"
    },
    {
      "id": "Z282",
      "level": "Z2",
      "num": 82,
      "title": "Private Spaceships",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "综合"
    },
    {
      "id": "Z283",
      "level": "Z2",
      "num": 83,
      "title": "Puffins",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z284",
      "level": "Z2",
      "num": 84,
      "title": "Queen Elizabeth I",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z285",
      "level": "Z2",
      "num": 85,
      "title": "Ramses II",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z286",
      "level": "Z2",
      "num": 86,
      "title": "The Raven",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z287",
      "level": "Z2",
      "num": 87,
      "title": "Ready for Rising Seas?",
      "type": "F",
      "theme": "生命世界",
      "lang": "天气水句式"
    },
    {
      "id": "Z288",
      "level": "Z2",
      "num": 88,
      "title": "Real Outlaws of the Wild West",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "Z289",
      "level": "Z2",
      "num": 89,
      "title": "Salah al-Din",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z290",
      "level": "Z2",
      "num": 90,
      "title": "Seeds of Revolution",
      "type": "F",
      "theme": "生命世界",
      "lang": "综合"
    },
    {
      "id": "Z291",
      "level": "Z2",
      "num": 91,
      "title": "A Selection From Robinson Crusoe",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "Z292",
      "level": "Z2",
      "num": 92,
      "title": "Soccer",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z293",
      "level": "Z2",
      "num": 93,
      "title": "Stephen Hawking: Traveling Through the Universe",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z294",
      "level": "Z2",
      "num": 94,
      "title": "Stonehenge",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z295",
      "level": "Z2",
      "num": 95,
      "title": "The Story of Lewis and Clark Book 2: To the Pacific Ocean",
      "type": "F",
      "theme": "生命世界",
      "lang": "天气水句式"
    },
    {
      "id": "Z296",
      "level": "Z2",
      "num": 96,
      "title": "Success Stories",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z297",
      "level": "Z2",
      "num": 97,
      "title": "The Super School Bus System",
      "type": "F",
      "theme": "社会与人文",
      "lang": "介词反义"
    },
    {
      "id": "Z298",
      "level": "Z2",
      "num": 98,
      "title": "Symbiotic Wildlife",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z299",
      "level": "Z2",
      "num": 99,
      "title": "Taj Mahal",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z2100",
      "level": "Z2",
      "num": 100,
      "title": "The Transcontinental Railroad",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z2101",
      "level": "Z2",
      "num": 101,
      "title": "The Tuskegee Airmen",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z2102",
      "level": "Z2",
      "num": 102,
      "title": "The United Nations",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z2103",
      "level": "Z2",
      "num": 103,
      "title": "Valley of the Kings",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z2104",
      "level": "Z2",
      "num": 104,
      "title": "Violent Weather",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "天气水句式"
    },
    {
      "id": "Z2105",
      "level": "Z2",
      "num": 105,
      "title": "Volcanoes",
      "type": "F",
      "theme": "地球与宇宙",
      "lang": "Can句式"
    },
    {
      "id": "Z2106",
      "level": "Z2",
      "num": 106,
      "title": "Wild and Wacky World of Wigs",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z2107",
      "level": "Z2",
      "num": 107,
      "title": "Wildlife Rescue",
      "type": "F",
      "theme": "社会与人文",
      "lang": "综合"
    },
    {
      "id": "Z2108",
      "level": "Z2",
      "num": 108,
      "title": "Zoos: Pro or Con?",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "Z2109",
      "level": "Z2",
      "num": 109,
      "title": "Zoos Through the Ages",
      "type": "F",
      "theme": "生命世界",
      "lang": "动物认知"
    },
    {
      "id": "SAZ01",
      "level": "SAZ",
      "num": 1,
      "title": "Animals, Animals",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "GKLOW"
    },
    {
      "id": "SAZ02",
      "level": "SAZ",
      "num": 2,
      "title": "Animals, Animals",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ03",
      "level": "SAZ",
      "num": 3,
      "title": "Animals, Animals",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G2HIGH"
    },
    {
      "id": "SAZ04",
      "level": "SAZ",
      "num": 4,
      "title": "Animals of the Air",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "GKLOW"
    },
    {
      "id": "SAZ05",
      "level": "SAZ",
      "num": 5,
      "title": "ANimals in the Ground",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ06",
      "level": "SAZ",
      "num": 6,
      "title": "Animals of the Deep Ocean",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ07",
      "level": "SAZ",
      "num": 7,
      "title": "Animals of the Ice and Snow",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ08",
      "level": "SAZ",
      "num": 8,
      "title": "Animals of the Rivers",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G2HIGH"
    },
    {
      "id": "SAZ09",
      "level": "SAZ",
      "num": 9,
      "title": "Living and Non-Living Things",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "GKLOW"
    },
    {
      "id": "SAZ10",
      "level": "SAZ",
      "num": 10,
      "title": "Living and Non-Living Things",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ11",
      "level": "SAZ",
      "num": 11,
      "title": "Living and Non-Living Things",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G2HIGH"
    },
    {
      "id": "SAZ12",
      "level": "SAZ",
      "num": 12,
      "title": "Babies and Parents",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "GKLOW"
    },
    {
      "id": "SAZ13",
      "level": "SAZ",
      "num": 13,
      "title": "Baobab Trees",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ14",
      "level": "SAZ",
      "num": 14,
      "title": "Plastic",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ15",
      "level": "SAZ",
      "num": 15,
      "title": "Wonderful Water",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ16",
      "level": "SAZ",
      "num": 16,
      "title": "Amazing Cells",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G2HIGH"
    },
    {
      "id": "SAZ17",
      "level": "SAZ",
      "num": 17,
      "title": "Plants",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "GKLOW"
    },
    {
      "id": "SAZ18",
      "level": "SAZ",
      "num": 18,
      "title": "Plants",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ19",
      "level": "SAZ",
      "num": 19,
      "title": "Plants",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G2HIGH"
    },
    {
      "id": "SAZ20",
      "level": "SAZ",
      "num": 20,
      "title": "Roses",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "GKLOW"
    },
    {
      "id": "SAZ21",
      "level": "SAZ",
      "num": 21,
      "title": "Giant Sequoias",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ22",
      "level": "SAZ",
      "num": 22,
      "title": "City Gardening",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ23",
      "level": "SAZ",
      "num": 23,
      "title": "PINECONES",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ24",
      "level": "SAZ",
      "num": 24,
      "title": "POWERFUL PLANTS",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G2HIGH"
    },
    {
      "id": "SAZ25",
      "level": "SAZ",
      "num": 25,
      "title": "Senses",
      "type": "NF",
      "theme": "身体与健康",
      "lang": "综合",
      "band": "GKLOW"
    },
    {
      "id": "SAZ26",
      "level": "SAZ",
      "num": 26,
      "title": "Senses",
      "type": "NF",
      "theme": "身体与健康",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ27",
      "level": "SAZ",
      "num": 27,
      "title": "Senses",
      "type": "NF",
      "theme": "身体与健康",
      "lang": "综合",
      "band": "G2HIGH"
    },
    {
      "id": "SAZ28",
      "level": "SAZ",
      "num": 28,
      "title": "Where Are You?",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "GKLOW"
    },
    {
      "id": "SAZ29",
      "level": "SAZ",
      "num": 29,
      "title": "Helping People See and Hear",
      "type": "NF",
      "theme": "身体与健康",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ30",
      "level": "SAZ",
      "num": 30,
      "title": "DOGS SMELL!",
      "type": "NF",
      "theme": "身体与健康",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ31",
      "level": "SAZ",
      "num": 31,
      "title": "Where Are Its Eyes?",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ32",
      "level": "SAZ",
      "num": 32,
      "title": "Whiskers",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G2HIGH"
    },
    {
      "id": "SAZ33",
      "level": "SAZ",
      "num": 33,
      "title": "Earth,Moon,Sun,and Stars",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "GKLOW"
    },
    {
      "id": "SAZ34",
      "level": "SAZ",
      "num": 34,
      "title": "Earth,Moon,Sun, and Stars",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ35",
      "level": "SAZ",
      "num": 35,
      "title": "Earth,Moon,Sun,and Stars",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G2HIGH"
    },
    {
      "id": "SAZ36",
      "level": "SAZ",
      "num": 36,
      "title": "Shapes in the Night Sky",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "GKLOW"
    },
    {
      "id": "SAZ37",
      "level": "SAZ",
      "num": 37,
      "title": "GOLDILOCKS PLANET",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ38",
      "level": "SAZ",
      "num": 38,
      "title": "Seasons and Sunlight",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ39",
      "level": "SAZ",
      "num": 39,
      "title": "SHADOWS IN SPACE",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ40",
      "level": "SAZ",
      "num": 40,
      "title": "Apollo 11",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G2HIGH"
    },
    {
      "id": "SAZ41",
      "level": "SAZ",
      "num": 41,
      "title": "The Weather",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "GKLOW"
    },
    {
      "id": "SAZ42",
      "level": "SAZ",
      "num": 42,
      "title": "The Weather",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ43",
      "level": "SAZ",
      "num": 43,
      "title": "The Weather",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G2HIGH"
    },
    {
      "id": "SAZ44",
      "level": "SAZ",
      "num": 44,
      "title": "Snowflakes",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "GKLOW"
    },
    {
      "id": "SAZ45",
      "level": "SAZ",
      "num": 45,
      "title": "Cool Clouds",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "GKMID"
    },
    {
      "id": "SAZ46",
      "level": "SAZ",
      "num": 46,
      "title": "Harmful hurricanes",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "GKMID"
    },
    {
      "id": "SAZ47",
      "level": "SAZ",
      "num": 47,
      "title": "Our Shining Star",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "GKMID"
    },
    {
      "id": "SAZ48",
      "level": "SAZ",
      "num": 48,
      "title": "FORECASTING THE WEATHER",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "GKHIGH"
    },
    {
      "id": "SAZ49",
      "level": "SAZ",
      "num": 49,
      "title": "Earth&#39;s Surface",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "GKLOW"
    },
    {
      "id": "SAZ50",
      "level": "SAZ",
      "num": 50,
      "title": "Earth&#39;s Surface",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ51",
      "level": "SAZ",
      "num": 51,
      "title": "Earth&#39;s Surface",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G2HIGH"
    },
    {
      "id": "SAZ52",
      "level": "SAZ",
      "num": 52,
      "title": "Valleys",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "GKLOW"
    },
    {
      "id": "SAZ53",
      "level": "SAZ",
      "num": 53,
      "title": "Along the Coast",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "GKMID"
    },
    {
      "id": "SAZ54",
      "level": "SAZ",
      "num": 54,
      "title": "ARCHES NATIONAL PARK",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "GKMID"
    },
    {
      "id": "SAZ55",
      "level": "SAZ",
      "num": 55,
      "title": "IMPACT CRATERS",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "GKMID"
    },
    {
      "id": "SAZ56",
      "level": "SAZ",
      "num": 56,
      "title": "Land Under Water",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G2HIGH"
    },
    {
      "id": "SAZ57",
      "level": "SAZ",
      "num": 57,
      "title": "DOING WORK",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "GKLOW"
    },
    {
      "id": "SAZ58",
      "level": "SAZ",
      "num": 58,
      "title": "DOING WORK",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ59",
      "level": "SAZ",
      "num": 59,
      "title": "DOING WORK",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G2HIGH"
    },
    {
      "id": "SAZ60",
      "level": "SAZ",
      "num": 60,
      "title": "My Day of Work",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "GKLOW"
    },
    {
      "id": "SAZ61",
      "level": "SAZ",
      "num": 61,
      "title": "Building a House",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ62",
      "level": "SAZ",
      "num": 62,
      "title": "Trucks and Diggers",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ63",
      "level": "SAZ",
      "num": 63,
      "title": "Working while Playing",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ64",
      "level": "SAZ",
      "num": 64,
      "title": "Animals That Do WORK",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G2HIGH"
    },
    {
      "id": "SAZ65",
      "level": "SAZ",
      "num": 65,
      "title": "ENERGY IS EVERYWHERE!",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合",
      "band": "GKLOW"
    },
    {
      "id": "SAZ66",
      "level": "SAZ",
      "num": 66,
      "title": "ENERGY IS EVERYWHERE!",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ67",
      "level": "SAZ",
      "num": 67,
      "title": "ENERGY IS EVERYWHERE!",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合",
      "band": "G2HIGH"
    },
    {
      "id": "SAZ68",
      "level": "SAZ",
      "num": 68,
      "title": "IS LIGHT GOOD OR BAD?",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合",
      "band": "GKLOW"
    },
    {
      "id": "SAZ69",
      "level": "SAZ",
      "num": 69,
      "title": "Energy on the Playground",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ70",
      "level": "SAZ",
      "num": 70,
      "title": "Heat in the Kitchen",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ71",
      "level": "SAZ",
      "num": 71,
      "title": "The Sound of Drums",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ72",
      "level": "SAZ",
      "num": 72,
      "title": "STATIC ELECTRICITY",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合",
      "band": "G2HIGH"
    },
    {
      "id": "SAZ73",
      "level": "SAZ",
      "num": 73,
      "title": "All About Light",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合",
      "band": "GKLOW"
    },
    {
      "id": "SAZ74",
      "level": "SAZ",
      "num": 74,
      "title": "All About Light",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ75",
      "level": "SAZ",
      "num": 75,
      "title": "All About Light",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合",
      "band": "G2HIGH"
    },
    {
      "id": "SAZ76",
      "level": "SAZ",
      "num": 76,
      "title": "Fireflies",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "GKLOW"
    },
    {
      "id": "SAZ77",
      "level": "SAZ",
      "num": 77,
      "title": "Color Blindness",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ78",
      "level": "SAZ",
      "num": 78,
      "title": "LIGHT from SPACE",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ79",
      "level": "SAZ",
      "num": 79,
      "title": "STAINED GLASS",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ80",
      "level": "SAZ",
      "num": 80,
      "title": "FUN HOUSE MIRRORS",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G2HIGH"
    },
    {
      "id": "SAZ81",
      "level": "SAZ",
      "num": 81,
      "title": "How Things Are Different",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "GKLOW"
    },
    {
      "id": "SAZ82",
      "level": "SAZ",
      "num": 82,
      "title": "How Things Are Different",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ83",
      "level": "SAZ",
      "num": 83,
      "title": "How Things Are Different",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G2HIGH"
    },
    {
      "id": "SAZ84",
      "level": "SAZ",
      "num": 84,
      "title": "I Made It!",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "GKLOW"
    },
    {
      "id": "SAZ85",
      "level": "SAZ",
      "num": 85,
      "title": "Let &#39;s Make Pictures!",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ86",
      "level": "SAZ",
      "num": 86,
      "title": "So Many Shoes!",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ87",
      "level": "SAZ",
      "num": 87,
      "title": "YUM! Yuck!",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ88",
      "level": "SAZ",
      "num": 88,
      "title": "HOMES AROUND THE WORLD",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G2HIGH"
    },
    {
      "id": "SAZ89",
      "level": "SAZ",
      "num": 89,
      "title": "MAGNETS",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合",
      "band": "GKLOW"
    },
    {
      "id": "SAZ90",
      "level": "SAZ",
      "num": 90,
      "title": "MAGNETS",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ91",
      "level": "SAZ",
      "num": 91,
      "title": "MAGNETS",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合",
      "band": "G2HIGH"
    },
    {
      "id": "SAZ92",
      "level": "SAZ",
      "num": 92,
      "title": "THINGS MOVE",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "GKLOW"
    },
    {
      "id": "SAZ93",
      "level": "SAZ",
      "num": 93,
      "title": "THINGS MOVE",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ94",
      "level": "SAZ",
      "num": 94,
      "title": "THINGS MOVE",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G2HIGH"
    },
    {
      "id": "SAZ95",
      "level": "SAZ",
      "num": 95,
      "title": "Magnets in Toys",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合",
      "band": "GKLOW"
    },
    {
      "id": "SAZ96",
      "level": "SAZ",
      "num": 96,
      "title": "Finding North",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ97",
      "level": "SAZ",
      "num": 97,
      "title": "Magnet Magic",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ98",
      "level": "SAZ",
      "num": 98,
      "title": "Magnetic Rocks",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G1MID"
    },
    {
      "id": "SAZ99",
      "level": "SAZ",
      "num": 99,
      "title": "Magnets in the Home",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合",
      "band": "G2HIGH"
    },
    {
      "id": "SAZ100",
      "level": "SAZ",
      "num": 100,
      "title": "Extreme Amphibians",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G3-4LOW"
    },
    {
      "id": "SAZ101",
      "level": "SAZ",
      "num": 101,
      "title": "Traveling Seeds",
      "type": "NF",
      "theme": "身体与健康",
      "lang": "综合",
      "band": "G3-4LOW"
    },
    {
      "id": "SAZ102",
      "level": "SAZ",
      "num": 102,
      "title": "Asthma",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4MID"
    },
    {
      "id": "SAZ103",
      "level": "SAZ",
      "num": 103,
      "title": "The  Mermaid's Purse",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4LOW"
    },
    {
      "id": "SAZ104",
      "level": "SAZ",
      "num": 104,
      "title": "Clever Camouflage",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G3-4MID"
    },
    {
      "id": "SAZ105",
      "level": "SAZ",
      "num": 105,
      "title": "The Heat of Kilauea",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合",
      "band": "G3-4LOW"
    },
    {
      "id": "SAZ106",
      "level": "SAZ",
      "num": 106,
      "title": "Ice Storms",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4MID"
    },
    {
      "id": "SAZ107",
      "level": "SAZ",
      "num": 107,
      "title": "Quicksand",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4LOW"
    },
    {
      "id": "SAZ108",
      "level": "SAZ",
      "num": 108,
      "title": "The Mole Machine",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合",
      "band": "G3-4LOW"
    },
    {
      "id": "SAZ109",
      "level": "SAZ",
      "num": 109,
      "title": "Making Music",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4MID"
    },
    {
      "id": "SAZ110",
      "level": "SAZ",
      "num": 110,
      "title": "Gases in Your World",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合",
      "band": "G3-4LOW"
    },
    {
      "id": "SAZ111",
      "level": "SAZ",
      "num": 111,
      "title": "Vertebrates of Madagasear",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G3-4MID"
    },
    {
      "id": "SAZ112",
      "level": "SAZ",
      "num": 112,
      "title": "Invertebrates",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G3-4"
    },
    {
      "id": "SAZ113",
      "level": "SAZ",
      "num": 113,
      "title": "The Wonderful World of Plants",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G3-4"
    },
    {
      "id": "SAZ114",
      "level": "SAZ",
      "num": 114,
      "title": "Deforestation",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4MID"
    },
    {
      "id": "SAZ115",
      "level": "SAZ",
      "num": 115,
      "title": "The Human Body",
      "type": "NF",
      "theme": "身体与健康",
      "lang": "综合",
      "band": "G3-4HIGH"
    },
    {
      "id": "SAZ116",
      "level": "SAZ",
      "num": 116,
      "title": "Skin: It Has You Covered",
      "type": "NF",
      "theme": "身体与健康",
      "lang": "综合",
      "band": "G3-4MID"
    },
    {
      "id": "SAZ117",
      "level": "SAZ",
      "num": 117,
      "title": "Life Cycles",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G3-4"
    },
    {
      "id": "SAZ118",
      "level": "SAZ",
      "num": 118,
      "title": "Veligers and Polyps",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4HIGH"
    },
    {
      "id": "SAZ119",
      "level": "SAZ",
      "num": 119,
      "title": "Habitats and the Environment",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G3-4HIGH"
    },
    {
      "id": "SAZ120",
      "level": "SAZ",
      "num": 120,
      "title": "Vertebrates",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G3-4"
    },
    {
      "id": "SAZ121",
      "level": "SAZ",
      "num": 121,
      "title": "Missions To Mars",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4LOW"
    },
    {
      "id": "SAZ122",
      "level": "SAZ",
      "num": 122,
      "title": "Campfire Science",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4MID"
    },
    {
      "id": "SAZ123",
      "level": "SAZ",
      "num": 123,
      "title": "Habitats Then And Now",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G3-4HIGH"
    },
    {
      "id": "SAZ124",
      "level": "SAZ",
      "num": 124,
      "title": "The Solar System",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G3-4HIGH"
    },
    {
      "id": "SAZ125",
      "level": "SAZ",
      "num": 125,
      "title": "Galileo's Moons",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4MID"
    },
    {
      "id": "SAZ126",
      "level": "SAZ",
      "num": 126,
      "title": "Clouds, Wind, and Storms",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4"
    },
    {
      "id": "SAZ127",
      "level": "SAZ",
      "num": 127,
      "title": "Minerals,Rocks and Soil",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4"
    },
    {
      "id": "SAZ128",
      "level": "SAZ",
      "num": 128,
      "title": "Minerals in a Computer",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4HIGH"
    },
    {
      "id": "SAZ129",
      "level": "SAZ",
      "num": 129,
      "title": "Simple and Complex Machines",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合",
      "band": "G3-4HIGH"
    },
    {
      "id": "SAZ130",
      "level": "SAZ",
      "num": 130,
      "title": "Waterwheels and Windmills",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4MID"
    },
    {
      "id": "SAZ131",
      "level": "SAZ",
      "num": 131,
      "title": "Heat Energy",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合",
      "band": "G3-4HIGH"
    },
    {
      "id": "SAZ132",
      "level": "SAZ",
      "num": 132,
      "title": "Sound",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合",
      "band": "G3-4HIGH"
    },
    {
      "id": "SAZ133",
      "level": "SAZ",
      "num": 133,
      "title": "Solids, Liquids, and Gases",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合",
      "band": "G3-4HIGH"
    },
    {
      "id": "SAZ134",
      "level": "SAZ",
      "num": 134,
      "title": "Changing States",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4MID"
    },
    {
      "id": "SAZ135",
      "level": "SAZ",
      "num": 135,
      "title": "Mammals of the Trees",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G3-4MID"
    },
    {
      "id": "SAZ136",
      "level": "SAZ",
      "num": 136,
      "title": "Our Wild Pets",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4MID"
    },
    {
      "id": "SAZ137",
      "level": "SAZ",
      "num": 137,
      "title": "Animals In Groups",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G3-4HIGH"
    },
    {
      "id": "SAZ138",
      "level": "SAZ",
      "num": 138,
      "title": "Silky Spiderwebs",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4LOW"
    },
    {
      "id": "SAZ139",
      "level": "SAZ",
      "num": 139,
      "title": "Anemones",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4MID"
    },
    {
      "id": "SAZ140",
      "level": "SAZ",
      "num": 140,
      "title": "Annelids: World of Worms",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4MID"
    },
    {
      "id": "SAZ141",
      "level": "SAZ",
      "num": 141,
      "title": "Invertebrate Fossils",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G3-4MID"
    },
    {
      "id": "SAZ142",
      "level": "SAZ",
      "num": 142,
      "title": "Mouthparts for Every Meal",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4HIGH"
    },
    {
      "id": "SAZ143",
      "level": "SAZ",
      "num": 143,
      "title": "How a Flower Gets lts Color",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G3-4MID"
    },
    {
      "id": "SAZ144",
      "level": "SAZ",
      "num": 144,
      "title": "Pollinators",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G3-4MID"
    },
    {
      "id": "SAZ145",
      "level": "SAZ",
      "num": 145,
      "title": "Succulents",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4MID"
    },
    {
      "id": "SAZ146",
      "level": "SAZ",
      "num": 146,
      "title": "Air Plants",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G3-4HIGH"
    },
    {
      "id": "SAZ147",
      "level": "SAZ",
      "num": 147,
      "title": "Exercise: Get Moving!",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4LOW"
    },
    {
      "id": "SAZ148",
      "level": "SAZ",
      "num": 148,
      "title": "Your Hardworking Heart",
      "type": "NF",
      "theme": "身体与健康",
      "lang": "综合",
      "band": "G3-4MID"
    },
    {
      "id": "SAZ149",
      "level": "SAZ",
      "num": 149,
      "title": "Sports lnjuries",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4HIGH"
    },
    {
      "id": "SAZ150",
      "level": "SAZ",
      "num": 150,
      "title": "Inheriting Stripes",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4MID"
    },
    {
      "id": "SAZ151",
      "level": "SAZ",
      "num": 151,
      "title": "Life in the Pouch",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G3-4MID"
    },
    {
      "id": "SAZ152",
      "level": "SAZ",
      "num": 152,
      "title": "Maggots, Grubs, and Nymphs",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4MID"
    },
    {
      "id": "SAZ153",
      "level": "SAZ",
      "num": 153,
      "title": "Pollywogs and Friends",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4MID"
    },
    {
      "id": "SAZ154",
      "level": "SAZ",
      "num": 154,
      "title": "Hot and Cold Reptiles",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G3-4HIGH"
    },
    {
      "id": "SAZ155",
      "level": "SAZ",
      "num": 155,
      "title": "Bloomin' Algae",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G3-4LOW"
    },
    {
      "id": "SAZ156",
      "level": "SAZ",
      "num": 156,
      "title": "Extreme Environments",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4MID"
    },
    {
      "id": "SAZ157",
      "level": "SAZ",
      "num": 157,
      "title": "Life Along the Colorado",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G3-4MID"
    },
    {
      "id": "SAZ158",
      "level": "SAZ",
      "num": 158,
      "title": "Clever Animals",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G3-4HIGH"
    },
    {
      "id": "SAZ159",
      "level": "SAZ",
      "num": 159,
      "title": "The Asteroid Belt",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4MID"
    },
    {
      "id": "SAZ160",
      "level": "SAZ",
      "num": 160,
      "title": "The Outer Solar System",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G3-4MID"
    },
    {
      "id": "SAZ161",
      "level": "SAZ",
      "num": 161,
      "title": "Comets",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4HIGH"
    },
    {
      "id": "SAZ162",
      "level": "SAZ",
      "num": 162,
      "title": "Fog",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4LOW"
    },
    {
      "id": "SAZ163",
      "level": "SAZ",
      "num": 163,
      "title": "Mountain Winds",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4MID"
    },
    {
      "id": "SAZ164",
      "level": "SAZ",
      "num": 164,
      "title": "Storm Chasers",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4MID"
    },
    {
      "id": "SAZ165",
      "level": "SAZ",
      "num": 165,
      "title": "Thunderstorms",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4HIGH"
    },
    {
      "id": "SAZ166",
      "level": "SAZ",
      "num": 166,
      "title": "Diamonds",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4MID"
    },
    {
      "id": "SAZ167",
      "level": "SAZ",
      "num": 167,
      "title": "Fossils",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4MID"
    },
    {
      "id": "SAZ168",
      "level": "SAZ",
      "num": 168,
      "title": "Moon Rocks",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4MID"
    },
    {
      "id": "SAZ169",
      "level": "SAZ",
      "num": 169,
      "title": "Let's Ride a Bike",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4MID"
    },
    {
      "id": "SAZ170",
      "level": "SAZ",
      "num": 170,
      "title": "Wrecking Ball vs. Strong Wall",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4MID"
    },
    {
      "id": "SAZ171",
      "level": "SAZ",
      "num": 171,
      "title": "Spaceship Motions and Deep, Deep Oceans",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4HIGH"
    },
    {
      "id": "SAZ172",
      "level": "SAZ",
      "num": 172,
      "title": "Get Warm, Stay Warm!",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4MID"
    },
    {
      "id": "SAZ173",
      "level": "SAZ",
      "num": 173,
      "title": "Science Friction",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4MID"
    },
    {
      "id": "SAZ174",
      "level": "SAZ",
      "num": 174,
      "title": "Get Cool, Stay Cool!",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4HIGH"
    },
    {
      "id": "SAZ175",
      "level": "SAZ",
      "num": 175,
      "title": "shhh!",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4LOW"
    },
    {
      "id": "SAZ176",
      "level": "SAZ",
      "num": 176,
      "title": "Animal Ears",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G3-4MID"
    },
    {
      "id": "SAZ177",
      "level": "SAZ",
      "num": 177,
      "title": "Seeing Sound",
      "type": "NF",
      "theme": "身体与健康",
      "lang": "综合",
      "band": "G3-4MID"
    },
    {
      "id": "SAZ178",
      "level": "SAZ",
      "num": 178,
      "title": "Animal Sounds",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G3-4HIGH"
    },
    {
      "id": "SAZ179",
      "level": "SAZ",
      "num": 179,
      "title": "Plasma: The Fourth State",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4MID"
    },
    {
      "id": "SAZ180",
      "level": "SAZ",
      "num": 180,
      "title": "Strange Fluids",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4MID"
    },
    {
      "id": "SAZ181",
      "level": "SAZ",
      "num": 181,
      "title": "Metallurgy",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G3-4HIGH"
    },
    {
      "id": "SAZ182",
      "level": "SAZ",
      "num": 182,
      "title": "Outside the Solar System",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G5-6"
    },
    {
      "id": "SAZ183",
      "level": "SAZ",
      "num": 183,
      "title": "Atmosphere and Climate",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6"
    },
    {
      "id": "SAZ184",
      "level": "SAZ",
      "num": 184,
      "title": "Force and Motion",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合",
      "band": "G5-6HIGH"
    },
    {
      "id": "SAZ185",
      "level": "SAZ",
      "num": 185,
      "title": "Micro Food Chains",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G5-6HIGH"
    },
    {
      "id": "SAZ186",
      "level": "SAZ",
      "num": 186,
      "title": "Plant Behavior",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G5-6MID"
    },
    {
      "id": "SAZ187",
      "level": "SAZ",
      "num": 187,
      "title": "Inside Living Things",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G5-6HIGH"
    },
    {
      "id": "SAZ188",
      "level": "SAZ",
      "num": 188,
      "title": "Incredible Eyes",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6LOW"
    },
    {
      "id": "SAZ189",
      "level": "SAZ",
      "num": 189,
      "title": "The Voyager Program",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6MID"
    },
    {
      "id": "SAZ190",
      "level": "SAZ",
      "num": 190,
      "title": "Earth's Changing Face",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6HIGH"
    },
    {
      "id": "SAZ191",
      "level": "SAZ",
      "num": 191,
      "title": "Water for the People",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6LOW"
    },
    {
      "id": "SAZ192",
      "level": "SAZ",
      "num": 192,
      "title": "Energy Resources",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合",
      "band": "G5-6HIGH"
    },
    {
      "id": "SAZ193",
      "level": "SAZ",
      "num": 193,
      "title": "The Chemistry of Art",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6MID"
    },
    {
      "id": "SAZ194",
      "level": "SAZ",
      "num": 194,
      "title": "Electricity and Magnetism",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合",
      "band": "G5-6HIGH"
    },
    {
      "id": "SAZ195",
      "level": "SAZ",
      "num": 195,
      "title": "Electrical Safety",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合",
      "band": "G5-6MID"
    },
    {
      "id": "SAZ196",
      "level": "SAZ",
      "num": 196,
      "title": "Food Chains and Food Webs",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G5-6HIGH"
    },
    {
      "id": "SAZ197",
      "level": "SAZ",
      "num": 197,
      "title": "Jurassic Food Chains",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G5-6MID"
    },
    {
      "id": "SAZ198",
      "level": "SAZ",
      "num": 198,
      "title": "Adaptations",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G5-6HIGH"
    },
    {
      "id": "SAZ199",
      "level": "SAZ",
      "num": 199,
      "title": "Darwin's Finches",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6MID"
    },
    {
      "id": "SAZ200",
      "level": "SAZ",
      "num": 200,
      "title": "Food and Nutrition",
      "type": "NF",
      "theme": "身体与健康",
      "lang": "综合",
      "band": "G5-6"
    },
    {
      "id": "SAZ201",
      "level": "SAZ",
      "num": 201,
      "title": "Mixing Matter",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合",
      "band": "G5-6HIGH"
    },
    {
      "id": "SAZ202",
      "level": "SAZ",
      "num": 202,
      "title": "The Water Cycle",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6HIGH"
    },
    {
      "id": "SAZ203",
      "level": "SAZ",
      "num": 203,
      "title": "Plants vs. Animals",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G5-6LOW"
    },
    {
      "id": "SAZ204",
      "level": "SAZ",
      "num": 204,
      "title": "Apex Predators",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G5-6MID"
    },
    {
      "id": "SAZ205",
      "level": "SAZ",
      "num": 205,
      "title": "Broken Chains",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6MID"
    },
    {
      "id": "SAZ206",
      "level": "SAZ",
      "num": 206,
      "title": "Emperors of the lce",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6LOW"
    },
    {
      "id": "SAZ207",
      "level": "SAZ",
      "num": 207,
      "title": "The Curious Case of the Peppered Moth",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6MID"
    },
    {
      "id": "SAZ208",
      "level": "SAZ",
      "num": 208,
      "title": "Dogs by Design",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6HIGH"
    },
    {
      "id": "SAZ209",
      "level": "SAZ",
      "num": 209,
      "title": "Hydroponics",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6LOW"
    },
    {
      "id": "SAZ210",
      "level": "SAZ",
      "num": 210,
      "title": "Eating insects",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G5-6MID"
    },
    {
      "id": "SAZ211",
      "level": "SAZ",
      "num": 211,
      "title": "Rainbow on Your Plate",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6MID"
    },
    {
      "id": "SAZ212",
      "level": "SAZ",
      "num": 212,
      "title": "Sugar: Too Much of a Good Thing?",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6MID"
    },
    {
      "id": "SAZ213",
      "level": "SAZ",
      "num": 213,
      "title": "How to Build a Tree High",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G5-6HIGH"
    },
    {
      "id": "SAZ214",
      "level": "SAZ",
      "num": 214,
      "title": "Parasites",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6MID"
    },
    {
      "id": "SAZ215",
      "level": "SAZ",
      "num": 215,
      "title": "Transport Systems in Plants",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G5-6MID"
    },
    {
      "id": "SAZ216",
      "level": "SAZ",
      "num": 216,
      "title": "You've Got a Lot of Nerve!",
      "type": "NF",
      "theme": "身体与健康",
      "lang": "综合",
      "band": "G5-6MID"
    },
    {
      "id": "SAZ217",
      "level": "SAZ",
      "num": 217,
      "title": "Fighting Infection!",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6HIGH"
    },
    {
      "id": "SAZ218",
      "level": "SAZ",
      "num": 218,
      "title": "Galaxies Far, Far Away",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6LOW"
    },
    {
      "id": "SAZ219",
      "level": "SAZ",
      "num": 219,
      "title": "Nebulae",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6MID"
    },
    {
      "id": "SAZ220",
      "level": "SAZ",
      "num": 220,
      "title": "Powerful Telescopes",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6MID"
    },
    {
      "id": "SAZ221",
      "level": "SAZ",
      "num": 221,
      "title": "Exoplanets",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6HIGH"
    },
    {
      "id": "SAZ222",
      "level": "SAZ",
      "num": 222,
      "title": "Seasons and Climate",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6LOW"
    },
    {
      "id": "SAZ223",
      "level": "SAZ",
      "num": 223,
      "title": "Curtains of Light",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合",
      "band": "G5-6MID"
    },
    {
      "id": "SAZ224",
      "level": "SAZ",
      "num": 224,
      "title": "El Nino and La Niña",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6MID"
    },
    {
      "id": "SAZ225",
      "level": "SAZ",
      "num": 225,
      "title": "Going Up!",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6MID"
    },
    {
      "id": "SAZ226",
      "level": "SAZ",
      "num": 226,
      "title": "Climate Change",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6HIGH"
    },
    {
      "id": "SAZ227",
      "level": "SAZ",
      "num": 227,
      "title": "Landslides",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6LOW"
    },
    {
      "id": "SAZ228",
      "level": "SAZ",
      "num": 228,
      "title": "Earthquakes",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6MID"
    },
    {
      "id": "SAZ229",
      "level": "SAZ",
      "num": 229,
      "title": "The Great Lakes",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6MID"
    },
    {
      "id": "SAZ230",
      "level": "SAZ",
      "num": 230,
      "title": "Waterfalls",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6MID"
    },
    {
      "id": "SAZ231",
      "level": "SAZ",
      "num": 231,
      "title": "What's Inside Planet Earth?",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6HIGH"
    },
    {
      "id": "SAZ232",
      "level": "SAZ",
      "num": 232,
      "title": "Hailstorms",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6MID"
    },
    {
      "id": "SAZ233",
      "level": "SAZ",
      "num": 233,
      "title": "Life in the Current",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G5-6MID"
    },
    {
      "id": "SAZ234",
      "level": "SAZ",
      "num": 234,
      "title": "The Cryosphere",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6MID"
    },
    {
      "id": "SAZ235",
      "level": "SAZ",
      "num": 235,
      "title": "Tsunami!",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6HIGH"
    },
    {
      "id": "SAZ236",
      "level": "SAZ",
      "num": 236,
      "title": "Soccer",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6LOW"
    },
    {
      "id": "SAZ237",
      "level": "SAZ",
      "num": 237,
      "title": "Gravity in the Solar System",
      "type": "NF",
      "theme": "生命世界",
      "lang": "综合",
      "band": "G5-6MID"
    },
    {
      "id": "SAZ238",
      "level": "SAZ",
      "num": 238,
      "title": "Racecars",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6MID"
    },
    {
      "id": "SAZ239",
      "level": "SAZ",
      "num": 239,
      "title": "Roller Coasters",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6MID"
    },
    {
      "id": "SAZ240",
      "level": "SAZ",
      "num": 240,
      "title": "Perpetual Motion: Fact or Fiction?",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合",
      "band": "G5-6HIGH"
    },
    {
      "id": "SAZ241",
      "level": "SAZ",
      "num": 241,
      "title": "Green Towns",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6LOW"
    },
    {
      "id": "SAZ242",
      "level": "SAZ",
      "num": 242,
      "title": "Before the Gas Pump",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合",
      "band": "G5-6MID"
    },
    {
      "id": "SAZ243",
      "level": "SAZ",
      "num": 243,
      "title": "Now We're Cooking!",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6MID"
    },
    {
      "id": "SAZ244",
      "level": "SAZ",
      "num": 244,
      "title": "River Power",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6MID"
    },
    {
      "id": "SAZ245",
      "level": "SAZ",
      "num": 245,
      "title": "Bioenergy",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合",
      "band": "G5-6HIGH"
    },
    {
      "id": "SAZ246",
      "level": "SAZ",
      "num": 246,
      "title": "Light",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合",
      "band": "G5-6"
    },
    {
      "id": "SAZ247",
      "level": "SAZ",
      "num": 247,
      "title": "Luminescence in Nature",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6LOW"
    },
    {
      "id": "SAZ248",
      "level": "SAZ",
      "num": 248,
      "title": "Light Pollution",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合",
      "band": "G5-6MID"
    },
    {
      "id": "SAZ249",
      "level": "SAZ",
      "num": 249,
      "title": "Light and Art",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合",
      "band": "G5-6MID"
    },
    {
      "id": "SAZ250",
      "level": "SAZ",
      "num": 250,
      "title": "Lighting Our World",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合",
      "band": "G5-6MID"
    },
    {
      "id": "SAZ251",
      "level": "SAZ",
      "num": 251,
      "title": "Lasers",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6HIGH"
    },
    {
      "id": "SAZ252",
      "level": "SAZ",
      "num": 252,
      "title": "The Science of Lemonade",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6LOW"
    },
    {
      "id": "SAZ253",
      "level": "SAZ",
      "num": 253,
      "title": "Dmitri's Table",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6MID"
    },
    {
      "id": "SAZ254",
      "level": "SAZ",
      "num": 254,
      "title": "The Science of Baking",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6MID"
    },
    {
      "id": "SAZ255",
      "level": "SAZ",
      "num": 255,
      "title": "Curious Marie Curie",
      "type": "NF",
      "theme": "社会与人文",
      "lang": "综合",
      "band": "G5-6HIGH"
    },
    {
      "id": "SAZ256",
      "level": "SAZ",
      "num": 256,
      "title": "Blackout!",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6LOW"
    },
    {
      "id": "SAZ257",
      "level": "SAZ",
      "num": 257,
      "title": "Battle of the Currents",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合",
      "band": "G5-6MID"
    },
    {
      "id": "SAZ258",
      "level": "SAZ",
      "num": 258,
      "title": "Remote Control",
      "type": "NF",
      "theme": "地球与宇宙",
      "lang": "综合",
      "band": "G5-6MID"
    },
    {
      "id": "SAZ259",
      "level": "SAZ",
      "num": 259,
      "title": "Setting Up Circuits",
      "type": "NF",
      "theme": "物质与能量",
      "lang": "综合",
      "band": "G5-6HIGH"
    }
  ],
  "bookNumbering": {
    "convention": "编号 = 级别 + RAZ 本级书目序号（Reading A-Z 官方排序 / 社群通用编号），与官方一致",
    "example": "A13 = Level A 第 13 本《Vegetables》；AA01 = Level aa 第 1 本《Farm Animals》",
    "lookupFormat": "查编号直接输入如 A13 / AA01；查书名输入英文书名（支持模糊匹配）",
    "note": "RAZ 官方不在封面印 'A13' 字样，但其在 Reading A-Z 书库中的本级顺序即此序号；社群书单（小花生等）与 Raz-Plus 导出均以此为编号。",
    "coverage": "本库已种子化 RAZ aa–Z2 全 29 级 + SAZ 科学分级共 2800+ 本真实书目。来源：aa–J 来自小花生社群书单（编号对齐 Reading A-Z 官方本级序号），K–Z2 来自 Reading A-Z 官方 leveled-books 页面，SAZ 来自两路：GK-G2 段小花生书单 userbooklist_297221（已回补 Saz35，99 本 Saz 01–99，band 为 GK/G1/G2 × low/mid/high）；G3-4 与 G5-6 段小花生 SAZ 官方系列页（SAZ G3-G4 82 本 + SAZ G5-G6 78 本 = 160 本），band 已由官方 Science A-Z unit 页（书名→Low/Mid/High 权威映射）回填三档，仅 10 本 Unit NF 同名三档书保留年级段 G3-4/G5-6。全段 SAZ 共 259 本，其中 249 本精确到 Low/Mid/High（96.1%）。编号约定：RAZ=级别+本级顺序号；SAZ=SAZ+全局序号（01–259），并带年级段 band。aa–C 人工精标，D–Z2 与 SAZ 关键词自动打标。",
    "seedLevels": [
      "aa",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "Z1",
      "Z2",
      "SAZ"
    ],
    "seedCount": 2810
  }
};

/* ---------- 工具 ---------- */
const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));
const esc = s => String(s).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
function typePill(t){
  if(t==='NF') return '<span class="pill b-nf">NF 科普</span>';
  if(t==='F')  return '<span class="pill b-f">F 虚构</span>';
  return '<span class="pill b-saz">SAZ</span>';
}
function stageClass(stage){
  if(stage.includes('GK')) return 'gk';
  if(stage.includes('G1')) return 'g1';
  if(stage.includes('G2')) return 'g2';
  if(stage.includes('G3')) return 'g3';
  if(stage.includes('G4')) return 'g4';
  return 'g5';
}
function themeOf(b){ return b.theme || (b.type==='SAZ' ? 'SAZ' : ''); }

function allBooks(){ return DATA.books; }

/* ---------- Tabs ---------- */
$$('.tab').forEach(t=>t.addEventListener('click',()=>{
  $$('.tab').forEach(x=>x.classList.remove('active'));
  $$('.panel').forEach(x=>x.classList.remove('active'));
  t.classList.add('active');
  $('#'+t.dataset.t).classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
}));

/* ---------- 总表 ---------- */
function renderMaster(){
  const lv=$('#mLevel').value, ty=$('#mType').value, th=$('#mTheme').value, q=$('#mSearch').value.trim().toLowerCase();
  let rows=allBooks();
  if(lv) rows=rows.filter(b=>b.level===lv);
  if(ty==='SAZ') rows=rows.filter(b=>b.type==='SAZ');
  else if(ty) rows=rows.filter(b=>b.type===ty);
  if(th) rows=rows.filter(b=>themeOf(b)===th);
  if(q) rows=rows.filter(b=>(b.title.toLowerCase().includes(q)||b.id.toLowerCase().includes(q)));
  rows.sort((a,b)=> (a.level===b.level? a.num-b.num : (a.level==='SAZ'?1:(b.level==='SAZ'?-1: a.level.localeCompare(b.level)))));
  const tb=$('#mTable tbody'); tb.innerHTML='';
  rows.forEach(b=>{
    const tr=document.createElement('tr');
    tr.innerHTML=`<td class="lv">${esc(b.id)}</td><td>${esc(b.level)}</td><td style="text-align:left">${esc(b.title)}${b.band?` <span class="tband">${esc(b.band)}</span>`:''}</td>`+
      `<td>${typePill(b.type)}</td><td>${esc(themeOf(b))}</td><td>${esc(b.lang)}</td>`;
    tr.onclick=()=>{ $('#lkInput').value=b.id; doLookup(); $$('.tab').forEach(x=>x.classList.remove('active')); $$('.panel').forEach(x=>x.classList.remove('active')); $('.tab[data-t="lookup"]').classList.add('active'); $('#lookup').classList.add('active'); window.scrollTo({top:0,behavior:'smooth'}); };
    tb.appendChild(tr);
  });
  $('#mCount').textContent='共 '+rows.length+' 本';
}
['mLevel','mType','mTheme','mSearch'].forEach(id=>{
  const el=$('#'+id); el.addEventListener('input',renderMaster); el.addEventListener('change',renderMaster);
});

/* ---------- 查 ---------- */
function findById(input){
  let s=input.trim().toUpperCase().replace(/\s+/g,'');
  if(!s) return null;
  let level=null, num=null;
  if(s.startsWith('AA')){level='aa'; num=parseInt(s.slice(2),10);}
  else if(s.startsWith('Z1')||s.startsWith('Z2')){level=s.slice(0,2).toLowerCase(); num=parseInt(s.slice(2),10);}
  else if(/^[A-Z]$/.test(s[0])){level=s[0].toLowerCase(); num=parseInt(s.slice(1),10);}
  if(level && !isNaN(num)){
    const b=DATA.books.find(x=>x.level===level && x.num===num);
    return b? [b] : [];
  }
  return null; // 不是编号格式
}
function doLookup(){
  const raw=$('#lkInput').value.trim();
  const out=$('#lkOut');
  if(!raw){ out.innerHTML='<span style="color:var(--muted)">请输入书名或编号。</span>'; return; }
  // 编号？
  const byId=findById(raw);
  if(byId!==null){
    if(byId.length===0){ out.innerHTML='<span style="color:var(--red)">未找到编号 '+esc(raw.toUpperCase())+' 对应的书。</span>'; return; }
    const b=byId[0];
    out.innerHTML=`<div class="big">${esc(b.id)}</div>`+
      `<div style="margin-top:8px"><b>${esc(b.title)}</b> · 级别 ${esc(b.level)} · ${typePill(b.type)}</div>`+
      `<div style="color:var(--muted);font-size:13px;margin-top:6px">主题族：${esc(b.theme)} ｜ 语言pattern：${esc(b.lang)}</div>`+
      `<div style="margin-top:10px"><button class="bkbtn" onclick="jumpRep('${b.id}')">→ 看「重复规则」续读推荐</button></div>`;
    return;
  }
  // 书名模糊
  const q=raw.toLowerCase();
  const hits=DATA.books.filter(b=>b.title.toLowerCase().includes(q));
  if(hits.length===0){ out.innerHTML='<span style="color:var(--red)">未找到包含「'+esc(raw)+'」的书名。试试更短的关键词，或切换到编号查询。</span>'; return; }
  out.innerHTML='<div style="margin-bottom:8px">找到 '+hits.length+' 本匹配：</div>'+hits.map(b=>
    `<div class="chip" style="cursor:pointer" onclick="jumpRep('${b.id}')"><b>${esc(b.id)}</b> · ${esc(b.title)} <span style="color:var(--muted)">(${esc(b.level)})</span></div>`
  ).join('');
}
function jumpRep(id){
  $$('.tab').forEach(x=>x.classList.remove('active')); $$('.panel').forEach(x=>x.classList.remove('active'));
  $('.tab[data-t="repeat"]').classList.add('active'); $('#repeat').classList.add('active');
  $('#repPick').value=id; renderRepPick(); renderRepeat(); window.scrollTo({top:0,behavior:'smooth'});
}
$('#lkBtn').addEventListener('click',doLookup);
$('#lkInput').addEventListener('keydown',e=>{if(e.key==='Enter')doLookup();});

/* ---------- 重复规则 ---------- */
function renderRepeat(){
  const id=$('#repPick').value; if(!id) return;
  const b=DATA.books.find(x=>x.id===id); if(!b) return;
  // 语言重复：同 lang，排除自身，优先同级别
  let langM, langNote;
  if(b.lang==='综合'){
    // 「综合」类无专属共享句式 → 改推同级别带明确句式的书，便于就地巩固具体语言点
    langM=DATA.books.filter(x=>x.lang!=='综合' && x.id!==b.id && x.level===b.level);
    langM.sort((a,c)=> a.num-c.num);
    langNote=`本书为「综合」类，无单一专属句式。下列<b>同级别（${esc(b.level)}）带明确句式</b>的书（共 ${langM.length} 本）可用来巩固具体的词汇/句式：`;
  } else {
    langM=DATA.books.filter(x=>x.lang===b.lang && x.id!==b.id);
    langM.sort((a,c)=> (a.level===b.level?-1:0) - (c.level===b.level?-1:0) || a.level.localeCompare(c.level) || a.num-c.num);
    langNote=`同属「${b.lang}」句式的书（${langM.length} 本）——换这几本可巩固相同词汇/句式`;
  }
  // 主题重复：同 theme，排除自身
  let thM=DATA.books.filter(x=>x.theme===b.theme && x.id!==b.id);
  const lvOrder=DATA.meta.levelOrder;
  const lvIdx=(l)=>lvOrder.indexOf(l);
  thM.sort((a,c)=> (lvIdx(a.level)-lvIdx(c.level)) || a.num-c.num);
  $('#repLangSub').innerHTML = langNote;
  $('#repThemeSub').textContent = `同属「${b.theme}」主题族的书（${thM.length} 本）——换这几本可深入同一主题`;
  const itemHtml=(x)=>`<div class="rep-item" onclick="jumpRep('${x.id}')"><span class="rid">${esc(x.id)}</span><span class="rt">${esc(x.title)}</span><span class="rl">${esc(x.level)}</span></div>`;
  const CAP=15;
  const renderList=(arr)=>{
    if(!arr.length) return null;
    const shown=arr.slice(0,CAP).map(itemHtml).join('');
    const more=arr.length>CAP? `<p class="empynote">（仅显示前 ${CAP} 本，共 ${arr.length} 本）</p>` : '';
    return shown+more;
  };
  $('#repLangList').innerHTML = renderList(langM) || `<p class="empynote">${b.lang==='综合'?'暂无同级别带明确句式的其他书。':'暂无同句式其他书（这本是该 pattern 的唯一代表）。'}</p>`;
  // 主题族按级别分 tab：默认「本级别+邻近」优先，其余用 tab 切换
  const curIdx=lvIdx(b.level);
  const nearLevels = curIdx===-1 ? [b.level] : (b.level==='SAZ' ? ['SAZ'] : [
    curIdx>0 ? lvOrder[curIdx-1] : null,
    lvOrder[curIdx],
    curIdx<lvOrder.length-1 ? lvOrder[curIdx+1] : null
  ].filter(Boolean));
  const tabs=[
    {key:'near', label:'本级别+邻近', levels:nearLevels},
    {key:'aac', label:'aa-C', levels:lvOrder.slice(0,4)},
    {key:'dj', label:'D-J', levels:lvOrder.slice(4,11)},
    {key:'kp', label:'K-P', levels:lvOrder.slice(11,17)},
    {key:'qzz', label:'Q-Z2', levels:lvOrder.slice(17,29)},
    {key:'saz', label:'SAZ', levels:['SAZ']},
    {key:'all', label:'全部', levels:lvOrder}
  ];
  const byTab=(key)=> thM.filter(x=> tabs.find(t=>t.key===key).levels.includes(x.level));
  const counts = Object.fromEntries(tabs.map(t=>[t.key, byTab(t.key).length]));
  const defaultKey = counts.near ? 'near' : tabs.find(t=>counts[t.key])?.key || 'all';
  const drawTheme=(key)=>{
    const arr=byTab(key);
    $('#repThemeList').innerHTML = renderList(arr) || '<p class="emptynote">该范围暂无同主题其他书。</p>';
    $$('#repThemeTabs .repTab').forEach(btn=>btn.classList.toggle('active', btn.dataset.key===key));
  };
  $('#repThemeTabs').innerHTML = tabs.map(t=>
    `<button class="repTab${t.key===defaultKey?' active':''}" data-key="${t.key}">${esc(t.label)}<small>${counts[t.key]}</small></button>`
  ).join('');
  $$('#repThemeTabs .repTab').forEach(btn=>{
    btn.addEventListener('click',()=> drawTheme(btn.dataset.key));
  });
  drawTheme(defaultKey);
  // 主题族说明（联动可合并主题）
  const fam=DATA.themes.mergeFamilies.find(f=>f.family.includes(b.theme));
  const box=$('#repFam');
  if(fam){
    box.className='detail show';
    box.innerHTML=`<h3>${esc(fam.family)} · 主题族说明</h3>`+
      `<div class="why">${esc(fam.why)}</div>`+
      `<div class="src"><b>来源：</b>${esc(fam.source)} ｜ <b>合并子题：</b>${fam.merge.map(esc).join('、')}</div>`+
      `<div style="margin-top:10px"><button class="bkbtn" onclick="jumpRep('${esc(b.id)}')">→ 查看本书的重复规则</button></div>`;
  } else box.className='detail';
}

/* ---------- 阅读方法 ---------- */
function steps(arr){ return arr.map(s=>`<div class="step"><div class="n">${s.step||''}</div><div class="body"><b>${esc(s.name)}</b><p>${esc(s.detail)}</p></div></div>`).join(''); }
function stepsNo(arr){ return arr.map(s=>`<div class="step"><div class="n">•</div><div class="body"><b>${esc(s.name)}</b><p>${esc(s.detail)}</p></div></div>`).join(''); }
function renderMethods(){
  const r=DATA.repetitionRules;
  $('#rPlacement').innerHTML=steps(r.placement);
  $('#rDaily').innerHTML=steps(r.dailyRoutine);
  $('#rPass').innerHTML=steps(r.threePass);
  $('#rAdv').innerHTML=steps(r.advance||[]);
  $('#rReview').innerHTML=steps(r.review||[]);
  $('#rPace').innerHTML=(r.pace||[]).map(p=>`<div class="mini"><b>${esc(p.name)}</b><p style="margin:4px 0 0;color:var(--muted);font-size:13px">${esc(p.detail)}</p></div>`).join('');
}

/* ---------- 级别总览 ---------- */
function renderLevels(){
  const tb=$('#lvTable tbody'); tb.innerHTML='';
  DATA.levels.forEach(l=>{
    const tr=document.createElement('tr');
    tr.innerHTML=`<td class="lv">${esc(l.level)}</td><td><span class="pill ${stageClass(l.stage)}">${esc(l.stage)}</span></td>`+
      `<td>${esc(l.grade)}</td><td>${esc(l.ages)}</td><td>${esc(l.lexile)}</td><td>${l.arLow}–${l.arHigh}</td>`+
      `<td><div class="bar"><i style="width:${l.nonFic}%"></i></div><span style="font-size:11px;color:var(--muted)">${l.nonFic}%</span></td>`+
      `<td>${esc(l.dra)}</td><td>${esc(l.fp)}</td><td>${esc(l.pageWords)}</td>`;
    tr.onclick=()=>{
      const d=$('#lvDetail'); const open=d.classList.contains('show');
      $$('#lvTable tbody tr').forEach(x=>x.classList.remove('sel'));
      if(open){d.classList.remove('show');return;}
      tr.classList.add('sel');
      d.className='detail show';
      d.innerHTML=`<h3>Level ${esc(l.level)} · ${esc(l.stage)}</h3><div class="kv">`+
        `<b>年级 / 年龄</b><span>${esc(l.grade)} · ${esc(l.ages)}</span>`+
        `<b>蓝思</b><span>${esc(l.lexile)}</span><b>AR</b><span>${l.arLow}–${l.arHigh}</span>`+
        `<b>DRA / F&amp;P</b><span>${esc(l.dra)} / ${esc(l.fp)}</span><b>非虚构占比</b><span>${l.nonFic}%</span>`+
        `<b>每页词</b><span>${esc(l.pageWords)}</span><b>本级别重点</b><span>${esc(l.focus)}</span></div>`;
    };
    tb.appendChild(tr);
  });
  const stages=[...new Set(DATA.levels.map(l=>l.stage))];
  const fs=$('#fStage'); stages.forEach(s=>{const o=document.createElement('option');o.value=s;o.textContent=s;fs.appendChild(o);});
  fs.addEventListener('change',filterLevels); $('#fSearch').addEventListener('input',filterLevels);
}
function filterLevels(){
  const s=$('#fStage').value, q=$('#fSearch').value.trim().toLowerCase();
  $$('#lvTable tbody tr').forEach((tr,i)=>{
    const l=DATA.levels[i];
    const ok=(!s||l.stage===s)&&(!q||l.level.toLowerCase().includes(q)||l.grade.toLowerCase().includes(q));
    tr.style.display=ok?'':'none';
  });
}

/* ---------- 分级对照 ---------- */
function renderAR(){
  const ri=$('#convRaz'); DATA.levels.forEach(l=>{const o=document.createElement('option');o.value=l.level;o.textContent='Level '+l.level+' ('+l.stage+')';ri.appendChild(o);});
  const cf=$('#convFrom');
  cf.innerHTML=Object.keys(CONV_MODES).map(k=>`<option value="${k}">${CONV_MODES[k].label}</option>`).join('');
  $('#convFrom').addEventListener('change',e=>{ $('#convFromIn').placeholder=CONV_MODES[e.target.value].ph; });
  $('#convFromIn').placeholder=CONV_MODES.ar.ph;
  $('#convFromBtn').addEventListener('click',()=>{
    const m=$('#convFrom').value, raw=$('#convFromIn').value.trim(), out=$('#convFromOut');
    if(!raw){out.innerHTML='<span style="color:var(--red)">请输入值</span>';return;}
    const cfg=CONV_MODES[m];
    let raz=null, label='';
    if(m==='ar'){
      const v=parseFloat(raw); if(!isFinite(v)){out.innerHTML='<span style="color:var(--red)">请输入数字 AR 值</span>';return;}
      raz=arToRaz(v); label='AR '+v;
    } else if(m==='dra'){
      const v=parseFloat(raw); if(!isFinite(v)){out.innerHTML='<span style="color:var(--red)">请输入数字 DRA 值</span>';return;}
      raz=draToRaz(v); label='DRA '+v;
    } else if(m==='ort'){
      const v=parseFloat(raw); if(!isFinite(v)){out.innerHTML='<span style="color:var(--red)">请输入数字牛津树级别</span>';return;}
      raz=ortToRaz(v); label='牛津树 '+v;
    } else {
      raz=cfg.toRaz(raw); label=cfg.label+' '+raw;
    }
    out.innerHTML=convCard(raz, label);
  });
  $('#convRazBtn').addEventListener('click',()=>{
    const l=DATA.levels.find(x=>x.level===$('#convRaz').value); const out=$('#convRazOut');
    out.innerHTML=`<div class="big">Level ${esc(l.level)} · ${esc(l.stage)}</div>
      <div style="margin-top:8px;display:flex;gap:14px;flex-wrap:wrap;font-size:13px">
        <span>👶 年龄 <b>${esc(l.ages)}岁</b></span>
        <span>📈 AR <b>${l.arLow}–${l.arHigh}</b></span>
        <span>📚 蓝思 <b>${esc(l.lexile)}</b></span>
        <span>🎯 DRA <b>${esc(l.dra)}</b></span>
        <span>📖 F&amp;P <b>${esc(l.fp)}</b></span>
        <span>🏫 年级 <b>${esc(l.grade)}</b></span>
      </div>
      <div style="margin-top:8px;display:flex;gap:14px;flex-wrap:wrap;font-size:13px">
        <span>🚀 红火箭 <b>${esc(razToX('红火箭',l.level))}</b></span>
        <span>🐱 大猫 <b>${esc(razToX('大猫',l.level))}</b></span>
        <span>📘 培生 <b>${esc(razToX('培生',l.level))}</b></span>
        <span>🟢 海尼曼 <b>${esc(razToX('海尼曼',l.level))}</b></span>
        <span>📕 兰登 <b>${esc(razToX('兰登',l.level))}</b></span>
        <span>📗 Wonders <b>${esc(razToX('Wonders',l.level))}</b></span>
        <span>💡 Power Up <b>${esc(razToX('Power Up',l.level))}</b></span>
      </div>
      <div style="margin-top:6px;display:flex;gap:14px;flex-wrap:wrap;font-size:13px">
        <span>🌍 国家地理 <b>${esc(razToX('国家地理',l.level))}</b></span>
        <span>📚 Usborne <b>${esc(razToX('Usborne',l.level))}</b></span>
        <span>🟣 PM <b>${esc(razToX('PM',l.level))}</b></span>
        <span>🔊 丽声 <b>${esc(razToX('丽声',l.level))}</b></span>
        <span>🐶 I Can Read <b>${esc(razToX('I Can Read',l.level))}</b></span>
        <span>🐧 企鹅 <b>${esc(razToX('企鹅',l.level))}</b></span>
      </div>
      <p style="margin:10px 0 0;font-size:13px;color:var(--muted)">${esc(l.focus)}</p>`;
  });
}

/* ---------- SAZ ---------- */
function renderSAZ(){
  const saz=DATA.books.filter(b=>b.level==='SAZ').sort((a,b)=>a.num-b.num);
  const domains=[...new Set(saz.map(b=>b.theme))].sort();
  const bands=[...new Set(saz.map(b=>b.band).filter(Boolean))].sort();
  $('#sazDomain').innerHTML='<option value="">全部主题域</option>'+domains.map(d=>`<option value="${esc(d)}">${esc(d)}</option>`).join('');
  $('#sazBand').innerHTML='<option value="">全部档位</option>'+bands.map(b=>`<option value="${esc(b)}">${esc(b)}</option>`).join('');
  function draw(){
    const q=$('#sazSearch').value.trim().toLowerCase();
    const d=$('#sazDomain').value, b=$('#sazBand').value;
    const list=saz.filter(x=>{
      const okD=!d||x.theme===d;
      const okB=!b||x.band===b;
      const okQ=!q||x.title.toLowerCase().includes(q)||x.id.toLowerCase().includes(q);
      return okD&&okB&&okQ;
    });
    $('#sazBody').innerHTML=list.map(x=>`<tr><td><code>${esc(x.id)}</code></td><td style="text-align:left">${esc(x.title)}</td><td><span class="pill b-saz">${esc(x.band||'')}</span></td><td>${esc(x.theme)}</td><td><span class="pill b-nf">NF</span></td></tr>`).join('')||'<tr><td colspan="5" style="color:var(--muted)">无匹配书目</td></tr>';
    $('#sazCount').textContent='共 '+list.length+' 本';
  }
  $('#sazSearch').addEventListener('input',draw);
  $('#sazDomain').addEventListener('change',draw);
  $('#sazBand').addEventListener('change',draw);
  draw();
}

/* ---------- 阅读阶梯 ---------- */
function parseLex(s){
  s=String(s).trim().toUpperCase().replace(/L$/,'');
  if(s.startsWith('BR')){ const m=s.match(/BR-?(\d+)/); return m? -parseInt(m[1]) : -1; }
  const n=parseInt(s.replace(/[^\d-]/g,''),10);
  return isFinite(n)? n : NaN;
}
function parseLevelLex(str){
  const p=String(str).split('-');
  return { lo: parseLex(p[0]), hi: parseLex(p[1]) };
}
const ORT_MAP=[
  {ort:1,raz:'aa'},{ort:1.5,raz:'A'},{ort:2,raz:'B'},{ort:3,raz:'C'},
  {ort:4,raz:'D'},{ort:5,raz:'E'},{ort:6,raz:'F'},{ort:7,raz:'G'},
  {ort:8,raz:'H'},{ort:9,raz:'I'},{ort:10,raz:'J'},{ort:11,raz:'K'},
  {ort:12,raz:'L'},{ort:13,raz:'M'},{ort:14,raz:'N'},{ort:15,raz:'O'},{ort:16,raz:'P'}
];
function ortToRaz(ort){
  if(!isFinite(ort)) return null;
  const ex=ORT_MAP.find(o=>o.ort===ort);
  if(ex) return ex.raz;
  if(ort<1) return DATA.meta.levelOrder[0];
  if(ort>29) return DATA.meta.levelOrder[28];
  if(Number.isInteger(ort) && ort>=1 && ort<=29) return DATA.meta.levelOrder[ort-1];
  return null;
}
function arToRaz(ar){
  let hit=DATA.levels.filter(l=>ar>=l.arLow && ar<=l.arHigh);
  if(hit.length) return hit[0].level;
  let best=null,bd=1e9;
  DATA.levels.forEach(l=>{ const m=(l.arLow+l.arHigh)/2; const d=Math.abs(m-ar); if(d<bd){bd=d;best=l;} });
  return best.level;
}
function lexToRaz(L){
  let hit=DATA.levels.filter(l=>{ const p=parseLevelLex(l.lexile); return L>=p.lo && L<=p.hi; });
  if(hit.length) return hit[0].level;
  if(L<0) return 'aa';
  return DATA.levels[DATA.levels.length-1].level;
}
function parseDra(s){
  const p=String(s).split('-').map(x=>parseInt(x.trim(),10)).filter(isFinite);
  if(!p.length) return {lo:NaN,hi:NaN};
  return {lo:p[0], hi:p[p.length-1]};
}
function draToRaz(dra){
  if(!isFinite(dra)) return null;
  let hit=DATA.levels.filter(l=>{ const p=parseDra(l.dra); return dra>=p.lo && dra<=p.hi; });
  if(hit.length) return hit[0].level;
  let best=null,bd=1e9;
  DATA.levels.forEach(l=>{ const p=parseDra(l.dra); if(isNaN(p.lo)) return; const m=(p.lo+p.hi)/2; const d=Math.abs(m-dra); if(d<bd){bd=d;best=l;} });
  return best?best.level:DATA.levels[0].level;
}
function fpToRaz(fp){
  fp=String(fp).trim().toUpperCase();
  const order=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','Z+'];
  const idx=order.indexOf(fp); if(idx<0) return null;
  let best=null,bd=1e9;
  DATA.levels.forEach(l=>{
    const vals=l.fp.split('-').map(x=>x.trim().toUpperCase()).filter(Boolean);
    const mids=vals.map(v=>order.indexOf(v)).filter(i=>i>=0);
    if(!mids.length) return;
    const m=mids.reduce((a,b)=>a+b,0)/mids.length;
    const d=Math.abs(m-idx); if(d<bd){bd=d;best=l;}
  });
  return best?best.level:DATA.levels[Math.min(idx,DATA.levels.length-1)].level;
}
/* ---------- 扩展分级体系（红火箭/大猫/培生/海尼曼/兰登/Wonders/Power Up）---------- */
/* 均为近似对应（综合各出版社官方分级表与公开级别相关性研究），仅供选书参考。*/
const XL={
  '红火箭':[ {lv:'Lilac',raz:'aa'},{lv:'Magenta',raz:'A'},{lv:'Red',raz:'B'},{lv:'Yellow',raz:'C'},{lv:'Blue',raz:'D'},{lv:'Green',raz:'E'},{lv:'Orange',raz:'F'},{lv:'Turquoise',raz:'G'},{lv:'Purple',raz:'H'},{lv:'Gold',raz:'I'},{lv:'Silver',raz:'J'},{lv:'Emerald',raz:'K'},{lv:'Ruby',raz:'L'},{lv:'Diamond',raz:'M'},{lv:'Sapphire',raz:'N'} ],
  '大猫':[ {lv:'Pink A',raz:'aa'},{lv:'Pink B',raz:'A'},{lv:'Red A',raz:'A'},{lv:'Red B',raz:'B'},{lv:'Yellow A',raz:'B'},{lv:'Yellow B',raz:'C'},{lv:'Blue A',raz:'C'},{lv:'Blue B',raz:'D'},{lv:'Green A',raz:'D'},{lv:'Green B',raz:'E'},{lv:'Orange A',raz:'E'},{lv:'Orange B',raz:'F'},{lv:'Turquoise A',raz:'F'},{lv:'Turquoise B',raz:'G'},{lv:'Purple A',raz:'G'},{lv:'Purple B',raz:'H'},{lv:'Gold A',raz:'H'},{lv:'Gold B',raz:'I'},{lv:'White A',raz:'I'},{lv:'White B',raz:'J'},{lv:'Lime A',raz:'J'},{lv:'Lime B',raz:'K'},{lv:'Copper',raz:'L'},{lv:'Topaz',raz:'M'},{lv:'Ruby',raz:'N'},{lv:'Emerald',raz:'O'},{lv:'Sapphire',raz:'P'},{lv:'Diamond',raz:'Q'},{lv:'Pearl',raz:'R'} ],
  '培生':[ {lv:'预备级',raz:'aa'},{lv:'1级',raz:'A'},{lv:'2级',raz:'B'},{lv:'3级',raz:'C'},{lv:'4级',raz:'D'},{lv:'5级',raz:'E'},{lv:'6级',raz:'F'},{lv:'7级',raz:'G'},{lv:'8级',raz:'H'},{lv:'9级',raz:'I'},{lv:'10级',raz:'J'},{lv:'11级',raz:'K'},{lv:'12级',raz:'L'} ],
  '海尼曼':[ {lv:'A',raz:'aa'},{lv:'B',raz:'A'},{lv:'C',raz:'B'},{lv:'D',raz:'C'},{lv:'E',raz:'D'},{lv:'F',raz:'E'},{lv:'G',raz:'F'},{lv:'H',raz:'G'},{lv:'I',raz:'H'},{lv:'J',raz:'I'},{lv:'K',raz:'J'},{lv:'L',raz:'K'},{lv:'M',raz:'L'},{lv:'N',raz:'M'},{lv:'O',raz:'N'},{lv:'P',raz:'O'},{lv:'Q',raz:'P'},{lv:'R',raz:'Q'},{lv:'S',raz:'R'},{lv:'T',raz:'S'},{lv:'U',raz:'T'},{lv:'V',raz:'U'},{lv:'W',raz:'V'},{lv:'X',raz:'W'},{lv:'Y',raz:'X'},{lv:'Z',raz:'Y'} ],
  '兰登':[ {lv:'Step 1',raz:'C'},{lv:'Step 2',raz:'E'},{lv:'Step 3',raz:'G'},{lv:'Step 4',raz:'I'},{lv:'Step 5',raz:'K'} ],
  'Wonders':[ {lv:'K',raz:'aa'},{lv:'1',raz:'D'},{lv:'2',raz:'K'},{lv:'3',raz:'Q'},{lv:'4',raz:'T'},{lv:'5',raz:'W'},{lv:'6',raz:'Z'} ],
  'Power Up':[ {lv:'Starter',raz:'aa'},{lv:'Level 1',raz:'C'},{lv:'Level 2',raz:'E'},{lv:'Level 3',raz:'G'},{lv:'Level 4',raz:'I'},{lv:'Level 5',raz:'K'},{lv:'Level 6',raz:'M'} ],
  '国家地理':[ {lv:'Pre-reader',raz:'aa'},{lv:'Level 1',raz:'C'},{lv:'Level 2',raz:'H'},{lv:'Level 3',raz:'L'},{lv:'Level 4',raz:'O'},{lv:'Level 5',raz:'S'} ],
  'Usborne':[ {lv:'Very First',raz:'aa'},{lv:'Level 1',raz:'D'},{lv:'Level 2',raz:'F'},{lv:'Level 3',raz:'H'},{lv:'Level 4',raz:'J'} ],
  'PM':[ {lv:'1',raz:'aa'},{lv:'2',raz:'A'},{lv:'3',raz:'B'},{lv:'4',raz:'C'},{lv:'5',raz:'D'},{lv:'6',raz:'E'},{lv:'7',raz:'F'},{lv:'8',raz:'G'},{lv:'9',raz:'H'},{lv:'10',raz:'I'},{lv:'11',raz:'J'},{lv:'12',raz:'K'},{lv:'13',raz:'L'},{lv:'14',raz:'M'},{lv:'15',raz:'N'},{lv:'16',raz:'O'},{lv:'17',raz:'P'},{lv:'18',raz:'Q'},{lv:'19',raz:'R'},{lv:'20',raz:'S'},{lv:'21',raz:'T'},{lv:'22',raz:'U'},{lv:'23',raz:'V'},{lv:'24',raz:'W'},{lv:'25',raz:'X'},{lv:'26',raz:'Y'},{lv:'27',raz:'Z'},{lv:'28',raz:'Z'},{lv:'29',raz:'Z'},{lv:'30',raz:'Z'} ],
  '丽声':[ {lv:'1级',raz:'aa'},{lv:'2级',raz:'C'},{lv:'3级',raz:'E'},{lv:'4级',raz:'G'},{lv:'5级',raz:'I'},{lv:'6级',raz:'K'} ],
  'I Can Read':[ {lv:'My First',raz:'aa'},{lv:'Level 1',raz:'C'},{lv:'Level 2',raz:'F'},{lv:'Level 3',raz:'I'},{lv:'Level 4',raz:'L'} ],
  '企鹅':[ {lv:'Easystarts',raz:'H'},{lv:'Level 1',raz:'K'},{lv:'Level 2',raz:'M'},{lv:'Level 3',raz:'O'},{lv:'Level 4',raz:'R'},{lv:'Level 5',raz:'T'},{lv:'Level 6',raz:'V'} ]
};
const CONV_MODES={
  ar:{label:'AR (ATOS)',ph:'如 1.5',toRaz:v=>arToRaz(v)},
  lex:{label:'蓝思 Lexile',ph:'如 200L / BR',toRaz:v=>lexToRaz(parseLex(v))},
  dra:{label:'DRA',ph:'如 16 / 40',toRaz:v=>draToRaz(v)},
  fp:{label:'F&P (Guided)',ph:'如 K / P',toRaz:v=>fpToRaz(v)},
  ort:{label:'牛津树 ORT',ph:'如 3 / 9',toRaz:v=>ortToRaz(v)},
  rr:{label:'红火箭',ph:'如 Magenta / Sapphire',toRaz:v=>xToRaz('红火箭',v)},
  bc:{label:'大猫 Big Cat',ph:'如 Pink A / Ruby',toRaz:v=>xToRaz('大猫',v)},
  pearson:{label:'培生 Pearson',ph:'如 预备级 / 5',toRaz:v=>xToRaz('培生',v)},
  heinemann:{label:'海尼曼',ph:'如 A / G',toRaz:v=>xToRaz('海尼曼',v)},
  randhouse:{label:'兰登',ph:'如 Step 1 / Step 4',toRaz:v=>xToRaz('兰登',v)},
  wonders:{label:'Wonders',ph:'如 K / 2 / 6',toRaz:v=>xToRaz('Wonders',v)},
  powerup:{label:'Power Up',ph:'如 Starter / Level 3',toRaz:v=>xToRaz('Power Up',v)},
  ng:{label:'国家地理',ph:'如 Pre-reader / Level 1',toRaz:v=>xToRaz('国家地理',v)},
  usborne:{label:'Usborne 图书馆',ph:'如 Very First / Level 1',toRaz:v=>xToRaz('Usborne',v)},
  pm:{label:'PM 分级',ph:'如 5 / 20',toRaz:v=>xToRaz('PM',v)},
  risheng:{label:'丽声',ph:'如 1级 / 4级',toRaz:v=>xToRaz('丽声',v)},
  icr:{label:'I Can Read',ph:'如 My First / Level 1',toRaz:v=>xToRaz('I Can Read',v)},
  penguin:{label:'企鹅 Penguin',ph:'如 Easystarts / Level 1',toRaz:v=>xToRaz('企鹅',v)}
};
function xNorm(s){ return String(s).trim().toLowerCase().replace(/\s+/g,' '); }
function xNum(s){ const m=String(s).match(/-?\d+(\.\d+)?/); return m?parseFloat(m[0]):NaN; }
function xToRaz(sys, raw){
  const list=XL[sys]; if(!list) return null;
  const q=xNorm(raw);
  let ex=list.find(o=>xNorm(o.lv)===q); if(ex) return ex.raz;
  const q2=q.replace(new RegExp('^(红火箭|大猫|培生|海尼曼|兰登|wonders|power up|国家地理|national geographic|usborne|pm|丽声|i ?can ?read|企鹅|penguin|'+sys.toLowerCase()+')',''),'').trim();
  const ex2=list.find(o=>xNorm(o.lv).replace(/^(level|lv|级)/,'')===q2.replace(/^(level|lv|级)/,''));
  if(ex2) return ex2.raz;
  const rn=xNum(raw);
  if(isFinite(rn)){
    let best=null,bd=1e9;
    list.forEach(o=>{ const on=xNum(o.lv); if(isFinite(on)){ const d=Math.abs(on-rn); if(d<bd){bd=d;best=o;} } });
    if(best) return best.raz;
  }
  return null;
}
function razToX(sys, raz){
  const list=XL[sys]; if(!list) return '—';
  const ex=list.find(o=>o.raz===raz); if(ex) return ex.lv;
  const ord=DATA.meta.levelOrder, idx=ord.indexOf(raz); if(idx<0) return '—';
  let best=null,bd=1e9;
  list.forEach(o=>{ const i=ord.indexOf(o.raz); if(i<0) return; const d=Math.abs(i-idx); if(d<bd){bd=d;best=o;} });
  return best?best.lv:'—';
}
function convCard(raz, srcLabel){
  if(raz===null || raz===undefined) return '<span class="emptynote">无法对应，请检查输入值是否在常见范围内。</span>';
  const lv=DATA.levels.find(l=>l.level===raz);
  if(!lv) return '<span class="emptynote">未找到级别 '+esc(raz)+'。</span>';
  return `<div><span class="big">RAZ ${esc(raz)}</span> <span style="color:var(--muted)">（来自 ${esc(srcLabel)}）</span></div>
   <div style="margin-top:8px;display:flex;gap:14px;flex-wrap:wrap;font-size:13px">
     <span>🎓 阶段 <b>${esc(lv.stage)}</b></span>
     <span>👶 年龄 <b>${esc(lv.ages)}岁</b></span>
     <span>📈 AR <b>${lv.arLow}–${lv.arHigh}</b></span>
     <span>📚 蓝思 <b>${esc(lv.lexile)}</b></span>
     <span>🎯 DRA <b>${esc(lv.dra)}</b></span>
     <span>📖 F&amp;P <b>${esc(lv.fp)}</b></span>
   </div>
   <p style="margin:10px 0 0;font-size:13px;color:var(--muted)">${esc(lv.focus)}</p>`;
}
function runConverter(){
  const mode=$('#convMode').value, out=$('#convOut');
  if(mode==='ort'){
    const v=parseFloat($('#convIn').value);
    if(!isFinite(v)){ out.innerHTML='<span class="emptynote">请输入牛津树级别（数字，如 1 或 3）。</span>'; return; }
    const raz=ortToRaz(v);
    out.innerHTML=raz? convCard(raz, '牛津树 第 '+v+' 级') : '<span class="emptynote">无法对应。</span>';
  } else if(mode==='ar'){
    const v=parseFloat($('#convIn').value);
    if(!isFinite(v)){ out.innerHTML='<span class="emptynote">请输入 AR 值（如 1.5）。</span>'; return; }
    out.innerHTML=convCard(arToRaz(v), 'AR '+v);
  } else {
    const raw=$('#convIn').value.trim();
    if(!raw){ out.innerHTML='<span class="emptynote">请输入蓝思值（如 200L 或 BR）。</span>'; return; }
    out.innerHTML=convCard(lexToRaz(parseLex(raw)), '蓝思 '+raw);
  }
}
function renderLadder(){
  const order=[]; const seen={};
  DATA.levels.forEach(l=>{ if(!seen[l.stage]){ seen[l.stage]=1; order.push(l.stage); } });
  const info={
    '启蒙 GK':{desc:'低幼启蒙：刚接触英文、能指认图画、会说零散单词的孩子。',ex:'例：4–6 岁、幼儿园小/中班；零基础，只会 hello / apple / 颜色词这类孤立词，需大量图片辅助。',cls:'band-gk'},
    '基础 G1':{desc:'基础起步：能读完整句子、开始理解简单情节的孩子。',ex:'例：5–8 岁、大班到小学一年级；能用英文说「我要吃苹果」「小狗在跑」这种完整句。',cls:'band-g1'},
    '进阶 G2':{desc:'进阶阅读：能独立读段落、理解因果关系的孩子。',ex:'例：7–9 岁、小学二三年级；能读小短文并回答「为什么」「然后呢」。',cls:'band-g2'},
    '学术 G3':{desc:'学术过渡：能读信息类文本、提取事实的孩子。',ex:'例：7–10 岁、小学三四年级；开始读科普/传记，能找出「主题是动物」这类信息。',cls:'band-g3'},
    '学术 G4':{desc:'学术拓展：能读章节书、处理多观点的孩子。',ex:'例：8–11 岁、小学四五年级；读《神奇树屋》类初章书。',cls:'band-g4'},
    '学术 G5':{desc:'学术高阶：接近母语同龄阅读水平的孩子。',ex:'例：9–11 岁、小学五六年级；能读纽伯瑞奖章节书、科普杂志。',cls:'band-g5'},
    '高阶 G5+':{desc:'流利精通：阅读接近成人非虚构、能自主研究的孩子。',ex:'例：10 岁+、小升初；读科普新闻、维基类长文，准备 KET/PET 及以上。',cls:'band-g5'}
  };
  const byStage={};
  DATA.levels.forEach(l=>{ (byStage[l.stage]=byStage[l.stage]||[]).push(l); });
  $('#ladderRungs').innerHTML=order.map(stage=>{
    const ls=byStage[stage], i=info[stage]||{desc:'',ex:'',cls:'band-g1'};
    const lvTags=ls.map(l=>`<span class="lvtag">${esc(l.level)}</span>`).join('');
    const aMin=Math.min(...ls.map(l=>parseInt(l.ages.split('-')[0])));
    const aMax=Math.max(...ls.map(l=>parseInt(l.ages.split('-')[1])));
    const lexLo=ls.map(l=>parseLevelLex(l.lexile).lo).sort((a,b)=>a-b)[0];
    const lexHi=ls.map(l=>parseLevelLex(l.lexile).hi).sort((a,b)=>b-a)[0];
    return `<div class="rung ${i.cls}">
      <div class="rh"><span class="rname">${esc(stage)}</span><span class="rlvs">${lvTags}</span></div>
      <p class="rdesc">${esc(i.desc)}</p>
      <p class="rex">${esc(i.ex)}</p>
      <div class="rmeta">
        <span>👶 年龄 <b>${aMin}–${aMax}岁</b></span>
        <span>📈 AR <b>${Math.min(...ls.map(l=>l.arLow))}–${Math.max(...ls.map(l=>l.arHigh))}</b></span>
        <span>📚 蓝思 <b>${lexLo<0?'BR':lexLo+'L'}–${lexHi}L</b></span>
        <span>🎓 ${esc(ls[0].grade)} 起</span>
      </div>
    </div>`;
  }).join('');

  $('#convMode').addEventListener('change',e=>{
    const m=e.target.value;
    if(m==='ort'){ $('#convHint').textContent='输入牛津树级别（如 3）：'; $('#convIn').placeholder='如 3'; }
    else if(m==='ar'){ $('#convHint').textContent='输入 AR 值（如 1.5）：'; $('#convIn').placeholder='如 1.5'; }
    else { $('#convHint').textContent='输入蓝思值（如 200L 或 BR）：'; $('#convIn').placeholder='如 200L'; }
  });
  $('#convBtn').addEventListener('click',runConverter);

  buildLevelCheck();
}
function buildLevelCheck(){
  const wrap=$('#lvCheck');
  wrap.innerHTML=DATA.meta.levelOrder.map(l=>`<label><input type="checkbox" value="${l}"><span>${l}</span></label>`).join('');
  wrap.querySelectorAll('input').forEach(cb=>cb.addEventListener('change',updateLevelCheck));
  $('#lvPresets').innerHTML=[
    ['aa–C · 低幼','aa,C'],['D–J · 基础','D,J'],['K–P · 进阶','K,P'],
    ['Q–T · 学术G3','Q,T'],['U–Z2 · 高阶','U,Z2'],['全选','ALL'],['清空','NONE']
  ].map(([t,r])=>`<button data-r="${r}">${t}</button>`).join('');
  $('#lvPresets').querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{
    const r=b.dataset.r, idx=DATA.meta.levelOrder;
    wrap.querySelectorAll('input').forEach(cb=>{
      let on=false;
      if(r==='ALL') on=true;
      else if(r==='NONE') on=false;
      else { const [a,z]=r.split(','); const ai=idx.indexOf(a), zi=idx.indexOf(z), ci=idx.indexOf(cb.value); on=(ci>=ai&&ci<=zi); }
      cb.checked=on;
    });
    updateLevelCheck();
  }));
}
function updateLevelCheck(){
  const wrap=$('#lvCheck');
  wrap.querySelectorAll('label').forEach(lab=>lab.classList.toggle('on',lab.querySelector('input').checked));
  const selected=DATA.meta.levelOrder.filter(l=>{ const cb=wrap.querySelector('input[value="'+l+'"]'); return cb&&cb.checked; });
  const out=$('#lvCheckOut');
  if(selected.length===0){ out.innerHTML='<p class="emptynote">勾选上方级别（或点预设区间），下方会聚合这些级别的「主题族分布」与书目清单。</p>'; return; }
  const books=DATA.books.filter(b=>selected.includes(b.level));
  const seeded=selected.filter(l=>DATA.books.some(b=>b.level===l));
  const fams=DATA.themes.mergeFamilies.map(f=>f.family);
  const counts={}; fams.forEach(f=>counts[f]=0);
  books.forEach(b=>{ const fam=DATA.themes.mergeFamilies.find(f=>f.family.includes(b.theme)); if(fam) counts[fam.family]++; });
  const maxC=Math.max(1,...fams.map(f=>counts[f]));
  const bars=fams.map(f=>{ const c=counts[f]; return `<div class="themebar"><span>${esc(f)}</span><div class="tb-track"><div class="tb-fill" style="width:${Math.round(c/maxC*100)}%"></div></div><span class="tb-c">${c}</span></div>`; }).join('');
  const list=books.slice().sort((a,b)=>a.level.localeCompare(b.level)||a.num-b.num).slice(0,40);
  const rows=list.map(b=>`<div class="chkrow" onclick="jumpRep('${b.id}')"><span class="cid">${esc(b.id)}</span><span class="ct">${esc(b.title)}</span><span class="cth">${esc(b.theme)}</span></div>`).join('');
  const noSeed=selected.filter(l=>!seeded.includes(l)).map(l=>`<span class="chip">${l}（暂无种子书目）</span>`).join('');
  out.innerHTML=`<div class="mini" style="margin-bottom:12px"><b>已选 ${selected.length} 级</b> · 含种子书目 <b>${books.length} 本</b>（来自 ${seeded.join(',')||'无'}）。${noSeed?`<div style="margin-top:8px">${noSeed}</div>`:''}</div>
    <h3 style="font-size:15px;margin:0 0 6px">📊 主题族分布（所选级别合集）</h3>
    <div class="themebars">${bars}</div>
    <h3 style="font-size:15px;margin:16px 0 6px">📚 书目清单（点任一行跳「重复规则」）</h3>
    <div class="chklist">${rows||'<p class="emptynote">所选级别暂无种子书目。</p>'}${books.length>40?`<p class="emptynote">仅显示前 40 本，共 ${books.length} 本。</p>`:''}</div>`;
}

/* ---------- 初始化下拉 & 渲染 ---------- */
const REP_PICK_TABS=DATA.meta.levelOrder.map(l=>({key:l, label:l==='aa'?'AA':l, levels:[l]})).concat([{key:'ALL', label:'全部', levels:DATA.meta.levelOrder}]);
function booksInRepGroup(g){ return DATA.books.filter(b=>g.levels.includes(b.level)).sort((a,c)=>(DATA.meta.levelOrder.indexOf(a.level)-DATA.meta.levelOrder.indexOf(c.level))||a.num-c.num); }
let currentRepPickKey='A';
function renderRepPick(selId){
  if(!selId) selId=$('#repPick').value;
  const b=selId? DATA.books.find(x=>x.id===selId) : null;
  if(b) $('#repPick').value=selId;
  $('#repPickInfo').innerHTML = b
    ? `当前：${esc(b.id)} · ${esc(b.title)} <span style="color:var(--muted);font-size:13px">(${esc(b.level)})</span>`
    : '— 请选择 —';
  const key=b? b.level : (currentRepPickKey||'A');
  currentRepPickKey=key;
  const arr=booksInRepGroup(REP_PICK_TABS.find(g=>g.key===key));
  $('#repPickTabs').innerHTML=REP_PICK_TABS.map(g=>{
    const n=booksInRepGroup(g).length;
    return `<button class="pickTab${g.key===key?' active':''}" data-key="${esc(g.key)}">${esc(g.label)}<small>${n}</small></button>`;
  }).join('');
  $$('#repPickTabs .pickTab').forEach(btn=>btn.addEventListener('click',()=>{ currentRepPickKey=btn.dataset.key; renderRepPick(); }));
  $('#repPickList').innerHTML=arr.map(x=>`
    <div class="rep-item${x.id===$('#repPick').value?' active':''}" data-id="${esc(x.id)}">
      <span class="rid">${esc(x.id)}</span><span class="rt">${esc(x.title)}</span><span class="rl">${esc(x.level)}</span>
    </div>`).join('');
  $$('#repPickList .rep-item').forEach(item=>item.addEventListener('click',()=>{ $('#repPick').value=item.dataset.id; renderRepPick(); renderRepeat(); }));
}
function initPickers(){
  // 重复规则页：默认 A02 并渲染 Tab 选书器
  const def=$('#repPick').value || 'A02';
  $('#repPick').value=def;
  renderRepPick();
  // 查找页：仍用长下拉（用户只在重复规则页抱怨下拉太长）
  const books=DATA.books.slice().sort((a,b)=> a.level.localeCompare(b.level)||a.num-b.num);
  const opts=books.map(b=>`<option value="${b.id}">${esc(b.id)} · ${esc(b.title)} (${esc(b.level)})</option>`).join('');
  $('#lkPick').innerHTML='<option value="">— 或下拉选书 —</option>'+opts;
  $('#lkPick').addEventListener('change',e=>{ if(e.target.value){ $('#lkInput').value=e.target.value; doLookup(); }});
}

function init(){
  // 级别下拉（从 levelOrder 动态填充，避免硬编码遗漏）
  DATA.meta.levelOrder.forEach(l=>{const o=document.createElement('option');o.value=l;o.textContent=l==='SAZ'?'SAZ 科学分级':l;$('#mLevel').appendChild(o);});
  // 主题族下拉
  const themes=[...new Set(DATA.books.map(b=>b.theme))];
  themes.forEach(t=>{const o=document.createElement('option');o.value=t;o.textContent=t;$('#mTheme').appendChild(o);});
  renderMaster(); renderMethods(); renderLevels(); renderAR(); renderSAZ(); initPickers(); renderLadder(); renderThemes(); renderNFPlan();
  // 默认选一本用于重复规则演示
  const def=DATA.books.find(b=>b.id==='A02')||DATA.books[0];
  if(def){ $('#repPick').value=def.id; renderRepPick(); renderRepeat(); }
}

/* ---------- 主题分类 ---------- */
function gotoThemes(){
  $$('.tab').forEach(x=>x.classList.remove('active')); $$('.panel').forEach(x=>x.classList.remove('active'));
  $('.tab[data-t="themes"]').classList.add('active'); $('#themes').classList.add('active'); window.scrollTo({top:0,behavior:'smooth'});
}
function famOfTheme(theme){return DATA.themes.mergeFamilies.find(f=>(f.family||'').includes(theme)||(f.merge||[]).includes(theme));}
function renderThemeBooks(lv){
  const books=lv==='ALL'?DATA.books.slice():DATA.books.filter(b=>b.level===lv);
  const html=DATA.themes.mergeFamilies.map(f=>{
    const list=books.filter(b=>{const fb=famOfTheme(b.theme);return fb&&fb.family===f.family;});
    list.sort((a,b)=>lv==='ALL'?(a.level===b.level?a.num-b.num:a.level.localeCompare(b.level)):a.num-b.num);
    const cnt=list.length;
    const rows=list.map(b=>`<div class="tbook" onclick="jumpRep('${esc(b.id)}')"><code>${esc(b.id)}</code><span class="tt">${esc(b.title)}</span><span class="tpill ${b.type==='NF'?'nf':(b.type==='F'?'f':'')}">${esc(b.type)}</span>${b.band?`<span class="tband">${esc(b.band)}</span>`:''}${lv==='ALL'?`<span class="tnum">${esc(b.level)}</span>`:''}</div>`).join('')||'<div style="color:var(--muted);font-size:12.5px;padding:6px 0">该级别此主题暂无种子书目。</div>';
    return `<div class="fam"><h3>${esc(f.family)} <span style="font-size:12px;color:var(--muted);font-weight:600">${cnt} 本</span></h3>`+
      `<div class="why">${esc(f.why)}</div>`+
      `<div class="tags">${f.merge.map(m=>`<span>${esc(m)}</span>`).join('')}</div>`+
      `<div class="src"><b>来源：</b>${esc(f.source)}</div>`+
      `<div style="margin-top:10px">${rows}</div></div>`;
  }).join('');
  $('#themeBooks').innerHTML=html;
}
function renderThemes(){
  // 级别选择器（只列有数据的级别）
  const present=new Set(DATA.books.map(b=>b.level));
  const lv=DATA.meta.levelOrder.filter(l=>present.has(l));
  const tabs=lv.concat(['ALL']);
  const tw=$('#themeLvTabs');
  tw.innerHTML=tabs.map((l,i)=>`<span class="tab${i===0?' active':''}" data-lv="${l}">${l==='ALL'?'全部':(l==='aa'?'AA':l)}</span>`).join('');
  tw.querySelectorAll('.tab').forEach(t=>t.onclick=()=>{tw.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));t.classList.add('active');renderThemeBooks(t.dataset.lv);});
  renderThemeBooks(tabs[0]);
  // 可合并主题（6 大族总览 + 联动重复规则）
  $('#famList').innerHTML=DATA.themes.mergeFamilies.map(f=>{
    const nf=f.nonfiction?'<span class="pill b-nf">非虚构</span>':'';
    return `<div class="fam"><h3>${esc(f.family)} ${nf}</h3>`+
      `<div class="why">${esc(f.why)}</div>`+
      `<div class="tags">${f.merge.map(m=>`<span>${esc(m)}</span>`).join('')}</div>`+
      `<div class="src"><b>来源：</b>${esc(f.source)}</div></div>`;
  }).join('');
}

/* ===== NF 优先主题周计划 ===== */
var NF_PRESETS = [
  {
    week: 1, fam: "生命世界", emoji: "🐾",
    intro: "动物与植物是低龄孩子最可能主动观察的对象。这一周把动物园、农场、昆虫、植物都变成「活教材」，用五感去碰真实世界，再回到书里巩固动物名称和简单句型。",
    days: [
      { d: 1, bookId: "AA60", kind: "book",
        activity: "去动物园/看动物绘本，玩「动物模仿秀」(学动物走/叫)；在家用动物玩偶排一排。",
        lang: "动物名称词 zoo / lion / monkey / elephant，+ 句型「I see a ___.」",
        draw: "画一种最喜欢的动物园动物，标英文名，做「我的动物园单词卡」。" },
      { d: 2, bookId: "A03", kind: "book",
        activity: "对比大猫(狮/虎)和小猫，找毛茸茸的图或视频；用纸箱做一只「猫窝」。",
        lang: "大小对比 big / little，猫科词 cat / lion / tiger。",
        draw: "画一只大猫，写「Big cat」。" },
      { d: 3, bookId: "A26", kind: "book",
        activity: "小区/公园「昆虫探索」，用放大镜看蚂蚁、瓢虫——只观察不抓。",
        lang: "句型「This is a ___.」(This is an insect.)，词 insect / bug。",
        draw: "画一只小虫，配「This is a bug.」" },
      { d: 4, bookId: "AA14", kind: "book",
        activity: "种一颗绿豆在湿棉花里，每天观察记录；或去菜园看真植物。",
        lang: "植物词 plant / leaf / flower / root，+ 「I see ___.」",
        draw: "画发芽的植物，标 root / leaf / flower。" },
      { d: 5, bookId: "A06", kind: "book",
        activity: "聊「谁住在这里」——树洞 / 洞穴 / 鸟窝；用积木搭一个「家」给小动物。",
        lang: "提问「What lives here?」，栖息地词 tree / cave / nest。",
        draw: "画一个动物的家，写「Home」。" },
    ],
  },
  {
    week: 2, fam: "地球与宇宙", emoji: "🌍",
    intro: "天气、季节、水——都是出门就能感知的科普。这一周用玩水盆、捡落叶、做天气表，把抽象的自然现象变成孩子手里的材料。",
    days: [
      { d: 1, bookId: "AA08", kind: "book",
        activity: "玩水感官盆(杯子/漏斗/海绵)，感受水的流动；聊「水在哪里」。",
        lang: "water / rain / river / ocean，+ 「I see water.」",
        draw: "画一片水(河/海)，标 water。" },
      { d: 2, bookId: "AA09", kind: "book",
        activity: "春游找新芽、花；用捡来的花瓣树叶做拼贴画。",
        lang: "spring / warm / flower / green。",
        draw: "画春天，写「Spring」。" },
      { d: 3, bookId: "AA12", kind: "book",
        activity: "聊冬天(冷/雪/穿厚)，没有雪就用蓝白手工做「雪人」。",
        lang: "winter / cold / snow / white。",
        draw: "画雪人，标 snow。" },
      { d: 4, bookId: "A12", kind: "book",
        activity: "做「一周天气表」，每天画晴/雨/云；对应书里春雨。",
        lang: "rain / cloud / wind / sun，+ 「It is ___.」",
        draw: "画今天的天气，写天气词。" },
      { d: 5, bookId: "AA13", kind: "book",
        activity: "海边/湖边捡石头贝壳(或水盆+蓝布模拟)，聊海洋动物。",
        lang: "ocean / fish / wave / shell。",
        draw: "画大海，标 ocean。" },
    ],
  },
  {
    week: 3, fam: "物质与能量", emoji: "⚡",
    intro: "提醒：aa+A 级里「物质与能量」主题的 NF 书只有 3 本(都是交通工具/力)，科普密度偏低。这一周用 3 本核心书打底，再加 2 个动手实验日(沉浮、磁铁)补上「做科学」的体验——正好对应你说的「科普词汇最稳扎稳打」。",
    days: [
      { d: 1, bookId: "A46", kind: "book",
        activity: "推/拉小车、滚球，感受「动起来」；聊什么让东西动。",
        lang: "move / push / pull / roll。",
        draw: "画一辆会动的小车，写「Move it!」" },
      { d: 2, bookId: "A37", kind: "book",
        activity: "玩玩具车，指认轮子/门/窗；用纸盒做一辆「车」贴轮子。",
        lang: "wheel / door / window / car。",
        draw: "画车，标 wheel / door。" },
      { d: 3, bookId: "A29", kind: "book",
        activity: "聊怎么去不同地方(走/车/公交)；用积木搭「路」和「站」。",
        lang: "go / car / bus / walk，+ 「We go ___.」",
        draw: "画一种交通工具，写它的名。" },
      { d: 4, bookId: null, kind: "exp", title: "实验日 · 沉与浮",
        activity: "碗里装水，放积木/石头/塑料玩具，先猜沉/浮再试。",
        lang: "float / sink / heavy / light。",
        draw: "画「浮起来」和「沉下去」两样东西。" },
      { d: 5, bookId: null, kind: "exp", title: "实验日 · 磁铁寻宝",
        activity: "用磁铁吸硬币/回形针/积木，分「能吸/不能吸」。",
        lang: "magnet / metal / stick。",
        draw: "画磁铁和它能吸的东西。" },
    ],
  },
  {
    week: 4, fam: "身体与健康", emoji: "🧍",
    intro: "身体、五感、卫生——最贴近孩子自己的科普。这一周用照镜子、味觉小尝、洗手步骤图，把「我的身体」变成可说的英语+可画的认字素材。",
    days: [
      { d: 1, bookId: "A74", kind: "book",
        activity: "唱/指「头肩膝趾」；照镜子指身体部位。",
        lang: "句型「My ___」(My head / arms / legs)，body 词。",
        draw: "画自己，标身体部位(头/手/脚)。" },
      { d: 2, bookId: "A86", kind: "book",
        activity: "照镜子认五官；用面团/黏土做一张脸。",
        lang: "句型「My ___」(My eyes / nose / mouth)，face 词。",
        draw: "画自画像，标 eyes / nose / mouth。" },
      { d: 3, bookId: "A52", kind: "book",
        activity: "视觉游戏——看彩色卡/窗外，说「This looks red / big」。",
        lang: "句型「This looks ___.」，看/颜色词 look / red / blue。",
        draw: "画一样「看起来___」的东西。" },
      { d: 4, bookId: "A41", kind: "book",
        activity: "味觉小尝(苹果/柠檬/盐)，说甜/酸/咸——注意不过敏。",
        lang: "句型「This tastes ___.」，sweet / sour / salty。",
        draw: "画一种味道食物，写味道词。" },
      { d: 5, bookId: "A67", kind: "book",
        activity: "洗手步骤图(湿/搓/冲/擦)；给玩具「洗澡」区分干净/脏。",
        lang: "clean / dirty，+ 「Clean, not dirty.」反义词。",
        draw: "画「干净的手」和「脏的手」。" },
    ],
  },
  {
    week: 5, fam: "社会与人文", emoji: "👥",
    intro: "学校、超市、地铁、家——孩子每天穿行其间的「社会地图」。这一周用角色扮演和观察，把地点词和「I / We」句型变成生活用语。",
    days: [
      { d: 1, bookId: "AA61", kind: "book",
        activity: "角色扮演「上学」——书包/老师/同学；画自己的学校。",
        lang: "school / teacher / friend / book。",
        draw: "画学校，标 school。" },
      { d: 2, bookId: "AA59", kind: "book",
        activity: "超市「购物清单」游戏——画 3 样要买的，找货架；数一数。",
        lang: "supermarket / food / cart，+ 物品英文名。",
        draw: "画购物清单(3 样)，标英文名。" },
      { d: 3, bookId: "AA68", kind: "book",
        activity: "坐地铁/公交观察站名和车厢；用纸条做「车票」。",
        lang: "subway / train / station / stop。",
        draw: "画一站地铁，标 station。" },
      { d: 4, bookId: "A47", kind: "book",
        activity: "聊「我们住哪里」——楼层/邻居/电梯；用积木搭楼房。",
        lang: "building / floor / home。",
        draw: "画自己的家，标 home。" },
      { d: 5, bookId: "A73", kind: "book",
        activity: "存钱罐游戏——投币说「I save money」；聊想买什么。",
        lang: "句型「I ___」(I save / I buy)，money / coin。",
        draw: "画存钱罐，写「I save」。" },
    ],
  },
  {
    week: 6, fam: "思维与创意", emoji: "🔢",
    intro: "颜色、数字、方位、形状、反义词——这些是 RAZ 在低级别里 NF 密度最高的一类(49 本)。这一周把它们全变成「出门就能找」的游戏，词汇最稳扎稳打。",
    days: [
      { d: 1, bookId: "AA26", kind: "book",
        activity: "自然/家里「找红色」——红叶/红花/红车；收集红色物。",
        lang: "red，+ 颜色词(红/red)。",
        draw: "画一样红色的东西，标 red。" },
      { d: 2, bookId: "AA29", kind: "book",
        activity: "数步数/数石头/数豆荚——从 1 数起；用手指比「1」。",
        lang: "one / two / three… 数字，+ 数数。",
        draw: "画 1 个苹果，写「One」。" },
      { d: 3, bookId: "AA03", kind: "book",
        activity: "身体游戏——jump over / under 枕头；用玩具做「越过/钻过」。",
        lang: "over / under / in / out 方位词。",
        draw: "画「跳过」一个东西。" },
      { d: 4, bookId: "A16", kind: "book",
        activity: "自然里找形状——圆石/方砖/三角叶；拓印形状。",
        lang: "circle / square / triangle，+ 形状词。",
        draw: "画一个自然里的形状。" },
      { d: 5, bookId: "A94", kind: "book",
        activity: "反义词动作——big/small、up/down、in/out；照镜子做对比。",
        lang: "big/little、up/down、hot/cold 反义词对。",
        draw: "画一对反义词(大/小)。" },
    ],
  },
];
function nfCoreOf(weeks){
  var s=new Set();
  weeks.forEach(function(w){ w.days.forEach(function(d){ if(d.bookId) s.add(d.bookId); }); });
  return s;
}
var NF_FAMILIES = [
  {key:"生命世界", emoji:"🐾", intro:"动物与植物是低龄孩子最可能主动观察的对象。这一周把动物园、农场、昆虫、植物都变成「活教材」，用五感去碰真实世界，再回到书里巩固动物名称和简单句型。"},
  {key:"地球与宇宙", emoji:"🌍", intro:"天气、季节、水——都是出门就能感知的科普。这一周用玩水盆、捡落叶、做天气表，把抽象的自然现象变成孩子手里的材料。"},
  {key:"物质与能量", emoji:"⚡", intro:"力、运动、交通工具、沉浮、磁铁——用推/拉/滚/吸的动手体验，把「物理」变成孩子能摸到的现象。"},
  {key:"身体与健康", emoji:"🧍", intro:"身体、五感、卫生——最贴近孩子自己的科普。这一周用照镜子、味觉小尝、洗手步骤图，把「我的身体」变成可说的英语+可画的认字素材。"},
  {key:"社会与人文", emoji:"👥", intro:"学校、超市、地铁、家——孩子每天穿行其间的「社会地图」。这一周用角色扮演和观察，把地点词和「I / We」句型变成生活用语。"},
  {key:"思维与创意", emoji:"🔢", intro:"颜色、数字、方位、形状、反义词——这些是 RAZ 在低级别里 NF 密度最高的一类。这一周把它们全变成「出门就能找」的游戏，词汇最稳扎稳打。"}
];
function nfActivity(fam, b){
  if(b) return "读《"+b.title+"》，结合真实观察或实物做拓展；鼓励孩子用书中句式描述看到的东西。";
  var acts={"生命世界":"观察一种动植物，画下来并标英文名。","地球与宇宙":"做一个天气/水/季节的感官小实验或自然观察。","物质与能量":"用身边材料做推/拉/沉/浮/磁铁类小实验。","身体与健康":"照镜子/尝味道/做洗手图，把身体部位变成可说的英语。","社会与人文":"角色扮演一个社会场景（学校/超市/车站），用英语说 1-2 句。","思维与创意":"出门找颜色/数字/形状/反义词，画一对并标英文。"};
  return acts[fam]||"围绕主题做一项观察或手工，并画出关键事物。";
}
function nfLang(fam, b){ return b ? (b.lang||"主题词汇与书中句式") : "主题核心词（见活动）"; }
function nfDraw(fam, b){ return b ? "画《"+b.title+"》里的关键事物，写 1-2 个英文词。" : "画今天活动里最重要的一个事物，标英文。"; }
function nfExpTitle(fam){
  var titles={"生命世界":"观察小动物或植物","地球与宇宙":"天气/水感官盆","物质与能量":"沉与浮 · 磁铁","身体与健康":"五感小游戏","社会与人文":"社会场景角色扮演","思维与创意":"颜色/数字/形状寻宝"};
  return "实验日 · "+(titles[fam]||"主题探索");
}
function nfBuildWeeks(fromLv,toLv){
  if(fromLv==='aa' && toLv==='A') return NF_PRESETS;
  var order=DATA.meta.levelOrder;
  var f=order.indexOf(fromLv), t=order.indexOf(toLv);
  if(f<0||t<0||f>t) return NF_PRESETS;
  var allowed=order.slice(f,t+1);
  var nf=DATA.books.filter(function(b){ return b.type==='NF' && allowed.indexOf(b.level)>=0; });
  return NF_FAMILIES.map(function(fam,i){
    var list=nf.filter(function(b){ var g=famOfTheme(b.theme); return g && g.family.indexOf(fam.key)>=0; }).sort(function(a,b){
      var ai=order.indexOf(a.level), bi=order.indexOf(b.level);
      if(ai!==bi) return ai-bi;
      return a.num-b.num;
    });
    var days=[];
    for(var d=1; d<=5; d++){
      var bk=list[d-1];
      if(bk){ days.push({d:d, bookId:bk.id, kind:'book', activity:nfActivity(fam.key,bk), lang:nfLang(fam.key,bk), draw:nfDraw(fam.key,bk)}); }
      else { days.push({d:d, kind:'exp', title:nfExpTitle(fam.key), activity:nfActivity(fam.key,null), lang:nfLang(fam.key,null), draw:nfDraw(fam.key,null)}); }
    }
    return {week:i+1, fam:fam.key, emoji:fam.emoji, intro:fam.intro, days:days};
  });
}
var NF_BOOKS = Object.fromEntries(DATA.books.map(function(b){ return [b.id,b]; }));
function nfExtRead(fam, core){
  return DATA.books.filter(function(b){ var g=famOfTheme(b.theme); return b.type==='NF' && g && g.family.indexOf(fam)>=0 && !core.has(b.id); }).sort(function(a,b){ return (a.level===b.level?a.num-b.num:a.level.localeCompare(b.level)); });
}
function nfDayCard(day){
  if(day.kind==='exp'){
    return '<div class="day exp"><div class="dh"><span class="dnum">Day '+day.d+'</span><span class="dtitle">🔬 '+esc(day.title)+'</span><span class="dtag exp">动手实验</span></div>'+
      '<div class="drow"><b>🌿 活动</b><span>'+esc(day.activity)+'</span></div>'+
      '<div class="drow"><b>🔤 语言点</b><span>'+esc(day.lang)+'</span></div>'+
      '<div class="drow"><b>✏️ 画+话认字</b><span>'+esc(day.draw)+'</span></div></div>';
  }
  var b=NF_BOOKS[day.bookId];
  if(!b) return '<div class="day"><div class="dh"><span class="dnum">Day '+day.d+'</span><span class="dtitle">(书目未找到)</span></div></div>';
  var tag=b.type==='NF'?'<span class="dtag nf">NF 科普</span>':'<span class="dtag f">F 虚构</span>';
  return '<div class="day"><div class="dh"><span class="dnum">Day '+day.d+'</span><span class="dtitle">'+esc(b.title)+'</span>'+tag+'<span class="dlv">'+esc(b.level)+' · '+esc(b.lang)+'</span></div>'+
    '<div class="drow"><b>📖 今日书</b><span><code>'+esc(b.id)+'</code> '+esc(b.title)+'（Level '+esc(b.level)+'，句式：'+esc(b.lang)+'）</span></div>'+
    '<div class="drow"><b>🌿 活动</b><span>'+esc(day.activity)+'</span></div>'+
    '<div class="drow"><b>🔤 语言点</b><span>'+esc(day.lang)+'</span></div>'+
    '<div class="drow"><b>✏️ 画+话认字</b><span>'+esc(day.draw)+'</span></div></div>';
}
function nfWeekPanel(w, core){
  var ext=nfExtRead(w.fam, core);
  var extHtml=ext.length? '<div class="ext"><b>📚 本族延伸阅读（'+ext.length+' 本，从总表挑）：</b> '+ext.map(function(b){ return '<code>'+esc(b.id)+'</code> '+esc(b.title); }).join('、')+'</div>' : '<div class="ext">本族在所选级别内 NF 书已全部纳入本周核心。</div>';
  return '<div class="nf-week" id="nfW'+w.week+'"><div class="whead">'+w.emoji+' 第 '+w.week+' 周 · '+esc(w.fam)+'</div><p class="wintro">'+esc(w.intro)+'</p><div class="days">'+w.days.map(nfDayCard).join('')+'</div>'+extHtml+'</div>';
}
function renderNFPlan(){
  var levels=DATA.meta.levelOrder.filter(function(l){ return l!=='SAZ'; });
  var fromSel=$('#nfFrom'), toSel=$('#nfTo');
  if(!fromSel.options.length){
    levels.forEach(function(l){ var o=document.createElement('option'); o.value=l; o.textContent=l==='aa'?'AA':l; fromSel.appendChild(o); });
    levels.forEach(function(l){ var o=document.createElement('option'); o.value=l; o.textContent=l==='aa'?'AA':l; toSel.appendChild(o); });
    fromSel.value='aa'; toSel.value='A';
  }
  var fromLv=fromSel.value, toLv=toSel.value;
  var weeks=nfBuildWeeks(fromLv,toLv);
  var core=nfCoreOf(weeks);
  var note=(fromLv==='aa' && toLv==='A')?'默认展示 aa+A 的精选周计划。':'动态生成：'+fromLv+'–'+toLv+' 范围内，每个主题族优先取 5 本 NF 书，不足处用实验日补足。';
  $('#nfRangeNote').textContent=note;
  var tabs=weeks.map(function(w){ return '<button class="nf-tab" data-w="'+w.week+'">'+w.emoji+' 第'+w.week+'周 '+esc(w.fam)+'</button>'; }).join('');
  document.getElementById('nfTabs').innerHTML=tabs;
  document.getElementById('nfOv').innerHTML=weeks.map(function(w){
    var books=w.days.map(function(d){
      if(d.kind==='exp') return '<span class="mini-exp">🔬'+esc(d.title)+'</span>';
      var b=NF_BOOKS[d.bookId]; return b?'<code>'+esc(b.id)+'</code> '+esc(b.title):'(未找到)';
    }).join(' <span class="sep">·</span> ');
    return '<tr><td class="wk">'+w.emoji+' W'+w.week+'</td><td class="wf">'+esc(w.fam)+'</td><td class="wb">'+books+'</td></tr>';
  }).join('');
  document.getElementById('nfWeeks').innerHTML=weeks.map(function(w){ return nfWeekPanel(w,core); }).join('');
  var tabEls=document.querySelectorAll('#nfPlan .nf-tab');
  tabEls.forEach(function(t){
    t.addEventListener('click',function(){
      tabEls.forEach(function(x){ x.classList.remove('active'); });
      document.querySelectorAll('#nfPlan .nf-week').forEach(function(x){ x.classList.remove('active'); });
      t.classList.add('active');
      document.getElementById('nfW'+t.dataset.w).classList.add('active');
      window.scrollTo({top:document.querySelector('#nfPlan .nf-tabs').offsetTop-8,behavior:'smooth'});
    });
  });
  if(tabEls[0]) tabEls[0].classList.add('active');
  var first=document.getElementById('nfW'+weeks[0].week); if(first) first.classList.add('active');
  if(!$('#nfPrintBtn').dataset.bound){
    $('#nfPrintBtn').addEventListener('click',function(){
      document.body.classList.add('print-nf'); window.print();
      setTimeout(function(){ document.body.classList.remove('print-nf'); },400);
    });
    $('#nfPrintBtn').dataset.bound='1';
  }
  if(!$('#nfRebuild').dataset.bound){
    $('#nfRebuild').addEventListener('click',function(){
      renderNFPlan();
      window.scrollTo({top:document.querySelector('#nfPlan .controls').offsetTop-8,behavior:'smooth'});
    });
    $('#nfRebuild').dataset.bound='1';
  }
}
init();
