export default class LandingPage {
  pageUrl = '/'

  selectors = {
    // headerHomeBtn: cy.contains('nav a', 'Home'), // DO NOT DO THIS
    headerHomeButton: () => cy.contains('nav a', 'Home'),
    headerAboutButton: () => cy.contains('nav button', 'About'),
    signUpButton: () => cy.contains('button', 'Sign up'),
    signInButton: () => cy.contains('button', 'Sign In'),
    signInFormEmailInput: () => cy.get('form input[name="email"]'),
    signInFormPasswordInput: () => cy.get('form input[name="password"]'),
    signInFormSignInButton: () => cy.contains('button', 'Login'),
    signInFormWorngCredsAlert: () => cy.contains('form p[class*="alert-danger"]', 'Wrong email or password')
  }

  get headerHomeButton() {
    return cy.contains('nav a', 'Home')
  }

  get headerAboutButton() {
    return cy.contains('nav button', 'About')
  }

  get signUpButton() {
    return cy.contains('button', 'Sign up')
  }

  get signInButton() {
    return cy.contains('button', 'Sign In')
  }

  get signInFormEmailInput(){
    return cy.get('form input[name="email"]')
  }

  get signInFormPasswordInput(){
    return cy.get('form input[name="password"]')
  }

  get signInFormSignInButton(){
    return cy.contains('button', 'Login')
  }

  get signInFormCloseButton(){
    return cy.get('button[class="close"]')
  }

  //   clickHeaderHomeButton(){
  //     this.headerHomeButton.click();
  //     return this;
  //   }

  //   clickSignUpButton(){
  //     this.signUpButton.click;
  //     return this;
  //   }

  //   clickSignInButton(){
  //     this.signInButton.click;
  //     return this;
  //   }

  executeLogin(email, password){
    this.selectors.signInButton().click()
    this.signInFormEmailInput.type(email)
    this.signInFormPasswordInput.type(password)
    this.signInFormSignInButton.click()
  }
}