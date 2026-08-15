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

  // 1) tabs
  const tabs = await page.evaluate(() => [...document.querySelectorAll('.tabs > .tab')].map(t=>t.textContent.trim()));

  // 2) guide tab content
  const guide = await page.evaluate(() => {
    document.querySelector('.tab[data-t="guide"]').click();
    return {
      headings: [...document.querySelectorAll('#guide h2')].map(h=>h.textContent.trim()),
      rungs: document.querySelectorAll('#ladderRungs .rung').length,
      ruleBlocks: document.querySelectorAll('#guide .rule-block').length
    };
  });
  await new Promise(r=>setTimeout(r,200));

  // 3) Heinemann GK/G1/G2 conversion
  const heinemann = await page.evaluate(() => {
    document.querySelector('.tab[data-t="ar"]').click();
    function test(sysVal, input) {
      document.getElementById('convFrom').value = sysVal;
      document.getElementById('convFrom').dispatchEvent(new Event('change'));
      document.getElementById('convFromIn').value = input;
      document.getElementById('convFromBtn').click();
      return document.getElementById('convFromOut').textContent.replace(/\s+/g,' ').slice(0,60);
    }
    return {
      gk: test('heinemann', 'GK'),
      g1: test('heinemann', 'G1'),
      g2: test('heinemann', 'G2'),
      letterA: test('heinemann', 'A'),
      letterG: test('heinemann', 'G')
    };
  });
  await new Promise(r=>setTimeout(r,200));

  await browser.close();
  console.log(JSON.stringify({errors, tabs, guide, heinemann}, null, 2));
  if (errors.length) { console.log('HAS ERRORS'); process.exit(2); }
  console.log('V3.15 VERIFY OK');
})().catch(e=>{ console.error(e); process.exit(1); });
