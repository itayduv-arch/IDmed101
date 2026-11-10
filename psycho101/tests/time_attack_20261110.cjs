'use strict';
/* Time Attack regression — typed numeric answers, mathematical bank, timing and integration. */
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const js=fs.readFileSync(path.join(root,'time_attack_20261110.js'),'utf8');
const doc={
  hidden:false,handlers:{},elements:{},activeElement:null,
  addEventListener(type,fn){this.handlers[type]=fn;},
  getElementById(id){return this.elements[id]||null;}
};
let now=1_000_000;
class FakeDate extends Date{static now(){return now;}}
let stored={},celebrated=0;
const window={};
vm.runInNewContext(js,{
  window,document:doc,navigator:{},
  Date:FakeDate,Math,Number,Set,Object,String,Array,
  setTimeout,clearTimeout,
  requestAnimationFrame:()=>1,cancelAnimationFrame:()=>{}
});
const engine=window.PSYCHO101_TIME_ATTACK;
assert(engine,'Time Attack not exported');
assert.equal(engine.normalizeAnswer('12,5'),12.5);
assert.equal(engine.normalizeAnswer(' −2.50 '),-2.5);
assert.equal(engine.normalizeAnswer('١٢'),12);
assert.equal(engine.normalizeAnswer(''),null);
assert.equal(engine.normalizeAnswer('1/2'),null);
assert(engine.isCorrect('12.50',12.5));
assert(!engine.isCorrect('12.4',12.5));
const questions=engine.generateBank();
assert(questions.length>=400,'Insufficient variety');
const groups={mul:0,powers:0,fractions:0,mental:0};
function expected(q){
  const p=q.prompt;let m;
  if(m=p.match(/^(\d+) × (\d+)$/))return +m[1]*+m[2];
  if(m=p.match(/^(\d+) ÷ (\d+)$/))return +m[1]/+m[2];
  if(m=p.match(/^(\d+)<sup>(\d+)<\/sup>$/))return (+m[1])**(+m[2]);
  if(m=p.match(/^√(\d+)$/))return Math.sqrt(+m[1]);
  if(m=p.match(/^∛(\d+)$/))return Math.cbrt(+m[1]);
  if(m=p.match(/^([\d.]+)% מתוך (\d+)$/))return +m[1]*+m[2]/100;
  if(m=p.match(/^(\d+)\/(\d+) = כמה אחוזים\?$/))return +m[1]/+m[2]*100;
  if(m=p.match(/^(\d+)\/(\d+) מתוך (\d+)$/))return +m[1]/+m[2]*+m[3];
  if(m=p.match(/^100 − (\d+)$/))return 100- +m[1];
  if(m=p.match(/^חצי מ־(\d+)$/))return +m[1]/2;
  if(m=p.match(/^פי 1\.5 מ־(\d+)$/))return +m[1]*1.5;
  if(m=p.match(/^(\d+) × 11$/))return +m[1]*11;
  if(m=p.match(/^(\d+) \+ (\d+)$/))return +m[1]+ +m[2];
  if(m=p.match(/^(\d+) דקות = כמה שעות\?$/))return +m[1]/60;
  if(m=p.match(/^([\d.]+) שעות = כמה דקות\?$/))return +m[1]*60;
  if(m=p.match(/^([\d.]+) ק"מ = כמה מטרים\?$/))return +m[1]*1000;
  throw new Error('Untested question format: '+p);
}
for(const q of questions){
  groups[q.group]++;
  assert(Number.isFinite(q.answer),'Non-finite answer: '+q.prompt);
  assert(Math.abs(q.answer-expected(q))<1e-9,'Wrong result: '+q.prompt);
  assert(Math.abs(q.answer*100-Math.round(q.answer*100))<1e-8,'Unreasonable recurring decimal: '+q.prompt);
  assert(q.tip&&q.plain,'Missing review tip');
}
assert(Object.values(groups).every(n=>n>=90));
for(const mode of ['mul','powers','fractions','mental','mixed']){
  const deck=engine.buildDeck(mode);
  assert.equal(new Set(deck.map(q=>q.id)).size,deck.length,'Repeated question in '+mode);
  assert.equal(deck.length,mode==='mixed'?questions.length:groups[mode]);
}
const input={value:'',focus(){}};
const form={addEventListener(){}};
doc.elements['ta-input']=input;
doc.elements['ta-form']=form;
doc.elements['ta-skip']={addEventListener(){}};
doc.elements['ta-score']={textContent:'',classList:{remove(){},add(){}},offsetWidth:1};
const host={innerHTML:'',querySelector(){return null;}};
engine.render(host,{
  topbar:()=>'',nav:()=>'',getRecords:()=>stored,
  saveRecords:value=>{stored=value;},
  celebrate:()=>{celebrated++;}
});
assert(host.innerHTML.includes('בחר מסלול'));
engine.setMode('mul');
engine.start();
assert(host.innerHTML.includes('id="ta-form"')&&host.innerHTML.includes('role="timer"'));
const initial=host.innerHTML.match(/class="ta-question ta-flip"[^>]*>([^<]+)<\/div>/);
assert(initial,'Initial question not rendered');
const current=initial[1].match(/^(\d+) ([×÷]) (\d+)$/);
assert(current,'Unexpected initial multiplication/division expression');
input.value='not-a-number';
engine.submit({preventDefault(){}});
assert.equal(doc.elements['ta-score'].textContent,0,'Invalid input gave points');
input.value=String(current[2]==='×'?+current[1]*+current[3]:+current[1]/+current[3]);
engine.submit({preventDefault(){}});
assert.equal(doc.elements['ta-score'].textContent,10,'Correct typed answer not scored');
engine.submit({preventDefault(){}});
assert.equal(doc.elements['ta-score'].textContent,10,'Double submission was accepted');
now+=61_000;
doc.handlers.visibilitychange();
assert(host.innerHTML.includes('שיא אישי חדש'),'No results after timer deadline');
assert.equal(stored['mul-60'].bestScore,10);
assert.equal(stored['mul-60'].bestCorrect,1);
assert.equal(celebrated,1);
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
assert(html.includes('time_attack_20261110.js?v=20261110-66'));
assert(html.includes('time_attack_20261110.css?v=20261110-66'));
assert(html.includes("view==='time-attack'"));
assert(html.includes('window.PSYCHO101_TIME_ATTACK.render'));
assert(html.includes('timeAttackRecords'));
assert(html.includes("hubTile('time-attack'"),'Time Attack not reachable from 4-card home');
for(const file of ['sw.js','psycho101/sw.js']){
  const worker=fs.readFileSync(path.join(root,'..',file),'utf8');
  assert(worker.includes('time_attack_20261110.js'),file+' script not offline');
  assert(worker.includes('time_attack_20261110.css'),file+' style not offline');
}
assert.equal(JSON.parse(fs.readFileSync(path.join(root,'version.json'),'utf8')).version,'20261110-67');
console.log('PASS: 514 checked math facts, numeric typing, score lock, countdown deadline, personal best, navigation, mobile/offline assets');
