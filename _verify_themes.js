const puppeteer = require('C:/Users/kitekreek/.workbuddy/binaries/node/workspace/node_modules/puppeteer-core');
const path = require('path');
(async () => {
  const browser = await puppeteer.launch({ executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push('PAGEERROR: ' + e.message));
  page.on('console', m => { if (m.type() === 'error') { const t = m.text(); if (!/cloudflareinsights|rum/.test(t)) errors.push('CONSOLE: ' + t); } });
  const file = 'file://' + path.resolve('dist/index.html');
  await page.goto(file, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await new Promise(r => setTimeout(r, 1500));
  // Click 主题分类 tab
  const clicked = await page.evaluate(() => {
    const t = document.querySelector('.tab[data-t="themes"]');
    if (!t) return false; t.click(); return true;
  });
  await new Promise(r => setTimeout(r, 600));
  const themes = await page.evaluate(() => ({
    lvTabs: document.querySelectorAll('#themeLvTabs .tab').length,
    themeBooksFam: document.querySelectorAll('#themeBooks .fam').length,
    themeBooksRows: document.querySelectorAll('#themeBooks .tbook').length,
    famList: document.querySelectorAll('#famList .fam').length,
    version: (document.querySelector('footer')||{}).textContent || '',
  }));
  // NF plan still works?
  const nf = await page.evaluate(() => {
    const t = document.querySelector('.tab[data-t="nf"]'); if (t) t.click();
    const weeks = document.querySelectorAll('#nfWeeks .nf-week').length;
    const note = (document.querySelector('#nfRangeNote')||{}).textContent || '';
    return { weeks, note };
  });
  const genGone = await page.evaluate(() => !document.querySelector('.tab[data-t="gen"]') && !document.getElementById('genArea'));
  console.log(JSON.stringify({ clicked, themes, nf, genGone, errors }, null, 2));
  await browser.close();
})().catch(e => { console.error('FATAL', e); process.exit(1); });
