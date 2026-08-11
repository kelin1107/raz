const fs = require('fs');
const D = JSON.parse(fs.readFileSync('./raz_library.json', 'utf8'));

const families = D.themes.mergeFamilies;
const orders = D.meta.levelOrder;
const present = new Set(D.books.map(b => b.level));
const levels = orders.filter(l => present.has(l));

// 归类（与库内 renderLadder/updateLevelCheck 一致）
function genFam(t) {
  return families.find(f => (f.family || '').includes(t) || (f.merge || []).includes(t));
}
const unmatched = D.books.filter(b => !genFam(b.theme));
if (unmatched.length) {
  console.log('⚠ 未归类书:', unmatched.length, unmatched.slice(0, 8).map(b => b.id + ':' + b.theme));
} else {
  console.log('✓ 全部书已归类到 6 大主题族');
}

const PAY = {
  levels,
  families: families.map(f => ({ family: f.family, why: f.why, source: f.source, merge: f.merge || [], nonfiction: !!f.nonfiction })),
  books: D.books.map(b => ({ id: b.id, level: b.level, num: b.num, title: b.title, theme: b.theme, type: b.type, lang: b.lang, band: b.band }))
};
const json = JSON.stringify(PAY).replace(/</g, '\\u003c');

function runtime() {
  var PAY = window.__PAY;
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function famOf(theme) {
    return PAY.families.find(function (f) {
      return (f.family || '').includes(theme) || (f.merge || []).includes(theme);
    });
  }
  function renderTabs() {
    var tabs = PAY.levels.concat(['ALL']);
    var tw = document.querySelector('.tabs');
    tw.innerHTML = tabs.map(function (lv, i) {
      return '<button class="tab' + (i === 0 ? ' active' : '') + '" data-lv="' + lv + '">' + (lv === 'ALL' ? '全部' : (lv === 'aa' ? 'AA' : lv)) + '</button>';
    }).join('');
    tw.querySelectorAll('.tab').forEach(function (t) {
      t.onclick = function () {
        tw.querySelectorAll('.tab').forEach(function (x) { x.classList.remove('active'); });
        t.classList.add('active');
        renderLevel(t.dataset.lv);
      };
    });
    renderLevel(tabs[0]);
  }
  function renderLevel(lv) {
    var books = lv === 'ALL' ? PAY.books.slice() : PAY.books.filter(function (b) { return b.level === lv; });
    document.getElementById('lvName').textContent = lv === 'ALL' ? '全部级别（AA–Z2 + SAZ）' : ('Level ' + (lv === 'aa' ? 'AA' : lv));
    var html = PAY.families.map(function (f) {
      var list = books.filter(function (b) {
        var fb = famOf(b.theme);
        return fb && fb.family === f.family;
      });
      list.sort(function (a, b) {
        return lv === 'ALL' ? (a.level === b.level ? a.num - b.num : a.level.localeCompare(b.level)) : a.num - b.num;
      });
      var cnt = list.length;
      var rows = list.map(function (b) {
        var tag = b.type === 'NF' ? 'nf' : (b.type === 'F' ? 'f' : '');
        var lvtag = lv === 'ALL' ? '<span class="lv">' + esc(b.level) + '</span>' : '';
        var bandTag = b.band ? '<span class="dtag band">' + esc(b.band) + '</span>' : '';
        return '<div class="book"><code>' + esc(b.id) + '</code><span class="t">' + esc(b.title) + '</span><span class="dtag ' + tag + '">' + esc(b.type) + '</span>' + bandTag + lvtag + '</div>';
      }).join('') || '<div class="empty">该级别此主题暂无种子书目。</div>';
      return '<div class="fam-block"><div class="fam-h">' + esc(f.family) + ' <span class="cnt">' + cnt + ' 本</span></div>' +
        '<div class="fam-note">' + esc(f.why) + '<span class="src">｜ 来源：' + esc(f.source) + ' ｜ 合并子题：' + f.merge.map(esc).join('、') + '</span></div>' +
        '<div class="booklist">' + rows + '</div></div>';
    }).join('');
    document.getElementById('levelArea').innerHTML = html;
  }
  renderTabs();
}

