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
    public get actualArrivalDate() {
        return $(`//input[@class='p-element ng-tns-c1685646730-131 p-inputtext p-component ng-star-inserted' and @placeholder='Select date']`);
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
    public get receivedBy() {
        return $(`//*[@formcontrolname='received_by']`);
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
    public get sku() {
        return $(`//p-dropdown[@formcontrolname='products_id' and @optionlabel='sku']`);
    }
    public get orderQuantity() {
        return $(`//input[@formcontrolname='quantity']`);
    }
    public get removeButton() {
        return $(`//td[contains(@class, 'flex') and contains(@class, 'justify-content-center')]`);
    }
    public get addItemsButton() {
        return $(`//button[.//span[text()='Add item']]`);
    }
    public get nextButtonInItems() {
        return $(`(//button[normalize-space(text())='Next'])[2]`);
    }
    public get BackButtonInItems() {
        return $(`(//button[normalize-space(text())='Back'])[2]`);
    }
    public get uploadButtonInBillingOfLading() {
        return $(`//div[@class='p-fileupload p-fileupload-basic p-component ng-star-inserted']//input[@aria-label="Browse Files"]`);
    }
    public get UploadButtonInProductList() {
        return $(`//div[@class='p-fileupload p-fileupload-basic p-component ng-star-inserted']//input[@aria-label="Browse Files"]`);
    }
    public get invoiceNumber() {
        return $(`(//input[@type='text' and @placeholder='Enter'])[5]`);
    }
    public get Add() {
        return $(`(//button[@type='submit' and contains(text(), 'Add')])[1]`);
    }
    public get editButton() {
        return $(`table tbody tr:first-child td:nth-child(8) div button i.pi-pencil`);
    }
    public get viewButton() {
        return $(`table tbody tr:first-child td:nth-child(8) div button:first-of-type i`);
    }
    public get updateButton() {
        return $(`//button[contains(@class, 'p-button') and @type='button' and normalize-space(text())='Update' and not(@disabled)]`);
    }
    public get searchBar() {
        return $(`//input[@type='text' and @placeholder='Search...' and contains(@class, 'search-input')]`);
    }
    public get status() {
        return $(`//span[@role='combobox' and @aria-label='Delayed' and contains(@class, 'p-dropdown-label') and text()='Delayed']`);
    }
    public get yesButton() {
        return $(`//button[@type='button' and text()=' Yes ']`);
    }
    public get noButton() {
        return $(`//button[@type='button' and text()=' No ']`);
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
    public async selectActualArrivalDate(date: string) {
        await this.actualArrivalDate.click();
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
        const countryCodeOption = $(`//span[@class='ng-star-inserted' and text()='${countryCode}']`);
        console.log(countryCodeOption);
        await countryCodeOption.click();
    }
    public async enterCarrierContactNumber(carrierContactNumber: string) {
        await this.carrierContactNumber.setValue(carrierContactNumber);
    }
    public async selectReceivedBy(receivedBy: string) {
        await this.receivedBy.click();
        const receivedByOption = $(`//li[@aria-label='${receivedBy}']`);
        console.log(receivedByOption);
        await receivedByOption.click();
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
    public async selectSku(sku: string) {
        await this.sku.click();
        const skuOption = $(`//li[@aria-label='${sku}']`);
        console.log(skuOption);
        await skuOption.click();
    }
    public async enterOrderQuantity(orderQuantity: string) {
        await this.orderQuantity.setValue(orderQuantity);
    }
    public async clickRemoveButton() {
        await this.removeButton.click();
    }
    public async clickAddItemsButton() {
        await this.addItemsButton.click();
    }
    public async clickNextButtonInItems() {
        await this.nextButtonInItems.click();
    }
    public async clickBackButtonInItems() {
        await this.BackButtonInItems.click();
    }
    public async clickUploadButtonInBillingOfLading() {
        await this.uploadButtonInBillingOfLading.setValue('http://143.244.132.143:8181/images/Remaning_Task_in_milestone_2_1736073173845.docx');
    }
    public async clickUploadButtonInProductList() {
        await this.UploadButtonInProductList.click();
    }
    public async enterInvoiceNumber(invoiceNumber: string) {
        await this.invoiceNumber.setValue(invoiceNumber);
    }
    public async clickAdd() {
        await this.Add.click();
    }
    public async clickEditButton() {
        await this.editButton.click();
    }
    public async clickViewButton() {
        await this.viewButton.click();
    }
    public async clickUpdateButton() {
        await this.updateButton.click();
    }
    public async clickSearchBar(barcode: string) {
        await this.searchBar.setValue(barcode);
    }
    public async isIncomingshipmentsListPageDisplayed() {
        return await this.incomingShipmentsList.isDisplayed();
    }
    public async isIncomingshipmentsDetailsPageDisplayed() {
        const incomingshipmentDetailsPage = $(`//span[contains(@class, 'ml-2') and normalize-space(text())='View Incoming Shipments']`);
        return await incomingshipmentDetailsPage.isDisplayed();
    }
    public async clickStatus() {
        await this.status.click();
        await browser.keys('ArrowDown');
        await browser.keys('Enter');


    }
    public async clickYesButton() {
        await this.yesButton.click();
    }
    public async clickNoButton() {
        await this.noButton.click();

    }



}
export default new IncomingshipmentsListPage();