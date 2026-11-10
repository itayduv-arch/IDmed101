/* Psycho101 Time Attack — numeric recall sprint; no external dependencies. */
(function(){
  'use strict';
  const MODES=[
    {id:'mixed',name:'הכול ביחד',icon:'⚡',desc:'תרגילי שליפה מכל הנושאים'},
    {id:'mul',name:'לוח הכפל',icon:'×',desc:'כפל וחילוק עד 12'},
    {id:'powers',name:'חזקות ושורשים',icon:'²',desc:'ריבועים, חזקות ושורשים מוכרים'},
    {id:'fractions',name:'אחוזים ושברים',icon:'%',desc:'המרות וחישובי אחוזים בעל פה'},
    {id:'mental',name:'חישוב זריז',icon:'+',desc:'השלמה ל־100, סכומים ויחידות'}
  ];
  const DURATIONS=[45,60,90];
  const RING=2*Math.PI*34;
  const MODE_MAP=Object.fromEntries(MODES.map(m=>[m.id,m]));
  let mode='mixed', duration=60, phase='setup', host=null, hooks=null, game=null;
  let raf=0, pending=0, serial=0, newBest=false;

  function esc(value){return String(value==null?'':value).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));}
  function shuffle(items){
    const a=items.slice();
    for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));const t=a[i];a[i]=a[j];a[j]=t;}
    return a;
  }
  function normalizeAnswer(value){
    let s=String(value==null?'':value).trim().replace(/[−–]/g,'-').replace(/[\u066B,]/g,'.').replace(/\s/g,'');
    s=s.replace(/[٠-٩]/g,c=>String(c.charCodeAt(0)-0x660)).replace(/[۰-۹]/g,c=>String(c.charCodeAt(0)-0x6f0));
    if(!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(s))return null;
    const n=Number(s);
    return Number.isFinite(n)?n:null;
  }
  function isCorrect(value,expected){const n=normalizeAnswer(value);return n!==null&&Math.abs(n-expected)<1e-8;}
  function generateBank(){
    const all=[];
    function add(group,prompt,answer,tip){
      all.push({id:all.length,group,prompt,answer,tip,plain:prompt.replace(/<[^>]*>/g,'')});
    }
    for(let a=2;a<=12;a++)for(let b=a;b<=12;b++){
      add('mul',a+' × '+b,a*b,'אפשר לפרק כפל למכפלה ידועה וקלה יותר.');
    }
    for(let a=2;a<=12;a++)for(let b=2;b<=12;b++){
      add('mul',(a*b)+' ÷ '+a,b,'בחילוק משתמשים בלוח הכפל ההפוך.');
    }
    for(let n=2;n<=25;n++)add('powers',n+'<sup>2</sup>',n*n,'ריבוע של '+n+' הוא '+(n*n)+'.');
    for(let n=2;n<=10;n++)add('powers',n+'<sup>3</sup>',n*n*n,'קובייה = מספר כפול עצמו שלוש פעמים.');
    for(let base of [2,3,5,10]){
      const max=base===2?12:base===3?7:base===5?5:5;
      for(let n=2;n<=max;n++)add('powers',base+'<sup>'+n+'</sup>',Math.pow(base,n),'זכור את סדרת החזקות של '+base+'.');
    }
    for(let n=4;n<=30;n++)add('powers','√'+(n*n),n,'שורש ריבועי מחזיר את המספר החיובי שריבועו נתון.');
    for(let n=2;n<=10;n++)add('powers','∛'+(n*n*n),n,'שורש שלישי מחזיר את המספר שהועלה בחזקה שלישית.');
    for(let pct of [5,10,12.5,20,25,50,75]){
      for(let base of [40,80,120,160,200,240,320,400]){
        const answer=pct*base/100;
        if(Number.isInteger(answer))add('fractions',pct+'% מתוך '+base,answer,
          pct===12.5?'12.5% הם שמינית.':pct===25?'25% הם רבע.':pct===20?'20% הם חמישית.':'המר את האחוז לשבר נוח.');
      }
    }
    const ratios=[[1,2],[1,4],[3,4],[1,5],[2,5],[1,8],[3,8],[5,8],[1,10],[3,10]];
    for(const [a,b] of ratios){
      add('fractions',a+'/'+b+' = כמה אחוזים?',a/b*100,'כדי לעבור משבר לאחוזים כופלים ב־100.');
      for(const whole of [40,80,120,160,200,240]){
        if((whole*a)%b===0)add('fractions',a+'/'+b+' מתוך '+whole,whole*a/b,'מחלקים ב־'+b+' ואז כופלים ב־'+a+'.');
      }
    }
    for(let n=11;n<=89;n+=3)add('mental','100 − '+n,100-n,'משלימים לעשרת הבאה ואז ל־100.');
    for(let n=12;n<=96;n+=4)add('mental','חצי מ־'+n,n/2,'חלק את המספר ב־2.');
    for(let n=12;n<=72;n+=6)add('mental','פי 1.5 מ־'+n,n*1.5,'פי 1.5 = המספר ועוד חצי ממנו.');
    for(let n=12;n<=45;n+=3)add('mental',n+' × 11',n*11,'כפל ב־11 הוא כפל ב־10 ועוד המספר.');
    for(let n=15;n<=75;n+=5)add('mental',n+' + '+(100-n+12),112,'נסה להשלים קודם ל־100 ואז להוסיף 12.');
    for(let minutes of [15,20,30,45,90,120,150])add('mental',minutes+' דקות = כמה שעות?',minutes/60,
      '60 דקות הן שעה אחת. אפשר לענות במספר עשרוני.');
    for(let hours of [0.25,0.5,0.75,1.5,2,2.5,3])add('mental',hours+' שעות = כמה דקות?',hours*60,'שעה אחת היא 60 דקות.');
    for(let km of [0.5,1.5,2,2.5,3,4.5])add('mental',km+' ק"מ = כמה מטרים?',km*1000,'קילומטר אחד הוא 1,000 מטרים.');
    return all;
  }
  function buildDeck(selected){
    const bank=generateBank();
    if(selected!=='mixed')return shuffle(bank.filter(q=>q.group===selected));
    const groups=['mul','powers','fractions','mental'].map(group=>shuffle(bank.filter(q=>q.group===group)));
    const deck=[];
    while(groups.some(g=>g.length)){
      for(const i of shuffle([0,1,2,3]))if(groups[i].length)deck.push(groups[i].pop());
    }
    return deck;
  }
  function stopTimers(){
    if(raf){cancelAnimationFrame(raf);raf=0;}
    if(pending){clearTimeout(pending);pending=0;}
  }
  function leave(){stopTimers();serial++;game=null;phase='setup';host=null;}
  function records(){try{return hooks&&hooks.getRecords?hooks.getRecords()||{}:{}}catch{return {};}}
  function recordKey(){return mode+'-'+duration;}
  function recordInfo(){
    const r=records()[recordKey()];
    return r&&Number.isFinite(r.bestScore)?r:null;
  }
  function modeButtons(){
    return MODES.map(m=>'<button type="button" class="ta-mode '+(mode===m.id?'is-active':'')+
      '" aria-pressed="'+(mode===m.id)+'" onclick="PSYCHO101_TIME_ATTACK.setMode(\''+m.id+'\')">'+
      '<span class="ta-mode-icon" aria-hidden="true">'+m.icon+'</span><strong>'+m.name+'</strong><small>'+m.desc+'</small></button>').join('');
  }
  function setupMarkup(){
    const best=recordInfo();
    return '<div class="app-shell ta-shell">'+(hooks&&hooks.topbar?hooks.topbar():'')+
      '<section class="ta-hero"><div class="ta-eyebrow"><span class="ta-spark"></span> SPEED LAB / TIME ATTACK</div>'+
      '<h1>כמה מהר אתה שולף?</h1><p>בלי תשובות אמריקאיות. רק אתה, המקלדת והשעון. מתרגלים עובדות שחייבים לדעת בעל פה.</p>'+
      '<div class="ta-demo" aria-hidden="true"><span>7 × 8</span><span class="ta-demo-arrow">←</span><span>56</span><span>2<sup>6</sup> = 64</span></div></section>'+
      '<section class="ta-panel"><div class="ta-section-head"><h2>בחר מסלול</h2><span>5 סוגי תרגול</span></div>'+
      '<div class="ta-mode-grid">'+modeButtons()+'</div>'+
      '<div class="ta-section-head"><h2>משך הסבב</h2><span>נגד השעון</span></div>'+
      '<div class="ta-duration-row">'+DURATIONS.map(n=>'<button type="button" class="ta-duration '+(duration===n?'is-active':'')+
        '" aria-pressed="'+(duration===n)+'" onclick="PSYCHO101_TIME_ATTACK.setDuration('+n+')">'+n+' שניות</button>').join('')+'</div>'+
      '<div class="ta-ready"><div><span>השיא שלך במסלול הזה</span><strong>'+ (best?best.bestScore+' נקודות':'עוד אין שיא')+
      '</strong></div><span class="ta-ready-pill">⚡ '+MODE_MAP[mode].name+'</span></div>'+
      '<button type="button" class="ta-start" onclick="PSYCHO101_TIME_ATTACK.start()">מתחילים! <span>←</span></button>'+
      '<p class="ta-note">אפשר לענות עם Enter או עם כפתור השליחה. הטיימר ממשיך גם אם מחליפים אפליקציה. זהו תרגול שליפה, לא סימולציה רשמית.</p>'+
      '</section>'+(hooks&&hooks.nav?hooks.nav('practice'):'')+'</div>';
  }
  function playMarkup(){
    const g=game;
    const seconds=Math.ceil(Math.max(0,g.deadline-Date.now())/1000);
    return '<div class="app-shell ta-shell ta-playing" id="ta-game">'+
      '<div class="ta-game-header"><button class="ta-exit" type="button" onclick="go(\'practice-menu\')">✕ יציאה</button>'+
      '<div class="ta-game-title"><strong>TIME ATTACK</strong><span>'+MODE_MAP[mode].name+'</span></div>'+
      '<div class="ta-clock" id="ta-clock" role="timer" aria-label="זמן שנותר">'+
      '<svg viewBox="0 0 84 84" aria-hidden="true"><circle class="ta-clock-track" cx="42" cy="42" r="34"></circle>'+
      '<circle class="ta-clock-fill" id="ta-clock-fill" cx="42" cy="42" r="34" stroke-dasharray="'+RING+'" stroke-dashoffset="0"></circle></svg>'+
      '<strong id="ta-time">'+seconds+'</strong><small>שניות</small></div></div>'+
      '<div class="ta-time-rail"><div id="ta-time-progress"></div></div>'+
      '<div class="ta-score-strip"><div><small>ניקוד</small><strong id="ta-score">0</strong></div>'+
      '<div><small>נכונות</small><strong id="ta-correct">0</strong></div>'+
      '<div><small>רצף</small><strong id="ta-streak">0</strong></div></div>'+
      '<section class="ta-arena" id="ta-arena"><div class="ta-label"><span id="ta-kind">'+esc(g.current.groupLabel)+'</span><span id="ta-count">שאלה 1</span></div>'+
      '<div class="ta-question-frame"><div id="ta-question" class="ta-question ta-flip" dir="ltr">'+g.current.prompt+'</div></div>'+
      '<p class="ta-instruction">הקלד את התוצאה המספרית</p>'+
      '<form id="ta-form" autocomplete="off"><label class="ta-input-label" for="ta-input">התשובה שלך</label>'+
      '<div class="ta-answer-row"><input id="ta-input" type="text" inputmode="decimal" enterkeyhint="go" spellcheck="false" autocapitalize="off" autocomplete="off" aria-describedby="ta-feedback" placeholder="הקלד מספר" />'+
      '<button type="submit" class="ta-submit">שלח <span>↵</span></button></div></form>'+
      '<div id="ta-feedback" class="ta-feedback" aria-live="polite" aria-atomic="true">תשובה נכונה בונה רצף ומגדילה את הניקוד</div>'+
      '<button type="button" class="ta-skip" id="ta-skip">דלג על השאלה ←</button></section>'+
      '<p class="ta-tip">טיפ: לחץ Enter כדי להתקדם בלי להרים את הידיים מהמקלדת.</p></div>';
  }
  function resultMarkup(){
    const g=game||{correct:0,wrong:0,skipped:0,score:0,peak:0,misses:[]};
    const attempts=g.correct+g.wrong+g.skipped;
    const accuracy=attempts?Math.round(g.correct*100/attempts):0;
    const best=recordInfo();
    const list=(g.misses||[]).slice(-5).reverse().map(item=>'<div class="ta-review-item"><div class="ta-review-question" dir="ltr">'+esc(item.prompt)+'</div>'+
      '<div>התשובה הנכונה: <b>'+esc(item.answer)+'</b>'+(item.typed?' · רשמת '+esc(item.typed):'')+'</div>'+
      '<small>'+esc(item.tip)+'</small></div>').join('');
    return '<div class="app-shell ta-shell">'+(hooks&&hooks.topbar?hooks.topbar():'')+
      '<section class="ta-result"><div class="ta-result-mark">'+(newBest?'★':'⚡')+'</div>'+
      '<div class="ta-eyebrow">סבב הושלם · '+duration+' שניות</div><h1>'+(newBest?'שיא אישי חדש!':'כל שנייה נחשבת')+'</h1>'+
      '<div class="ta-result-score"><strong>'+g.score+'</strong><span>נקודות</span></div>'+
      '<div class="ta-result-grid"><div><strong>'+g.correct+'</strong><span>תשובות נכונות</span></div>'+
      '<div><strong>'+accuracy+'%</strong><span>דיוק</span></div><div><strong>'+g.peak+'</strong><span>רצף שיא</span></div>'+
      '<div><strong>'+g.wrong+g.skipped+'</strong><span>טעויות + דילוגים</span></div></div>'+
      '<p class="ta-record-note">השיא במסלול הזה · '+(best?best.bestScore:0)+' נקודות</p>'+
      '<div class="ta-result-actions"><button class="ta-start" type="button" onclick="PSYCHO101_TIME_ATTACK.start()">עוד סבב ↻</button>'+
      '<button class="ta-secondary" type="button" onclick="PSYCHO101_TIME_ATTACK.backToSetup()">החלף מסלול</button>'+
      '<button class="ta-secondary" type="button" onclick="go(\'practice-menu\')">חזרה לתרגול</button></div></section>'+
      (list?'<section class="ta-panel ta-review"><h2>מה כדאי לשלוף מהר יותר</h2>'+list+'</section>':'')+
      '</div>';
  }
  function render(app,context){
    if(context)hooks=context;
    if(app)host=app;
    if(!host)return;
    if(phase==='playing'&&host.querySelector('#ta-game'))return; // preserve the mobile keyboard on unrelated rerenders
    host.innerHTML=phase==='playing'?playMarkup():phase==='result'?resultMarkup():setupMarkup();
    if(phase==='playing')bindGame();
  }
  function setMode(next){if(phase!=='setup'||!MODE_MAP[next])return;mode=next;render();}
  function setDuration(next){if(phase!=='setup'||!DURATIONS.includes(next))return;duration=next;render();}
  function groupLabel(group){return MODE_MAP[group] ? MODE_MAP[group].name : group==='mul'?'כפל וחילוק':group==='fractions'?'אחוזים ושברים':group==='mental'?'חישוב זריז':'חזקות ושורשים';}
  function nextFromDeck(){
    if(!game.deck.length)game.deck=buildDeck(mode);
    const q=game.deck.shift();
    return {...q,groupLabel:groupLabel(q.group)};
  }
  function start(){
    if(!host)return;
    stopTimers();serial++;
    const now=Date.now();
    game={deck:buildDeck(mode),deadline:now+duration*1000,score:0,correct:0,wrong:0,skipped:0,
      streak:0,peak:0,answered:0,locked:false,misses:[],current:null};
    game.current=nextFromDeck();
    phase='playing';newBest=false;
    render();
    const input=document.getElementById('ta-input');
    if(input){try{input.focus({preventScroll:true});}catch{input.focus();}}
    tick();
  }
  function bindGame(){
    const form=document.getElementById('ta-form');
    const skip=document.getElementById('ta-skip');
    if(form)form.addEventListener('submit',submit);
    if(skip)skip.addEventListener('click',skipQuestion);
    updateHud();
  }
  function updateHud(){
    if(phase!=='playing'||!game)return;
    const ids={score:'ta-score',correct:'ta-correct',streak:'ta-streak'};
    for(const k of Object.keys(ids)){const el=document.getElementById(ids[k]);if(el)el.textContent=game[k];}
    const clock=document.getElementById('ta-clock'),fill=document.getElementById('ta-clock-fill');
    const left=Math.max(0,game.deadline-Date.now());
    const fraction=Math.min(1,left/(duration*1000));
    const timer=document.getElementById('ta-time');if(timer)timer.textContent=Math.ceil(left/1000);
    if(fill)fill.style.strokeDashoffset=String(RING*(1-fraction));
    const rail=document.getElementById('ta-time-progress');if(rail)rail.style.width=(fraction*100)+'%';
    if(clock){clock.classList.toggle('is-urgent',fraction<=0.2);clock.classList.toggle('is-warning',fraction<=0.4&&fraction>0.2);}
  }
  function tick(){
    if(phase!=='playing'||!game)return;
    if(Date.now()>=game.deadline){finish();return;}
    updateHud();
    raf=requestAnimationFrame(tick);
  }
  function feedback(good,wasSkipped,typed){
    const g=game,q=g.current;
    const arena=document.getElementById('ta-arena'),msg=document.getElementById('ta-feedback');
    if(arena){
      arena.classList.remove('ta-good','ta-bad');void arena.offsetWidth;
      arena.classList.add(good?'ta-good':'ta-bad');
    }
    if(msg){
      msg.className='ta-feedback '+(good?'is-good':'is-bad');
      msg.textContent=good?'בול! +'+(10+Math.min(g.streak-1,5)*2)+' נקודות'+(g.streak>=3?' · רצף '+g.streak+'!':''):
        (wasSkipped?'דילגת. ':'לא הפעם. ')+'התשובה היא '+q.answer;
    }
    if(!good)g.misses.push({prompt:q.plain,answer:q.answer,typed:wasSkipped?'':typed,tip:q.tip});
    updateHud();
    const token=serial;
    pending=setTimeout(function(){pending=0;if(token===serial&&phase==='playing')advance();},good?330:650);
  }
  function submit(event){
    if(event)event.preventDefault();
    if(phase!=='playing'||!game||game.locked)return false;
    if(Date.now()>=game.deadline){finish();return false;}
    const input=document.getElementById('ta-input');
    const value=input?input.value:'',numeric=normalizeAnswer(value);
    if(numeric===null){
      const msg=document.getElementById('ta-feedback');
      if(msg){msg.className='ta-feedback is-bad';msg.textContent='הקלד מספר תקין. אפשר גם להשתמש בנקודה עשרונית.';}
      return false;
    }
    answer(value,false);
    return false;
  }
  function skipQuestion(){if(phase==='playing'&&!game.locked)answer('',true);}
  function answer(value,wasSkipped){
    const g=game;
    if(phase!=='playing'||!g||g.locked)return;
    if(Date.now()>=g.deadline){finish();return;}
    const correct=!wasSkipped&&isCorrect(value,g.current.answer);
    g.locked=true;g.answered++;
    if(correct){
      g.correct++;g.streak++;g.peak=Math.max(g.peak,g.streak);
      g.score+=10+Math.min(g.streak-1,5)*2;
      try{if(navigator.vibrate)navigator.vibrate(12);}catch{}
    }else{
      if(wasSkipped)g.skipped++;else g.wrong++;
      g.streak=0;
    }
    feedback(correct,wasSkipped,value);
  }
  function advance(){
    if(phase!=='playing'||!game)return;
    if(Date.now()>=game.deadline){finish();return;}
    const g=game;
    g.current=nextFromDeck();g.locked=false;
    const prompt=document.getElementById('ta-question');
    if(prompt){prompt.innerHTML=g.current.prompt;prompt.classList.remove('ta-flip');void prompt.offsetWidth;prompt.classList.add('ta-flip');}
    const kind=document.getElementById('ta-kind');if(kind)kind.textContent=g.current.groupLabel;
    const count=document.getElementById('ta-count');if(count)count.textContent='שאלה '+(g.answered+1);
    const input=document.getElementById('ta-input');
    if(input){input.value='';if(document.activeElement!==input)input.focus();}
    const arena=document.getElementById('ta-arena');if(arena)arena.classList.remove('ta-good','ta-bad');
    const msg=document.getElementById('ta-feedback');
    if(msg){msg.className='ta-feedback';msg.textContent=g.streak>=3?'מצוין! עוד '+(3-Math.min(3,g.streak%3))+' לרצף הבא':'ממשיך. תן לתשובות להגיע אוטומטית.';}
  }
  function finish(){
    if(phase!=='playing'||!game)return;
    stopTimers();serial++;phase='result';
    const key=recordKey(),oldRecords=records(),old=oldRecords[key]||null;
    newBest=!old||game.score>(old.bestScore||0);
    const bestScore=newBest?game.score:(old.bestScore||0);
    const updated={...oldRecords,[key]:{
      bestScore,bestCorrect:newBest?game.correct:(old?.bestCorrect||0),
      played:(old?.played||0)+1,lastScore:game.score,lastCorrect:game.correct,lastAt:new Date().toISOString()
    }};
    try{if(hooks&&hooks.saveRecords)hooks.saveRecords(updated);}catch{}
    render();
    if(newBest&&hooks&&hooks.celebrate)hooks.celebrate();
  }
  function backToSetup(){stopTimers();serial++;game=null;phase='setup';render();}
  window.PSYCHO101_TIME_ATTACK={
    render,setMode,setDuration,start,submit,skip:skipQuestion,leave,backToSetup,
    generateBank,buildDeck,normalizeAnswer,isCorrect
  };
  document.addEventListener('visibilitychange',function(){
    if(!document.hidden&&phase==='playing'&&game){
      if(Date.now()>=game.deadline)finish();
      else updateHud();
    }
  });
})();
