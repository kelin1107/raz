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
  await new Promise(r=>setTimeout(r,1000));

  // Test repeat tab pick switching
  await page.evaluate(() => { document.querySelector('.tab[data-t="repeat"]').click(); });
  await new Promise(r=>setTimeout(r,500));
  const repBefore = await page.evaluate(() => ({
    active: document.querySelector('#repPickTabs .pickTab.active')?.dataset?.key,
    firstBook: document.querySelector('#repPickList .rep-item')?.dataset?.id
  }));
  await page.evaluate(() => { document.querySelector('#repPickTabs .pickTab[data-key="C"]').click(); });
  await new Promise(r=>setTimeout(r,500));
  const repAfter = await page.evaluate(() => ({
    active: document.querySelector('#repPickTabs .pickTab.active')?.dataset?.key,
    firstBook: document.querySelector('#repPickList .rep-item')?.dataset?.id
  }));

  // Test NF week plan: weekly craft/steam block present, per-day no craft/steam
  await page.evaluate(() => { document.querySelector('.tab[data-t="nf"]').click(); });
  await new Promise(r=>setTimeout(r,800));
  const nf = await page.evaluate(() => {
    const firstWeek = document.querySelector('#nfPlan .nf-week');
    const weekExt = firstWeek ? firstWeek.querySelector('.week-ext') : null;
    const firstDay = firstWeek ? firstWeek.querySelector('.day') : null;
    const dayRows = firstDay ? [...firstDay.querySelectorAll('.drow b')].map(b=>b.textContent.trim()) : [];
    return {
      weeks: document.querySelectorAll('#nfPlan .nf-week').length,
      hasWeekExt: !!weekExt,
      weekExtRows: weekExt ? [...weekExt.querySelectorAll('.wext-row b')].map(b=>b.textContent.trim()) : [],
      dayRows,
      dayHasCraft: dayRows.includes('🧩 手工'),
      dayHasSteam: dayRows.includes('🔬 STEAM')
    };
  });

  await browser.close();
  const repOk = repBefore.active === 'A' && repAfter.active === 'C' && repAfter.firstBook && repAfter.firstBook.startsWith('C');
  const nfOk = nf.weeks >= 6 && nf.hasWeekExt && nf.weekExtRows.includes('🧩 本周手工项目') && nf.weekExtRows.includes('🔬 本周 STEAM 项目') && !nf.dayHasCraft && !nf.dayHasSteam && nf.dayRows.includes('✏️ 画+话认字');
  console.log(JSON.stringify({errors, repBefore, repAfter, nf}, null, 2));
  if (errors.length) { console.log('HAS ERRORS'); process.exit(2); }
  console.log(repOk && nfOk ? 'V3.17 VERIFY OK' : 'VERIFY FAILED');
})().catch(e=>{ console.error(e); process.exit(1); });
