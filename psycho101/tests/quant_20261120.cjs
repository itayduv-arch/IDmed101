'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),html=fs.readFileSync(path.join(root,'index.html'),'utf8'),window={};
for(const m of html.matchAll(/<script\s+src="\.\/([^"?]+\.js)(?:\?[^\"]*)?"\s*><\/script>/g)){
 vm.runInNewContext(fs.readFileSync(path.join(root,m[1]),'utf8'),{window,console,document:{addEventListener(){}}},{filename:m[1]});
}
const start=html.indexOf('const questions={'),end=html.indexOf('function defaultState()',start);
const questions=new Function('window',html.slice(start,end)+';return questions;')(window);
const sq=window.PSYCHO101_DIFFERENCE_SQUARES_20261120.quantitative;
const packs=window.PSYCHO101_PACKAGING_REMAINDERS_20261120.quantitative;
assert.equal(sq.length,12);assert.equal(packs.length,12);
// Independent answer keys, including direct arithmetic rather than the worked shortcut.
const expectedSquares=[67.5**2-42.5**2,52**2-48**2,100.5**2-99.5**2,31**2-29**2,(81**2-19**2)/62,(75**2-25**2)/(75+25),Math.sqrt(49**2+99),23**2-17**2,20.2**2-19.8**2,(-13)**2-(-7)**2,999**2-1];
for(let i=0;i<11;i++)assert(Math.abs(Number(sq[i].answers[sq[i].correct].replaceAll(',',''))-expectedSquares[i])<1e-9,sq[i].id);
assert.equal(sq[11].answers[sq[11].correct],'12a');
for(const a of [-10,-1,0,0.5,1,10])assert.equal((a+3)**2-(a-3)**2,12*a);
function unpack(s,perBox,perPack){
 let boxes=0,packs=0,singles=0;
 if(s.includes('ארגז אחד'))boxes=1;
 else boxes=Number(s.match(/(\d+) ארגזים/)?.[1]||0);
 if(s.includes('חבילה אחת'))packs=1;
 else packs=Number(s.match(/(\d+) חבילות/)?.[1]||0);
 if(s.includes('ועט בודד'))singles=1;
 else singles=Number(s.match(/(\d+) עטים בודדים/)?.[1]||0);
 return boxes*perBox+packs*perPack+singles;
}
const stockSpecs=[
 [72,8,4*72+3*8+5-137],[42,6,3*42+2*6+4-59],
 [80,10,5*80+4*10+7-198],[72,12,2*72+3*12+5-73],
 [null,null,(4*72+3*8+5)-(2*72+4*8+4)],
 [50,10,2*50+4*10+3+68],[72,8,(4*72+3*8+5)-(72+6*8+7)],
 [48,12,(5*48+2*12+3)-(2*48+3*12+8)],
 [null,null,(180+137-3*8-5)/72],[null,null,Math.floor((3*54+2*9+4-85)/9)],
 [null,null,Math.ceil((4*35+2*5+1-97)/35)],[48,6,3*48+4*6+2-53+19]
];
packs.forEach((q,i)=>{
 const [box,pack,total]=stockSpecs[i];
 const values=q.answers.map(s=>box?unpack(s,box,pack):Number(s));
 assert.equal(values[q.correct],total,q.id+' correct quantity');
 assert.equal(values.filter(x=>x===total).length,1,q.id+' one correct answer');
 assert.equal(new Set(values).size,4,q.id+' no equivalent options');
});
for(const bank of [sq,packs]){
 const dist=[0,0,0,0];
 for(const q of bank){
  dist[q.correct]++;
  assert.equal(questions.quantitative.filter(x=>x.id===q.id).length,1,q.id+' loaded exactly once');
  assert.equal(q.answers.length,4);assert.equal(new Set(q.answers).size,4);
  for(const field of ['explanation','strategy','trap','whenToUse'])assert(q[field].length>=20,q.id+' '+field);
  assert(q.fastSteps.length>=2);assert.equal(q.answerExplanations.length,4);
  assert(q.answerExplanations.every(x=>typeof x==='string'&&x.length>=20));
 }
 assert.deepEqual(dist,[3,3,3,3]);
}
const auditStart=html.indexOf('const SIMPLE_FOUNDATION_IDS='),auditEnd=html.indexOf('function adaptiveKey(',auditStart);
const pool=new Function('questions',html.slice(auditStart,auditEnd)+';return auditedExamPool("quantitative");')(questions);
for(const q of [...sq,...packs])assert(pool.some(x=>x.id===q.id),q.id+' eligible for practice');
const hashStart=html.indexOf('function adaptiveHash('),hashEnd=html.indexOf('\nfunction ',hashStart+1);
const choiceStart=html.indexOf('function preparePracticeChoices('),choiceEnd=html.indexOf('\nfunction startQuickLesson(',choiceStart);
const prepare=new Function(html.slice(hashStart,hashEnd)+'\n'+html.slice(choiceStart,choiceEnd)+';return preparePracticeChoices;')();
const original=JSON.stringify([...sq,...packs]);
for(const salt of ['one','two','three']){
 for(const q of prepare([...sq,...packs],salt)){
  const canonical=[...sq,...packs].find(x=>x.id===q.id);
  assert.equal(q.answers[q.correct],canonical.answers[canonical.correct]);
  q.answers.forEach((a,i)=>assert.equal(q.answerExplanations[i],canonical.answerExplanations[canonical.answers.indexOf(a)]));
 }
}
assert.equal(JSON.stringify([...sq,...packs]),original,'Shuffling must preserve canonical banks');
// Both service workers must include both files; the app uses the root worker as well.
for(const worker of [path.join(root,'sw.js'),path.join(root,'..','sw.js')]){
 const src=fs.readFileSync(worker,'utf8');
 const assets=vm.runInNewContext(src+'\nCORE;', {self:{addEventListener(){}}});
 for(const name of ['difference_squares_20261120.js','packaging_remainders_20261120.js'])assert(assets.some(x=>x.endsWith('/'+name)),worker+' offline '+name);
}
console.log('PASS 24 items: independent arithmetic, distinct answer values, balanced keys, explanations, live bank integration, practice eligibility and both offline manifests.');
