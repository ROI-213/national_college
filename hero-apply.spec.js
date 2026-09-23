import { test, expect } from '@playwright/test';
import { createClient } from '@supabase/supabase-js';

test('hero apply now opens dialog and stores record in apply online enquiries', async ({ page }) => {
  test.setTimeout(120000);

  const timestamp = Date.now();
  const email = `hero.apply.${timestamp}@example.com`;
  const name = `Hero Apply ${timestamp}`;

  await page.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' });
  await page.getByRole('button', { name: 'Apply Now' }).first().click();

  await expect(page.getByRole('heading', { name: 'Apply for Admission' })).toBeVisible();
  await page.locator('[role="dialog"]').getByPlaceholder('Enter your full name').fill(name);
  await page.locator('[role="dialog"]').getByPlaceholder('your.email@example.com').fill(email);
  await page.locator('[role="dialog"]').getByPlaceholder('+91 9876543210').fill('9876543210');
  await page.locator('[role="dialog"]').locator('input[type="date"]').fill('2002-01-01');
  await page.locator('[role="dialog"]').getByText('Select a program').click();
  await page.locator('[role="option"]').filter({ hasText: 'BCA' }).first().click();
  await page.locator('[role="dialog"]').getByPlaceholder('Enter your complete address').fill('Test address, Bengaluru');
  await page.locator('[role="dialog"]').getByPlaceholder('Any specific questions or requirements?').fill('Hero CTA admission test');
  await page.locator('[role="dialog"]').getByRole('button', { name: 'Submit Application' }).click();

  await expect(page.locator('[data-sonner-toast]').getByText('Application Submitted!')).toBeVisible();

  const supabase = createClient(
    'https://jiuunexjrmhpzrubjefr.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppdXVuZXhqcm1ocHpydWJqZWZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA0NzY5NjYsImV4cCI6MjA5NjA1Mjk2Nn0.b3dgImhslbIifiTsgevsAOf5y8tVmlrLMbg3mgEp1uI'
  );

  const { data, error } = await supabase
    .from('apply_online_enquiries')
    .select('id, full_name, email, mobile, course, source, status, created_at')
    .eq('email', email)
    .order('created_at', { ascending: false })
    .limit(1)
    .single();

  expect(error).toBeNull();
  expect(data?.full_name).toBe(name);
  expect(data?.course).toBe('BCA');
  expect(data?.source).toBe('hero_apply');
  expect(data?.status).toBe('Not Contacted');
});
