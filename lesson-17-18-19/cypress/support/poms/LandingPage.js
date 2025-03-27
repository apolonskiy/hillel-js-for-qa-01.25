export default class LandingPage {
  pageUrl = '/'

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
    this.signInButton.click()
    this.signInFormEmailInput.type(email)
    this.signInFormPasswordInput.type(password)
    this.signInFormSignInButton.click()
  }
}