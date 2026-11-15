'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const base=path.join(__dirname,'..'),ctx={window:{}};
vm.runInNewContext(fs.readFileSync(path.join(base,'analogies_20261115.js'),'utf8'),ctx);
const q=ctx.window.PSYCHO101_ANALOGIES_20261115.verbal,dist=[0,0,0,0];
assert.equal(q.length,12);assert.equal(q[0].prompt,'סנגר : זיכה');
assert.equal(q[0].answers[q[0].correct],'התמודד : ניצח');
assert.equal(q[0].provenance,'user-provided-image-2026-11-15');
assert.equal(new Set(q.map(x=>x.id)).size,12);
for(const x of q){assert.equal(x.category,'מילולי');assert.equal(x.topic,'אנלוגיות');assert.equal(x.answers.length,4);assert.equal(new Set(x.answers).size,4);assert.equal(x.optionRelations.length,4);assert.equal(x.relationDifference.length,4);assert.equal(x.answerExplanations.length,4);assert.equal(x.optionRelations[x.correct],x.relation);assert(x.relationRule&&x.explanation&&x.strategy&&x.trap&&x.whenToUse&&x.fastSteps.length===2);assert(x.answerExplanations.every(s=>s.length>37));dist[x.correct]++;}
assert.deepEqual(dist,[3,3,3,3]);
const html=fs.readFileSync(path.join(base,'index.html'),'utf8'),local=fs.readFileSync(path.join(base,'sw.js'),'utf8'),root=fs.readFileSync(path.join(base,'..','sw.js'),'utf8');
assert(html.includes('./analogies_20261115.js?v=20261115-75'));
assert(html.includes('questions.verbal.push(...(window.PSYCHO101_ANALOGIES_20261115?.verbal||[]))'));
assert(local.includes('./analogies_20261115.js'));assert(root.includes('./psycho101/analogies_20261115.js'));
assert.equal(JSON.parse(fs.readFileSync(path.join(base,'version.json'),'utf8')).version,'20261115-75');
console.log('Psycho101 analogy set integrity and integration OK');
