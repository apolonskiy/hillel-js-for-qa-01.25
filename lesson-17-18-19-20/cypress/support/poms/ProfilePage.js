import LeftNavBar from './LeftNavBar'
export default class ProfilePage {
  pageUrl = '/panel/profile';

  navBar = new LeftNavBar();

  selectProfile(){
    this.navBar.selectGenericNavBarElement(this.navBar.navTabs.profile);
  }
 
  get editProfileButton(){
    // eslint-disable-next-line
    cy.wait(500)
    return cy.contains('button', 'Edit profile')
  }

  get profileImageInput(){
    return cy.get('input[id="editProfilePhoto"]')
  }

  updateProfileImage(imagePath){
    this.editProfileButton.click()
    this.profileImageInput.selectFile(imagePath)
  }

}