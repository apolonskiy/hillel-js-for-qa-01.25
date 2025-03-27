import {LandingPage, ProfilePage} from '../../support/poms'
const landingPage = new LandingPage();
const profilePage = new ProfilePage();

describe('Multi page checks', () => {
  beforeEach(() => {
    cy.visit('')
  })
  //   it('Click on link which leads to other page', () => {

  //     // cy.get('a[href*="linkedin"]').invoke('removeAttr', 'target');
  //     cy.get('a[href*="linkedin"]').click()
  //     // cy.origin('www.linkedin.com', () => {
  //     //   cy.url().should('not.equal', 'https://qauto.forstudy.space')
  //     // })

  //     cy
  //       .puppeteer('switchToTabAndGetContent')
  //       .should('contain', 'https://www.linkedin.com')
  //   })

  //   it('linked in navi', () => {
  //     cy.visit('https://www.linkedin.com');
  //   })

  it.skip('Drag n Drop check with native Cypress and extension', () => {
    cy.visit('https://devexpress.github.io/testcafe/example/');
    cy.get('[data-testid="tried-testcafe-checkbox"]').click()

    cy.get('[id="slider"]').invoke('css', 'width')
      .then(str => {
        cy.get('[id="slider"] span')
          .trigger('mousedown', { which: 1, pageX: 0, pageY: 0 })
          .trigger('mousemove', { which: 1, pageX: parseInt(str) / 10 * 5, pageY: 0 })
          .trigger('mouseup')
      })
    cy.get('[id="slider"] span').drag('[class="slider-value"]:nth-of-type(4)')
  })

  const selector = {
    signInButton: {selector: 'button', textContent: 'Sign In'}
  }
  it('Login and upload image to profile', () => {
    cy.window().then(win => {
      expect(win.scrollY).to.equal(0)
        
    })
    landingPage.headerAboutButton.click()
    cy.wait(1000)
    cy.window().then(win => {
      expect(win.scrollY).to.be.greaterThan(0)
    })

    // cy.contains(selector.signInButton.selector, selector.signInButton.textContent).click()
    // cy.get('form input[name="email"]').type('hillel-1@aaa.com');
    // cy.get('form input[name="password"]').type('testHillel1!');
    // cy.contains('button', 'Login').click()
    ///----------
    // cy.login('hillel-1@aaa.com', 'testHillel1!')
    //-------
    landingPage.executeLogin('hillel-1@aaa.com', 'testHillel1!')
    profilePage.selectProfile();
    profilePage.updateProfileImage('./cypress/fixtures/images/profile-image.jpeg')
  })
})