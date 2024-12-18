import Page from './page';

import { $, browser } from '@wdio/globals';
class IncomingshipmentsListPage extends Page {
    public get incomingShipmentsList() {
        return $(`//a[span[contains(@class, 'ml-2') and text()='List']]`);  
    }
    public get shipmentsSideBar() {
        return $(`//span[@class='p-menuitem-text ng-tns-c147418153-4 ng-star-inserted' and text()='Shipments']`);
    }       
    public get incomingshipmentssideBar() {
        return $(`//span[@class='p-menuitem-text ng-tns-c2900264064-12 ng-star-inserted' and text()='Incoming Shipment']`);
}
public get addIncomingShipmentButton() {
    return $(`//div[contains(@class, 'zone') and contains(@class, 'align-items-center')]//button[@label='Add']`);

}
public get expectedArrivalDate() {
    return $(`//input[@type='text' and @role='combobox' and @placeholder='Select date']`);
}
public get carrierName() {
    return $(`//input[@name='name' and @formcontrolname='carrier_name']`);
}
public get assignTo() {
    
    return $(`(//span[@role='combobox' and text()='Select'])[1]`);
}
public get countryCode() {
    return $(`(//span[@role='combobox' and text()='Select'])[2]`);
}
public get carrierContactNumber() {
    return $(`//*[@formcontrolname='carrier_contact_number']`);
}
public get dockDoor() {
    return $(`(//span[@role='combobox' and text()='Select'])[3]`);
}
public get trackingNumber() {
    return $(`//*[@formcontrolname='tracking_number']`);
}
public get supplier() {
    return $(`(//span[@role='combobox' and text()='Select'])[4]`);
}
public get nextButtonInShipmentDetails() {
    return $(`//app-shipment-detail-form//form//button[contains(@class, 'button_add') and normalize-space(text())='Next']`);

}
public get BackButtonInShipmentDetails() {
    return $(`//div[@class='block md:flex justify-content-center items-center']/div[1]/button`);
}
//methods
public async clickOnShipmentsSideBar() {
    await this.shipmentsSideBar.click();
}
public async clickOnIncomingShipmentsSideBar() {
    await this.incomingshipmentssideBar.click();
}
public async clickOnAddIncomingShipmentButton() {
    await this.addIncomingShipmentButton.click();
}
public async selectExpectedArrivalDate(date: string) {
    await this.expectedArrivalDate.click();
    const dateElement = $(`//td[@aria-label='${date}']`);
    console.log(dateElement);
    await dateElement.click();
}
public async enterCarrierName(carrierName: string) {
    await this.carrierName.setValue(carrierName);   

}
public async selectAssignTo(assignTo: string) {
    await this.assignTo.click();
    const assignToOption = $(`//span[@class='ng-star-inserted' and text()='${assignTo}']`);
    console.log(assignToOption);    
    await assignToOption.click();   
}
public async selectCountryCode(countryCode: string) {
    await this.countryCode.click();
    const countryCodeOption = $(`//span[@class='ng-star-inserted' and text()='${countryCode}']
`);    
    console.log(countryCodeOption);
    await countryCodeOption.click();
}
public async enterCarrierContactNumber(carrierContactNumber: string) {
    await this.carrierContactNumber.setValue(carrierContactNumber);
}
public async selectDockDoor(dockDoor: string) {
    await this.dockDoor.click();
    const dockDoorOption = $(`//li[@aria-label='${dockDoor}']`);
    console.log(dockDoorOption);
    await dockDoorOption.click();
}
public async enterTrackingNumber(trackingNumber: string) {
    await this.trackingNumber.setValue(trackingNumber);
}
public async selectSupplier(supplier: string) {
    await this.supplier.click();
    const supplierOption = $(`//li[contains(@class, 'p-dropdown-empty-message') and normalize-space(text()) = '${supplier}']`);
    console.log(supplierOption);
    await supplierOption.click();
}
public async clickNextButtonInShipmentDetails() {
    await this.nextButtonInShipmentDetails.click();
}
public async clickBackButtonInShipmentDetails() {
    await this.BackButtonInShipmentDetails.click();
}
public async isIncomingShipmentsListPageDisplayed() {
    return await this.incomingShipmentsList.isDisplayed();
}



}
export default new IncomingshipmentsListPage();