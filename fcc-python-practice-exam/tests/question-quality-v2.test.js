const test = require('node:test');
const assert = require('node:assert/strict');

const { buildQuestionBank, TOPIC_QUOTAS, BANK_VERSION } = require('../src/question-bank.js');
const { buildExam } = require('../src/exam-core.js');
const bank = buildQuestionBank();

function normalizedPrompt(prompt) {
  return prompt
    .toLowerCase()
    .replace(/```[\s\S]*?```/g, '<code>')
    .replace(/`[^`]+`/g, '<inline>')
    .replace(/\b\d+(?:\.\d+)?\b/g, '<number>')
    .replace(/\s+/g, ' ')
    .trim();
}

test('v2 bank identifies every item as deliberately revised material', () => {
  assert.equal(BANK_VERSION, 2);
  assert.ok(bank.length >= 167);
  for (const q of bank) {
    assert.match(q.id, /^v2-[a-z0-9-]+$/);
    assert.equal(q.revision, 2, `${q.id} has the wrong revision`);
    assert.ok(q.objective?.length >= 8, `${q.id} needs a specific learning objective`);
    assert.ok(q.explanation.length >= 55, `${q.id} explanation is too shallow`);
  }
});

test('bank supports three completely disjoint, balanced forms', () => {
  const counts = Object.fromEntries(Object.keys(TOPIC_QUOTAS).map(topic => [topic, 0]));
  bank.forEach(q => counts[q.topic]++);
  for (const [topic, quota] of Object.entries(TOPIC_QUOTAS)) {
    assert.ok(counts[topic] >= quota * 3, `${topic} has ${counts[topic]}, needs ${quota * 3}`);
  }

  const first = buildExam(bank, { seed: 'curated-form-one', quotas: TOPIC_QUOTAS });
  const firstIds = first.questions.map(q => q.id);
  const second = buildExam(bank, { seed: 'curated-form-two', quotas: TOPIC_QUOTAS, avoidIds: firstIds });
  const secondIds = second.questions.map(q => q.id);
  const third = buildExam(bank, { seed: 'curated-form-three', quotas: TOPIC_QUOTAS, avoidIds: [...firstIds, ...secondIds] });
  const thirdIds = third.questions.map(q => q.id);

  assert.equal(firstIds.filter(id => secondIds.includes(id)).length, 0);
  assert.equal(firstIds.filter(id => thirdIds.includes(id)).length, 0);
  assert.equal(secondIds.filter(id => thirdIds.includes(id)).length, 0);
});

test('questions are not parameter-swapped copies of one template', () => {
  const byShape = new Map();
  for (const q of bank) {
    const shape = normalizedPrompt(q.prompt);
    byShape.set(shape, [...(byShape.get(shape) || []), q.id]);
  }
  const repeated = [...byShape.values()].filter(ids => ids.length > 1);
  assert.deepEqual(repeated, [], `template-equivalent prompts: ${JSON.stringify(repeated)}`);
  assert.equal(new Set(bank.map(q => q.explanation)).size, bank.length, 'each explanation must be question-specific');
  assert.equal(new Set(bank.map(q => q.objective.toLowerCase())).size, bank.length, 'each item must target a distinct objective');
});

test('question stems are not near-duplicate bags of words', () => {
  const tokens = prompt => new Set(
    prompt.toLowerCase()
      .replace(/```[\s\S]*?```/g, ' <code> ')
      .replace(/`[^`]+`/g, ' <inline> ')
      .replace(/\b\d+(?:\.\d+)?\b/g, ' <number> ')
      .match(/[a-z<>]+/g) || []
  );
  const sets = bank.map(question => tokens(question.prompt));
  for (let left = 0; left < bank.length; left += 1) {
    for (let right = left + 1; right < bank.length; right += 1) {
      const intersection = [...sets[left]].filter(token => sets[right].has(token)).length;
      const union = sets[left].size + sets[right].size - intersection;
      const similarity = union ? intersection / union : 1;
      assert.ok(similarity < 0.8, `${bank[left].id} and ${bank[right].id} are near-duplicate stems (${similarity.toFixed(2)})`);
    }
  }
});

test('each topic mixes recall with application or analysis', () => {
  for (const topic of Object.keys(TOPIC_QUOTAS)) {
    const questions = bank.filter(q => q.topic === topic);
    assert.ok(questions.some(q => q.difficulty === 'foundation'), `${topic} has no foundation questions`);
    assert.ok(questions.some(q => q.difficulty === 'application'), `${topic} has no application questions`);
    assert.ok(questions.some(q => q.difficulty === 'analysis'), `${topic} has no analysis questions`);
  }
});

test('question prose avoids known filler distractors from the generated bank', () => {
  const filler = new Set([
    'the bios', 'a random pivot', 'try random answers', 'a python package',
    'the python interpreter', 'a graph cycle', 'every variable is global',
    'it encrypts the module', 'to speed up the cpu'
  ]);
  for (const q of bank) {
    for (const choice of q.choices) {
      assert.ok(!filler.has(String(choice).toLowerCase()), `${q.id} contains filler distractor: ${choice}`);
    }
  }
});

test('conceptual topics avoid fabricated pseudo-syntax distractors', () => {
  const conceptualTopics = new Set(['classes', 'oop', 'linear', 'algorithms', 'graphs', 'dynamic']);
  const fabricatedSyntax = /(?:\bnew\s+[A-Z]\w*|::|\bclass\s+\w+\s+inherits\b|@setter\(|\.put\(|\bbase->)/;
  for (const q of bank.filter(question => conceptualTopics.has(question.topic))) {
    for (const choice of q.choices) {
      assert.doesNotMatch(String(choice), fabricatedSyntax, `${q.id} contains fabricated pseudo-syntax: ${choice}`);
    }
  }
});

test('audit-derived ambiguous and fabricated distractors stay removed', () => {
  const oldDistractors = new Set([
    '`format"name: score"`', '`count("freeCodeCamp")`', '`size("freeCodeCamp")`',
    '`function area(w, h): w * h`', '`def area(w, h) => w * h`',
    '`throw ValueError("negative")`', '`return Exception as ValueError`',
    'To `__name__` before constructing the object', 'Only when the function returns a string',
    'Base cases sort the table alphabetically'
  ]);
  for (const q of bank) {
    for (const choice of q.choices) {
      assert.ok(!oldDistractors.has(String(choice)), `${q.id} restored an audit-rejected distractor: ${choice}`);
    }
  }

  const byId = Object.fromEntries(bank.map(q => [q.id, q]));
  assert.match(byId['v2-basics-type-check'].prompt, /reject `1\.0` and `"1"`/);
  assert.match(byId['v2-basics-implicit-none'].prompt, /complete output/);
  assert.match(byId['v2-oop-abstract-module'].prompt, /defines both `ABC` and `abstractmethod`/);
  assert.match(byId['v2-algorithms-binary-prerequisite'].prompt, /condition .* require/);
});

test('correct choices are not routinely revealed by being uniquely longest', () => {
  const uniquelyLongest = bank.filter(q => {
    const lengths = q.choices.map(choice => String(choice).replace(/`/g, '').length);
    const longest = Math.max(...lengths);
    return lengths[q.answer] === longest && lengths.filter(length => length === longest).length === 1;
  });
  assert.ok(
    uniquelyLongest.length / bank.length <= 0.4,
    `${uniquelyLongest.length}/${bank.length} correct choices are uniquely longest`
  );
});
