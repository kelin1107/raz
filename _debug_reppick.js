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

  // ensure repeat tab active
  await page.evaluate(() => { document.querySelector('.tab[data-t="repeat"]').click(); });
  await new Promise(r=>setTimeout(r,500));

  // get initial state
  const before = await page.evaluate(() => ({
    info: document.querySelector('#repPickInfo').textContent,
    activeTab: document.querySelector('#repPickTabs .pickTab.active')?.textContent,
    tabs: [...document.querySelectorAll('#repPickTabs .pickTab')].map(t=>t.textContent)
  }));
  console.log('BEFORE:', JSON.stringify(before, null, 2));

  // click a non-active tab (B if active is A, else C)
  const clicked = await page.evaluate(() => {
    const active = document.querySelector('#repPickTabs .pickTab.active');
    const target = [...document.querySelectorAll('#repPickTabs .pickTab')].find(t => !t.classList.contains('active') && /^(B|C|D)$/.test(t.textContent.trim()[0]));
    if (!target) return null;
    const beforeText = target.textContent;
    target.click();
    return beforeText;
  });
  await new Promise(r=>setTimeout(r,500));

  const after = await page.evaluate(() => ({
    info: document.querySelector('#repPickInfo').textContent,
    activeTab: document.querySelector('#repPickTabs .pickTab.active')?.textContent,
    firstBook: document.querySelector('#repPickList .rep-item')?.textContent
  }));
  console.log('CLICKED:', clicked);
  console.log('AFTER:', JSON.stringify(after, null, 2));

  await browser.close();
  console.log('ERRORS:', errors);
})().catch(e=>{ console.error(e); process.exit(1); });
