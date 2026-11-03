/* Psycho101: user-submitted factorial question plus 11 original, arithmetically checked practice variants, 2026-11-03. */
window.PSYCHO101_FACTORIALS_20261103 = {
  "quantitative": [
    {
      "id": "fact1103-01",
      "category": "כמותי",
      "topic": "עצרת",
      "skill": "הוצאת עצרת משותפת וצמצום בתוך שורש",
      "difficulty": 2,
      "prompt": "מה ערך הביטוי <span class=\"math-ltr\" dir=\"ltr\">√<span class=\"psy-radicand\"><span class=\"psy-fraction\"><span>100! − 99!</span><span>98!</span></span></span></span> ?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">98!</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">98</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">99</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">100!</span>"
      ],
      "correct": 2,
      "explanation": "מוציאים 99! כגורם משותף: 100! − 99! = 99! × 99. לאחר צמצום ב־98! מתקבל 99² = 9801. השורש הוא 99.",
      "strategy": "מוציאים את העצרת הקטנה כגורם משותף ומצמצמים עצרות לפני שמחשבים שורש.",
      "fastSteps": [
        "מפרקים את 100! ל־100 × 99! ומוציאים 99! כגורם משותף.",
        "מצמצמים ב־98!, מקבלים 9801 ואז מוציאים שורש: 99."
      ],
      "whenToUse": "בביטויים עם עצרות עוקבות, חיסור או חיבור עצרות וצמצום במכנה.",
      "trap": "אין לחשב עצרות ענקיות או להוציא שורש לפני צמצום; יש לשים לב אם המכנה הוא (n−2)! או (n−1)!.",
      "provenance": "user-provided-image-2026-11-03"
    },
    {
      "id": "fact1103-02",
      "category": "כמותי",
      "topic": "עצרת",
      "skill": "הפרש עצרות ושורש של ריבוע",
      "difficulty": 2,
      "prompt": "מה ערך הביטוי <span class=\"math-ltr\" dir=\"ltr\">√<span class=\"psy-radicand\"><span class=\"psy-fraction\"><span>9! − 8!</span><span>7!</span></span></span></span> ?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">8</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">7</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">64</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">9</span>"
      ],
      "correct": 0,
      "explanation": "מוציאים 8! כגורם משותף: 9! − 8! = 8! × 8. לאחר צמצום ב־7! מתקבל 8² = 64. השורש הוא 8.",
      "strategy": "מוציאים את העצרת הקטנה כגורם משותף ומצמצמים עצרות לפני שמחשבים שורש.",
      "fastSteps": [
        "מפרקים את 9! ל־9 × 8! ומוציאים 8! כגורם משותף.",
        "מצמצמים ב־7!, מקבלים 64 ואז מוציאים שורש: 8."
      ],
      "whenToUse": "בביטויים עם עצרות עוקבות, חיסור או חיבור עצרות וצמצום במכנה.",
      "trap": "אין לחשב עצרות ענקיות או להוציא שורש לפני צמצום; יש לשים לב אם המכנה הוא (n−2)! או (n−1)!.",
      "provenance": "original-practice-2026-11-03"
    },
    {
      "id": "fact1103-03",
      "category": "כמותי",
      "topic": "עצרת",
      "skill": "הפרש עצרות ללא שורש",
      "difficulty": 2,
      "prompt": "מה ערך הביטוי <span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>12! − 11!</span><span>10!</span></span></span> ?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">11</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">121</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">132</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">110</span>"
      ],
      "correct": 1,
      "explanation": "מוציאים 11! כגורם משותף: 12! − 11! = 11! × 11. לאחר צמצום ב־10! מתקבל 11² = 121.",
      "strategy": "מוציאים את העצרת הקטנה כגורם משותף ומצמצמים עצרות לפני שמחשבים שורש.",
      "fastSteps": [
        "מפרקים את 12! ל־12 × 11! ומוציאים 11! כגורם משותף.",
        "מצמצמים ב־10!, מקבלים 121."
      ],
      "whenToUse": "בביטויים עם עצרות עוקבות, חיסור או חיבור עצרות וצמצום במכנה.",
      "trap": "אין לחשב עצרות ענקיות או להוציא שורש לפני צמצום; יש לשים לב אם המכנה הוא (n−2)! או (n−1)!.",
      "provenance": "original-practice-2026-11-03"
    },
    {
      "id": "fact1103-04",
      "category": "כמותי",
      "topic": "עצרת",
      "skill": "בחירת העצרת הנכונה לצמצום",
      "difficulty": 2,
      "prompt": "מה ערך הביטוי <span class=\"math-ltr\" dir=\"ltr\">√<span class=\"psy-radicand\"><span class=\"psy-fraction\"><span>17! − 16!</span><span>16!</span></span></span></span> ?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">16</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">8</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">√17</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">4</span>"
      ],
      "correct": 3,
      "explanation": "מוציאים 16! כגורם משותף: 17! − 16! = 16! × 16. לאחר צמצום ב־16! מתקבל 16. השורש הוא 4.",
      "strategy": "מוציאים את העצרת הקטנה כגורם משותף ומצמצמים עצרות לפני שמחשבים שורש.",
      "fastSteps": [
        "מפרקים את 17! ל־17 × 16! ומוציאים 16! כגורם משותף.",
        "מצמצמים ב־16!, מקבלים 16 ואז מוציאים שורש: 4."
      ],
      "whenToUse": "בביטויים עם עצרות עוקבות, חיסור או חיבור עצרות וצמצום במכנה.",
      "trap": "אין לחשב עצרות ענקיות או להוציא שורש לפני צמצום; יש לשים לב אם המכנה הוא (n−2)! או (n−1)!.",
      "provenance": "original-practice-2026-11-03"
    },
    {
      "id": "fact1103-05",
      "category": "כמותי",
      "topic": "עצרת",
      "skill": "צמצום עצרות עוקבות",
      "difficulty": 2,
      "prompt": "מה ערך הביטוי <span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>15! − 14!</span><span>14!</span></span></span> ?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">15</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">196</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">14</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">14!</span>"
      ],
      "correct": 2,
      "explanation": "מוציאים 14! כגורם משותף: 15! − 14! = 14! × 14. לאחר צמצום ב־14! מתקבל 14.",
      "strategy": "מוציאים את העצרת הקטנה כגורם משותף ומצמצמים עצרות לפני שמחשבים שורש.",
      "fastSteps": [
        "מפרקים את 15! ל־15 × 14! ומוציאים 14! כגורם משותף.",
        "מצמצמים ב־14!, מקבלים 14."
      ],
      "whenToUse": "בביטויים עם עצרות עוקבות, חיסור או חיבור עצרות וצמצום במכנה.",
      "trap": "אין לחשב עצרות ענקיות או להוציא שורש לפני צמצום; יש לשים לב אם המכנה הוא (n−2)! או (n−1)!.",
      "provenance": "original-practice-2026-11-03"
    },
    {
      "id": "fact1103-06",
      "category": "כמותי",
      "topic": "עצרת",
      "skill": "הפרש עצרות לשורש ריבועי",
      "difficulty": 2,
      "prompt": "מה ערך הביטוי <span class=\"math-ltr\" dir=\"ltr\">√<span class=\"psy-radicand\"><span class=\"psy-fraction\"><span>13! − 12!</span><span>11!</span></span></span></span> ?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">11</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">12</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">144</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">13</span>"
      ],
      "correct": 1,
      "explanation": "מוציאים 12! כגורם משותף: 13! − 12! = 12! × 12. לאחר צמצום ב־11! מתקבל 12² = 144. השורש הוא 12.",
      "strategy": "מוציאים את העצרת הקטנה כגורם משותף ומצמצמים עצרות לפני שמחשבים שורש.",
      "fastSteps": [
        "מפרקים את 13! ל־13 × 12! ומוציאים 12! כגורם משותף.",
        "מצמצמים ב־11!, מקבלים 144 ואז מוציאים שורש: 12."
      ],
      "whenToUse": "בביטויים עם עצרות עוקבות, חיסור או חיבור עצרות וצמצום במכנה.",
      "trap": "אין לחשב עצרות ענקיות או להוציא שורש לפני צמצום; יש לשים לב אם המכנה הוא (n−2)! או (n−1)!.",
      "provenance": "original-practice-2026-11-03"
    },
    {
      "id": "fact1103-07",
      "category": "כמותי",
      "topic": "עצרת",
      "skill": "זיהוי ריבוע ללא שורש",
      "difficulty": 2,
      "prompt": "מה ערך הביטוי <span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>8! − 7!</span><span>6!</span></span></span> ?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">7</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">56</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">48</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">49</span>"
      ],
      "correct": 3,
      "explanation": "מוציאים 7! כגורם משותף: 8! − 7! = 7! × 7. לאחר צמצום ב־6! מתקבל 7² = 49.",
      "strategy": "מוציאים את העצרת הקטנה כגורם משותף ומצמצמים עצרות לפני שמחשבים שורש.",
      "fastSteps": [
        "מפרקים את 8! ל־8 × 7! ומוציאים 7! כגורם משותף.",
        "מצמצמים ב־6!, מקבלים 49."
      ],
      "whenToUse": "בביטויים עם עצרות עוקבות, חיסור או חיבור עצרות וצמצום במכנה.",
      "trap": "אין לחשב עצרות ענקיות או להוציא שורש לפני צמצום; יש לשים לב אם המכנה הוא (n−2)! או (n−1)!.",
      "provenance": "original-practice-2026-11-03"
    },
    {
      "id": "fact1103-08",
      "category": "כמותי",
      "topic": "עצרת",
      "skill": "סכום עצרות ושורש לא שלם",
      "difficulty": 3,
      "prompt": "מה ערך הביטוי <span class=\"math-ltr\" dir=\"ltr\">√<span class=\"psy-radicand\"><span class=\"psy-fraction\"><span>9! + 8!</span><span>7!</span></span></span></span> ?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">4√5</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">8</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">9</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">2√5</span>"
      ],
      "correct": 0,
      "explanation": "מוציאים 8! כגורם משותף: 9! + 8! = 8! × 10. לאחר צמצום ב־7! מתקבל 8 × 10 = 80. לכן השורש הוא 4√5.",
      "strategy": "מוציאים את העצרת הקטנה כגורם משותף; בחיבור עצרות עוקבות מקבלים (n+1) ולא (n−1).",
      "fastSteps": [
        "מפרקים את 9! ל־9 × 8! ומוציאים 8! כגורם משותף.",
        "מצמצמים ב־7!, מקבלים 80 ואז מוציאים שורש: 4√5."
      ],
      "whenToUse": "בביטויים עם עצרות עוקבות, חיסור או חיבור עצרות וצמצום במכנה.",
      "trap": "בחיבור עצרות לא מתקבל אותו גורם כמו בחיסור.",
      "provenance": "original-practice-2026-11-03"
    },
    {
      "id": "fact1103-09",
      "category": "כמותי",
      "topic": "עצרת",
      "skill": "סכום עצרות עם גורם משותף",
      "difficulty": 3,
      "prompt": "מה ערך הביטוי <span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>10! + 9!</span><span>8!</span></span></span> ?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">90</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">100</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">99</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">81</span>"
      ],
      "correct": 2,
      "explanation": "מוציאים 9! כגורם משותף: 10! + 9! = 9! × 11. לאחר צמצום ב־8! מתקבל 9 × 11 = 99. ",
      "strategy": "מוציאים את העצרת הקטנה כגורם משותף; בחיבור עצרות עוקבות מקבלים (n+1) ולא (n−1).",
      "fastSteps": [
        "מפרקים את 10! ל־10 × 9! ומוציאים 9! כגורם משותף.",
        "מצמצמים ב־8!, מקבלים 99."
      ],
      "whenToUse": "בביטויים עם עצרות עוקבות, חיסור או חיבור עצרות וצמצום במכנה.",
      "trap": "בחיבור עצרות לא מתקבל אותו גורם כמו בחיסור.",
      "provenance": "original-practice-2026-11-03"
    },
    {
      "id": "fact1103-10",
      "category": "כמותי",
      "topic": "עצרת",
      "skill": "צמצום עצרות גדולות בלי חישוב",
      "difficulty": 2,
      "prompt": "מה ערך הביטוי <span class=\"math-ltr\" dir=\"ltr\">√<span class=\"psy-radicand\"><span class=\"psy-fraction\"><span>25! − 24!</span><span>23!</span></span></span></span> ?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">25</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">24</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">576</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">23</span>"
      ],
      "correct": 1,
      "explanation": "מוציאים 24! כגורם משותף: 25! − 24! = 24! × 24. לאחר צמצום ב־23! מתקבל 24² = 576. השורש הוא 24.",
      "strategy": "מוציאים את העצרת הקטנה כגורם משותף ומצמצמים עצרות לפני שמחשבים שורש.",
      "fastSteps": [
        "מפרקים את 25! ל־25 × 24! ומוציאים 24! כגורם משותף.",
        "מצמצמים ב־23!, מקבלים 576 ואז מוציאים שורש: 24."
      ],
      "whenToUse": "בביטויים עם עצרות עוקבות, חיסור או חיבור עצרות וצמצום במכנה.",
      "trap": "אין לחשב עצרות ענקיות או להוציא שורש לפני צמצום; יש לשים לב אם המכנה הוא (n−2)! או (n−1)!.",
      "provenance": "original-practice-2026-11-03"
    },
    {
      "id": "fact1103-11",
      "category": "כמותי",
      "topic": "עצרת",
      "skill": "צמצום עצרת זהה במונה ובמכנה",
      "difficulty": 2,
      "prompt": "מה ערך הביטוי <span class=\"math-ltr\" dir=\"ltr\"><span class=\"psy-fraction\"><span>20! − 19!</span><span>19!</span></span></span> ?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">19</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">361</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">20</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">18</span>"
      ],
      "correct": 0,
      "explanation": "מוציאים 19! כגורם משותף: 20! − 19! = 19! × 19. לאחר צמצום ב־19! מתקבל 19.",
      "strategy": "מוציאים את העצרת הקטנה כגורם משותף ומצמצמים עצרות לפני שמחשבים שורש.",
      "fastSteps": [
        "מפרקים את 20! ל־20 × 19! ומוציאים 19! כגורם משותף.",
        "מצמצמים ב־19!, מקבלים 19."
      ],
      "whenToUse": "בביטויים עם עצרות עוקבות, חיסור או חיבור עצרות וצמצום במכנה.",
      "trap": "אין לחשב עצרות ענקיות או להוציא שורש לפני צמצום; יש לשים לב אם המכנה הוא (n−2)! או (n−1)!.",
      "provenance": "original-practice-2026-11-03"
    },
    {
      "id": "fact1103-12",
      "category": "כמותי",
      "topic": "עצרת",
      "skill": "זיהוי ריבוע מושלם אחרי צמצום",
      "difficulty": 2,
      "prompt": "מה ערך הביטוי <span class=\"math-ltr\" dir=\"ltr\">√<span class=\"psy-radicand\"><span class=\"psy-fraction\"><span>7! − 6!</span><span>5!</span></span></span></span> ?",
      "answers": [
        "<span class=\"math-ltr\" dir=\"ltr\">5</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">7</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">36</span>",
        "<span class=\"math-ltr\" dir=\"ltr\">6</span>"
      ],
      "correct": 3,
      "explanation": "מוציאים 6! כגורם משותף: 7! − 6! = 6! × 6. לאחר צמצום ב־5! מתקבל 6² = 36. השורש הוא 6.",
      "strategy": "מוציאים את העצרת הקטנה כגורם משותף ומצמצמים עצרות לפני שמחשבים שורש.",
      "fastSteps": [
        "מפרקים את 7! ל־7 × 6! ומוציאים 6! כגורם משותף.",
        "מצמצמים ב־5!, מקבלים 36 ואז מוציאים שורש: 6."
      ],
      "whenToUse": "בביטויים עם עצרות עוקבות, חיסור או חיבור עצרות וצמצום במכנה.",
      "trap": "אין לחשב עצרות ענקיות או להוציא שורש לפני צמצום; יש לשים לב אם המכנה הוא (n−2)! או (n−1)!.",
      "provenance": "original-practice-2026-11-03"
    }
  ]
};