const css = [
  ':root{--bg:#fbfaf6;--card:#fff;--ink:#2c2a26;--muted:#8a857c;--line:#ece7dd;--accent:#e07a3f;--nf:#2f7d6e;--accent2:#5b7fb0;}',
  '*{box-sizing:border-box}',
  'body{margin:0;background:var(--bg);color:var(--ink);font-family:-apple-system,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif;line-height:1.6}',
  'header{padding:28px 22px 18px;border-bottom:3px solid var(--accent);background:linear-gradient(180deg,#fff,#fdf6ee)}',
  'h1{margin:0 0 6px;font-size:23px}',
  '.sub{color:var(--muted);font-size:13.5px;max-width:880px}',
  '.meta{margin-top:10px;font-size:12.5px;color:var(--muted)}',
  '.meta b{color:var(--accent)}',
  '.wrap{max-width:960px;margin:0 auto;padding:18px 16px 60px}',
  '.tabs{display:flex;flex-wrap:wrap;gap:7px;margin:16px 0 6px}',
  '.tab{border:1px solid var(--line);background:#fff;color:var(--ink);padding:8px 14px;border-radius:20px;cursor:pointer;font-size:13px;font-weight:600;transition:.15s}',
  '.tab:hover{border-color:var(--accent)}',
  '.tab.active{background:var(--accent);color:#fff;border-color:var(--accent)}',
  '.ovnote{font-size:12.5px;color:var(--muted);margin:8px 2px}',
  '.ovnote b{color:var(--accent2)}',
  '.fam-block{background:#fff;border:1px solid var(--line);border-radius:12px;padding:14px 16px;margin:14px 0;box-shadow:0 1px 2px rgba(0,0,0,.03)}',
  '.fam-h{font-size:16px;font-weight:700;margin-bottom:4px}',
  '.fam-h .cnt{font-size:12px;color:var(--muted);font-weight:600;margin-left:6px}',
  '.fam-note{color:#5f594f;font-size:12.5px;background:#faf7f1;border-left:4px solid var(--accent2);padding:8px 12px;border-radius:0 8px 8px 0;margin:6px 0 10px}',
  '.fam-note .src{display:block;color:var(--muted);font-size:11.5px;margin-top:4px}',
  '.booklist{}',
  '.book{display:flex;align-items:center;gap:9px;padding:5px 0;border-bottom:1px dashed var(--line);font-size:13.3px}',
  '.book:last-child{border-bottom:none}',
  '.book code{background:#f4efe6;padding:1px 6px;border-radius:5px;font-size:11.5px;color:#6b6356;min-width:44px;text-align:center;font-family:ui-monospace,Menlo,Consolas,monospace}',
  '.book .t{flex:1;color:#36322c}',
  '.book .lv{font-size:11.5px;color:var(--muted);margin-left:auto}',
  '.dtag{font-size:11px;border-radius:6px;padding:2px 7px;font-weight:600}',
  '.dtag.nf{background:#e7f3ef;color:#2f7d6e}',
  '.dtag.f{background:#fdeee2;color:#e07a3f}',
  '.dtag.band{background:#eef2ff;color:#4f5bd5;margin-left:4px}',
  '.empty{color:var(--muted);font-size:12.5px;padding:6px 0}',
  '.printbtn{position:fixed;right:18px;bottom:18px;background:var(--accent);color:#fff;border:none;border-radius:24px;padding:11px 18px;font-size:14px;cursor:pointer;box-shadow:0 3px 10px rgba(224,122,63,.35)}',
  '@media print{body{background:#fff}.printbtn{display:none}.tabs{display:none}header{border-color:#ccc}.fam-block{break-inside:avoid}}'
].join('\n');

const html = '<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">' +
  '<title>RAZ · 按级别的主题分类（AA–Z2 + SAZ）</title><style>' + css + '</style></head><body>' +
  '<header>' +
  '<h1>📚 RAZ · 按级别的主题分类</h1>' +
  '<div class="sub">选一个 RAZ 级别或 SAZ 科学分级，下方按 6 大主题族列出该级别的全部书（编号含级别 + 标题，NF=科普 / F=虚构；SAZ 按年级段 GK-G2 / G3-4 / G5-6 各分 Low/Mid/High 三档，仅 10 本 Unit NF 同名三档书保留年级段）。编号与主题自动对齐「RAZ 知识库 v3.10」种子数据（AA–Z2 + SAZ 全段 259 本，249 本精确到档位）。</div>' +
  '<div class="meta">种子 <b>2810</b> 本（RAZ aa–Z2 共 2551 ＋ SAZ 科学分级 259）｜ 编号约定：级别+本级顺序号（如 <b>B01</b> = Level B 第 1 本；SAZ 为 SAZ01…SAZ259 连续编号）</div>' +
  '</header>' +
  '<div class="wrap">' +
  '<div class="tabs"></div>' +
  '<div class="ovnote">当前：<b id="lvName"></b> ｜ 点上方级别切换；下方按 6 大主题族列出该级别全部书。</div>' +
  '<div id="levelArea"></div>' +
  '</div>' +
  '<button class="printbtn" onclick="window.print()">🖨 打印 / 存PDF</button>' +
  '<script>window.__PAY=' + json + ';(' + runtime.toString() + ')();</script>' +
  '</body></html>';

fs.writeFileSync('./raz_themes.html', html, 'utf8');
console.log('✓ written raz_themes.html (' + html.length + ' bytes)');
console.log('  levels tab:', levels.concat(['ALL']).join(' / '));
console.log('  families:', families.length, '| books:', PAY.books.length);
