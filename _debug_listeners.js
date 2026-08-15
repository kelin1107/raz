const puppeteer = require('C:/Users/kitekreek/.workbuddy/binaries/node/workspace/node_modules/puppeteer-core');
const path = require('path');
const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const file = 'file://' + path.resolve('dist/index.html');

(async () => {
  const browser = await puppeteer.launch({executablePath: EDGE, headless: 'new', args: ['--no-sandbox','--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.goto(file, {waitUntil: 'domcontentloaded', timeout: 60000});
  await new Promise(r=>setTimeout(r,1000));

  const cdp = await page.target().createCDPSession();
  await cdp.send('Runtime.enable');
  await cdp.send('DOM.enable');

  const getListeners = async (selector) => {
    const {result: {objectId}} = await cdp.send('Runtime.evaluate', {
      expression: `document.querySelector('${selector}')`,
      returnByValue: false
    });
    if (!objectId) return null;
    const res = await cdp.send('DOMDebugger.getEventListeners', {objectId});
    return res.listeners.map(l => ({type: l.type, handler: l.handler?.description?.slice(0, 100)}));
  };

  console.log('top tab listeners:', JSON.stringify(await getListeners('.tabs > .tab[data-t="repeat"]'), null, 2));
  console.log('pickTab listeners:', JSON.stringify(await getListeners('#repPickTabs .pickTab[data-key="B"]'), null, 2));

  await browser.close();
})().catch(e=>{ console.error(e); process.exit(1); });
