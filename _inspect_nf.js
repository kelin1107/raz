const puppeteer = require('C:/Users/kitekreek/.workbuddy/binaries/node/workspace/node_modules/puppeteer-core');
const path = require('path');
const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const file = 'file://' + path.resolve('dist/index.html');

(async () => {
  const browser = await puppeteer.launch({executablePath: EDGE, headless: 'new', args: ['--no-sandbox','--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.goto(file, {waitUntil: 'domcontentloaded', timeout: 60000});
  await new Promise(r=>setTimeout(r,1200));
  const info = await page.evaluate(() => {
    document.querySelector('.tab[data-t="nf"]').click();
    document.getElementById('nfTo').value = 'C';
    document.getElementById('nfRebuild').click();
    const plan = document.getElementById('nfPlan');
    const weeks = plan.querySelectorAll('.nf-week');
    const firstWeek = weeks[0];
    return {
      weekCount: weeks.length,
      firstWeekClass: firstWeek ? firstWeek.className : null,
      firstWeekHTMLhead: firstWeek ? firstWeek.innerHTML.slice(0, 400) : null,
      anyDayClass: !!plan.querySelector('.day'),
      anyNfDayClass: !!plan.querySelector('.nf-day'),
      dayLikeClasses: [...plan.querySelectorAll('[class]')].slice(0,40).map(e=>e.className).filter(c=>/day|nf-day/i.test(c))
    };
  });
  console.log(JSON.stringify(info, null, 2));
  await browser.close();
})().catch(e=>{ console.error(e); process.exit(1); });
