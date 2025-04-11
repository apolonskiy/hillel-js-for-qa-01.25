// @ts-check
import { test, expect } from '@playwright/test';

test.describe('First tests', () => {
  test.beforeAll(async() => {
    console.log('test');
    console.log('process.env.TEXT_ENVIRONMENT', process.env.TEXT_ENVIRONMENT);
  });
  test.beforeEach(async({ page }) => {
    await page.goto('https://playwright.dev/');
  });

  test('has title', async({ page, context, browser, request }) => {
  // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('get started link', async({ page }) => {

    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });

  // PSEUDO CODE
  // test('Two pages test', async ({ page, context}) => {
  //   await page.locator('buttonLinkedIn').click()
  //   await page.waitForTimeout(3000);
  //   // solution 2
  //   let counter = 0
  //   let pages = context.pages()// -> page[0]
  //   while(pages.length != 2 && counter < 10) {
  //     //sleep(1000)
  //     pages = context.pages()
  //     counter++;
  //   }
  //   const newPage = pages[1];
  //   newPage.locator('someSelectorOnPage2').click()
  
  // });

});

