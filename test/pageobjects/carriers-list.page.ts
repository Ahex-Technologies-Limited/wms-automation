import Page from './page';

import { $, browser } from '@wdio/globals';
class CarriersListPage extends Page {
  public  get carriersList() {
        return $(`//span[@class='ml-2' and text()='Carriers']`);
    }  
    public get operationSideBar() { 
        return $(`//span[contains(@class, 'p-menuitem-text') and text()='Operations']`) ;
    } 
   public get carriersSideBar() {
        return $(`//span[contains(@class, 'p-menuitem-text') and text()='Carriers']`);
    }
   public get addCarriersButton() {
        return $(`//button[@class='p-element button_add justify-content-center p-button flex items-center outline-none w-full p-component' and @label='Add']//span[text()='Add']`);
    }  
   public get carrierName() {
        return $(`//input[@id='name' and @name='name' and @formcontrolname='name' and @placeholder='Enter']`);
    }    
   public get carrierType() {
        return $(`//p-multiselect[@formcontrolname='type']//div[contains(@class, 'p-multiselect-label') and text()='Select']`);
    }
    public get contactPerson() {    
        return $(`//*[@formcontrolname='contact_person']`);
    }
public get contactPhoneNumber() {
        return $(`//*[@formcontrolname='contact_phone']`);
    }
    public get contactEmail() {
        return $(`//*[@formcontrolname='contact_email']`);
    }   
    public get  dotNumber() {
        return $(`//*[@formcontrolname='dot_number']`);
    }
    public get  mcNumber() {
        return $(`//*[@formcontrolname='mc_number']`);   
    } 
    public get insuranceType() {
        return $(`//*[@formcontrolname='insurance_details']`);
    }
    public get safetyRating() {
        return $(`//*[@formcontrolname='safety_ratings']`);
    }
    public get equipmentType() {
        
        return $(`//*[@formcontrolname='equipment_types']`);
    }
    public get capacity() {
        return $(`//*[@formcontrolname='capacity']`);
    }
    public get nextButton() {

        return $(`//*[@_ngcontent-ng-c4204489659]/div/form/div[@class='block md:flex justify-content-center items-center']/div[@class='field col-12 md:col-2']/button[contains(@class, 'button_add')]`);
    }
    public get backButton() {
        return $(`//*[@_ngcontent-ng-c4204489659]/div/form/div[@class='block md:flex justify-content-center items-center']/div[@class='field col-12 md:col-2']/button[contains(@class, 'button_back')]`);
    }
    public get nextButtonInDocument() {
        return $(`//*[@_ngcontent-ng-c4204489659]/div/form/div[@class='block md:flex justify-content-center items-center mt-4']/div[@class='field col-12 md:col-2']/button[contains(@class, 'button_add')]`);
    }

    public get backButtonInDocument() {
        return $(`//*[@_ngcontent-ng-c4204489659]/div/form/div[@class='block md:flex justify-content-center items-center mt-4']/div[@class='field col-12 md:col-2']/button[contains(@class, 'button_back')`);
    }
    public get editButton() {
        return $(`//*[contains(text(),' Carrier ')]//ancestor::td/following-sibling::td//*[@class='pi pi-pencil text-success']`);
    }
    public get deleteButton() {
        return $(`//*[contains(text(),' Carrier ')]//ancestor::td/following-sibling::td//*[@class='pi pi-trash text-danger']`);
    }
    public get viewButton() {

        return $(`//*[contains(text(),' Carrier ')]//ancestor::td/following-sibling::td//*[@class='pi pi-eye']`);
    }
    public get updateCarriersButton() {
        return $(`//button[@type='submit' and contains(@class, 'button_add')]`);
    }
    public get nextButtonInUpdateCarrier() {
        return $(`//app-carrier-documents[@_ngcontent-ng-c4204489659]/div/form/div[@class='block md:flex justify-content-center items-center mt-4']/div[@class='field col-12 md:col-2']/button[contains(@class, 'button_add')]`);
    }
    public get yesButton() {
        return $(`//button[@type='button' and contains(@class, 'button_yes')]`);
    }
    public get noButton() {
        return $(`//button[@type='button' and contains(@class, 'button_no')]`);
    }
    public get deleteMessage() {
        return $(`//div[contains(@class, 'p-toast-message-text') and contains(., 'Success') and contains(., 'Carrier deleted successfully.')]`);
    }
    public get searchCarriers() {
        return $(`//input[contains(@class, 'search-input') and @placeholder='Search...']`);
    }
    public get status() {
        return $(`//*[contains(text(),' Carrier ')]//ancestor::td/following-sibling::td//*[@class='p-dropdown p-component p-inputwrapper']`);
    }

