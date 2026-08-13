import { test, expect } from '@playwright/test';

test('verify portfolio page', async ({ page }) => {
  // Go to the portfolio page using hash routing
  await page.goto('http://localhost:5173/#/portfolio');

  // Wait for the content to load
  await page.waitForSelector('text=Bellcrest Family Clinic');

  // Check for Bellcrest logo and image
  const bellcrestSection = page.locator('div:has-text("Bellcrest Family Clinic")').first();
  await expect(bellcrestSection).toBeVisible();

  // Take screenshot of Bellcrest section
  await page.screenshot({ path: 'bellcrest_verify.png' });

  // Check for Alder logo and image
  await page.locator('text=Alder Family Clinic').scrollIntoViewIfNeeded();
  const alderSection = page.locator('div:has-text("Alder Family Clinic")').first();
  await expect(alderSection).toBeVisible();

  // Take screenshot of Alder section
  await page.screenshot({ path: 'alder_verify.png' });
});
