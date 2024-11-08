
import Page from './page';
import { $ ,browser} from '@wdio/globals';
class AddWarehousePage extends Page {
    // Selectors
    public get noWarehouseText() { return $('/html/body/app-root/app-secondlayout/app-warehouse/div/div/div/div/h2'); }
    public get addWarehouseButton() { return $('//button[contains(@class, "button_add") and @type="button"and contains(., "Add Warehouse")]'
);}
    public get addLaterLink() { return $('body > app-root > app-secondlayout > app-warehouse > div > div > div > div > a'); }
    public get addWarehousePageHeader() { return $('body > app-root > app-layout > div > div > app-add-warehouse > form > div > div > div.form.col-12.p-0.column-gap-6 > div.col-12.p-0.header-warehouse.my-4 > h3'); }
    public get sideBar() { return $('body > app-root > app-layout > div > app-sidebar'); }
    public get warehouseNameInput() { return $('#name'); }
    public get warehouseTypeSelect() { return $('#Warehousetype'); }
    public get descriptionInput() { return $('#inventoryDetails'); }
    public get warehouseAddressInput() { return $('#warehouseAddress'); }
    public get cityInput() { return $(`//*[@id='firstname2'][@placeholder='Enter City']`); }
    public get stateInput() { return $('#stateName'); }
    public get countryInput() { return $('#Country'); }
    public get postalCodeInput() { return $('#postalCode'); }
    public get warehouseManagerSelect() { return $('body > app-root > app-layout > div > div > app-add-warehouse > form > div > div > div.form.col-12.p-0.column-gap-6 > div:nth-child(6) > div:nth-child(1) > div:nth-child(2)'); }
    public get phoneNumberInput() { return $('#contactPhone'); }
    public get emailInput() { return $('#email'); }
    public get startTimeSelect() { return $(`//input[@type='text' and @role='combobox' and @placeholder='Select start time' and @id='calendar-timeonly']
`); }
    public get endTimeSelect() { return $(`//input[@type='text' and @role='combobox' and @placeholder='Select end time' and @id='calendar-timeonly']
`); }
    public get timeZoneSelect() { return $('#timeZone > span'); }
    public get selectMeasurementUnits() { return $(`//p-dropdown[@formcontrolname='measurement_unit']
`); }
    public get capacityInput() { return $(`//*[@id='firstname2'][@placeholder='Enter capacity']`); }
    public get specialEquipmentInput() { return $('#specialEquipment > div > ul > li > input'); }
    public get temperatureControlSelect() { return $('#temperatureControl > div'); }
    public get dockCountInput() { return $('#dockingStations'); }
    public get securityFeaturesInput() { return $(`//*[@type='text'][@placeholder='Enter security features']`); }
    public get unitOfMeasurementSelect() { return $(`//p-multiselect[@optionlabel='name' and @optionvalue='id' and @formcontrolname='unit_of_measure_ids' and @placeholder='Select a unit of measurement' and @name='uom']
        `); }
    public get pickTaskTypeSelect() { return $(`p-dropdown[placeholder="Select pick task type"]
`); }
    public get statusTypeSelect() { return $(`p-dropdown[placeholder="Select Status"]
`); }
    public get addButton() { return $(`//button[@type='submit' and contains(text(),'Add')]
`); }
    public get backButton() { return $('ontent-center.items-center > div:nth-child(1) > button'); }
    public get warehouseList() { return $(''); }
    public  warehouseListItem(name: string) { return $(`selector-for-warehouse-list-item[name="${name}"]`); }

    // Methods
   

    public async isNoWarehouseTextDisplayed(): Promise<boolean> {
        return await this.noWarehouseText.isDisplayed();
    }

    public async  clickAddWarehouseButton(): Promise<void> {
        await  this.addWarehouseButton.waitForDisplayed({
            timeout: 20000, 
            timeoutMsg: 'Element was not visible after 5 seconds'
        });
       
        await this.addWarehouseButton.click();
    }

    public async clickAddLaterLink(): Promise<void> {
        await this.addLaterLink.click();
    }

    public async isAddWarehousePageDisplayed(): Promise<boolean> {
        return await this.addWarehousePageHeader.isDisplayed();
    }

