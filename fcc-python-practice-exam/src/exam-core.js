(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.QuizCore = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  function hashSeed(value) {
    let h = 2166136261 >>> 0;
    const text = String(value);
    for (let i = 0; i < text.length; i++) {
      h ^= text.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  function seededRandom(seed) {
    let state = hashSeed(seed);
    return function random() {
      state += 0x6d2b79f5;
      let t = state;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function shuffle(items, random) {
    const result = items.slice();
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  function shuffleQuestion(question, random) {
    const correctText = question.choices[question.answer];
    const choices = shuffle(question.choices, random);
    return { ...question, choices, answer: choices.indexOf(correctText), correctText };
  }

  function buildExam(bank, options) {
    const { seed, quotas, avoidIds = [] } = options;
    const random = seededRandom(seed);
    const avoided = new Set(avoidIds);
    const selected = [];
    const usedFamilies = new Set();

    for (const [topic, count] of Object.entries(quotas)) {
      const all = bank.filter(q => q.topic === topic);
      const fresh = shuffle(all.filter(q => !avoided.has(q.id)), random);
      const fallback = shuffle(all.filter(q => avoided.has(q.id)), random);
      const candidates = fresh.concat(fallback);
      if (candidates.length < count) {
        throw new Error(`Not enough questions for ${topic}: need ${count}, found ${candidates.length}`);
      }
      const picked = [];
      for (const question of candidates) {
        if (picked.length === count) break;
        const family = String(question.id).replace(/-\d+$/, '');
        if (usedFamilies.has(family)) continue;
        picked.push(question);
        usedFamilies.add(family);
      }
      if (picked.length < count) {
        throw new Error(`Not enough distinct question families for ${topic}: need ${count}, found ${picked.length}`);
      }
      selected.push(...picked.map(q => shuffleQuestion(q, random)));
    }

    return {
      seed: String(seed),
      createdAt: new Date().toISOString(),
      questions: shuffle(selected, random)
    };
  }

  function scoreExam(questions, answers, passingPercent) {
    const byTopic = {};
    let correct = 0;
    for (const question of questions) {
      const isCorrect = answers[question.id] === question.answer;
      if (isCorrect) correct++;
      if (!byTopic[question.topic]) byTopic[question.topic] = { correct: 0, total: 0, percent: 0 };
      byTopic[question.topic].total++;
      if (isCorrect) byTopic[question.topic].correct++;
    }
    for (const row of Object.values(byTopic)) {
      row.percent = Math.round((row.correct / row.total) * 100);
    }
    const total = questions.length;
    const percent = total ? Math.round((correct / total) * 100) : 0;
    return { correct, total, percent, passed: percent >= passingPercent, byTopic };
  }

  function formatDuration(seconds) {
    const value = Math.max(0, Math.floor(seconds));
    const h = Math.floor(value / 3600).toString().padStart(2, '0');
    const m = Math.floor((value % 3600) / 60).toString().padStart(2, '0');
    const s = (value % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  }

  return { hashSeed, seededRandom, shuffle, buildExam, scoreExam, formatDuration };
});
