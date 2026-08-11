// 解析小花生 userbooklist 抓取的某级 HTML（page_1..6）为 干净的 {num,title} 列表
// 用法: node parse_level.js <LEVEL> <prefix>
//   例: node parse_level.js F f_raw
// 读取 ./<prefix>_p1..6.html，写出 ./level_<lower>.json
//
// 兼容三种书号写法：
//   A) "87 Monkey to the Top (RAZ F)"        -> 官方书号在前
//   B) "The 100th Day Project (RAZ I)"        -> 无书号（按文档顺序补编号）
//   C) "03Alistair's Night (RAZ I)"           -> 书号紧贴标题（无空格）
// 书链接 <a href="/book/" title="..."> 与 hover 卡片都可能含 title，按标题去重，带书号优先。
const fs = require("fs");
const path = require("path");

const LEVEL = process.argv[2];
const PREFIX = process.argv[3];
if (!LEVEL || !PREFIX) { console.error("usage: node parse_level.js <LEVEL> <prefix>"); process.exit(1); }
const L = LEVEL.toUpperCase();

function dec(s) {
  return s.replace(/&amp;/g, "&").replace(/&#39;/g, "'").replace(/&#x27;/g, "'")
          .replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">")
          .replace(/&#34;/g, '"');
}

// 只抓书链接 <a href="/book/..." title="..."> 里的 title（最可靠、按文档顺序）
const reTag = new RegExp('<a\\b[^>]*\\bhref="/book/[^"]*"[^>]*title="([^"]*)"[^>]*>', "g");
const reNumTitle = new RegExp('^(?:(\\d{1,3})\\s*)?(.+?)\\s*\\(RAZ[ -]?' + L + '\\)\\s*$');

const byTitle = {};   // title -> {num, title, order}
let order = 0;
let bad = 0;

for (let p = 1; p <= 6; p++) {
  const f = path.join(__dirname, PREFIX + "_p" + p + ".html");
  if (!fs.existsSync(f)) continue;
  const html = fs.readFileSync(f, "utf8");
  const tags = [...html.matchAll(reTag)];
  tags.forEach(a => {
    const content = dec(a[1]);
    const m = content.match(reNumTitle);
    if (!m) return;
    const num = m[1] ? parseInt(m[1], 10) : null;
    const title = m[2].replace(/\s+/g, " ").trim();
    if (!title) { bad++; return; }
    if (byTitle[title]) {
      // 已见：若本次带书号而旧的无，则升级
      if (num && !byTitle[title].num) byTitle[title].num = num;
      return;
    }
    byTitle[title] = { num, title, order: order++ };
  });
}

// 无书号的按文档顺序补编号（跳过已占用书号）
const entries = Object.values(byTitle).sort((x, y) => x.order - y.order);
const used = new Set(entries.filter(e => e.num).map(e => e.num));
let seq = 1;
entries.forEach(e => {
  if (!e.num) {
    while (used.has(seq)) seq++;
    e.num = seq;
    used.add(seq);
  }
});

const out = entries.map(e => [e.num, e.title]).sort((a, b) => a[0] - b[0]);
const max = out.length ? out[out.length - 1][0] : 0;
const present = new Set(out.map(o => o[0]));
const gaps = [];
for (let i = 1; i <= max; i++) if (!present.has(i)) gaps.push(i);

const lower = L.toLowerCase();
fs.writeFileSync(path.join(__dirname, "level_" + lower + "_clean.json"),
  JSON.stringify(out, null, 0));
console.log(L + ": entries=" + out.length + " bad=" + bad + " max=" + max +
  " gaps=" + (gaps.length ? gaps.join(",") : "none"));
console.log("wrote level_" + lower + "_clean.json");
console.log("--- first 6 ---");
out.slice(0, 6).forEach(([n, t]) => console.log(n + " " + t));
console.log("--- last 3 ---");
out.slice(-3).forEach(([n, t]) => console.log(n + " " + t));
