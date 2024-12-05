import Page from './page';

import { $, browser } from '@wdio/globals';

class WarehouseListPage extends Page {
    // Selectors
    public get addWarehouseButton() { return $(`button[label="Add"]`); }
    public get editWarehouseButton() { return $(`button.dropdown-item .pi.pi-pencil`); }
    public get selectWarehousecardname() { return $(`//span[contains(@class, 'warehouse-title') and contains(text(), 'Test Warehouse ')]`); }
    public get warehouseName() { return $('#name'); }
    public get warehouseType() { return $('#Warehousetype'); }
    public get description() { return $('#inventoryDetails'); }
    public get warehouseAddress() { return $('#warehouseAddress'); }
    public get city() { return $(`//*[@id='firstname2'][@placeholder='Enter City']`); }
    public get stateProvince() { return $('#stateName'); }
    public get country() { return $('#Country'); }
    public get postalCode() { return $('#postalCode'); }
    public get warehouseManager() { return $('#warehouseManager'); }
    public get phoneNumber() { return $('#contactPhone'); }
    public get contactEmail() { return $('#email'); }
    public get startTimeSelect() { return $(`//input[@type='text' and @role='combobox' and @placeholder='Select start time' and @id='calendar-timeonly']`); }
    public get endTimeSelect() { return $(`//input[@type='text' and @role='combobox' and @placeholder='Select end time' and @id='calendar-timeonly']`); }
    public get timeZoneSelect() { return $('#timeZone > span'); }
    public get selectMeasurementUnits() { return $(`//p-dropdown[@formcontrolname='measurement_unit']`); }
    public get capacity() { return $(`//*[@id='firstname2'][@placeholder='Enter capacity']`); }
    public get specialEquipment() { return $('#specialEquipment > div > ul > li > input'); }
    public get temperatureControl() { return $('#temperatureControl > div'); }
    public get dockingStation() { return $('#dockingStations'); }
    public get securityFeatures() { return $(`//*[@type='text'][@placeholder='Enter security features']`); }
    public get unitOfMeasurement() { return $(`//p-multiselect[@optionlabel='name' and @optionvalue='id' and @formcontrolname='unit_of_measure_ids' and @placeholder='Select a unit of measurement' and @name='uom']`); }
    public get defaultPickTaskType() { return $(`p-dropdown[placeholder="Select pick task type"]`); }
    public get status() { return $(`p-dropdown[placeholder="Select Status"]`); }
    public get updateButton() { return $(`button[type="submit"].button_add`); }
    public get backButton() { return $(`button[type="button"].button_back`); }
    public get deleteButton() { return $(`//button[i[contains(@class, 'pi-trash')]]`); }
    public get statusupdatebutton() { return $(`//div[@class='p-dropdown p-component p-inputwrapper' and @id='pn_id_48']//span[@role='combobox' and text()='Active']`); }
    // Methods
    public async clickStatusDropdown(status: string): Promise<void> {
        await this.statusupdatebutton.waitForDisplayed({
            timeout: 20000, 
            timeoutMsg: 'Element was not visible after 5 seconds'
        });
        await this.statusupdatebutton.click();
        await browser.keys('ArrowDown');
        await browser.keys('Enter');
        
        // const statusOption = `//ul[@role='listbox' and @id='pn_id_48_list']//li[@aria-label=${status}]`;
        // console.log(statusOption);
        // await browser.$(statusOption).click();


    }
     public async clickAddWarehouseButton() {
        await this.addWarehouseButton.waitForDisplayed({
            timeout: 20000, 
            timeoutMsg: 'Element was not visible after 5 seconds'
        });
        await this.addWarehouseButton.click();
    }   
    public async clickEditWarehouseButton() {
        await  this.editWarehouseButton.waitForDisplayed({
            timeout: 20000, 
            timeoutMsg: 'Element was not visible after 5 seconds'
        });
        await this.editWarehouseButton.click();
    }

    public async setWarehouseName(name: string) {
        await this.warehouseName.setValue(name);
    }

    public async selectWarehouseType(type: string) {
        await this.warehouseType.click();
        const typeOption = `//*[@id='Warehousetype_list']//li[@aria-label='${type}']`;
        console.log(typeOption);
await browser.$(typeOption).click();
        //await this.warehouseType.setValue(type);
    }

    public async setDescription(description: string) {
        await this.description.setValue(description);
    }

    public async setWarehouseAddress(address: string) {
        await this.warehouseAddress.setValue(address);
    }

    public async setCity(city: string) {
        await this.city.setValue(city);
    }

    public async setStateProvince(state: string) {
        await this.stateProvince.setValue(state);
    }

    public async setCountry(country: string) {
        await this.country.setValue(country);
    }

    public async setPostalCode(postalCode: string) {
        await this.postalCode.setValue(postalCode);
    }

    public async selectWarehouseManager(manager: string) {
        await this.warehouseManager.click();
        const managerOption = `//*[@id='warehouseManager_list']//li[@aria-label='${manager}']`;
        console.log(managerOption);
await browser.$(managerOption).click();
        //await this.warehouseManager.setValue(manager);
    }

    public async setPhoneNumber(phone: string) {
        await this.phoneNumber.setValue(phone);
    }

    public async setContactEmail(email: string) {
        await this.contactEmail.setValue(email);
    }

