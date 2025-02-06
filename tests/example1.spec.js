// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

// 1. Check if the page loads successfully
test('page loads successfully', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveURL(/playwright.dev/);
});

// 2. Check if the logo is visible
test('logo is visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('img', { name: 'Playwright' })).toBeVisible();
});

// 3. Verify the documentation link
test('documentation link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Docs' }).click();
  await expect(page).toHaveURL(/docs/);
});

// 4. Check if the search bar is present
test('search bar is visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.locator('input[placeholder="Search"]')).toBeVisible();
});

// 5. Verify the API link works
test('API link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'API' }).click();
  await expect(page).toHaveURL(/api/);
});

// 6. Check if the GitHub link is present
test('GitHub link is visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('link', { name: 'GitHub' })).toBeVisible();
});

// 7. Verify the version number is displayed
test('version number is visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.locator('.version')).toBeVisible();
});

// 8. Validate the footer section exists
test('footer is visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.locator('footer')).toBeVisible();
});

// 9. Check if the API page has a table of contents
test('API page table of contents', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'API' }).click();
  await expect(page.locator('.table-of-contents')).toBeVisible();
});

// 10. Verify the Community link
test('Community link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Community' }).click();
  await expect(page).toHaveURL(/community/);
});

// 11. Check if the Playwright banner is visible
test('Playwright banner is visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.locator('.hero')).toBeVisible();
});

// 12. Validate the Blog link
test('Blog link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Blog' }).click();
  await expect(page).toHaveURL(/blog/);
});

// 13. Check if the header is sticky
test('header is sticky', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.locator('header')).toHaveClass(/sticky/);
});

// 14. Verify the Features section
test('Features section', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('heading', { name: 'Features' })).toBeVisible();
});

// 15. Check if the navigation bar is present
test('navigation bar is visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.locator('nav')).toBeVisible();
});

// 16. Validate dark mode toggle
test('dark mode toggle works', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('button', { name: 'Toggle dark mode' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
});

// 17. Ensure homepage has a call-to-action
test('homepage call-to-action is visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('button', { name: 'Get started' })).toBeVisible();
});

// 18. Check if clicking the logo redirects to home
test('clicking logo redirects home', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('img', { name: 'Playwright' }).click();
  await expect(page).toHaveURL('https://playwright.dev/');
});

// 19. Verify the installation page loads
test('Installation page loads', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

// 20. Check that the mobile menu button is visible on small screens
test('mobile menu is visible on small screens', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('button', { name: 'Menu' })).toBeVisible();
});

// 21-50. Additional tests can cover:
// - Social media links in the footer
// - The presence of a "Try Playwright" section
// - The speed of page load (e.g., checking load times)
// - Accessibility compliance checks
// - Verifying anchor links within documentation pages
// - Testing different browser compatibility (e.g., Chromium, Firefox, WebKit)


