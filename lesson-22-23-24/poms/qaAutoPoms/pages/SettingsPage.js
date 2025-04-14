import { BasePage } from '../basePoms';
export default class SettingsPage extends BasePage {
  constructor(page) {
    super(page, '/panel/settings');
  }

  selectors = {
    // EUR, GBP, USD, UAH, PLN
    currencyButton: (currency) => this.page.locator('//div[./h2[contains(text(),"Currency")]]//button', { hasText: currency }),
    // km, ml
    unitsOfDistanceButton: (units) => this.page.locator('//div[./h2[contains(text(),"Units of distance")]]//button', { hasText: units }),
    changeEmailEmailInput: this.page.locator('form input[id="emailChangeEmail"]'),
    changeEmailPasswordInput: this.page.locator('form input[id="emailChangePassword"]'),
    changeEmailSaveButton: this.page.locator('//form[.//h2[text()="Change email"]]//button'),
    changePasswordOldInput: this.page.locator('form input[id="passwordChangeOldPassword"]'),
    changePasswordNewInput: this.page.locator('form input[id="passwordChangePassword"]'),
    changePasswordNewRepeatedInput: this.page.locator('form input[id="passwordChangeRepeatPassword"]'),
    changePasswordButton: this.page.locator('//form[.//h2[text()="Change password"]]//button'),
    validationError: (errorText) => this.page.locator('div[class="invalid-feedback"] p', { hasText: errorText }),
    snackBar: (snackbarText) =>  this.page.locator('div[class*="alert"] p', { hasText: snackbarText })
  };

  async selectCurrency(currency) {
    await this.selectors.currencyButton(currency).click();
  }

  async selectUnits(units) {
    await this.selectors.unitsOfDistanceButton(units).click();
  }

  async updateMetrics(currency, units) {
    await this.selectCurrency(currency);
    await this.selectUnits(units);
  }

  async isCurrencySelected(currency){
    await this.page.waitForTimeout(350);
    const className = await this.selectors.currencyButton(currency).getAttribute('class');
    return className.includes('-active');
  }

  async areUnitsSelected(units){
    await this.page.waitForTimeout(350);
    const className = await this.selectors.unitsOfDistanceButton(units).getAttribute('class');
    console.log('className', className);
    return className.includes('-active');
  }

  async changeEmail(newEmail, password){
    newEmail && await this.selectors.changeEmailEmailInput.fill(newEmail);
    password && await this.selectors.changeEmailPasswordInput.fill(password);
    await this.selectors.changeEmailSaveButton.click();
  }

  async changePassword(oldPassword, newPassword) {
    oldPassword && await this.selectors.changePasswordOldInput.fill(oldPassword);
    newPassword && await this.selectors.changePasswordNewInput.fill(newPassword);
    newPassword && await this.selectors.changePasswordNewRepeatedInput.fill(newPassword);
    await this.selectors.changePasswordButton.click();
  }

  async isSnackbarVisible(expectedText){
    return this.selectors.snackBar(expectedText).isVisible();
  }

}