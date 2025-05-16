import { test as base, expect } from '@playwright/test';
import { SettingsPage, LandingPage } from '../poms/qaAutoPoms';
import { SettingsUtils } from '../utils';

export const test = base.extend({
  settingsPage: async({ page, baseURL }, use) => {
    // before test
    const landingPage = new LandingPage(page);
    const settingsPage = new SettingsPage(page);
    const settingsUtils = new SettingsUtils(page);

    await page.goto(baseURL);
    const signInModal = await landingPage.clickSignInButton();
    await signInModal.executeLogin();
    await settingsUtils.updateSettings('usd', 'km');

    //for test
    await use(settingsPage);

    // after test
    await settingsUtils.updateSettings('usd', 'km');
  }
});

export { expect } from '@playwright/test';