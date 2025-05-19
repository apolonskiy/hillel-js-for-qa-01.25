import { test, expect, request as apiReuqest } from '@playwright/test';
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
  tag: ['@settings-api'],
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

  test('API INTERCEPTION: Can Update currency, units and assert on invalid Change Email or Password actions',
    {
      tag: '@settings-api',
    }, async({ baseURL, page }) => {

      // EXAMPLE FOR WATCHING ALL REQUESTS
      // ------
      // settingsPage.page.on('request', request => {
      //   if(request.url().includes('/password')){
      //     console.log('>>', request.method(), request.url());
      //   }
          
      // });
      // settingsPage.page.on('response', response => {
      //   if(response.url().includes('/password')){
      //     console.log('<<', response.status(), response.url())
      //   }
      // });

      // ---------------------------------
      // WAIT FOR PARTICULAR REQUEST OR REPONSE
        
      await test.step('Initial assertion of default state', async() => {
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
        // ---------
        // Intercepting requests
        const settingsPostRequest = settingsPage.page.waitForRequest(`${baseURL}/api/users/settings`, { timeout: 10000 });
        const settingsPostRequest2 = settingsPage.page.waitForRequest(/\/api\/users\/settings$/gi);
        const settingsPostRequest3 = settingsPage.page.waitForRequest(request => 
          request.url().endsWith('/api/users/current') && request.method() === 'GET'
        );
  
        const settingsPostResponse = page.waitForResponse('**/api/users/settings');
        const settingsPostResponse2 = settingsPage.page.waitForResponse(/\/api\/users\/settings$/gi);
        const settingsPostResponse3 = settingsPage.page.waitForResponse(response => 
          response.url().endsWith('/api/users/current') && response.request().method() === 'GET'
        );


        await settingsPage.updateMetrics('EUR', 'ml');
        await expect(settingsPage.selectors.snackBar('Currency changed')).toBeVisible();
        await expect(settingsPage.selectors.snackBar('Units of distance changed')).toBeVisible();
        
        // get all requests finished
        const req1 = await settingsPostRequest;
        const req2 = await settingsPostRequest2;
        const req3 = await settingsPostRequest3;

        // get all requests finished
        const res1 = await settingsPostResponse;
        const res2 = await settingsPostResponse2;
        const res3 = await settingsPostResponse3;

        // -------------
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



  test('API MOCKING: Can Update currency, units and assert on invalid Change Email or Password actions',
    {
      tag: '@settings-api',
    }, async({ baseURL, page }) => {
      await settingsPage.openPage();
      await settingsPage.page.waitForTimeout(1000);
      const evaluateValues = { key: 'settingsKey', value: 'settingsValue' };
      await setLocalStorageValue(settingsPage.page, evaluateValues);
      await setSessionStorageValue(settingsPage.page, evaluateValues);
      //eslint-disable-next-line
        const localStorValue = await settingsPage.page.evaluate(({key}) => localStorage.getItem(key), { key: 'settingsKey' });


      // MOCK CURRENT GET REQUEST
      // --------------
      // with continue - did not work because headers are bypassed automatically, could not break
      // await page.route('**/api/users/current', async(route, request) => {
      //   // Override headers
      //   const headers = {
      //     Cookie: 'invalid', 
      //     cookie: 'invalud',
      //     foo: 'bar'
      //   };
      //   console.log(headers);
      //   await route.continue({ headers });
      // });

      // ------------
      // with fulfill only
      // await page.route('**/api/users/current', async route => {
      //   await route.fulfill({ status: 200, json: {
      //     'status': 'ok',
      //     'data': {
      //       'userId': 'myId',
      //       'currency': 'gbp',
      //       'distanceUnits': 'ml',
      //       'photoFilename': 'user-1745860467227.jpg'
      //     }
      //   },
      //   contentType: 'application/json',
      //   });
      // });

      //-----------------
      // with fulfill with fetch
      // await page.route('**/api/users/current', async route => {

      //   const response = await route.fetch();
      //   const json = await response.json();

      //   json.data.currency = 'gbp';
      //   json.data.distanceUnits = 'ml';
      //   await route.fulfill({ response, json });
      // });

      //----------
      // fallback 
      // await page.route('**/api/users/current', async route => {
      //   // Runs last.
      //   await route.abort();
      // });
      // await page.route('**/api/users/current', async route => {
      //   // Runs second.
      //   await route.fallback();
      // });
      // await page.route('**/api/users/current', async route => {
      //   // Runs first.
      //   await route.fallback();
      // });


      await settingsPage.page.reload();

      await page.pause();
      // eslint-disable-next-line
        await settingsPage.page.evaluate(({key}) => localStorage.removeItem(key), { key: 'settingsKey' });
      await settingsPage.page.waitForTimeout(2000);
      await settingsPage.isCurrencySelected('USD');
      await settingsPage.areUnitsSelected('km');


      // -------
      // MOCK CURRENT GET REQUEST END

      // ---------
      // Intercepting requests

      await settingsPage.updateMetrics('EUR', 'ml');
      await expect(settingsPage.selectors.snackBar('Currency changed')).toBeVisible();
      await expect(settingsPage.selectors.snackBar('Units of distance changed')).toBeVisible();
        
      // -------------
      await settingsPage.page.reload();
      await settingsPage.isCurrencySelected('EUR');
      await settingsPage.areUnitsSelected('ml');

  

      await settingsPage.changeEmail();
      await expect(settingsPage.selectors.validationError('Email required')).toBeVisible();
      await expect(settingsPage.selectors.validationError('Password required')).toBeVisible();




      await settingsPage.changeEmail();
      await expect(settingsPage.selectors.validationError('Email required')).toBeVisible();
      await expect(settingsPage.selectors.validationError('Password required')).toBeVisible();





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


  test('API REQUESTS: Can Update currency, units and assert on invalid Change Email or Password actions',
    {
      tag: '@settings-api',
    }, async({ baseURL, page, httpCredentials, request: apiClientTest }) => {

      const apiClient = await apiReuqest.newContext({ httpCredentials });

      // LOGIN MADE IN SAME API CLINET (context) - automatically sets the cookie / headers for all further requests
      // const loginResp = await apiClient.post('/api/auth/signin', { data: {
      //   email: process.env.USER_NAME,
      //   password: process.env.USER_PASSWORD
      // } });
      // console.log(await loginResp.json());

      const allCookies = (await page.context().cookies()).reduce((acc, curr) => {
        return `${acc} ${curr.name}=${curr.value};`;
      }, '');


      const updateCurrency =  await apiClient.put('/api/users/settings', { data: {
        currency: 'gbp',
      }, headers: {
        cookie: allCookies
      } });
      const updateDistance = await apiClient.put('/api/users/settings', { data: {
        distanceUnits: 'ml',
      }, headers: {
        cookie: allCookies
      } });


      // LOGIN MADE IN SAME API CLINET (context) - automatically sets the cookie / headers for all further requests
      // const loginResp = await apiClient.post('/api/auth/signin', { data: {
      //   email: process.env.USER_NAME,
      //   password: process.env.USER_PASSWORD
      // } });
      // console.log(await loginResp.json());

      const allCookiesTest = (await page.context().cookies()).reduce((acc, curr) => {
        return `${acc} ${curr.name}=${curr.value};`;
      }, '');
      console.log(allCookies);

      const updateCurrencyTest =  await page.request.put('/api/users/settings', { data: {
        currency: 'gbp',
      } });
      const updateDistanceTest = await apiClientTest.put('/api/users/settings', { data: {
        distanceUnits: 'ml',
      } });

    });
});