    public async isSideBarDisplayed(): Promise<boolean> {
        return await this.sideBar.isDisplayed();
    }

    public async enterWarehouseName(name: string): Promise<void> {
        await this.warehouseNameInput.setValue(name);
    }

    public async selectWarehouseType(type: string): Promise<void> {
       
        await this.warehouseTypeSelect.click();
        const typeOption = `//*[@id='Warehousetype_list']//li[@aria-label='${type}']`;
        console.log(typeOption);
await browser.$(typeOption).click();
       // await this.warehouseTypeSelect.selectByVisibleText(type);
    }

    public async enterDescription(description: string): Promise<void> {
        await this.descriptionInput.setValue(description);
    }

    public async enterWarehouseAddress(address: string): Promise<void> {
        await this.warehouseAddressInput.setValue(address);
    }

    public async enterCity(city: string): Promise<void> {
        await this.cityInput.setValue(city);
    }

    public async enterState(state: string): Promise<void> {
        await this.stateInput.setValue(state);
    }

    public async enterCountry(country: string): Promise<void> {
        await this.countryInput.setValue("India");
    }

    public async enterPostalCode(postalCode: string): Promise<void> {
        await this.postalCodeInput.setValue(1234);
    }

    public async selectWarehouseManager(manager: string): Promise<void> {
        await this.warehouseManagerSelect.click();
        const typeOption = `//*[@id='manager_list']//li[@aria-label='${manager}']`;
        console.log(typeOption);
await browser.$(typeOption).click();
        //await this.warehouseManagerSelect.selectByVisibleText(manager);
    }

    public async enterPhoneNumber(phoneNumber: string): Promise<void> {
        await this.phoneNumberInput.setValue("6347674647");
    }

    public async enterEmail(email: string): Promise<void> {
        await this.emailInput.setValue("example@gmail.com");
    }

    public async selectStartTime(startTime: string): Promise<void> {
        await this.startTimeSelect.setValue("12:30");
//        const typeOption = `//*[@id='pn_id_16_panel']//div[@aria-label='${startTime}']`;

//        console.log(typeOption);
//  await browser.$(typeOption).click();
        //await this.startTimeSelect.selectByVisibleText(startTime);
    }

    public async selectEndTime(endTime: string): Promise<void> {
        await this.endTimeSelect.setValue('12:40');
    //      const typeOption = `//*[@id='pn_id_17_panel']//div[@aria-label='${endTime}']`;
    //   console.log(typeOption);
    // await browser.$(typeOption).click();
    //    // await this.endTimeSelect.selectByVisibleText(endTime);
    }

    public async selectTimeZone(timeZone: string): Promise<void> {
        await this.timeZoneSelect.click();
        const typeOption = `//*[@id='timeZone_list']//li[@aria-label='${timeZone}']`;
        console.log(typeOption);
        await browser.$(typeOption).click();
        //await this.timeZoneSelect.selectByVisibleText(timeZone);
    }
    public async selectMeasurementUnit(measurementunits: string): Promise<void> {
        await this.selectMeasurementUnits.scrollIntoView();
        await this.selectMeasurementUnits.click();
        await browser.keys('ArrowDown');  
        await browser.keys('Enter');  
        //const typeOption = `//*[@id='pn_id_19_list']//li[@aria-label='${measurementunits}']`;
        //const typeOption = `#pn_id_19_3 span`;

// //add wait time here to wait for the element to be displayed
//  const measurementUnitElement = await browser.$(typeOption);
// await measurementUnitElement.waitForDisplayed({
//      timeout: 20000,
//      timeoutMsg: 'Element was not visible after 5 seconds'
//  });
       // console.log(typeOption);
       // await browser.$(typeOption).click();
        //await this.timeZoneSelect.selectByVisibleText(timeZone);
    }

    public async enterCapacity(capacity: string): Promise<void> {
        await this.capacityInput.setValue("100");
    }


    public async enterSpecialEquipment(equipment: string): Promise<void> {
        await this.specialEquipmentInput.setValue(equipment);
    }

