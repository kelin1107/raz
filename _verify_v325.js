const puppeteer = require('puppeteer-core');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: 'new',
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  const url = 'file://' + path.resolve('dist/index.html');
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 120000 });
  await new Promise(r => setTimeout(r, 1500));

  const errors = [];
  page.on('pageerror', e => errors.push('PAGEERR: ' + e.message));
  page.on('console', m => {
    if (m.type() === 'error') {
      const t = m.text();
      if (!/cloudflare|cf-beacon|beacon/i.test(t)) errors.push(t);
    }
  });

  await page.evaluate(() => { document.querySelector('.tab[data-t="saz"]').click(); });
  await new Promise(r => setTimeout(r, 300));
  await page.evaluate(() => { document.querySelector('#sazModeTabs .mtab[data-m="week"]').click(); });
  await new Promise(r => setTimeout(r, 500));

  // Directly call internal builder to inspect specific units
  const report = await page.evaluate(() => {
    function unitText(u) {
      return u.days.map(d => {
        if (d.kind === 'read') return d.dow + ':' + d.book.title + ' -> ' + (d.task || '');
        if (d.kind === 'exp') return d.dow + ':EXP ' + d.exp.t;
        return d.dow + ':' + d.icon + ' ' + d.title + ' -> ' + d.text;
      }).join('\n');
    }
    function findUnit(theme, gb, titleSub) {
      const wks = sazBuildWeeks(theme, gb, 40);
      const u = wks.find(w => w.title.toLowerCase().includes(titleSub.toLowerCase()));
      return u ? { found: true, title: u.title, text: unitText(u) } : { found: false };
    }
    function findUnitAny(titleSub) {
      const themes = ['生命世界','地球与宇宙','物质与能量','身体与健康','社会与人文'];
      for (const th of themes) {
        const u = findUnit(th, '', titleSub);
        if (u.found) return u;
      }
      return { found: false };
    }
    return {
      comets: findUnit('地球与宇宙', '', 'comet'),
      clouds: findUnit('地球与宇宙', '', 'cool cloud'),
      finches: findUnitAny('finch'),
      deforestation: findUnit('地球与宇宙', '', 'deforestation'),
      generic: (() => {
        const all = sazBuildWeeks('', '', 20);
        let g = 0;
        all.forEach(u => u.days.forEach(d => {
          if (d.text && (d.text.includes('书中哪幅图展示了核心概念') || d.text.includes('用积木 / 画画做出本单元的核心概念模型'))) g++;
        }));
        return g;
      })()
    };
  });

  console.log('=== Comets ===');
  console.log(report.comets.found ? report.comets.title + '\n' + report.comets.text : 'NOT FOUND');
  console.log('=== Cool Clouds ===');
  console.log(report.clouds.found ? report.clouds.title + '\n' + report.clouds.text : 'NOT FOUND');
  console.log('=== Darwin\'s Finches ===');
  console.log(report.finches.found ? report.finches.title + '\n' + report.finches.text : 'NOT FOUND');
  console.log('=== Deforestation ===');
  console.log(report.deforestation.found ? report.deforestation.title + '\n' + report.deforestation.text : 'NOT FOUND');
  console.log('Generic template hits in first 20 units:', report.generic);
  if (errors.length) console.log('ERRORS:', errors);

  const ok = report.comets.found && report.clouds.found && report.finches.found && report.deforestation.found &&
    report.generic < 5 && errors.length === 0;
  console.log(ok ? 'VERIFY_OK' : 'VERIFY_FAIL');
  await browser.close();
  process.exit(ok ? 0 : 1);
})();
