import LeftNavBar from './LeftNavBar'
export default class Garage {
  pageUrl = '/panel/garage';

  navBar = new LeftNavBar();

  selectGarage(){
    this.navBar.selectGenericNavBarElement(this.navBar.navTabs.garage);
  }

  selectors = {
    addCarButton: () => cy.contains('button[class*="btn-primary"]', 'Add car'),
    addCarDialogCarBrandselect: () => cy.get('select[id="addCarBrand"]'),
    addCarDialogCarModelSelect: () => cy.get('select[id="addCarModel"]'),
    addCarDialogCarMileageInput: () => cy.get('input[id="addCarMileage"]'),
    addCarDialogCancelButton: () => cy.contains('[class*="modal-footer"] button', 'Cancel'),
    addCarDialogAddButton: () => cy.contains('[class*="modal-footer"] button', 'Add'),
    genricCarElement: () => cy.get('li app-car'),
  }

  //**
  // * Create car
  // * @param carData = {
  //   carBrand: Audi,
  //   carModel: Q7,
  //   mileage: 123
  // }
  // */
  createCar(carData){
    this.selectors.addCarButton().should('be.visible').click();
    cy.wait(1000);
    this.selectors.addCarDialogCarBrandselect().select(carData.carBrand);
    cy.wait(1000);
    this.selectors.addCarDialogCarModelSelect().select(carData.carModel);
    this.selectors.addCarDialogCarMileageInput().type(carData.mileage);
    this.selectors.addCarDialogAddButton().click();
  }
 

}