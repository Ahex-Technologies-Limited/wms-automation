import Page from './page';

import { $, browser } from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';

class zoneListPage extends Page {
    // Selectors for add zone
    public get zoneSidebar() { return $(`//a[@href='#/admin/warehouse/zone' and contains(@class, 'p-menuitem-link')]`) }
    public get addZoneButton() { return $(`//button//span[text()='Add']`) }
    public get zonePage() { return $(`//span[@class='ml-2' and text()='Zone']`) }
    public get zoneList() { return $(`//span[@class='ml-2' and text()='List']`) }
    public get zoneAddButton() { return $(`//button[contains(@class, 'p-button') and .//span[contains(@class, 'pi-plus')]]`) }
    public get zoneName() { return $(`//input[@formcontrolname='name']`) }
    public get description() { return $(`//textarea[@id='address']`) }
    public get zoneType() { return $(`//p-dropdown[@formcontrolname='type']`) }
    public get status() { return $(`//p-dropdown[@formcontrolname='status']`) }
    public get subInventoryAssociation() { return $(`//p-dropdown[@formcontrolname='sub_inventory_id']`) }
    public get capacity() { return $(`//p-dropdown[@formcontrolname='measurement_unit']`) }
    public get inputCapacity() { return $(`//input[@formcontrolname='capacity']`) }
    public get dimension() { return $(`//p-dropdown[@formcontrolname='unit']`) }
    public get length() { return $(`//input[@formcontrolname='length']`) }
    public get width() { return $(`//input[@formcontrolname='width']`) }
    public get height() { return $(`//input[@name='height']`) }
    public get cycleCountFrequency() { return $(`//input[@placeholder='Enter time intervals in days/weeks/months(e.g., 2)']`) }
    public  get operationHoursStartTime() { return $(`//input[@placeholder='Select start time']`) }
    public get operationHoursEndTime() { return $(`//input[@placeholder='Select end time']`) }
    public get temperatureControlled() { return $(`//p-dropdown[@formcontrolname='temperature_controlled']`) }
    public get addButton() { return $(`//button[contains(@class, 'button_add') and contains(@class, 'p-button')]`) }
    public get backButton() { return $(`//button[contains(@class, 'button_back') and contains(@class, 'p-button')]`) }
    public get successfullMessage() { return $(`//div[text()='Zone added successfully.']`) }

    //selectors update zone

    public get editZoneIcon() { return $(`//button[contains(@class, 'dropdown-item')]//i[contains(@class, 'pi pi-pencil')]`) }
    public get zoneNameUpdate() { return $(``) }
    public get descriptionUpdate() { return $(``) }
    public get zoneTypeUpdate() { return $(``) }
    public get statusUpdate() { return $(``) }
    public get subInventoryAssociationUpdate() { return $(``) }
    public get capacityUpdate() { return $(``) }
    public get enterCapacityUpdate() { return $(``) }
    public get dimensionUpdate() { return $(``) }
    public get lengthUpdate() { return $(``) }
    public get widthUpdate() { return $(``) }
    public get heightUpdate() { return $(``) }
    public get cycleCountFrequencyUpdate() { return $(``) }
    public get operationHoursStartTimeUpdate() { return $(``) }
    public get operationHoursEndTimeUpdate() { return $(``) }
    public get temperatureControlledUpdate() { return $(``) }
    public get updateButton() { return $(`//button[normalize-space(text()) = 'Update']`) }
    public get backUpdateButton() { return $(`//button[normalize-space(text()) = 'Back']`) }
    public get successfullMessageUpdate() { return $(``) }

    //selectors delete zone

    public get deleteZoneIcon() { return $(`//button[@type='button' and contains(@class, 'dropdown-item') and .//i[contains(@class, 'pi-trash')]]`) }
    // public get confirmationMessage() { return $(``) }
    // public get inputDeleteReason() { return $(`//input[@id='name' and @formcontrolname='delete_reason']`) }
    // public get yesButton() { return $(`//button[contains(@class, 'button_yes') and text()=' Yes ']`) }
    // public get noButton() { return $(`//button[ text()=' No ']`) }
    // public get successfullMessageDelete() { return $(``) }

    //selectors for search zone

    public get searchZone() { return $(`//input[@placeholder='Search...']`) }

    //selectors for filter zone based on zone type and status

    public get zoneTypeFilter() { return $(`//li[span[text()='Zone Type']]//i[@class='pi pi-angle-right']`) }
    public get statusFilter() { return $(`//li[span[text()='Status'] and i[@class='pi pi-angle-right']]`) }

    //selectors for pagination

    public get rowsPerPage() { return $(`//span[normalize-space(text())='5' and contains(@class, 'p-dropdown-label')]`) }    
    public get nextPage() { return $(`//button[@aria-label='Next Page']`) }
    public get previousPage() { return $(`//button[@aria-label='Previous Page']`) }
    public get lastPage() { return $(`//button[@aria-label='Last Page']`) }
    public get firstPage() { return $(`//button[@aria-label='First Page']`) }



    // Methods for add zone
    public async clickZoneSidebar() {
        await this.zoneSidebar.click();
    }

    public async clickAddZoneButton() {
        await this.addZoneButton.click();
    }

    public async isZonePageDisplayed() {
        return await this.zonePage.isDisplayed();
    }

    public async isZoneListDisplayed() {
        return await this.zoneList.isDisplayed();
    }

    public async clickZoneAddButton() {
        await this.zoneAddButton.click();
    }

