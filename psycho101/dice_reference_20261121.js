/* Psycho101: image question about fair dice and 11 new probability variants. Enumerated over all outcomes to validate keys. */
window.PSYCHO101_DICE_REFERENCE_20261121 = {
  "quantitative": [
    {
      "id": "dice1121-01",
      "category": "כמותי",
      "topic": "הסתברות",
      "skill": "הסתברות בהטלות קוביות והסתברות משלימה",
      "difficulty": 2,
      "prompt": "לנועה יש חמש קוביות הוגנות, אחת ירוקה וארבע צהובות. פאות כל קובייה ממוספרות מ־1 עד 6. נועה הטילה את חמש הקוביות. מה ההסתברות שהמספר שהתקבל בקובייה הירוקה לא התקבל באף קובייה מארבע הקוביות הצהובות?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">(<span class=\"psy-fraction\"><span>5</span><span>6</span></span>)<sup>5</sup></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>1</span><span>6</span></span> · (<span class=\"psy-fraction\"><span>5</span><span>6</span></span>)<sup>4</sup></span>",
        "<span class=\"math-ltr\" dir=\"ltr\">(<span class=\"psy-fraction\"><span>5</span><span>6</span></span>)<sup>4</sup></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>1</span><span>6</span></span> · (<span class=\"psy-fraction\"><span>5</span><span>6</span></span>)<sup>3</sup></span>"
      ],
      "correct": 2,
      "explanation": "נניח שהקובייה הירוקה הראתה 2. בכל קובייה צהובה יש 5 מספרים מתאימים מתוך 6: 1, 3, 4, 5, 6. ארבע ההטלות עצמאיות, ולכן (5/6)^4. אותו חישוב נכון לכל מספר בקובייה הירוקה.",
      "strategy": "מתייחסים לתוצאה בקובייה המרכזית כאל מספר נתון, ואז מחשבים את ההסתברות לתנאים בקוביות האחרות. בהטלות עצמאיות מכפילים; עבור כמה סדרים אפשריים מוסיפים את מספר הדרכים.",
      "fastSteps": [
        "בוחרים את התוצאה בירוקה כרקע - אין צורך להכפיל בהסתברות שלה.",
        "בכל אחת מארבע הצהובות הסיכוי לא לקבל את המספר הירוק הוא 5/6. לכן (5/6)^4."
      ],
      "whenToUse": "כאשר יש קובייה קובעת ומבקשים התאמה, הימנעות מהתאמה, או מספר מדויק של התאמות בקוביות אחרות.",
      "trap": "לא מעלים בחזקת 5. הקובייה הירוקה אינה חייבת להראות מספר מסוים; היא רק מגדירה איזה מספר אסור לצהובות.",
      "answerExplanations": [
        "מכפיל בטעות גם עבור הירוקה, אף שאין עליה מגבלה.",
        "מחייב בטעות מספר מסוים בירוקה, למרות שכל תוצאה שלה מתאימה.",
        "נכון - ארבע צהובות שונות מן הירוקה, כל אחת בסיכוי 5/6.",
        "מגביל בטעות את הירוקה וגם סופר רק שלוש צהובות."
      ],
      "dieSides": 6,
      "otherDice": 4,
      "event": "none",
      "expectedNumerator": 625,
      "expectedDenominator": 1296,
      "optionValues": [
        "3125/7776",
        "625/7776",
        "625/1296",
        "125/1296"
      ],
      "provenance": "user-provided-image-2026-11-21"
    },
    {
      "id": "dice1121-02",
      "category": "כמותי",
      "topic": "הסתברות",
      "skill": "הסתברות בהטלות קוביות והסתברות משלימה",
      "difficulty": 1,
      "prompt": "מטילים קובייה אדומה ושלוש קוביות כחולות, כולן הוגנות ובעלות 6 פאות. מה ההסתברות שאף קובייה כחולה לא תראה את המספר שהתקבל באדומה?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>125</span><span>216</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>25</span><span>36</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>1</span><span>216</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>91</span><span>216</span></span></span>"
      ],
      "correct": 0,
      "explanation": "אם האדומה הראתה 4, כל כחולה יכולה להראות 5 מספרים אחרים מתוך 6. שלוש ההטלות עצמאיות: (5/6)^3=125/216.",
      "strategy": "מתייחסים לתוצאה בקובייה המרכזית כאל מספר נתון, ואז מחשבים את ההסתברות לתנאים בקוביות האחרות. בהטלות עצמאיות מכפילים; עבור כמה סדרים אפשריים מוסיפים את מספר הדרכים.",
      "fastSteps": [
        "לכל כחולה סיכוי 5/6 להיות שונה מהאדומה.",
        "מעלים בחזקת 3: 125/216."
      ],
      "whenToUse": "כאשר יש קובייה קובעת ומבקשים התאמה, הימנעות מהתאמה, או מספר מדויק של התאמות בקוביות אחרות.",
      "trap": "יש שלוש קוביות כחולות ולא שתיים; לא צריך לקבוע מראש את תוצאת הקובייה האדומה.",
      "answerExplanations": [
        "נכון - (5/6)^3.",
        "סופר רק שתי כחולות - (5/6)^2.",
        "מתייחס בטעות לכך שכל הכחולות צריכות להתאים לאדומה.",
        "זהו הסיכוי שלפחות אחת מהכחולות תתאים לאדומה."
      ],
      "dieSides": 6,
      "otherDice": 3,
      "event": "none",
      "expectedNumerator": 125,
      "expectedDenominator": 216,
      "optionValues": [
        "125/216",
        "25/36",
        "1/216",
        "91/216"
      ],
      "provenance": "original-practice-inspired-by-user-topic-2026-11-21"
    },
    {
      "id": "dice1121-03",
      "category": "כמותי",
      "topic": "הסתברות",
      "skill": "הסתברות בהטלות קוביות והסתברות משלימה",
      "difficulty": 2,
      "prompt": "מטילים קובייה ירוקה ושתי קוביות צהובות, כולן הוגנות בעלות 6 פאות. מה ההסתברות שלפחות אחת מהצהובות תראה את אותו המספר כמו הירוקה?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>25</span><span>36</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>11</span><span>36</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>1</span><span>6</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>1</span><span>3</span></span></span>"
      ],
      "correct": 1,
      "explanation": "למשל, אם הירוקה הראתה 3, ההסתברות שאף צהובה לא תראה 3 היא (5/6)^2=25/36. לכן ההסתברות שלפחות אחת תראה 3 היא 1−25/36=11/36.",
      "strategy": "מתייחסים לתוצאה בקובייה המרכזית כאל מספר נתון, ואז מחשבים את ההסתברות לתנאים בקוביות האחרות. בהטלות עצמאיות מכפילים; עבור כמה סדרים אפשריים מוסיפים את מספר הדרכים.",
      "fastSteps": [
        "מחשבים את המשלים: אף צהובה לא מתאימה - (5/6)^2.",
        "מחסרים מ־1 ומקבלים 11/36."
      ],
      "whenToUse": "כאשר יש קובייה קובעת ומבקשים התאמה, הימנעות מהתאמה, או מספר מדויק של התאמות בקוביות אחרות.",
      "trap": "'לפחות אחת' כולל גם מצב ששתי הצהובות מתאימות; לא מספיק להכפיל 2×(1/6).",
      "answerExplanations": [
        "המשלים: אף צהובה אינה מתאימה.",
        "נכון - 1−(5/6)^2=11/36.",
        "הסתברות של צהובה יחידה להתאים.",
        "סכימה ישירה 2×(1/6) שסופרת פעמיים את המקרה שבו שתיהן מתאימות."
      ],
      "dieSides": 6,
      "otherDice": 2,
      "event": "atLeastOne",
      "expectedNumerator": 11,
      "expectedDenominator": 36,
      "optionValues": [
        "25/36",
        "11/36",
        "1/6",
        "1/3"
      ],
      "provenance": "original-practice-inspired-by-user-topic-2026-11-21"
    },
    {
      "id": "dice1121-04",
      "category": "כמותי",
      "topic": "הסתברות",
      "skill": "הסתברות בהטלות קוביות והסתברות משלימה",
      "difficulty": 3,
      "prompt": "מטילים קובייה אדומה ושלוש קוביות לבנות, כולן הוגנות בעלות 6 פאות. מה ההסתברות שבדיוק קובייה לבנה אחת תראה את המספר שהתקבל באדומה?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>25</span><span>216</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>5</span><span>72</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>91</span><span>216</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>25</span><span>72</span></span></span>"
      ],
      "correct": 3,
      "explanation": "אם האדומה הראתה 2, בוחרים איזו אחת משלוש הלבנות תראה 2 - יש 3 אפשרויות. לאחת סיכוי 1/6 ולשתיים האחרות 5/6 כל אחת. לכן 3×(1/6)×(5/6)^2=25/72.",
      "strategy": "מתייחסים לתוצאה בקובייה המרכזית כאל מספר נתון, ואז מחשבים את ההסתברות לתנאים בקוביות האחרות. בהטלות עצמאיות מכפילים; עבור כמה סדרים אפשריים מוסיפים את מספר הדרכים.",
      "fastSteps": [
        "בוחרים מי מהשלוש מתאימה - 3 אפשרויות.",
        "מכפילים 3×(1/6)×(5/6)^2=25/72."
      ],
      "whenToUse": "כאשר יש קובייה קובעת ומבקשים התאמה, הימנעות מהתאמה, או מספר מדויק של התאמות בקוביות אחרות.",
      "trap": "בלי הגורם 3 מחשבים רק את המקרה שבו קובייה לבנה מסוימת מתאימה, ולא את כל האפשרויות.",
      "answerExplanations": [
        "מחשב סידור יחיד במקום שלושה.",
        "מחשב בדיוק שתי התאמות, לא אחת.",
        "מחשב לפחות התאמה אחת, כולל שתיים ושלוש.",
        "נכון - שלוש אפשרויות למיקום ההתאמה היחידה."
      ],
      "dieSides": 6,
      "otherDice": 3,
      "event": "exactlyOne",
      "expectedNumerator": 25,
      "expectedDenominator": 72,
      "optionValues": [
        "25/216",
        "5/72",
        "91/216",
        "25/72"
      ],
      "provenance": "original-practice-inspired-by-user-topic-2026-11-21"
    },
    {
      "id": "dice1121-05",
      "category": "כמותי",
      "topic": "הסתברות",
      "skill": "הסתברות בהטלות קוביות והסתברות משלימה",
      "difficulty": 2,
      "prompt": "מטילים קובייה שחורה וארבע קוביות לבנות, כולן הוגנות בעלות 6 פאות. מה ההסתברות שכל ארבע הלבנות יראו בדיוק את המספר שהתקבל בשחורה?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>1</span><span>7776</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>1</span><span>1296</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>1</span><span>6</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>2</span><span>3</span></span></span>"
      ],
      "correct": 1,
      "explanation": "נניח שהשחורה הראתה 5. כל לבנה חייבת להראות 5 בסיכוי 1/6. לכן (1/6)^4=1/1296. אין צורך לדרוש שהשחורה תראה 5 דווקא.",
      "strategy": "מתייחסים לתוצאה בקובייה המרכזית כאל מספר נתון, ואז מחשבים את ההסתברות לתנאים בקוביות האחרות. בהטלות עצמאיות מכפילים; עבור כמה סדרים אפשריים מוסיפים את מספר הדרכים.",
      "fastSteps": [
        "כל לבנה חייבת להתאים לשחורה בהסתברות 1/6.",
        "לארבע לבנות עצמאיות: (1/6)^4=1/1296."
      ],
      "whenToUse": "כאשר יש קובייה קובעת ומבקשים התאמה, הימנעות מהתאמה, או מספר מדויק של התאמות בקוביות אחרות.",
      "trap": "הטעות (1/6)^5 נובעת מהנחה שצריך לקבל מספר קבוע גם בשחורה.",
      "answerExplanations": [
        "מגביל את השחורה למספר מסוים ומחשב חמש קוביות.",
        "נכון - כל ארבע הלבנות צריכות להתאים.",
        "סופר התאמה של לבנה יחידה.",
        "מחשב יחס של ארבע מתוך שש, שאינו קשור לאירוע."
      ],
      "dieSides": 6,
      "otherDice": 4,
      "event": "all",
      "expectedNumerator": 1,
      "expectedDenominator": 1296,
      "optionValues": [
        "1/7776",
        "1/1296",
        "1/6",
        "2/3"
      ],
      "provenance": "original-practice-inspired-by-user-topic-2026-11-21"
    },
    {
      "id": "dice1121-06",
      "category": "כמותי",
      "topic": "הסתברות",
      "skill": "הסתברות בהטלות קוביות והסתברות משלימה",
      "difficulty": 3,
      "prompt": "מטילים קובייה ירוקה ושלוש קוביות צהובות, כולן הוגנות בעלות 6 פאות. מה ההסתברות שבדיוק שתי קוביות צהובות יראו את המספר שהתקבל בירוקה?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>5</span><span>216</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>1</span><span>36</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>5</span><span>72</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>91</span><span>216</span></span></span>"
      ],
      "correct": 2,
      "explanation": "אם הירוקה הראתה 1, בדיוק שתיים מתוך שלוש הצהובות חייבות להראות 1 והשלישית חייבת להראות מספר אחר. יש 3 דרכים לבחור את הצהובה השונה, לכן 3×(1/6)^2×(5/6)=5/72.",
      "strategy": "מתייחסים לתוצאה בקובייה המרכזית כאל מספר נתון, ואז מחשבים את ההסתברות לתנאים בקוביות האחרות. בהטלות עצמאיות מכפילים; עבור כמה סדרים אפשריים מוסיפים את מספר הדרכים.",
      "fastSteps": [
        "בוחרים את הקובייה היחידה שלא תתאים - 3 אפשרויות.",
        "מכפילים 3×(1/6)^2×(5/6)=5/72."
      ],
      "whenToUse": "כאשר יש קובייה קובעת ומבקשים התאמה, הימנעות מהתאמה, או מספר מדויק של התאמות בקוביות אחרות.",
      "trap": "אל תשכחו את הגורם 3 עבור המיקום של הקובייה שאינה מתאימה.",
      "answerExplanations": [
        "מחשב סידור יחיד בלי הגורם 3.",
        "מתעלם מהדרישה שהצהובה השלישית תהיה שונה.",
        "נכון - בדיוק שתי התאמות ואחת שונה.",
        "מתאר לפחות התאמה אחת, לא בדיוק שתיים."
      ],
      "dieSides": 6,
      "otherDice": 3,
      "event": "exactlyTwo",
      "expectedNumerator": 5,
      "expectedDenominator": 72,
      "optionValues": [
        "5/216",
        "1/36",
        "5/72",
        "91/216"
      ],
      "provenance": "original-practice-inspired-by-user-topic-2026-11-21"
    },
    {
      "id": "dice1121-07",
      "category": "כמותי",
      "topic": "הסתברות",
      "skill": "הסתברות בהטלות קוביות והסתברות משלימה",
      "difficulty": 2,
      "prompt": "מטילים קובייה אדומה ושלוש קוביות כחולות הוגנות, שלכולן 4 פאות הממוספרות מ־1 עד 4. מה ההסתברות שאף כחולה לא תראה את המספר של האדומה?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>9</span><span>16</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>27</span><span>64</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>3</span><span>4</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>37</span><span>64</span></span></span>"
      ],
      "correct": 1,
      "explanation": "אם האדומה הראתה 2, לכל כחולה יש שלוש תוצאות שונות מתוך ארבע. לכן (3/4)^3=27/64.",
      "strategy": "מתייחסים לתוצאה בקובייה המרכזית כאל מספר נתון, ואז מחשבים את ההסתברות לתנאים בקוביות האחרות. בהטלות עצמאיות מכפילים; עבור כמה סדרים אפשריים מוסיפים את מספר הדרכים.",
      "fastSteps": [
        "בכל כחולה 3 מתוך 4 מספרים שונים.",
        "מכפילים בשלוש כחולות: 27/64."
      ],
      "whenToUse": "כאשר יש קובייה קובעת ומבקשים התאמה, הימנעות מהתאמה, או מספר מדויק של התאמות בקוביות אחרות.",
      "trap": "המספר 3 במונה מייצג תוצאות מותרות, לא את מספר הקוביות; יש להעלות בחזקת 3.",
      "answerExplanations": [
        "מתייחס לשתי כחולות בלבד.",
        "נכון - (3/4)^3.",
        "הסתברות של כחולה יחידה להיות שונה.",
        "זוהי ההסתברות שלפחות אחת הכחולות שווה לאדומה, לא שכולן שונות ממנה."
      ],
      "dieSides": 4,
      "otherDice": 3,
      "event": "none",
      "expectedNumerator": 27,
      "expectedDenominator": 64,
      "optionValues": [
        "9/16",
        "27/64",
        "3/4",
        "37/64"
      ],
      "provenance": "original-practice-inspired-by-user-topic-2026-11-21"
    },
    {
      "id": "dice1121-08",
      "category": "כמותי",
      "topic": "הסתברות",
      "skill": "הסתברות בהטלות קוביות והסתברות משלימה",
      "difficulty": 2,
      "prompt": "מטילים קובייה ירוקה ושתי קוביות צהובות, כולן הוגנות בעלות 8 פאות הממוספרות מ־1 עד 8. מה ההסתברות שלפחות אחת מהצהובות תראה את המספר של הירוקה?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>49</span><span>64</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>1</span><span>8</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>15</span><span>64</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>1</span><span>4</span></span></span>"
      ],
      "correct": 2,
      "explanation": "אם הירוקה הראתה 6, לכל צהובה סיכוי 7/8 לא להראות 6. ההסתברות שאף אחת לא תתאים היא (7/8)^2=49/64, ולכן לפחות אחת תתאים בסיכוי 1−49/64=15/64.",
      "strategy": "מתייחסים לתוצאה בקובייה המרכזית כאל מספר נתון, ואז מחשבים את ההסתברות לתנאים בקוביות האחרות. בהטלות עצמאיות מכפילים; עבור כמה סדרים אפשריים מוסיפים את מספר הדרכים.",
      "fastSteps": [
        "מחשבים את המשלים - אף התאמה: (7/8)^2.",
        "מחסרים מ־1: 15/64."
      ],
      "whenToUse": "כאשר יש קובייה קובעת ומבקשים התאמה, הימנעות מהתאמה, או מספר מדויק של התאמות בקוביות אחרות.",
      "trap": "2×(1/8)=1/4 אינו מדויק כי במקרה ששתי הצהובות מתאימות, סופרים את האירוע פעמיים.",
      "answerExplanations": [
        "האירוע המשלים של אפס התאמות.",
        "הסתברות להתאמה של צהובה אחת.",
        "נכון - מאורע משלים 1−(7/8)^2.",
        "סכימה ללא תיקון חפיפה בין שתי הצהובות."
      ],
      "dieSides": 8,
      "otherDice": 2,
      "event": "atLeastOne",
      "expectedNumerator": 15,
      "expectedDenominator": 64,
      "optionValues": [
        "49/64",
        "1/8",
        "15/64",
        "1/4"
      ],
      "provenance": "original-practice-inspired-by-user-topic-2026-11-21"
    },
    {
      "id": "dice1121-09",
      "category": "כמותי",
      "topic": "הסתברות",
      "skill": "הסתברות בהטלות קוביות והסתברות משלימה",
      "difficulty": 4,
      "prompt": "מטילים קובייה ירוקה וארבע קוביות צהובות, כולן הוגנות בעלות 6 פאות. מה ההסתברות שלפחות שתיים מהצהובות יראו את המספר של הירוקה?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>125</span><span>324</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>25</span><span>216</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>19</span><span>144</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>671</span><span>1296</span></span></span>"
      ],
      "correct": 2,
      "explanation": "אם הירוקה הראתה 4, בדיוק אפס התאמות מתקבל ב־(5/6)^4=625/1296. בדיוק התאמה אחת מתקבלת ב־4×(1/6)×(5/6)^3=500/1296. לכן לפחות שתיים = 1−625/1296−500/1296=171/1296=19/144.",
      "strategy": "מתייחסים לתוצאה בקובייה המרכזית כאל מספר נתון, ואז מחשבים את ההסתברות לתנאים בקוביות האחרות. בהטלות עצמאיות מכפילים; עבור כמה סדרים אפשריים מוסיפים את מספר הדרכים.",
      "fastSteps": [
        "מחשבים את המשלים - 0 או 1 התאמות.",
        "1−(5/6)^4−4×(1/6)×(5/6)^3=19/144."
      ],
      "whenToUse": "כאשר יש קובייה קובעת ומבקשים התאמה, הימנעות מהתאמה, או מספר מדויק של התאמות בקוביות אחרות.",
      "trap": "'לפחות שתיים' כולל בדיוק 2, 3 או 4; מחשבים מהר באמצעות המשלימים 0 ו־1.",
      "answerExplanations": [
        "ההסתברות של בדיוק התאמה אחת.",
        "ההסתברות של בדיוק שתי התאמות בלבד.",
        "נכון - לפחות שתיים, כולל שלוש וארבע.",
        "מחשב לפחות התאמה אחת, ולא לפחות שתיים."
      ],
      "dieSides": 6,
      "otherDice": 4,
      "event": "atLeastTwo",
      "expectedNumerator": 19,
      "expectedDenominator": 144,
      "optionValues": [
        "125/324",
        "25/216",
        "19/144",
        "671/1296"
      ],
      "provenance": "original-practice-inspired-by-user-topic-2026-11-21"
    },
    {
      "id": "dice1121-10",
      "category": "כמותי",
      "topic": "הסתברות",
      "skill": "הסתברות בהטלות קוביות והסתברות משלימה",
      "difficulty": 4,
      "prompt": "מטילים קובייה ירוקה ושלוש קוביות צהובות, כולן הוגנות בעלות 6 פאות. מה ההסתברות ששלוש הצהובות יראו מספרים שונים זה מזה, ושאף אחת מהן לא תראה את המספר של הירוקה?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>125</span><span>216</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>5</span><span>9</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>1</span><span>6</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>5</span><span>18</span></span></span>"
      ],
      "correct": 3,
      "explanation": "אם הירוקה הראתה 3, לצהובה הראשונה יש 5 אפשרויות מתוך 6. לשנייה 4 מתוך 6 כי עליה להיות שונה גם מהראשונה; לשלישית 3 מתוך 6. לכן (5/6)×(4/6)×(3/6)=5/18.",
      "strategy": "מתייחסים לתוצאה בקובייה המרכזית כאל מספר נתון, ואז מחשבים את ההסתברות לתנאים בקוביות האחרות. בהטלות עצמאיות מכפילים; עבור כמה סדרים אפשריים מוסיפים את מספר הדרכים.",
      "fastSteps": [
        "מספר התוצאות המותרות יורד 5, 4, 3.",
        "מכפילים (5×4×3)/(6×6×6)=5/18."
      ],
      "whenToUse": "כאשר יש קובייה קובעת ומבקשים התאמה, הימנעות מהתאמה, או מספר מדויק של התאמות בקוביות אחרות.",
      "trap": "(5/6)^3 מתיר לצהובות להיות שוות זו לזו; כאן הן חייבות להיות שונות גם ביניהן.",
      "answerExplanations": [
        "מגביל רק מול הירוקה ומתיר כפילויות בין הצהובות.",
        "לא מגביל את הקובייה השלישית כנדרש.",
        "מחשב הסתברות התאמה יחידה לירוקה.",
        "נכון - 5 אפשרויות, אחריהן 4 ואחריהן 3."
      ],
      "dieSides": 6,
      "otherDice": 3,
      "event": "allDifferent",
      "expectedNumerator": 5,
      "expectedDenominator": 18,
      "optionValues": [
        "125/216",
        "5/9",
        "1/6",
        "5/18"
      ],
      "provenance": "original-practice-inspired-by-user-topic-2026-11-21"
    },
    {
      "id": "dice1121-11",
      "category": "כמותי",
      "topic": "הסתברות",
      "skill": "הסתברות בהטלות קוביות והסתברות משלימה",
      "difficulty": 4,
      "prompt": "מטילים קובייה ירוקה וארבע קוביות צהובות, כולן הוגנות בעלות 6 פאות. מה ההסתברות שאף צהובה לא תראה את המספר של הירוקה, או שכל ארבע הצהובות יראו בדיוק את המספר שלה?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>313</span><span>648</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>625</span><span>1296</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>1</span><span>1296</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>671</span><span>1296</span></span></span>"
      ],
      "correct": 0,
      "explanation": "למשל אם הירוקה הראתה 2, יש שני מקרים שאינם יכולים לקרות יחד: אף צהובה אינה 2 בסיכוי (5/6)^4=625/1296, או כל הצהובות 2 בסיכוי (1/6)^4=1/1296. מחברים: 626/1296=313/648.",
      "strategy": "מתייחסים לתוצאה בקובייה המרכזית כאל מספר נתון, ואז מחשבים את ההסתברות לתנאים בקוביות האחרות. בהטלות עצמאיות מכפילים; עבור כמה סדרים אפשריים מוסיפים את מספר הדרכים.",
      "fastSteps": [
        "סופרים שני מקרים זרים - 0 התאמות או 4 התאמות.",
        "מחברים (5/6)^4+(1/6)^4=313/648."
      ],
      "whenToUse": "כאשר יש קובייה קובעת ומבקשים התאמה, הימנעות מהתאמה, או מספר מדויק של התאמות בקוביות אחרות.",
      "trap": "המילה 'או' מחייבת חיבור כשאירועים זרים; אין לחשב רק אחד מהמקרים.",
      "answerExplanations": [
        "נכון - סכום שני המקרים הזרים.",
        "מחשב רק את המקרה של אפס התאמות.",
        "מחשב רק את המקרה של ארבע התאמות.",
        "מחשב לפחות התאמה אחת, אירוע אחר."
      ],
      "dieSides": 6,
      "otherDice": 4,
      "event": "noneOrAll",
      "expectedNumerator": 313,
      "expectedDenominator": 648,
      "optionValues": [
        "313/648",
        "625/1296",
        "1/1296",
        "671/1296"
      ],
      "provenance": "original-practice-inspired-by-user-topic-2026-11-21"
    },
    {
      "id": "dice1121-12",
      "category": "כמותי",
      "topic": "הסתברות",
      "skill": "הסתברות בהטלות קוביות והסתברות משלימה",
      "difficulty": 4,
      "prompt": "מטילים קובייה ירוקה וארבע קוביות צהובות, כולן הוגנות בעלות 6 פאות. מה ההסתברות שבדיוק אחת או בדיוק שתיים מהצהובות יראו את המספר של הירוקה?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>125</span><span>324</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>325</span><span>648</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>25</span><span>216</span></span></span>",
        "<span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>671</span><span>1296</span></span></span>"
      ],
      "correct": 1,
      "explanation": "אם הירוקה הראתה 5, בדיוק התאמה אחת: 4×(1/6)×(5/6)^3=500/1296. בדיוק שתי התאמות: 6×(1/6)^2×(5/6)^2=150/1296. המקרים זרים ולכן מחברים: 650/1296=325/648.",
      "strategy": "מתייחסים לתוצאה בקובייה המרכזית כאל מספר נתון, ואז מחשבים את ההסתברות לתנאים בקוביות האחרות. בהטלות עצמאיות מכפילים; עבור כמה סדרים אפשריים מוסיפים את מספר הדרכים.",
      "fastSteps": [
        "התאמה אחת: בוחרים מיקום ב־4 דרכים. שתי התאמות: בוחרים זוג ב־6 דרכים.",
        "מחברים 500/1296+150/1296=325/648."
      ],
      "whenToUse": "כאשר יש קובייה קובעת ומבקשים התאמה, הימנעות מהתאמה, או מספר מדויק של התאמות בקוביות אחרות.",
      "trap": "אסור לשכוח את מספר סידורי ההתאמות - 4 לבדיוק אחת ו־6 לבדיוק שתיים.",
      "answerExplanations": [
        "מחשב רק בדיוק התאמה אחת.",
        "נכון - סכום ההסתברויות בדיוק אחת ובדיוק שתיים.",
        "מחשב רק בדיוק שתי התאמות.",
        "מחשב לפחות התאמה אחת - כולל גם שלוש וארבע."
      ],
      "dieSides": 6,
      "otherDice": 4,
      "event": "oneOrTwo",
      "expectedNumerator": 325,
      "expectedDenominator": 648,
      "optionValues": [
        "125/324",
        "325/648",
        "25/216",
        "671/1296"
      ],
      "provenance": "original-practice-inspired-by-user-topic-2026-11-21"
    }
  ]
};