    public async selectStarttime(hours: string) {

        await this.startTimeSelect.click();
        const hoursOption = ``;
        console.log(hoursOption);
        await browser.$(hoursOption).click();

      //  await this.operatingHours.setValue(hours);
    }
    public async selectEndtime(hours: string) {
        await this.endTimeSelect.click();
        const hoursOption = ``;
        console.log(hoursOption);
        await browser.$(hoursOption).click();
    }

    public async selectTimeZone(timeZone: string) {
        await this.timeZoneSelect.click();
        const timeZoneOption = `//*[@id='timeZone_list']//li[@aria-label='${timeZone}']`;
        console.log(timeZoneOption);    
        await browser.$(timeZoneOption).click();

      //  await this.timeZ.setValue(timeZone);
    }
    public async selectMeasurementUnit(measurementunits: string): Promise<void> {
        await this.selectMeasurementUnits.scrollIntoView();
        await this.selectMeasurementUnits.click();
        await browser.keys('ArrowDown');  
        await browser.keys('Enter');  
    }
    

    public async setCapacity(capacity: string) {
        await this.capacity.setValue(capacity);
    }

    public async selectSpecialEquipment(equipment: string) {
        await this.specialEquipment.click();
        const equipmentOption = `//*[@id='specialEquipment_list']//li[@aria-label='${equipment}']`;
        console.log(equipmentOption);
        await browser.$(equipmentOption).click();
        //await this.specialEquipment.setValue(equipment);
    }

    public async selectTemperatureControl(control: string) {
        await this.temperatureControl.click();
        const controlOption = `//*[@id='temperatureControl_list']//li[@aria-label='${control}']`;   
        console.log(controlOption);
        await browser.$(controlOption).click();
        //await this.temperatureControl.setValue(control);
    }

    public async setDockingStation(station: string) {
        await this.dockingStation.setValue(station);
    }

    public async setSecurityFeatures(features: string) {
        await this.securityFeatures.setValue(features);
    }

    public async selectUnitOfMeasurement(unit: string) {
        await this.unitOfMeasurement.click();
        const unitOption = `//*[@id='unitOfMeasurement_list']//li[@aria-label='${unit}']`;   
        console.log(unitOption);
        await browser.$(unitOption).click();
       // await this.unitOfMeasurement.setValue(unit);
    }

    public async selectDefaultPickTaskType(taskType: string) {
        await this.defaultPickTaskType.click();
        const taskTypeOption = `//*[@id='defaultPickTaskType_list']//li[@aria-label='${taskType}']`;   
        console.log(taskTypeOption);
        await browser.$(taskTypeOption).click();
       // await this.defaultPickTaskType.setValue(taskType);
    }

    public async setStatus(status: string) {
        await this.status.click();
        const statusOption = `//*[@id='status_list']//li[@aria-label='${status}']`;
        console.log(statusOption);
        await browser.$(statusOption).click();
        //await this.status.setValue(status);
    }

    public async clickUpdateButton() {
        await this.updateButton.waitForDisplayed({
            timeout: 20000, 
            timeoutMsg: 'Element was not visible after 5 seconds'
        });
        await this.updateButton.click();
    }
    public async clickDeleteButton() {
        await this.deleteButton.waitForDisplayed({
            timeout: 20000, 
            timeoutMsg: 'Element was not visible after 5 seconds'
        });
        await this.deleteButton.click();
    }
    public async clickBackButton() {
        await this.backButton.waitForDisplayed({
            timeout: 20000, 
            timeoutMsg: 'Element was not visible after 5 seconds'
        });
        await this.backButton.click();
    }
public async warehouseCard(name: string) {
    const warehouseCardSelector = `//span[contains(@class, 'warehouse-title') and contains(text(), '${name}')]`;
    await browser.$(warehouseCardSelector).click();
}
public   async selectWarehouseAndEdit(warehouseName: string) {

    const selectedWarehouseName = await $(`//tr[.//span[contains(text(),'Test Warehouse A')] and .//span[contains(text(),'123 Test Street')]]`);

    await selectedWarehouseName.click();

}
public async searchWarehouse(warehouseName: string) {

    const searchInput = await $(`//input[@type='text' and @placeholder='Search...']`);

    await searchInput.setValue(warehouseName);

   
}
public async filterWarehouseType(warehouseName: string) {

    const filterButton = await $(`//span[text()='Filters']`);
    await filterButton.click();
    //select filter by warehouse type and status
    const warehouseType = await $(`//li[span[text()='Warehouse Type']]`);
    await warehouseType.click();
    const warehouseTypeseaech = `//input[@type='text' and @placeholder='Search...' and contains(@class, 'p-inputtext-sm')]`;
    await browser.$(warehouseTypeseaech).setValue(warehouseName);
    
    const applyButton = await $(`//button[@label='Apply' and contains(@class, 'p-button')]`);
    await applyButton.click();

}

public async filterStatus(statusValue: string) {
    const status = await $(`//li[span[text()='Status']]`);
    await status.click();
    const statusSearch = `//input[@placeholder='Search...' and contains(@class, 'p-inputtext-sm')]`;
    await browser.$(statusSearch).setValue(statusValue);

    //apply filter
    const applyButton = await $(`//button[@label='Apply' and contains(@class, 'p-button')]`);
    await applyButton.click();
    //close filter
    const closeButton = await $(`//button[@label='Clear' and contains(@class, 'p-button')]`);
    await closeButton.click();
}
   
}




export default new WarehouseListPage();
