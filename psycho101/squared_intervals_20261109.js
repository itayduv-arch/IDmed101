/* Psycho101 — question 16 (user-supplied image) and 11 original interval-squaring variants, 2026-11-09. */
window.PSYCHO101_SQUARED_INTERVALS_20261109 = {
  "quantitative": [
    {
      "id": "sqr1109-01",
      "category": "כמותי",
      "topic": "אלגברה",
      "skill": "ריבוע תחום החוצה את האפס",
      "difficulty": 2,
      "prompt": "נתון <span class=\"math-ltr\" dir=\"ltr\">−2 &lt; x &lt; 4</span>. מה הטווח המדויק של <span class=\"math-ltr\" dir=\"ltr\">x<sup>2</sup></span>?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">4 &lt; x<sup>2</sup> &lt; 16</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">x<sup>2</sup> &lt; 16</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">0 ≤ x<sup>2</sup> &lt; 16</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">0 ≤ x<sup>2</sup> ≤ 4</span>"
      ],
      "correct": 2,
      "explanation": "אפס נמצא בתחום, לכן הערך 0 של x² מתקבל בפועל. בקצה החיובי x מתקרב ל־4 בלי להגיע אליו, ולכן x² מתקרב ל־16 אך לא שווה לו. הערך −2 אינו מגביל את המקסימום כי 4 רחוק יותר מאפס.",
      "strategy": "תחילה בדוק אם אפס נמצא בתחום, אחר כך השווה את הערכים המוחלטים של הקצוות וקבע האם כל גבול כלול.",
      "fastSteps": [
        "בדוק אם x=0 מותר: כן, לכן המינימום 0 וכלול.",
        "השווה מרחקים מאפס: 4 גדול מ־2, לכן הגבול העליון 16, לא כלול."
      ],
      "whenToUse": "כאשר תחום x כולל שליליים וחיוביים.",
      "trap": "אין לרבע את שני קצות האי-שוויון ולקבל 4 < x²; ריבוע אינו פונקציה עולה על כל הישר.",
      "provenance": "user-provided-image-2026-11-09"
    },
    {
      "id": "sqr1109-02",
      "category": "כמותי",
      "topic": "אלגברה",
      "skill": "ריבוע תחום חיובי עם גבולות פתוחים",
      "difficulty": 2,
      "prompt": "נתון <span class=\"math-ltr\" dir=\"ltr\">1 &lt; x &lt; 5</span>. מה הטווח המדויק של <span class=\"math-ltr\" dir=\"ltr\">x<sup>2</sup></span>?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">1 &lt; x<sup>2</sup> &lt; 25</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">0 ≤ x<sup>2</sup> &lt; 25</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">1 ≤ x<sup>2</sup> ≤ 25</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">x<sup>2</sup> &lt; 25</span>"
      ],
      "correct": 0,
      "explanation": "כל ערכי x חיוביים, ולכן הריבוע שומר על הסדר: 1² < x² < 5². שני הקצוות אינם כלולים.",
      "strategy": "תחילה בדוק אם אפס נמצא בתחום, אחר כך השווה את הערכים המוחלטים של הקצוות וקבע האם כל גבול כלול.",
      "fastSteps": [
        "התחום חיובי בלבד, ולכן ניתן לרבע את שני הקצוות תוך שמירת הסדר.",
        "מקבלים 1 < x² < 25, ללא שוויון."
      ],
      "whenToUse": "כאשר x חיובי ובשני הקצוות יש אי-שוויון חזק.",
      "trap": "אין להכניס 0 לטווח: x לעולם אינו מתקרב לאפס בתחום הנתון.",
      "provenance": "original-practice-2026-11-09"
    },
    {
      "id": "sqr1109-03",
      "category": "כמותי",
      "topic": "אלגברה",
      "skill": "היפוך סדר בריבוע תחום שלילי",
      "difficulty": 3,
      "prompt": "נתון <span class=\"math-ltr\" dir=\"ltr\">−5 &lt; x &lt; −2</span>. מה הטווח המדויק של <span class=\"math-ltr\" dir=\"ltr\">x<sup>2</sup></span>?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">0 ≤ x<sup>2</sup> &lt; 25</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">4 &lt; x<sup>2</sup> &lt; 25</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">4 ≤ x<sup>2</sup> ≤ 25</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">4 ≤ x<sup>2</sup> &lt; 25</span>"
      ],
      "correct": 1,
      "explanation": "בתחום השלילי, המספר הקרוב יותר לאפס הוא −2 ולכן הריבוע מתקרב ל־4 מלמעלה. המספר −5 רחוק יותר מאפס ולכן הריבוע מתקרב ל־25 מלמטה. שני הקצוות פתוחים.",
      "strategy": "תחילה בדוק אם אפס נמצא בתחום, אחר כך השווה את הערכים המוחלטים של הקצוות וקבע האם כל גבול כלול.",
      "fastSteps": [
        "בדוק מרחק מאפס: בין 2 ל־5, ללא שני הקצוות.",
        "רבע מרחקים וקבל 4 < x² < 25."
      ],
      "whenToUse": "כאשר תחום x שלילי בלבד.",
      "trap": "כשהמספרים שליליים, ריבוע הופך את סדר הגודל בין הקצוות.",
      "provenance": "original-practice-2026-11-09"
    },
    {
      "id": "sqr1109-04",
      "category": "כמותי",
      "topic": "אלגברה",
      "skill": "חציית אפס וקצה שלילי רחוק יותר",
      "difficulty": 3,
      "prompt": "נתון <span class=\"math-ltr\" dir=\"ltr\">−3 &lt; x &lt; 2</span>. מה הטווח המדויק של <span class=\"math-ltr\" dir=\"ltr\">x<sup>2</sup></span>?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">0 &lt; x<sup>2</sup> &lt; 9</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">0 ≤ x<sup>2</sup> ≤ 9</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">0 ≤ x<sup>2</sup> &lt; 4</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">0 ≤ x<sup>2</sup> &lt; 9</span>"
      ],
      "correct": 3,
      "explanation": "x=0 מותר ולכן x² יכול להיות 0. הערך המוחלט של הקצה השלילי 3 גדול מהערך המוחלט של הקצה החיובי 2, ולכן הגבול העליון הוא 9, אך אינו מושג.",
      "strategy": "תחילה בדוק אם אפס נמצא בתחום, אחר כך השווה את הערכים המוחלטים של הקצוות וקבע האם כל גבול כלול.",
      "fastSteps": [
        "מינימום: x=0 נכלל, ולכן 0 ≤ x².",
        "מקסימום: המרחק המקסימלי מאפס מתקרב ל־3, לכן x² < 9."
      ],
      "whenToUse": "כאשר התחום כולל אפס והקצה השלילי רחוק יותר מאפס.",
      "trap": "המקסימום יכול להיקבע דווקא מהקצה השלילי של התחום.",
      "provenance": "original-practice-2026-11-09"
    },
    {
      "id": "sqr1109-05",
      "category": "כמותי",
      "topic": "אלגברה",
      "skill": "תחום חוצה אפס עם קצוות סגורים",
      "difficulty": 3,
      "prompt": "נתון <span class=\"math-ltr\" dir=\"ltr\">−4 ≤ x ≤ 1</span>. מה הטווח המדויק של <span class=\"math-ltr\" dir=\"ltr\">x<sup>2</sup></span>?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">0 ≤ x<sup>2</sup> ≤ 16</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">0 ≤ x<sup>2</sup> &lt; 16</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">1 ≤ x<sup>2</sup> ≤ 16</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">0 ≤ x<sup>2</sup> ≤ 1</span>"
      ],
      "correct": 0,
      "explanation": "x=0 נמצא בתחום ולכן המינימום 0. גם x=−4 נמצא בתחום, ולכן מתקבל בפועל x²=16. הקצה העליון כלול.",
      "strategy": "תחילה בדוק אם אפס נמצא בתחום, אחר כך השווה את הערכים המוחלטים של הקצוות וקבע האם כל גבול כלול.",
      "fastSteps": [
        "בדוק אפס: 0 נמצא בתחום ולכן 0 כלול בטווח הריבוע.",
        "−4 כלול והוא בעל הערך המוחלט הגדול ביותר: 16 כלול."
      ],
      "whenToUse": "כאשר הקצה הקובע את המקסימום כלול בתחום.",
      "trap": "לא כל קצה של תחום x² פתוח: יש להבחין בין < ל־≤ במקור.",
      "provenance": "original-practice-2026-11-09"
    },
    {
      "id": "sqr1109-06",
      "category": "כמותי",
      "topic": "אלגברה",
      "skill": "תחום מעורב - קצה אחד פתוח ואחד סגור",
      "difficulty": 3,
      "prompt": "נתון <span class=\"math-ltr\" dir=\"ltr\">−4 &lt; x ≤ 1</span>. מה הטווח המדויק של <span class=\"math-ltr\" dir=\"ltr\">x<sup>2</sup></span>?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">0 ≤ x<sup>2</sup> ≤ 16</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">0 ≤ x<sup>2</sup> &lt; 16</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">1 ≤ x<sup>2</sup> &lt; 16</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">0 &lt; x<sup>2</sup> &lt; 16</span>"
      ],
      "correct": 1,
      "explanation": "התחום כולל x=0, כך ש־x²=0 מותר. המספר −4 אינו כלול ולכן הערך 16 אינו מתקבל; הריבוע רק מתקרב אליו מלמטה.",
      "strategy": "תחילה בדוק אם אפס נמצא בתחום, אחר כך השווה את הערכים המוחלטים של הקצוות וקבע האם כל גבול כלול.",
      "fastSteps": [
        "x=0 בתחום, לכן טווח הריבוע מתחיל ב־0 כולל.",
        "−4 הוא הקצה הרחוק מאפס אך אינו כלול, לכן x² < 16."
      ],
      "whenToUse": "כאשר גבולות התחום הם מסוגים שונים.",
      "trap": "סגירות הקצה x=1 אינה הופכת את 16 לכלול; יש לבדוק איזה קצה יוצר את המקסימום.",
      "provenance": "original-practice-2026-11-09"
    },
    {
      "id": "sqr1109-07",
      "category": "כמותי",
      "topic": "אלגברה",
      "skill": "טווח ריבוע של תחום סגור",
      "difficulty": 2,
      "prompt": "נתון <span class=\"math-ltr\" dir=\"ltr\">−2 ≤ x ≤ 3</span>. מה הטווח המדויק של <span class=\"math-ltr\" dir=\"ltr\">x<sup>2</sup></span>?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">0 &lt; x<sup>2</sup> ≤ 9</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">0 ≤ x<sup>2</sup> &lt; 9</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">0 ≤ x<sup>2</sup> ≤ 9</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">0 ≤ x<sup>2</sup> ≤ 4</span>"
      ],
      "correct": 2,
      "explanation": "אפס נמצא בתחום ויכול לתת x²=0. הקצה x=3 כלול ונותן x²=9. כך כל הערכים שבין 0 ל־9, כולל הקצוות, מתקבלים.",
      "strategy": "תחילה בדוק אם אפס נמצא בתחום, אחר כך השווה את הערכים המוחלטים של הקצוות וקבע האם כל גבול כלול.",
      "fastSteps": [
        "קח x=0 לקבלת המינימום 0.",
        "הקצה הרחוק ביותר מאפס הוא 3, והוא כלול: 3²=9."
      ],
      "whenToUse": "כאשר שני הקצוות כלולים והתחום חוצה את האפס.",
      "trap": "אין לבחור 4 כמקסימום רק כי −2 הוא הקצה השמאלי.",
      "provenance": "original-practice-2026-11-09"
    },
    {
      "id": "sqr1109-08",
      "category": "כמותי",
      "topic": "אלגברה",
      "skill": "תחום שלילי שאינו כולל אפס",
      "difficulty": 3,
      "prompt": "נתון <span class=\"math-ltr\" dir=\"ltr\">−3 &lt; x &lt; −1</span>. מה הטווח המדויק של <span class=\"math-ltr\" dir=\"ltr\">x<sup>2</sup></span>?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">1 ≤ x<sup>2</sup> &lt; 9</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">0 ≤ x<sup>2</sup> &lt; 9</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">1 &lt; x<sup>2</sup> ≤ 9</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">1 &lt; x<sup>2</sup> &lt; 9</span>"
      ],
      "correct": 3,
      "explanation": "כל x שלילי וערכו המוחלט בין 1 ל־3, ללא הקצוות. לכן הריבוע גדול מ־1 וקטן מ־9. אין אפשרות לקבל 0.",
      "strategy": "תחילה בדוק אם אפס נמצא בתחום, אחר כך השווה את הערכים המוחלטים של הקצוות וקבע האם כל גבול כלול.",
      "fastSteps": [
        "המר את התחום למרחקים מאפס: 1 < |x| < 3.",
        "רבע וקבל 1 < x² < 9."
      ],
      "whenToUse": "כאשר התחום שלילי וכולו רחוק מאפס.",
      "trap": "המספר 0 אינו תמיד המינימום של x²; הוא חייב להיות בתחום או גבול שאפשר להתקרב אליו.",
      "provenance": "original-practice-2026-11-09"
    },
    {
      "id": "sqr1109-09",
      "category": "כמותי",
      "topic": "אלגברה",
      "skill": "גבול אפס שאינו כלול",
      "difficulty": 2,
      "prompt": "נתון <span class=\"math-ltr\" dir=\"ltr\">0 &lt; x &lt; 6</span>. מה הטווח המדויק של <span class=\"math-ltr\" dir=\"ltr\">x<sup>2</sup></span>?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">0 &lt; x<sup>2</sup> &lt; 36</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">0 ≤ x<sup>2</sup> &lt; 36</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">0 ≤ x<sup>2</sup> ≤ 36</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">0 &lt; x<sup>2</sup> ≤ 36</span>"
      ],
      "correct": 0,
      "explanation": "x חיובי ממש, ולכן x² גדול ממש מ־0, גם אם ניתן להתקרב לאפס ככל שרוצים. גם 6 אינו כלול ולכן 36 אינו מתקבל.",
      "strategy": "תחילה בדוק אם אפס נמצא בתחום, אחר כך השווה את הערכים המוחלטים של הקצוות וקבע האם כל גבול כלול.",
      "fastSteps": [
        "x=0 אסור, אף שאפשר להתקרב אליו: x² > 0.",
        "x=6 אסור, לכן x² < 36."
      ],
      "whenToUse": "כאשר 0 הוא קצה פתוח של תחום חיובי.",
      "trap": "גבול שניתן להתקרב אליו אינו בהכרח ערך מותר; אין לכתוב 0 ≤ x² במקרה זה.",
      "provenance": "original-practice-2026-11-09"
    },
    {
      "id": "sqr1109-10",
      "category": "כמותי",
      "topic": "אלגברה",
      "skill": "קצוות מעורבים בתחום שלילי",
      "difficulty": 4,
      "prompt": "נתון <span class=\"math-ltr\" dir=\"ltr\">−4 ≤ x &lt; −2</span>. מה הטווח המדויק של <span class=\"math-ltr\" dir=\"ltr\">x<sup>2</sup></span>?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">4 ≤ x<sup>2</sup> ≤ 16</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">4 &lt; x<sup>2</sup> ≤ 16</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">4 &lt; x<sup>2</sup> &lt; 16</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">4 ≤ x<sup>2</sup> &lt; 16</span>"
      ],
      "correct": 1,
      "explanation": "הערך −4 כלול, לכן הריבוע יכול להיות 16. הערך −2 אינו כלול, לכן הריבוע יכול להתקרב ל־4 אך אינו שווה לו. לכן 4 < x² ≤ 16.",
      "strategy": "תחילה בדוק אם אפס נמצא בתחום, אחר כך השווה את הערכים המוחלטים של הקצוות וקבע האם כל גבול כלול.",
      "fastSteps": [
        "הקצה הקרוב לאפס הוא −2 והוא פתוח: x² > 4.",
        "הקצה הרחוק מאפס הוא −4 והוא סגור: x² ≤ 16."
      ],
      "whenToUse": "כאשר x שלילי ויש קצה פתוח וקצה סגור.",
      "trap": "בתחום שלילי כיוון הסגירות של הגבולות מתחלף במעבר לגבולות x².",
      "provenance": "original-practice-2026-11-09"
    },
    {
      "id": "sqr1109-11",
      "category": "כמותי",
      "topic": "אלגברה",
      "skill": "אפס בפנים וקצה עליון סגור",
      "difficulty": 3,
      "prompt": "נתון <span class=\"math-ltr\" dir=\"ltr\">−1 &lt; x ≤ 4</span>. מה הטווח המדויק של <span class=\"math-ltr\" dir=\"ltr\">x<sup>2</sup></span>?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">1 ≤ x<sup>2</sup> ≤ 16</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">0 ≤ x<sup>2</sup> &lt; 16</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">0 ≤ x<sup>2</sup> ≤ 16</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">0 &lt; x<sup>2</sup> ≤ 16</span>"
      ],
      "correct": 2,
      "explanation": "x=0 נמצא בין −1 ל־4 ולכן מתקבל x²=0. x=4 מותר ולכן מתקבל x²=16. שני קצות הטווח כלולים.",
      "strategy": "תחילה בדוק אם אפס נמצא בתחום, אחר כך השווה את הערכים המוחלטים של הקצוות וקבע האם כל גבול כלול.",
      "fastSteps": [
        "אפס נמצא בתוך התחום ולא רק בקצה, לכן 0 כלול.",
        "x=4 הוא בעל הערך המוחלט הגדול ביותר וכלול, לכן 16 כלול."
      ],
      "whenToUse": "כאשר הקצה שאינו קובע את הטווח פתוח.",
      "trap": "הקצה השמאלי פתוח, אבל הוא אינו קובע את קצות טווח הריבוע.",
      "provenance": "original-practice-2026-11-09"
    },
    {
      "id": "sqr1109-12",
      "category": "כמותי",
      "topic": "אלגברה",
      "skill": "תחום חיובי - קצה תחתון סגור",
      "difficulty": 2,
      "prompt": "נתון <span class=\"math-ltr\" dir=\"ltr\">2 ≤ x &lt; 5</span>. מה הטווח המדויק של <span class=\"math-ltr\" dir=\"ltr\">x<sup>2</sup></span>?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">4 &lt; x<sup>2</sup> &lt; 25</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">4 ≤ x<sup>2</sup> ≤ 25</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">0 ≤ x<sup>2</sup> &lt; 25</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">4 ≤ x<sup>2</sup> &lt; 25</span>"
      ],
      "correct": 3,
      "explanation": "כל x חיובי ולכן אפשר לרבע תוך שמירת הסדר. x=2 מותר ומתקבל x²=4, בעוד x=5 אסור ולכן 25 אינו מתקבל.",
      "strategy": "תחילה בדוק אם אפס נמצא בתחום, אחר כך השווה את הערכים המוחלטים של הקצוות וקבע האם כל גבול כלול.",
      "fastSteps": [
        "בתחום חיובי הריבוע שומר על סדר האי-שוויונות.",
        "2 כלול ולכן 4 כלול; 5 אינו כלול ולכן 25 אינו כלול."
      ],
      "whenToUse": "כאשר התחום חיובי וקצה אחד כלול.",
      "trap": "גם כשמותר לרבע יש לבדוק בנפרד את סימני השוויון של שני הקצוות.",
      "provenance": "original-practice-2026-11-09"
    }
  ]
};
