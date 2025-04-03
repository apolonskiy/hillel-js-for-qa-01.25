import LandingPage from './LandingPage';

export default class LandingPageChild extends LandingPage {

  selectors = {
    // ...super.selectors WILL NOT WORK
    ...this.selectors,
    someNewSelector: () => cy.get('abc')
  }

  executeLogin(email, password) {
    super.executeLogin(email,password);
    //some addional logic
  }

}