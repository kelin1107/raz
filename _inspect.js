const puppeteer = require('C:/Users/kitekreek/.workbuddy/binaries/node/workspace/node_modules/puppeteer-core');
const path = require('path');
const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const file = 'file://' + path.resolve('raz_library.html');

(async () => {
  const browser = await puppeteer.launch({executablePath: EDGE, headless: 'new', args: ['--no-sandbox','--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.goto(file, {waitUntil: 'domcontentloaded', timeout: 60000});
  await new Promise(r=>setTimeout(r,1000));
  const info = await page.evaluate(() => {
    const nf=DATA.books.filter(b=>b.type==='NF' && ['aa','A','B','C'].includes(b.level));
    const themes=[...new Set(nf.map(b=>b.theme))];
    const fams=DATA.themes.mergeFamilies.map(f=>({family:f.family, merge:f.merge.slice(0,6)}));
    const mapped=nf.map(b=>{const g=genFamOf(b.theme); return {id:b.id,title:b.title,theme:b.theme,fam:g&&g.family};});
    return {nfCount:nf.length, themes, fams, sample:mapped.slice(0,20)};
  });
  console.log(JSON.stringify(info,null,2));
  await browser.close();
})().catch(e=>{ console.error(e); process.exit(1); });
