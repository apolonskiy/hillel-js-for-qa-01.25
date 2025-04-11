// @ts-check
import { test, expect } from '@playwright/test';
import { DevExpressPage } from '../poms/deprecated';

/** @type {DevExpressPage} */
let devExpressPage;

test.describe('First tests', () => {
  test.beforeEach(async({ page }) => {
    devExpressPage = new DevExpressPage(page);
    await page.goto('https://devexpress.github.io/testcafe/example/');
  });

  test('Get all selectors by different methods', async({ page }) => {
    //   const isSmthVisible = await page.locator('[input[data-testid="name-input"]').isVisible();
    //   expect(isSmthVisible).toBeTruthy()
    await expect(devExpressPage.selectors.nameInput).toBeVisible();
    await expect(devExpressPage.selectors.nameInput).toBeVisible();
    await expect.soft(devExpressPage.selectors.checkboxesFieldsetLegend).toBeVisible();
    await expect(devExpressPage.selectors.supportLabel).toBeVisible();
    await expect(page.getByText('I have tried TestCafe')).toBeVisible(); 
    await expect(page.getByTestId('tried-testcafe-checkbox')).toBeVisible();   
    await expect(page.locator('[data-testid="preferred-interface-select"]')).toBeVisible();     
  });

  test('Basic elements interactions', async({ page, context }) => {
    const expectedInputStr = 'This is QA school';
    await expect(page.locator('input[data-testid="name-input"]')).toHaveValue('');
    await page.locator('input[data-testid="name-input"]').fill(expectedInputStr);
    await expect(page.locator('input[data-testid="name-input"]')).toHaveValue(expectedInputStr);
    page.on('dialog', dialog => dialog.accept());
    await page.locator('[data-testid="populate-button"]').click();
    await expect(page.locator('input[data-testid="name-input"]')).toHaveValue('Peter Parker');

    const children = page.locator('//fieldset[descendant::legend[contains(text(),\'Which features are important to you:\')]]//input');
    const count = await children.count();
    for (let i = 0; i < count; i++) {
      await expect(children.nth(i)).not.toBeChecked();  
      await children.nth(i).click();
      await expect(children.nth(i)).toBeChecked();  
    }

    for (const input of await children.all()) {
      await expect(input).toBeChecked();  
      await input.click();
      await expect(input).not.toBeChecked();  
    }

    await devExpressPage.updateInterfaceSelectValue('JavaScript API');
    //  await expect(page.locator('[data-testid="preferred-interface-select"]')).toHaveValue('Command Line')
    //  await page.locator('[data-testid="preferred-interface-select"]').selectOption('JavaScript API')
    //  await expect(page.locator('[data-testid="preferred-interface-select"]')).toHaveValue('JavaScript API')

    await page.locator('[data-testid="tried-testcafe-checkbox"]').click();
    await page.locator('[class="slider-container"] span').dragTo(page.locator('[class*="slider-values"] div', { hasText: 5 }));

    // SCREENSHOT TESTING
    await page.locator('[class="slider-container"] span').dragTo(page.locator('[class*="slider-values"] div', { hasText: 8 }));
    await expect(page).toHaveScreenshot('PageAfterActions.png');

  });

});

