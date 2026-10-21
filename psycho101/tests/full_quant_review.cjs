'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const window={};const loaded=[];
const re=/<script\s+src="\.\/([^"?]+\.js)(?:\?[^"]*)?"\s*><\/script>/g;
let m;while((m=re.exec(html))!==null){
 const p=path.join(root,m[1]);assert(fs.existsSync(p),'Missing bank '+m[1]);
 vm.runInNewContext(fs.readFileSync(p,'utf8'),{window,console},{filename:m[1]});
 loaded.push(m[1]);
}
const qStart=html.indexOf('const questions={'),qEnd=html.indexOf('function defaultState()',qStart);
assert(qStart>=0&&qEnd>qStart);
const questions=new Function('window',html.slice(qStart,qEnd)+'; return questions;')(window);
const all=questions.quantitative,ids=new Set();
assert(all.length>=419,'All current quantitative bank files must be loaded');
for(const q of all){assert(!ids.has(q.id),'Duplicate ID: '+q.id);ids.add(q.id);}
const fmtStart=html.indexOf('function formatMathHtml(input){'),fmtEnd=html.indexOf('function localDateKey(',fmtStart);
const formatMathHtml=new Function(html.slice(fmtStart,fmtEnd)+';return formatMathHtml;')();
function simplify(s){return String(s).replace(/<span\b[^>]*>/g,'').replace(/<\/span>/g,'');}
const bad=[];let fields=0,superFields=0,eligible=0,badOptions=0;
for(const q of all){
 for(const [label,value] of [['prompt',q.prompt],['explanation',q.explanation],...q.answers.map((a,i)=>['answer '+i,a])]){
   fields++; const before=String(value),after=formatMathHtml(value);
   if((before.match(/<sup>/g)||[]).length!==(before.match(/<\/sup>/g)||[]).length)bad.push(q.id+':'+label+': original superscript mismatch');
   if(before.includes('<sup>'))superFields++;
   if(simplify(before)!==simplify(after))bad.push(q.id+':'+label+': formatter changed the mathematical content');
   const spanCount=(after.match(/<span\b/g)||[]).length-(after.match(/<\/span>/g)||[]).length;
   if(spanCount)bad.push(q.id+':'+label+': unbalanced LTR wrappers');
   if(/<\/span><sup>/.test(after))bad.push(q.id+':'+label+': base/exponent separated');
   if(/[\uE000-\uF8FF]/.test(after))bad.push(q.id+':'+label+': unreplaced placeholder');
 }
 if(q.answers.length!==4||new Set(q.answers.map(String)).size!==4||q.correct<0||q.correct>3)badOptions++;
}
assert.deepEqual(bad,[],'Full corpus math formatting errors: '+bad.slice(0,15).join('; '));
for(const [src,frag] of [
 ['x²','<span class="math-ltr" dir="ltr">x²</span>'],
 ['2³','<span class="math-ltr" dir="ltr">2³</span>'],
 ['√48','<span class="math-ltr" dir="ltr">√48</span>'],
 ['(−3)²','<span class="math-ltr" dir="ltr">(−3)²</span>'],
 ['(−3)² − (−3²)','<span class="math-ltr" dir="ltr">(−3)² − (−3²)</span>'],
 ['√75 − √27','<span class="math-ltr" dir="ltr">√75 − √27</span>'],
 ['3x−5>10','<span class="math-ltr" dir="ltr">3x−5>10</span>'],
 ['(4^3)^(1/2)','<span class="math-ltr" dir="ltr">(4^3)^(1/2)</span>']
])assert(formatMathHtml(src).includes(frag),'RTL formula isolation error for '+src);
const auditStart=html.indexOf('const SIMPLE_FOUNDATION_IDS='),auditEnd=html.indexOf('function adaptiveKey(',auditStart);
const {auditedExamPool,foundationPool}=new Function('questions',html.slice(auditStart,auditEnd)+'; return {auditedExamPool,foundationPool};')(questions);
const eligibleQuant=auditedExamPool('quantitative'),foundations=foundationPool();
eligible=eligibleQuant.length;
assert(eligible>=100,'Enough realistic questions for the daily bank');
assert(eligibleQuant.every(q=>q.answers.length===4&&new Set(q.answers.map(String)).size===4),'Malformed item leaked into exam pool');
assert(foundations.every(q=>q.answers.length===4&&new Set(q.answers.map(String)).size===4),'Malformed item leaked into fundamentals');
assert(!eligibleQuant.some(q=>/^qg\d+$|^cq\d+$/.test(q.id)),'Bare calculation templates must not be selected as exam questions');
const expected={
'ts21-01':'לא השתנה','ts21-02':'28.57% בקירוב','ts21-03':'19%','ts21-04':'32','ts21-05':'15',
'ts21-06':'72','ts21-07':'2','ts21-08':'20%','ts21-09':'2 שעות','ts21-10':'3',
'ts21-11':'30','ts21-12':'18','ts21-13':'2','ts21-14':'12','ts21-15':'9',
'ts21-16':'2','ts21-17':'2√3','ts21-18':'14','ts21-19':'58','ts21-20':'11/36',
'ts21-21':'10','ts21-22':'44%','ts21-23':'לא השתנה','ts21-24':'36','ts21-25':'1,200',
'ts21-26':'1,200','ts21-27':'25%'
};
for(const [id,answer] of Object.entries(expected)){
 const q=all.find(q=>q.id===id);assert(q,id+' not loaded');
 assert.equal(q.answers[q.correct],answer,'Wrong expected answer for '+id);
 assert(q.strategy&&q.strategy.length>=30,'No specific method for '+id);
 assert(q.fastSteps?.length>=2,'No worked steps for '+id);
 assert(q.whenToUse&&q.whenToUse.length>=15,'No recognition cue for '+id);
 assert(q.trap&&q.trap.length>=15,'No explanation of a typical pitfall for '+id);
 assert(eligibleQuant.includes(q),'Shortcut question accidentally excluded: '+id);
}
const notes=window.PSYCHO101_SHORT_METHODS_20261021;
assert(Object.keys(notes).length>=30,'Existing question tips are required');
for(const id of Object.keys(notes)){
 const q=all.find(q=>q.id===id);
 assert(q,'Bad annotated ID '+id);
 assert(q.fastSteps?.length>=2&&q.whenToUse,'Annotation must be visible: '+id);
}
const specific=eligibleQuant.filter(q=>q.fastSteps?.length>=2);
assert(specific.length>=50,'At least 50 eligible questions should have concrete fast solutions');
console.log('PASS full quantitative audit: '+all.length+' questions, '+fields+' rendered fields, '+superFields+' superscript fields; '+eligible+' exam questions, '+foundations.length+' valid foundations; '+badOptions+' excluded duplicate-choice templates; '+specific.length+' exam problems with numeric fast steps; '+Object.keys(expected).length+' checked original answers.');
