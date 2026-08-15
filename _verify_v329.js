const puppeteer = require('puppeteer-core');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: 'new',
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  const url = 'file://' + path.resolve('dist/index.html');
  const errors = [];
  page.on('console', m => { if (m.type() === 'error') { const t = m.text(); if (!/cloudflareinsights|cf-beacon|cloudflare|ERR_FAILED|net::ERR/i.test(t)) errors.push(t); } });
  page.on('pageerror', e => { if (!/cloudflare/i.test(e.message)) errors.push('PAGEERR: ' + e.message); });

  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });

  // version check
  const ver = await page.evaluate(() => document.querySelector('.ver')?.textContent || '');
  console.log('VERSION:', ver);

  await page.evaluate(() => { document.querySelector('.tab[data-t="nf"]').click(); });
  await new Promise(r => setTimeout(r, 400));

  async function checkRange(from, to, age) {
    await page.evaluate((f, t, a) => {
      document.querySelector('#nfFrom').value = f;
      document.querySelector('#nfTo').value = t;
      document.querySelector('#nfAge').value = String(a);
      document.querySelector('#nfFrom').dispatchEvent(new Event('change'));
      document.querySelector('#nfTo').dispatchEvent(new Event('change'));
      document.querySelector('#nfAge').dispatchEvent(new Event('input'));
    }, from, to, age);
    await new Promise(r => setTimeout(r, 700));
    return await page.evaluate(() => {
      const weeks = document.querySelectorAll('#nfPlan .nf-week');
      const note = document.querySelector('#nfRangeNote')?.textContent || '';
      let bookDays = 0, expDays = 0, totalDays = 0;
      const firstBook = [];
      weeks.forEach(w => {
        [...w.querySelectorAll('.day')].forEach(d => {
          totalDays++;
          if (d.querySelector('.dtag.nf')) bookDays++;
          if (d.classList.contains('exp')) expDays++;
          const bt = d.querySelector('.dtitle')?.textContent || '';
          if (bt && firstBook.length < 6) firstBook.push(bt.slice(0, 50));
        });
      });
      return { weekCount: weeks.length, note: note.slice(0, 120), bookDays, expDays, totalDays, firstBook };
    });
  }

  const rII = await checkRange('I', 'I', 4);
  console.log('I-I (age4):', JSON.stringify(rII, null, 2));
  const rAA = await checkRange('aa', 'D', 3);
  console.log('aa-D (age3):', JSON.stringify(rAA, null, 2));

  // assertions: I-I should now be DENSE (many NF books, not sparse "真实书驱动" with <15)
  const ok = ver === 'v3.29'
    && rII.weekCount >= 4 && rII.weekCount <= 6
    && rII.bookDays >= 15
    && !rII.note.includes('真实书驱动')
    && rAA.weekCount === 6
    && errors.length === 0;
  if (!ok) { console.error('FAIL assertions'); console.error('errors:', errors); process.exit(1); }
  console.log('VERIFY_OK v3.29 : I-I enriched to', rII.bookDays, 'NF book-days across', rII.weekCount, 'weeks; errors=', errors.length);
  await browser.close();
})();
