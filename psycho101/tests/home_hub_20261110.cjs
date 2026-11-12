'use strict';
/* Regression tests: uncluttered Psycho101 homepage and four nested choices. */
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
function extract(start,end){
  const i=html.indexOf(start),j=html.indexOf(end,i+start.length);
  assert(i>=0&&j>i,'Could not find menu function boundaries');
  return html.slice(i,j);
}
const context={
 state:{streak:4,dailyWarmup:{}},
 topbar:()=>'<header>top</header>',
 nav:()=>'<nav>bottom</nav>',
 getTimeGreeting:()=> 'בוקר טוב',
 warmupAnsweredCount:()=>9,
 updateStreak:()=>{},saveLocal:()=>{},
 topicOptions:()=>'<option value="all">הכול</option>'
};
vm.createContext(context);
vm.runInContext(extract('function hubTile(','function quickLessonNode(')+
  extract('function practiceMenu(){','function wordsDashboard(){'),context);
const home=context.home(),menu=context.practiceMenu();
const categories=['path-daily','path-quant','path-verbal','time-attack'];
for(const output of [home,menu]){
  const buttons=Array.from(output.matchAll(/class="psy-hub-tile" onclick="go\('([^']+)'\)"/g)).map(m=>m[1]);
  assert.deepEqual(buttons,categories,'Exactly four category choices');
  assert(!output.includes('lesson-node'),'Old list leaked into overview');
  assert(!output.includes('hero-action'),'Duplicate start action leaked into overview');
}
assert(home.includes('aria-valuenow="9"'),'Daily progress absent');
assert(home.includes('9 <span>/ 20</span>'),'Progress count absent');
for(const [screen,fn,total] of [
  ['Daily','dailyPath',4],['Quant','quantitativePath',5],['Verbal','verbalPath',3]
]){
  const output=context[fn]();
  const buttons=Array.from(output.matchAll(/class="psy-hub-action" onclick="([^"]+)"/g)).map(m=>m[1]);
  assert.equal(buttons.length,total,screen+' options count');
  assert(buttons.every(x=>!x.includes('onclick')&&x.endsWith(')')),screen+' malformed onclick');
  assert(output.includes("go('practice-menu')"),screen+' missing return navigation');
}
assert(context.dailyPath().includes("startQuickLesson('warmup')"));
assert(context.quantitativePath().includes("startTimedQuant()"));
assert(context.quantitativePath().includes("startFocused('quantitative','hub-quant-topic')"));
assert(context.verbalPath().includes("startFocused('verbal','hub-verbal-topic')"));
for(const page of categories.filter(x=>x!=='time-attack')){
  assert(html.includes("view==='"+page+"'"),'Missing render route '+page);
}
assert(html.includes("window.PSYCHO101_TIME_ATTACK.render"),'Time Attack lost');
assert(html.includes('./home_hub_20261110.css?v=20261110-65'),'Stylesheet not linked');
const css=fs.readFileSync(path.join(root,'home_hub_20261110.css'),'utf8');
assert(css.includes('@media(max-width:640px)'),'Mobile layout absent');
assert(css.includes('prefers-reduced-motion'),'Reduced motion not supported');
const rootSw=fs.readFileSync(path.resolve(root,'..','sw.js'),'utf8');
const localSw=fs.readFileSync(path.resolve(root,'sw.js'),'utf8');
assert(rootSw.includes("'./psycho101/home_hub_20261110.css'"),'Root offline cache missing');
assert(localSw.includes("'./home_hub_20261110.css'"),'Local offline cache missing');
assert.equal(JSON.parse(fs.readFileSync(path.join(root,'version.json'),'utf8')).version,'20261112-69');
console.log('PASS: homepage only four category choices; nested paths, focus selectors, mobile CSS and offline caches');
