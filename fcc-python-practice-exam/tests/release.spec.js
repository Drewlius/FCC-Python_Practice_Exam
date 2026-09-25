const { test, expect } = require('@playwright/test');
const path = require('node:path');
const { pathToFileURL } = require('node:url');

const releasePath = path.resolve(__dirname, '../dist/Python-Practice-Exam-v2.html');

test('standalone release starts a complete offline confidence-aware form', async ({ page }) => {
  const pageErrors = [];
  const remoteRequests = [];
  page.on('pageerror', error => pageErrors.push(error.message));
  page.on('request', request => {
    if (!request.url().startsWith('file:')) remoteRequests.push(request.url());
  });

  await page.goto(pathToFileURL(releasePath).href);
  await page.getByRole('button', { name: /Start a new 20-question exam/i }).click();

  await expect(page.locator('#exam-view')).not.toHaveClass(/hidden/);
  await expect(page.locator('#question-map button')).toHaveCount(20);
  await expect(page.locator('#confidence-options input')).toHaveCount(3);
  expect(pageErrors).toEqual([]);
  expect(remoteRequests).toEqual([]);
});
