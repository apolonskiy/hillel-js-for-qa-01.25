import { test, expect } from '../../fixtures/login-settings.fixture';


const setLocalStorageValue = async(page, keyValueObj) => {
  // eslint-disable-next-line
  await page.evaluate(({ key, value }) => localStorage.setItem(key, value) , keyValueObj);
};

const setSessionStorageValue = async(page, keyValueObj) => {
  // eslint-disable-next-line
  await page.evaluate(({ key, value }) => sessionStorage.setItem(key, value) , keyValueObj);
};

test.describe('FIXTURE_BASED: Settings page tests', {
  tag: ['@settings-fixture'],
},
() => {
  test('Can Update currency, units and assert on invalid Change Email or Password actions',
    {
      tag: '@settings-fixture',
    }, async({ settingsPage }) => {
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
      });
    });
});