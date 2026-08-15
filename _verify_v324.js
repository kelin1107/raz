const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';

(async () => {
  const browser = await puppeteer.launch({ executablePath: EDGE, headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  const errors = [];
  page.on('console', m => { if (m.type() === 'error') { const t=m.text(); if(!/cloudflareinsights|cf-beacon|cloudflare/.test(t)) errors.push(t); } });
  page.on('pageerror', e => { if(!/cloudflare/i.test(e.message)) errors.push('PAGEERR: ' + e.message); });

  await page.goto('file://' + path.resolve('dist/index.html'), { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 900));

  // 切到 SAZ tab
  await page.evaluate(() => { document.querySelector('.tab[data-t="saz"]').click(); });
  await new Promise(r => setTimeout(r, 500));

  const res = await page.evaluate(() => {
    const rows = document.querySelectorAll('#sazBody tr');
    const first = rows[0];
    const cells = first ? first.querySelectorAll('td') : [];
    // 找带核心词的行（含 vertebrate 之类）
    let vocabRow = null, lexRow = null;
    for (const tr of rows) {
      const txt = tr.textContent;
      if (/vertebr/i.test(txt)) vocabRow = tr;
      if (/820L/.test(txt)) lexRow = tr;
    }
    return {
      rowCount: rows.length,
      headerCols: document.querySelectorAll('#sazTable thead th').length,
      firstCells: cells.length,
      hasVertebrateVocab: vocabRow ? /vertebrate|backbone|mammal/.test(vocabRow.textContent) : false,
      hasLexile820: !!lexRow,
      sampleVertebrate: vocabRow ? vocabRow.textContent.slice(0, 160) : null,
    };
  });

  console.log('SAZ tab:', JSON.stringify(res, null, 1));
  console.log('JS errors (non-cf):', errors.length, errors.slice(0,5));
  await browser.close();
  const ok = res.headerCols === 7 && res.hasVertebrateVocab && res.hasLexile820 && errors.length === 0;
  console.log(ok ? 'VERIFY_OK' : 'VERIFY_FAIL');
  process.exit(ok ? 0 : 1);
})();
