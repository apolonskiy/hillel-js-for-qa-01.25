export default class SettingsUtils {
  /**
    * @param {import('@playwright/test').Page} page
    */
  constructor(page) {
    this.page = page;
  }

  /**
     * 
     * @param {'eur' | 'gbp' | 'usd' | 'uah' | 'pln'} currency, 
     * @param {'km' | 'ml'} distanceUnits 
     */
  async updateSettings(currency, distanceUnits) {
    await this.page.request.put('/api/users/settings', { data: {
      currency,
    } });
    await this.page.request.put('/api/users/settings', { data: {
      distanceUnits,
    } });
  }

}