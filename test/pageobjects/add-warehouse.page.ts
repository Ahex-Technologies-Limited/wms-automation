import Page from './page';
import { $ ,browser} from '@wdio/globals';
class AddWarehousePage extends Page {
    // Selectors
    public get noWarehouseText() { return $('/html/body/app-root/app-secondlayout/app-warehouse/div/div/div/div/h2'); }
    public get addWarehouseButton() { return $('body > app-root > app-secondlayout > app-warehouse > div > div > div > div > div > button'); }
    public get addLaterLink() { return $('body > app-root > app-secondlayout > app-warehouse > div > div > div > div > a'); }
    public get addWarehousePageHeader() { return $('body > app-root > app-layout > div > div > app-add-warehouse > form > div > div > div.form.col-12.p-0.column-gap-6 > div.col-12.p-0.header-warehouse.my-4 > h3'); }
    public get sideBar() { return $('body > app-root > app-layout > div > app-sidebar'); }
    public get warehouseNameInput() { return $('#name'); }
    public get warehouseTypeSelect() { return $('#Warehousetype > div'); }
    public get descriptionInput() { return $('#inventoryDetails'); }
    public get warehouseAddressInput() { return $('#warehouseAddress'); }
    public get cityInput() { return $('#firstname2'); }
    public get stateInput() { return $('#stateName'); }
    public get countryInput() { return $('#Country'); }
    public get postalCodeInput() { return $('#postalCode'); }
    public get warehouseManagerSelect() { return $('body > app-root > app-layout > div > div > app-add-warehouse > form > div > div > div.form.col-12.p-0.column-gap-6 > div:nth-child(6) > div:nth-child(1) > div:nth-child(2)'); }
    public get phoneNumberInput() { return $('#contactPhone'); }
    public get emailInput() { return $('#email'); }
    public get startTimeSelect() { return $('#calendar-timeonly'); }
    public get endTimeSelect() { return $('#calendar-timeonly'); }
    public get timeZoneSelect() { return $('#timeZone > span'); }
    public get capacityInput() { return $('#firstname2'); }
    public get specialEquipmentInput() { return $('#specialEquipment > div > ul > li > input'); }
    public get temperatureControlSelect() { return $('#temperatureControl > div'); }
    public get dockCountInput() { return $('#dockingStations'); }
    public get securityFeaturesInput() { return $('#securityFeatures > div > ul'); }
    public get unitOfMeasurementSelect() { return $('#pn_id_23 > div.p-multiselect-trigger'); }
    public get pickTaskTypeSelect() { return $('#pn_id_24 > div'); }
    public get selectStatus() { return $('#pn_id_26 > div'); }
    public get addButton() { return $('body > app-root > app-layout > div > div > app-add-warehouse > form > div > div > div.block.md\:flex.justify-content-center.items-center > div:nth-child(2)'); }
    public get backButton() { return $('body > app-root > app-layout > div > div > app-add-warehouse > form > div > div > div.block.md\:flex.justify-content-center.items-center > div:nth-child(1) > button'); }
    public get warehouseList() { return $(''); }
    public warehouseListItem(name: string) { return $(`selector-for-warehouse-list-item[name="${name}"]`); }

    // Methods
   

    public async isNoWarehouseTextDisplayed(): Promise<boolean> {
        return await this.noWarehouseText.isDisplayed();
    }

    public async clickAddWarehouseButton(): Promise<void> {
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
        await this.warehouseTypeSelect.selectByVisibleText(type);
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
        await this.countryInput.setValue(country);
    }

    public async enterPostalCode(postalCode: string): Promise<void> {
        await this.postalCodeInput.setValue(postalCode);
    }

    public async selectWarehouseManager(manager: string): Promise<void> {
        await this.warehouseManagerSelect.selectByVisibleText(manager);
    }

    public async enterPhoneNumber(phoneNumber: string): Promise<void> {
        await this.phoneNumberInput.setValue(phoneNumber);
    }

    public async enterEmail(email: string): Promise<void> {
        await this.emailInput.setValue(email);
    }

    public async selectStartTime(startTime: string): Promise<void> {
        await this.startTimeSelect.selectByVisibleText(startTime);
    }

    public async selectEndTime(endTime: string): Promise<void> {
        await this.endTimeSelect.selectByVisibleText(endTime);
    }

    public async selectTimeZone(timeZone: string): Promise<void> {
        await this.timeZoneSelect.selectByVisibleText(timeZone);
    }

    public async enterCapacity(capacity: string): Promise<void> {
        await this.capacityInput.setValue(capacity);
    }

    public async enterSpecialEquipment(equipment: string): Promise<void> {
        await this.specialEquipmentInput.setValue(equipment);
    }

    public async selectTemperatureControl(option: string): Promise<void> {
        await this.temperatureControlSelect.selectByVisibleText(option);
    }

    public async enterDockCount(dockCount: string): Promise<void> {
        await this.dockCountInput.setValue(dockCount);
    }

    public async enterSecurityFeatures(features: string): Promise<void> {
        await this.securityFeaturesInput.setValue(features);
    }

    public async selectUnitOfMeasurement(unit: string): Promise<void> {
        await this.unitOfMeasurementSelect.selectByVisibleText(unit);
    }

    public async selectPickTaskType(taskType: string): Promise<void> {
        await this.pickTaskTypeSelect.selectByVisibleText(taskType);
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