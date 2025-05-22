// @ts-nocheck
import { defineConfig, devices } from '@playwright/test';
import dotenv from  'dotenv';
// import * as path from 'path';
dotenv.config({ path: '.env.test' });
// dotenv.config({path: `./configs/.env.${process.env.TEST_ENV}`});
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

// console.log(process.env.BASE_FILE)
// console.log(process.env.NON_BASE_FILE)
/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests-qaauto',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 1, //1, 
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: [['html', { open: 'always', outputFolder: 'html-report' }]],
  // reporter: [['blob', { outputFile: `./blob-report/report-${process.env.NODE_INDEX}.zip` }]],
  reporter: process.env.TESTOMATIO ? [
    ['list'],
    ['html', { open: 'never' }],
    [
      '@testomatio/reporter/lib/adapter/playwright.js',
      {
        apiKey: process.env.TESTOMATIO,
      },
    ],
  ] : [['list'] ,['html', { open: 'never' }]] ,
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  expect: { 
    timeout: 5_000,
    toHaveScreenshot: {
      // An acceptable amount of pixels that could be different, unset by default.
      maxDiffPixels: 10,
    },

  },

  use: {
    baseURL: process.env.BASE_URL || 'https://qauto.forstudy.space',
    testIdAttribute: 'data-testid',
    actionTimeout: 4000,
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    trace: 'on',
    httpCredentials: {
      username: 'guest',
      password: 'welcome2qauto',
    },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },

    { name: 'setup', testMatch: /.*\.setup\.js/, testDir: './setup' },
    {
      name: 'Google Chrome Setup',
      use: { ...devices['Desktop Chrome'], channel: 'chrome', storageState: 'session-storage.json' },
      dependencies: ['setup']
    },

    {
      name: 'Chromium Setup',
      use: { ...devices['Desktop Chrome'], storageState: 'session-storage.json' },
      dependencies: ['setup']
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

