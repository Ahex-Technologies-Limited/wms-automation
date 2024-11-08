import LoginPage from '../pageobjects/log-in.page';
import WarehouseListPage from '../pageobjects/warehouse-list.page';
import UpdateWarehousePage from '../pageobjects/update-warehouse.page';
import { expect } from'@wdio/globals';

describe('Update Warehouse Form Test', () => {
    before(async () => {
        // Go to the login page and login
        await browser.url('http://143.244.132.143:8200/#/auth/login');
        await LoginPage.login('supriyasahoo1399@gmail.com', 'Supriya@12');
        await browser.url('http://143.244.132.143:8200/#/admin/warehouse/list');

        
    });
    it.only('should select a specific warehouse and click edit', async () => {
        const warehouseName = 'Supriya1'; 

        // Select the warehouse and click the edit button
        await WarehouseListPage.selectWarehouseAndEdit(warehouseName);

        // Ensure the update warehouse form is displayed
        const warehouseNameField = await UpdateWarehousePage.warehouseName;
        await warehouseNameField.waitForDisplayed({
            timeout: 10000,
            timeoutMsg: 'Warehouse update form did not load within 10 seconds'
        });

      await  expect(await warehouseNameField.getValue()).toEqual(warehouseName);
    });

    it('should update the warehouse information', async () => {
        const formData = {
            warehouseName: 'Updated Warehouse Name',
            warehouseType: 'Distribution Center',
            description: 'Test Description',
            warehouseAddress: '123 Test Address',
            city: 'Test City',
            stateProvince: 'Test State',
            country: 'Test Country',
            postalCode: '12345',
            warehouseManager: 'Manager Name',
            phoneNumber: '+1234567890',
            contactEmail: 'test@example.com',
            startTime: '08:00',
            endTime: '17:00',
            timeZone: 'UTC-05:00 Eastern Time (US & Canada)',
            capacity: '1000',
            specialEquipment: 'Trolleys',
            temperatureControl: 'Yes',
            dockingStation: '5',
            securityFeatures: 'CCTV, Biometrics',
            unitOfMeasurement: 'Square Feet',
            defaultPickTaskType: 'FIFO',
            status: 'Active'
        };

        // Fill out and submit the update form
        await UpdateWarehousePage.setWarehouseName(formData.warehouseName);
        await UpdateWarehousePage.clickUpdateButton();

        // Verification
        const successMessage = await $('#successMessage');
        await successMessage.waitForDisplayed();
      await  expect(await successMessage.getText()).toContain('Warehouse updated successfully');
    });
});
