const test = require('node:test');
const assert = require('node:assert/strict');

const Core = require('../src/exam-core.js');
const { buildQuestionBank, TOPIC_QUOTAS } = require('../src/question-bank.js');

const bank = buildQuestionBank();

test('question bank is curated, valid, original practice material', () => {
  assert.ok(bank.length >= 167, `expected at least 167 questions, got ${bank.length}`);
  assert.equal(new Set(bank.map(q => q.id)).size, bank.length, 'question IDs must be unique');
  for (const q of bank) {
    assert.match(q.id, /^[a-z0-9-]+$/);
    assert.ok(TOPIC_QUOTAS[q.topic], `unknown topic: ${q.topic}`);
    assert.ok(['foundation', 'application', 'analysis'].includes(q.difficulty));
    assert.equal(q.choices.length, 4, `${q.id} must have four choices`);
    assert.equal(new Set(q.choices).size, 4, `${q.id} choices must be unique`);
    assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < 4);
    assert.ok(q.prompt.length >= 12);
    assert.ok(q.explanation.length >= 20);
  }
});

test('exam generation produces the official-length, topic-balanced practice form', () => {
  const exam = Core.buildExam(bank, { seed: 'warmup-1', quotas: TOPIC_QUOTAS });
  assert.equal(exam.questions.length, 20);
  const counts = Object.fromEntries(Object.keys(TOPIC_QUOTAS).map(topic => [topic, 0]));
  exam.questions.forEach(q => counts[q.topic]++);
  assert.deepEqual(counts, TOPIC_QUOTAS);
});

test('same seed reproduces a form and different seeds change it', () => {
  const a = Core.buildExam(bank, { seed: 'repeatable', quotas: TOPIC_QUOTAS });
  const b = Core.buildExam(bank, { seed: 'repeatable', quotas: TOPIC_QUOTAS });
  const c = Core.buildExam(bank, { seed: 'different', quotas: TOPIC_QUOTAS });
  assert.deepEqual(a.questions.map(q => q.id), b.questions.map(q => q.id));
  assert.notDeepEqual(a.questions.map(q => q.id), c.questions.map(q => q.id));
});

test('the next form avoids every prior question when each topic has enough alternatives', () => {
  const first = Core.buildExam(bank, { seed: 'first', quotas: TOPIC_QUOTAS });
  const used = first.questions.map(q => q.id);
  const second = Core.buildExam(bank, { seed: 'second', quotas: TOPIC_QUOTAS, avoidIds: used });
  const overlap = second.questions.filter(q => used.includes(q.id));
  assert.deepEqual(overlap, []);
});

test('answer options are shuffled without losing the correct answer', () => {
  const exam = Core.buildExam(bank, { seed: 'shuffle-check', quotas: TOPIC_QUOTAS });
  for (const q of exam.questions) {
    assert.equal(q.choices[q.answer], q.correctText);
  }
});

test('scoring reports total, percent, pass status, and per-topic results', () => {
  const exam = Core.buildExam(bank, { seed: 'score-check', quotas: TOPIC_QUOTAS });
  const answers = Object.fromEntries(exam.questions.map((q, index) => [q.id, index < 16 ? q.answer : (q.answer + 1) % 4]));
  const result = Core.scoreExam(exam.questions, answers, 80);
  assert.equal(result.correct, 16);
  assert.equal(result.total, 20);
  assert.equal(result.percent, 80);
  assert.equal(result.passed, true);
  assert.equal(Object.values(result.byTopic).reduce((sum, row) => sum + row.total, 0), 20);
});

test('formatDuration renders the 45-minute exam timer cleanly', () => {
  assert.equal(Core.formatDuration(45 * 60), '00:45:00');
  assert.equal(Core.formatDuration(65), '00:01:05');
  assert.equal(Core.formatDuration(0), '00:00:00');
});