    public async enterZoneName(zoneName: string) {
        await this.zoneName.setValue(zoneName);
    }

    public async enterDescription(description: string) {
        await this.description.setValue(description);
    }

    public async selectZoneType(zoneType: string) {
        await this.zoneType.click();
        await browser.pause(2000);
        const zoneTypeOption = await $(`//li[@aria-label='${zoneType}']`);
        console.log(zoneTypeOption);
        await zoneTypeOption.click();
    }

    public async selectStatus(status: string) {
        await this.status.click();
        await browser.pause(2000);
        const statusOption = await $(`//li[@aria-label="${status}"]`);
        console.log(statusOption);
        await statusOption.click();
    }

    public async selectSubInventoryAssociation(subInventoryAssociation: string) {
        await this.subInventoryAssociation.click();
        await browser.pause(2000);
        const subInventoryAssociationOption = await $(`//li[@aria-label="${subInventoryAssociation}"]`);
        console.log(subInventoryAssociationOption);
        await subInventoryAssociationOption.click();
    }

    public async selectCapacity(capacity: string) {
        await this.capacity.click();
        await browser.pause(2000);
        const capacityOption = await $(`//li[@aria-label="${capacity}"]`);
        console.log(capacityOption);
        await capacityOption.click();
    }

    public async enterCapacity(enterCapacity: string) {
        await this.inputCapacity.setValue(enterCapacity);
    }

    public async selectDimension(dimension: string) {
        await this.dimension.click();
        await browser.pause(2000);
        const dimensionOption = await $(`//li[@aria-label="${dimension}"]`);
        console.log(dimensionOption);
        await dimensionOption.click();
    }

    public async enterLength(length: string) {
        await this.length.setValue(length);
    }

    public async enterWidth(width: string) {
        await this.width.setValue(width);
    }

    public async enterHeight(height: string) {
        await this.height.setValue(height);
    }

    public async enterCycleCountFrequency(cycleCountFrequency: string) {
        await this.cycleCountFrequency.setValue(cycleCountFrequency);
    }

    public async enterOperationHoursStartTime(operationHoursStartTime: string) {
        await this.operationHoursStartTime.setValue(operationHoursStartTime);
    }

    public async enterOperationHoursEndTime(operationHoursEndTime: string) {
        await this.operationHoursEndTime.setValue(operationHoursEndTime);
    }

    public async selectTemperatureControlled(temperatureControlled: string) {
        await this.temperatureControlled.click();
        await browser.pause(2000);
        const temperatureControlledOption = await $(`//li[@aria-label="${temperatureControlled}"]`);
        console.log(temperatureControlledOption);
        await temperatureControlledOption.click();
    }

    public async clickAddButton() {
        await this.addButton.click();
    }

    public async clickBackButton() {
        await this.backButton.click();
    }
    public async isSuccessfulMessageDisplayed() {
        return await this.successfullMessage.isDisplayed();
    }


// Methods for update zone
public async clickEditZoneIcon() {
    await this.editZoneIcon.click();
}
public async enterZoneNameUpdate(zoneNameUpdate: string) {
    await this.zoneNameUpdate.setValue(zoneNameUpdate);     
}
public async clickUpdateButton() {
    await this.updateButton.click();
}
public async isSuccessfulMessageUpdateDisplayed() {
    return await this.successfullMessageUpdate.isDisplayed();
}

// Methods for delete zone
public async clickDeleteZoneIcon() {
    await this.deleteZoneIcon.click();
    await browser.pause(2000);
   

}
// public async isSuccessfulMessageDeleteDisplayed() {
//     return await this.successfullMessageDelete.isDisplayed();
// }
// Methods for search zone
public async enterSearchZone(searchZone: string) {
    await this.searchZone.setValue(searchZone);
    await browser.pause(2000);
    await this.zoneList.isDisplayed();
    await this.zoneList.getText();
    await this.searchZone.clearValue();
    await browser.pause(2000);
}

// Methods for filter zone based on zone type and status
public async selectZoneTypeFilter(zoneTypeFilter: string) {
    const filterButton = await $(`button.p-button span.p-button-icon.pi-filter`);
    await filterButton.click();
    await this.zoneTypeFilter.click();
    await browser.pause(2000);
    const zoneTypeFilterOption = await $(`//label[contains(text(),'${zoneTypeFilter}')]`);
    console.log(zoneTypeFilterOption);
    await zoneTypeFilterOption.click();
}
public async selectStatusFilter(statusFilter: string) {
    const filterButton = await $(`button.p-button span.p-button-icon.pi-filter`);
    await filterButton.click();
    await this.statusFilter.click();
    await browser.pause(2000);
    const statusFilterOption = await $(`//label[contains(text(),'${statusFilter}')]`);
    console.log(statusFilterOption);
    await statusFilterOption.click();
}
// Methods for pagination
public async clickNextPage() {
    await this.nextPage.click();
    await browser.pause(2000);
    await this.zoneList.isDisplayed();
    await this.previousPage.click();
    await browser.pause(2000);
    await this.zoneList.isDisplayed();
    await this.lastPage.click();
    await browser.pause(2000);
    await this.zoneList.isDisplayed();
    await this.firstPage.click();
    await browser.pause(2000);
    await this.zoneList.isDisplayed();
    await this.rowsPerPage.click();
    await browser.pause(2000);
    await browser.keys('ArrowDown');
    await browser.keys('ArrowUp');
    await browser.keys('Enter');
    await browser.pause(2000);
    await this.zoneList.isDisplayed();
}





}
export default new zoneListPage();
