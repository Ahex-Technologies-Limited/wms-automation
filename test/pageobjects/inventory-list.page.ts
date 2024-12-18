import Page from './page';

import { $, browser } from '@wdio/globals';

class InventoryListPage extends Page {
    public get inventoryList() {

        return $(`//span[contains(text(), 'Inventory List') and contains(@class, 'ml-2')]`);
    }
    public get productManagementSubMenu() {
        return $(`//span[contains(text(), 'Product Management') and contains(@class, 'p-menuitem-text')]`);
    }
    public get inventoryListSideBar() {
        return $(`//li[@role='treeitem' and @aria-label='Inventory List']`);
    }
    public get searchBar() {
        return $(`//input[@type='text' and contains(@class, 'search-input') and @placeholder='Search...']`);
    }
    public get addInventoryButton() {
        return $(`//div[@class='flex gap-2 align-items-center']//button[contains(@class, 'p-button')]//span[text()='Add']`);
    }
    public get sku() {
        return $(`//p-dropdown[@placeholder='Select' and @formcontrolname='product_id']`);
    }
    public get shipmentId() {
        return $(`//input[@formcontrolname='shipment_number' and @placeholder='Enter']`);
    }
    public get quantity() {
        return $(`//input[@type='number' and @formcontrolname='quantity']`);
    }
    public get lotNumber() {
        return $(`//input[@type='text' and @formcontrolname='lot_number']`);
    }
    public get expiryDate() {
        return $(`//input[@role='combobox' and contains(@class, 'p-inputtext')]`);
    }
    //    public get subInventory() {
    //         return $(``);
    //     }
    //   public get zone() {
    //         return $(``);
    //     }
    //   public  get locator() {
    //         return $(``);
    //     }
    public get cost() {
        return $(`//input[@formcontrolname='cost_price' and @type='number']`);
    }
    public get sellingPrice() {
        return $(`//input[@formcontrolname='sales_price' and @type='number']`);
    }
    public get removeButton() {

        return $(`//span[@data-pc-section='label' and text()='Remove']`);
    }
    public get addItem() {
        return $(`//span[@class='p-button-label ng-star-inserted' and text()='Add Item']`);
    }
    public get addButton() {
        return $(`//button[contains(@class, 'button_add') and normalize-space(text())='Add']`);
    }
    public get backButton() {
        return $(`//button[contains(@class, 'button_back') and normalize-space(text())='Back']`);
    }
    public get viewButton() {
        return $(`//tbody[@role='rowgroup']/tr[1]/td[last()]/div//button[contains(@class, 'dropdown-item')]/i[contains(@class, 'pi-eye')]`);
    }
    public get filterButton() {
        return $(`//button[span[contains(@class, 'p-button-label') and text()='Filters']]`);
    }
    public get uomInFilter() {
        return $(`//li[contains(@class, 'cursor-pointer') and span[text()='Uom']]`);
    }
    public get catagoryInFilter() {
        return $(`//li[contains(@class, 'cursor-pointer') and span[text()='Category']]`);
    }
    public get applyButton() {
        return $(`//button[contains(@class, 'button_add')]//span[text()='Apply']`);
    }
    public get clearButton() {
        return $(`//button[contains(@class, 'button_clear')]//span[text()='Clear']`);
    }
    public get detailsInventoryPage() {
        return $(`//span[contains(text(), 'Detail Inventory')]`);
    }
    public get editInventoryDetails() {
        return $(`//tbody[@role='rowgroup']/tr/td[last()]/div/button/i[contains(@class, 'pi-pencil')]`);
    }
    public get updateButton() {
        return $(`//div[contains(@class, 'field')]/button[contains(text(), 'Update')]`);

    }
    public get backButtonInUpdatePage() {
        return $(`//div[contains(@class, 'field')]/button[contains(text(), 'Back')]`);
    }
    //methods
    public async clickOnProductManagementSubMenu() {
        await (await this.productManagementSubMenu).click();
    }
    public async clickOnInventoryListSideBar() {
        await (await this.inventoryListSideBar).click();
    }
    public async clickOnAddInventoryButton() {
        await (await this.addInventoryButton).click();
    }
    public async selectSku(sku: string) {
        await (await this.sku).click();
        const skuOption = await $(`//li[@role='option' and span[contains(text(), '${sku}')]]`);
        console.log(skuOption);
        await skuOption.click();
    }
    public async enterShipmentId(shipmentId: string) {
        await (await this.shipmentId).setValue(shipmentId);
    }
    public async enterQuantity(quantity: string) {
        await (await this.quantity).setValue(quantity);
    }
    public async enterLotNumber(lotNumber: string) {
        await (await this.lotNumber).setValue(lotNumber);
    }
    public async selectExpiryDate(expiryDate: string) {
        await (await this.expiryDate).setValue(expiryDate);

    }
    public async enterCost(cost: string) {
        await (await this.cost).setValue(cost);
    }
    public async enterSellingPrice(sellingPrice: string) {
        await (await this.sellingPrice).setValue(sellingPrice);
    }
    public async clickRemoveButton() {
        await (await this.removeButton).click();
    }
    public async clickAddItem() {
        await (await this.addItem).click();
    }
    public async clickAddButton() {
        await (await this.addButton).click();
    }
    public async clickBackButton() {
        await (await this.backButton).click();
    }
    public async clickViewButton() {
        await (await this.viewButton).click();
    }
    public async clickFilterButton() {
        await (await this.filterButton).click();
    }
    public async selectUomInFilter(uom: string) {
        await (await this.uomInFilter).click();
        const uomOption = await $(`//label[contains(normalize-space(text()), '${uom}')]`);
        await uomOption.click();
    }
    public async selectCatagoryInFilter(catagory: string) {
        await (await this.catagoryInFilter).click();
        const catagoryOption = await $(`//label[contains(normalize-space(text()), '${catagory}')]`);
        await catagoryOption.click();
    }
    public async clickApplyButton() {
        await (await this.applyButton).click();
    }
    public async clickClearButton() {
        await (await this.clearButton).click();
    }
    public async clickDetailsInventoryPage() {
        await (await this.detailsInventoryPage).click();
    }
    public async clickEditInventoryDetails() {
        await (await this.editInventoryDetails).click();
    }
    public async isInventoryListPageDisplayed() {
        return (await this.inventoryList).isDisplayed();
    }
    public async isDetailsInventoryPageDisplayed() {
        return (await this.detailsInventoryPage).isDisplayed();
    }
    public async clickOnSearchBar(searchBar: string) {
        await (await this.searchBar).setValue(searchBar);
    }
    public async clickUpdateButton() {
        await (await this.updateButton).click();
    }
    public async clickBackButtonInUpdatePage() {
        await (await this.backButtonInUpdatePage).click();
    }


}
export default new InventoryListPage();