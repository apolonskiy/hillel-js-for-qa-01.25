import { BasePage } from '../basePoms';
export default class Header extends BasePage {
  selectors = {
    headerLogo: this.page.locator('a[class="header_logo"]'),
    // items: garage, expsenses, instructions
    headerTab: (tabName) => this.page.locator(`header nav[class*="header_nav"] a[routerlink="/panel/${tabName}"]`),
    userIconButton: this.page.locator('button[id="userNavDropdown"]'),
    // items: garage, expsenses, instructions, profile, settins
    userMenuItem: (itemName) => this.page.locator(`header nav[class*="user-nav_menu"] a[routerlink="/panel/${itemName}"]`),
    logoutButton: this.page.locator('header nav[class*="user-nav_menu"] button', { hasText: 'Logout' }),
    userMenuNavContainer: this.page.locator('header nav[class*="user-nav_menu"]')
  };

  async clickLogo() {
    await this.selectors.headerLogo.click();
  }

  // items: garage, expsenses, instructions
  async selectTab(tabName) {
    await this.selectors.headerTab(tabName).click();
  }

  // items: garage, expsenses, instructions
  async isTabSelected(tabName) {
    const tabClass = await this.selectors.headerTab(tabName).getAttribute('class');
    return tabClass.includes('-active');
  }

  async clickUserIcon(){
    await this.selectors.userIconButton.click();
  }

  async isUserMenuVisible(waitTime = 1500){
    return this.selectors.userMenuNavContainer.isVisible({ timeout: waitTime });
  }

  // items: garage, expsenses, instructions, profile, settins
  async clickUserMenuItem(itemName) {
    if(!await this.isUserMenuVisible()){
      await this.clickUserIcon();
    }
    await this.selectors.userMenuItem(itemName).click();
  }

  async clickLogOut(){
    if(!await this.isUserMenuVisible()){
      await this.clickUserIcon();
    }
    await this.selectors.logoutButton.click();
  }
}