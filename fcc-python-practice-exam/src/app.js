(() => {
  'use strict';

  const { buildExam, scoreExam, formatDuration } = QuizCore;
  const { buildQuestionBank, TOPIC_QUOTAS, TOPIC_LABELS, BANK_VERSION } = PythonQuestionBank;
  const bank = buildQuestionBank();
  const STORAGE = { active: 'py-practice-active-v2', history: 'py-practice-history-v2' };
  const PASS_TARGET = 80;
  const EXAM_SECONDS = 45 * 60;
  let active = null;
  let latestResult = null;
  let timerId = null;

  const $ = id => document.getElementById(id);
  const views = ['landing-view', 'exam-view', 'results-view'];

  function readJson(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
  }
  function writeJson(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (error) { console.warn('Local progress could not be saved.', error); }
  }
  function history() { return readJson(STORAGE.history, []); }
  function setView(id) {
    views.forEach(view => $(view).classList.toggle('hidden', view !== id));
    window.scrollTo({ top: 0, behavior: 'instant' });
    $('main').focus({ preventScroll: true });
  }
  function makeSeed() {
    if (globalThis.crypto?.getRandomValues) {
      const values = new Uint32Array(2); crypto.getRandomValues(values);
      return `${values[0].toString(36)}-${values[1].toString(36)}`;
    }
    return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
  }
  function usedQuestionIds() {
    return history().slice(0, 2).flatMap(attempt => attempt.questionIds || []);
  }
  function saveActive() { if (active) writeJson(STORAGE.active, active); }

  function renderCoverage() {
    $('coverage-grid').innerHTML = Object.entries(TOPIC_QUOTAS).map(([topic, count]) =>
      `<div class="coverage-item"><strong>${escapeHtml(TOPIC_LABELS[topic])}</strong><span>${count} per form</span></div>`
    ).join('');
  }

  function renderHistory() {
    const rows = history();
    $('resume-btn').classList.toggle('hidden', !readJson(STORAGE.active, null));
    if (!rows.length) {
      $('history-list').innerHTML = '<p class="muted">No completed attempts yet.</p>';
      return;
    }
    $('history-list').innerHTML = rows.slice(0, 8).map(row => {
      const date = new Date(row.endedAt).toLocaleString();
      return `<div class="history-row"><span>${escapeHtml(date)}</span><strong class="${row.passed ? 'pass' : 'fail'}">${row.percent}%</strong><span>${row.correct} / ${row.total}</span><span>${formatDuration(row.elapsedSeconds)}</span></div>`;
    }).join('');
  }

  function startExam() {
    const enteredSeed = $('seed-input').value.trim();
    const seed = enteredSeed || makeSeed();
    const exam = buildExam(bank, {
      seed,
      quotas: TOPIC_QUOTAS,
      avoidIds: enteredSeed ? [] : usedQuestionIds()
    });
    active = {
      version: BANK_VERSION,
      seed,
      startedAt: Date.now(),
      durationSeconds: $('timer-toggle').checked ? EXAM_SECONDS : null,
      questions: exam.questions,
      answers: {},
      confidences: {},
      flags: [],
      index: 0
    };
    saveActive();
    openExam();
  }

  function resumeExam() {
    active = readJson(STORAGE.active, null);
    if (!active?.questions?.length) { localStorage.removeItem(STORAGE.active); renderHistory(); return; }
    active.confidences ||= {};
    openExam();
  }

  function openExam() {
    setView('exam-view');
    buildQuestionMap();
    renderQuestion();
    startTimer();
  }

  function buildQuestionMap() {
    $('question-map').innerHTML = active.questions.map((q, index) => `<button class="map-button" data-index="${index}" aria-label="Go to question ${index + 1}">${index + 1}</button>`).join('');
    $('question-map').querySelectorAll('button').forEach(button => button.addEventListener('click', () => {
      active.index = Number(button.dataset.index); saveActive(); renderQuestion();
    }));
  }

  function renderQuestion() {
    const q = active.questions[active.index];
    $('question-number').textContent = `Question ${active.index + 1} of ${active.questions.length}`;
    $('topic-badge').textContent = TOPIC_LABELS[q.topic];
    $('difficulty-badge').textContent = q.difficulty;
    $('question-prompt').innerHTML = renderMarkup(q.prompt);
    $('answer-options').innerHTML = '<legend class="sr-only">Choose one answer</legend>' + q.choices.map((choice, index) => {
      const selected = active.answers[q.id] === index;
      return `<label class="answer-option ${selected ? 'selected' : ''}"><input type="radio" name="answer" value="${index}" ${selected ? 'checked' : ''}><span class="choice-letter">${String.fromCharCode(65 + index)}</span><span class="choice-text">${renderInline(choice)}</span></label>`;
    }).join('');
    $('answer-options').querySelectorAll('input').forEach(input => input.addEventListener('change', () => selectAnswer(Number(input.value))));
    $('confidence-options').querySelectorAll('input').forEach(input => {
      input.checked = active.confidences?.[q.id] === input.value;
      input.onchange = () => selectConfidence(input.value);
    });
    $('prev-btn').disabled = active.index === 0;
    $('next-btn').textContent = active.index === active.questions.length - 1 ? 'Review map' : 'Next';
    $('flag-btn').textContent = active.flags.includes(q.id) ? 'Remove flag' : 'Flag for review';
    updateProgress();
  }

  function selectAnswer(index) {
    const q = active.questions[active.index];
    active.answers[q.id] = index;
    saveActive();
    renderQuestion();
  }
  function selectConfidence(level) {
    const q = active.questions[active.index];
    active.confidences ||= {};
    active.confidences[q.id] = level;
    saveActive();
  }
  function move(delta) {
    active.index = Math.max(0, Math.min(active.questions.length - 1, active.index + delta));
    saveActive(); renderQuestion();
  }
  function toggleFlag() {
    const id = active.questions[active.index].id;
    active.flags = active.flags.includes(id) ? active.flags.filter(flag => flag !== id) : [...active.flags, id];
    saveActive(); renderQuestion();
  }
  function updateProgress() {
    const answered = Object.keys(active.answers).length;
    $('answered-count').textContent = `${answered} / ${active.questions.length} answered`;
    $('progress-fill').style.width = `${answered / active.questions.length * 100}%`;
    $('question-map').querySelectorAll('.map-button').forEach((button, index) => {
      const id = active.questions[index].id;
      button.classList.toggle('answered', Object.hasOwn(active.answers, id));
      button.classList.toggle('flagged', active.flags.includes(id));
      button.classList.toggle('current', index === active.index);
      button.setAttribute('aria-current', index === active.index ? 'true' : 'false');
    });
  }

  function startTimer() {
    clearInterval(timerId);
    const tick = () => {
      if (!active) return;
      if (active.durationSeconds == null) {
        $('header-status').textContent = `Form ${active.seed} • untimed`;
        return;
      }
      const elapsed = Math.floor((Date.now() - active.startedAt) / 1000);
      const remaining = Math.max(0, active.durationSeconds - elapsed);
      $('header-status').textContent = `Time remaining ${formatDuration(remaining)}`;
      if (remaining === 0) finishExam(true);
    };
    tick();
    timerId = setInterval(tick, 1000);
  }

  function askToSubmit() {
    const unanswered = active.questions.length - Object.keys(active.answers).length;
    $('confirm-copy').textContent = unanswered ? `${unanswered} question${unanswered === 1 ? ' is' : 's are'} unanswered. Unanswered questions count as incorrect.` : `All ${active.questions.length} questions are answered. You can still return and review flagged questions.`;
    $('confirm-dialog').showModal();
  }

  function finishExam(autoSubmitted = false) {
    if (!active) return;
    clearInterval(timerId);
    const result = scoreExam(active.questions, active.answers, PASS_TARGET);
    const endedAt = Date.now();
    const elapsedSeconds = Math.min(Math.floor((endedAt - active.startedAt) / 1000), active.durationSeconds ?? Number.MAX_SAFE_INTEGER);
    latestResult = { ...result, seed: active.seed, endedAt, elapsedSeconds, autoSubmitted, questions: active.questions, answers: { ...active.answers }, confidences: { ...(active.confidences || {}) } };
    const summary = {
      seed: active.seed, endedAt, elapsedSeconds, correct: result.correct, total: result.total,
      percent: result.percent, passed: result.passed, byTopic: result.byTopic,
      questionIds: active.questions.map(q => q.id)
    };
    writeJson(STORAGE.history, [summary, ...history()].slice(0, 12));
    localStorage.removeItem(STORAGE.active);
    active = null;
    renderResults();
  }

  function renderResults() {
    setView('results-view');
    $('header-status').textContent = `Form ${latestResult.seed}`;
    $('score-percent').textContent = `${latestResult.percent}%`;
    $('score-fraction').textContent = `${latestResult.correct} / ${latestResult.total}`;
    $('score-ring').style.setProperty('--score-angle', `${latestResult.percent * 3.6}deg`);
    $('score-ring').style.setProperty('--green', latestResult.passed ? '#38d996' : '#ff6b78');
    $('result-message').textContent = latestResult.passed
      ? 'You met the 80% practice target. Review every miss, then prove it again on a different form.'
      : `You are ${PASS_TARGET - latestResult.percent} percentage points below the practice target. Start with the weakest domains below.`;
    $('topic-results').innerHTML = Object.entries(latestResult.byTopic).map(([topic, row]) =>
      `<div class="topic-result ${row.percent < 70 ? 'weak' : ''}"><div class="topic-result-top"><strong>${escapeHtml(TOPIC_LABELS[topic])}</strong><span>${row.correct}/${row.total} • ${row.percent}%</span></div><div class="mini-track"><span style="width:${row.percent}%"></span></div></div>`
    ).join('');
    renderCalibration();
    const missed = latestResult.questions.map((q, index) => ({ q, index })).filter(({ q }) => latestResult.answers[q.id] !== q.answer);
    $('review-list').innerHTML = missed.length ? missed.map(({ q, index }) => {
      const chosen = latestResult.answers[q.id];
      const chosenText = Number.isInteger(chosen) ? q.choices[chosen] : 'No answer selected';
      const confidence = latestResult.confidences[q.id] || 'not rated';
      return `<details class="review-item"><summary><span class="review-index">${index + 1}</span><span>${escapeHtml(stripMarkup(q.prompt).slice(0, 130))}</span></summary><div class="review-body"><div>${renderMarkup(q.prompt)}</div><div class="review-answer wrong"><strong>Your answer:</strong> ${renderInline(chosenText)}</div><div class="review-answer correct"><strong>Correct answer:</strong> ${renderInline(q.choices[q.answer])}</div><p><strong>Why:</strong> ${escapeHtml(q.explanation)}</p><p class="muted">Domain: ${escapeHtml(TOPIC_LABELS[q.topic])} • Confidence: ${escapeHtml(confidence)}</p></div></details>`;
    }).join('') : '<p class="muted">Perfect score—there are no missed questions to review.</p>';
    renderHistory();
  }

  function renderCalibration() {
    const levels = [['guess', 'Guess'], ['unsure', 'Unsure'], ['confident', 'Confident']];
    const rows = levels.map(([key, label]) => {
      const questions = latestResult.questions.filter(q => latestResult.confidences[q.id] === key);
      const correct = questions.filter(q => latestResult.answers[q.id] === q.answer).length;
      return { key, label, total: questions.length, correct, percent: questions.length ? Math.round(correct / questions.length * 100) : 0 };
    });
    $('confidence-results').innerHTML = rows.map(row =>
      `<div class="confidence-result"><strong>${row.label}</strong><span>${row.total ? `${row.correct}/${row.total} correct • ${row.percent}%` : 'No questions rated'}</span><div class="mini-track"><span style="width:${row.percent}%"></span></div></div>`
    ).join('');
    const confident = rows.find(row => row.key === 'confident');
    const confidentMisses = confident.total - confident.correct;
    const unrated = latestResult.questions.length - rows.reduce((sum, row) => sum + row.total, 0);
    $('calibration-summary').textContent = confident.total
      ? `You marked ${confident.total} answer${confident.total === 1 ? '' : 's'} confident; ${confidentMisses} of those were wrong. Those misses are the clearest clues to hidden misconceptions.${unrated ? ` ${unrated} questions were not rated.` : ''}`
      : `You marked no answers confident. Rate certainty on the next form so review can separate knowledge gaps from misconceptions.${unrated ? ` ${unrated} questions were not rated.` : ''}`;
  }

  function downloadResults() {
    const exportData = {
      title: 'Python Certification Practice Lab Results',
      generatedAt: new Date(latestResult.endedAt).toISOString(),
      seed: latestResult.seed,
      score: { correct: latestResult.correct, total: latestResult.total, percent: latestResult.percent, practiceTargetMet: latestResult.passed },
      elapsed: formatDuration(latestResult.elapsedSeconds),
      byTopic: Object.fromEntries(Object.entries(latestResult.byTopic).map(([topic, row]) => [TOPIC_LABELS[topic] || topic, row])),
      missed: latestResult.questions.filter(q => latestResult.answers[q.id] !== q.answer).map(q => ({ topic: TOPIC_LABELS[q.topic], prompt: q.prompt, confidence: latestResult.confidences[q.id] || null, yourAnswer: Number.isInteger(latestResult.answers[q.id]) ? q.choices[latestResult.answers[q.id]] : null, correctAnswer: q.choices[q.answer], explanation: q.explanation }))
    };
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a'); link.href = url; link.download = `python-practice-${latestResult.seed}.json`; link.click();
    URL.revokeObjectURL(url);
  }

  function exitExam() {
    saveActive(); clearInterval(timerId); active = null; $('header-status').textContent = '';
    setView('landing-view'); renderHistory();
  }

  function escapeHtml(value) { return String(value).replace(/[&<>"']/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[char])); }
  function renderInline(value) { return escapeHtml(value).replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\n/g, '<br>'); }
  function renderMarkup(value) {
    const parts = String(value).split(/```(?:python)?\n([\s\S]*?)```/g);
    return parts.map((part, index) => index % 2 ? `<pre><code>${escapeHtml(part.trimEnd())}</code></pre>` : `<p>${renderInline(part).replace(/<br><br>/g, '</p><p>')}</p>`).join('');
  }
  function stripMarkup(value) { return String(value).replace(/```(?:python)?/g, '').replace(/`/g, '').replace(/\s+/g, ' ').trim(); }

  $('start-btn').addEventListener('click', startExam);
  $('resume-btn').addEventListener('click', resumeExam);
  $('exit-btn').addEventListener('click', exitExam);
  $('prev-btn').addEventListener('click', () => move(-1));
  $('next-btn').addEventListener('click', () => move(1));
  $('flag-btn').addEventListener('click', toggleFlag);
  $('submit-btn').addEventListener('click', askToSubmit);
  $('confirm-dialog').addEventListener('close', () => { if ($('confirm-dialog').returnValue === 'confirm') finishExam(false); });
  $('new-exam-btn').addEventListener('click', () => { latestResult = null; $('seed-input').value = ''; setView('landing-view'); renderHistory(); startExam(); });
  $('download-btn').addEventListener('click', downloadResults);
  $('toggle-all-btn').addEventListener('click', () => {
    const details = [...document.querySelectorAll('.review-item')];
    const expand = details.some(item => !item.open); details.forEach(item => { item.open = expand; });
    $('toggle-all-btn').textContent = expand ? 'Collapse all' : 'Expand all';
  });
  $('clear-history-btn').addEventListener('click', () => {
    if (confirm('Clear all locally stored completed-attempt history?')) { localStorage.removeItem(STORAGE.history); renderHistory(); }
  });
  document.addEventListener('keydown', event => {
    if (!active || !$('exam-view') || !$('results-view').classList.contains('hidden') || $('confirm-dialog').open) return;
    if (['1','2','3','4'].includes(event.key)) { selectAnswer(Number(event.key) - 1); }
    else if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
    else if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
    else if (event.key.toLowerCase() === 'f') { event.preventDefault(); toggleFlag(); }
  });

  renderCoverage();
  renderHistory();
})();
