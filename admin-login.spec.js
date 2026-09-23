import { test, expect } from '@playwright/test';

test('admin login with new supabase credentials', async ({ page }) => {
  test.setTimeout(60000);

  console.log('Navigating to admin login page...');
  await page.goto('http://127.0.0.1:4173/admin', { waitUntil: 'networkidle' });

  // Wait for login form
  await expect(page.locator('input[type="email"]')).toBeVisible();
  await expect(page.locator('input[type="password"]')).toBeVisible();

  console.log('Entering new admin credentials...');
  await page.locator('input[type="email"]').fill('admin@ncbgudi.com');
  await page.locator('input[type="password"]').fill('Common2!3!!');

  console.log('Clicking login button...');
  await page.getByRole('button', { name: 'Sign In to Admin Panel' }).click();

  console.log('Waiting for navigation to dashboard...');
  await expect(page).toHaveURL(/.*\/admin\/dashboard/, { timeout: 15000 });

  console.log('Verifying dashboard page loaded...');
  await expect(page.locator('header')).toContainText('Enquiries');
  
  console.log('Success! Admin login test passed.');
});
