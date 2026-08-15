const puppeteer = require('puppeteer-core');
const fs = require('fs');
(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: 'new',
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  const errs = [];
  page.on('pageerror', e => errs.push(String(e)));
  await page.goto('file://' + process.cwd() + '/dist/index.html', {waitUntil:'load', timeout:60000});
  await new Promise(r => setTimeout(r, 1200));
  // 切到 NF tab
  await page.evaluate(() => { document.querySelector('.tab[data-t="nf"]').click(); });
  // 设置级别 K -> K, 年龄 8
  await page.evaluate(() => {
    const from = document.querySelector('#nfFrom');
    const to = document.querySelector('#nfTo');
    from.value = 'K'; to.value = 'K';
    from.dispatchEvent(new Event('change'));
    to.dispatchEvent(new Event('change'));
    const age = document.querySelector('#nfAge');
    age.value = '8';
    age.dispatchEvent(new Event('input'));
  });
  await new Promise(r => setTimeout(r, 300));
  const out = await page.evaluate(() => {
    const note = document.querySelector('#nfRangeNote').textContent;
    const weeks = Array.from(document.querySelectorAll('#nfPlan .nf-week')).map(w => {
      const head = w.querySelector('.whead').textContent.trim();
      const days = Array.from(w.querySelectorAll('.day')).map(d => {
        const t = d.querySelector('.dtitle').textContent.trim();
        const act = (d.querySelector('.drow span')||{}).textContent || '';
        return {t, act: act.slice(0,40)};
      });
      return {head, days};
    });
    return {note, weeks};
  });
  console.log('NOTE:', out.note);
  console.log('--- weeks (K-K, age 8) ---');
  out.weeks.forEach(w => {
    console.log(w.head);
    w.days.forEach(d => console.log('   ', d.t, '|', d.act));
  });
  console.log('JS ERRORS:', errs.length ? errs : 'none');
  await browser.close();
})().catch(e => { console.error('FAIL', e); process.exit(1); });
