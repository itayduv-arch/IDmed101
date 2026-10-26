/* Psycho101: user-submitted conditional probability question, 2026-10-26. */
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
    }
  ]
};
