import Page from './page';

import { $, browser } from '@wdio/globals';
import warehouseListPage from './warehouse-list.page';

 class  locatorListPage  extends Page {
    //selectors
    public get Warehousecardname() { return $(`//span[@class="warehouse-title" and normalize-space(text())="Supriya1"]`) }                          
    public get locatorSidebar() { return $(`//li[@role='treeitem']//span[text()='Locator']`) }
    public get locatorPage() { return $(`//div[@class='table-parents']`) }
    public get locatorList() { return $(`//span[text()='List']`) }
    public get locatorAddButton() { return $(`//button[.//span[text()='Add']]`) }
    public get locatorName() { return $(`//input[@formcontrolname='name']`) }
    public get locatorType() { return $(`//*[@formcontrolname='locator_type']`) }
    public get description() { return $(`//*[@formcontrolname='description']`) }
    public get locatorStatus() { return $(`//*[@formcontrolname='status']`) }
    public get associatedLocator() { return $(`//*[@formcontrolname='parent_locator_id']`) }
    public get  locatorCapacityUnit() { return $(`//*[@formcontrolname='measurement_unit']`) }
    public get locatorCapacityInput() { return $(`//*[@formcontrolname='capacity']`) }
    public get locatorDimension() { return $(`//*[@formcontrolname='unit']`) }
    public get locatorLength() { return $(`//*[@formcontrolname='length']`) }
    public get locatorWidth() { return $(`//*[@formcontrolname='width']`) }
    public get locatorHeight() { return $(`//input[@type='number' and @formcontrolname='height' and @placeholder='Height']`) }
    public get associatedInventory() { return $(`//*[@formcontrolname='sub_inventory_id']`) }
    public get associatdZones() { return $(`//*[@formcontrolname='zone_id']`) }
    public get groundSlot() { return $(`//*[@formcontrolname='ground_slots']`) }
    public get height() { return $(`//input[@type='number' and @formcontrolname='height' and @placeholder='Enter']`) }
    public get numberOfLevelesOrRows() { return $(`//*[@formcontrolname='number_of_rows']`) }
  //  public get totalPalletPositions() { return $(`//input[@id='total' and @type='text' and @readonly and @placeholder='12' and contains(@class, 'h-input')]`) }
public get startingRangeAB() { return $(`//*[@formcontrolname='from_prefix']`) }
public get startingRange01() { return $(`//*[@formcontrolname='from_suffix']`) }
public get endingRangeAB() { return $(`//*[@formcontrolname='to_prefix']`) }
public get endingRange01() { return $(`//*[@formcontrolname='to_suffix']`) }
public get addButon() { return $(`//button[contains(@class, 'button_add') and contains(@class, 'p-button')]`) }
public get backButton() { return $(`//button[@routerlink='/admin/warehouse/locator']`) }
public get editLocatorButton(){return $(`//button[contains(@class, 'dropdown-item')]//i[contains(@class, 'pi pi-pencil')]`)}
public get updateButton() { return $(`//button[normalize-space(text()) = 'Update']`) }
public get deleteButton() { return $(`//button[@type='button' and contains(@class, 'dropdown-item') and .//i[contains(@class, 'pi-trash')]]`) }
public get locatorListDisplayed() { return $(`//span[text()='List']`) }
public get locatorTypeFilter() { return $(`//li[span[text()='Locator Type']]`) }
public get statusFilter() { return $(`//li[span[text()='Status']]`) }
public get searchBar() { return $(`//input[@type='text' and @placeholder='Search...' and contains(@class, 'search-input')]`) }

    //method to click on the warehouse card
    public async clickWarehousecardname() {
        await this.Warehousecardname.click();
    }
    //method to click on the locator sidebar
    public async clickLocatorSidebar() {
        await this.locatorSidebar.click();
    }
    //method to click on the locator page
    public async clickLocatorPage() {
        await this.locatorPage.click();
    }
    //method to click on the locator list
    public async clickLocatorList() {
        await this.locatorList.waitForDisplayed({ timeout: 5000 });
    }
    //method to click on the locator add button
    public async clickLocatorAddButton() {
        await this.locatorAddButton.click();
    }
    //method to enter locator name
    public async enterLocatorName(locatorName: string) {
        await this.locatorName.setValue(locatorName);
    }
    //method to select the locator type
    public async selectLocatorType(locatorType: string) {
       
        await this.locatorType.click();
        await browser.pause(2000);
        const locatorTypeOption = await $(`//li[@aria-label='${locatorType}']`);
        console.log(locatorTypeOption);
         await locatorTypeOption.click();
       
    }

    //method to enter the description
    public async enterDescription(description: string) {
        await this.description.setValue(description);
    }
    //method to select the status
    public async selectStatus(status: string) {
        
        await this.locatorStatus.click();
        await browser.pause(2000);
        const statusOption = await $(`//li[@aria-label='${status}']`);
         console.log(statusOption);
         await statusOption.click();
        // await browser.keys('ArrowDown');
        // await browser.keys('Enter');
    }
    //method to select the associated locator
    public async selectAssociatedLocator(associatedLocator: string) {
        await this.associatedLocator.click();
        await browser.pause(2000);
         const associatedLocatorOption = await $(`//li[@aria-label='${associatedLocator}']`);
         console.log(associatedLocatorOption);
         await associatedLocatorOption.click();
        // await browser.keys('ArrowDown');
        // await browser.keys('Enter');
    }
    //method to select the locator capacity unit
    public async selectLocatorCapacityUnit(locatorCapacityUnit: string) {
        await this.locatorCapacityUnit.click();
        await browser.pause(2000);
        const locatorCapacityUnitOption = await $(`//li[@aria-label='${locatorCapacityUnit}']`);
         console.log(locatorCapacityUnitOption);
        await locatorCapacityUnitOption.click();
        // await browser.keys('ArrowDown');
        // await browser.keys('Enter');
    }
    //method to enter the locator capacity
    public async enterLocatorCapacity(locatorCapacity: string) {
        await this.locatorCapacityInput.setValue(locatorCapacity);
    }
    //method to select the dimension
    public async selectDimension(dimension: string) {
        await this.locatorDimension.click();
        await browser.pause(2000);
        const dimensionOption = await $(`//li[@aria-label='${dimension}']`);
         console.log(dimensionOption);
        await dimensionOption.click();
        // await browser.keys('ArrowDown');
        // await browser.keys('Enter');
    }
    //method to enter the length
    public async enterLength(length: string) {
        await this.locatorLength.setValue(length);
    }
    //method to enter the width     
    public async enterWidth(width: string) {
        await this.locatorWidth.setValue(width);
    }
    //method to enter the height
    public async enterlocatorHeight(height: string) {
        await this.locatorHeight.setValue(height);
    }
    //method to select the associated inventory
    public async selectAssociatedInventory(associatedInventory: string) {
        await this.associatedInventory.click();
        await browser.pause(2000);
         const associatedInventoryOption = await $(`//li[@aria-label='${associatedInventory}']`);
         console.log(associatedInventoryOption);
         await associatedInventoryOption.click();
        // await browser.keys('ArrowDown');
        // await browser.keys('Enter');
    }
    //method to select the associated zones
    public async selectAssociatedZones(associatedZones: string) {
        await this.associatdZones.click();
        await browser.pause(2000);
         const associatedZonesOption = await $(`//li[@aria-label='${associatedZones}']`);
         console.log(associatedZonesOption);
        await associatedZonesOption.click();
        // await browser.keys('ArrowDown');
        // await browser.keys('Enter');
    }
    //method to enter the ground slot
    public async enterGroundSlot(groundSlot: string) {
        await this.groundSlot.setValue(groundSlot);
    }
    //method to enter the height
    public async enterHeight(height: string) {
        await this.height.setValue(height);
    }
    //method to enter the number of levels or rows
    public async enterNumberOfLevelesOrRows(numberOfLevelesOrRows: string) {
        await this.numberOfLevelesOrRows.setValue(numberOfLevelesOrRows);
    }
    //method to enter the total pallet positions
    // public async enterTotalPalletPositions(totalPalletPositions: string) {
    //     await this.totalPalletPositions.setValue(totalPalletPositions);
    // }
    //method to enter the starting range AB
    public async enterStartingRangeAB(startingRangeAB: string) {
        await this.startingRangeAB.setValue(startingRangeAB);
    }
    //method to enter the starting range 01
    public async enterStartingRange01(startingRange01: string) {
        await this.startingRange01.setValue(startingRange01);
    }
    //method to enter the ending range AB
    public async enterEndingRangeAB(endingRangeAB: string) {
        await this.endingRangeAB.setValue(endingRangeAB);
    }
    //method to enter the ending range 01
    public async enterEndingRange01(endingRange01: string) {
        await this.endingRange01.setValue(endingRange01);
    }
    //method to click on the add button
    public async clickAddButton() {
        await this.addButon.click();
    }
    //method to click on the back button
    public async clickBackButton() {
        await this.backButton.click();
    }
    //method to click on the edit locator button
    public async clickEditLocatorButton() {
        await this.editLocatorButton.click();
    }
    //method to click on the update button
    public async clickUpdateButton() {
        await this.updateButton.click();
    }
    //method to click on the delete button
    public async clickDeleteButton() {
        await this.deleteButton.click();
    }
    //method to check if the locator list is displayed
    public async isLocatorListDisplayed() {
        return await this.locatorListDisplayed.isDisplayed();
    }
    //method to select the locator type filter
    public async selectLocatorTypeFilter(locatorTypeFilter: string) {
        const filterButton = await $(`button.p-button span.p-button-icon.pi-filter`);
        await filterButton.click();
        await this.locatorTypeFilter.click();
        await browser.pause(2000);
         const locatorTypeFilterOption = await $(`//label[contains(text(),'${locatorTypeFilter}')]`);
         console.log(locatorTypeFilterOption);
        await locatorTypeFilterOption.click();
        // await browser.keys('ArrowDown');
        // await browser.keys('Enter');

    }
    //method to select the status filter
    public async selectStatusFilter(statusFilter: string) {
        const filterButton = await $(`button.p-button span.p-button-icon.pi-filter`);
        await filterButton.click();
        await this.statusFilter.click();
        await browser.pause(2000);
         const statusFilterOption = await $(`//label[contains(text(),'${statusFilter}')]`);
         console.log(statusFilterOption);
        await statusFilterOption.click();
        // await browser.keys('ArrowDown');
        // await browser.keys('Enter');
    }
    //method to enter the search bar
    public async enterSearchBar(searchBar: string) {
        await this.searchBar.setValue(searchBar);
    }

}
export default new locatorListPage();


