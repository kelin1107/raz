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
  await page.setViewport({width: 1100, height: 900, deviceScaleFactor: 1});
  await page.goto(file, {waitUntil: 'domcontentloaded', timeout: 60000});
  await new Promise(r=>setTimeout(r,1500));

  // 1) master table + first-row CSS check
  const master = await page.evaluate(() => {
    const th = document.querySelector('#mTable th');
    const firstTr = document.querySelector('#mTable tbody tr');
    return {
      mCount: document.getElementById('mCount')?.textContent,
      rows: document.querySelectorAll('#mTable tbody tr').length,
      thPos: th ? getComputedStyle(th).position : 'none',
      firstRowTop: firstTr ? Math.round(firstTr.getBoundingClientRect().top) : null,
      firstRowText: firstTr?.textContent?.replace(/\s+/g,' ').slice(0,50)
    };
  });

  // 2) SAZ book list
  const saz = await page.evaluate(() => {
    document.querySelector('.tab[data-t="saz"]').click();
    return {
      rows: document.querySelectorAll('#sazTable tbody tr').length,
      hasSearch: !!document.getElementById('sazSearch'),
      hasDomain: !!document.getElementById('sazDomain'),
      hasBand: !!document.getElementById('sazBand'),
      first: document.querySelector('#sazTable tbody tr')?.textContent?.replace(/\s+/g,' ').slice(0,70)
    };
  });
  await new Promise(r=>setTimeout(r,200));

  // 3) AR multi-level converter
  const ar = await page.evaluate(() => {
    document.querySelector('.tab[data-t="ar"]').click();
    // AR -> RAZ
    document.getElementById('convFrom').value = 'ar';
    document.getElementById('convFromIn').value = '1.5';
    document.getElementById('convFromBtn').click();
    const arOut = document.getElementById('convFromOut').textContent.replace(/\s+/g,' ').slice(0,80);
    // Lexile -> RAZ
    document.getElementById('convFrom').value = 'lex';
    document.getElementById('convFromIn').value = '200L';
    document.getElementById('convFromBtn').click();
    const lexOut = document.getElementById('convFromOut').textContent.replace(/\s+/g,' ').slice(0,80);
    // RAZ -> others
    document.getElementById('convRaz').value = 'C';
    document.getElementById('convRazBtn').click();
    const razOut = document.getElementById('convRazOut').textContent.replace(/\s+/g,' ').slice(0,120);
    return { arOut, lexOut, razOut, title: document.querySelector('#ar h2')?.textContent };
  });
  await new Promise(r=>setTimeout(r,200));

  // 4) NF dynamic level range (default aa->A, then aa->C rebuild)
  const nf = await page.evaluate(() => {
    document.querySelector('.tab[data-t="nf"]').click();
    const def = {
      note: document.getElementById('nfRangeNote')?.textContent,
      weeks: document.querySelectorAll('#nfPlan .nf-week').length,
      fromOpts: document.getElementById('nfFrom').options.length,
      toOpts: document.getElementById('nfTo').options.length
    };
    // rebuild aa -> C
    document.getElementById('nfTo').value = 'C';
    document.getElementById('nfRebuild').click();
    const rebuilt = {
      note: document.getElementById('nfRangeNote')?.textContent,
      weeks: document.querySelectorAll('#nfPlan .nf-week').length,
      daysFirstWeek: document.querySelectorAll('#nfPlan .nf-week:first-child .nf-day').length
    };
    return { def, rebuilt };
  });
  await new Promise(r=>setTimeout(r,300));

  // 5) no theme-classification tab remains
  const tabs = await page.evaluate(() => [...document.querySelectorAll('.tab')].map(t=>t.textContent.trim()));

  await browser.close();
  console.log(JSON.stringify({errors, master, saz, ar, nf, tabs}, null, 2));
  if (errors.length) { console.log('HAS ERRORS'); process.exit(2); }
  console.log('DIST VERIFY OK');
})().catch(e=>{ console.error(e); process.exit(1); });
