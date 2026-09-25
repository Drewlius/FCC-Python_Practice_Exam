# Research notes: freeCodeCamp Python certification practice scope

Research snapshot: **2026-07-19**. The freeCodeCamp repository `main` tree inspected during development resolved to commit `839daddf08cf132115da8ebf55be1892a26b60d8`.

## Verified public curriculum structure

The official `python-v9` superblock publicly lists these instructional modules:

1. Python basics
2. Python installation
3. Loops and sequences
4. Dictionaries, sets, and modules
5. Error handling
6. Classes and objects
7. Object-oriented programming: encapsulation, inheritance, polymorphism, abstraction
8. Linear data structures
9. Searching and sorting algorithms
10. Graphs and trees
11. Dynamic programming
12. Comprehensive Python review

The official introduction also states that earning the certification requires completing **five required projects** and passing the certification exam. Those projects are the User Configuration Manager, Budget App, Polygon Area Calculator, Hash Table, and Tower of Hanoi implementation.

It also lists certification projects/labs involving a user configuration manager, budget app, polygon area calculator, hash table, Tower of Hanoi, graph traversal and conversion, sorting, Luhn validation, Fibonacci, and related applications. These public topics informed the practice bank. The practice questions themselves are newly written.

### Primary official sources

- Live curriculum: https://www.freecodecamp.org/learn/python-v9/
- Curriculum structure: https://github.com/freeCodeCamp/freeCodeCamp/blob/main/curriculum/structure/superblocks/python-v9.json
- Python certification definition: https://github.com/freeCodeCamp/freeCodeCamp/blob/main/curriculum/challenges/english/certifications/python-v9.yml
- Certification exam challenge entry: https://github.com/freeCodeCamp/freeCodeCamp/blob/main/curriculum/challenges/english/blocks/exam-python-certification/68e6bf0320effa1586e79858.md
- Exam environment source: https://github.com/freeCodeCamp/exam-env
- Exam configuration schema: https://github.com/freeCodeCamp/exam-env/blob/main/prisma/exam-environment.prisma
- Exam-taking interface: https://github.com/freeCodeCamp/exam-env/blob/main/frontend/pages/exam.tsx
- Official Python certification launch and exam FAQ: https://www.freecodecamp.org/news/freecodecamps-new-python-certification-is-now-live/

The source URLs and pinned repository commit above provide the reproducible audit trail; copied public quiz text is not required to run the simulator.

### Public-quiz style audit for version 2

The revision also inspected all **170 public quiz items** in the 11 topic quizzes at the pinned repository snapshot. Those public items are not the private certification bank, so they were used only as evidence about curriculum emphasis and assessment style. The verbatim research copies of those public pages live in this folder and are redistributed under freeCodeCamp's BSD 3-Clause terms — see [`NOTICE.md`](../NOTICE.md) for attribution and the license text.

- Public stems are usually concise and conceptual; the median stem was roughly 82 characters.
- Code use varies sharply by topic. Basics and loops frequently use short snippets or syntax choices, while the public linear-structures, searching/sorting, and graphs/trees quizzes are almost entirely conceptual.
- The public quizzes repeatedly test precise distinctions: method contracts, terminology, data-structure behavior, algorithm complexity, and closely related concepts.
- Version 2 therefore concentrates its short code items in language-behavior topics, keeps the advanced data-structure sections conceptual, and replaces interchangeable output variants with objective-specific items. No public question was copied into the practice bank.

The final bank was divided among three independent semantic audits covering all 167 IDs. Corrections were applied for edge cases including `bool` as an `int` subclass, terminal-versus-shell terminology, `try`/`else` control flow, bound-method assumptions, negative-index sentinels, merge-sort auxiliary space, and graph traversal assumptions. Fabricated mechanisms were replaced with nearby, realistic misconceptions wherever identified.

## Exam-format findings

- The current certification uses freeCodeCamp's separate exam-environment application.
- freeCodeCamp describes the real exams as **closed book**: no books, notes, AI tools, outside resources, or help from other people.
- The official FAQ says an exam can be attempted once per week, with an exact **168-hour cooldown**, and that there is no lifetime limit on attempts.
- The official FAQ confirms that each attempt receives a small randomized sample from a much larger private question and answer bank.
- The public exam-environment schema supports a server-defined time limit, passing percentage, retake delay, topic tags, question-set counts, and one or more correct answers.
- The public client shows a countdown, sequential and direct question navigation, submitted-answer state, and a final submission flow.
- The current exam presents **50 questions**. Drew's current real attempt and a July 2026 freeCodeCamp moderator support response confirm a **two-hour limit**. The real configuration is private, so the simulator deliberately practices a shorter, more intensive 20-question, 45-minute form that fits into a working hour.
- The real Python exam's private server-side configuration and question bank were not accessed. Therefore this project labels **80% as a practice target**, not as a guaranteed statement of the current official passing rule.

## Design decisions

- Every form contains 20 questions and can use a 45-minute timer.
- Topic quotas total exactly 20 and broadly track curriculum breadth.
- The 167-question curated bank contains at least three times every per-form topic quota, allowing three complete forms with no repeated question IDs.
- Automatic forms avoid IDs from the two most recent completed attempts when enough alternatives remain.
- A user-entered seed intentionally bypasses avoidance, making that seed reproducible.
- Correct-answer explanations appear after submission so timed attempts are not weakened by immediate feedback.
- Attempt data stays in browser local storage; no telemetry or network requests exist.
- Optional confidence ratings expose confidently wrong answers separately from uncertain guesses; they never affect the score.

## Boundaries

This artifact is an independent study aid. It intentionally avoids leaked questions, reverse engineering of private exam content, or statements that its topic weighting is freeCodeCamp's private blueprint.
