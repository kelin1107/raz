const puppeteer=require('puppeteer-core');
const path=require('path');
const fs=require('fs');
const html=path.resolve(__dirname,'dist/index.html');
(async()=>{
  const browser=await puppeteer.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',args:['--headless','--disable-gpu','--no-sandbox']});
  const page=await browser.newPage();
  const logs=[], errs=[];
  page.on('console',m=>logs.push(m.text()));
  page.on('pageerror',e=>errs.push(e.message));
  await page.goto('file://'+html,{waitUntil:'networkidle0'});
  await new Promise(r=>setTimeout(r,300));
  const data=await page.evaluate(()=>{
    const t=document.querySelector('header p').innerText;
    const c=document.querySelector('.compliance').innerText.replace(/\s+/g,' ');
    const k=document.querySelector('.kidnote').innerText.replace(/\s+/g,' ');
    const footer=document.querySelector('footer').innerText;
    const ver=document.querySelector('header p').innerText.match(/v3\.(\d+)/)?.[0];
    return {header:t,compliance:c,kidnote:k,footer,ver};
  });
  console.log('header:',data.header);
  console.log('compliance:',data.compliance);
  console.log('kidnote:',data.kidnote);
  console.log('footer:',data.footer);
  console.log('JS errors:',errs.length,errs);
  const ok=data.header.includes('元数据索引') && data.header.includes('v3.18')
    && data.compliance.includes('非官方整理') && data.compliance.includes('不替代官方订阅')
    && data.kidnote.includes('编号规则') && data.kidnote.includes('2810')
    && errs.length===0;
  console.log('VERIFY',ok?'PASS':'FAIL');
  await browser.close();
  process.exit(ok?0:1);
})();
