# Psycho101 quality and learning-shortcut audit · 2026-10-21

## Source hierarchy / legal scope
- NITE is the authority for test format, allowed question families and official practice exams: https://www.nite.org.il/two-domain-psychometric-entrance-test/format-2/ and https://www.nite.org.il/psychometric-entrance-test/preparation/
- Campus IL, the state's free psychometric course, informs learner pacing, lesson feedback and fraction-percent intuition: https://campus.gov.il/course/mse-gov-psychometry-he/
- Yoel Geva practice exams with instructor explanations: https://www.geva.co.il/psychometry/psychometric_practice_tests-2/
- Kidum method overview includes substituting answer choices, estimation and adaptive drill: https://kidum.com/blog/%D7%97%D7%A9%D7%99%D7%91%D7%94-%D7%9B%D7%9E%D7%95%D7%AA%D7%99%D7%AA-%D7%91%D7%A4%D7%A1%D7%99%D7%9B%D7%95%D7%9E%D7%98%D7%A8%D7%99/
- HighQ quantitative advice includes alternative solution routes: https://www.high-q.co.il/%D7%A4%D7%A1%D7%99%D7%9B%D7%95%D7%9E%D7%98%D7%A8%D7%99/%D7%98%D7%99%D7%A4%D7%99%D7%9D-%D7%9C%D7%97%D7%9C%D7%A7-%D7%94%D7%9B%D7%9E%D7%95%D7%AA%D7%99/
- EZ Way public information emphasizes interactive problem-solving and learning: https://land.ezway.co.il/s-eazyclicks2025/

These were public materials; private/paywalled course content was not accessed. No provider's proprietary question text or explanatory material was copied. Some commercial websites still describe the pre-December-2026 three-domain exam; official NITE takes precedence.

## Confirmed problems
1. Percentage tips often stated a division without calculating its numerical result, e.g., the computation 36/25. New explanations show 36 × 4 = 144; 144/100 = 1.44.
2. Some question generators produced fluency-only items that are valuable as prerequisite skills but are not credible exam simulations: one-step rectangle area, trivially read table cells, elementary coordinate subtraction, repeated direct arithmetic and surface-form analogies.
3. Standalone "define this word" multiple choice is not an active NITE psychometric question type. Vocabulary remains useful in *context* and in a clearly labelled auxiliary vocabulary lesson.
4. Reviewed original question banks dated October 10, 11 and 13 had been left disconnected from the app.

## Applied in the app
- A separate foundational-practice route preserves basic fluency questions but removes them from exam-like warmup, mixed/focused and simulation pools. Matching existing user stats and error records are not removed.
- Standard practice selection excludes known starter templates qg*, vg*, cq*, q<number>, v<number>, direct isolated word-definition items and malformed four-answer items. This is a conservative first-pass **screen**, not proof that every remaining question is exam-quality.
- Added 40 internally schema-checked original practice questions from October 10/11/13, including 24 analogies with answer-specific metadata. The shuffler maintains distractor mapping.
- Rewrote percentages to show 10%, half, quarter, eighth, or a decomposed percent with all intermediate values. Reverse percentages now rebuild the whole from equal parts and verify the result. Other quantitative topics show strategy/trap metadata when available.
- Retained existing progression and daily warmups already in progress.
- Added regression tests for live banks, 10+10 warmup and examples 36/25, 12% of 36, 7.5% of 400, reverse 12% = 36.

## Remaining audit backlog
- Individually review the remaining first-pass-eligible questions for cognitive demand, language ambiguity, answer-key correctness, realistic distractors, and correct topic/difficulty attribution.
- Audit the broader older expansion banks; retire or edit low-quality questions individually instead of wholesale deletion.
- Add structured worked numerical examples to more ratio, algebra, speed/work and geometry explanations.
- Check changes in official NITE test format each maintenance batch.

## Safety boundaries
No accumulated answers, XP, streaks or question history was deleted. A schema/structural audit and public-source comparison are **not** equivalent to an exhaustive editorial verification of every question.

## 21 Oct 2026 — full mathematical-layout pass and faster exam solving (v49)

### Validated measurements on the real running question assembly
- 419 quantitative questions in the loaded bank.
- 2,514 rendered question, answer and explanation text fields checked in the dedicated `full_quant_review.cjs` test; no loss of original mathematical content, unbalanced math spans, or stray formatting placeholders.
- Additionally, the RTL regression suite checks 3,744 rendered fields across quantitative and verbal banks.
- 73 legacy question templates with repeated **identical** answer strings were detected. These are excluded from ordinary exam practice and the fundamentals route until corrected; they are not deleted from the repository or from user progress.
- 156 quantitative questions currently pass the first-pass exam-bank screen. This figure includes 27 newly written, answer-key-checked, reasoning-oriented problems. The first-pass screen is not proof of full independent editorial verification.
- 58 exam-eligible problems have explicit, ordered worked steps. This includes 27 new examples and 31 annotations on existing material (some annotations belong to foundational items). Other questions retain their original solution and/or a topic-level recognition cue, not an invented "magic trick".
- Formats verified include standalone Unicode exponents (e.g. x²), Unicode roots (√48), HTML superscripts, ASCII caret powers, parenthesized negatives and fractions, ratios, inequalities and thousand separators. The screenshot's ambiguous divisor problem was repaired in all its three legacy appearances.
- New quantitative speed drill: 20 quantitative questions in a 20-minute clock. Choices advance without revealing correctness; only after completion are the faster strategies and wrong answers shown.

### Teaching principles
- Make the shortcut conditional: first identify the tell-tale wording or structure, then do an independently checked short calculation with every intermediate numeric result.
- Useful shortcuts: selecting convenient values such as 100; answer substitution; subtraction/addition of ratios; relative speed; complementary probability; scaling area quadratically; cancellation before factorial multiplication; parity/remainders; use of conjugates or difference of squares; recognizing Pythagorean triples.
- Avoid claiming *every* problem has a clever shortcut. For some questions, a direct computation is fastest.
- NITE: https://www.nite.org.il/two-domain-psychometric-entrance-test/preparation-2/ ; https://www.nite.org.il/two-domain-psychometric-entrance-test/format-2/
- Campus IL solution sheets: https://courses.campus.gov.il/assets/courseware/v1/3f7997c31619ffc6bd45ff118a886357/asset-v1%3AMSE%2BGOV_PsychometryHe%2B2018_1%2Btype%40asset%2Bblock/Sol_2212.pdf
- Commercial course general discussion: https://kidum.com/blog/%D7%97%D7%A9%D7%99%D7%91%D7%94-%D7%9B%D7%9E%D7%95%D7%AA%D7%99%D7%AA-%D7%91%D7%A4%D7%A1%D7%99%D7%9B%D7%95%D7%9E%D7%98%D7%A8%D7%99/

### Limits and remaining work
- All loaded quantitative item fields passed **structural formatting and mathematical-text preservation tests**; this is distinct from manually verifying that every of the 419 question's answer choices, real-world assumptions and mathematical proofs are correct.
- The 27 new answer keys and fast solutions were authored and reviewed individually, backed by a static regression oracle. The remaining questions are partially reviewed based on source-bank and quality-screen metadata.
- Phone-specific visual screenshots were not independently inspected after deployment; iOS Safari can still have layout behavior not caught by CI.
- Future maintenance should review every remaining question's semantic ambiguity and distractor equivalence, with care not to erase user statistics or mistake reviews.
