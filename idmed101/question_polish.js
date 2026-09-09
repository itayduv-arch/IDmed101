(function(){
  const U=window.MED101_QUESTION_POLISH={};

  const uncertainty=/(לא בטוח|לא בטוחה|משהו(?: כזה| בסגנון)?|לדעתי|נראה לי|זוכר|זוכרת|כנראה|חסר|חלק טוענים|לפי משחזרים|לא ברור|לא היה מנוסח|שאלה על|מספר השאלה|היה כתוב|אם אני|אני חושב|אני זוכר|שאלה הייתה|לשים לב|לא זוכר|לא זוכרת|\.\.\.|…)/i;
  const forceExclude=new Set([
    'rec_2025b_006',
    'rec_2025b_029',
    'rec_2025b_034',
    'rec_2025b_039',
    'rec_2025b_053',
    'rec_2025b_096',
    'rec_2025b_120'
  ]);

  const manual={
    rec_2025b_004:{
      text:'אוסלטמיוויר (Tamiflu) וזנמיוויר (Relenza) משמשות לטיפול בשפעת. מהו מנגנון הפעולה העיקרי שלהן?',
      options:[
        'עיכוב היצמדות הנגיף לגליקופרוטאינים על פני התא',
        'עיכוב סינתזה של גליקופרוטאינים נגיפיים',
        'עיכוב חדירת הוויריון אל התא המאכסן',
        'עיכוב neuraminidase נגיפי ובכך הפחתת שחרור ויריונים חדשים מהתא'
      ],
      answer:3,
      explanation:'מעכבי neuraminidase מפחיתים את שחרור הווירוסים החדשים מפני התא המאכסן.',
      officialRef:'Lehninger 8e · Chapter 7 — Carbohydrates and Glycobiology',
      bookReviewed:true
    },
    rec_2025b_005:{
      text:'איזו טענה מתארת נכון את ההבדל בין kinase לבין phosphorylase?',
      options:[
        'Kinase מסיר קבוצת זרחן ואילו phosphorylase מוסיף קבוצת זרחן',
        'Phosphorylase פועל רק במסלולים קטבוליים ואילו kinase פועל רק במסלולים אנאבוליים',
        'תגובה המזורזת ב-phosphorylase היא תמיד בלתי הפיכה ואילו תגובה המזורזת ב-kinase תמיד הפיכה',
        'Kinase מעביר לרוב קבוצת זרחן מ-ATP, ואילו phosphorylase משתמש ב-Pi לביקוע קשר תוך יצירת תוצר מזורחן'
      ],
      answer:3,
      explanation:'Kinases מעבירים קבוצות זרחן מתורם כגון ATP; phosphorylases מזרזים phosphorolysis באמצעות phosphate אנאורגני.',
      officialRef:'Lehninger 8e · Chapters 6, 13, 15',
      bookReviewed:true
    },
    rec_2025b_007:{
      text:'בגליקוליזה, כמה מולקולות ATP נטו נוצרות ממולקולת fructose-6-phosphate אחת עד לקבלת שתי מולקולות pyruvate?',
      options:['1','2','3','4'],
      answer:2,
      explanation:'מהשלב של fructose-6-phosphate מושקע ATP אחד ב-PFK-1 ובהמשך נוצרים ארבעה ATP ב-substrate-level phosphorylation, ולכן הנטו הוא 3.',
      officialRef:'Lehninger 8e · Chapter 14.1 — Glycolysis',
      bookReviewed:true
    },
    rec_2025b_011:{
      text:'איזו טענה נכונה לגבי חומצה חלשה?',
      options:[
        'ככל שהחומצה חזקה יותר, טווח הבופר שלה רחב יותר',
        'ערך ה-pKa שלה שווה לריכוז החומצה כאשר pH=7',
        'ככל שערך ה-pKa גבוה יותר, החומצה חלשה יותר',
        'לא ניתן לבצע טיטרציה לחומצה חלשה'
      ],
      answer:2,
      explanation:'pKa גבוה משקף נטייה נמוכה יותר למסירת פרוטון ולכן חומצה חלשה יותר.',
      officialRef:'Lehninger 8e · Chapter 2 — Water, the Solvent of Life',
      bookReviewed:true
    },
    rec_2025b_014:{
      text:'מבין האטומים הבאים, איזה אטום שכיח ביותר בחומר החי?',
      options:['חנקן','נתרן','אשלגן','סידן'],
      answer:0,
      explanation:'מבין האפשרויות הנתונות, חנקן הוא מרכיב מרכזי ובעל שכיחות גבוהה במולקולות ביולוגיות.',
      officialRef:'Lehninger 8e · Chapter 1.2 — Chemical Foundations',
      bookReviewed:true
    },
    rec_2025b_017:{
      text:'במודל הקינטי E + S ⇌ ES → E + P, מה מייצג קבוע הקצב k₁?',
      options:[
        'את קבוע הקצב של השלב הקובע את מהירות התגובה הכוללת',
        'את קבוע הקצב של יצירת הקומפלקס ES מאנזים וסובסטרט',
        'את האפיניות בשיווי משקל של האנזים לסובסטרט',
        'את קבוע הקצב של שחרור התוצר מהאנזים'
      ],
      answer:1,
      explanation:'k₁ הוא קבוע הקצב של שלב האסוציאציה E+S→ES.',
      officialRef:'Lehninger 8e · Chapter 6 — Enzymes',
      bookReviewed:true
    },
    rec_2025b_019:{
      text:'מה מאפיין במיוחד את פירוק חומצות האמינו המסועפות (branched-chain amino acids)?',
      options:[
        'חלק משמעותי מהקטבוליזם הראשוני שלהן מתרחש ברקמות חוץ-כבדיות, ובעיקר בשריר',
        'פגיעה במסלול הפירוק שלהן גורמת ל-alkaptonuria',
        'תוצרי הפירוק שלהן אינם יכולים להזין את מעגל חומצת הלימון',
        'פירוקן אינו כולל תגובות חמצון-חיזור'
      ],
      answer:0,
      explanation:'בניגוד לרוב חומצות האמינו, שלבי הפירוק הראשוניים של BCAA מתרחשים במידה ניכרת ברקמות חוץ-כבדיות, במיוחד בשריר.',
      officialRef:'Lehninger 8e · Chapter 18 — Amino Acid Oxidation and the Production of Urea',
      bookReviewed:true
    },
    rec_2025b_022:{
      text:'Phosphoglycerate kinase מזרז בגליקוליזה העברת phosphate מ-1,3-bisphosphoglycerate ל-ADP. האם אותו אנזים משתתף גם בגלוקונאוגנזה?',
      options:[
        'לא, משום שכל שלב שבו נוצר ATP בגליקוליזה דורש מעקף בגלוקונאוגנזה',
        'כן, משום שהתגובה קרובה לשיווי משקל והפיכה בתנאים תאיים',
        'כן, משום שערך ΔG°\' השלילי מבטיח שהתגובה תתרחש תמיד באותו כיוון',
        'לא, משום ש-phosphoglycerate kinase פעיל רק בציטוזול של תאים גליקוליטיים'
      ],
      answer:1,
      explanation:'התגובה של phosphoglycerate kinase היא שלב הפיך; בגלוקונאוגנזה היא פועלת בכיוון ההפוך וצורכת ATP.',
      officialRef:'Lehninger 8e · Chapter 14 — Glycolysis and Gluconeogenesis',
      bookReviewed:true
    },
    rec_2025b_027:{
      text:'מטופל עם המוליזה לאחר עקה חמצונית נמצא בעל פעילות תקינה של G6PD. פגיעה באיזה אנזים נוסף עלולה לפגוע ביכולת התא לשמור glutathione במצב מחוזר?',
      options:[
        'Phosphohexose isomerase',
        'Glutathione reductase',
        'Glucose-6-phosphatase',
        'Pyruvate carboxylase'
      ],
      answer:1,
      explanation:'Glutathione reductase משתמש ב-NADPH כדי לחדש GSH וכך תורם להגנה מפני עקה חמצונית.',
      officialRef:'Lehninger 8e · Chapter 14.6 — Pentose Phosphate Pathway',
      bookReviewed:true
    },
    rec_2025b_043:{
      text:'איזו מהשיטות הבאות אינה משמשת להדגמת אינטראקציה בין שני חלבונים?',
      options:['FRET','Co-immunoprecipitation (Co-IP)','In situ hybridization','Fluorescence anisotropy'],
      answer:2,
      explanation:'In situ hybridization מיועדת לזיהוי רצפי חומצות גרעין ולא לאינטראקציה ישירה בין חלבונים.',
      officialRef:'Alberts 7e · Chapters 8–9 — Analyzing and Visualizing Cells and Molecules',
      bookReviewed:true
    },
    rec_2025b_048:{
      text:'במהלך סינתזה של חלבון חדש נחשפים מקטעים הידרופוביים של השרשרת הנבנית. איזה חלבון צפוי להיקשר אליהם ולסייע במניעת אגרגציה?',
      options:['Ubiquitin','Hsp70','Protein kinase','Proteasome'],
      answer:1,
      explanation:'Hsp70 נקשר למקטעים הידרופוביים חשופים בחלבונים חדשים או לא מקופלים ומסייע בקיפול ומניעת אגרגציה.',
      officialRef:'Alberts 7e · Chapter 6 — From DNA to Protein',
      bookReviewed:true
    },
    rec_2025b_052:{
      text:'כיצד aminoacyl-tRNA synthetase משפר את הדיוק בהתאמת חומצת האמינו ל-tRNA המתאים?',
      options:[
        'באמצעות זיהוי הקודון שעל גבי mRNA',
        'באמצעות אתר עריכה שיכול להוציא חומצת אמינו שגויה מ-tRNA לאחר טעינה לא נכונה',
        'באמצעות זיהוי ישיר של הריבוזום לפני טעינת ה-tRNA',
        'באמצעות התאמה בין הקודון לאנטיקודון בתוך האנזים'
      ],
      answer:1,
      explanation:'חלק מה-aminoacyl-tRNA synthetases כוללות אתר editing שמבצע proofreading לאחר טעינה שגויה.',
      officialRef:'Alberts 7e · Chapter 6 — From DNA to Protein',
      bookReviewed:true
    },
    rec_2025b_057:{
      text:'איזה חלבון של HIV מאפשר יצוא מהגרעין של RNA נגיפי שלא עבר שחבור מלא?',
      options:['Nef','Rev','Tat','Gag'],
      answer:1,
      explanation:'Rev נקשר ל-RRE ומאפשר יצוא של תעתיקים נגיפיים לא משוחברים או משוחברים חלקית.',
      officialRef:'Alberts 7e · Chapter 6 — RNA processing and transport',
      bookReviewed:true
    },
    rec_2025b_076:{
      text:'איזה חומר מעכב פולימריזציה של microtubules ומשמש לעצירת תאים במיטוזה לצורך הכנת karyotype?',
      options:['Taxol','Colchicine','Phalloidin','Cytochalasin B'],
      answer:1,
      explanation:'Colchicine נקשר ל-tubulin ומעכב הרכבת microtubules, ולכן ניתן להשתמש בו לעצירת תאים במטאפזה.',
      officialRef:'Alberts 7e · Chapter 16 — The Cytoskeleton',
      bookReviewed:true
    },
    rec_2025b_083:{
      text:'היכן מסונתזים בתחילה רוב הפוספוליפידים של ממברנת ה-ER?',
      options:[
        'בעלעל הציטוזולי של ממברנת ה-ER',
        'רק בעלעל הלומינלי של ממברנת ה-ER',
        'בלומן ה-ER בעזרת chaperones',
        'ב-Golgi בעזרת glycosyltransferases'
      ],
      answer:0,
      explanation:'האנזימים המסנתזים את רוב הפוספוליפידים פועלים בצד הציטוזולי של ממברנת ה-ER; בהמשך lipids מתפזרים בין העלעלים.',
      officialRef:'Alberts 7e · Chapter 12 — Intracellular Organization and Protein Sorting',
      bookReviewed:true
    },
    rec_2025b_087:{
      text:'פגם גנטי מונע חשיפה של phosphatidylserine על פני הממברנה החיצונית של תא אפופטוטי. מה צפוי להיפגע באופן הישיר ביותר?',
      options:[
        'עצם הפעלת הקספאזות ולכן התא לא יוכל להיכנס לאפופטוזה',
        'זיהוי ובליעה של התא האפופטוטי על ידי phagocytes',
        'שכפול ה-DNA של התא לפני המוות',
        'יצירת פוטנציאל פעולה בממברנת התא'
      ],
      answer:1,
      explanation:'חשיפת phosphatidylserine משמשת אות “eat-me” לזיהוי תאים אפופטוטיים על ידי phagocytes.',
      officialRef:'Alberts 7e · Chapter 18 — Cell Death',
      bookReviewed:true
    },
    rec_2025b_091:{
      text:'לאחר הפעלת receptor על פני התא, איזה אברון ממלא תפקיד מרכזי במיון receptor שעבר endocytosis ובקביעה אם ימוחזר לממברנה או יישלח לפירוק?',
      options:['Lysosome','Endosome','Nucleus','Peroxisome'],
      answer:1,
      explanation:'Endosomes הם תחנות מיון מרכזיות לקולטנים שעברו endocytosis ויכולים לתרום לסיום או לוויסות האות.',
      officialRef:'Alberts 7e · Chapter 13 — Intracellular Membrane Traffic',
      bookReviewed:true
    },
    rec_2025b_099:{
      text:'תאי דם אדומים הוכנסו לתמיסה ולאחר זמן עברו המוליזה. איזו מהתמיסות הבאות יכולה להיות hyperosmotic אך עדיין לגרום לכניסת מים לתאים בגלל שמומס עובר את הממברנה?',
      options:[
        'NaCl בריכוז 300 mOsm',
        'Glucose בריכוז 300 mOsm',
        'Urea בריכוז 400 mOsm',
        'NaCl בריכוז 400 mOsm'
      ],
      answer:2,
      explanation:'Urea היא osmole לא אפקטיבי יחסית משום שהיא חוצה את הממברנה; לכן hyperosmolarity אינה מבטיחה hypertonicity.',
      officialRef:'Berne & Levy 8e · Chapter 2 — Body Fluid Compartments',
      bookReviewed:true
    },
    rec_2025b_108:{
      text:'מהו התפקיד העיקרי של receptors פוסט-סינפטיים בסינפסה כימית?',
      options:[
        'לייצר בעצמם פוטנציאל פעולה ללא תלות במתח הממברנה',
        'לבצע ספיגה חוזרת של neurotransmitter מהמרווח הסינפטי',
        'לקשור את השליח הכימי ולהמיר את הקישור לתגובה פוסט-סינפטית',
        'לשמור באופן ישיר על ריכוזי היונים בשני צדי הממברנה'
      ],
      answer:2,
      explanation:'הרצפטור הפוסט-סינפטי מזהה את השליח הכימי ומתרגם את הקישור לשינוי חשמלי או ביוכימי בתא המטרה.',
      officialRef:'Berne & Levy 8e · Chapter 6 — Synaptic Transmission',
      bookReviewed:true
    },
    rec_2025b_110:{
      text:'איזה מאפיין אינו מתאים לסינפסה חשמלית בין שני תאים?',
      options:[
        'מעבר ישיר של זרם יוני בין התאים',
        'חיבור באמצעות gap junctions',
        'תעלות הבנויות מ-connexins',
        'העברת vesicles סינפטיות ישירות מתא אחד לתא השני'
      ],
      answer:3,
      explanation:'בסינפסה חשמלית הזרם עובר דרך gap junctions; אין העברה של vesicles בין התאים.',
      officialRef:'Berne & Levy 8e · Chapter 6 — Synaptic Transmission',
      bookReviewed:true
    }
  };

  function inferSubject(q){
    if(q.subject && q.subject!=='לא מסווג') return q.subject;
    const n=Number(q.questionNumber||0);
    if(n>=1&&n<=30)return 'ביוכימיה';
    if(n>=31&&n<=60)return 'מולקולרית';
    if(n>=61&&n<=90)return 'ביולוגיה של התא';
    if(n>=91&&n<=120)return 'פיזיולוגיה';
    return q.subject||'לא מסווג';
  }

  function tidy(s){
    let x=String(s??'').trim();
    x=x.replace(/^[-–—•\s]+/,'').replace(/\s+/g,' ');
    x=x.replace(/\bph\b/gi,'pH').replace(/\bpka\b/gi,'pKa').replace(/\batp\b/gi,'ATP').replace(/\badp\b/gi,'ADP');
    x=x.replace(/\bdna\b/gi,'DNA').replace(/\brna\b/gi,'RNA').replace(/\bmrna\b/gi,'mRNA').replace(/\btrna\b/gi,'tRNA');
    x=x.replace(/\ber\b/g,'ER').replace(/\bsr\b/g,'SR').replace(/\becf\b/gi,'ECF');
    x=x.replace(/\bhsp70\b/gi,'Hsp70').replace(/\bctcf\b/gi,'CTCF').replace(/\bstat\b/gi,'STAT');
    x=x.replace(/\bpi3k\b/gi,'PI3K').replace(/\bg6pd\b/gi,'G6PD');
    x=x.replace(/\s+([,.;:?])/g,'$1').replace(/([,;:])(?=\S)/g,'$1 ');
    x=x.replace(/\?+/g,'?').replace(/\.{2,}/g,'.');
    return x;
  }

  function officialReference(q){
    const s=inferSubject(q), t=((q.text||'')+' '+(q.options||[]).join(' ')).toLowerCase();
    const has=(...xs)=>xs.some(x=>t.includes(x));
    if(s==='ביוכימיה'){
      if(has('buffer','בופר','pka','ph','חומצה'))return 'Lehninger 8e · Chapter 2';
      if(has('חומצ','amino acid','פפטיד','peptide'))return 'Lehninger 8e · Chapter 3';
      if(has('קיפול','fold','hsp','מבנה חלבון'))return 'Lehninger 8e · Chapters 4–5';
      if(has('אנזים','enzyme','km','vmax','kcat','קינט'))return 'Lehninger 8e · Chapter 6';
      if(has('גליקו','סוכר','glyco'))return 'Lehninger 8e · Chapters 7, 14–15';
      if(has('signal','איתות','gpcr','rtk'))return 'Lehninger 8e · Chapter 12';
      if(has('atp','אנרג','חמצון','redox'))return 'Lehninger 8e · Chapter 13';
      if(has('גליקול','גלוקונאוג','פנטוז','pyruvate'))return 'Lehninger 8e · Chapter 14';
      if(has('גליקוגן'))return 'Lehninger 8e · Chapter 15';
      if(has('קרבס','citric','tca'))return 'Lehninger 8e · Chapter 16';
      if(has('fatty','חומצות שומן','β','בטא'))return 'Lehninger 8e · Chapters 17, 21';
      if(has('אוראה','urea','branched','אמינו'))return 'Lehninger 8e · Chapter 18';
      if(has('מיטוכונ','electron','קומפלקס','oxidative phosphorylation'))return 'Lehninger 8e · Chapter 19';
      return 'Lehninger 8e · chapters required by the official 2026 syllabus';
    }
    if(s==='מולקולרית'){
      if(has('replication','שכפול','repair','תיקון','recomb'))return 'Alberts 7e · Chapter 5';
      if(has('rna','תרגום','ריבוז','שעתוק','polymerase','trna'))return 'Alberts 7e · Chapter 6';
      if(has('expression','בקרת','ctcf','chromatin','כרומט'))return 'Alberts 7e · Chapters 4, 7';
      if(has('pcr','fret','chip','sequenc','ריצוף','micros','מיקרוסק'))return 'Alberts 7e · Chapters 8–9';
      return 'Alberts 7e · Chapters 1, 4–9 required by the official 2026 syllabus';
    }
    if(s==='ביולוגיה של התא'){
      if(has('membrane','ממברנה'))return 'Alberts 7e · Chapter 10';
      if(has('er','golgi','גולג','srp','sec61','peroxi','פרוקסיז'))return 'Alberts 7e · Chapter 12';
      if(has('vesic','וזיק','snare','rab','clathrin','copi','copii','endos'))return 'Alberts 7e · Chapter 13';
      if(has('mitochond','מיטוכונ'))return 'Alberts 7e · Chapter 14';
      if(has('signal','איתות','stat','pi3k','rtk'))return 'Alberts 7e · Chapter 15';
      if(has('actin','אקטין','microtub','מיקרוטוב','myosin','מיוזין'))return 'Alberts 7e · Chapter 16';
      if(has('cell cycle','מחזור התא','apc','cdh1','mitosis','מיטוז'))return 'Alberts 7e · Chapter 17';
      if(has('apopt','אפופט','caspase','מוות'))return 'Alberts 7e · Chapter 18';
      if(has('junction','צומת','ecm','matrix','מטריקס','laminin','למינין'))return 'Alberts 7e · Chapter 19';
      return 'Alberts 7e · Chapters 10, 12–19 required by the official 2026 syllabus';
    }
    if(s==='פיזיולוגיה'){
      if(has('osm','אוסמ','נוזל','ecf','icf'))return 'Berne & Levy 8e · Chapters 1–2';
      if(has('action potential','פוטנציאל','מיאלין','myelin','נתרן','אשלגן'))return 'Berne & Levy 8e · Chapter 5';
      if(has('synap','סינפס','gap junction','neurotrans'))return 'Berne & Levy 8e · Chapter 6';
      if(has('שריר','muscle','sarcom','סרקומר','myosin','מיוזין'))return 'Berne & Levy 8e · Chapter 12';
      return 'Berne & Levy 8e · Chapters required by the official 2026 syllabus';
    }
    return 'Official 2026 knowledge-test syllabus';
  }

  function unsafe(q){
    if(forceExclude.has(q.id))return true;
    return uncertainty.test([q.text,...(q.options||[])].join(' '));
  }

  U.apply=function(q){
    if(!q)return null;
    const o=manual[q.id];
    if(o){
      return {
        ...q,
        ...o,
        subject:inferSubject({...q,...o}),
        rawText:q.text,
        rawOptions:q.options,
        polished:true,
        styleLabel:'נוסח מעובד על בסיס שחזור · נבדק מול ספר המבחן',
        provenance:'reconstruction+book-review',
        reference:'📜 '+q.sourceLabel+' · 📘 '+o.officialRef
      };
    }
    if(unsafe(q))return null;
    const text=tidy(q.text);
    const options=(q.options||[]).map(tidy);
    if(!text||options.length!==4||options.some(x=>!x||x.length<1))return null;
    return {
      ...q,
      subject:inferSubject(q),
      rawText:q.text,
      rawOptions:q.options,
      text,
      options,
      polished:true,
      styleLabel:'נוסח מעובד על בסיס שחזור · סגנון מותאם לשאלות הרשמיות',
      officialRef:officialReference(q),
      provenance:'reconstruction+official-style',
      explanation:'הניסוח נוקה מהערות שחזור והותאם למונחים ולסגנון של הסילבוס והשאלות הרשמיות. התשובה נשמרה לפי הסימון בקובץ השחזור.',
      reference:'📜 '+q.sourceLabel+' · 📘 '+officialReference(q)
    };
  };

  U.isUnsafe=unsafe;
  U.manual=manual;
})();