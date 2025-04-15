import { test, expect, request } from '@playwright/test';
import { SettingsPage } from '../poms/qaAutoPoms/pages';


let settingsPage;
test.describe('Settings page tests', () => {
  test.beforeEach(async({ page, context }) => {
    settingsPage = new SettingsPage(page);
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space');
    await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('hillel-1@aaa.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('testHillel1!');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForTimeout(1500);
    const allCookies = await context.cookies();
    const apiReuqest = await request.newContext({ storageState: {
      cookies: allCookies
    } });
    await apiReuqest.put('/api/users/settings', { data: {
      currency: 'usd',
    } });
    await page.request.put('/api/users/settings', { data: {
      distanceUnits: 'km',
    } });
  });

  test.afterEach(async({ page }) => {
    await page.request.put('/api/users/settings', { data: {
      currency: 'usd',
    } });
    await page.request.put('/api/users/settings', { data: {
      distanceUnits: 'km',
    } });
  });

  test('Can Update currency, units and assert on invalid Change Email or Password actions', async() => {
    await test.step('Initial assertion of default state',async() => {
      await settingsPage.openPage();
      await settingsPage.page.reload();
      await settingsPage.page.waitForTimeout(2000);
      await settingsPage.isCurrencySelected('USD');
      await settingsPage.areUnitsSelected('km');
    });

    await test.step('Update metrics and make sure it worked correctly',async() => {
      await settingsPage.updateMetrics('EUR', 'ml');
      await expect(settingsPage.selectors.snackBar('Currency changed')).toBeVisible();
      await expect(settingsPage.selectors.snackBar('Units of distance changed')).toBeVisible();
      await settingsPage.page.reload();
      await settingsPage.isCurrencySelected('EUR');
      await settingsPage.areUnitsSelected('ml');
    });
  
    await test.step('Verify change email validation errors',async() => {
      await settingsPage.changeEmail();
      await expect(settingsPage.selectors.validationError('Email required')).toBeVisible();
      await expect(settingsPage.selectors.validationError('Password required')).toBeVisible();
    });


    await test.step('Verify change email validation errors',async() => {
      await settingsPage.changeEmail();
      await expect(settingsPage.selectors.validationError('Email required')).toBeVisible();
      await expect(settingsPage.selectors.validationError('Password required')).toBeVisible();
    });


    await test.step('Verify change password validation errors and invalid payload',async() => {

      await settingsPage.changePassword();
      await expect(settingsPage.selectors.validationError('Old password required')).toBeVisible();
      await expect(settingsPage.selectors.validationError('New password required')).toBeVisible();
      await expect(settingsPage.selectors.validationError('Re-enter password required')).toBeVisible();

      await settingsPage.changePassword('faketest');
      await expect(settingsPage.selectors.validationError('Old password required')).toBeHidden();
      await expect(settingsPage.selectors.validationError('New password required')).toBeVisible();
      await expect(settingsPage.selectors.validationError('Re-enter password required')).toBeVisible();
  
      await settingsPage.changePassword('testHillel1!', 'testHillel1!');
      await expect(settingsPage.selectors.snackBar('New password should not be the same')).toBeVisible();
    });
  });
});