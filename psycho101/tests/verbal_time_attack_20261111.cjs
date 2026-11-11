'use strict';
/* Regression for curated Hebrew typing, secure topic leagues and offline assets. */
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const data=fs.readFileSync(path.join(root,'time_attack_words_20261111.js'),'utf8');
const game=fs.readFileSync(path.join(root,'time_attack_20261110.js'),'utf8');
const server=fs.readFileSync(path.join(root,'ranked_time_attack_20261110.ts'),'utf8');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
let now=1000000;
class Time extends Date{static now(){return now;}}
const window={};
const doc={hidden:false,handlers:{},elements:{},activeElement:null,addEventListener(type,fn){this.handlers[type]=fn},getElementById(id){return this.elements[id]||null},querySelector(){return null}};
vm.runInNewContext(data,{window});
const words=window.PSYCHO101_TIME_ATTACK_WORDS;
assert.equal(words.length,189);
assert.equal(words.filter(w=>w.group==='words_core').length,115);
assert.equal(words.filter(w=>w.group==='words_advanced').length,74);
assert.equal(new Set(words.map(w=>w.id)).size,189);
assert.equal(new Set(words.map(w=>w.word)).size,189);
assert(words.every(w=>w.level>=2&&Array.isArray(w.accepted)&&w.accepted.length&&w.tip));
assert(words.filter(w=>w.group==='words_advanced').every(w=>w.level>=3));
const normalizeStart=server.indexOf('function normalizeHebrew(value){');
const normalizeEnd=server.indexOf('function numeric(v){',normalizeStart);
assert(normalizeStart>=0&&normalizeEnd>normalizeStart);
const check=vm.runInNewContext(server.slice(normalizeStart,normalizeEnd)+'\n({normalizeHebrew,verbalCorrect})',{String,Array});
assert(check.verbalCorrect(' מעשה   מתוחכם ',['יצירה מוקפדת','מעשה מתוחכם']));
assert(check.verbalCorrect('מַעֲשֶׂה מְתוּחְכָּם',['מעשה מתוחכם']));
assert(!check.verbalCorrect('לא קשור',['מעשה מתוחכם']));
assert(!check.verbalCorrect('', ['מעשה מתוחכם']));
vm.runInNewContext(game,{window,document:doc,navigator:{},Date:Time,Math,Number,Set,Object,String,Array,
 setTimeout,clearTimeout,requestAnimationFrame:()=>1,cancelAnimationFrame:()=>{}});
const app=window.PSYCHO101_TIME_ATTACK,all=app.allCards();
assert.equal(all.length,514+189);
assert.equal(app.buildDeck('words_core').length,115);
assert.equal(app.buildDeck('words_advanced').length,74);
assert.equal(app.buildDeck('mixed').length,514,'Quantitative mixed must not contain verbal words');
for(const w of words){
 const q=all.find(x=>x.id===w.id);
 assert(q&&q.group===w.group);
 for(const alias of w.accepted){
  assert(app.correctAnswer(alias,q),'Client rejected known synonym: '+w.word+' => '+alias);
  assert(check.verbalCorrect(alias,w.accepted),'Server rejected known synonym: '+w.word+' => '+alias);
 }
 assert(!app.correctAnswer('טרנזיסטור',q));
}
const input={value:'',focus(){}};
doc.elements['ta-input']=input;
doc.elements['ta-form']={addEventListener(){}};
doc.elements['ta-skip']={addEventListener(){}};
doc.elements['ta-score']={textContent:'',classList:{remove(){},add(){}},offsetWidth:1};
const host={innerHTML:'',querySelector(){return null}};
let records={};
app.render(host,{topbar:()=>'',nav:()=>'',getRecords:()=>records,saveRecords:x=>{records=x},celebrate:()=>{}});
assert(host.innerHTML.includes('מילים חשובות')&&host.innerHTML.includes('מילים קשות'));
app.setMode('words_advanced');
app.start();
assert(host.innerHTML.includes('ta-verbal-question'),'Not RTL word question');
assert(host.innerHTML.includes('inputmode="text"'),'Missing mobile text keyboard');
const match=host.innerHTML.match(/class="ta-question ta-flip ta-verbal-question"[^>]*>([^<]+)<\/div>/);
assert(match,'Word not rendered');
const q=words.find(w=>w.word===match[1]);
assert(q,'Rendered word not in bank');
input.value=q.accepted[0];
app.submit({preventDefault(){}});
assert.equal(doc.elements['ta-score'].textContent,10);
now+=61000;doc.handlers.visibilitychange();
assert.equal(records['words_advanced-60'].bestScore,10);
assert(html.indexOf('time_attack_words_20261111.js')<html.indexOf('time_attack_20261110.js'),'Word script loads after game');
assert(html.includes("['words_core','מילים חשובות']")&&html.includes("['words_advanced','מילים קשות']"));
assert(html.includes(".eq('week_start',weekStartIsrael()).eq('mode',leaderboardRankMode)"));
assert(html.includes("if(!['bests','weekly'].includes(leaderboardTab))"));
assert(server.includes('const weekly=game.duration===60'));
assert(server.includes('onConflict:"week_start,user_id,mode"'));
assert(server.includes('verbalCorrect(x.value,question.accepted_answers)'));
assert(server.includes('const bank=new Map((items||[]).map(q=>[q.id,q]))'));
for(const f of ['sw.js','psycho101/sw.js']){
 const src=fs.readFileSync(path.resolve(root,'..',f),'utf8');
 assert(src.includes('time_attack_words_20261111.js'),'Offline vocab bank missing: '+f);
}
assert.equal(JSON.parse(fs.readFileSync(path.join(root,'version.json'),'utf8')).version,'20261111-68');
console.log('PASS: 189 Hebrew words, curated synonyms, RTL typing, server verification, mode-specific weekly leagues and offline bank');
