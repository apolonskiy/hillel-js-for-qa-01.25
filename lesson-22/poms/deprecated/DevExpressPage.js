import { expect } from '@playwright/test';
import BasePage from './BasePage';

export default class DevExpressPage extends BasePage{
  selectors = {
    nameInput: this.page.locator('input[data-testid="name-input"]'),
    checkboxesFieldsetLegend: this.page.locator('fieldset legend', { hasText: 'Which features are important to you' }),
    supportLabel: this.page.getByLabel('Support for testing on remote devices'),
    interfaceSelect: this.page.locator('[data-testid="preferred-interface-select"]')
  };

  async updateInterfaceSelectValue(value) {
    await expect(this.selectors.interfaceSelect).not.toHaveValue(value);
    await this.selectors.interfaceSelect.selectOption(value);
    await expect(this.selectors.interfaceSelect).toHaveValue(value);
  }
}