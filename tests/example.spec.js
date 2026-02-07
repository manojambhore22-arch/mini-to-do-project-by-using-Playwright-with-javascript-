// import { test, expect } from '@playwright/test';

// test('homepage has title and docs link', async ({ page }) => {
//   await page.goto('https://demo.playwright.dev/todomvc/#/');
//   await expect(page).toHaveTitle(/TodoMVC/);
  
// });
import { test, expect } from '@playwright/test';

test('TodoMVC demo test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');

  
  await page.getByPlaceholder('What needs to be done?').fill('to do shopping');
  await page.getByPlaceholder('What needs to be done?').press('Enter');

  await page.getByPlaceholder('What needs to be done?').fill('to walk');
  await page.getByPlaceholder('What needs to be done?').press('Enter');

  await page.getByPlaceholder('What needs to be done?').fill('to do office work');
  await page.getByPlaceholder('What needs to be done?').press('Enter');

  await page.getByPlaceholder('What needs to be done?').fill('to do cdac');
  await page.getByPlaceholder('What needs to be done?').press('Enter');

  
  await expect(page.getByText('to do shopping')).toBeVisible();

  
  // await page.getByRole('listitem', { name: 'to do shopping' })
  //   .getByRole('checkbox')
  //   .check();

 
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'All' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();
});