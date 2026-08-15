import re
path = 'raz_library.html'
with open(path, 'r', encoding='utf-8') as f:
    html = f.read()

new_nf = '''/* ===== NF 优先主题周计划 ===== */
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
    var list=nf.filter(function(b){ var g=genFamOf(b.theme); return g && g.family===fam.key; }).sort(function(a,b){
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
  return DATA.books.filter(function(b){ var g=genFamOf(b.theme); return b.type==='NF' && g && g.family===fam && !core.has(b.id); }).sort(function(a,b){ return (a.level===b.level?a.num-b.num:a.level.localeCompare(b.level)); });
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
'''

start = html.find('/* ===== NF 优先主题周计划 ===== */')
end = html.find('\n\ninit();')
if start == -1 or end == -1:
    print(' markers not found', start, end)
    raise SystemExit(1)
html = html[:start] + new_nf + html[end+2:]
with open(path, 'w', encoding='utf-8') as f:
    f.write(html)
print('NF block replaced, chars:', len(new_nf))
