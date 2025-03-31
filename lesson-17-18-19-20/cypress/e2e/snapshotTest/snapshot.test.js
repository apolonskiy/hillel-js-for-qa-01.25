import {LandingPage, ProfilePage} from '../../support/poms'
const landingPage = new LandingPage();
const profilePage = new ProfilePage();

describe('Snapshot tests', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('Landing, login and profile snapshot testing', () => {
    cy.wait(1500);
    cy.matchImageSnapshot('Landing page',{
      failureThreshold: 0.1, // allow up to 1% difference
      failureThresholdType: 'percent',
    });

    landingPage.signInButton.click();
    cy.wait(1500);
    cy.get('[class="modal-content"]').matchImageSnapshot('Login form',{
      failureThreshold: 0.1, // allow up to 1% difference
      failureThresholdType: 'percent',
    });
    landingPage.signInFormCloseButton.click();
    landingPage.executeLogin(Cypress.env('defaultUserEmail'), Cypress.env('defaultUserPassword'))
    profilePage.selectProfile();
    cy.wait(1500);
    cy.matchImageSnapshot('User profile',{
      failureThreshold: 0.1, // allow up to 1% difference
      failureThresholdType: 'percent',
    });
    profilePage.updateProfileImage('./cypress/fixtures/images/profile-image.jpeg')
  })
})