// 生成「NF 优先主题周计划」HTML —— 与 raz_library.json 对齐
// 书本标题/级别/句式自动从库取；活动/语言点/认字贴士为人工编写的适龄内容。
const fs = require("fs");
const DATA = JSON.parse(fs.readFileSync("raz_library.json", "utf8"));
const bookById = Object.fromEntries(DATA.books.map(b => [b.id, b]));

// 每周一个主题族；days: bookId 为 null 表示「动手实验日」(kind:'exp')
const WEEKS = [
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

// 计算每个族的「延伸阅读」：该族 NF 书中未被选为核心的书
const coreIds = new Set(WEEKS.flatMap(w => w.days.filter(d => d.bookId).map(d => d.bookId)));
function extRead(fam) {
  return DATA.books.filter(b => b.type === "NF" && b.theme === fam && !coreIds.has(b.id))
    .sort((a, b) => a.level.localeCompare(b.level) || a.num - b.num);
}

const famByWeek = {};
WEEKS.forEach(w => famByWeek[w.fam] = w);

function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

function dayCard(day) {
  if (day.kind === "exp") {
    return `<div class="day exp">
      <div class="dh"><span class="dnum">Day ${day.d}</span><span class="dtitle">🔬 ${esc(day.title)}</span><span class="dtag exp">动手实验</span></div>
      <div class="drow"><b>🌿 活动</b><span>${esc(day.activity)}</span></div>
      <div class="drow"><b>🔤 语言点</b><span>${esc(day.lang)}</span></div>
      <div class="drow"><b>✏️ 画+话认字</b><span>${esc(day.draw)}</span></div>
    </div>`;
  }
  const b = bookById[day.bookId];
  const tag = b.type === "NF" ? `<span class="dtag nf">NF 科普</span>` : `<span class="dtag f">F 虚构</span>`;
  return `<div class="day">
    <div class="dh"><span class="dnum">Day ${day.d}</span><span class="dtitle">${esc(b.title)}</span>${tag}<span class="dlv">${esc(b.level)} · ${esc(b.lang)}</span></div>
    <div class="drow"><b>📖 今日书</b><span><code>${esc(b.id)}</code> ${esc(b.title)}（Level ${esc(b.level)}，句式：${esc(b.lang)}）</span></div>
    <div class="drow"><b>🌿 活动</b><span>${esc(day.activity)}</span></div>
    <div class="drow"><b>🔤 语言点</b><span>${esc(day.lang)}</span></div>
    <div class="drow"><b>✏️ 画+话认字</b><span>${esc(day.draw)}</span></div>
  </div>`;
}

function weekPanel(w) {
  const ext = extRead(w.fam);
  const extHtml = ext.length
    ? `<div class="ext"><b>📚 本族延伸阅读（${ext.length} 本，从总表挑）：</b> ` +
      ext.map(b => `<code>${esc(b.id)}</code> ${esc(b.title)}`).join("、") + `</div>`
    : `<div class="ext">本族 NF 书已全部纳入本周核心。</div>`;
  return `<div class="panel" id="w${w.week}">
    <div class="whead">${w.emoji} 第 ${w.week} 周 · ${esc(w.fam)}</div>
    <p class="wintro">${esc(w.intro)}</p>
    <div class="days">${w.days.map(dayCard).join("")}</div>
    ${extHtml}
  </div>`;
}

const overviewRows = WEEKS.map(w => {
  const books = w.days.map(d => {
    if (d.kind === "exp") return `<span class="mini-exp">🔬${esc(d.title)}</span>`;
    const b = bookById[d.bookId];
    return `<code>${esc(b.id)}</code> ${esc(b.title)}`;
  }).join(" <span class='sep'>·</span> ");
  return `<tr><td class="wk">${w.emoji} W${w.week}</td><td class="wf">${esc(w.fam)}</td><td class="wb">${books}</td></tr>`;
}).join("");

const tabs = WEEKS.map(w => `<button class="tab" data-w="${w.week}">${w.emoji} 第${w.week}周 ${esc(w.fam)}</button>`).join("");
const panels = WEEKS.map(weekPanel).join("");

const nfTotal = DATA.books.filter(b => b.type === "NF").length;

const html = `<!doctype html>
<html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>RAZ · NF 优先主题周计划（aa + A 级）</title>
<style>
:root{--bg:#fbfaf6;--card:#fff;--ink:#2c2a26;--muted:#8a857c;--line:#ece7dd;--accent:#e07a3f;--nf:#2f7d6e;--accent2:#5b7fb0;}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);font-family:-apple-system,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif;line-height:1.6}
header{padding:28px 22px 18px;border-bottom:3px solid var(--accent);background:linear-gradient(180deg,#fff,#fdf6ee)}
h1{margin:0 0 6px;font-size:23px}
.sub{color:var(--muted);font-size:13.5px;max-width:880px}
.meta{margin-top:10px;font-size:12.5px;color:var(--muted)}
.meta b{color:var(--accent)}
.wrap{max-width:960px;margin:0 auto;padding:18px 16px 60px}
.tabs{display:flex;flex-wrap:wrap;gap:7px;margin:16px 0 6px}
.tab{border:1px solid var(--line);background:#fff;color:var(--ink);padding:8px 12px;border-radius:20px;cursor:pointer;font-size:13px;transition:.15s}
.tab:hover{border-color:var(--accent)}
.tab.active{background:var(--accent);color:#fff;border-color:var(--accent)}
.ovnote{font-size:12.5px;color:var(--muted);margin:6px 2px 4px}
table.ov{width:100%;border-collapse:collapse;background:#fff;border:1px solid var(--line);border-radius:10px;overflow:hidden;margin-top:6px}
table.ov th{font-size:12px;color:var(--muted);text-align:left;padding:8px 10px;background:#faf7f1;border-bottom:1px solid var(--line)}
table.ov td{padding:9px 10px;border-bottom:1px solid var(--line);font-size:13px;vertical-align:top}
table.ov tr:last-child td{border-bottom:none}
.wk{white-space:nowrap;font-weight:600}
.wf{white-space:nowrap;color:var(--accent2);font-weight:600}
.wb code{background:#f4efe6;padding:1px 5px;border-radius:5px;font-size:11.5px;color:#6b6356}
.sep{color:var(--line)}
.mini-exp{display:inline-block;background:#eef6f3;color:var(--nf);border-radius:5px;padding:1px 6px;font-size:11.5px;margin:1px 0}
.panel{display:none;margin-top:14px}
.panel.active{display:block}
.whead{font-size:19px;font-weight:700;margin:18px 0 4px}
.wintro{color:#5f594f;font-size:13.5px;background:#fff;border-left:4px solid var(--accent2);padding:10px 14px;border-radius:0 8px 8px 0;margin:6px 0 14px}
.days{display:grid;gap:11px}
.day{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:13px 15px;box-shadow:0 1px 2px rgba(0,0,0,.03)}
.day.exp{background:#f3f9f6;border-color:#d8ebd3}
.dh{display:flex;align-items:center;gap:9px;flex-wrap:wrap;margin-bottom:8px}
.dnum{background:var(--accent);color:#fff;font-size:11.5px;font-weight:700;border-radius:6px;padding:2px 8px}
.dtitle{font-weight:700;font-size:15px}
.dlv{font-size:11.5px;color:var(--muted);margin-left:auto}
.dtag{font-size:11px;border-radius:6px;padding:2px 7px;font-weight:600}
.dtag.nf{background:#e7f3ef;color:var(--nf)}
.dtag.f{background:#fdeee2;color:var(--accent)}
.dtag.exp{background:#d8ebd3;color:#3f7d4f}
.drow{display:grid;grid-template-columns:108px 1fr;gap:8px;padding:4px 0;font-size:13.3px}
.drow b{color:#6b6356;font-weight:600}
.drow span{color:#36322c}
code{background:#f4efe6;padding:1px 5px;border-radius:5px;font-size:11.5px;color:#6b6356}
.ext{margin-top:14px;background:#faf7f1;border:1px dashed var(--line);border-radius:10px;padding:10px 13px;font-size:12.5px;color:#5f594f}
.ext code{margin:0 1px}
.printbtn{position:fixed;right:18px;bottom:18px;background:var(--accent);color:#fff;border:none;border-radius:24px;padding:11px 18px;font-size:14px;cursor:pointer;box-shadow:0 3px 10px rgba(224,122,63,.35)}
@media print{body{background:#fff}.printbtn{display:none}.tabs{display:none}.panel{display:block!important;margin-top:18px}header{border-color:#ccc}.day{break-inside:avoid}}
</style></head>
<body>
<header>
  <h1>📘 RAZ · NF 优先主题周计划</h1>
  <div class="sub">以 <b>non-fiction（科普）为优先</b> 的 6 周主题循环。每周一个主题族、5 个学习日：每日 1 本核心 NF 书 + 自然/感官活动 + 语言点 + 「画+话」认字贴士。书名/级别/句式自动对齐「RAZ 知识库 v3.10」种子数据（aa + A 级）。</div>
  <div class="meta">种子 NF 书共 <b>${nfTotal}</b> 本（aa+A）｜ 编号约定：级别+本级顺序号（如 A03 = Level A 第 3 本）｜ 完整 B–Z2 与 SAZ 需从 Raz-Plus 导出补齐</div>
</header>
<div class="wrap">
  <div class="tabs">${tabs}</div>
  <div class="ovnote">🗂 总览（点上方标签看每周详情）：</div>
  <table class="ov"><thead><tr><th style="width:74px">周</th><th style="width:96px">主题族</th><th>每日核心书 / 实验</th></tr></thead><tbody>${overviewRows}</tbody></table>
  ${panels}
</div>
<button class="printbtn" onclick="window.print()">🖨 打印 / 存 PDF</button>
<script>
document.querySelectorAll('.tab').forEach(t=>t.addEventListener('click',()=>{
  document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
  document.querySelectorAll('.panel').forEach(x=>x.classList.remove('active'));
  t.classList.add('active');
  document.getElementById('w'+t.dataset.w).classList.add('active');
  window.scrollTo({top:document.querySelector('.tabs').offsetTop-8,behavior:'smooth'});
}));
document.querySelector('.tab').classList.add('active');
document.getElementById('w1').classList.add('active');
</script>
</body></html>`;

fs.writeFileSync("raz_nf_plan.html", html, "utf8");
console.log("written raz_nf_plan.html  bytes=", Buffer.byteLength(html));
console.log("weeks:", WEEKS.length, " core books used:", coreIds.size, " nf total:", nfTotal);
WEEKS.forEach(w=>{
  const ext = extRead(w.fam).length;
  console.log(`  W${w.week} ${w.fam}: ${w.days.length} days, ext=${ext}`);
});
