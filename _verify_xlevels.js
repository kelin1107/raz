const puppeteer = require('C:/Users/kitekreek/.workbuddy/binaries/node/workspace/node_modules/puppeteer-core');
const path = 'C:/Users/kitekreek/WorkBuddy/2026-07-31-23-21-19/raz-library/dist/index.html';
const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';

(async () => {
  const browser = await puppeteer.launch({ executablePath: EDGE, headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push('PAGEERROR: ' + e.message));
  await page.goto('file:///' + path, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.evaluate(() => { const t = document.querySelector('.tab[data-t="ar"]'); if (t) t.click(); });
  await new Promise(r => setTimeout(r, 300));

  // left: each new system -> RAZ
  const tests = [
    ['rr', 'Magenta', 'A'], ['rr', 'Sapphire', 'N'],
    ['bc', 'Pink A', 'aa'], ['bc', 'Ruby', 'N'], ['bc', 'Pearl', 'R'],
    ['pearson', '预备级', 'aa'], ['pearson', '5', 'E'], ['pearson', '培生8', 'H'],
    ['heinemann', 'A', 'aa'], ['heinemann', 'G', 'F'],
    ['randhouse', 'Step 1', 'C'], ['randhouse', 'Step 4', 'I'],
    ['wonders', 'K', 'aa'], ['wonders', '2', 'K'], ['wonders', '6', 'Z'],
    ['powerup', 'Starter', 'aa'], ['powerup', 'Level 3', 'G'], ['powerup', 'Level 6', 'M']
  ];
  const leftResults = [];
  for (const [mode, val, expect] of tests) {
    const got = await page.evaluate((mode, val) => {
      document.getElementById('convFrom').value = mode;
      document.getElementById('convFrom').dispatchEvent(new Event('change'));
      document.getElementById('convFromIn').value = val;
      document.getElementById('convFromBtn').click();
      return document.getElementById('convFromOut').innerText;
    }, mode, val);
    const ok = got.includes('RAZ ' + expect);
    leftResults.push({ mode, val, expect, ok, got: got.slice(0, 40) });
  }

  // right: RAZ -> all new systems shown
  await page.evaluate(() => {
    const sel = document.getElementById('convRaz');
    sel.value = 'K'; sel.dispatchEvent(new Event('change'));
    document.getElementById('convRazBtn').click();
  });
  await new Promise(r => setTimeout(r, 100));
  const rightTxt = await page.evaluate(() => document.getElementById('convRazOut').innerText);
  const sysShown = ['红火箭', '大猫', '培生', '海尼曼', '兰登', 'Wonders', 'Power Up'].map(s => ({ s, shown: rightTxt.includes(s) }));

  // options count in dropdown
  const optCount = await page.evaluate(() => document.getElementById('convFrom').options.length);

  console.log('=== LEFT (new systems -> RAZ) ===');
  let pass = 0;
  leftResults.forEach(r => { if (r.ok) pass++; console.log((r.ok ? 'OK  ' : 'FAIL') + ' ' + r.mode + ' "' + r.val + '" => expect RAZ ' + r.expect + ' | ' + r.got); });
  console.log(`left pass ${pass}/${leftResults.length}`);
  console.log('=== RIGHT (RAZ K -> new systems) ===');
  sysShown.forEach(s => console.log((s.shown ? 'OK  ' : 'FAIL') + ' ' + s.s));
  console.log('dropdown options =', optCount);
  console.log('=== JS errors (ignore Cloudflare beacon under file://) ===');
  const real = errors.filter(e => !/cloudflare|rum|insights/i.test(e));
  console.log(real.length ? real.join('\n') : '(none)');
  await browser.close();
  const allOk = pass === leftResults.length && sysShown.every(s => s.shown) && optCount >= 12 && real.length === 0;
  console.log(allOk ? '\nVERIFY OK' : '\nVERIFY HAS ISSUES');
})();
