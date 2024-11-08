import Page from './page';
import { $, browser } from '@wdio/globals';

class UpdateWarehousePage extends Page {
    
    // Selectors
    public get editWarehouseButton() { return $(''); }
    public get warehouseName() { return $(''); }
    public get warehouseType() { return $(''); }
    public get description() { return $(''); }
    public get warehouseAddress() { return $(''); }
    public get city() { return $(''); }
    public get stateProvince() { return $(''); }
    public get country() { return $(''); }
    public get postalCode() { return $(''); }
    public get warehouseManager() { return $(''); }
    public get phoneNumber() { return $(''); }
    public get contactEmail() { return $(''); }
    public get startTimeSelect() { return $(``); }
    public get endTimeSelect() { return $(``); }
    public get timeZoneSelect() { return $(''); }
    public get capacity() { return $(''); }
    public get specialEquipment() { return $(''); }
    public get temperatureControl() { return $(''); }
    public get dockingStation() { return $(''); }
    public get securityFeatures() { return $(''); }
    public get unitOfMeasurement() { return $(''); }
    public get defaultPickTaskType() { return $(''); }
    public get status() { return $(''); }
    public get updateButton() { return $(''); }
    public get backButton() { return $(''); }
    // Methods
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

    public async clickBackButton() {
        await this.backButton.waitForDisplayed({
            timeout: 20000, 
            timeoutMsg: 'Element was not visible after 5 seconds'
        });
        await this.backButton.click();
    }
}
export default new UpdateWarehousePage();