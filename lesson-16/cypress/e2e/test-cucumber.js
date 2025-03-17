const { Given, When, Then, Step } = require('@badeball/cypress-cucumber-preprocessor');

Given('I render web-page with basic auth', () => {
    cy.visit('https://qauto.forstudy.space/', {auth: {username: 'guest' ,password: 'welcome2qauto'} })
});

When('I click Guest Login', () => {
  cy.get('button').contains('Guest log in').click();
});

Then('I have to be redirected to Garage page', () => {
  cy.url().should('equals', 'https://qauto.forstudy.space/panel/garage');
});