const puppeteer = require('C:/Users/kitekreek/.workbuddy/binaries/node/workspace/node_modules/puppeteer-core');
const path = require('path');
(async () => {
  const browser = await puppeteer.launch({ executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(String(e)));
  const url = 'file://' + path.resolve('dist/index.html');
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.evaluate(() => { document.querySelector('[data-t="ar"]').click(); });
  await new Promise(r => setTimeout(r, 400));

  const res = await page.evaluate(() => {
    // dropdown option count
    const opts = Array.from(document.querySelectorAll('#convFrom option')).map(o => o.value);
    // forward conversions per new system
    const fwd = {};
    const testFwd = (k, v) => { const el = document.getElementById('convFrom'); el.value = k; el.dispatchEvent(new Event('change')); const inp = document.getElementById('convFromIn'); inp.value = v; document.getElementById('convFromBtn').click(); const m = document.getElementById('convFromOut').textContent.match(/RAZ\s*([A-Za-z+]+)/); return m ? m[1] : 'NONE'; };
    fwd['ng'] = testFwd('ng', 'Level 2');
    fwd['usborne'] = testFwd('usborne', 'Level 3');
    fwd['pm'] = testFwd('pm', '20');
    fwd['risheng'] = testFwd('risheng', '4级');
    fwd['icr'] = testFwd('icr', 'My First');
    fwd['penguin'] = testFwd('penguin', 'Easystarts');
    fwd['rr'] = testFwd('rr', 'Magenta');
    fwd['bc'] = testFwd('bc', 'Ruby');
    fwd['pm-num'] = testFwd('pm', '5');
    // reverse panel: pick RAZ K
    const ri = document.getElementById('convRaz'); ri.value = 'K'; document.getElementById('convRazBtn').click();
    const txt = document.getElementById('convRazOut').textContent;
    const rev = {};
    ['红火箭','大猫','培生','海尼曼','兰登','Wonders','Power Up','国家地理','Usborne','PM','丽声','I Can Read','企鹅'].forEach(s => {
      const i = txt.indexOf(s);
      rev[s] = i >= 0 ? txt.slice(i, i + 40).replace(/\s+/g, ' ').trim() : 'MISSING';
    });
    return { optCount: opts.length, opts, fwd, rev };
  });

  console.log('dropdown options =', res.optCount, '(expect 18)');
  console.log('fwd:', JSON.stringify(res.fwd, null, 0));
  console.log('reverse@RAZ K:', JSON.stringify(res.rev, null, 0));
  console.log('pageerrors:', errors.length ? errors : 'none');
  await browser.close();
  const ok = res.optCount === 18 && errors.length === 0 && res.fwd.ng === 'H' && res.fwd.pm === 'S' && res.fwd['pm-num'] === 'D' && res.fwd.usborne === 'H' && res.fwd.risheng === 'G' && res.fwd.icr === 'aa' && res.fwd.penguin === 'H';
  console.log(ok ? 'VERIFY OK' : 'VERIFY FAIL');
})().catch(e => { console.error('FATAL', e); process.exit(1); });
