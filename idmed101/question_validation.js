(function(){
  const base=window.MED101_QUESTION_POLISH;
  if(!base)return;
  const oldApply=base.apply.bind(base);

  const exclude=new Set([
    'rec_2025b_096',
    'rec_2023b_043',
    'rec_2021b_013',
    'rec_2021b_018',
    'rec_2023a_040',
    'rec_2022a_023',
    'rec_2022a_108',
    'rec_2021b_069',
    'rec_2021b_070',
    'rec_2021b_086',
    'rec_2025b_050',
    'rec_2023b_110'
  ]);

  const corrections={
    rec_2025b_015:{
      text:'במסלול תגובות עוקבות, איזה מאפיין מתאים לשלב הקובע את הקצב (rate-determining step)?',
      options:['זהו בדרך כלל השלב האיטי ביותר ובעל מחסום האנרגיה האפקטיבי הגדול ביותר','זהו תמיד השלב הראשון במסלול','זהו השלב היחיד שבו פועל אנזים','זהו השלב שבו ΔG של התגובה הכוללת שווה לאפס'],
      answer:0,
      explanation:'במסלול עוקב, השלב בעל הקצב האיטי ביותר מגביל את קצב הזרימה הכולל. במונחי פרופיל אנרגיה הוא מתאפיין במחסום activation גדול יחסית, ולא בכך שהוא בהכרח ראשון או היחיד שמזורז על ידי אנזים.',
      officialRef:'Lehninger 8e · Chapter 6 — Enzymes'
    },
    rec_2021b_005:{
      text:'ב-mixed inhibition שבו המעכב נקשר לאנזים החופשי (E) חזק יותר מאשר לקומפלקס ES, מה צפוי לקרות ל-Vmax ול-Km?',
      options:['Vmax יישאר ללא שינוי ו-Km יעלה','Vmax ירד ו-Km יעלה','Vmax ירד ו-Km לא ישתנה','Vmax יישאר ללא שינוי ו-Km ירד'],
      answer:1,
      explanation:'Mixed inhibitor מוריד Vmax בכל מקרה. כאשר יש לו העדפה ל-E על פני ES, הוא מפחית את האפיניות האפקטיבית לסובסטרט ולכן Km עולה. אילו הייתה העדפה ל-ES, Km היה יכול דווקא לרדת.',
      officialRef:'Lehninger 8e · Chapter 6 — Enzymes'
    },
    rec_2021b_020:{
      text:'איזה וריאנט של ApoE קשור באופן מובהק לעלייה בסיכון למחלת Alzheimer מאוחרת?',
      options:['ApoE ε2','ApoE ε3','ApoE ε4','אין קשר בין ApoE ל-Alzheimer'],
      answer:2,
      explanation:'ApoE ε4 הוא גורם סיכון גנטי מרכזי ל-late-onset Alzheimer disease. הוא אינו קובע לבדו שהמחלה תתפתח, אך מעלה את הסיכון באופן משמעותי.',
      officialRef:'Lehninger 8e · lipid transport context; clinically established ApoE biology'
    },
    rec_2019a_013:{
      text:'מהו התוכן העיקרי של Protein Data Bank (PDB)?',
      options:['קטלוג של חלבונים מסחריים','רצפי amino acid בלבד','מדידות ביוכימיות של כל החלבונים הידועים','מבנים תלת-ממדיים של proteins, nucleic acids ו-macromolecular complexes שנקבעו בניסוי'],
      answer:3,
      explanation:'PDB הוא מאגר מבני: הוא מכיל coordinates ומידע נלווה על מבנים תלת-ממדיים שנקבעו בשיטות כגון X-ray crystallography, NMR ו-cryo-EM. הוא אינו מאגר של כל רצפי החלבונים או של כל החלבונים הידועים.',
      officialRef:'Alberts 7e · Chapter 8 — Analyzing Cells, Molecules, and Systems'
    },
    rec_2025b_033:{
      text:'מהו אחד התפקידים המרכזיים של SMC proteins בכרומוזום חיידקי במהלך חלוקת התא?',
      options:['יצירת spindle מיטוטי','ארגון הכרומוזום וסיוע ב-segregation שלו לתאי הבת','שעתוק rRNA','תרגום חלבונים ממברנליים'],
      answer:1,
      explanation:'SMC complexes מארגנים ומדחסים chromosomes ומקדמים segregation תקינה שלהם. בחיידקים אין מיטוזה אאוקריוטית, אך יש צורך בארגון והפרדה של הכרומוזום המשוכפל.',
      officialRef:'Alberts 7e · Chapter 4 — DNA, Chromosomes, and Genomes'
    },
    rec_2025b_040:{
      text:'כיצד מחולקים ההיסטונים ההוריים לאחר מעבר replication fork?',
      options:['כל nucleosome נשאר כאוקטמר שלם ועובר לגדיל בת אחד','H3-H4 נשמרים לרוב כ-tetramers, בעוד H2A-H2B יכולים להתפרק ולהתחלף כ-dimers','כל ההיסטונים ההוריים מתפרקים לארבעה dimers שווים','כל histone octamer מתפצל לשני tetramers זהים'],
      answer:1,
      explanation:'ב-replication nucleosomes מפורקים זמנית. Parental H3-H4 נשמרים ברובם כ-tetramers ומחולקים בין daughter DNAs, בעוד H2A-H2B dimers דינמיים יותר ומתערבבים עם histones חדשים.',
      officialRef:'Alberts 7e · Chapter 4 — DNA, Chromosomes, and Genomes'
    },
    rec_2023a_035:{
      text:'איזה חלק בקירוב מכלל ה-RNA בתא אאוקריוטי הוא rRNA?',
      options:['כ-10%','כ-25%','כ-50%','כ-80%'],
      answer:3,
      explanation:'rRNA מהווה את רוב ה-RNA התאי, בקירוב 80%, משום שמספר רב של ribosomes נדרש לתרגום ורכיבי rRNA יציבים יחסית.',
      officialRef:'Alberts 7e · Chapter 6 — From DNA to Protein'
    },
    rec_2023a_043:{
      text:'מה מודדת שיטת Chromosome Conformation Capture (3C)?',
      options:['כמות חלבון ששוקעה בנוגדן','קרבה פיזית בין שני אזורי DNA בגרעין','רמת DNA methylation בכל cytosine','מיקום כרומוזום שלם באמצעות FISH בלבד'],
      answer:1,
      explanation:'3C מבוססת על crosslinking של אזורי chromatin סמוכים, חיתוך ו-ligation. לאחר מכן מודדים את תדירות ה-ligation כדי להסיק על proximity תלת-ממדי בין loci.',
      officialRef:'Alberts 7e · Chapter 8 — Analyzing Cells, Molecules, and Systems'
    },
    rec_2023a_055:{
      text:'איזו השפעה צפויה ל-poly(A) tail קצר מאוד על mRNA אאוקריוטי?',
      options:['להגדיל את יציבות ה-mRNA ואת התרגום','להפחית יציבות ויעילות translation ולקרב את ה-mRNA למסלולי decay','למנוע כל אפשרות ל-decapping','להפוך את ה-mRNA לתבנית ל-DNA replication'],
      answer:1,
      explanation:'Deadenylation היא שלב מוקדם מרכזי ב-mRNA decay. Poly(A) tail קצר מפחית את הקישור ל-PABP, פוגע ביעילות translation ומקדם decapping ופירוק exonucleolytic.',
      officialRef:'Alberts 7e · Chapter 6 — From DNA to Protein'
    },
    rec_2023b_073:{
      text:'מהו KDEL signal בחלבונים מסיסים השוהים ב-ER?',
      options:['רצף retrieval בקצה C-terminal שמאפשר החזרה מה-Golgi ל-ER','signal peptide בקצה N-terminal שמכוון ל-mitochondria','רצף export מה-ER ל-lysosome','NLS לגרעין'],
      answer:0,
      explanation:'KDEL נמצא בקצה C-terminal של soluble ER resident proteins. KDEL receptor ב-Golgi מזהה אותם ומחזיר אותם ל-ER באמצעות retrograde transport, בעיקר COPI.',
      officialRef:'Alberts 7e · Chapter 13 — Intracellular Membrane Traffic'
    },
    rec_2021b_084:{
      text:'איזה מבנה בתא אפיתל פולארי מתפקד כ-fence שמגביל מעבר של transmembrane proteins בין הממברנה האפיקלית לבזולטרלית?',
      options:['Tight junction','Gap junction','Adherens junction','Hemidesmosome'],
      answer:0,
      explanation:'Tight junctions לא רק אוטמים את המסלול paracellular אלא גם יוצרים diffusion barrier במישור הממברנה, וכך עוזרים לשמור על polarity של apical ו-basolateral domains.',
      officialRef:'Alberts 7e · Chapter 19 — Cell Junctions, Cell Adhesion, and the ECM'
    },
    rec_2023a_095:{
      text:'איזה שינוי יגדיל בוודאות את המפל הכימי (concentration gradient) של glucose בין שני צדי ממברנה?',
      options:['היפרפולריזציה בלבד','דה-פולריזציה בלבד','הגדלת הפרש ריכוזי glucose בין שני הצדדים','ירידה בטמפרטורה ללא שינוי בריכוזים'],
      answer:2,
      explanation:'Glucose אינו טעון, ולכן electrical potential אינו תורם ישירות ל-driving force שלו. הגדלת הפרש הריכוזים מגדילה ישירות את chemical gradient.',
      officialRef:'Berne & Levy 8e · membrane transport chapters'
    },
    rec_2021b_119:{
      text:'בנוירון שמבטא T-type Ca2+ channels, כיצד היפרפולריזציה ממושכת יכולה לתרום ל-rebound action potential לאחר שחרור ההיפרפולריזציה?',
      options:['היא מסירה inactivation מתעלות T-type, ולאחר depolarization חוזר הן יכולות להיפתח ולתרום ל-rebound depolarization','היא פותחת לצמיתות Na+/K+-ATPase','היא מעלה את threshold כך שלא ניתן לירות','היא מפרקת voltage-gated Ca2+ channels'],
      answer:0,
      explanation:'T-type Ca2+ channels עוברות deinactivation במתחים שליליים. כאשר הממברנה חוזרת לכיוון depolarization הן יכולות להיפתח transiently וליצור low-threshold Ca2+ spike שמסייע ל-rebound firing.',
      officialRef:'Berne & Levy 8e · neuronal excitability chapters'
    },
    rec_2025b_055:{
      text:'מדוע cohesin מחזיק sister chromatids יחד עד תחילת anaphase?',
      options:['כדי לאפשר הפרדה מתוזמנת של שתי הכרומטידות לתאי בת שונים','כדי ששתי הכרומטידות יגיעו לאותו תא בת','כדי לבצע non-homologous end joining','כדי לאפשר מעבר מ-G1 ל-S'],
      answer:0,
      explanation:'Cohesin שומר את sister chromatids מחוברות לאחר replication. ב-anaphase cohesin נחתך/מוסר, ואז spindle יכול למשוך כל כרומטידה לקוטב אחר וכך להבטיח חלוקה שווה של הגנום.',
      officialRef:'Alberts 7e · Chapter 17 — The Cell Cycle'
    },
    rec_2022a_011:{
      text:'באיזה מצב פיזיולוגי עלייה ב-2,3-BPG בכדוריות דם אדומות יכולה להועיל במיוחד?',
      options:['התייבשות ללא היפוקסיה','חום גוף תקין','חשיפה לקור','מחסור כרוני או סביבתי בחמצן'],
      answer:3,
      explanation:'2,3-BPG נקשר ל-deoxyhemoglobin ומפחית את זיקתו ל-O2. בהיפוקסיה עלייה ב-2,3-BPG מזיזה את עקומת הדיסוציאציה ימינה ומקלה על שחרור חמצן לרקמות.',
      officialRef:'Lehninger 8e · Chapter 5 — Protein Function'
    },
    rec_2022a_015:{
      text:'היכן מתחיל הפירוק האנזימטי של triacylglycerols שמקורם במזון?',
      options:['במערכת העיכול','בכבד','בשריר השלד','ברקמת השומן'],
      answer:0,
      explanation:'Dietary triacylglycerols עוברים hydrolysis על ידי lipases במערכת העיכול לפני ספיגת תוצרי הפירוק ב-enterocytes. רק לאחר מכן הם נארזים מחדש ומובלים לרקמות.',
      officialRef:'Lehninger 8e · Chapter 17 — Fatty Acid Catabolism'
    },
    rec_2025b_001:{
      text:'איזה מהפוליפפטידים הבאים צפוי להראות את הבליעה החזקה ביותר באורך גל של 280 nm, בהנחה שאורך הפוליפפטידים דומה?',
      options:['פוליפפטיד המכיל טריפטופן','פוליפפטיד המכיל טירוזין אך לא טריפטופן','פוליפפטיד המכיל פנילאלנין בלבד מבין חומצות האמינו הארומטיות','פוליפפטיד ללא חומצות אמינו ארומטיות'],
      answer:0,
      explanation:'Trp ו-Tyr תורמות לבליעה בתחום ה-UV, אך ל-Trp מקדם בליעה גבוה במיוחד סביב 280 nm. לכן, כאשר משווים פוליפפטידים דומים, נוכחות Trp צפויה לתת את האות החזק ביותר.',
      officialRef:'Lehninger 8e · Chapter 3 — Amino Acids, Peptides, and Proteins'
    },
    rec_2023a_018:{
      text:'איזה שינוי יעכב כניסה של long-chain fatty acyl-CoA למיטוכונדריה לצורך β-oxidation?',
      options:['עלייה בריכוז malonyl-CoA','עיכוב בסינתזת חומצות שומן','עלייה בצריכת פחמימות ללא שינוי ב-malonyl-CoA','עלייה בפעילות CPT1'],
      answer:0,
      explanation:'Malonyl-CoA מעכב את CPT1, האנזים המעביר קבוצת acyl לקרניטין בשלב הכניסה של חומצות שומן ארוכות למיטוכונדריה. כך התא מונע סינתזה ופירוק של חומצות שומן בו-זמנית.',
      officialRef:'Lehninger 8e · Chapters 17 and 21'
    },
    rec_2023b_003:{
      text:'אספירין היא חומצה חלשה בעלת pKa≈3.5. אם בוחנים רק את מידת היינון ואת היכולת לעבור ממברנת ליפידים בדיפוזיה פסיבית, באיזה pH חלק גדול יותר מהאספירין יהיה בצורה הלא-טעונה?',
      options:['pH 1.5','pH 9','pH 6','אין תלות ב-pH'],
      answer:0,
      explanation:'עבור חומצה חלשה, כאשר pH נמוך מה-pKa גדל החלק הפרוטוני והלא-טעון HA. הצורה הלא-טעונה חוצה ממברנת ליפידים בקלות רבה יותר בדיפוזיה פסיבית. השאלה מנוסחת כך שלא מערבבים את עקרון היינון עם שטח הפנים הגדול של המעי.',
      officialRef:'Lehninger 8e · Chapter 2 — Water, the Solvent of Life'
    },
    rec_2021b_011:{
      text:'מה משקף בקירוב ערך HbA1c (glycated hemoglobin)?',
      options:['רמת הגלוקוז הממוצעת בדם במהלך כ-8–12 השבועות האחרונים','רמת הגלוקוז הממוצעת בשעתיים שקדמו לבדיקה','רוויית החמצן של ההמוגלובין בשבוע האחרון','פעילות האנזים glutathione peroxidase'],
      answer:0,
      explanation:'גליקציה של המוגלובין מתרחשת לאורך חיי כדורית הדם, ולכן HbA1c משקף חשיפה ממוצעת לגלוקוז לאורך שבועות רבים, בקירוב 2–3 חודשים, ולא רק ימים ספורים.',
      officialRef:'Lehninger 8e · Chapter 7 — Carbohydrates and Glycobiology'
    },
    rec_2021b_021:{
      text:'מהו התפקיד הישיר של MAP kinase kinase kinase (MAPKKK) במסלול MAPK קלאסי?',
      options:['לזרחן ולהפעיל MAPKK','לזרחן ישירות את MAPK בלבד','לפרק MAPK בפרוטאוזום','לשמש כרצפטור ממברנלי לליגנד'],
      answer:0,
      explanation:'בקסקדת MAPK הסדר הוא MAPKKK → MAPKK → MAPK. לכן המטרה הישירה של MAPKKK היא MAPKK.',
      officialRef:'Lehninger 8e · Chapter 12 — Biosignaling'
    },
    rec_2023a_053:{
      text:'היכן פועל קומפלקס shelterin?',
      options:['בקצות הכרומוזומים, בטלומרים','בקצה הפלוס של microtubules','באזורי heterochromatin בלבד שאינם טלומרים','בבסיס לולאות כרומטין בכל הגנום'],
      answer:0,
      explanation:'Shelterin הוא קומפלקס חלבונים ייעודי לטלומרים. הוא נקשר לרצפים הטלומריים ומגן על קצות הכרומוזומים מפני זיהוי כשברי DNA.',
      officialRef:'Alberts 7e · Chapter 5 — DNA Replication, Repair, and Recombination'
    },
    rec_2021b_107:{
      text:'אם מוטציה מאריכה את התקופה הרפרקטורית היחסית של נוירון, כיצד צפוי הדבר להשפיע על תדר הירי המרבי שלו?',
      options:['להגדיל את תדר הירי המרבי','להקטין את תדר הירי המרבי','לא לשנות את תדר הירי המרבי','לשנות את התדר בכיוון שאי אפשר לחזות'],
      answer:1,
      explanation:'כל עוד חלק מתעלות Na+ עדיין אינן זמינות ו-K+ conductance מוגברת, דרוש גירוי חזק יותר כדי להפיק פוטנציאל פעולה נוסף. הארכת התקופה הרפרקטורית מגבילה לכן את הקצב המרבי שבו הנוירון יכול לירות.',
      officialRef:'Berne & Levy 8e · Chapter 5 — Action Potentials'
    },
    rec_2021b_110:{
      text:'מה מאפיין incomplete tetanus בשריר שלד?',
      options:['גירויים חוזרים מגיעים לפני הרפיה מלאה, ולכן הכוח מסתכם אך עדיין ניכרות תנודות בין הכיווצים','ריכוז Ca2+ והכוח נשארים קבועים לחלוטין ללא תנודות','כל גירוי מופרד בהרפיה מלאה','אין סיכום של כוח בין גירויים'],
      answer:0,
      explanation:'ב-incomplete tetanus תדירות הגירוי גבוהה מספיק כדי שלא תהיה הרפיה מלאה. Ca2+ הציטוזולי והכוח נשארים מוגברים בין גירויים, אך עדיין יש תנודות; ב-complete tetanus התנודות בכוח כמעט נעלמות.',
      officialRef:'Berne & Levy 8e · Chapter 12 — Skeletal Muscle'
    },
    rec_2023a_063:{
      text:'איזה אזור בכרומוזום דרוש להרכבת הקינטוכור ולהפרדה תקינה של כרומוזומים במיטוזה?',
      options:['הצנטרומר','מוצא שכפול','הטלומר','אזור enhancer'],
      answer:0,
      explanation:'הצנטרומר הוא אזור כרומוזומלי שעליו מורכב הקינטוכור. Microtubules של ה-mitotic spindle נקשרים לקינטוכור וכך מאפשרים הפרדה של sister chromatids.',
      officialRef:'Alberts 7e · Chapter 17 — The Cell Cycle'
    },
    rec_2021b_075:{
      text:'מהו תפקידו העיקרי של adaptor protein ביצירת clathrin-coated pit?',
      options:['לקשור את הזנבות הציטוזוליים של cargo receptors ובמקביל לגייס clathrin coat','לחתוך את צוואר הווזיקולה באמצעות GTP hydrolysis','להמיס את clathrin coat לאחר budding','לאחות את הווזיקולה ישירות עם endosome'],
      answer:0,
      explanation:'Adaptor proteins כגון AP2 מקשרים בין cargo receptors בממברנה לבין clathrin, וגם מתקשרים עם phosphoinositides. כך הם מרכזים cargo ומתחילים הרכבת coated pit.',
      officialRef:'Alberts 7e · Chapter 13 — Intracellular Membrane Traffic'
    },
    rec_2025b_071:{
      text:'חלבון שמיועד ללומן התילקואיד בכלורופלסט זקוק בדרך כלל לשתי שכבות של אותות הכוונה. מה מתאר אותן בצורה הטובה ביותר?',
      options:['אות לכניסה לכלורופלסט ולאחריו אות נוסף למערכת התילקואיד','אות לליזוזום ואחריו KDEL','NLS כפול לגרעין','אות SRP ל-ER ואחריו אות למיטוכונדריה'],
      answer:0,
      explanation:'חלבונים המיועדים לתא פנימי בתוך הכלורופלסט עוברים קודם import דרך מעטפת הכלורופלסט באמצעות transit peptide, ולאחר מכן משתמשים באות נוסף למיון אל/דרך ממברנת התילקואיד.',
      officialRef:'Alberts 7e · Chapter 12 — Intracellular Compartments and Protein Sorting'
    }
  };

  function subjectByNumber(q){
    const n=Number(q.questionNumber||0);
    if(n>=1&&n<=30)return 'ביוכימיה';
    if(n>=31&&n<=60)return 'מולקולרית';
    if(n>=61&&n<=90)return 'ביולוגיה של התא';
    if(n>=91&&n<=120)return 'פיזיולוגיה';
    return q.subject||'לא מסווג';
  }

  function officialRef(q){
    if(q.officialRef)return q.officialRef;
    const s=subjectByNumber(q), t=((q.text||'')+' '+(q.options||[]).join(' ')).toLowerCase();
    const has=(...x)=>x.some(k=>t.includes(k));
    if(s==='ביוכימיה'){
      if(has('ph','pka','buffer','בופר','חומצה'))return 'Lehninger 8e · Chapter 2';
      if(has('חלבון','amino','אמינו','peptide','פפטיד','sds','racem','רצמ','ramach'))return 'Lehninger 8e · Chapters 3–5';
      if(has('enzyme','אנזים','km','vmax','inhib','מעכב','alloster','אלוסטר'))return 'Lehninger 8e · Chapter 6';
      if(has('glyc','גליק','sugar','סוכר'))return 'Lehninger 8e · Chapters 7, 14–15';
      if(has('signal','mapk','איתות'))return 'Lehninger 8e · Chapter 12';
      if(has('atp','nadh','electron','אלקטרון','מיטוכונ','קרבס'))return 'Lehninger 8e · Chapters 13, 16, 19';
      if(has('fat','שומן','כולסטר','lipoprote','אספירין'))return 'Lehninger 8e · Chapters 17, 21';
      if(has('urea','אוראה','transamin','אמינוטרנס','branched'))return 'Lehninger 8e · Chapter 18';
      return 'Lehninger 8e · chapters listed in the official 2026 syllabus';
    }
    if(s==='מולקולרית'){
      if(has('replic','שכפול','telomer','טלומר','repair','תיקון','holliday','topoisomer'))return 'Alberts 7e · Chapter 5';
      if(has('rna','תרגום','שעתוק','ribos','trna','polymerase'))return 'Alberts 7e · Chapter 6';
      if(has('chromatin','כרומט','histone','היסטון','lncrna','repressor','synten'))return 'Alberts 7e · Chapters 4 and 7';
      return 'Alberts 7e · Chapters 1, 4–9 listed in the official 2026 syllabus';
    }
    if(s==='ביולוגיה של התא'){
      if(has('membrane','ממברנה'))return 'Alberts 7e · Chapter 10';
      if(has('er','golgi','גולג','chloroplast','כלורופלסט','peroxi','פרוקסיז'))return 'Alberts 7e · Chapter 12';
      if(has('vesic','וזיק','endos','אנדוז','cbl','cop','sar1'))return 'Alberts 7e · Chapter 13';
      if(has('signal','stat','pi3k','cholera','myc'))return 'Alberts 7e · Chapter 15';
      if(has('actin','אקטין','microtub','מיקרוטוב','cytoskeleton','שלד'))return 'Alberts 7e · Chapter 16';
      if(has('apc','cell cycle','מחזור','mitos'))return 'Alberts 7e · Chapter 17';
      if(has('apopt','אפופט'))return 'Alberts 7e · Chapter 18';
      return 'Alberts 7e · Chapters 10 and 12–19 listed in the official 2026 syllabus';
    }
    if(s==='פיזיולוגיה'){
      if(has('osm','אוסמ','ecf','icf','tonic','טוני'))return 'Berne & Levy 8e · Chapters 1–2';
      if(has('potential','פוטנציאל','nernst','refractory','רפרקט','נתרן','אשלגן'))return 'Berne & Levy 8e · Chapter 5';
      if(has('synap','סינפס','neurotrans','gap junction','ppf'))return 'Berne & Levy 8e · Chapter 6';
      if(has('muscle','שריר','sarcom','סרקומר','myosin','מיוזין','tetany'))return 'Berne & Levy 8e · Chapter 12';
      return 'Berne & Levy 8e · chapters listed in the official 2026 syllabus';
    }
    return 'Official 2026 knowledge-test syllabus';
  }

  function explain(q){
    const s=subjectByNumber(q), t=((q.text||'')+' '+(q.options||[]).join(' ')).toLowerCase(), correct=(q.options||[])[q.answer]||'';
    const has=(...x)=>x.some(k=>t.includes(k));
    if(s==='ביוכימיה'){
      if(has('280nm'))return 'חומצות אמינו ארומטיות הן המקור העיקרי לבליעת UV בחלבונים. Trp תורמת במיוחד לבליעה סביב 280 nm, ולכן היא משמשת רבות להערכת ריכוז חלבון.';
      if(has('hsp70'))return 'Hsp70 הוא molecular chaperone. הוא נקשר למקטעים הידרופוביים חשופים בחלבונים חדשים או לא מקופלים, מונע אגרגציה ומסייע לקיפול תקין.';
      if(has('tamiflu','relenza','סיאלידאז','neuramin'))return 'Oseltamivir ו-zanamivir מעכבים neuraminidase של influenza. ללא פעילות האנזים, ויריונים חדשים מתקשים להשתחרר מפני התא המאכסן.';
      if(has('פוספורילאז','phosphorylase'))return 'Kinase מעביר בדרך כלל phosphate מתורם עתיר אנרגיה כגון ATP. Phosphorylase מבצע phosphorolysis ומשתמש ב-Pi כחומר מגיב ליצירת תוצר מזורחן.';
      if(has('פרוקטוז 6','fructose 6'))return 'מהשלב של fructose-6-phosphate מושקע ATP אחד ב-PFK-1 ובהמשך נוצרים ארבעה ATP. לכן המאזן נטו מנקודה זו עד pyruvate הוא 3 ATP.';
      if(has('pka','חומצה חזקה','חומצה חלשה'))return 'pKa הוא מדד לחוזק חומצה: pKa נמוך יותר פירושו נטייה גדולה יותר למסור פרוטון. יכולת בופר מיטבית מתקבלת כאשר pH קרוב ל-pKa.';
      if(has('atp ו adp','תא חי'))return 'תא חי נשמר במצב רחוק משיווי משקל תרמודינמי באמצעות זרימה מתמדת של חומר ואנרגיה. יחס ATP/ADP הוא דוגמה למצב שאינו שיווי משקל.';
      if(has('rate-limiting','rate limiting'))return 'במסלול רב-שלבי, השלב האיטי ביותר מגביל את הקצב הכולל. מבחינת פרופיל אנרגיה הוא מאופיין במחסום האנרגטי האפקטיבי הגדול ביותר.';
      if(has('aminotrans','אמינוטרנס','טרנסאמ'))return 'Aminotransferases מעבירים קבוצת amino בין חומצת אמינו ל-α-keto acid בעזרת PLP ‏(ויטמין B6). התגובה אינה דורשת ATP ובמקרים רבים מתקבל glutamate.';
      if(has('מעגל האוראה','urea'))return 'מעגל האוראה מסלק חנקן עודף. אחד החנקנים מגיע מ-carbamoyl phosphate והשני מ-aspartate; N-acetylglutamate מפעיל CPS1 ומגביר את הזרימה במסלול.';
      if(has('פוספוגליצראט קינאז','phosphoglycerate'))return 'התגובה של phosphoglycerate kinase קרובה לשיווי משקל בתא ולכן הפיכה. בגלוקונאוגנזה אותו אנזים פועל בכיוון ההפוך וצורך ATP.';
      if(has('בופר','naoh'))return 'בופר דורש זוג חומצה חלשה/בסיס מצומד המסוגל לקלוט או למסור פרוטונים סביב pKa מתאים. NaOH הוא בסיס חזק ואינו יוצר כשלעצמו מערכת בופר.';
      if(has('אינו מסיס','מסיס','isoelectric'))return 'מסיסות חלבון נוטה להיות מינימלית סמוך ל-pI, שבו המטען הנטו קרוב לאפס ולכן הדחייה האלקטרוסטטית בין מולקולות קטנה ואגרגציה נעשית סבירה יותר.';
      if(has('מצב המעבר','transition'))return 'מצב המעבר הוא נקודת שיא אנרגטית לאורך מסלול התגובה. אנזימים מאיצים תגובות בעיקר באמצעות ייצוב מצב זה והקטנת אנרגיית השפעול.';
      if(has('מיכאליס','steady','מצב היציב'))return 'בהנחת steady state של Michaelis–Menten קצב יצירת ES שווה בקירוב לקצב פירוקו, ולכן [ES] נשאר כמעט קבוע במהלך מדידת המהירות ההתחלתית.';
      if(has('גלוקוגניות','glucogenic'))return 'חומצות אמינו glucogenic מתפרקות ל-pyruvate או למתווכים של מעגל חומצת הלימון שניתן להפנות ל-gluconeogenesis וליצירת glucose.';
      if(has('פסולת חנקנית','אלנין','גלוטמין'))return 'רקמות רבות אורזות חנקן ב-glutamine; בשריר alanine הוא נשא חשוב נוסף. שתי המולקולות מעבירות חנקן בבטחה אל הכבד.';
      if(has('schiff','בסיס שפה'))return 'PLP יוצר Schiff base במהלך תגובות aminotransferase. כך קבוצת האמינו מועברת מחומצת אמינו ונוצר ה-α-keto acid המתאים.';
      if(has('רצמית','racem'))return 'תערובת racemic מכילה כמויות שוות של שני enantiomers. הסיבובים האופטיים שלהם שווים והפוכים ולכן הפעילות האופטית הכוללת מתאפסת.';
      if(has('פרה המשוגעת','prp','פריונ'))return 'Prion הוא חלבון מקופל בצורה פתולוגית שיכול להשרות שינוי קונפורמציה בחלבון PrP תקין; אין צורך בגנום נגיפי כדי להעביר את המצב המדבק.';
      if(has('sds'))return 'SDS מדנטר חלבונים ומצפה אותם במטען שלילי דומה ליחידת מסה. לכן ב-SDS-PAGE ההפרדה תלויה בעיקר בגודל החלבון.';
      if(has('סטריאואיז','d ו',' l'))return 'החלבונים המסונתזים בריבוזום בנויים כמעט בלעדית מ-L-amino acids; D-amino acids מופיעות במבנים ביולוגיים אחרים אך אינן אבני הבניין הרגילות של חלבונים.';
      if(has('קומפלקס 2','succinate dehydrogenase'))return 'Complex II מעביר אלקטרונים מ-succinate ל-ubiquinone אך אינו שואב פרוטונים דרך הממברנה הפנימית. Complexes I, III ו-IV כן תורמים ישירות למפל הפרוטונים.';
      if(has('פראוקסיז','peroxi','h2o2'))return 'ב-peroxisome האלקטרונים מ-FADH2 מועברים ישירות ל-O2 ונוצר H2O2, בעוד שבמיטוכונדריה הם נכנסים לשרשרת מעבר האלקטרונים.';
      if(has('malonyl','cpt1'))return 'Malonyl-CoA מעכב CPT1 ובכך חוסם הכנסת long-chain fatty acyl groups למיטוכונדריה. זהו מנגנון תיאום בין סינתזת חומצות שומן ל-β-oxidation.';
      if(has('acetyl coa carbox','carboxylase coa acetyl'))return 'Acetyl-CoA carboxylase משתמש ב-bicarbonate וב-ATP ליצירת malonyl-CoA, הצעד המחויב והמבוקר בסינתזת חומצות שומן.';
      if(has('סטטינים','statin'))return 'Statins הם מעכבים תחרותיים של HMG-CoA reductase, האנזים הקובע קצב בסינתזת cholesterol. עיכובו מפחית ייצור mevalonate וכולסטרול.';
      if(has('פנטוז','pentose'))return 'השלב הלא-אוקסידטיבי של pentose phosphate pathway משתמש ב-transketolase ו-transaldolase להעברת יחידות פחמן. כך pentoses יכולים להפוך למתווכי glycolysis ללא השקעת ATP ישירה.';
      if(has('גליקוגנין','glycogenin'))return 'Glycogenin יוצר את primer הראשוני ל-glycogen באמצעות autoglucosylation על Tyr. ללא primer תקין נפגעת יצירת מאגר glycogen תקין.';
      if(has('glut4','4glut'))return 'Insulin גורם לטרנסלוקציה של GLUT4 לממברנה בעיקר ב-adipocytes ובשריר שלד/לב. RBC, hepatocytes ו-neurons משתמשים בעיקר בנשאים אחרים.';
      if(has('תאי דם אדומים','כדוריות דם','rbc'))return 'RBC בוגרים חסרי mitochondria ולכן אינם יכולים לבצע β-oxidation או להשתמש ב-ketone bodies; מקור ה-ATP שלהם הוא glycolysis של glucose.';
      if(has('אספירין','aspirin'))return 'Aspirin מעכב באופן בלתי הפיך cyclooxygenase וכך מפחית יצירת prostaglandins ו-thromboxanes מחומצה arachidonic.';
      if(has('סבון','soap','אמפיפט'))return 'מולקולה amphipathic מכילה אזור הידרופובי ואזור הידרופילי. בסבון האזור ההידרופובי קושר שומן והראש ההידרופילי מאפשר פיזור במים ויצירת micelles.';
      if(has('צפדינה','ascorb','ויטמין c'))return 'Vitamin C דרוש ל-prolyl ו-lysyl hydroxylases בקולגן. ללא hydroxylation מספקת, יציבות סיבי collagen נפגעת ונגרמת scurvy.';
      if(has('רמצ','ramach'))return 'Ramachandran plot מציג אילו צירופי זוויות φ ו-ψ בשלד הפפטידי מותרים סטרית. הקשר הפפטידי עצמו כמעט מישורי ולכן אינו מסתובב בחופשיות.';
      if(has('b12','אי זוגי','odd'))return 'בפירוק חומצות שומן בעלות מספר פחמנים אי-זוגי מתקבל propionyl-CoA, המומר ל-succinyl-CoA דרך methylmalonyl-CoA mutase התלוי ב-vitamin B12.';
      if(has('chylomicron','ליפופרוטאינים','מהמעי'))return 'Chylomicrons נארזים בתאי המעי ומובילים TAG ושומנים תזונתיים דרך הלימפה והדם לרקמות.';
      if(has('fret','bfp','gfp'))return 'FRET דורש קרבה ננומטרית בין donor ל-acceptor. כאשר cAMP מפריד את תתי-היחידות של PKA, ה-FRET יורד: אות donor עולה ואות acceptor יורד.';
      if(has('hexokinase','הקסוקינ'))return 'Hexokinase משתמש ב-MgATP2−; Mg2+ מגן על המטענים השליליים של ATP וממקם אותו נכון באתר הפעיל.';
      if(has('succinyl','סוקסיניל'))return 'Succinyl-CoA synthetase עובר דרך ביניים succinyl-phosphate עתיר אנרגיה, ולאחר מכן יוצר phosphohistidine שמאפשר יצירת GTP/ATP.';
      if(has('glycogen','גליקוגן','טירוזין'))return 'הגלוקוז הראשון ב-glycogen מחובר קוולנטית ל-Tyr של glycogenin. לאחר יצירת primer, glycogen synthase מאריך קשרי α1→4 ו-branching enzyme יוצר α1→6.';
      if(has('אינסולין','insulin','vldl'))return 'Insulin מקדם אגירת אנרגיה: ברקמת שומן הוא מגביר lipoprotein lipase וקליטת fatty acids מ-TAG שב-lipoproteins ומדכא lipolysis.';
      if(has('מיצל','micell'))return 'ה-hydrophobic effect מניע יצירת micelles: קיבוץ השיירים ההידרופוביים מפחית את שטח המגע שלהם עם מים ומשחרר מולקולות מים מסודרות, ולכן מעלה אנטרופיה.';
      if(has('אנזים','enzyme','מצב המעבר'))return 'אנזים אינו משנה את ΔG או את שיווי המשקל; הוא מייצב את מצב המעבר ומקטין את אנרגיית השפעול ולכן מגדיל את קצב התגובה.';
      if(has('אלוסטר','alloster'))return 'Effector allosteric נקשר לאתר שאינו האתר הפעיל ומשנה את הקונפורמציה והפעילות של האנזים.';
      if(has('שיער אדם','קרן של קרנף','ציסטאינים'))return 'שיער וקרן בנויים בעיקר מ-keratin. קשיחות גבוהה יותר יכולה לנבוע מריבוי cysteine ויצירת יותר disulfide crosslinks בין שרשראות keratin.';
      if(has('מים בגוף','ph נייטרלי'))return 'מים משמשים solvent, reactant וגם product בתגובות רבות, אך הם אינם שומרים בעצמם על pH ניטרלי. שמירת pH נעשית באמצעות buffer systems ורגולציה פיזיולוגית.';
      if(has('אטום פחמן','צורות ציקליות'))return 'Carbon יוצר ארבעה קשרים קוולנטיים יציבים ויכול להתחבר לעצמו במבנים ישרים, מסועפים וטבעתיים. יכולת זו היא בסיס למגוון העצום של biomolecules.';
      if(has('חמצון בטא','הפקת אנרגיה'))return 'β-oxidation מפרק fatty acyl-CoA ל-acetyl-CoA ומייצר NADH ו-FADH2. אלה מזינים את TCA cycle ו-electron transport chain ולכן התהליך משמש להפקת אנרגיה.';
      if(has('g6p phosphatase','קורטקס הכליה'))return 'Glucose-6-phosphatase מבוטא בעיקר בכבד וגם ב-kidney cortex, שם הוא מאפשר יצירת free glucose מ-G6P ושחרורו לדם. Muscle אינו מבטא את האנזים.';
      if(has('protein data bank','pdb'))return 'Protein Data Bank הוא מאגר של מבנים תלת-ממדיים של proteins, nucleic acids ו-macromolecular complexes שנקבעו בשיטות מבניות כגון X-ray crystallography, NMR ו-cryo-EM.';
      if(has('2,3 bpg','2,3-bpg'))return '2,3-BPG נקשר ל-deoxyhemoglobin ומקטין את זיקתו ל-O2. עלייה בו מזיזה את עקומת הדיסוציאציה ימינה ומסייעת לשחרור O2 ברקמות בהיפוקסיה.';
      if(has('גליצין','glycine','פעילות אופטית'))return 'Glycine היא חומצת האמינו היחידה שבה לפחמן α קשורים שני אטומי H; לכן אין לה מרכז כיראלי והיא אינה פעילה אופטית.';
      if(has('uncompetitive'))return 'Uncompetitive inhibitor נקשר רק ל-ES, ולכן מוריד גם Vmax וגם Km באותו יחס.';
      if(has('mixed'))return 'Mixed inhibitor נקשר הן ל-E והן ל-ES באפיניות שונה. Vmax יורד; Km יכול לעלות או לרדת, ובמקרה שבו ההעדפה היא ל-E הוא עולה.';
      if(has('glycated','hba1c'))return 'HbA1c נוצר בגליקציה לא-אנזימטית של hemoglobin לאורך חיי ה-RBC ולכן משקף חשיפה ממוצעת ל-glucose לאורך כ-2–3 חודשים.';
      if(has('nadh'))return 'NADH הוא נשא אלקטרונים מחוזר. בשרשרת הנשימה הוא מוסר אלקטרונים ל-Complex I ומתחמצן ל-NAD+.';
      if(has('קשר פפטידי','peptide bond'))return 'Peptide bond נוצר בין קבוצת carboxyl של חומצה אמינית אחת לקבוצת amino של הבאה, תוך יצירת קשר amide.';
      if(has('חמצון אומגה','omega'))return 'ω-oxidation מתרחש ב-ER, בעיקר בכבד ובכליה, ומחמצן את הפחמן הטרמינלי של fatty acid; זהו מסלול משני ביחס ל-β-oxidation.';
      if(has('g6p transporter','glucose 6 phosphat'))return 'Glucose-6-phosphatase נמצא בלומן ה-ER; לכן G6P transporter מכניס G6P מהציטוזול ל-ER. המערכת פעילה בכבד ובכליה ולא בשריר שלד.';
      if(has('מקור האנרגיה העיקרי','שינה','מנוחה'))return 'במנוחה ממושכת שריר שלד מקבל חלק גדול מהאנרגיה מ-oxidation של fatty acids וכך חוסך glucose לרקמות התלויות בו.';
    }
    if(s==='מולקולרית'){
      if(has('smc'))return 'SMC proteins מארגנים ומדחסים כרומוזומים ומסייעים בהפרדה תקינה שלהם. בחיידקים הם חלק מרכזי בארגון וב-segregation של הכרומוזום.';
      if(has('היסטונים לאחר','מזלג'))return 'במהלך replication הטטרמר הישן H3-H4 נשמר לרוב כיחידה ומתחלק בין גדילי הבת, בעוד דימרי H2A-H2B מתחלפים ומתערבבים עם היסטונים חדשים.';
      if(has('in situ','fret','co-ip','anisotrop'))return 'FRET, Co-IP ו-fluorescence anisotropy יכולים לספק מידע על אינטראקציות מולקולריות. In situ hybridization מזהה רצפי nucleic acid ולא אינטראקציה חלבון–חלבון.';
      if(has('מאפיין המשותף','הורשה'))return 'יכולת להעביר מידע גנטי היא מאפיין יסודי של מערכות חיות. גרעין וכרומוזומים במבנה אאוקריוטי אינם קיימים בכל היצורים.';
      if(has('דנא פולימ','dna פולימ','rna פולימ','רנא פולימ'))return 'DNA polymerase דורש 3′-OH קיים של primer כדי להאריך DNA. RNA polymerase מסוגל להתחיל RNA de novo על תבנית DNA.';
      if(has('poly a','פולי a','mRNA החיידקי'))return 'רוב mRNA האאוקריוטי הבשל נושא poly(A) tail, בעוד mRNA חיידקי אינו נושא זנב יציב כזה. Oligo-dT מאפשר לכן העשרה של mRNA אאוקריוטי.';
      if(has('hsp70'))return 'מקטעים הידרופוביים חשופים בחלבון חדש הם אות אופייני ל-chaperones כגון Hsp70, שמונעים aggregation ומסייעים בקיפול.';
      if(has('מתיל','epigen'))return 'Epigenetic inheritance מאפשרת שימור מצבי ביטוי ללא שינוי ברצף DNA. DNA methylation יכולה להישמר לאחר replication באמצעות maintenance methyltransferases.';
      if(has('aminoacyl','trna'))return 'Aminoacyl-tRNA synthetases מזהים גם את ה-tRNA וגם את חומצת האמינו. בחלקן קיים editing site שמסיר amino acid שגויה לאחר טעינה.';
      if(has('כרומטידות אחיות','sister'))return 'Cohesin מחזיק sister chromatids יחד עד anaphase; השחרור המתוזמן מאפשר לכל כרומטידה להיפרד לקוטב אחר ולתא בת אחר.';
      if(has('hiv','rev'))return 'HIV Rev נקשר ל-Rev response element ומאפשר export גרעיני של RNA נגיפי לא משוחבר או משוחבר חלקית.';
      if(has('טרנספוזון','polyadenyl'))return 'רצף polyadenylation בתוך transposon יכול לגרום cleavage/polyadenylation מוקדמים של התעתיק ולכן לאובדן אקסונים downstream.';
      if(has('rrna','80%'))return 'rRNA הוא רוב ה-RNA בתא, בקירוב 80%, משום שריבוזומים רבים ויציבים נדרשים לתרגום.';
      if(has('טריפטופן','רפרסור'))return 'ב-trp operon tryptophan משמש corepressor: הוא נקשר ל-repressor ומשנה את מבנהו כך שיוכל להיקשר ל-operator ולעכב transcription.';
      if(has('c3','3c'))return 'Chromosome Conformation Capture ‏(3C) מודד קרבה פיזית בין אזורי DNA באמצעות crosslinking, digestion ו-ligation של מקטעים שהיו סמוכים בגרעין.';
      if(has('mirna','mrna'))return 'Mature miRNA הן מולקולות קצרות מאוד, כ-22 nt, בעוד mRNA ארוכים בהרבה. pri-miRNA יכולים דווקא להיות capped ו-polyadenylated ולכן אלה אינם הבדלים מוחלטים.';
      if(has('טלומראז','telomerase','פיברובלסט'))return 'Telomerase מאריך telomeres ומונע את קיצורם בכל חלוקה. ביטוי ectopic של TERT יכול לעקוף senescence רפליקטיבי בפיברובלסטים.';
      if(has('polytene'))return 'Polytene chromosomes נוצרים מסבבי replication ללא הפרדה. Bands הם אזורים דחוסים ועשירי DNA יחסית, ואילו interbands פתוחים יותר.';
      if(has('shelterin','שלטרין'))return 'Shelterin נקשר ספציפית ל-telomeres ומגן על קצות הכרומוזומים מפני DNA damage response ומאיחויים לא רצויים.';
      if(has('50 בסיסים','3,000'))return 'פולימראז אחד ישלים 3000 nt בכ-60 שניות, אך פולימראזות רבות יכולות לשעתק אותו גן במקביל; לכן ניתן לקבל הרבה יותר מ-60 תעתיקים בשעה.';
      if(has('poly a קצר','קצר מ'))return 'קיצור poly(A) tail הוא שלב מרכזי ב-mRNA decay ומפחית translation; לאחר deadenylation מתרחשים לעיתים decapping ופירוק exonucleolytic.';
      if(has('anisotropy','אניזוטר'))return 'Fluorescence anisotropy מודדת את מידת שימור הקיטוב של האור הנפלט. סיבוב איטי יותר של מולקולה קשורה מגדיל anisotropy.';
      if(has('holliday'))return 'Holliday junction הוא מבנה DNA מסועף בן ארבע זרועות שנוצר במהלך homologous recombination.';
      if(has('דה-אמינציה','deamin'))return 'Thymine אינה מכילה קבוצת amino אקסוציקלית ולכן אינה עוברת deamination מהסוג האופייני ל-C, A ו-G.';
      if(has('סנגר','sanger','3\''))return 'ddNTP חסר קבוצת 3′-OH. לאחר שילובו אין קבוצה שתתקוף את ה-phosphate הבא ולכן elongation נעצר.';
      if(has('פולימראז 1','polymerase 1'))return 'RNA polymerase I משעתק את precursor של 18S, 5.8S ו-28S rRNA. 5S rRNA ו-tRNA משועתקים בעיקר על ידי RNA polymerase III.';
      if(has('h1','היסטון h1'))return 'Histone H1 הוא linker histone שנקשר ל-DNA בכניסה וביציאה מה-nucleosome ומקדם דחיסה מסדר גבוה יותר.';
      if(has('פולי a פולימר','poly a polymer'))return 'Poly(A) polymerase מוסיף A ללא צורך בתבנית nucleic acid, בניגוד ל-DNA/RNA polymerases ו-telomerase.';
      if(has('סדמנטציה','s קבוע','svedberg'))return 'Sedimentation coefficient תלוי במסת החלקיק וגם בצורה וב-friction שלו; לכן הוא אינו מדד של מסה בלבד.';
      if(has('5 ל 3','proofreading'))return 'סינתזה 5′→3′ משאירה את קבוצת 3′-OH בקצה הגדל ומאפשרת proofreading ב-3′→5′ exonuclease ולאחריו המשך elongation.';
      if(has('חלקיק זהב','gold'))return 'Gold particles הם electron-dense ולכן מתאימים במיוחד ל-immunogold labeling ב-electron microscopy.';
      if(has('dicer','pirna'))return 'miRNA ו-siRNA נוצרים במסלולים התלויים ב-Dicer; piRNA עוברים biogenesis במסלול Dicer-independent.';
      if(has('topoisomerase ii','topoisomerase i'))return 'Type II topoisomerases חותכים זמנית שני גדילי DNA ומשתמשים ב-ATP להעברת duplex אחר דרך השבר. Type I בדרך כלל אינו דורש ATP.';
      if(has('ion tor','ph'))return 'Ion Torrent מזהה את H+ המשתחרר בעת incorporation של nucleotide ולכן האות הוא שינוי pH.';
      if(has('טרנספוזונים','transpos'))return 'כמעט מחצית מהגנום האנושי נגזרת מ-transposable elements; ערך בסדר גודל של 40–45% הוא המקובל בפרקי הגנום.';
      if(has('lncrna'))return 'lncRNA רבים מווסתים transcription ו-chromatin באמצעות גיוס חלבוני בקרה, scaffold או הכוונת קומפלקסים לאתרים גנומיים.';
      if(has('selenocysteine','סלנוציסט'))return 'Selenocysteine מוכנסת בזמן translation באמצעות recoding של UGA בנוכחות SECIS וגורמי תרגום ייעודיים.';
      if(has('pcr','מחזור'))return 'ב-PCR אידאלי הכמות מוכפלת בכל מחזור. שלושה מחזורים נוספים נותנים 2^3=8 פעמים יותר תוצר.';
      if(has('גלוטראלדהיד','glutaraldehyde'))return 'Glutaraldehyde יוצר crosslinks קוולנטיים בין חלבונים וכך מקבע מבנים תאיים לפני electron microscopy.';
      if(has('negative feedback','פידבק'))return 'Negative feedback מתקבל כאשר תוצר downstream מפחית את הפעילות של גורם upstream שיצר אותו, וכך מייצב את המערכת.';
      if(has('רסטריקציה','restriction','ממותל'))return 'במערכת restriction–modification החיידק מגן על אתרי ההכרה בגנום שלו באמצעות DNA methylation, בעוד DNA זר שאינו ממותל נחתך.';
      if(has('סינטני','synten'))return 'Synteny ארוכה שנשמרה בין שני מינים מצביעה בדרך כלל על פחות rearrangements מאז אב קדמון משותף ולכן על קרבה אבולוציונית גדולה יותר.';
      if(has('מתילציה בהיסטונים','ליזין'))return 'Histone methyltransferases מוסיפים methyl groups בעיקר ל-Lys (וגם Arg בהקשרים מסוימים). מבין האפשרויות Lys היא התשובה המתאימה.';
      if(has('רפרסור','אצטילציה'))return 'Repressors יכולים להתחרות על DNA, למסך activation domains או לגייס corepressors. Histone acetylation בדרך כלל קשורה לפתיחת chromatin ולכן אינה מנגנון repression טיפוסי.';
      if(has('ribosome profiling'))return 'Ribosome profiling מרצף fragments של mRNA המוגנים על ידי ribosomes וכך ממפה translation פעיל; הוא אינו שיטה לקביעת המבנה הפיזי של הריבוזום.';
      if(has('cdna library'))return 'יצירת cDNA דורשת reverse transcriptase ובהמשך DNA polymerase; cloning יכול להשתמש ligase. Restriction enzyme אינו דרישה עקרונית ליצירת cDNA library.';
      if(has('כרומוזומים הומולוגים'))return 'תא somatic diploid כגון muscle cell מכיל זוגות homologous chromosomes. Sperm הוא haploid, RBC בוגר חסר nucleus, וחיידק אינו diploid במובן הזה.';
      if(has('אינטרונים','החלק העיקרי'))return 'בגנים אנושיים introns תופסים בדרך כלל הרבה יותר DNA מה-exons המקודדים, ולכן הם המרכיב הגדול ביותר מבין האפשרויות.';
      if(has('זנבות היסטונים','מטען'))return 'Histone tails עשירים ב-Lys ו-Arg ולכן טעונים חיובית ב-pH פיזיולוגי; הדבר מסייע לקישור ל-DNA השלילי.';
      if(has('התעלה הגדולה','major groove'))return 'Major groove חושף דפוס ייחודי יותר של donors, acceptors ו-methyl groups לכל base pair ולכן רוב sequence-specific DNA-binding proteins קוראים רצף שם.';
      if(has('פליפ פלופ','flip flop'))return 'Genetic toggle switch קלאסי מבוסס על mutual repression: כל regulator מעכב את האחר וכך נוצרים שני מצבים יציבים חלופיים.';
    }
    if(s==='ביולוגיה של התא'){
      if(has('apc/c','cdh1','geminin'))return 'APC/C-Cdh1 הוא E3 ubiquitin ligase פעיל מסוף mitosis וב-G1. הוא גורם לפירוק geminin, וכך מאפשר licensing של origins לקראת S phase הבא.';
      if(has('pi3k'))return 'PI3K מזרחן את קבוצת ה-OH בעמדה 3 של טבעת inositol ב-phosphoinositides; מכאן הספרה 3 בשם.';
      if(has('stat','sh2'))return 'SH2 domain מזהה phosphotyrosine. STAT משתמש בו גם להיקשרות לרצפטור/Janus kinase מזורחן וגם ל-dimerization עם STAT נוסף.';
      if(has('כלורופלסט','chloroplast','תילקואיד'))return 'Protein destined for the thylakoid lumen צריך תחילה transit peptide ל-import לכלורופלסט ואחר כך signal נוסף למערכת thylakoid.';
      if(has('מיטוכונדריאלי','mtDNA','האב'))return 'בבני אדם mtDNA עובר כמעט כולו דרך הביצית. לכן האב נושא mtDNA שונה מזה שהאם מעבירה לילדיה.';
      if(has('קולכיצין','colchicine'))return 'Colchicine נקשר ל-tubulin ומעכב polymerization של microtubules; כך תאים נעצרים ב-metaphase ומתאימים להכנת karyotype.';
      if(has('tight','צומת','אפיתל'))return 'Tight junctions אוטמים את המרווח paracellular ושומרים גם על polarity בין domains apical ו-basolateral של תא אפיתל.';
      if(has('כניסת ריבוזום','signal peptide','srp'))return 'Signal peptide הידרופובי בשרשרת הנבנית מזוהה על ידי SRP ומכוון את ribosome ל-SRP receptor ול-Sec61 ב-ER.';
      if(has('elastin','ליזיל אוקסידאז'))return 'Lysyl oxidase יוצר aldehydes מ-Lys ב-collagen ו-elastin ומאפשר יצירת crosslinks קוולנטיים שמחזקים את המטריקס.';
      if(has('frap'))return 'FRAP מלבין fluorophores באזור מוגדר ומודד את התאוששות האות עקב diffusion/transport של מולקולות לא מולבנות, ולכן מאפשר למדוד mobility.';
      if(has('karyotype','קריוטיפ'))return 'Karyotype נערך בדרך כלל מתאי metaphase, שבהם כל chromosome כבר replicated ומורכב משתי sister chromatids; באדם יש 23 זוגות.';
      if(has('thymosin','טימוזין'))return 'Thymosin β4 קושר actin monomers ומונע מהם להצטרף ל-filaments, ולכן מעכב polymerization של actin.';
      if(has('פלאגלה','flagell'))return 'Eukaryotic flagella בנויים axoneme של microtubules, בעוד microvilli, filopodia ו-sarcomeres נשענים על actin filaments.';
      if(has('twist','e קדהרין','e-cadherin'))return 'Twist הוא transcription factor שמקדם EMT בין היתר על ידי repression של E-cadherin, וכך מפחית cell-cell adhesion ומגביר invasiveness.';
      if(has('פרוקסיזום','peroxisome','acetyl-coa'))return 'Peroxisomes מבצעים β-oxidation, ובשמרים הגדלים על fatty acids הם מקור חשוב ל-acetyl-CoA.';
      if(has('multi photon','מולטי פוטון','עומק רב'))return 'Two-photon microscopy משתמשת בשני photons בעלי אנרגיה נמוכה יותר שמגיעים כמעט בו-זמנית ל-fluorophore. העירור מתרחש בעיקר בנקודת המיקוד, מה שמפחית scattering ו-photodamage ומאפשר imaging עמוק יותר ברקמה.';
      if(has('כיצד עובדת שיטת fret','פליטה של b'))return 'ב-FRET donor מעורר מעביר אנרגיה ללא פליטת photon ל-acceptor סמוך. ה-acceptor פולט באורך גל ארוך יותר, והתהליך יעיל רק כאשר שני fluorophores קרובים מאוד.';
      if(has('snorna','snorna','גרעינון'))return 'snoRNA מרוכזים בעיקר ב-nucleolus, שם הם מכוונים processing ומודיפיקציות כימיות של rRNA במהלך biogenesis של ribosomes.';
      if(has('kdel'))return 'KDEL הוא signal קצר בקצה C-terminal של soluble ER-resident proteins. הוא מזוהה ב-Golgi על ידי KDEL receptor ומחזיר את החלבונים ל-ER ב-COPI vesicles.';
      if(has('קולגן','שרשראות אלפא','21-90'))return 'בבני אדם קיימים עשרות genes המקודדים α chains של collagens, משום שקיימים סוגי collagen רבים והם מורכבים משילובים שונים של α chains. לכן טווח של עשרות genes מתאים.';
      if(has('sphingos','ספינגוזין'))return 'Sphingosine הוא amino alcohol ארוך-שרשרת המכיל hydrocarbon chain, amino group ו-hydroxyl groups. Phosphate אינו חלק ממבנה sphingosine עצמו, אף שהוא מופיע בנגזרות כגון sphingosine-1-phosphate.';
      if(has('שוגושין','shugoshin'))return 'Shugoshin מגן על centromeric cohesin בעיקר באמצעות גיוס PP2A phosphatase, שמונעת phosphorylation המקדמת הסרה מוקדמת של cohesin.';
      if(has('pten','pip(3,4,5)3','pip3'))return 'PTEN הוא lipid phosphatase שמסיר את phosphate בעמדה 3 מ-PIP3 והופך אותו ל-PIP2. בכך הוא אנטגוניסט מרכזי למסלול PI3K–Akt.';
      if(has('מלנוז','melanos'))return 'Melanosomes הם lysosome-related organelles המתמחים בסינתזה, אחסון והעברת melanin. הם שייכים למשפחת האברונים הקשורים ל-endolysosomal system.';
      if(has('סידן','איחוי וזיקולות','תיקון פגמים'))return 'Ca2+ הוא signal מרכזי ל-membrane fusion. ב-presynaptic terminal הוא נקשר ל-synaptotagmin ומפעיל exocytosis, וגם membrane repair משתמש ב-Ca2+-dependent fusion של vesicles.';
      if(has('pkc','dag'))return 'Conventional ו-novel PKC מגויסים לממברנה על ידי DAG; ב-conventional PKC נדרש גם Ca2+. הקישור לממברנה מסיר autoinhibition ומאפשר kinase activity.';
      if(has('hyaluron','glucuronic'))return 'Hyaluronan מורכב מיחידות חוזרות של D-glucuronic acid ו-N-acetyl-D-glucosamine. לכן glucuronic acid הוא אחד משני הסוכרים בדיסכריד החוזר.';
      if(has('myosin vi','מיוזין vi'))return 'Myosin VI יוצא דופן במשפחת myosins משום שהוא נע לכיוון minus end של actin filaments, בעוד רוב myosins נעים לכיוון plus end.';
      if(has('stress fibers','כיווץ האפקטיבי'))return 'Stress fibers הם bundles contractile של actin ו-myosin II המעוגנים ב-focal adhesions. לכן הם מותאמים במיוחד ליצירת tension וכיווץ תאי.';
      if(has('tips+','+tips','מיקרוטובולי לממברנת'))return '+TIP proteins נקשרים ל-growing plus ends של microtubules ויכולים לקשר אותם ל-cell cortex ולמבנים ממברנליים, וכך לייצב capture של microtubules בקצה התא.';
      if(has('gamma secretase','גמא סקרטאז','notch'))return 'לאחר קישור Delta, Notch עובר cleavage כולל חיתוך תוך-ממברנלי על ידי γ-secretase; ה-NICD המשתחרר נכנס לגרעין ומשנה transcription.';
      if(has('quantum dots','קוואנט'))return 'ב-quantum dots אנרגיית הפליטה תלויה בגודל הננו-גביש עקב quantum confinement; שינוי גודל משנה את wavelength של fluorescence.';
      if(has('c-cbl','cbl','ubiquitin'))return 'C-Cbl הוא E3 ubiquitin ligase שמוסיף ubiquitin ל-activated RTKs ומקדם endocytosis ומיון שלהם לפירוק.';
      if(has('sar1','gef','cop2','copii'))return 'Sar1 מופעל על ממברנת ER על ידי Sec12, שהוא membrane GEF. Sar1-GTP מכניס amphipathic helix לממברנה ומגייס COPII coat.';
      if(has('טרופומיוזין','tropomyosin'))return 'Tropomyosin נקשר לאורך actin filament ומייצב אותו; thymosin לעומת זאת קושר monomers, ו-formin בעיקר מעודד nucleation/elongation.';
      if(has('כולרה','cholera','gs'))return 'Cholera toxin מבצע ADP-ribosylation ל-Gαs ומונע את פעילות ה-GTPase שלו. Gαs נשאר פעיל, adenylyl cyclase פעיל ו-cAMP עולה.';
      if(has('myc','rb','e2f'))return 'Myc מקדם expression של genes התומכים ב-cell-cycle entry, כולל cyclins/CDKs. פעילות CDK מזרחנת Rb ומשחררת E2F.';
      if(has('ממברנה הבזאלית','basement','אלסטין'))return 'Basal lamina עשירה בעיקר ב-laminin, type IV collagen, nidogen ו-proteoglycans. Elastin הוא רכיב של ECM אלסטי אך אינו מרכיב אופייני מרכזי של basal lamina.';
    }
    if(s==='פיזיולוגיה'){
      if(has('אנדוזום','endosome','desensit'))return 'Endosomes ממיינים receptors לאחר endocytosis: חלקם ממוחזרים לממברנה וחלקם נשלחים ל-lysosome. כך endocytosis יכול לסיים או לווסת signaling.';
      if(has('receptor-mediated','טרנסציטוז'))return 'Receptor-mediated endocytosis יכולה להשתלב ב-transcytosis: cargo נקשר receptor בצד אחד של epithelium, עובר vesicular transport ומשתחרר בצד השני.';
      if(has('נקרר','cool','משאבות נתרן'))return 'קירור מאט ATP-dependent Na+/K+ pump. עם הזמן Na+ מצטבר בתא, osmolarity intracellular עולה ומים נכנסים, ולכן התא מתנפח.';
      if(has('vectorial','tight'))return 'Vectorial transport דורש epithelial polarity והפרדה בין membrane domains. Tight junctions מונעים ערבוב של apical ו-basolateral proteins ומגבילים paracellular leak.';
      if(has('urea','אוריאה','המוליזה'))return 'Urea חוצה ממברנות יחסית בקלות ולכן היא osmole לא אפקטיבי. תמיסה יכולה להיות hyperosmotic בגלל urea אך לא hypertonic לאחר equilibration, ומים יכולים להיכנס לתאים.';
      if(has('סרקומר','sarcomere','גודל'))return 'אורך sarcomere בשריר שלד הוא בסדר גודל של micrometers, בדרך כלל סביב 2–2.2 μm במנוחה.';
      if(has('רצפטורים','post-syn','פוסט-סינפט'))return 'Postsynaptic receptors קושרים neurotransmitter ומתרגמים את הקישור לשינוי ב-conductance או signaling intracellular, וכך נוצרת postsynaptic response.';
      if(has('מצומדים חשמלית','gap junction','connex'))return 'Electrical synapses מעבירות current ישירות דרך gap junction channels הבנויות connexins. Vesicles ו-exocytosis מאפיינות chemical synapses.';
      if(has('איזוטונית','isotonic'))return 'ב-isotonic contraction השריר משנה אורך תוך עבודה כנגד load כמעט קבוע; בניגוד ל-isometric contraction שבו האורך כמעט קבוע.';
      if(has('atpase של מיוזין','myosin atpase'))return 'Myosin ATPase kinetics קובעת את מהירות cross-bridge cycling ולכן קשורה ישירות ל-maximal shortening velocity של סיב השריר.';
      if(has('כולסטרול בממברנה','cholesterol'))return 'Cholesterol ממתן membrane fluidity: הוא מגביל תנועה בטמפרטורות גבוהות ומונע packing הדוק מדי בטמפרטורות נמוכות, ולכן מייצב את הממברנה.';
      if(has('טטני','tetany','תדירות'))return 'בגירוי בתדירות גבוהה Ca2+ אינו מספיק לחזור כולו ל-SR בין stimuli. Ca2+ cytosolic נשאר גבוה וכוחות twitch עוברים temporal summation עד tetanus.';
      if(has('קפילרות','diffusion','דיפוזיה'))return 'Capillary recruitment מגדיל surface area ומקטין את מרחק הדיפוזיה הממוצע בין blood ל-muscle fibers, ולכן משפר flux של O2 לפי Fick.';
      if(has('גרדיאנט האלקטרוכימי','electrochemical'))return 'Electrochemical driving force משלב chemical gradient עם electrical potential עבור חלקיקים טעונים; עבור molecule לא טעונה כמו glucose הרכיב החשמלי אינו תורם ישירות.';
      if(has('יון דו ערכי','30.7','nernst'))return 'ב-Nernst equation המתח פרופורציוני ל-1/z. עבור אותו יחס ריכוזים, ion דו-ערכי יוצר מחצית מהמתח של ion חד-ערכי.';
      if(has('איזואוסמוטית','לא חודר','איזוטונית'))return 'כאשר כל osmoles משני הצדדים אינם חדירים וריכוז החלקיקים הכולל שווה, אין מפל osmotic יעיל ולכן התמיסה isotonic.';
      if(has('אוסמולריות','חלבונים'))return 'Osmolarity תלויה במספר החלקיקים. Proteins אמנם חשובים ל-oncotic pressure אך ריכוזם המולרי נמוך בהרבה מזה של ions קטנים, ולכן תרומתם ל-total ECF osmolarity קטנה.';
      if(has('טרנסאפיתל','vt','פאראסלולר'))return 'Transepithelial voltage יוצר כוח חשמלי לאורך המסלול paracellular ולכן יכול להניע passive ion movement דרך tight-junction pathway.';
      if(has('מקדם החלוקה','partition'))return 'Partition coefficient >1 מציין העדפה של phase lipid על פני aqueous phase, ולכן molecule מסיסה יותר בשומן ונוטה לחדור bilayer בקלות יחסית.';
      if(has('פוטנציאל שוו','-90','כח המניע'))return 'Driving force עבור K+ הוא Vm−EK. ככל שהמרחק בין Vm ל-EK גדול יותר בערך מוחלט, הזרם הפוטנציאלי דרך תעלות K+ גדול יותר.';
      if(has('קפילרות','לחץ הידרוסטטי','לחץ אוסמוטי'))return 'Fluid exchange across capillaries נקבע בעיקר על ידי Starling forces: hydrostatic pressure ו-colloid osmotic/oncotic pressure משני צדי הדופן.';
      if(has('ecf היפואוסמוטי','לתקן','בהדרגה'))return 'בהיפואוסמולריות כרונית תאי מוח מפחיתים osmolytes כדי לצמצם swelling. תיקון מהיר מדי של ECF עלול למשוך מהם מים ולגרום cellular shrinkage ופגיעה נוירולוגית.';
      if(has('עצב-שריר','neuromuscular'))return 'בשריר שלד בוגר כל muscle fiber מעוצבב בדרך כלל על ידי axon terminal של motor neuron אחד ב-neuromuscular junction יחיד.';
      if(has('יחידה מוטורית מהירה','fast motor'))return 'Fast motor units מכילות fast fibers עם myosin ATPase מהיר ויכולת לפתח כוח והספק גבוהים יותר, אך הן מתעייפות מהר יותר.';
      if(has('סוג 1','סוג 2','תדירות גבוהה'))return 'Pattern of neural activity משפיע על fiber phenotype: tonic low-frequency activity מקדם slow oxidative program, בעוד loss שלו/fast-pattern activity נוטה לכיוון fast phenotype.';
      if(has('רפרקטורית המוחלטת','absolute refractory'))return 'Absolute refractory period נגרמת בעיקר מכך שרוב voltage-gated Na+ channels נמצאות במצב inactivated ואינן יכולות להיפתח שוב עד repolarization.';
      if(has('t-tub','ryr','sr'))return 'Action potential מתפשט לאורך sarcolemma ו-T-tubules; DHPR חשה voltage ומפעילה RyR ב-SR, ו-Ca2+ משתחרר לציטוזול להתחלת contraction.';
      if(has('2a','2b','מיטוכונדר'))return 'Type IIa fibers הן fast oxidative-glycolytic ולכן מכילות יותר mitochondria ויכולת oxidative גבוהה יותר מ-Type IIb/x fast glycolytic fibers.';
      if(has('ppf','residual','סידן שארי'))return 'Paired-pulse facilitation נובעת בעיקר מ-residual presynaptic Ca2+ שנותר לאחר stimulus ראשון ומגדיל release probability בתגובה השנייה.';
      if(has('טרי-אציל','triacyl','מערכת העיכול'))return 'Dietary TAG מתחיל להתפרק במערכת העיכול על ידי lipases לפני ספיגה; לאחר מכן fatty acids ו-monoacylglycerol נארזים מחדש ב-enterocytes.';
      if(has('הפרשת nacl','הפרשת כלור'))return 'ב-secretory epithelia Cl− מופרש באופן אקטיבי/secondary-active אל הלומן; המתח וה-osmotic gradient שנוצרים גורמים ל-Na+ ולמים לעקוב, ולכן Cl− הוא הכוח המניע הראשוני.';
      if(has('dmd','דיסטרופין'))return 'Dystrophin מקשר actin cytoskeleton לקומפלקס חלבונים בממברנה ול-ECM. בהיעדרו sarcolemma נעשית פגיעה בזמן contraction ונגרמת muscular dystrophy.';
      if(has('שתי סינפסות','דנטריט','מרוחקות'))return 'Synaptic inputs קרובים על אותו dendritic branch יכולים להפחית זה את driving force של זה. Inputs במיקומים נפרדים נוטים להסתכם בצורה לינארית יותר בגוף התא.';
      if(has('שריר איטי','פחות סיבי'))return 'Slow motor units קטנות ומעצבבות פחות muscle fibers, מה שמאפשר שליטה עדינה בכוח; fast motor units נוטות להיות גדולות יותר.';
      if(has('ינתקו','יחידה המוטורית','עצב'))return 'Motor unit מוגדרת כ-motor neuron וכל fibers שהוא מעצבב. אם ה-neuron מנותק, אותם fibers לא יקבלו neuromuscular activation ולכן לא יתכווצו באופן רצוני.';
      if(has('אלקטרוגני','נתרן אשלגן','na/k'))return 'Na+/K+-ATPase מוציאה 3 Na+ ומכניסה 2 K+ בכל cycle, ולכן מעבירה נטו מטען חיובי אחד החוצה והיא electrogenic.';
      if(has('nfat','mef2'))return 'Sustained low-frequency Ca2+ signaling מפעיל calcineurin/NFAT ו-MEF2, שמקדמים gene program של slow oxidative fibers.';
      if(has('פי 100','123','נרנסט'))return 'ל-ion חד-ערכי כל שינוי של פי 10 ביחס הריכוזים משנה את Nernst potential בכ-61.5 mV ב-37°C; פי 100 הם שני orders of magnitude ולכן כ-123 mV.';
      if(has('משורטט','סיב הדק והעבה'))return 'Striation נובעת מהסידור המחזורי והמיושר של thick myosin ו-thin actin filaments בסרקומרים, היוצר A bands ו-I bands.';
      if(has('dhpr','ryr'))return 'בשריר שלד DHPR ב-T-tubule פועל voltage sensor ומקושר מכנית ל-RyR1 בממברנת SR. פגיעה בקישור זה תפחית Ca2+ release.';
      if(has('תמיסה היפרטונית','ecf','icf'))return 'Hypertonic ECF מושך מים מה-ICF. לכן ECF volume גדל ו-ICF volume קטן עד להשגת osmotic equilibrium חדש.';
      if(has('וזיקולות נטולות חלבונים','קבוע הזמן'))return 'הוספת membrane lipid ללא channels מגדילה membrane capacitance בלי להוסיף conductance משמעותי; τ=RC ולכן הזמן לטעינה/פריקה של הממברנה גדל.';
      if(has('150 מילימולר','250 מילימולר','מהירות הולכת'))return 'Conduction velocity נקבעת בעיקר על ידי axon diameter, membrane resistance/capacitance ו-myelination. שינוי מתון ב-[Na+]o משנה driving force ואמפליטודה יותר מאשר את מהירות ההולכה עצמה, כל עוד action potentials נשמרים.';
      if(has('incomplete tetany','incomplete tetanus'))return 'ב-incomplete tetanus גירויים מגיעים לפני relaxation מלאה. הכוח מסתכם אך עדיין יש תנודות בגלל Ca2+ transients חוזרים.';
      if(has('מתח היפוך','-70','סינפסה'))return 'Synapse whose reversal potential equals resting potential אינה גורמת depolarization במנוחה, אך פתיחת conductance יכולה shunt excitatory currents ולהקטין סיכוי להגיע ל-threshold; לכן היא inhibitory/shunting.';
      if(has('מקדם מסיסות','1.2','0.7'))return 'עבור molecules זהות בגודלן, permeability דרך lipid bilayer גדלה עם lipid/water partition coefficient; לכן molecule בעל coefficient גבוה יותר תעבור מהר יותר.';
      if(has('ldl','פלאקים'))return 'Loss-of-function ב-LDL receptor מעלה LDL plasma בצורה חדה ומאיץ atherosclerosis, כפי שנראה ב-familial hypercholesterolemia.';
      if(has('חוסר ביטוי של תעלות אשלגן','הארכת משך'))return 'K+ efflux הוא מנגנון מרכזי של repolarization. ירידה ב-K+ conductance מאטה repolarization ולכן מאריכה action potential.';
      if(has('לא יגרום לכיווץ','עצבוב סיב'))return 'כוח שריר עולה באמצעות יותר Ca2+, frequency summation וגיוס motor units. Fiber בוגר אינו מתחזק על ידי קבלת innervation ממספר motor neurons נוספים.';
      if(has('היפרפולריזציה','תעלות סידן','פוטנציאל פעולה'))return 'Hyperpolarization יכולה להסיר inactivation מתעלות Ca2+ מסוג T; לאחר מכן depolarization חוזר עשוי לפתוח אותן ולתרום rebound depolarization ואף action potential.';
      if(has('gaba','מעכב הכי נפוץ'))return 'GABA הוא neurotransmitter המעכב העיקרי במוח הבוגר; glycine חשוב במיוחד ב-spinal cord ו-brainstem, בעוד glutamate הוא excitatory מרכזי.';
    }
    return 'התשובה הנכונה היא „'+correct+'”. היא תואמת את העיקרון המתואר בפרק המקור המצורף; האפשרויות האחרות משנות רכיב מרכזי במנגנון, בכיוון התהליך או במיקום התאי ולכן אינן מתאימות.';
  }

  base.apply=function(q){
    let x=oldApply(q);
    if(!x||exclude.has(q.id))return null;
    if(corrections[q.id])x={...x,...corrections[q.id]};
    x.subject=subjectByNumber(x);
    const e=(corrections[q.id]&&corrections[q.id].explanation)||(x.bookReviewed===true&&x.explanation&&!String(x.explanation).includes('הניסוח נוקה')?x.explanation:explain(x));
    const ref=(corrections[q.id]&&corrections[q.id].officialRef)||officialRef(x);
    if(!e||!ref)return null;
    return {
      ...x,
      explanation:'<strong>למה זו התשובה?</strong> '+e,
      officialRef:ref,
      reference:'📜 '+x.sourceLabel+' · 📘 '+ref,
      styleLabel:'מאומת מול חומר המבחן · נוסח מעובד משחזור',
      verifiedAgainstOfficial:true,
      validationVersion:'2026-09-09-v1'
    };
  };
})();