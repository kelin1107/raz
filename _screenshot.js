const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

(async () => {
  const filePath = path.resolve(__dirname, 'dist/index.html');
  const url = 'file:///' + filePath.replace(/\\/g, '/');
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  await page.goto(url, { waitUntil: 'networkidle0' });
  // click NF tab
  await page.waitForSelector('[data-t="nf"]');
  await page.click('[data-t="nf"]');
  await new Promise(r => setTimeout(r, 600));
  // screenshot the overview table area
  const ov = await page.$('#nfPlan');
  if (ov) {
    await ov.screenshot({ path: '_nf_screenshot.png', type: 'png' });
    console.log('saved _nf_screenshot.png');
  } else {
    console.log('nfPlan not found');
  }
  await browser.close();
})();
