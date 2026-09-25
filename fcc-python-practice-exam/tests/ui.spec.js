const { test, expect } = require('@playwright/test');
const path = require('node:path');
const appUrl = `file://${path.resolve(__dirname, '..', 'index.html')}`;

test.beforeEach(async ({ page }) => {
  await page.goto(appUrl);
  await page.evaluate(() => localStorage.clear());
  await page.reload();
});

test('starts, saves, resumes, completes, and renders a diagnostic review', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await expect(page.getByText('167 manually revised questions', { exact: true })).toBeVisible();
  await page.locator('#seed-input').fill('ui-smoke-form');
  await page.locator('#start-btn').click();
  await expect(page.locator('.map-button')).toHaveCount(20);
  await expect(page.locator('#question-number')).toHaveText('Question 1 of 20');
  await expect(page.locator('#header-status')).toContainText('Time remaining');

  await page.locator('.answer-option').first().click();
  await expect(page.locator('#confidence-options')).toBeVisible();
  await page.locator('#confidence-options label').filter({ hasText: 'Confident' }).click();
  await page.locator('#flag-btn').click();
  await expect(page.locator('.map-button').first()).toHaveClass(/answered/);
  await expect(page.locator('.map-button').first()).toHaveClass(/flagged/);
  await page.locator('#exit-btn').click();
  await expect(page.locator('#resume-btn')).toBeVisible();
  await page.locator('#resume-btn').click();
  await expect(page.locator('.answer-option.selected')).toHaveCount(1);
  await expect(page.getByLabel('Confident')).toBeChecked();

  for (let i = 0; i < 20; i++) {
    await page.locator('.map-button').nth(i).click();
    if (await page.locator('.answer-option.selected').count() === 0) await page.locator('.answer-option').first().click();
  }
  await page.locator('#submit-btn').click();
  await expect(page.locator('#confirm-copy')).toContainText('All 20 questions are answered');
  await page.locator('#confirm-submit-btn').click();
  await expect(page.locator('#results-title')).toBeVisible();
  await expect(page.locator('#score-fraction')).toContainText('/ 20');
  await expect(page.locator('.topic-result')).toHaveCount(11);
  await expect(page.locator('.confidence-result')).toHaveCount(3);
  await expect(page.locator('#calibration-summary')).toContainText('confident');
  await expect(page.locator('.history-row')).toHaveCount(1);
  expect(errors).toEqual([]);
});

test('different seeds create different balanced forms', async ({ page }) => {
  async function idsFor(seed) {
    await page.goto(appUrl);
    await page.evaluate(() => localStorage.clear());
    await page.locator('#seed-input').fill(seed);
    await page.locator('#start-btn').click();
    return page.evaluate(() => JSON.parse(localStorage.getItem('py-practice-active-v2')).questions.map(q => q.id));
  }
  const a = await idsFor('form-a');
  const b = await idsFor('form-b');
  expect(a).toHaveLength(20);
  expect(b).toHaveLength(20);
  expect(a).not.toEqual(b);
});

test('revised exam controls fit a narrow mobile viewport without overlap', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.locator('#start-btn').click();
  await page.locator('.answer-option').first().click();

  await expect(page.locator('#confidence-options')).toBeVisible();
  const metrics = await page.evaluate(() => {
    const confidence = document.querySelector('#confidence-options').getBoundingClientRect();
    const actions = document.querySelector('.question-actions').getBoundingClientRect();
    return {
      overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      confidenceBottom: confidence.bottom,
      actionsTop: actions.top,
      choices: [...document.querySelectorAll('.answer-option')].map(el => {
        const box = el.getBoundingClientRect();
        return { left: box.left, right: box.right };
      })
    };
  });

  expect(metrics.overflow).toBeLessThanOrEqual(0);
  expect(metrics.confidenceBottom).toBeLessThanOrEqual(metrics.actionsTop);
  for (const choice of metrics.choices) {
    expect(choice.left).toBeGreaterThanOrEqual(0);
    expect(choice.right).toBeLessThanOrEqual(390);
  }
});
