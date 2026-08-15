const puppeteer = require('C:/Users/kitekreek/.workbuddy/binaries/node/workspace/node_modules/puppeteer-core');
const path = require('path');

const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const file = 'file://' + path.resolve('raz_library.html');
const tabs = ['master','lookup','repeat','methods','levels','ar','ladder','themes','saz','gen','nf'];

(async () => {
  const browser = await puppeteer.launch({
    executablePath: EDGE,
    headless: 'new',
    args: ['--no-sandbox','--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({width: 1100, height: 820, deviceScaleFactor: 1});
  await page.goto(file, {waitUntil: 'networkidle0'});
  // give JS a moment
  await new Promise(r => setTimeout(r, 600));

  for (const t of tabs) {
    // click the tab
    await page.evaluate((tab) => {
      const el = document.querySelector('.tab[data-t="'+tab+'"]');
      if (el) el.click();
    }, t);
    await new Promise(r => setTimeout(r, 350));
    // screenshot top of viewport (shows tab bar + first row)
    await page.screenshot({path: 'shots/'+t+'_top.png', clip: {x:0,y:0,width:1100,height:430}});
  }

  // special: scroll inside #lvTable to reveal sticky-header gap
  await page.evaluate(() => {
    const el = document.querySelector('.tab[data-t="levels"]'); if(el) el.click();
  });
  await new Promise(r => setTimeout(r, 300));
  await page.evaluate(() => {
    const c = document.querySelector('#lvTable')?.closest('div[style*="overflow"]');
    if (c) c.scrollTop = 120;
  });
  await new Promise(r => setTimeout(r, 200));
  await page.screenshot({path: 'shots/levels_scrolled.png', clip: {x:0,y:0,width:1100,height:520}});

  // master table scrolled
  await page.evaluate(() => { const el=document.querySelector('.tab[data-t="master"]'); if(el) el.click(); });
  await new Promise(r => setTimeout(r, 300));
  await page.evaluate(() => { const c=document.querySelector('#mTable')?.closest('div[style*="overflow"]'); if(c) c.scrollTop=120; });
  await new Promise(r => setTimeout(r, 200));
  await page.screenshot({path: 'shots/master_scrolled.png', clip: {x:0,y:0,width:1100,height:520}});

  await browser.close();
  console.log('OK');
})().catch(e => { console.error(e); process.exit(1); });
