/* Node test: run node psycho101/tests/divisibility_combinations_20261116.cjs */
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const file = require('node:path').resolve(__dirname, '../divisibility_combinations_20261116.js');
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(file, 'utf8'), context);
const questions = context.window.PSYCHO101_DIVISIBILITY_COMBINATIONS_20261116.quantitative;
assert.equal(questions.length, 12);
for (const q of questions) {
  let count = 0; const values = q.sourceNumbers.filter(n => !q.excludeMultiplesOf || n % q.excludeMultiplesOf !== 0);
  const chosen = [];
  function visit(pos) {
    if (chosen.length === q.chooseCount) {
      if (chosen.reduce((a,b)=>a+b,0)%3 === q.sumRemainder && (!q.requiredNumber || chosen.includes(q.requiredNumber))) count++;
      return;
    }
    for(let i=pos;i<values.length;i++){ chosen.push(values[i]); visit(i+1); chosen.pop(); }
  }
  visit(0);
  assert.equal(q.answers.length, 4, q.id);
  assert.equal(new Set(q.answers).size, 4, q.id);
  assert.equal(Number(q.answers[q.correct]), count, q.id);
  assert.ok(q.explanation && q.strategy && q.fastSteps.length === 2, q.id);
  // Explain the remainder with a concrete numerical example instead of ambiguous count notation.
  assert.match(q.explanation, /(?:למשל|לדוגמה)/, 'Missing short example: ' + q.id);
  assert.ok(!q.explanation.includes('0+0+1=1'), 'Misleading notation: ' + q.id);
  assert.ok(q.explanation.includes(q.answers[q.correct]), 'Final answer missing from explanation: ' + q.id);
}
console.log('PASS: 12 questions, answer keys and clear worked examples validated');