    public async selectTemperatureControl(option: string): Promise<void> {
        await this.temperatureControlSelect.click();
        const typeOption = `//*[@id='temperatureControl_list']//li[@aria-label='${option}']`;
        console.log(typeOption);
        await browser.$(typeOption).click();
        //await this.temperatureControlSelect.selectByVisibleText(option);
    }

    public async enterDockCount(dockCount: string): Promise<void> {
        await this.dockCountInput.setValue(dockCount);
    }

    public async enterSecurityFeatures(features: string): Promise<void> {
        await this.securityFeaturesInput.setValue("Test Security");
    }

    public async selectUnitOfMeasurement(unit: string): Promise<void> {
        await this.unitOfMeasurementSelect.click();
        const typeOption = `//ul[@role='listbox' and @class='p-multiselect-items p-component ng-star-inserted' and @aria-label='Option List']//li[@aria-label='${unit}']

`;
        console.log(typeOption);
        await browser.$(typeOption).click();
        //await this.unitOfMeasurementSelect.selectByVisibleText(unit);
    }

    public async selectPickTaskType(taskType: string): Promise<void> {
        await this.pickTaskTypeSelect.click();
        await browser.keys('ArrowDown');
        await browser.keys('Enter');
    //     await this.pickTaskTypeSelect.click();
    //    const typeOption = `//*[@id='pn_id_20_list']//li[@aria-label='${taskType}']`;
//          const pickTasktypElement = await browser.$(typeOption);
//  await pickTasktypElement.waitForDisplayed({
//     timeout: 20000,
//     timeoutMsg: 'Element was not visible after 5 seconds'
//  });
    //console.log(typeOption);
     //await browser.$(typeOption).click();
        //await this.pickTaskTypeSelect.selectByVisibleText(taskType);
    }
    public async selectStatusType(statusType: string): Promise<void> {
        await this.statusTypeSelect.click();
        await browser.keys('ArrowDown');
        await browser.keys('Enter');
//         const typeOption = `//*[@id='pn_id_25_list']//li[@aria-label='${statusType}']

// `;
//         console.log(typeOption);
//         await browser.$(typeOption).click();
        //await this.pickTaskTypeSelect.selectByVisibleText(taskType);
    }

    public async clickAddButton(): Promise<void> {
        await this.addButton.click();
    }

    public async clickBackButton(): Promise<void> {
        await this.backButton.click();
    }

    public async isWarehouseListDisplayed(): Promise<boolean> {
        return await this.warehouseList.isDisplayed();
    }

    public async isWarehouseInList(name: string): Promise<boolean> {
        return await this.warehouseListItem(name).isDisplayed();
    }
    public async isAddButtonEnabled(): Promise<boolean> {                                                                                          
        return await this.addButton.isEnabled();                                                                                                 
    }

    public async addWarehouse(
        name: string,
        type: string,
        description: string,
        address: string,
        city: string,
        state: string,
        country: string,
        postalCode: string,
        manager: string,
        phoneNumber: string,
        email: string,
        startTime: string,
        endTime: string,
        timeZone: string,
        capacity: string,
        equipment: string,
        temperatureControl: string,
        dockCount: string,
        securityFeatures: string,
        unitOfMeasurement: string,
        pickTaskType: string
    ): Promise<void> {
        await this.enterWarehouseName(name);
        await this.selectWarehouseType(type);
        await this.enterDescription(description);
        await this.enterWarehouseAddress(address);
        await this.enterCity(city);
        await this.enterState(state);
        await this.enterCountry(country);
        await this.enterPostalCode(postalCode);
        await this.selectWarehouseManager(manager);
        await this.enterPhoneNumber(phoneNumber);
        await this.enterEmail(email);
        await this.selectStartTime(startTime);
        await this.selectEndTime(endTime);
        await this.selectTimeZone(timeZone);
        await this.enterCapacity(capacity);
        await this.enterSpecialEquipment(equipment);
        await this.selectTemperatureControl(temperatureControl);
        await this.enterDockCount(dockCount);
        await this.enterSecurityFeatures(securityFeatures);
        await this.selectUnitOfMeasurement(unitOfMeasurement);
        await this.selectPickTaskType(pickTaskType);
        await this.clickAddButton();
    }
   
}

export default new AddWarehousePage();