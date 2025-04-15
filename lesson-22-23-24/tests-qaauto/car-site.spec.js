import { test, expect } from '@playwright/test';
import { Header, LeftNavBar } from '../poms/qaAutoPoms/sharedComponents';

let header;
let navBar;

test.describe('CodeGen Test', () => {
  test.beforeEach(async({ page }) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
  });

  test('Verify auto-generated code', async({ page }) => {
    await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('hillel-1@aaa.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('testHillel1!');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByRole('link', { name: ' Garage' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Add car' })).toBeVisible();
    await page.getByRole('link', { name: ' Profile' }).click();
    await expect(page.getByRole('button', { name: 'Edit profile' })).toBeVisible();
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Edit profile' }).click();
    await page.locator('input[name="photo"]').click();
    await page.locator('input[name="photo"]').setInputFiles('./test-data/images/profile-image.jpeg');
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByText('User profile has been updated')).toBeVisible();
  });
});


test.use({
  httpCredentials: {
    username: 'guest',
    password: 'welcome2qauto',
  },
});

test.describe('Share component tests', () => {
  test.beforeEach(async({ page }) => {
    header = new Header(page);
    navBar = new LeftNavBar(page);
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('hillel-1@aaa.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('testHillel1!');
    await page.getByRole('button', { name: 'Login' }).click();
  });

  test('Can click all header buttons with expreted redirects', async() => {
    // const headerTabs = ['garage', 'expenses', 'instructions'];
    // for(const tab of headerTabs){
    //   await header.selectTab(tab);
    //   expect(await header.isTabSelected(tab)).toBeTruthy();
    // // TODO: make assertion to regExp based on tab
    // // await expect(header.page).toHaveURL(/panel\/expenses/);
    // }
    expect(await header.isTabSelected('garage')).toBeTruthy();
    await expect(header.page).toHaveURL(/panel\/garage/);

    await header.selectTab('expenses');
    expect(await header.isTabSelected('expenses')).toBeTruthy();
    await expect(header.page).toHaveURL(/panel\/expenses/);

    await header.selectTab('instructions');
    expect(await header.isTabSelected('instructions')).toBeTruthy();
    await expect(header.page).toHaveURL(/panel\/instructions/);

    await header.clickUserIcon();
    await header.clickUserMenuItem('garage');
    expect(await header.isTabSelected('garage')).toBeTruthy();
    await expect(header.page).toHaveURL(/panel\/garage/);

    await header.clickUserMenuItem('expenses');
    expect(await header.isTabSelected('expenses')).toBeTruthy();
    await expect(header.page).toHaveURL(/panel\/expenses/);

    await header.clickUserMenuItem('instructions');
    expect(await header.isTabSelected('instructions')).toBeTruthy();
    await expect(header.page).toHaveURL(/panel\/instructions/);

    await header.clickUserMenuItem('profile');
    await expect(header.page).toHaveURL(/panel\/profile/);

    await header.clickUserMenuItem('settings');
    await expect(header.page).toHaveURL(/panel\/settings/);
  });

  test('Can click all nav bar buttons with expreted redirects', async() => {
    expect(await navBar.isNavItemSelected('garage')).toBeTruthy();
    await expect(header.page).toHaveURL('/panel/garage');

    await navBar.selectNavItem('expenses');
    expect(await navBar.isNavItemSelected('expenses')).toBeTruthy();
    await expect(navBar.page).toHaveURL(/panel\/expenses/);

    await navBar.selectNavItem('instructions');
    expect(await navBar.isNavItemSelected('instructions')).toBeTruthy();
    await expect(navBar.page).toHaveURL(/panel\/instructions/);

    await navBar.selectNavItem('profile');
    expect(await navBar.isNavItemSelected('profile')).toBeTruthy();
    await expect(navBar.page).toHaveURL(/panel\/profile/);

    await navBar.selectNavItem('settings');
    expect(await navBar.isNavItemSelected('settings')).toBeTruthy();
    await expect(navBar.page).toHaveURL(/panel\/settings/);
  });
});