const fs = require('fs');
const txt = fs.readFileSync('raz_themes.html','utf8');
const m = txt.match(/window\.__PAY=(\{[\s\S]*?\});/);
const PAY = JSON.parse(m[1]);
const READ_LEVELS = PAY.levels.filter(l=>l!=='SAZ');
function ageToBaseIdx(age){age=Math.max(2,Math.min(12,parseInt(age,10)||4));if(age<=3)return 0;if(age>=12)return 8;const map={4:0,5:1,6:2,7:3,8:4,9:5,10:6,11:7};return map[age];}
function expDelta(m){return ({'0':-1,'3-6':0,'6-12':0,'12-24':1,'24+':2})[m]||0;}
function famOf(theme){return PAY.families.find(f=>(f.family||'').includes(theme)||(f.merge||[]).includes(theme));}
function gen(age,exp,span){
  const center=Math.max(0,Math.min(READ_LEVELS.length-1,ageToBaseIdx(age)+expDelta(exp)));
  const lo=Math.max(0,center-span),hi=Math.min(READ_LEVELS.length-1,center+span);
  const levels=READ_LEVELS.slice(lo,hi+1);
  const lvSet={};levels.forEach(l=>lvSet[l]=1);
  const books=PAY.books.filter(b=>{const fb=famOf(b.theme);return fb&&lvSet[b.level];});
  let byFam={};
  books.forEach(b=>{const fb=famOf(b.theme);byFam[fb.family]=(byFam[fb.family]||0)+1;});
  return {center:READ_LEVELS[center],levels,total:books.length,byFam};
}
function show(age,exp,span){const r=gen(age,exp,span);console.log(`age=${age} exp=${exp} span=${span} -> center=${r.center} levels=[${r.levels.join(',')}] total=${r.total}`);console.log('   byFam:',JSON.stringify(r.byFam));}
show(4,'0',1);
show(4,'0',0);
show(6,'6-12',1);
show(8,'12-24',2);
show(10,'24+',1);
