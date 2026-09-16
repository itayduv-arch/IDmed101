// Original Psycho101 practice items based on the official NITE quantitative topic list.
// These are original questions, not verbatim copies of protected recent exam items.
window.PSYCHO101_OFFICIAL_QUANT_BANK = [
  {id:'oq001',category:'כמותי',topic:'חזקות ושורשים',difficulty:2,prompt:'מה ערכו של 2^5 · 2^3 ÷ 2^4 ?',answers:['8','16','32','64'],correct:1,explanation:'בחזקות עם אותו בסיס מחברים מעריכים בכפל ומחסרים בחילוק: 2^(5+3-4)=2^4=16.'},
  {id:'oq002',category:'כמותי',topic:'חזקות ושורשים',difficulty:3,prompt:'אם 3^x = 27·9, מה ערכו של x?',answers:['4','5','6','7'],correct:1,explanation:'27·9=3^3·3^2=3^5, ולכן x=5.'},
  {id:'oq003',category:'כמותי',topic:'חזקות ושורשים',difficulty:3,prompt:'מה ערכו של (4^3)^(1/2)?',answers:['4','8','12','16'],correct:1,explanation:'(4^3)^(1/2)=4^(3/2)=(√4)^3=2^3=8.'},
  {id:'oq004',category:'כמותי',topic:'חזקות ושורשים',difficulty:3,prompt:'איזה מהבאים שווה ל־1/25?',answers:['5^-1','5^-2','25^-2','(-5)^-1'],correct:1,explanation:'5^-2=1/5^2=1/25.'},
  {id:'oq005',category:'כמותי',topic:'חזקות ושורשים',difficulty:4,prompt:'אם a>0 ו־a^3=64, מה ערכו של a^(1/2)?',answers:['2','√2','4','8'],correct:0,explanation:'a=4, ולכן √a=2.'},
  {id:'oq006',category:'כמותי',topic:'חזקות ושורשים',difficulty:4,prompt:'מה גדול יותר?',answers:['2^10','4^5','8^3','שלושתם שווים'],correct:3,explanation:'4^5=(2^2)^5=2^10 וגם 8^3=2^9, לכן 2^10=4^5 גדולים מ־8^3. מבין האפשרויות אין שוויון לשלושתם.'},
  {id:'oq007',category:'כמותי',topic:'חזקות ושורשים',difficulty:4,prompt:'מה ערכו של √48 ÷ √3 ?',answers:['2','4','8','16'],correct:1,explanation:'√48/√3=√16=4.'},
  {id:'oq008',category:'כמותי',topic:'חזקות ושורשים',difficulty:4,prompt:'אם x^2=49 ו־x<0, מה ערכו של x?',answers:['-49','-7','7','49'],correct:1,explanation:'למשוואה x^2=49 יש פתרונות ±7, והנתון x<0 קובע x=-7.'},

  {id:'oq009',category:'כמותי',topic:'עצרת',difficulty:2,prompt:'מה ערכו של 5! ÷ 4!?',answers:['4','5','20','120'],correct:1,explanation:'5!=5·4!, ולכן 5!/4!=5.'},
  {id:'oq010',category:'כמותי',topic:'עצרת',difficulty:3,prompt:'מה ערכו של 7! ÷ 5!?',answers:['12','21','42','210'],correct:2,explanation:'7!=7·6·5!, ולכן המנה היא 7·6=42.'},
  {id:'oq011',category:'כמותי',topic:'עצרת',difficulty:4,prompt:'אם n! = 120, מה ערכו של n?',answers:['4','5','6','10'],correct:1,explanation:'5!=120.'},
  {id:'oq012',category:'כמותי',topic:'עצרת',difficulty:4,prompt:'מה ערכו של 6!/(3!·3!)?',answers:['10','20','30','60'],correct:1,explanation:'720/(6·6)=720/36=20.'},
  {id:'oq013',category:'כמותי',topic:'עצרת',difficulty:4,prompt:'מה ערכו של (8! ÷ 6!) ÷ 4!?',answers:['7/3','14/3','7','14'],correct:0,explanation:'8!/6!=8·7=56, ו־56/24=7/3.'},

  {id:'oq014',category:'כמותי',topic:'תכונות מספרים',difficulty:3,prompt:'איזה מהמספרים הבאים חייב להיות זוגי?',answers:['סכום של שני מספרים אי־זוגיים','סכום של מספר זוגי ואי־זוגי','מכפלת שני מספרים אי־זוגיים','חזקה אי־זוגית של מספר אי־זוגי'],correct:0,explanation:'אי־זוגי + אי־זוגי = זוגי.'},
  {id:'oq015',category:'כמותי',topic:'תכונות מספרים',difficulty:3,prompt:'איזה מהמספרים הבאים ראשוני?',answers:['51','57','61','69'],correct:2,explanation:'51 ו־69 מתחלקים ב־3, 57 מתחלק ב־3, ואילו 61 ראשוני.'},
  {id:'oq016',category:'כמותי',topic:'תכונות מספרים',difficulty:4,prompt:'אם n מתחלק ב־6, באיזה מהמספרים הבאים הוא בהכרח מתחלק?',answers:['4','9','3','12'],correct:2,explanation:'כל מספר שמתחלק ב־6 מתחלק גם ב־3.'},
  {id:'oq017',category:'כמותי',topic:'תכונות מספרים',difficulty:4,prompt:'מה השארית בחלוקת 2^5 ב־5?',answers:['0','1','2','4'],correct:2,explanation:'2^5=32, והשארית בחלוקה ל־5 היא 2.'},
  {id:'oq018',category:'כמותי',topic:'תכונות מספרים',difficulty:4,prompt:'כמה מחלקים חיוביים יש למספר 36?',answers:['6','8','9','12'],correct:2,explanation:'36=2^2·3^2 ולכן מספר המחלקים הוא (2+1)(2+1)=9.'},

  {id:'oq019',category:'כמותי',topic:'אי־שוויונות',difficulty:3,prompt:'אם 3x-5>10, מה נכון?',answers:['x>3','x>5','x<5','x<3'],correct:1,explanation:'3x>15 ולכן x>5.'},
  {id:'oq020',category:'כמותי',topic:'אי־שוויונות',difficulty:4,prompt:'אם -2x<8, מה נכון?',answers:['x<-4','x>-4','x<4','x>4'],correct:1,explanation:'בחילוק במספר שלילי הופכים את כיוון האי־שוויון: x>-4.'},
  {id:'oq021',category:'כמותי',topic:'אי־שוויונות',difficulty:4,prompt:'אם 2<x<5, איזה מהבאים יכול להיות ערכו של 2x+1?',answers:['3','5','7','12'],correct:2,explanation:'מתקבל 5<2x+1<11, ולכן 7 אפשרי.'},
  {id:'oq022',category:'כמותי',topic:'אי־שוויונות',difficulty:4,prompt:'אם |x|<3, מה נכון?',answers:['x<-3','-3<x<3','x>3','x<3 בלבד'],correct:1,explanation:'ערך מוחלט קטן מ־3 פירושו מרחק קטן מ־3 מאפס.'},

  {id:'oq023',category:'כמותי',topic:'פירוק לגורמים וכפל מקוצר',difficulty:3,prompt:'מהו הפירוק של x^2-9?',answers:['(x-9)(x+1)','(x-3)^2','(x-3)(x+3)','(x+9)(x-1)'],correct:2,explanation:'זהו הפרש ריבועים: x^2-3^2=(x-3)(x+3).'},
  {id:'oq024',category:'כמותי',topic:'פירוק לגורמים וכפל מקוצר',difficulty:3,prompt:'מה ערכו של (a+b)^2-(a-b)^2?',answers:['2ab','4ab','2a^2','2b^2'],correct:1,explanation:'פתיחה לפי כפל מקוצר נותנת 4ab.'},
  {id:'oq025',category:'כמותי',topic:'פירוק לגורמים וכפל מקוצר',difficulty:4,prompt:'אם x+y=10 ו־xy=21, מה ערכו של x^2+y^2?',answers:['42','58','79','100'],correct:1,explanation:'x^2+y^2=(x+y)^2-2xy=100-42=58.'},
  {id:'oq026',category:'כמותי',topic:'פירוק לגורמים וכפל מקוצר',difficulty:4,prompt:'מהו הפירוק של 2x^2+6x?',answers:['2x(x+3)','2(x+3)','x(2x+3)','6x(x+1)'],correct:0,explanation:'מוציאים גורם משותף 2x.'},

  {id:'oq027',category:'כמותי',topic:'שברים ויחסים',difficulty:3,prompt:'מה ערכו של 3/4 ÷ 2/5?',answers:['3/10','15/8','8/15','5/6'],correct:1,explanation:'מחלקים בשבר באמצעות כפל בהופכי: 3/4·5/2=15/8.'},
  {id:'oq028',category:'כמותי',topic:'שברים ויחסים',difficulty:3,prompt:'היחס בין A ל־B הוא 4:7. אם A+B=55, מה ערכו של A?',answers:['20','28','32','35'],correct:0,explanation:'יש 11 חלקים, כל חלק 5, ולכן A=20.'},
  {id:'oq029',category:'כמותי',topic:'שברים ויחסים',difficulty:4,prompt:'אם x/y=3/5 ו־y/z=10/7, מהו x/z?',answers:['3/7','6/7','7/6','15/7'],correct:1,explanation:'x/z=(x/y)(y/z)=3/5·10/7=6/7.'},
  {id:'oq030',category:'כמותי',topic:'שברים ויחסים',difficulty:4,prompt:'איזה שבר הוא הגדול ביותר?',answers:['5/8','7/12','9/16','11/20'],correct:0,explanation:'5/8=0.625, והשאר קטנים יותר.'},

  {id:'oq031',category:'כמותי',topic:'מערכת צירים',difficulty:3,prompt:'מה המרחק בין הנקודות (2,3) ו־(2,9)?',answers:['4','6','8','12'],correct:1,explanation:'אותו ערך x, לכן המרחק הוא |9-3|=6.'},
  {id:'oq032',category:'כמותי',topic:'מערכת צירים',difficulty:4,prompt:'אמצע הקטע בין (2,4) ו־(8,10) הוא:',answers:['(4,6)','(5,7)','(6,7)','(5,8)'],correct:1,explanation:'ממוצע הקואורדינטות: ((2+8)/2,(4+10)/2)=(5,7).'},
  {id:'oq033',category:'כמותי',topic:'מערכת צירים',difficulty:4,prompt:'נקודה נמצאת על ציר ה־y. מה בהכרח נכון?',answers:['x=0','y=0','x=y','x>0'],correct:0,explanation:'כל נקודה על ציר ה־y היא בעלת x=0.'},

  {id:'oq034',category:'כמותי',topic:'קומבינטוריקה',difficulty:3,prompt:'בכמה דרכים שונות אפשר לסדר 4 ספרים שונים בשורה?',answers:['8','12','16','24'],correct:3,explanation:'מספר הסידורים הוא 4!=24.'},
  {id:'oq035',category:'כמותי',topic:'קומבינטוריקה',difficulty:4,prompt:'כמה זוגות שונים אפשר לבחור מתוך 6 אנשים?',answers:['10','12','15','30'],correct:2,explanation:'מספר הזוגות הוא 6·5/2=15.'},
  {id:'oq036',category:'כמותי',topic:'קומבינטוריקה',difficulty:4,prompt:'כמה מספרים דו־ספרתיים שונים אפשר ליצור מהספרות 1,2,3,4 ללא חזרה?',answers:['8','10','12','16'],correct:2,explanation:'4 אפשרויות לעשרות ו־3 ליחידות: 12.'},
  {id:'oq037',category:'כמותי',topic:'קומבינטוריקה',difficulty:4,prompt:'בכמה דרכים אפשר לבחור ועדה של 2 מתוך 5 אנשים?',answers:['5','8','10','20'],correct:2,explanation:'5 choose 2 = 5·4/2=10.'},

  {id:'oq038',category:'כמותי',topic:'הסתברות',difficulty:3,prompt:'מטילים קובייה הוגנת. מה ההסתברות לקבל מספר זוגי?',answers:['1/6','1/3','1/2','2/3'],correct:2,explanation:'יש 3 תוצאות זוגיות מתוך 6.'},
  {id:'oq039',category:'כמותי',topic:'הסתברות',difficulty:4,prompt:'מטילים שתי מטבעות הוגנים. מה ההסתברות לקבל בדיוק עץ אחד?',answers:['1/4','1/3','1/2','3/4'],correct:2,explanation:'התוצאות האפשריות שוות הסתברות: עץ־פלי ופלי־עץ הן 2 מתוך 4.'},
  {id:'oq040',category:'כמותי',topic:'הסתברות',difficulty:4,prompt:'בשק 3 כדורים אדומים ו־2 כחולים. מוציאים כדור אחד. מה ההסתברות לכחול?',answers:['2/3','2/5','3/5','1/2'],correct:1,explanation:'2 כחולים מתוך 5 כדורים.'},
  {id:'oq041',category:'כמותי',topic:'הסתברות',difficulty:4,prompt:'מטילים קובייה הוגנת. מה ההסתברות לקבל מספר גדול מ־4?',answers:['1/6','1/3','1/2','2/3'],correct:1,explanation:'התוצאות 5 ו־6 הן 2 מתוך 6, כלומר 1/3.'},

  {id:'oq042',category:'כמותי',topic:'ממוצעים',difficulty:3,prompt:'ממוצע 5 מספרים הוא 18. מה סכומם?',answers:['72','80','90','108'],correct:2,explanation:'סכום = ממוצע × מספר איברים = 18×5=90.'},
  {id:'oq043',category:'כמותי',topic:'ממוצעים',difficulty:4,prompt:'ממוצע 4 מספרים הוא 12. לאחר הוספת מספר חמישי הממוצע הוא 14. מה המספר שנוסף?',answers:['18','20','22','24'],correct:2,explanation:'הסכום החדש 70 והישן 48, לכן נוסף 22.'},
  {id:'oq044',category:'כמותי',topic:'ממוצעים',difficulty:4,prompt:'ממוצע גילי 3 אנשים הוא 24. אדם רביעי בן 36 מצטרף. מה הממוצע החדש?',answers:['25','27','30','32'],correct:1,explanation:'הסכום המקורי 72, החדש 108, והממוצע 27.'},

  {id:'oq045',category:'כמותי',topic:'בעיות דרך',difficulty:3,prompt:'מכונית נוסעת במהירות 80 קמ״ש במשך שעה וחצי. איזו דרך עברה?',answers:['100','120','140','160'],correct:1,explanation:'דרך=מהירות×זמן=80×1.5=120 ק״מ.'},
  {id:'oq046',category:'כמותי',topic:'בעיות דרך',difficulty:4,prompt:'רכב עבר 150 ק״מ ב־2.5 שעות. מה מהירותו הממוצעת?',answers:['50','60','65','75'],correct:1,explanation:'150/2.5=60 קמ״ש.'},
  {id:'oq047',category:'כמותי',topic:'בעיות דרך',difficulty:4,prompt:'שני כלי רכב יוצאים זה לקראת זה ממרחק 210 ק״מ, במהירויות 60 ו־45 קמ״ש. אחרי כמה שעות ייפגשו?',answers:['1.5','2','2.5','3'],correct:1,explanation:'המהירות היחסית 105 קמ״ש, ולכן 210/105=2 שעות.'},

  {id:'oq048',category:'כמותי',topic:'בעיות הספק',difficulty:3,prompt:'עובד מסיים עבודה ב־8 שעות. איזה חלק מהעבודה יסיים ב־3 שעות?',answers:['3/8','5/8','1/3','3/4'],correct:0,explanation:'קצבו 1/8 עבודה לשעה, ולכן ב־3 שעות 3/8.'},
  {id:'oq049',category:'כמותי',topic:'בעיות הספק',difficulty:4,prompt:'עובד א מסיים עבודה ב־6 שעות ועובד ב ב־3 שעות. כמה זמן ייקח להם יחד?',answers:['1.5 שעות','2 שעות','2.5 שעות','3 שעות'],correct:1,explanation:'ההספק המשותף הוא 1/6+1/3=1/2 עבודה לשעה, לכן שעתיים.'},
  {id:'oq050',category:'כמותי',topic:'בעיות הספק',difficulty:4,prompt:'ברז ממלא מיכל ב־4 שעות. לאחר שעה אחת, איזה חלק מהמיכל עדיין ריק?',answers:['1/4','1/2','3/4','4/5'],correct:2,explanation:'בשעה התמלא 1/4, ולכן 3/4 עדיין ריק.'},

  {id:'oq051',category:'כמותי',topic:'גאומטריה',difficulty:3,prompt:'במשולש ישר זווית ניצבים באורך 6 ו־8. מה אורך היתר?',answers:['9','10','12','14'],correct:1,explanation:'לפי פיתגורס: √(36+64)=10.'},
  {id:'oq052',category:'כמותי',topic:'גאומטריה',difficulty:3,prompt:'מה שטח משולש שבסיסו 10 וגובהו 6?',answers:['16','30','60','80'],correct:1,explanation:'שטח משולש הוא בסיס×גובה/2=30.'},
  {id:'oq053',category:'כמותי',topic:'גאומטריה',difficulty:4,prompt:'זוויות משולש הן x, 2x ו־3x. מה ערכו של x?',answers:['20°','30°','45°','60°'],correct:1,explanation:'6x=180°, ולכן x=30°.'},
  {id:'oq054',category:'כמותי',topic:'גאומטריה',difficulty:4,prompt:'רדיוס מעגל הוא 5. מה היקפו?',answers:['5π','10π','20π','25π'],correct:1,explanation:'היקף מעגל הוא 2πr=10π.'},
  {id:'oq055',category:'כמותי',topic:'גאומטריה',difficulty:4,prompt:'שטח מעגל הוא 49π. מה רדיוסו?',answers:['5','7','14','49'],correct:1,explanation:'πr^2=49π, ולכן r=7.'},
  {id:'oq056',category:'כמותי',topic:'גאומטריה',difficulty:4,prompt:'במצולע משוכלל כל זווית פנימית היא 120°. כמה צלעות לו?',answers:['4','5','6','8'],correct:2,explanation:'במשושה משוכלל כל זווית פנימית היא 120°.'},
  {id:'oq057',category:'כמותי',topic:'גאומטריה',difficulty:4,prompt:'נפח תיבה שאורכה 3, רוחבה 4 וגובהה 5 הוא:',answers:['12','20','47','60'],correct:3,explanation:'נפח תיבה הוא מכפלת שלושת הממדים: 3×4×5=60.'},
  {id:'oq058',category:'כמותי',topic:'גאומטריה',difficulty:4,prompt:'נפח גליל שרדיוס בסיסו 3 וגובהו 4 הוא:',answers:['12π','18π','36π','48π'],correct:2,explanation:'V=πr^2h=π·9·4=36π.'},

  {id:'oq059',category:'כמותי',topic:'אחוזים',difficulty:4,prompt:'מחיר עלה ב־20% ולאחר מכן ירד ב־20%. ביחס למחיר המקורי, המחיר החדש הוא:',answers:['נמוך ב־4%','שווה למקור','גבוה ב־4%','נמוך ב־20%'],correct:0,explanation:'1.2×0.8=0.96, כלומר ירידה כוללת של 4%.'},
  {id:'oq060',category:'כמותי',topic:'אחוזים',difficulty:4,prompt:'12% ממספר הם 36. מה המספר?',answers:['240','280','300','320'],correct:2,explanation:'0.12x=36 ולכן x=300.'}
];
