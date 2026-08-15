const puppeteer = require('puppeteer-core');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  const errors = [];
  page.on('console', m => { if (m.type() === 'error') { const t=m.text(); if(!/cloudflareinsights|cf-beacon|cloudflare|ERR_FAILED/i.test(t)) errors.push(t); } });
  page.on('pageerror', e => { if(!/cloudflare/i.test(e.message)) errors.push('PAGEERR: ' + e.message); });
  await page.goto('file://' + path.resolve('dist/index.html'), { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 1000));
  await page.evaluate(() => { document.querySelector('.tab[data-t="saz"]').click(); });
  await new Promise(r => setTimeout(r, 300));
  await page.evaluate(() => { document.querySelector('#sazModeTabs .mtab[data-m="week"]').click(); });
  await new Promise(r => setTimeout(r, 500));
  // build: 社会与人文 theme (contains Curie), all weeks
  await page.evaluate(() => {
    const ttab = [...document.querySelectorAll('#sazwThemeTabs .ttab')].find(b => /社会与人文/.test(b.textContent));
    if (ttab) ttab.click();
    const w = document.querySelector('#sazwWeeks'); w.value = 'all'; w.dispatchEvent(new Event('change'));
    const b = document.querySelector('#sazwBand'); b.value=''; b.dispatchEvent(new Event('change'));
    document.querySelector('#sazwRebuild').click();
  });
  await new Promise(r => setTimeout(r, 700));

  const res = await page.evaluate(() => {
    // find Curie week text
    const panels = [...document.querySelectorAll('#sazWeek .nf-week')];
    const curie = panels.find(p => /Curie/i.test(p.textContent));
    // scan: any week whose Thursday still shows 种子发芽 but theme != 生命世界?
    const bad = [];
    panels.forEach(p => {
      const head = p.querySelector('.whead');
      const title = head ? head.textContent : '';
      const hasSeed = /种子发芽/.test(p.textContent);
      const thurs = [...p.querySelectorAll('.day')].find(d => /周四/.test(d.textContent));
      const expTitle = thurs ? thurs.querySelector('.dtitle') : null;
      if (hasSeed && !/生命世界/.test(p.textContent)) bad.push(title.replace(/\s+/g,' ').slice(0,60));
    });
    return {
      curieHtml: curie ? curie.textContent.replace(/\s+/g,' ').slice(0, 900) : 'NOT FOUND',
      curieDays: curie ? [...curie.querySelectorAll('.day .dtitle')].map(e=>e.textContent) : [],
      badSeedUnits: bad
    };
  });

  console.log('=== Curie week day titles ===');
  console.log(JSON.stringify(res.curieDays, null, 2));
  console.log('=== Curie week body (excerpt) ===');
  console.log(res.curieHtml);
  console.log('=== units wrongly showing 种子发芽 (non 生命世界) ===');
  console.log(JSON.stringify(res.badSeedUnits, null, 2));
  console.log('=== JS errors ===', errors.length, errors.slice(0,5));

  const ok = res.curieDays.length===5 && /平行阅读/.test(res.curieHtml) && /真实拓展/.test(res.curieHtml)
    && /讨论/.test(res.curieHtml) && !/种子发芽/.test(res.curieHtml) && res.badSeedUnits.length===0 && errors.length===0;
  console.log(ok ? 'VERIFY_OK' : 'VERIFY_FAIL');
  await browser.close();
  process.exit(ok?0:1);
})();
