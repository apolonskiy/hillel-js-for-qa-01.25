import { test, expect, request } from '@playwright/test';
import { SettingsPage } from '../poms/qaAutoPoms/pages';
import { LeftNavBar } from '../poms/qaAutoPoms/sharedComponents';


let settingsPage;
let navBar;
test.describe('Settings page tests', () => {
  test.beforeEach(async({ page, context }) => {
    settingsPage = new SettingsPage(page);
    navBar = new LeftNavBar(page);
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
    // await settingsPage.openPage();
    await navBar.selectNavItem('settings');
    await settingsPage.page.reload();
    await settingsPage.page.pause();
    await settingsPage.page.waitForTimeout(2000);
    expect(await settingsPage.isCurrencySelected('USD')).toBeTruthy();
    expect(await settingsPage.areUnitsSelected('km')).toBeTruthy();
    await settingsPage.updateMetrics('EUR', 'ml');
    await expect(settingsPage.selectors.snackBar('Currency changed')).toBeVisible();
    await expect(settingsPage.selectors.snackBar('Units of distance changed')).toBeVisible();
    expect(await settingsPage.isCurrencySelected('EUR')).toBeTruthy();
    expect(await settingsPage.areUnitsSelected('ml')).toBeTruthy();

    await settingsPage.changeEmail();
    await expect(settingsPage.selectors.validationError('Email required')).toBeVisible();
    await expect(settingsPage.selectors.validationError('Password required')).toBeVisible();

    await settingsPage.changePassword('testHillel1!', 'testHillel1!');
    await expect(settingsPage.selectors.snackBar('New password should not be the same')).toBeVisible();
  });
});