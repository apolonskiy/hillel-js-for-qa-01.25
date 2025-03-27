import { defineConfig } from "cypress";
import { setup, retry } from '@cypress/puppeteer'

export default defineConfig({
  retries: {
    runMode: process.env.CI ? 2 : 0,
    openMode: 0
  },
  video: true,
  // viewportHeight: 400,
  // viewportWidth: 600,
  e2e: {
    specPattern: 'cypress/e2e/**/*.test.{js,jsx,ts,tsx}',
    baseUrl: 'https://qauto.forstudy.space',
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message)
          return null
        },
      });
      setup({
        on,
        onMessage: {
          async switchToTabAndGetContent (browser, selector) {
            // In this message handler, we utilize the Puppeteer API to interact with the browser and the new tab that our Cypress tests has opened
            // Utilize the retry since the page may not have opened and loaded by the time this runs
            const page = await retry(async () => {
              // The browser will (eventually) have 2 tabs open: the Cypress tab and the newly opened tab
              // In Puppeteer, tabs and windows are called pages
              const pages = await browser.pages()
              console.log('AllPages', pages)
              // Try to find the page we want to interact with
              const page = pages.find((page) => page.url().includes('linkedin'))
              console.log('MyPage',page)

              // If we can't find the page, it probably hasn't loaded yet, so throw an error to signal that this function should retry
              if (!page) throw new Error('Could not find page')

              // Otherwise, return the page instance and it will be returned by the `retry` function itself
              return page
            })

            // Cypress will maintain focus on the Cypress tab within the browser. It's generally a good idea to bring the page to the front to interact with it.
            await page.bringToFront()

            const url = page.url()

            await page.close()

            // Return the paragraph text and it will be the value yielded by the `cy.puppeteer()` invocation in the spec
            return url
          },
        },
      })
      // implement node event listeners here
    },
  },
});
