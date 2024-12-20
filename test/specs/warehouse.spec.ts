import LoginPage from '../pageobjects/log-in.page';
import WarehouseListPage from '../pageobjects/warehouse-list.page';
import AddWarehousePage from '../pageobjects/add-warehouse.page';

import { expect } from '@wdio/globals';
import warehouseListPage from '../pageobjects/warehouse-list.page';

describe('Warehouse Functionality', () => {
    before(async () => {
        // Go to the login page and login
        await browser.url('http://143.244.132.143:8200/#/auth/login');
        await LoginPage.login('tester@gmail.com', 'Supriya@12');
        await browser.url('http://143.244.132.143:8200/#/admin/warehouse/list');


    });
    it.only('TC001 Verify that after clicking on the add button the user should be able to add a new warehouse', async () => {
        // select warehouse card
        await WarehouseListPage.selectWarehousecardname.click();

        // Click the add button
        await WarehouseListPage.clickAddWarehouseButton();

        // Fill out the form
        await AddWarehousePage.enterWarehouseName('Supriya1');
        await AddWarehousePage.selectWarehouseType('Distribution Center');
        await AddWarehousePage.enterDescription('Test Description');
        await AddWarehousePage.enterWarehouseAddress('123 Test Address');
        await AddWarehousePage.enterCity('Test City');
        await AddWarehousePage.enterState('Test State');
        await AddWarehousePage.enterCountry('Test Country');
        await AddWarehousePage.enterPostalCode('12345');
        await AddWarehousePage.selectWarehouseManager('SupriyaTester');
        await AddWarehousePage.enterPhoneNumber('1234567890');
        await AddWarehousePage.enterEmail('supriyasahoo@gmail.com'); // Add a valid email address
        await AddWarehousePage.selectStartTime('08:00');
        await AddWarehousePage.selectEndTime('17:00');
        await AddWarehousePage.selectTimeZone('(UTC-05:00) Eastern Time (US & Canada)');
        await AddWarehousePage.selectMeasurementUnit('Square Feet (sq:ft)');
        await AddWarehousePage.enterCapacity('1000');
        await AddWarehousePage.enterSpecialEquipment('Trolleys');
        await AddWarehousePage.selectTemperatureControl('Yes');
        await AddWarehousePage.enterDockCount('5');
        await AddWarehousePage.enterSecurityFeatures('CCTV');
        await AddWarehousePage.selectUnitOfMeasurement('Box');
        await AddWarehousePage.selectPickTaskType('FIFO');
        await AddWarehousePage.selectStatusType('Active');
        await AddWarehousePage.clickAddButton();

        // Verify that the warehouse is added successfully
        await browser.waitUntil(
            async () => await AddWarehousePage.isWarehouseListDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected warehouse list to be displayed'
            }
        );
    });
    it('TC002 Verify that after clicking on the edit button the user should be able to edit the selected warehouse', async () => {
        // select warehouse card
        await WarehouseListPage.selectWarehousecardname.click();
        //Locate the Warehouse
        const warehouseRow = await $(`#pn_id_38-table > tbody > tr:nth-child(1)`);
        // Wait for the edit icon to be clickable
        await warehouseListPage.clickEditWarehouseButton();
        // update the warehouse name and description
        const nameInput = await $(`#name`);
        const descriptionInput = await $(`textarea[formcontrolname="description"]`);
        // Clear the current values and enter new ones
        await nameInput.clearValue();
        await nameInput.setValue('Updated Warehouse ');
        await descriptionInput.clearValue();
        await descriptionInput.setValue('Updated Address');

        // Click the update button
        const updateButton = await $(`button[type="submit"]`);
        await updateButton.click();
        // Verify that the warehouse is added successfully
        await browser.waitUntil(
            async () => await AddWarehousePage.isWarehouseListDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected warehouse list to be displayed'
            }
        );


    });
    it('TC003 Verify that after clicking on the delete button the user should be able to delete the selected warehouse', async () => {
        // select warehouse card
        await WarehouseListPage.selectWarehousecardname.click();
        //Locate the Warehouse
        const warehouseRow = await $(`#pn_id_38-table > tbody > tr:nth-child(1)`);
        // Wait for the delete icon to be clickable
        await warehouseListPage.clickDeleteButton();
        // enter some reason to delete
        const reasonInput = await $(`//input[@id='name']`);
        await reasonInput.setValue('Test Reason');
        // click the yes button
        const yesButton = await $(`//button[text()=' Yes ']`);
        await yesButton.click();

        // Verify that the warehouse is delted successfully
        await browser.waitUntil(
            async () => await AddWarehousePage.isWarehouseListDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected warehouse list to be displayed'
            }
        );
    });
    it('TC004 Verify that the search functionality is working correctly', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        // Search for a warehouse
        await WarehouseListPage.searchWarehouse('Updated Warehouse');
        // Verify that the warehouse is displayed
        await browser.waitUntil(
            async () => await AddWarehousePage.isWarehouseListDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected warehouse list to be displayed'
            }
        );
    });
    it('TC005 Verify that the filter functionality is working correctly', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        // Filter by warehouse type
        await WarehouseListPage.filterWarehouseType('Distribution Center');
        // Verify that the warehouse is displayed
        await browser.waitUntil(
            async () => await AddWarehousePage.isWarehouseListDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected warehouse list to be displayed'
            }
        );
        // Filter by status
        await WarehouseListPage.filterStatus('Active');
        // Verify that the warehouse is displayed
        await browser.waitUntil(
            async () => await AddWarehousePage.isWarehouseListDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected warehouse list to be displayed'
            }
        );
    });
    it.only('TC006 Verify that the user can change the status', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        //Locate the Warehouse
        const warehouseRow = await $(`#pn_id_38-table > tbody > tr:nth-child(1)`);
        // click on the status dropdown
        await warehouseListPage.clickStatusDropdown("Active");

        // Verify that the status is changed successfully
        await browser.waitUntil(
            async () => await AddWarehousePage.isWarehouseListDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected warehouse list to be displayed'
            }
        );




    });

});
