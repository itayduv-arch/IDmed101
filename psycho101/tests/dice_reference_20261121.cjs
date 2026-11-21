/* Run: node psycho101/tests/dice_reference_20261121.cjs */
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const src = fs.readFileSync(path.join(__dirname, '../dice_reference_20261121.js'), 'utf8');
const context = { window: {} };
vm.runInNewContext(src, context);
const questions = context.window.PSYCHO101_DICE_REFERENCE_20261121.quantitative;
assert.equal(questions.length, 12, 'Original image and exactly 11 variants');
assert.equal(new Set(questions.map(q => q.id)).size, 12);
const positions = [0, 0, 0, 0];
function gcd(a, b) { return b ? gcd(b, a % b) : a; }
function countOutcomes(q) {
  const sides = q.dieSides, count = q.otherDice;
  const yellow = Array(count).fill(0);
  let matches = 0;
  function tally(i, green) {
    if(i < count) {
      for(let number=1; number<=sides; number++) { yellow[i]=number; tally(i+1, green); }
      return;
    }
    const equal = yellow.filter(n=>n===green).length;
    const e=q.event;
    if(e==='none' && equal===0 ||
       e==='atLeastOne' && equal>=1 ||
       e==='exactlyOne' && equal===1 ||
       e==='all' && equal===count ||
       e==='exactlyTwo' && equal===2 ||
       e==='atLeastTwo' && equal>=2 ||
       e==='allDifferent' && equal===0 && new Set(yellow).size===count ||
       e==='noneOrAll' && (equal===0 || equal===count) ||
       e==='oneOrTwo' && (equal===1 || equal===2)) matches++;
  }
  for(let green=1;green<=sides;green++) tally(0,green);
  return [matches,sides**(count+1)];
}
for(const q of questions) {
  assert.equal(q.category, 'כמותי');
  assert.equal(q.topic, 'הסתברות');
  assert.equal(q.answers.length, 4, q.id);
  assert.equal(q.answerExplanations.length, 4, q.id);
  assert.ok(q.correct>=0 && q.correct<4, q.id);
  assert.equal(new Set(q.answers).size, 4, q.id);
  assert.equal(new Set(q.optionValues).size, 4, q.id);
  assert.ok(q.explanation && q.trap && q.strategy && q.fastSteps.length === 2, q.id);
  assert.match(q.explanation, /(?:אם|נניח|למשל)/, q.id);
  assert.match(q.answerExplanations[q.correct], /נכון/, q.id);
  const [numerator, denominator] = countOutcomes(q);
  const g=gcd(numerator,denominator);
  const reduced=`${numerator/g}/${denominator/g}`;
  assert.equal(reduced, `${q.expectedNumerator}/${q.expectedDenominator}`, q.id);
  assert.equal(q.optionValues[q.correct],reduced, q.id);
  positions[q.correct]++;
}
assert.deepEqual(positions,[2,4,4,2], 'Answer positions should be reasonably balanced');
const original=questions[0];
assert.equal(original.id,'dice1121-01');
assert.equal(original.correct,2);
assert.equal(original.optionValues[original.correct],'625/1296');
assert.match(original.answers[2],/<sup>4<\/sup>/);
const index=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8');
const sw=fs.readFileSync(path.join(__dirname,'../sw.js'),'utf8');
assert.match(index,/dice_reference_20261121\.js/);
assert.match(index,/PSYCHO101_DICE_REFERENCE_20261121\?\.quantitative/);
assert.match(sw,/dice_reference_20261121\.js/);
console.log('PASS: 12 dice questions; independent enumeration, distractors, answer key balance and app integration');
