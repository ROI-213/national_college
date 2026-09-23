import { test, expect } from '@playwright/test';
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

test('admissions form submission and admin panel validation', async ({ page }) => {
  test.setTimeout(120000);

  // Generate unique test lead details
  const timestamp = Date.now();
  const leadName = `Auto Test Lead ${timestamp}`;
  const leadEmail = `auto.test.lead.${timestamp}@example.com`;

  // Create temporary files for upload
  const file10thPath = path.resolve('temp_tenth.pdf');
  const file12thPath = path.resolve('temp_twelfth.pdf');
  const filePhotoPath = path.resolve('temp_photo.jpg');

  fs.writeFileSync(file10thPath, 'dummy pdf 10th card content');
  fs.writeFileSync(file12thPath, 'dummy pdf 12th card content');
  fs.writeFileSync(filePhotoPath, 'dummy photo image content');

  try {
    console.log('Navigating to Online Admission Application page...');
    await page.goto('http://localhost:8178/admissions/online-application', { waitUntil: 'networkidle' });

    // Fill Personal Details
    console.log('Filling personal details...');
    await page.getByPlaceholder('Enter full name').fill(leadName);
    
    // Select Gender
    await page.click('button:has-text("Select Gender")');
    await page.click('[role="option"]:has-text("Male")');

    // DOB
    await page.locator('input[type="date"]').fill('2004-05-15');

    // Aadhaar
    await page.getByPlaceholder('12-digit Aadhaar').fill('123456789012');

    // Category
    await page.click('button:has-text("Select Category")');
    await page.click('[role="option"]:has-text("General")');

    // Nationality, Religion, Caste, Blood Group
    await page.getByPlaceholder('e.g. Indian').fill('Indian');
    await page.getByPlaceholder('Enter religion').fill('Hindu');
    await page.getByPlaceholder('Enter caste').fill('General');
    await page.click('button:has-text("Select Blood Group")');
    await page.click('[role="option"]:has-text("O+")');

    // Contact
    await page.getByPlaceholder('10-digit mobile').fill('9998887776');
    await page.getByPlaceholder('email@example.com').fill(leadEmail);
    await page.getByPlaceholder('Parent/Guardian name').fill('Parent Tester');
    await page.getByPlaceholder('Parent contact').fill('9998887775');

    // Address
    await page.getByPlaceholder('Full permanent address with pin code').fill('123 Automated St, Bangalore, Karnataka, 560004');

    // Academic Details - 10th Standard
    console.log('Filling academic details...');
    await page.getByPlaceholder('e.g. CBSE, ICSE, State Board').fill('CBSE Board');
    await page.getByPlaceholder('e.g. 2022').fill('2020');
    await page.getByPlaceholder('e.g. 85% or 8.5 CGPA').fill('95%');

    // Academic Details - 12th Standard
    await page.getByPlaceholder('e.g. PUC Board, CBSE').fill('CBSE Board');
    await page.getByPlaceholder('e.g. 2024').fill('2022');
    await page.click('button:has-text("Select Stream")');
    await page.click('[role="option"]:has-text("Science")');
    await page.getByPlaceholder('e.g. 78% or 7.8 CGPA').fill('92%');

    // Course Selection
    console.log('Selecting course...');
    await page.click('button:has-text("Select Course")');
    await page.click('[role="option"]:has-text("BCA")');
    await page.click('button:has-text("Select Medium")');
    await page.click('[role="option"]:has-text("English")');

    // Upload files
    console.log('Uploading temporary documents...');
    const fileInputs = page.locator('input[type="file"]');
    
    // Attach 10th Marks Card
    await fileInputs.nth(0).setInputFiles(file10thPath);
    // Attach 12th Marks Card
    await fileInputs.nth(1).setInputFiles(file12thPath);
    // Attach Passport Size Photograph
    await fileInputs.nth(5).setInputFiles(filePhotoPath);

    // Declaration Checkbox
    console.log('Accepting declaration and submitting application...');
    await page.click('label[for="declaration"]');

    // Click Submit
    await page.getByRole('button', { name: 'Submit Application' }).click();

    // Verify application submission success
    console.log('Verifying submission success toast and UI...');
    await expect(page.locator('[data-sonner-toast]').getByText('Application Submitted!')).toBeVisible({ timeout: 30000 });
    await expect(page.locator('h2')).toContainText('Application Submitted Successfully!');

    // Go to Admin Panel
    console.log('Navigating to admin panel...');
    await page.goto('http://localhost:8178/admin', { waitUntil: 'networkidle' });

    // Wait for login form
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator('input[type="password"]')).toBeVisible();

    console.log('Entering admin credentials...');
    await page.locator('input[type="email"]').fill('admin@ncbgudi.com');
    await page.locator('input[type="password"]').fill('Common2!3!!');

    console.log('Clicking login button...');
    await page.getByRole('button', { name: 'Sign In to Admin Panel' }).click();

    // Verify dashboard loaded
    console.log('Waiting for admin dashboard to load...');
    await expect(page).toHaveURL(/.*\/admin\/dashboard/, { timeout: 20000 });
    await expect(page.locator('header')).toContainText('Enquiries');

    // Search for our newly created lead
    console.log(`Searching for lead "${leadName}"...`);
    await page.getByPlaceholder('Search by name, email, or phone...').fill(leadName);

    // Wait for the table row with the name to appear
    console.log('Opening lead details modal...');
    const row = page.locator('tr', { hasText: leadName }).first();
    await expect(row).toBeVisible({ timeout: 10000 });

    // Click view details
    await row.getByRole('button', { name: 'View' }).click();

    // Verify lead details modal opens and shows files
    console.log('Verifying uploaded documents in detail modal...');
    await expect(page.locator('[role="dialog"] h2')).toContainText(leadName);

    const dialog = page.locator('[role="dialog"]');
    await expect(dialog.getByText('Documents')).toBeVisible();

    // Verify document names are present
    await expect(dialog.getByText('temp_tenth.pdf')).toBeVisible({ timeout: 10000 });
    await expect(dialog.getByText('temp_twelfth.pdf')).toBeVisible();
    await expect(dialog.getByText('temp_photo.jpg')).toBeVisible();

    // Verify View and Download options exist
    const docRow = dialog.locator('div', { hasText: 'temp_tenth.pdf' }).first();
    await expect(docRow.getByRole('link', { name: 'View' })).toBeVisible();
    await expect(docRow.getByRole('button', { name: 'Download' })).toBeVisible();

    console.log('Success! Form submission, file upload, and admin dashboard integration verified.');
  } finally {
    // Clean up temporary files from local disk
    console.log('Cleaning up temporary files...');
    if (fs.existsSync(file10thPath)) fs.unlinkSync(file10thPath);
    if (fs.existsSync(file12thPath)) fs.unlinkSync(file12thPath);
    if (fs.existsSync(filePhotoPath)) fs.unlinkSync(filePhotoPath);
  }
});
