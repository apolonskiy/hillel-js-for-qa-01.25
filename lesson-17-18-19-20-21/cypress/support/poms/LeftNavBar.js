export default class LeftNavBar {
  pageUrl = undefined;

  navTabs = {
    garage: 'Garage',
    fuelExpnses: 'Fuel expenses',
    instructions: 'Instructions',
    profile: 'Profile',
    settings: 'Settings',
    logOut: 'Log out'
  }

  /**
 *  gets slector of left nav bar element by text, to be used with navTabs
 */
  selectGenericNavBarElement(textContent) {
    return cy.contains('[class="panel-layout"] a', textContent).click()
  }

}