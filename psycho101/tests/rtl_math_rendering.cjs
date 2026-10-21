'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),vm=require('node:vm');
const root=path.join(__dirname,'..'),html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const first=html.indexOf('function formatMathHtml(input){'),last=html.indexOf('function localDateKey(',first);
assert(first>0&&last>first,'Math formatter must be present');
const {formatMathHtml}=new Function(html.slice(first,last)+'\nreturn {formatMathHtml};')();
const expression='2<sup>a</sup>·3<sup>b</sup>';
const result=formatMathHtml('כמה מחלקים מהצורה '+expression+' של 72=2³·3²?');
assert(result.includes('<span class="math-ltr" dir="ltr">'+expression+'</span>'),
 'The complete exponential expression must form ONE LTR island');
assert(result.includes('<span class="math-ltr" dir="ltr">72=2³·3²</span>'),
 'Prime-factor representation must remain in the correct order');
assert(!result.includes('</span><sup>'),'Do not break the base and exponent into separate islands');
assert(result.startsWith('כמה מחלקים מהצורה '),'Hebrew text must remain RTL-ready');
for(const [prompt,expected] of [
 ['נתון x<0 וגם x²<9. מה נכון?','x<0'],
 ['אם 2<sup>7</sup> · 2<sup>−3</sup> / 2<sup>2</sup> = ?', '2<sup>7</sup> · 2<sup>−3</sup> / 2<sup>2</sup>'],
 ['מה ערכו של (3+4)/7?','(3+4)/7'],
 ['נתון x² + 3x + 2 = 0.','x² + 3x + 2 = 0'],
 ['36 ÷ 25 = ?', '36 ÷ 25'],
]){
 const out=formatMathHtml(prompt);
 assert(out.includes('class="math-ltr" dir="ltr"'),prompt+': math island missing');
 assert(out.includes(expected),prompt+': formula changed');
}
const already='<span class="math-ltr" dir="ltr">2<sup>a</sup> · 3<sup>b</sup></span>';
assert.equal(formatMathHtml(already),already,'Already isolated math must not be reprocessed');
const htmlPrompt='נתון '+already+'.<br><br>כמה מחלקים חיוביים של 72?';
assert(formatMathHtml(htmlPrompt).includes('<br><br>'),'Line breaks must survive');
const scriptRe=/<script\s+src="\.\/([^"]+\.js)(?:\?[^"]*)?"\s*><\/script>/g;
const window={};let match;
while((match=scriptRe.exec(html))!==null){
 const p=path.join(root,match[1]);
 if(fs.existsSync(p))vm.runInNewContext(fs.readFileSync(p,'utf8'),{window,console},{filename:p});
}
const qBegin=html.indexOf('const questions={'),qEnd=html.indexOf('function defaultState()',qBegin);
const questions=new Function('window',html.slice(qBegin,qEnd)+'\nreturn questions;')(window);
const bad=[];
let checked=0,supers=0;
for(const q of [...questions.quantitative,...questions.verbal]){
 for(const field of ['prompt','explanation',...q.answers.map((_,i)=>'answer'+i)]){
  const original=field.startsWith('answer')?q.answers[Number(field.slice(-1))]:q[field];
  if(typeof original!=='string')continue;
  const formatted=formatMathHtml(original);
  checked++;
  if(original.includes('<sup>')){supers++;if(formatted.includes('</span><sup>'))bad.push(q.id+':'+field)}
  const opens=(formatted.match(/<span\b/g)||[]).length,closes=(formatted.match(/<\/span>/g)||[]).length;
  if(opens!==closes)bad.push(q.id+':'+field+':unbalanced span tags');
 }
}
assert.deepEqual(bad,[],'Broken formulas: '+bad.slice(0,10).join(', '));
const target=questions.quantitative.filter(q=>q.prompt?.includes('כמה מחלקים חיוביים שונים של 72'));
assert.equal(target.length,3,'The repeated legacy divisor question should be repaired in all instances');
for(const q of target){
 assert(q.prompt.includes('שלמים אי־שליליים'),'Exponent domain must be stated');
 assert.equal(String(q.answers[q.correct]),'12','The correct divisor count is 12');
 assert(formatMathHtml(q.prompt).includes(already),'The fixed question uses explicit LTR formulas');
}
console.log('PASS RTL mathematical rendering: '+checked+' prompt/explanation/answer fields, '+supers+' with superscripts, 3 legacy divisor questions clarified.');
