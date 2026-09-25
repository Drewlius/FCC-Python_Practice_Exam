# Python Certification Practice Lab

A reusable, offline practice exam aligned to freeCodeCamp's public **Python v9** curriculum.

## Run it

PYTHON CERTIFICATION PRACTICE LAB

1. Open index.html in Chrome, Firefox, Edge, or another modern browser.
2. Click "Start a new 20-question exam."
3. Nothing needs to be installed and no internet connection is required.

> Your unfinished exam and recent scores stay in that browser only.


For the closest rehearsal, keep the timer enabled and do not use notes or outside resources. freeCodeCamp's real certification exam is officially closed book.

No account, server, install, internet connection, API key, or Hermes Agent is required. Your attempts and an unfinished exam are stored only in that browser's local storage.

## What it includes

- 20 questions per exam
- Optional 45-minute countdown
- 167 original, manually revised multiple-choice questions across 11 curriculum domains
- Balanced topic selection on every form
- Seeded generation: reuse a seed to reproduce a form
- Never two questions from the same question family on one form
- Different automatic forms; consecutive completed forms avoid prior questions when the bank permits
- Question map, flags, keyboard controls, save-and-resume
- Optional Guess / Unsure / Confident rating on every answer
- 80% **practice target**
- Per-topic diagnosis, confidence calibration, and explanations for every missed answer
- Coverage of harder-to-spot review topics including boolean short-circuit semantics, `filter()`/lambda iterators, adjacency-list versus adjacency-matrix tradeoffs, canonical Big-O simplification, and ordered immutable collections
- Downloadable JSON result report
- Responsive, keyboard-accessible interface

## Important distinction

This is independent practice material. It does **not** contain, scrape, reproduce, or claim to predict freeCodeCamp's private python v9 certification questions. It is not affiliated with or endorsed by freeCodeCamp. Treat this exactly as it is, a students implementation of a practice exam. I am not a professor, a teacher, a linguist, a life long python engineer. There may be some mistakes, there may be grammatical errors. If you make an issue report ill do the best I canto fix it and improve, or feel free to push a fix and ill merge it, or do the open source thing and just "Fork IT!". Good Luck, Happy Coding.

The simulator's scope comes from the public Python v9 curriculum structure and public review material. See [`research/RESEARCH.md`](research/RESEARCH.md).

Copies of freeCodeCamp's public curriculum pages kept for research are attributed in [`NOTICE.md`](NOTICE.md); that public content remains © freeCodeCamp under the BSD 3-Clause License.

Version 2 deliberately traded bank size for quality. The old parameter-swapped generators were removed. Every remaining item has its own learning objective, deliberately chosen distractors, and a specific explanation. Three complete topic-balanced forms can be drawn without repeating a question.

All 167 items were then divided among three independent correctness audits. Their findings were used to tighten Python edge cases, method binding, exception control flow, algorithm assumptions, graph terminology, and distractor plausibility. Executable language behaviors are checked by `tests/python-semantics-audit.py`.

## Curriculum coverage per 20-question form

| Domain | Questions |
|---|---:|
| Python basics | 3 |
| Installation and modules | 1 |
| Loops and sequences | 2 |
| Dictionaries and sets | 2 |
| Error handling | 1 |
| Classes and objects | 2 |
| Object-oriented programming | 2 |
| Linear data structures | 2 |
| Searching and sorting | 2 |
| Graphs and trees | 2 |
| Dynamic programming | 1 |

These weights are a study design derived from public curriculum breadth, not a claim about freeCodeCamp's private exam blueprint.

## Keyboard controls

- `1`–`4`: choose an answer
- Left/Right arrow: previous/next question
- `F`: flag or unflag the current question

## Optional developer checks

The app itself has no dependencies. Tests use Node.js; browser tests additionally use Playwright.

```text
npm install
npm test
npm run test:python
npx playwright install chromium
npm run test:ui
npm run test:release
```

## Files

- `index.html` — open this
- `styles.css` — interface styles
- `src/question-bank.js` — curated v2 question bank and curriculum weights
- `src/exam-core.js` — deterministic selection, shuffling, scoring, formatting
- `src/app.js` — browser UI, timer, local persistence, review and export
- `tests/` — automated unit and end-to-end checks
- `scripts/build-release.py` — creates and verifies the ZIP and single-file edition
- `research/` — source notes, curriculum links, and editorial methodology
- `NOTICE.md` - Clarification on the origination of the research used for this test

## License

MIT License — see [`LICENSE`](LICENSE). Copyright (c) 2026 slippy.

One carve-out: `research/official-public-quizzes.md` and `research/official-reviews.md` are verbatim copies of freeCodeCamp's public curriculum and remain © freeCodeCamp under the BSD 3-Clause License — see [`NOTICE.md`](NOTICE.md).
