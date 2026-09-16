from pathlib import Path

idx=Path('psycho101/index.html')
s=idx.read_text(encoding='utf-8')

# Load the new original question bank before the app's main script.
anchor='<script>\nconst STORAGE_KEY="psycho101-state-v3";'
insert='<script src="./official_quant_expansion.js?v=20260916-25"></script>\n<script>\nconst STORAGE_KEY="psycho101-state-v3";'
assert s.count(anchor)==1, f'main script anchor count={s.count(anchor)}'
s=s.replace(anchor,insert)

# Add the expansion to the quantitative pool after the existing generated bank.
anchor='questions.quantitative.push(...buildQuantBank());\nquestions.verbal.push(...buildVerbalBank());'
insert='questions.quantitative.push(...buildQuantBank());\nquestions.quantitative.push(...(window.PSYCHO101_OFFICIAL_QUANT_BANK||[]));\nquestions.verbal.push(...buildVerbalBank());'
assert s.count(anchor)==1, f'question push anchor count={s.count(anchor)}'
s=s.replace(anchor,insert)

# Prefer questions the learner has not seen recently.
anchor="function startPractice(type,topic='all'){let list=type==='words'?buildWordQuestions(8):questions[type].filter(q=>topic==='all'||q.topic===topic);list=shuffle(list).slice(0,8);practice={list,index:0,answeredCurrent:false,sessionCorrect:0,timed:false,kind:type};lastChoice=null;view='question';render()}"
helper="""const RECENT_QUESTION_KEY='psycho101-recent-question-ids-v1';
function recentQuestionIds(){try{const a=JSON.parse(localStorage.getItem(RECENT_QUESTION_KEY)||'[]');return Array.isArray(a)?a:[]}catch{return []}}
function rememberQuestionId(id){if(!id)return;const a=recentQuestionIds().filter(x=>x!==id);a.push(id);try{localStorage.setItem(RECENT_QUESTION_KEY,JSON.stringify(a.slice(-120)))}catch{}}
function freshFirst(pool,count){const recent=new Set(recentQuestionIds()),fresh=shuffle(pool.filter(q=>!recent.has(q.id))),seen=shuffle(pool.filter(q=>recent.has(q.id)));return [...fresh,...seen].slice(0,count)}
function startPractice(type,topic='all'){let list=type==='words'?buildWordQuestions(8):questions[type].filter(q=>topic==='all'||q.topic===topic);list=freshFirst(list,8);practice={list,index:0,answeredCurrent:false,sessionCorrect:0,timed:false,kind:type};lastChoice=null;view='question';render()}"""
assert s.count(anchor)==1, f'startPractice anchor count={s.count(anchor)}'
s=s.replace(anchor,helper)

old="function startMixed(){const list=shuffle([...buildWordQuestions(4),...questions.quantitative,...questions.verbal]).slice(0,10);practice={list,index:0,answeredCurrent:false,sessionCorrect:0,timed:false,kind:'mixed'};lastChoice=null;view='question';render()}"
new="function startMixed(){const list=freshFirst([...buildWordQuestions(4),...questions.quantitative,...questions.verbal],10);practice={list,index:0,answeredCurrent:false,sessionCorrect:0,timed:false,kind:'mixed'};lastChoice=null;view='question';render()}"
assert s.count(old)==1
s=s.replace(old,new)

old="function startPsychoSimulation(){clearInterval(psychoTimer);const list=shuffle([...questions.quantitative,...questions.verbal]).slice(0,20);"
new="function startPsychoSimulation(){clearInterval(psychoTimer);const list=freshFirst([...questions.quantitative,...questions.verbal],20);"
assert s.count(old)==1
s=s.replace(old,new)

# Quick lessons also prefer unseen items whenever there is a choice.
old="  practice={list,index:0,answeredCurrent:false,sessionCorrect:0,timed:false,kind:'quick',lessonId:id,rewarded:false};"
new="  list=freshFirst(list,list.length);\n  practice={list,index:0,answeredCurrent:false,sessionCorrect:0,timed:false,kind:'quick',lessonId:id,rewarded:false};"
assert s.count(old)==1
s=s.replace(old,new)

# Record the actual viewed/answered item into the freshness window.
old="  const q=practice.list[practice.index];\n  practice.answeredCurrent=true;lastChoice=choice;"
new="  const q=practice.list[practice.index];\n  rememberQuestionId(q?.id);\n  practice.answeredCurrent=true;lastChoice=choice;"
assert s.count(old)==1
s=s.replace(old,new)

# Force new service-worker/version so the new external bank is fetched immediately.
old="navigator.serviceWorker.register('./sw.js?v=20260916-24',{updateViaCache:'none'})"
new="navigator.serviceWorker.register('./sw.js?v=20260916-25',{updateViaCache:'none'})"
assert s.count(old)==1
s=s.replace(old,new)
idx.write_text(s,encoding='utf-8')

# Fix one question discovered during validation before deployment.
bank=Path('psycho101/official_quant_expansion.js')
b=bank.read_text(encoding='utf-8')
old="{id:'oq006',category:'כמותי',topic:'חזקות ושורשים',difficulty:4,prompt:'מה גדול יותר?',answers:['2^10','4^5','8^3','שלושתם שווים'],correct:3,explanation:'4^5=(2^2)^5=2^10 וגם 8^3=2^9, לכן 2^10=4^5 גדולים מ־8^3. מבין האפשרויות אין שוויון לשלושתם.'}"
new="{id:'oq006',category:'כמותי',topic:'חזקות ושורשים',difficulty:4,prompt:'איזה מהבאים הוא הקטן ביותר?',answers:['2^10','4^5','8^3','16^2'],correct:3,explanation:'2^10=1024, 4^5=1024, 8^3=512 ואילו 16^2=256, ולכן 16^2 הוא הקטן ביותר.'}"
assert b.count(old)==1
bank.write_text(b.replace(old,new),encoding='utf-8')

sw=Path('psycho101/sw.js')
x=sw.read_text(encoding='utf-8')
assert "const CACHE_NAME='idpsycho101-v24';" in x
sw.write_text(x.replace("const CACHE_NAME='idpsycho101-v24';","const CACHE_NAME='idpsycho101-v25';"),encoding='utf-8')
Path('psycho101/version.json').write_text('{"version":"20260916-25"}\n',encoding='utf-8')
