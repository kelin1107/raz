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

  // 切换到 NF 周计划 tab
  const tabs=await page.$$('.tabs .tab');
  let nfTab=null;
  for(const t of tabs){
    const text=await t.evaluate(el=>el.innerText);
    if(text.includes('NF')){ nfTab=t; break; }
  }
  if(!nfTab){ console.log('NF tab not found'); await browser.close(); process.exit(1); }
  await nfTab.click();
  await new Promise(r=>setTimeout(r,200));

  const data=await page.evaluate(()=>{
    const h1=document.querySelector('header h1').innerText.replace(/\s+/g,' ');
    const ver=document.querySelector('header .ver')?document.querySelector('header .ver').innerText:null;
    const ageInp=document.getElementById('nfAge');
    const weeks=document.querySelectorAll('#nfPlan .nf-week.active, #nfPlan .nf-week');
    const firstWeek=weeks[0];
    const rawHtml=firstWeek?firstWeek.innerHTML:'';
    const hasITag=rawHtml.includes('<i>') || rawHtml.includes('</i>') || rawHtml.includes('&lt;i&gt;') || rawHtml.includes('&lt;/i&gt;');
    const w1Text=firstWeek?firstWeek.innerText:'';
    return {h1,ver,ageValue:ageInp?ageInp.value:null,hasAge:!!ageInp,w1Text,hasITag};
  });

  // 改年龄为 7 岁，点击重新生成
  await page.evaluate(()=>{ document.getElementById('nfAge').value='7'; });
  await page.click('#nfRebuild');
  await new Promise(r=>setTimeout(r,300));

  const data2=await page.evaluate(()=>{
    const weeks=document.querySelectorAll('#nfPlan .nf-week');
    const first=weeks[0];
    return {w1Text:first?first.innerText:'', hasITag:first?first.innerHTML.includes('<i>') || first.innerHTML.includes('</i>') || first.innerHTML.includes('&lt;i&gt;'):false};
  });

  console.log('h1:',data.h1);
  console.log('ver:',data.ver);
  console.log('age input:',data.hasAge,data.ageValue);
  console.log('default age3 hint:',data.w1Text.includes('大人备料裁剪'));
  console.log('age7 hint:',data2.w1Text.includes('孩子主导制作'));
  console.log('no raw i tags:',!data.hasITag && !data2.hasITag);
  console.log('JS errors:',errs.length,errs);

  const ok=data.ver==='v3.20' && data.hasAge && data.ageValue==='3'
    && data.w1Text.includes('🧩 本周手工项目')
    && data.w1Text.includes('🔬 本周 STEAM 项目')
    && data.w1Text.includes('大人备料裁剪')
    && data2.w1Text.includes('孩子主导制作')
    && !data.hasITag && !data2.hasITag
    && errs.length===0;
  console.log('VERIFY',ok?'PASS':'FAIL');
  await browser.close();
  process.exit(ok?0:1);
})();
