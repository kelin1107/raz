const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

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
  await page.evaluate(() => { document.querySelector('.tab[data-t="nf"]').click(); });
  await new Promise(r => setTimeout(r, 400));

  // 选择 I-I 范围
  await page.evaluate(() => {
    document.querySelector('#nfFrom').value = 'I';
    document.querySelector('#nfTo').value = 'I';
    document.querySelector('#nfFrom').dispatchEvent(new Event('change'));
    document.querySelector('#nfTo').dispatchEvent(new Event('change'));
  });
  await new Promise(r => setTimeout(r, 600));

  const report = await page.evaluate(() => {
    const weeks = document.querySelectorAll('#nfPlan .nf-week');
    const tabs = document.querySelectorAll('#nfPlan .nf-tab');
    const note = document.querySelector('#nfRangeNote')?.textContent || '';
    const rows = [];
    weeks.forEach(w => {
      const title = w.querySelector('.whead')?.textContent || '';
      const days = [...w.querySelectorAll('.day')].map(d => {
        const dh = d.querySelector('.dh')?.textContent || '';
        const isBook = d.querySelector('.dtitle')?.textContent?.startsWith?.('I') || /[A-Z]{1,2}\d+/.test(dh);
        return dh.slice(0, 60);
      });
      const bookDays = [...w.querySelectorAll('.day')].filter(d => d.querySelector('.dtag.nf')).length;
      const expDays = [...w.querySelectorAll('.day.exp')].length;
      rows.push({ title: title.slice(0, 80), bookDays, expDays, days });
    });
    return { weekCount: weeks.length, tabCount: tabs.length, note, rows };
  });

  console.log('I-I range report:', JSON.stringify(report, null, 2));

  // assertions
  const ok = report.weekCount >= 2 && report.weekCount <= 6 &&
             report.rows.every(r => r.bookDays > 0) &&
             report.note.includes('真实书驱动');
  if (!ok) {
    console.error('FAIL: sparse mode not working for I-I');
    process.exit(1);
  }
  if (errors.length) {
    console.error('JS errors:', errors);
    process.exit(1);
  }
  console.log('VERIFY_OK');
  await browser.close();
})();
