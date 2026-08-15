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

  const tabs=await page.$$('.tabs .tab');
  for(const t of tabs){ if((await t.evaluate(el=>el.innerText)).includes('NF')){ await t.click(); break; } }
  await new Promise(r=>setTimeout(r,200));

  const getWeek1=()=>page.evaluate(()=>{ const w=document.querySelector('#nfPlan .nf-week'); return w?w.innerText:''; });
  const w1=await getWeek1();

  // 默认 age=3, aa-A: toddler base + lv1 hint (说关键词 / 大人备料裁剪)
  const defOK = w1.includes('纸盘/纸箱做动物面具') && w1.includes('大人备料裁剪') && w1.includes('说关键词');

  // 即时刷新：改 age=8，触发 input，不点按钮
  await page.evaluate(()=>{ const el=document.getElementById('nfAge'); el.value='8'; el.dispatchEvent(new Event('input',{bubbles:true})); });
  await new Promise(r=>setTimeout(r,200));
  const w1b=await getWeek1();
  const ageOK = w1b.includes('动物栖息地 diorama') && w1b.includes('独立完成');

  // 改级别 toLv=H，触发 change
  await page.evaluate(()=>{ const s=document.getElementById('nfTo'); s.value='H'; s.dispatchEvent(new Event('change',{bubbles:true})); });
  await new Promise(r=>setTimeout(r,200));
  const w1c=await getWeek1();
  const lvOK = w1c.includes('写观察句') || w1c.includes('自己记数据');

  // 无 draw 行
  const noDraw = !w1.includes('✏️ 画+话认字');

  // ver
  const ver=await page.evaluate(()=>document.querySelector('header .ver').innerText);

  console.log('ver:',ver);
  console.log('default age3 aa-A:',defOK);
  console.log('age->8 instant refresh (diorama/独立):',ageOK);
  console.log('level->H steam hint changed:',lvOK);
  console.log('no draw row:',noDraw);
  console.log('JS errors:',errs.length,errs);

  const ok = ver==='v3.21' && defOK && ageOK && lvOK && noDraw && errs.length===0;
  console.log('VERIFY',ok?'PASS':'FAIL');
  await browser.close();
  process.exit(ok?0:1);
})();
