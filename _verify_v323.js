const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

(async () => {
  const exe = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
  const browser = await puppeteer.launch({ executablePath: exe, headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  const errors = [];
  const ignore = s => /cloudflareinsights|cdn-cgi\/rum|ERR_FAILED|analytics/i.test(s);
  page.on('console', m => { if (m.type() === 'error' && !ignore(m.text())) errors.push(m.text()); });
  page.on('pageerror', e => { if (!ignore(e.message)) errors.push('PAGEERR: ' + e.message); });

  await page.goto('file://' + path.resolve('dist/index.html'), { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 600));

  // 切到 NF tab
  await page.evaluate(() => { document.querySelector('.tab[data-t="nf"]').click(); });
  await new Promise(r => setTimeout(r, 300));

  // 设 K->K, 年龄 8
  await page.evaluate(() => {
    const f = document.getElementById('nfFrom'), t = document.getElementById('nfTo'), a = document.getElementById('nfAge');
    f.value = 'K'; t.value = 'K'; a.value = '8';
    f.dispatchEvent(new Event('change')); t.dispatchEvent(new Event('change')); a.dispatchEvent(new Event('change'));
  });
  await new Promise(r => setTimeout(r, 400));

  const res = await page.evaluate(() => {
    const weeks = document.getElementById('nfWeeks').innerHTML;
    return {
      hasCore: weeks.includes('核心词'),
      hasKite: weeks.includes('kite'),
      hasSnake: weeks.includes('snake'),
      coreCount: (weeks.match(/核心词/g) || []).length,
      weekCount: (weeks.match(/nf-week/g) || []).length,
    };
  });

  // 再测 aa->A 默认（双胞胎级）应显示动物核心词
  await page.evaluate(() => {
    const f = document.getElementById('nfFrom'), t = document.getElementById('nfTo'), a = document.getElementById('nfAge');
    f.value = 'aa'; t.value = 'A'; a.value = '3';
    f.dispatchEvent(new Event('change')); t.dispatchEvent(new Event('change')); a.dispatchEvent(new Event('change'));
  });
  await new Promise(r => setTimeout(r, 400));
  const res2 = await page.evaluate(() => {
    const weeks = document.getElementById('nfWeeks').innerHTML;
    return { hasSheep: weeks.includes('sheep'), hasCore: weeks.includes('核心词') };
  });

  console.log('K->K:', JSON.stringify(res));
  console.log('aa->A:', JSON.stringify(res2));
  console.log('JS errors (app):', errors.length, errors.slice(0, 5));
  await browser.close();
  const ok = res.hasCore && res.hasKite && res.hasSnake && res2.hasCore && errors.length === 0;
  console.log(ok ? 'VERIFY_OK' : 'VERIFY_FAIL');
  process.exit(ok ? 0 : 1);
})();
