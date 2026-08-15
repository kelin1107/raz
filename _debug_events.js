const puppeteer = require('C:/Users/kitekreek/.workbuddy/binaries/node/workspace/node_modules/puppeteer-core');
const path = require('path');
const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const file = 'file://' + path.resolve('dist/index.html');

(async () => {
  const browser = await puppeteer.launch({executablePath: EDGE, headless: 'new', args: ['--no-sandbox','--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.goto(file, {waitUntil: 'domcontentloaded', timeout: 60000});
  await new Promise(r=>setTimeout(r,1000));

  // Get event listeners on a pickTab and a top tab
  const info = await page.evaluate(() => {
    const pickTab = document.querySelector('#repPickTabs .pickTab');
    const topTab = document.querySelector('.tabs > .tab');
    const getListeners = (el) => {
      if (!el) return null;
      return {
        tag: el.tagName,
        className: el.className,
        outer: el.outerHTML.slice(0, 200),
        parent: el.parentElement?.className
      };
    };
    return {
      pickTab: getListeners(pickTab),
      topTab: getListeners(topTab),
      pickTabsHTML: document.querySelector('#repPickTabs')?.innerHTML.slice(0, 300)
    };
  });
  console.log(JSON.stringify(info, null, 2));
  await browser.close();
})().catch(e=>{ console.error(e); process.exit(1); });
