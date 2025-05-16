import { test, expect } from '@playwright/test';
import { SettingsPage, LandingPage } from '../poms/qaAutoPoms';
import { SettingsUtils } from '../utils';


let settingsPage;
let landingPage;
let signInModal;
let settingsUtils;

const setLocalStorageValue = async(page, keyValueObj) => {
  // eslint-disable-next-line
  await page.evaluate(({ key, value }) => localStorage.setItem(key, value) , keyValueObj);
};

const setSessionStorageValue = async(page, keyValueObj) => {
  // eslint-disable-next-line
  await page.evaluate(({ key, value }) => sessionStorage.setItem(key, value) , keyValueObj);
};

test.describe('Settings page tests', {
  tag: ['@settings', '@profile'],
},
() => {
  test.beforeEach(async({ page, baseURL }) => {
    settingsPage = new SettingsPage(page);
    landingPage = new LandingPage(page);
    // signInModal = new SignInModal(page);
    settingsUtils = new SettingsUtils(page);

    await page.goto(baseURL);
    signInModal = await landingPage.clickSignInButton();
    await signInModal.executeLogin();
    // ___________
    // Commented out below for another example;
    //_________
    // const allCookies = await context.cookies();
    // const apiReuqest = await request.newContext({ storageState: {
    //   cookies: allCookies
    // } });
    // await apiReuqest.put('/api/users/settings', { data: {
    //   currency: 'usd',
    // } });
    // await page.request.put('/api/users/settings', { data: {
    //   distanceUnits: 'km',
    // } });
    await settingsUtils.updateSettings('usd', 'km');
  });

  test.afterEach(async() => {
    await settingsUtils.updateSettings('usd', 'km');
  });

  test('Can Update currency, units and assert on invalid Change Email or Password actions',
    {
      tag: '@settings-test',
    }, async() => {
      await test.step('Initial assertion of default state',async() => {
        await settingsPage.openPage();
        await settingsPage.page.waitForTimeout(1000);
        const evaluateValues = { key: 'settingsKey', value: 'settingsValue' };
        await setLocalStorageValue(settingsPage.page, evaluateValues);
        await setSessionStorageValue(settingsPage.page, evaluateValues);
        //eslint-disable-next-line
        const localStorValue = await settingsPage.page.evaluate(({key}) => localStorage.getItem(key), { key: 'settingsKey' });
        console.log('THIS IS FROM CONSOLE',localStorValue);
        await settingsPage.page.reload();
        // eslint-disable-next-line
        await settingsPage.page.evaluate(({key}) => localStorage.removeItem(key), { key: 'settingsKey' });
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

        await expect(settingsPage.selecotrs.changeEmailEmailInput).toBeDisabled()
      });
    });
});