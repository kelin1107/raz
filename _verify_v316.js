const puppeteer = require('C:/Users/kitekreek/.workbuddy/binaries/node/workspace/node_modules/puppeteer-core');
const path = require('path');
const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const file = 'file://' + path.resolve('dist/index.html');

(async () => {
  const errors = [];
  const browser = await puppeteer.launch({executablePath: EDGE, headless: 'new', args: ['--no-sandbox','--disable-setuid-sandbox']});
  const page = await browser.newPage();
  page.on('pageerror', err => errors.push('PAGEERROR ' + err.message));
  page.on('console', msg => { if (msg.type()==='error') errors.push('CONSOLEERR ' + msg.text()); });
  await page.setViewport({width: 1200, height: 900, deviceScaleFactor: 1});
  await page.goto(file, {waitUntil: 'domcontentloaded', timeout: 60000});
  await new Promise(r=>setTimeout(r,1500));

  // 1) tab order — SAZ must be last
  const tabs = await page.evaluate(() => [...document.querySelectorAll('.tabs > .tab')].map(t=>t.textContent.trim()));
  const sazLast = tabs[tabs.length-1].includes('SAZ');

  // 2) NF tab: 3-track extension present
  const nf = await page.evaluate(() => {
    document.querySelector('.tab[data-t="nf"]').click();
    return new Promise(resolve => setTimeout(() => {
      const weeks = document.querySelectorAll('#nfPlan .nf-week').length;
      const firstDay = document.querySelector('#nfPlan .nf-week .day');
      const tracks = firstDay ? [...firstDay.querySelectorAll('.ext3 .drow b')].map(b=>b.textContent.trim()) : [];
      const hasCraft = !!document.querySelector('#nfPlan .ext3 .drow b');
      const note = (document.querySelector('#nfPlan .nf-note')||{}).textContent || '';
      resolve({ weeks, tracks, ext3Count: document.querySelectorAll('#nfPlan .ext3').length, noteHasKhan: note.includes('Khan') });
    }, 600));
  });
  await new Promise(r=>setTimeout(r,200));

  await browser.close();
  console.log(JSON.stringify({errors, tabs, sazLast, nf}, null, 2));
  if (errors.length) { console.log('HAS ERRORS'); process.exit(2); }
  console.log(sazLast && nf.weeks>=6 && nf.tracks.includes('🧩 手工') && nf.tracks.includes('🔬 STEAM') ? 'V3.16 VERIFY OK' : 'VERIFY FAILED');
})().catch(e=>{ console.error(e); process.exit(1); });
