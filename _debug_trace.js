const puppeteer = require('C:/Users/kitekreek/.workbuddy/binaries/node/workspace/node_modules/puppeteer-core');
const path = require('path');
const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const file = 'file://' + path.resolve('dist/index.html');

(async () => {
  const browser = await puppeteer.launch({executablePath: EDGE, headless: 'new', args: ['--no-sandbox','--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.goto(file, {waitUntil: 'domcontentloaded', timeout: 60000});
  await new Promise(r=>setTimeout(r,1000));

  await page.evaluate(() => { document.querySelector('.tab[data-t="repeat"]').click(); });
  await new Promise(r=>setTimeout(r,500));

  // patch renderRepPick to log calls
  await page.evaluateOnNewDocument(() => {}); // no-op
  await page.evaluate(() => {
    const orig = window.renderRepPick;
    window.renderRepPick = function(...args) {
      console.log('renderRepPick called, currentRepPickKey=', window.currentRepPickKey, 'args=', args);
      return orig.apply(this, args);
    };
  });

  // click B tab and observe
  const before = await page.evaluate(() => ({ key: window.currentRepPickKey, info: document.querySelector('#repPickInfo').textContent }));
  console.log('before click:', before);

  await page.evaluate(() => {
    const b = document.querySelector('#repPickTabs .pickTab[data-key="B"]');
    console.log('clicking B tab', b?.dataset?.key);
    b.click();
  });
  await new Promise(r=>setTimeout(r,800));

  const after = await page.evaluate(() => ({ key: window.currentRepPickKey, info: document.querySelector('#repPickInfo').textContent, active: document.querySelector('#repPickTabs .pickTab.active')?.dataset?.key }));
  console.log('after click:', after);

  await browser.close();
})().catch(e=>{ console.error(e); process.exit(1); });
