/* Psycho101 — user-supplied algebra comparison and 13 original psychometric variants.
   Answer correctness checked on representative counterexamples; all math in LTR spans. */
window.PSYCHO101_INEQUALITIES_20261028 = {
  "quantitative": [
    {
      "id": "ineq1028-01",
      "category": "כמותי",
      "topic": "אלגברה",
      "difficulty": 3,
      "skill": "בדיקת הכרחיות בהיעדר נתונים",
      "prompt": "מה מהבאים נכון בהכרח?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">x + y &gt; x − y</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">x + y &lt; x − y</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">x + y = x − y</span>",
        "אף תשובה אינה נכונה בהכרח"
      ],
      "correct": 3,
      "explanation": "ההפרש בין הביטויים הוא 2y. אם y חיובי הביטוי הראשון גדול יותר, אם y שלילי הוא קטן יותר, ואם y שווה לאפס הביטויים שווים. לא ידוע דבר על y, ולכן אף אחת מהאפשרויות 1–3 אינה נכונה בהכרח.",
      "strategy": "בשאלת 'בהכרח' מחסרים את שני האגפים ומחפשים אם סימן ההפרש ידוע.",
      "fastSteps": [
        "מחסרים: (x+y)−(x−y)=2y.",
        "בודקים y=1, y=−1 ו־y=0: מתקבלות שלוש תוצאות שונות.",
        "אין יחס יחיד שמתחייב; מסמנים תשובה 4."
      ],
      "whenToUse": "השוואת שני ביטויים עם נעלמים וסימן לא ידוע.",
      "trap": "אין להניח ש־y חיובי רק כי הוא כתוב לאחר סימן פלוס. בלי נתונים אי אפשר לבחור תשובות 1–3.",
      "provenance": "user-provided-image-2026-10-28"
    },
    {
      "id": "ineq1028-02",
      "category": "כמותי",
      "topic": "אלגברה",
      "difficulty": 2,
      "skill": "סימן של הפרש",
      "prompt": "נתון <span class=\"math-ltr\" dir=\"ltr\">y &gt; 0</span>. מה מהבאים נכון בהכרח?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">x + y &gt; x − y</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">x + y &lt; x − y</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">x + y = x − y</span>",
        "אף תשובה אינה נכונה בהכרח"
      ],
      "correct": 0,
      "explanation": "מכיוון ש־(x+y)−(x−y)=2y ו־y חיובי, ההפרש חיובי תמיד. לכן x+y גדול מ־x−y לכל ערך של x.",
      "strategy": "בטל את x על ידי חיסור הביטויים והשווה רק את 2y לאפס.",
      "fastSteps": [
        "מחשבים את ההפרש בין הביטויים: 2y.",
        "לפי הנתון y>0 ולכן 2y>0. הביטוי הראשון גדול."
      ],
      "whenToUse": "השוואת ביטויים שנבדלים רק בסימן של אחד האיברים.",
      "trap": "ערך x אינו משפיע על התשובה; הוא מתבטל.",
      "provenance": "original-variant-of-user-question-2026-10-28"
    },
    {
      "id": "ineq1028-03",
      "category": "כמותי",
      "topic": "אלגברה",
      "difficulty": 2,
      "skill": "השוואה כאשר נעלם שלילי",
      "prompt": "נתון <span class=\"math-ltr\" dir=\"ltr\">y &lt; 0</span>. מה מהבאים נכון בהכרח?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">x + y &gt; x − y</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">x + y &lt; x − y</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">x + y = x − y</span>",
        "אף תשובה אינה נכונה בהכרח"
      ],
      "correct": 1,
      "explanation": "הפרש הביטויים הוא 2y. מכיוון ש־y שלילי, ההפרש שלילי; לכן x+y קטן מ־x−y.",
      "strategy": "השווה דרך ההפרש ולא על ידי הצבת ערך אקראי של x.",
      "fastSteps": [
        "מחסרים את הביטוי השני מהראשון ומקבלים 2y.",
        "אם y<0, ההפרש קטן מאפס והביטוי הראשון קטן."
      ],
      "whenToUse": "תנאי על סימן אחד הנעלמים.",
      "trap": "חיסור מספר שלילי דווקא מגדיל את הערך.",
      "provenance": "original-variant-of-user-question-2026-10-28"
    },
    {
      "id": "ineq1028-04",
      "category": "כמותי",
      "topic": "אלגברה",
      "difficulty": 2,
      "skill": "מקרה גבול ושוויון",
      "prompt": "נתון <span class=\"math-ltr\" dir=\"ltr\">y = 0</span>. מה מהבאים נכון בהכרח?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">x + y &gt; x − y</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">x + y &lt; x − y</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">x + y = x − y</span>",
        "אף תשובה אינה נכונה בהכרח"
      ],
      "correct": 2,
      "explanation": "כאשר y=0 שני הביטויים שווים ל־x ולכן הם שווים בהכרח, ללא תלות בערך x.",
      "strategy": "כשאחד הנעלמים אפס, הצב אותו תחילה; שני הביטויים עשויים להפוך לזהים.",
      "fastSteps": [
        "מציבים y=0 בשני הביטויים.",
        "מתקבל x מול x, ולכן יש שוויון."
      ],
      "whenToUse": "שאלות עם נתון על ערך אפס.",
      "trap": "אין לבחור אי־שוויון חזק כאשר הנתון מאפשר שוויון.",
      "provenance": "original-variant-of-user-question-2026-10-28"
    },
    {
      "id": "ineq1028-05",
      "category": "כמותי",
      "topic": "אלגברה",
      "difficulty": 3,
      "skill": "הבחנה בין מידע רלוונטי ללא רלוונטי",
      "prompt": "נתון <span class=\"math-ltr\" dir=\"ltr\">x &gt; 0</span>. מה מהבאים נכון בהכרח?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">x + y &gt; x − y</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">x + y &lt; x − y</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">x + y = x − y</span>",
        "אף תשובה אינה נכונה בהכרח"
      ],
      "correct": 3,
      "explanation": "גם אם x חיובי, ההפרש נשאר 2y ואינו תלוי ב־x. מכיוון ש־y יכול להיות חיובי, שלילי או אפס, אף אחד משלושת היחסים אינו מתחייב.",
      "strategy": "חסרים את הביטויים: אם הנתון מדבר על נעלם שנעלם בחיסור, הוא לא מספיק להכרעה.",
      "fastSteps": [
        "מחשבים (x+y)−(x−y)=2y; x מתבטל.",
        "הנתון x>0 אינו מגביל את y. אי אפשר לקבוע יחס יחיד."
      ],
      "whenToUse": "מלכודת של נתון שנראה חשוב אך אינו קובע את היחס.",
      "trap": "הנתון x>0 אינו מלמד ש־y>0.",
      "provenance": "original-variant-of-user-question-2026-10-28"
    },
    {
      "id": "ineq1028-06",
      "category": "כמותי",
      "topic": "אלגברה",
      "difficulty": 3,
      "skill": "הבדל בין 'לא שווים' לבין סדר",
      "prompt": "נתון <span class=\"math-ltr\" dir=\"ltr\">y ≠ 0</span>. מה מהבאים נכון בהכרח?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">x + y &gt; x − y</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">x + y &lt; x − y</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">x + y = x − y</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">x + y ≠ x − y</span>"
      ],
      "correct": 3,
      "explanation": "הפרש הביטויים הוא 2y, והוא אינו אפס לפי הנתון. לכן הם בהכרח שונים, אך אי אפשר לדעת מי מהם גדול יותר כי סימן y לא ידוע.",
      "strategy": "אי־אפס של ההפרש מבטיח אי־שוויון במובן של 'שונים', לא את כיוון האי־שוויון.",
      "fastSteps": [
        "מחשבים הפרש 2y.",
        "מהנתון y≠0 מסיקים שההפרש אינו אפס.",
        "נובע שהביטויים אינם שווים; לא נקבע מי גדול."
      ],
      "whenToUse": "כאשר אומרים שנעלם אינו אפס אך לא אומרים אם הוא חיובי או שלילי.",
      "trap": "סימן ≠ שונה מסימנים > ו־<.",
      "provenance": "original-variant-of-user-question-2026-10-28"
    },
    {
      "id": "ineq1028-07",
      "category": "כמותי",
      "topic": "אלגברה",
      "difficulty": 3,
      "skill": "אי־שוויון חלש לעומת חזק",
      "prompt": "נתון <span class=\"math-ltr\" dir=\"ltr\">y ≥ 0</span>. מה מהבאים נכון בהכרח?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">x + y ≥ x − y</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">x + y ≤ x − y</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">x + y &lt; x − y</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">x + y = x − y</span>"
      ],
      "correct": 0,
      "explanation": "ההפרש הוא 2y, והוא אי־שלילי. לכן הביטוי הראשון גדול מהשני או שווה לו. לא מתחייב שהוא גדול ממנו ממש, כי y יכול להיות אפס.",
      "strategy": "אם הנתון כולל שוויון (≥), בדוק אם גם היחס המבוקש חייב לכלול שוויון.",
      "fastSteps": [
        "מחסרים ומקבלים 2y.",
        "מהנתון y≥0 נובע 2y≥0.",
        "לכן x+y≥x−y."
      ],
      "whenToUse": "שאלות 'בהכרח' הכוללות ≥ או ≤.",
      "trap": "אין לבחור > כאשר ערך אפס אפשרי.",
      "provenance": "original-variant-of-user-question-2026-10-28"
    },
    {
      "id": "ineq1028-08",
      "category": "כמותי",
      "topic": "אלגברה",
      "difficulty": 3,
      "skill": "אי־שוויון חלש בכיוון ההפוך",
      "prompt": "נתון <span class=\"math-ltr\" dir=\"ltr\">y ≤ 0</span>. מה מהבאים נכון בהכרח?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">x + y &gt; x − y</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">x + y ≤ x − y</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">x + y = x − y</span>",
        "אף תשובה אינה נכונה בהכרח"
      ],
      "correct": 1,
      "explanation": "מכיוון שההפרש הוא 2y≤0, הביטוי הראשון קטן מהשני או שווה לו. יכול להיות שוויון כאשר y=0, אך לא תמיד.",
      "strategy": "המרת תנאי על y לתנאי על 2y שומרת על הכיוון כי מכפילים במספר חיובי.",
      "fastSteps": [
        "מחשבים (x+y)−(x−y)=2y.",
        "y≤0 ולכן 2y≤0.",
        "הביטוי הראשון אינו גדול מהשני."
      ],
      "whenToUse": "בדיקת התשובה המדויקת בין < ל־≤.",
      "trap": "אין לבחור שוויון כש־y יכול להיות גם שלילי.",
      "provenance": "original-variant-of-user-question-2026-10-28"
    },
    {
      "id": "ineq1028-09",
      "category": "כמותי",
      "topic": "אלגברה",
      "difficulty": 3,
      "skill": "ביטול נעלם אחר בהשוואה",
      "prompt": "נתון <span class=\"math-ltr\" dir=\"ltr\">x &gt; 0</span>. מה מהבאים נכון בהכרח?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">x + y &gt; y − x</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">x + y &lt; y − x</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">x + y = y − x</span>",
        "אף תשובה אינה נכונה בהכרח"
      ],
      "correct": 0,
      "explanation": "כאן ההפרש בין הביטויים הוא (x+y)−(y−x)=2x. לפי הנתון x חיובי, לכן הביטוי הראשון גדול בהכרח.",
      "strategy": "בדוק איזה נעלם נשאר לאחר החיסור; הפעם y מתבטל, לא x.",
      "fastSteps": [
        "ההפרש הוא 2x.",
        "x>0 ולכן ההפרש חיובי והביטוי הראשון גדול."
      ],
      "whenToUse": "אותו מבנה של השוואה עם שינוי סדר וסימנים.",
      "trap": "לא להעביר אוטומטית את הכלל הקודם לגבי y; יש לחשב את ההפרש מחדש.",
      "provenance": "original-variant-of-user-question-2026-10-28"
    },
    {
      "id": "ineq1028-10",
      "category": "כמותי",
      "topic": "אלגברה",
      "difficulty": 3,
      "skill": "השוואה בעזרת 2x שלילי",
      "prompt": "נתון <span class=\"math-ltr\" dir=\"ltr\">x &lt; 0</span>. מה מהבאים נכון בהכרח?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">x + y &gt; y − x</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">x + y &lt; y − x</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">x + y = y − x</span>",
        "אף תשובה אינה נכונה בהכרח"
      ],
      "correct": 1,
      "explanation": "ההפרש הוא 2x, ושלילי מפני ש־x<0. לכן x+y קטן מ־y−x ללא תלות ב־y.",
      "strategy": "מצא את ההפרש וראה אם סימנו נקבע מהנתון.",
      "fastSteps": [
        "מחשבים (x+y)−(y−x)=2x.",
        "x שלילי ולכן הראשון קטן מהשני."
      ],
      "whenToUse": "השוואת שתי צורות דומות כאשר אחד הנעלמים מתבטל.",
      "trap": "מינוס לפני x מחליף את סימנו.",
      "provenance": "original-variant-of-user-question-2026-10-28"
    },
    {
      "id": "ineq1028-11",
      "category": "כמותי",
      "topic": "אלגברה",
      "difficulty": 4,
      "skill": "שני נעלמים חיוביים ללא יחס ביניהם",
      "prompt": "נתון <span class=\"math-ltr\" dir=\"ltr\">x &gt; 0 וגם y &gt; 0</span>. מה מהבאים נכון בהכרח?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">x − y &gt; y − x</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">x − y &lt; y − x</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">x − y = y − x</span>",
        "אף תשובה אינה נכונה בהכרח"
      ],
      "correct": 3,
      "explanation": "ההפרש בין הביטויים הוא 2(x−y). למרות ששני הנעלמים חיוביים, אפשר ש־x>y, ש־x<y או ש־x=y. לכן לא מתחייב אף אחד משלושת היחסים.",
      "strategy": "חיוביות של שני נעלמים אינה אומרת מי מהם גדול יותר.",
      "fastSteps": [
        "מחסרים ומקבלים 2(x−y).",
        "מנסים x=3,y=1; x=1,y=3; x=y=2.",
        "מתקבלות כל שלוש האפשרויות, לכן אין יחס הכרחי."
      ],
      "whenToUse": "שאלות שבהן שני גדלים חיוביים אבל היחס ביניהם לא ידוע.",
      "trap": "שני מספרים חיוביים לא חייבים להיות שווים, ואין ביניהם סדר קבוע.",
      "provenance": "original-variant-of-user-question-2026-10-28"
    },
    {
      "id": "ineq1028-12",
      "category": "כמותי",
      "topic": "אלגברה",
      "difficulty": 3,
      "skill": "השוואה לאחר ביטול איבר משותף",
      "prompt": "נתון <span class=\"math-ltr\" dir=\"ltr\">y &gt; 0</span>. מה מהבאים נכון בהכרח?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">x + 2y &gt; x + y</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">x + 2y &lt; x + y</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">x + 2y = x + y</span>",
        "אף תשובה אינה נכונה בהכרח"
      ],
      "correct": 0,
      "explanation": "ההפרש הוא y, ולכן הוא חיובי לפי הנתון. מכאן ש־x+2y גדול תמיד מ־x+y.",
      "strategy": "מוחקים בחיסור את החלק המשותף; נשאר רק y.",
      "fastSteps": [
        "מחסרים: (x+2y)−(x+y)=y.",
        "y>0 ולכן הביטוי הראשון גדול."
      ],
      "whenToUse": "שני ביטויים שההבדל ביניהם הוא מספר עותקים של אותו נעלם.",
      "trap": "אין צורך לדעת מה הערך של x.",
      "provenance": "original-variant-of-user-question-2026-10-28"
    },
    {
      "id": "ineq1028-13",
      "category": "כמותי",
      "topic": "אלגברה",
      "difficulty": 3,
      "skill": "כפל במספר שלילי בהשוואת ביטויים",
      "prompt": "נתון <span class=\"math-ltr\" dir=\"ltr\">y &lt; 0</span>. מה מהבאים נכון בהכרח?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">x + 2y &gt; x + y</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">x + 2y &lt; x + y</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">x + 2y = x + y</span>",
        "אף תשובה אינה נכונה בהכרח"
      ],
      "correct": 1,
      "explanation": "ההפרש הוא y, והוא שלילי. לכן x+2y קטן מ־x+y, אף ש־2 גדול מ־1.",
      "strategy": "כשנעלם שלילי, תוספת של עוד עותק ממנו מקטינה את הביטוי.",
      "fastSteps": [
        "מחשבים (x+2y)−(x+y)=y.",
        "y<0, ולכן הראשון קטן."
      ],
      "whenToUse": "מלכודת של השוואת מקדמים כאשר הנעלם שלילי.",
      "trap": "מקדם גדול יותר אינו מבטיח ביטוי גדול יותר כשמכפילים מספר שלילי.",
      "provenance": "original-variant-of-user-question-2026-10-28"
    },
    {
      "id": "ineq1028-14",
      "category": "כמותי",
      "topic": "אלגברה",
      "difficulty": 2,
      "skill": "שימוש בשוויון בין נעלמים",
      "prompt": "נתון <span class=\"math-ltr\" dir=\"ltr\">x = y</span>. מה מהבאים נכון בהכרח?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">x + y &gt; 2x</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">x + y &lt; 2x</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">x + y = 2x</span>",
        "אף תשובה אינה נכונה בהכרח"
      ],
      "correct": 2,
      "explanation": "אם x=y אז x+y=x+x=2x. לכן הביטויים שווים בהכרח עבור כל ערך משותף של x ושל y.",
      "strategy": "כששני נעלמים שווים, החלף אחד מהם באחר כדי לזהות ביטויים זהים.",
      "fastSteps": [
        "מציבים y=x.",
        "מקבלים x+x=2x, כלומר שוויון."
      ],
      "whenToUse": "נתון של שוויון בין נעלמים.",
      "trap": "אין צורך להניח שהם חיוביים; השוויון נכון גם לערכים שליליים.",
      "provenance": "original-variant-of-user-question-2026-10-28"
    }
  ]
};
