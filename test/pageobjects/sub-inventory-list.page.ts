import Page from './page';

import { $, browser } from '@wdio/globals';
// import page from './warehouse-list.page';
import warehouseListPage from './warehouse-list.page';

class subinventoryListPage extends Page {
    //selectors
    public get Warehousecardname() { return $(`//span[@class="warehouse-title" and normalize-space(text())="Supriya1"]`) }
    public get subInventorySidebar() { return $(`a[href="#/admin/warehouse/subinventory"]`) }
    public get subInventoryPage() { return $(`//span[@class="ml-2" and normalize-space(text())="Sub Inventory"]`) }
    public get subInventoryList() { return $(`.table-parents .sub-inventory-table`) }
    public get subInventoryAddButton() { return $(`//span[@class="p-button-label" and normalize-space(text())="Add"]`) }
    public get subinventoryName() { return $(`//input[@id="firstname2" and @type="text" and @placeholder="Enter sub-inventory name" and @formcontrolname="name" and @name="name"]`) }
    public get description() { return $(`//textarea[@id="inventoryDetails" and @formcontrolname="description" and @placeholder="Enter description" and @name="inventoryDetails"]`) }
    public get subInvetoryType() { return $(`//p-dropdown[@placeholder='Select sub-inventory type']`) }
    public get capacity() { return $(`//*[@formcontrolname='capacity']`) }
    public  get dimension() { return $(`//span[@aria-label='Select unit']`) }
    public get length() { return $(`//input[@type="number" and @placeholder="Length" and @formcontrolname="length" and @name="length"]`) }
    public get width() { return $(`//input[@type="number" and @placeholder="Width" and @formcontrolname="width" and @name="Width"]`) }
    public get height() { return $(`//input[@type="number" and @placeholder="Height" and @formcontrolname="height" and @name="height"]`) }
    public get status() { return $(`//span[@role="combobox" and normalize-space(text())="Select status"]`) }
    public get temperatureControlled() { return $(`//span[@role="combobox" and normalize-space(text())="Select temperature control"]`) }
    public get addButon() { return $(`//div[@class="field col-12 md:col-2"]//button[@type="submit" and normalize-space(text())="Add"]`) }
    public get backButton() { return $(`//button[@type="button" and normalize-space(text())="Back"]`) }
    public get successfullMessage() { return $(``) }
 public get editSubInventoryButton(){return $(`//i[contains(@class, 'pi-pencil')]`)}
public get updateButton() { return $(`button[type="submit"]`) }
public get deleteButton() { return $(`i[_ngcontent-ng-c435294142].pi.pi-trash`) }




//method to click on the warehouse card
public async clickWarehousecardname() {
    await this.Warehousecardname.click();
}

//method to click on the subinventory sidebar
public async clickSubInventorySidebar() {
    await this.subInventorySidebar.click();
}


//method to click on the subinventory page
public async clickSubInventoryPage() {
    await this.subInventoryPage.click();
}

//method to click on the subinventory list  
public async clickSubInventoryList() {
    await this.subInventoryList.waitForDisplayed({ timeout: 5000 });
    
}

//method to click on the subinventory add button
public async clickSubInventoryAddButton() {
    await this.subInventoryAddButton.click();
}

//method to enter the subinventory name
public async enterSubInventoryName(subinventoryName: string) {
    await this.subinventoryName.setValue(subinventoryName);
}

//method to enter the description
public async enterDescription(description: string) {
    await this.description.setValue(description);
}

//method to select the subinventory type
public async selectSubInventoryType(subInvetoryType: string) {
    await this.subInvetoryType.click();
    await browser.pause(2000);
    // const subInvetoryTypeOption = await $(`//*[@id='pn_id_109_list']//li[@aria-label="${subInvetoryType}"]`);
    // console.log(subInvetoryTypeOption);
    // await subInvetoryTypeOption.click();
    await browser.keys('ArrowDown');
    await browser.keys('Enter');

   

}

//method to enter the capacity  
public async enterCapacity(capacity: string) {
    await this.capacity.setValue(capacity);
}



//method to select the dimension
public async selectDimension(dimension: string) {
    await this.dimension.scrollIntoView();
    await browser.pause(2000);
    await this.dimension.click();
    await browser.pause(2000);
    // const dimensionOption = await $(`//*[@id='pn_id_191_list']//li[@aria-label="${dimension}"]`);
    // console.log(dimensionOption);
    // await dimensionOption.click();
    await browser.keys('ArrowDown');
    await browser.keys('Enter');

   

}   


//method to enter the length
public async enterLength(length: string) {
    await this.length.setValue(length);
}

//method to enter the width 
public async enterWidth(width: string) {
    await this.width.setValue(width);
}

//method to enter the height
public async enterHeight(height: string) {
    await this.height.setValue(height);
}


//method to select the status
public async selectStatus(status: string) {
    await this.status.click();
    await browser.pause(2000);
    // const statusOption = await $(`//*[@id='pn_id_544_list']//li[@aria-label="${status}"]`);
    // console.log(statusOption)
    // await statusOption.click();
   await browser.keys('ArrowDown');
    await browser.keys('ArrowUp');
    await browser.keys('Enter');

}

//method to select the temperature controlled
public async selectTemperatureControlled(temperatureControlled: string) {
    await this.temperatureControlled.click();
    await browser.pause(2000);
    // const temperatureControlledOption = await $(`//*[@id='temperature_controlled_list']//li[@aria-label="${temperatureControlled}"]`);
    // console.log(temperatureControlledOption)
    // await temperatureControlledOption.click();
   await browser.keys('ArrowDown');
    await browser.keys('Enter');

}

//method to click on the add button
public async clickAddButton() {
    await this.addButon.click();
}


//method to click on the back button
public async clickBackButton() {
    await this.backButton.click();


}
public async isSubInventoryListDisplayed() {
    return await this.subInventoryList.isDisplayed();

}
public async successfullMessageForAddSubInventory() {
    return await this.successfullMessage.isDisplayed();

}
public async clickEditSubInventoryButton() {
    await this.editSubInventoryButton.click();
}
public async clickUpdateButton() {
    await this.updateButton.click();

}
public async clickDeleteButton() {
    await this.deleteButton.click();
}
public async searchSubInventory(subInventoryName: string) {
    
    const searchInput = await $(`input.search-input`);
    await searchInput.setValue(subInventoryName);

}

public async filterSubInventoryType(subInventoryType: string) {
    const filterButton = await $(`button.p-button span.p-button-icon.pi-filter`);
    await filterButton.click();
    await this.subInvetoryType.click();
    await browser.pause(2000);
    const subInventoryTypeOption = await $(`//label[contains(text(), '${subInventoryType}')]`);
    console.log(subInventoryTypeOption);
    await subInventoryTypeOption.click();
}
public async filterStatus(status: string) {
    const filterButton = await $(`button.p-button span.p-button-icon.pi-filter`);
    await filterButton.click();
    await this.status.click();
    await browser.pause(2000);
    const statusOption = await $(`,'${status}']`);
    console.log(statusOption);
    await statusOption.click();
}
}

export default new subinventoryListPage();