/* Psycho101: 1 user-supplied radical question and 11 independently checked variants, 2026-11-02. */
window.PSYCHO101_RADICALS_20261102 = {
  "quantitative": [
    {
      "id": "rad1102-01",
      "category": "כמותי",
      "topic": "חזקות ושורשים",
      "skill": "חיבור שורשים זהים",
      "difficulty": 2,
      "prompt": "למה שווה הביטוי <span class=\"math-ltr\" dir=\"ltr\">√18 + √18 = ?</span>",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">6</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">9</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">6√2</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">18</span>"
      ],
      "correct": 2,
      "explanation": "שני שורשים זהים הם פעמיים אותו מספר: √18 + √18 = 2√18. מכיוון ש־18 = 9×2, מתקבל 2×3√2 = 6√2.",
      "strategy": "אם מופיע אותו שורש פעמיים, כופלים אותו ב־2 ורק לאחר מכן מפשטים.",
      "fastSteps": [
        "זהה שני איברים זהים: √18 + √18 = 2√18.",
        "פרק 18 ל־9×2, והוצא 3 מהשורש: 6√2."
      ],
      "whenToUse": "כשמופיעים שני שורשים זהים או שני איברים דומים.",
      "trap": "אין לחבר את המספרים שבתוך השורש: √18 + √18 אינו √36 ואינו 18.",
      "provenance": "user-provided-image-2026-11-02"
    },
    {
      "id": "rad1102-02",
      "category": "כמותי",
      "topic": "חזקות ושורשים",
      "skill": "חיבור שורשים זהים",
      "difficulty": 2,
      "prompt": "למה שווה הביטוי <span class=\"math-ltr\" dir=\"ltr\">√8 + √8 = ?</span>",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">4√2</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">4</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">8</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">2√2</span>"
      ],
      "correct": 0,
      "explanation": "√8 = 2√2, ולכן √8 + √8 = 2√2 + 2√2 = 4√2.",
      "strategy": "שני איברים זהים - הכפל ב־2; הוצא ריבוע מושלם מהשורש.",
      "fastSteps": [
        "הפוך את הסכום ל־2√8.",
        "√8 = 2√2, ולכן התוצאה 4√2."
      ],
      "whenToUse": "חיבור של שני שורשים זהים שניתנים לפישוט.",
      "trap": "2√2 הוא ערכו של √8 בודד, לא של סכום שני שורשים.",
      "provenance": "original-practice-2026-11-02"
    },
    {
      "id": "rad1102-03",
      "category": "כמותי",
      "topic": "חזקות ושורשים",
      "skill": "שורשים שונים המתפשטים לאותו בסיס",
      "difficulty": 3,
      "prompt": "למה שווה הביטוי <span class=\"math-ltr\" dir=\"ltr\">√12 + √27 = ?</span>",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">√39</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">5√3</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">7√3</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">6√3</span>"
      ],
      "correct": 1,
      "explanation": "√12 = 2√3 ו־√27 = 3√3. לכן 2√3 + 3√3 = 5√3.",
      "strategy": "פרק כל מספר למכפלה הכוללת ריבוע מושלם; לאחר מכן חבר מקדמים של אותו שורש.",
      "fastSteps": [
        "√12 = 2√3; √27 = 3√3.",
        "חבר את 2 ו־3 ושמור את √3: התוצאה 5√3."
      ],
      "whenToUse": "כשמחברים שורשים עם מספרים שונים שניתן להפוך לשורשים דומים.",
      "trap": "√12 + √27 אינו √39. כלל חיבור בתוך השורש אינו קיים.",
      "provenance": "original-practice-2026-11-02"
    },
    {
      "id": "rad1102-04",
      "category": "כמותי",
      "topic": "חזקות ושורשים",
      "skill": "חיסור שורשים דומים",
      "difficulty": 3,
      "prompt": "למה שווה הביטוי <span class=\"math-ltr\" dir=\"ltr\">√50 − √8 = ?</span>",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">√42</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">7√2</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">2√2</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">3√2</span>"
      ],
      "correct": 3,
      "explanation": "√50 = 5√2 ו־√8 = 2√2. מחסרים רק את המקדמים: (5−2)√2 = 3√2.",
      "strategy": "פשט קודם כל שורש ואז חסר את המקדמים.",
      "fastSteps": [
        "הוצא ריבועים מושלמים: √50 = 5√2 ו־√8 = 2√2.",
        "חסר 5−2 וקבל 3√2."
      ],
      "whenToUse": "חיסור בין שורשים שניתנים לפישוט לאותו שורש.",
      "trap": "√42 מתקבל מחיסור שגוי בתוך השורש; 7√2 מתקבל מחיבור במקום חיסור.",
      "provenance": "original-practice-2026-11-02"
    },
    {
      "id": "rad1102-05",
      "category": "כמותי",
      "topic": "חזקות ושורשים",
      "skill": "מקדמים וחיבור שורשים",
      "difficulty": 3,
      "prompt": "למה שווה הביטוי <span class=\"math-ltr\" dir=\"ltr\">2√18 + √8 = ?</span>",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">8√2</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">√26</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">10√2</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">8</span>"
      ],
      "correct": 0,
      "explanation": "2√18 = 2×3√2 = 6√2, וגם √8 = 2√2. לכן הסכום הוא 8√2.",
      "strategy": "פשט קודם את השורשים, והקפד להכפיל את המקדמים שמחוץ לשורש.",
      "fastSteps": [
        "2√18 = 6√2; √8 = 2√2.",
        "חבר 6+2 לקבלת 8√2."
      ],
      "whenToUse": "כאשר לצד השורשים מופיעים מקדמים.",
      "trap": "לא מחברים את 18 ו־8 בתוך השורש; אין להתעלם מהמקדם 2.",
      "provenance": "original-practice-2026-11-02"
    },
    {
      "id": "rad1102-06",
      "category": "כמותי",
      "topic": "חזקות ושורשים",
      "skill": "הוצאת ריבועים מושלמים",
      "difficulty": 3,
      "prompt": "למה שווה הביטוי <span class=\"math-ltr\" dir=\"ltr\">√45 + √20 = ?</span>",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">√65</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">5√5</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">6√5</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">5√10</span>"
      ],
      "correct": 1,
      "explanation": "√45 = 3√5 ו־√20 = 2√5. שני השורשים דומים, ולכן 3√5 + 2√5 = 5√5.",
      "strategy": "חפש ריבוע מושלם בכל מספר לפני שאתה מנסה לחבר.",
      "fastSteps": [
        "45 = 9×5 ולכן √45 = 3√5.",
        "20 = 4×5 ולכן √20 = 2√5; התוצאה 5√5."
      ],
      "whenToUse": "חיבור שורשים שנראים שונים אך חולקים אותו גורם לאחר פישוט.",
      "trap": "√65 הוא חיבור לא חוקי של הביטויים בתוך שורש אחד.",
      "provenance": "original-practice-2026-11-02"
    },
    {
      "id": "rad1102-07",
      "category": "כמותי",
      "topic": "חזקות ושורשים",
      "skill": "כפל שורשים",
      "difficulty": 3,
      "prompt": "למה שווה הביטוי <span class=\"math-ltr\" dir=\"ltr\">√18 × √8 = ?</span>",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">6</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">2√26</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">12</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">4√3</span>"
      ],
      "correct": 2,
      "explanation": "בכפל, בשונה מחיבור, מותר לאחד שורשים: √18 × √8 = √144 = 12.",
      "strategy": "בכפל שני שורשים חיוביים כפל תחילה את המספרים שמתחת לשורש; לפעמים מתקבל ריבוע מושלם.",
      "fastSteps": [
        "חשב 18×8 = 144.",
        "√144 = 12."
      ],
      "whenToUse": "כפל של שורשים ריבועיים לא שליליים.",
      "trap": "בחיבור אסור לחבר את המספרים שבתוך השורש, אבל בכפל מותר להכפיל אותם - אל תערבב בין הכללים.",
      "provenance": "original-practice-2026-11-02"
    },
    {
      "id": "rad1102-08",
      "category": "כמותי",
      "topic": "חזקות ושורשים",
      "skill": "מקדמים ושורשים",
      "difficulty": 3,
      "prompt": "למה שווה הביטוי <span class=\"math-ltr\" dir=\"ltr\">3√2 + 2√8 = ?</span>",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">5√10</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">5√2</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">11√2</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">7√2</span>"
      ],
      "correct": 3,
      "explanation": "√8 = 2√2, ולכן 2√8 = 4√2. כעת 3√2 + 4√2 = 7√2.",
      "strategy": "פשט את השורש המסובך ואז התייחס למקדמים כמו למספרים רגילים.",
      "fastSteps": [
        "2√8 = 2×2√2 = 4√2.",
        "3√2 + 4√2 = 7√2."
      ],
      "whenToUse": "חיבור שורשים דומים עם מקדמים נפרדים.",
      "trap": "אין לחבר 3 ו־2 לפני פישוט √8; 2√8 אינו 2√2.",
      "provenance": "original-practice-2026-11-02"
    },
    {
      "id": "rad1102-09",
      "category": "כמותי",
      "topic": "חזקות ושורשים",
      "skill": "חילוק שורשים",
      "difficulty": 3,
      "prompt": "למה שווה הביטוי <span class=\"math-ltr\" dir=\"ltr\">√48 ÷ √3 = ?</span>",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">4</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">16</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">√45</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">4√3</span>"
      ],
      "correct": 0,
      "explanation": "√48 ÷ √3 = √(48÷3) = √16 = 4, כי המספרים שמתחת לשורש לא שליליים והמכנה אינו אפס.",
      "strategy": "כאשר שני שורשים מחולקים, בדוק אם חילוק המספרים שבתוכם נותן ריבוע מושלם.",
      "fastSteps": [
        "חשב 48÷3 = 16 בתוך שורש אחד.",
        "√16 = 4."
      ],
      "whenToUse": "בחילוק שורשים עם מכנה שאינו אפס.",
      "trap": "16 הוא המספר בתוך השורש, לא התוצאה; אין לחסר 48−3.",
      "provenance": "original-practice-2026-11-02"
    },
    {
      "id": "rad1102-10",
      "category": "כמותי",
      "topic": "חזקות ושורשים",
      "skill": "חיסור שורשים דומים",
      "difficulty": 3,
      "prompt": "למה שווה הביטוי <span class=\"math-ltr\" dir=\"ltr\">√27 − √12 = ?</span>",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">√15</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">√3</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">√39</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">5√3</span>"
      ],
      "correct": 1,
      "explanation": "√27 = 3√3 ו־√12 = 2√3. לכן 3√3 − 2√3 = √3.",
      "strategy": "כאשר מקדמי השורשים שונים ביחידה, התוצאה היא שורש אחד.",
      "fastSteps": [
        "פשט: √27 = 3√3, √12 = 2√3.",
        "3−2 = 1, ולכן נשאר √3."
      ],
      "whenToUse": "חיסור של שורשים לאחר פירוק לריבועים מושלמים.",
      "trap": "√15 שגוי מפני שאי אפשר לחסר את המספרים שבתוך השורש.",
      "provenance": "original-practice-2026-11-02"
    },
    {
      "id": "rad1102-11",
      "category": "כמותי",
      "topic": "חזקות ושורשים",
      "skill": "סכום כמה שורשים דומים",
      "difficulty": 4,
      "prompt": "למה שווה הביטוי <span class=\"math-ltr\" dir=\"ltr\">√8 + √18 + √32 = ?</span>",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">9</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">√58</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">9√2</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">29√2</span>"
      ],
      "correct": 2,
      "explanation": "√8 = 2√2, √18 = 3√2, √32 = 4√2. לכן (2+3+4)√2 = 9√2.",
      "strategy": "פשט את כל השורשים לאותו בסיס; רק אז חבר את המקדמים.",
      "fastSteps": [
        "כתוב את שלושת השורשים כ־2√2, 3√2, 4√2.",
        "חבר את המקדמים 2+3+4 = 9."
      ],
      "whenToUse": "סכום של שלושה שורשים או יותר עם גורם משותף.",
      "trap": "√58 מתקבל מחיבור שגוי בתוך השורש; 9 הוא סכום המקדמים בלבד.",
      "provenance": "original-practice-2026-11-02"
    },
    {
      "id": "rad1102-12",
      "category": "כמותי",
      "topic": "חזקות ושורשים",
      "skill": "הפחתת שורשים עם מקדם",
      "difficulty": 4,
      "prompt": "למה שווה הביטוי <span class=\"math-ltr\" dir=\"ltr\">√72 − 2√8 = ?</span>",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">4√2</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">8</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">6√2</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">2√2</span>"
      ],
      "correct": 3,
      "explanation": "√72 = 6√2, ו־2√8 = 2×2√2 = 4√2. לכן 6√2 − 4√2 = 2√2.",
      "strategy": "פשט כל שורש בנפרד, הכפל במקדמים החיצוניים ואז בצע חיסור.",
      "fastSteps": [
        "√72 = 6√2; 2√8 = 4√2.",
        "6√2−4√2 = 2√2."
      ],
      "whenToUse": "כאשר יש חיסור שורשים ובחלק מהאיברים מקדם חיצוני.",
      "trap": "אסור להתעלם מהמקדם 2 לפני √8, וגם אין לחסר את המספרים שמתחת לשורשים.",
      "provenance": "original-practice-2026-11-02"
    }
  ]
};
