const puppeteer=require('puppeteer-core');
const path=require('path');
const html=path.resolve(__dirname,'dist/index.html');
(async()=>{
  const browser=await puppeteer.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',args:['--headless','--disable-gpu','--no-sandbox']});
  const page=await browser.newPage();
  const errs=[];
  page.on('pageerror',e=>errs.push(e.message));
  await page.goto('file://'+html,{waitUntil:'networkidle0'});
  await new Promise(r=>setTimeout(r,300));
  const data=await page.evaluate(()=>{
    return {
      h1: document.querySelector('header h1').innerText.replace(/\s+/g,' '),
      sub: document.querySelector('header p').innerText,
      hasCompliance: !!document.querySelector('.compliance'),
      ver: document.querySelector('header .ver') ? document.querySelector('header .ver').innerText : null,
      footer: document.querySelector('footer').innerText
    };
  });
  console.log('h1:',data.h1);
  console.log('sub:',data.sub);
  console.log('ver badge:',data.ver);
  console.log('compliance removed:',!data.hasCompliance);
  console.log('footer:',data.footer);
  console.log('JS errors:',errs.length,errs);
  const ok=!data.hasCompliance && data.sub.includes('非官方整理') && data.ver==='v3.19' && data.sub.includes('元数据索引') && errs.length===0;
  console.log('VERIFY',ok?'PASS':'FAIL');
  await browser.close();
  process.exit(ok?0:1);
})();
