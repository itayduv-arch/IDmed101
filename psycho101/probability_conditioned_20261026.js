/* Psycho101: 1 user-supplied conditional probability question and 12 independently verified original variants, 2026-10-26. Every answer verified by exhaustive enumeration. */
window.PSYCHO101_PROBABILITY_20261026 = {
  "quantitative": [
    {
      "id": "prob1026-01",
      "category": "כמותי",
      "topic": "הסתברות",
      "difficulty": 3,
      "skill": "הסתברות מותנית — סימטריה בין הטלות",
      "prompt": "גיא הטיל מטבע 4 פעמים. ידוע שיצא לו 3 פעמים עץ. מה הסיכוי שבהטלה השלישית יצא עץ?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>1</span><span>2</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>2</span><span>3</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>3</span><span>4</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>5</span><span>8</span></span></span>"
      ],
      "correct": 2,
      "explanation": "ידוע שבדיוק 3 מתוך 4 ההטלות הסתיימו בעץ, ולכן בדיוק הטלה אחת הסתיימה בפלי. ארבעת המקומות האפשריים לפלי — הטלה ראשונה, שנייה, שלישית או רביעית — שווי הסתברות. בשלושה מארבעת המקרים ההטלה השלישית היא עץ, ולכן ההסתברות היא 3/4.",
      "strategy": "כשידוע שבדיוק k מתוך n ניסיונות זהים הצליחו, הסיכוי שניסיון מסוים הוא אחד המצליחים הוא k/n. אין צורך למנות את כל רצפי התוצאות.",
      "fastSteps": [
        "מסמנים את ההטלה היחידה שבה יצא פלי; היא יכולה להתרחש באחד מארבעה מקומות.",
        "אם הפלי אינו במקום השלישי (3 מתוך 4 מקומות), בהטלה השלישית יצא עץ. התשובה: 3/4."
      ],
      "whenToUse": "כאשר נתון מספר כולל של תוצאות מסוג מסוים בניסיונות עצמאיים ושקולים, ונשאלים על מקום מוגדר בסדרה.",
      "trap": "לא לבחור 1/2: ההסתברות הרגילה לעץ בהטלה יחידה אינה מתאימה אחרי שנודע שבשלוש מתוך ארבע ההטלות כבר התקבל עץ.",
      "provenance": "user-provided-question-2026-10-26"
    },
    {
      "id": "prob1026-02",
      "category": "כמותי",
      "topic": "הסתברות",
      "difficulty": 2,
      "skill": "יחס הצלחות למספר הטלות",
      "prompt": "דנה הטילה מטבע הוגן 5 פעמים. ידוע שבדיוק פעמיים יצא עץ. מה ההסתברות שבהטלה הרביעית יצא עץ?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>1</span><span>5</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>2</span><span>5</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>3</span><span>5</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>1</span><span>2</span></span></span>"
      ],
      "correct": 1,
      "explanation": "מבין 5 ההטלות בדיוק 2 הן עץ. כל מיקום שקול לאחר, ולכן הסיכוי שמיקום מסוים (הרביעי) הוא אחד משני מיקומי העץ הוא 2/5.",
      "strategy": "מיקום אחד מתוך n, וידוע בדיוק k הצלחות? הסיכוי הוא k/n.",
      "fastSteps": [
        "יש בדיוק שני מיקומי עץ מתוך חמישה.",
        "בכל מיקום, כולל הרביעי, הסיכוי לעץ הוא 2/5."
      ],
      "whenToUse": "בהסתברות מותנית, כשנתון בדיוק כמה הצלחות התקבלו ומבוקש הסדר או המיקום של תוצאה.",
      "trap": "1/2 היא הסתברות לפני התנאי. 1/5 מתייחסת בטעות רק למיקום עץ אחד.",
      "provenance": "original-variant-of-user-question-2026-10-26"
    },
    {
      "id": "prob1026-03",
      "category": "כמותי",
      "topic": "הסתברות",
      "difficulty": 2,
      "skill": "מאורע משלים וסימטריה",
      "prompt": "אלון הטיל מטבע הוגן 6 פעמים. ידוע שבדיוק פעם אחת יצא פלי. מה ההסתברות שבהטלה השנייה יצא עץ?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>1</span><span>6</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>1</span><span>2</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>2</span><span>3</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>5</span><span>6</span></span></span>"
      ],
      "correct": 3,
      "explanation": "רק אחת משש ההטלות הייתה פלי. הסיכוי שהפלי היחיד הופיע דווקא בהטלה השנייה הוא 1/6. לכן ההסתברות שבהטלה זו יצא עץ היא 5/6.",
      "strategy": "כאשר ידוע שיש כישלון יחיד, קל יותר לחשב את הסיכוי שהוא אינו במיקום המבוקש.",
      "fastSteps": [
        "יש מיקום אחד של פלי מתוך שישה מקומות שווי הסתברות.",
        "בהטלה השנייה יצא עץ אם הפלי נמצא באחד מחמשת המקומות האחרים: 5/6."
      ],
      "whenToUse": "בהסתברות מותנית, כשנתון בדיוק כמה הצלחות התקבלו ומבוקש הסדר או המיקום של תוצאה.",
      "trap": "1/6 הוא הסיכוי לפלי בהטלה השנייה, ולא לעץ.",
      "provenance": "original-variant-of-user-question-2026-10-26"
    },
    {
      "id": "prob1026-04",
      "category": "כמותי",
      "topic": "הסתברות",
      "difficulty": 3,
      "skill": "החלפת סוג התוצאה הנדרש",
      "prompt": "מטילים מטבע הוגן 7 פעמים. ידוע שבדיוק 4 הטלות הסתיימו בעץ. מה ההסתברות שבהטלה החמישית יצא פלי?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>3</span><span>7</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>1</span><span>2</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>4</span><span>7</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>2</span><span>7</span></span></span>"
      ],
      "correct": 0,
      "explanation": "אם 4 הטלות היו עץ, 3 היו פלי. בגלל הסימטריה בין שבעת המקומות, הסיכוי שההטלה החמישית היא אחת משלוש הטלות הפלי הוא 3/7.",
      "strategy": "לפני היחס, ודא שמונה ההצלחות תואם דווקא את התוצאה המבוקשת.",
      "fastSteps": [
        "מחשבים פלי: 7 פחות 4 שווה 3.",
        "יש 3 מקומות של פלי מתוך 7, ולכן 3/7."
      ],
      "whenToUse": "בהסתברות מותנית, כשנתון בדיוק כמה הצלחות התקבלו ומבוקש הסדר או המיקום של תוצאה.",
      "trap": "4/7 מתאים להסתברות לעץ; כאן ביקשו פלי.",
      "provenance": "original-variant-of-user-question-2026-10-26"
    },
    {
      "id": "prob1026-05",
      "category": "כמותי",
      "topic": "הסתברות",
      "difficulty": 4,
      "skill": "שני מיקומים מסוימים",
      "prompt": "מטילים מטבע הוגן 4 פעמים. ידוע שבדיוק פעמיים יצא עץ. מה ההסתברות שגם בהטלה הראשונה וגם בהטלה הרביעית יצא עץ?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>1</span><span>4</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>1</span><span>3</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>1</span><span>2</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>1</span><span>6</span></span></span>"
      ],
      "correct": 3,
      "explanation": "יש 6 דרכים שוות הסתברות למקם שתי תוצאות עץ בארבע הטלות. רק דרך אחת כוללת עץ גם בראשונה וגם ברביעית, ולכן ההסתברות היא 1/6. לחלופין: (2/4)×(1/3)=1/6.",
      "strategy": "לשני מיקומים מסוימים משתמשים ביחס משתנה: תחילה k/n, ואז (k−1)/(n−1).",
      "fastSteps": [
        "להטלה הראשונה: 2/4 סיכוי לעץ.",
        "אחריה נשאר מקום עץ אחד מתוך 3: 1/3. מכפילים ומקבלים 1/6."
      ],
      "whenToUse": "בהסתברות מותנית, כשנתון בדיוק כמה הצלחות התקבלו ומבוקש הסדר או המיקום של תוצאה.",
      "trap": "אין לכפול 1/2×1/2: אחרי קביעת הטלה אחת משתנה מספר המקומות שנותרו.",
      "provenance": "original-variant-of-user-question-2026-10-26"
    },
    {
      "id": "prob1026-06",
      "category": "כמותי",
      "topic": "הסתברות",
      "difficulty": 4,
      "skill": "צירוף שני מקומות ידועים",
      "prompt": "ליאור הטיל מטבע הוגן 5 פעמים. ידוע שבדיוק 3 הטלות הסתיימו בעץ. מה ההסתברות שגם הראשונה וגם השנייה הסתיימו בעץ?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>1</span><span>5</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>1</span><span>4</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>3</span><span>10</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>3</span><span>5</span></span></span>"
      ],
      "correct": 2,
      "explanation": "ההסתברות לעץ בראשונה היא 3/5. אם יצא עץ בראשונה, מבין ארבע ההטלות הנותרות בדיוק שתיים הן עץ, ולכן הסיכוי לעץ בשנייה הוא 2/4. מכפילים: (3/5)×(2/4)=3/10.",
      "strategy": "אחרי שמיקום אחד תפס עץ, יש עץ אחד פחות ומקום אחד פחות.",
      "fastSteps": [
        "ראשונה עץ: 3/5.",
        "בהינתן זאת, שנייה עץ: 2/4. מכפילים: 3/10."
      ],
      "whenToUse": "בהסתברות מותנית, כשנתון בדיוק כמה הצלחות התקבלו ומבוקש הסדר או המיקום של תוצאה.",
      "trap": "3/5 הוא הסיכוי לעץ בהטלה יחידה, ולא בשתי הטלות מוגדרות יחד.",
      "provenance": "original-variant-of-user-question-2026-10-26"
    },
    {
      "id": "prob1026-07",
      "category": "כמותי",
      "topic": "הסתברות",
      "difficulty": 3,
      "skill": "מיקום התוצאה החריגה",
      "prompt": "מטילים מטבע הוגן 4 פעמים. ידוע שבדיוק 3 פעמים יצא עץ. מה ההסתברות שהתוצאות בשתי ההטלות הראשונות היו שונות זו מזו?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>1</span><span>2</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>1</span><span>4</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>3</span><span>4</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>2</span><span>3</span></span></span>"
      ],
      "correct": 0,
      "explanation": "יש בדיוק פלי אחד. שתי ההטלות הראשונות שונות זו מזו בדיוק כאשר הפלי היחיד נמצא בראשונה או בשנייה. אלו 2 מתוך 4 מקומות שווי הסתברות, כלומר 1/2.",
      "strategy": "כשיש תוצאה חריגה אחת בלבד, ספור באילו מקומות היא חייבת להופיע כדי שהתנאי יתקיים.",
      "fastSteps": [
        "ממקמים את הפלי היחיד באחד מארבעה מקומות.",
        "שוני בין הראשונה לשנייה דורש שפלי יהיה באחת מהן: 2/4=1/2."
      ],
      "whenToUse": "בהסתברות מותנית, כשנתון בדיוק כמה הצלחות התקבלו ומבוקש הסדר או המיקום של תוצאה.",
      "trap": "3/4 מתייחס לעץ בהטלה מסוימת, לא לשאלה על שונות התוצאות.",
      "provenance": "original-variant-of-user-question-2026-10-26"
    },
    {
      "id": "prob1026-08",
      "category": "כמותי",
      "topic": "הסתברות",
      "difficulty": 4,
      "skill": "מיקום כל התוצאות החריגות מחוץ לקבוצה",
      "prompt": "מטילים מטבע הוגן 5 פעמים. ידוע שבדיוק פעמיים יצא פלי. מה ההסתברות שבאף אחת משתי ההטלות הראשונות לא יצא פלי?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>1</span><span>5</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>3</span><span>10</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>2</span><span>5</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>1</span><span>2</span></span></span>"
      ],
      "correct": 1,
      "explanation": "אם יש בדיוק שתי הטלות פלי, צריך ששתיהן יהיו בשלוש ההטלות האחרונות. קיימות 10 דרכים למקם שני פליים בין חמש ההטלות, ומתוכן 3 דרכים לשבצם בין שלוש האחרונות. לכן 3/10. אפשר גם להכפיל (3/5)×(2/4).",
      "strategy": "'באף אחת' בשתי הטלות: שתיהן חייבות להיות עץ. אפשר לחשב ברצף או לבחור מקומות לפלי.",
      "fastSteps": [
        "בהטלה הראשונה עץ בסיכוי 3/5.",
        "אחרי עץ בראשונה, בשנייה עץ בסיכוי 2/4. המכפלה היא 3/10."
      ],
      "whenToUse": "בהסתברות מותנית, כשנתון בדיוק כמה הצלחות התקבלו ומבוקש הסדר או המיקום של תוצאה.",
      "trap": "2/5 היא ההסתברות לפלי בהטלה אחת; הדרישה כאן היא להימנע מפלי בשתי הטלות.",
      "provenance": "original-variant-of-user-question-2026-10-26"
    },
    {
      "id": "prob1026-09",
      "category": "כמותי",
      "topic": "הסתברות",
      "difficulty": 4,
      "skill": "לפחות אחד באמצעות מאורע משלים",
      "prompt": "מטילים מטבע הוגן 6 פעמים. ידוע שבדיוק 3 פעמים יצא עץ. מה ההסתברות שלפחות באחת משתי ההטלות הראשונות יצא עץ?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>1</span><span>2</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>3</span><span>5</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>5</span><span>6</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>4</span><span>5</span></span></span>"
      ],
      "correct": 3,
      "explanation": "קל יותר לחשב את המשלים: בשתי ההטלות הראשונות יצא פלי. לאחר שידוע שבדיוק 3 מתוך 6 הטלות היו פלי, ההסתברות לכך היא (3/6)×(2/5)=1/5. לכן לפחות עץ אחד מופיע בהסתברות 1−1/5=4/5.",
      "strategy": "'לפחות אחד' נפתר מהר לעיתים באמצעות 1 פחות 'אף אחד'.",
      "fastSteps": [
        "מחשבים את המשלים: פלי בראשונה וגם בשנייה — (3/6)×(2/5)=1/5.",
        "מחסרים מ־1: 4/5."
      ],
      "whenToUse": "בהסתברות מותנית, כשנתון בדיוק כמה הצלחות התקבלו ומבוקש הסדר או המיקום של תוצאה.",
      "trap": "אין להשתמש ב־1/2 לכל הטלה כאילו לא נתון שבדיוק 3 מתוך 6 היו עץ.",
      "provenance": "original-variant-of-user-question-2026-10-26"
    },
    {
      "id": "prob1026-10",
      "category": "כמותי",
      "topic": "הסתברות",
      "difficulty": 4,
      "skill": "מידע נוסף משנה את המכנה",
      "prompt": "נטע הטילה מטבע הוגן 6 פעמים. ידוע שבדיוק פעמיים יצא עץ, וגם שבהטלה הראשונה יצא פלי. מה ההסתברות שבהטלה השישית יצא עץ?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>1</span><span>3</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>2</span><span>5</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>1</span><span>2</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>2</span><span>3</span></span></span>"
      ],
      "correct": 1,
      "explanation": "ההטלה הראשונה כבר ידועה כפלי. בחמש ההטלות הנותרות יש בדיוק שתי תוצאות עץ. כל אחד מחמשת המקומות שנותרו שקול, ולכן בהטלה השישית ההסתברות לעץ היא 2/5.",
      "strategy": "מוציאים מהחישוב את ההטלות שתוצאתן כבר ידועה, ומחשבים רק בין המקומות שנותרו.",
      "fastSteps": [
        "מוציאים את ההטלה הראשונה: נשארו 5 הטלות ובהן 2 עצים.",
        "ההטלה השישית היא מקום אחד מבין החמישה: 2/5."
      ],
      "whenToUse": "בהסתברות מותנית, כשנתון בדיוק כמה הצלחות התקבלו ומבוקש הסדר או המיקום של תוצאה.",
      "trap": "2/6 מתעלם מהמידע שההטלה הראשונה היא פלי, ולכן משתמש במכנה גדול מדי.",
      "provenance": "original-variant-of-user-question-2026-10-26"
    },
    {
      "id": "prob1026-11",
      "category": "כמותי",
      "topic": "הסתברות",
      "difficulty": 4,
      "skill": "עדכון מספר הצלחות בעקבות תנאי",
      "prompt": "הטילו מטבע הוגן 5 פעמים. ידוע שבדיוק 3 פעמים יצא עץ, ושההטלה הראשונה הייתה עץ. מה ההסתברות שגם ההטלה השנייה הייתה עץ?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>3</span><span>5</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>1</span><span>4</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>1</span><span>2</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>2</span><span>3</span></span></span>"
      ],
      "correct": 2,
      "explanation": "כבר ניצלנו אחת משלוש הטלות העץ בהטלה הראשונה. בארבע ההטלות הנותרות יש בדיוק שתי תוצאות עץ, ולכן הסיכוי שהשנייה היא עץ הוא 2/4=1/2.",
      "strategy": "מעדכנים גם את המונה וגם את המכנה אחרי תוצאה ידועה.",
      "fastSteps": [
        "הטלה ראשונה ידועה כעץ: נותרו 2 עצים ב־4 הטלות.",
        "בהטלה השנייה ההסתברות היא 2/4=1/2."
      ],
      "whenToUse": "בהסתברות מותנית, כשנתון בדיוק כמה הצלחות התקבלו ומבוקש הסדר או המיקום של תוצאה.",
      "trap": "3/5 היה נכון למיקום יחיד לפני שנודעה התוצאה הראשונה; אחרי המידע החדש הוא כבר לא מתאים.",
      "provenance": "original-variant-of-user-question-2026-10-26"
    },
    {
      "id": "prob1026-12",
      "category": "כמותי",
      "topic": "הסתברות",
      "difficulty": 5,
      "skill": "מיקום הופעה ראשונה",
      "prompt": "מטילים מטבע הוגן 5 פעמים. ידוע שבדיוק פעמיים יצא עץ. מה ההסתברות שעץ הופיע בפעם הראשונה דווקא בהטלה השלישית?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>1</span><span>5</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>1</span><span>10</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>2</span><span>5</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>1</span><span>2</span></span></span>"
      ],
      "correct": 0,
      "explanation": "יש 10 דרכים שוות הסתברות למקם שתי תוצאות עץ בחמש הטלות. כדי שהעץ הראשון יופיע בשלישית, ההטלות הראשונה והשנייה חייבות להיות פלי, השלישית עץ, והעץ הנוסף יכול להופיע ברביעית או בחמישית. לכן 2/10=1/5.",
      "strategy": "'לראשונה בהטלה השלישית' מחייב פלי בשתי הראשונות ועץ בשלישית; את שאר העצים משבצים במקומות שנותרו.",
      "fastSteps": [
        "סופרים את כל הזוגות האפשריים של מיקומי עץ: 10.",
        "למיקום הראשון בעץ בשלישית יש רק שתי אפשרויות למיקום העץ השני, ולכן 2/10=1/5."
      ],
      "whenToUse": "בהסתברות מותנית, כשנתון בדיוק כמה הצלחות התקבלו ומבוקש הסדר או המיקום של תוצאה.",
      "trap": "2/5 הוא הסיכוי לעץ בהטלה השלישית בלי דרישת 'בפעם הראשונה'.",
      "provenance": "original-variant-of-user-question-2026-10-26"
    },
    {
      "id": "prob1026-13",
      "category": "כמותי",
      "topic": "הסתברות",
      "difficulty": 5,
      "skill": "בדיוק אחת משתי הטלות",
      "prompt": "מטילים מטבע הוגן 6 פעמים. ידוע שבדיוק 3 פעמים יצא עץ. מה ההסתברות שבדיוק אחת משתי ההטלות הראשונות הייתה עץ?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>1</span><span>3</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>1</span><span>2</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>3</span><span>5</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>2</span><span>3</span></span></span>"
      ],
      "correct": 2,
      "explanation": "יש שני סדרים אפשריים: עץ ואז פלי, או פלי ואז עץ. ההסתברות לכל סדר היא (3/6)×(3/5)=3/10, ולכן יחד ההסתברות היא 2×3/10=3/5.",
      "strategy": "'בדיוק אחד מתוך שניים' כולל שני סדרים שונים; אם הם שווי הסתברות, מחשבים סדר אחד ומכפילים ב־2.",
      "fastSteps": [
        "עץ–פלי: (3/6)×(3/5)=3/10.",
        "פלי–עץ באותה הסתברות. הסכום הוא 3/5."
      ],
      "whenToUse": "בהסתברות מותנית, כשנתון בדיוק כמה הצלחות התקבלו ומבוקש הסדר או המיקום של תוצאה.",
      "trap": "התייחסות לסדר אחד בלבד נותנת 3/10, חצי מן ההסתברות המבוקשת.",
      "provenance": "original-variant-of-user-question-2026-10-26"
    }
  ]
};