    public get viewCarriers() {
        return $(`//span[contains(@class, 'ml-2') and text()='View Carriers']`);
    }
    public get editButtonInViewPage() {
        return $(`//button[contains(@class, 'p-button') and contains(@class, 'p-button-contrast') and contains(@class, 'p-button-rounded')]`);
    }
    //Methods
    public async clickCarriersList() {
        await (await this.carriersList).click();
    }
    public async clickOperationSideBar() {
        await (await this.operationSideBar).click();
    }
    public async clickCarriersSideBar() {
        await (await this.carriersSideBar).click();
    }
    public async clickAddCarriersButton() {
        await (await this.addCarriersButton).click();
    }
    public async enterCarrierName(carrierName: string) {
        await (await this.carrierName).setValue(carrierName);
    }
    public async selectCarrierType(carrierType: string) {
        await (await this.carrierType).click();
        const carrierTypeOption = await $(`//li[@aria-label='${carrierType}']`);
        console.log(carrierTypeOption);
        await carrierTypeOption.click();
    }
    public async enterContactPerson(contactPerson: string) {
        await (await this.contactPerson).setValue(contactPerson);
    }
    public async enterContactPhoneNumber(contactPhoneNumber: string) {
        await (await this.contactPhoneNumber).setValue(contactPhoneNumber);
    }
    public async enterContactEmail(contactEmail: string) {
        await (await this.contactEmail).setValue(contactEmail);
    }
    public async enterDotNumber(dotNumber: string) {
        await (await this.dotNumber).setValue(dotNumber);
    }   
    public async enterMcNumber(mcNumber: string) {
        await (await this.mcNumber).setValue(mcNumber);
    }
    public async selectInsuranceType(insuranceType: string) {
        await (await this.insuranceType).click();
        const insuranceTypeOption = await $(`//li[contains(@class, "p-ripple p-element p-dropdown-item") and @aria-label='${insuranceType}']`);
        console.log(insuranceTypeOption);
        await insuranceTypeOption.click();
    }
    public async selectSafetyRating(safetyRating: string) {
        await (await this.safetyRating).click();
        const safetyRatingOption = await $(`//li[contains(@class, "p-ripple p-element p-dropdown-item") and @aria-label='${safetyRating}']`);
        console.log(safetyRatingOption);
        await safetyRatingOption.click();
    }
    public async selectEquipmentType(equipmentType: string) {
        await (await this.equipmentType).click();
        const equipmentTypeOption = await $(`//li[contains(@class, "p-ripple p-element p-multiselect-item") and @aria-label='${equipmentType}']`);
        console.log(equipmentTypeOption);
        await equipmentTypeOption.click();

    }
    public async enterCapacity(capacity: string) {
        await (await this.capacity).setValue(capacity);
    }
    public async clickNextButton() {
        await (await this.nextButton).click();
    }

    public async clickBackButton() {
        await (await this.backButton).click();
    }
    public async clickNextButtonInDocument() {
        await (await this.nextButtonInDocument).click();
    }
    public async clickBackButtonInDocument() {
        await (await this.backButtonInDocument).click();
    }
    public async clickEditButton() {
        await (await this.editButton).click();
    }
    public async clickDeleteButton() {
        await (await this.deleteButton).click();
    }
    public async clickViewButton() {
        await (await this.viewButton).click();
    }
    public async clickUpdateCarriersButton() {
        await (await this.updateCarriersButton).click();
    }
    public async clickNextButtonInUpdateCarrier() {
        await (await this.nextButtonInUpdateCarrier).click();
    }
    public async clickYesButton() {
        await (await this.yesButton).click();
    }
    public async clickNoButton() {
        await (await this.noButton).click();
    }
    public async enterSearchCarriers(searchCarriers: string) {
        await (await this.searchCarriers).setValue(searchCarriers);
    }
    public async isCarrierAdded() {
        return await (await this.carriersList).isDisplayed();
    }
    public async isCarrierUpdated() {
        return await (await this.carriersList).isDisplayed();
    }
    public async isCarrierDeletedMessage() {
        return await (await this.deleteMessage).isDisplayed();
    }
    public async isCarrierDisplayed() {
        return await (await this.viewCarriers).isDisplayed();
    }
    public async isCarrierEditDisplayed() {
        return await (await this.carriersList).isDisplayed();
    }
    public async isCarrierListDisplayed() {
        return await (await this.carriersList).isDisplayed();
    }
    public async changeStatus(status: string) {
        await (await this.status).click();
        const statusOption = await $(`//li[contains(@class, "p-ripple p-element p-dropdown-item") and @aria-label='${status}']`);
        console.log(statusOption);
        await statusOption.click();
    }
    public async clickEditButtonInViewPage() {
        await (await this.editButtonInViewPage).click();
    }

}           


export default new CarriersListPage();
