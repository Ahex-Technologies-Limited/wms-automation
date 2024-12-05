import { expect, browser } from '@wdio/globals';
import AddWarehousePage from '../pageobjects/add-warehouse.page';
import logInPage from '../pageobjects/log-in.page';

describe('Add Warehouse Functionality', function () {
    //  beforeEach(async function () {
    //     await logInPage.open();
    //     await logInPage.login('supriyasahoo1399@gmail.com', 'Supriya@12');
    //  });

    afterEach(async function () {
        // await browser.reloadSession();
        await browser.closeWindow();
    });

    it('TC001 Verify that "No Warehouse Added" text should display initially', async () => {
        await logInPage.open();
        await logInPage.login('supriyasahoo@gmail.com', 'Supriya@12');

        await browser.waitUntil(
            async () => await AddWarehousePage.isNoWarehouseTextDisplayed(),
            {
                timeout: 30000,
                timeoutMsg: 'Expected "No Warehouse Added" text to be displayed'
            }
        );
        expect(await AddWarehousePage.isNoWarehouseTextDisplayed()).toBeTruthy();
    });

    it('TC002 Verify that it should navigate to Add Warehouse page when "Add Warehouse" button is clicked', async () => {
        await logInPage.open();
        await logInPage.login('supriyasahoo@gmail.com', 'Supriya@12');
        await browser.waitUntil(
            async () => await AddWarehousePage.addWarehouseButton.isDisplayed(),
            {
                timeout: 30000,
                timeoutMsg: 'Expected "Add Warehouse" button to be displayed'
            }
        );
        await AddWarehousePage.clickAddWarehouseButton();
        await browser.waitUntil(
            async () => await AddWarehousePage.isAddWarehousePageDisplayed(),
            {
                timeout: 10000,
                timeoutMsg: 'Expected Add Warehouse page to be displayed'
            }
        );
        expect(await AddWarehousePage.isAddWarehousePageDisplayed()).toBeTruthy();
    });

    it('TC003 Verify that it should display the sidebar when "Add Later" link is clicked', async () => {
        await  logInPage.open();
        await logInPage.login('tester@gmail.com', 'Supriya@12');
        await browser.waitUntil(
            async () => await AddWarehousePage.addLaterLink.isDisplayed(),
            {
                timeout: 10000,
                timeoutMsg: 'Expected "Add Later" link to be displayed'
            }
        );
        await AddWarehousePage.clickAddLaterLink();
        await browser.waitUntil(
            async () => await AddWarehousePage.isSideBarDisplayed(),
            {
                timeout: 10000,
                timeoutMsg: 'Expected sidebar to be displayed'
            }
        );
        expect(await AddWarehousePage.isSideBarDisplayed()).toBeTruthy();
    });
    it('TC004 Verify that it should successfully add a warehouse', async () => {
         await  logInPage.open();
         await logInPage.login('tester@gmail.com', 'Supriya@12');
       
        await AddWarehousePage.clickAddWarehouseButton();
      
        await browser.waitUntil(
            async () => await AddWarehousePage.addWarehousePageHeader.isDisplayed(),
            {
                timeout: 10000,
                timeoutMsg: 'Expected Add Warehouse page to be displayed'
            }
        );

        // Fill in the warehouse details
        await AddWarehousePage.enterWarehouseName('Test Warehouse A');
        await AddWarehousePage.selectWarehouseType('Storage');
        await AddWarehousePage.enterDescription('This is a test warehouse');
        await AddWarehousePage.enterWarehouseAddress('123 Test Street');
        await AddWarehousePage.enterCity('Test City');
        await AddWarehousePage.enterState('Test State');
        await AddWarehousePage.enterCountry('Test Country');
        await AddWarehousePage.enterPostalCode('12345');
        await AddWarehousePage.selectWarehouseManager('Supriya Sahoo');
        await AddWarehousePage.enterPhoneNumber('1234567890');
        await AddWarehousePage.enterEmail('supriyasahoo1399@gmail.com');
        await AddWarehousePage.selectStartTime('12:30');
        await AddWarehousePage.selectEndTime('12:40');
        await AddWarehousePage.selectTimeZone('(UTC-05:00) Eastern Time (US & Canada)');
        await AddWarehousePage.selectMeasurementUnit('Square Feet (sq.ft)'); 
        await AddWarehousePage.enterCapacity('100');  
        await AddWarehousePage.enterSpecialEquipment('Test Equipment');
        await AddWarehousePage.selectTemperatureControl('Yes');
        await AddWarehousePage.enterDockCount('5');
        await AddWarehousePage.enterSecurityFeatures('Test Security');
        await AddWarehousePage.selectUnitOfMeasurement('Meter');
        await AddWarehousePage.selectPickTaskType('FIFO');
        await AddWarehousePage.selectStatusType('Active');
             // Click the "Add" button to submit the form
             await AddWarehousePage.clickAddButton();
             
        // Verify that the warehouse is added successfully
        await browser.waitUntil(
            async () => await AddWarehousePage.isWarehouseListDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected warehouse list to be displayed'
            }
        );
      // await  expect(await AddWarehousePage.isWarehouseInList('Test Warehouse A')).toBeTruthy();
    });

    it('TC005 Verify that it should display the warehouse list after adding a warehouse', async () => {
        await  logInPage.open();
        await logInPage.login('tester@gmail.com', 'Supriya@12');
        await AddWarehousePage.clickAddWarehouseButton();
        await browser.waitUntil(
            async () => await AddWarehousePage.isAddWarehousePageDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected Add Warehouse page to be displayed'
            }
        );

        // Fill in the warehouse details
        await AddWarehousePage.enterWarehouseName('Test Warehouse A');
        await AddWarehousePage.selectWarehouseType('Distribution Center');
        await AddWarehousePage.enterDescription('This is a test warehouse');
        await AddWarehousePage.enterWarehouseAddress('123 Test Street');
        await AddWarehousePage.enterCity('Test City');
        await AddWarehousePage.enterState('Test State');
        await AddWarehousePage.enterCountry('india');
        await AddWarehousePage.enterPostalCode('12345');
        await AddWarehousePage.selectWarehouseManager('Test Manager');
        await AddWarehousePage.enterPhoneNumber('1234567890');
        await AddWarehousePage.enterEmail('supriyasahoo1399@gmail.com');
        await AddWarehousePage.selectStartTime('10:00 AM');
        await AddWarehousePage.selectEndTime('  06:00 PM');
        await AddWarehousePage.selectTimeZone('(UTC-05:00) Eastern Time (US & Canada)');
        await AddWarehousePage.selectMeasurementUnit('Square Feet (sq.ft)'); 
        await AddWarehousePage.enterCapacity('100');  
        await AddWarehousePage.enterSpecialEquipment('Test Equipment');
        await AddWarehousePage.selectTemperatureControl('Yes');
        await AddWarehousePage.enterDockCount(' 5');
        await AddWarehousePage.enterSecurityFeatures('Test Security');
        await AddWarehousePage.selectUnitOfMeasurement('Meter');
        await AddWarehousePage.selectPickTaskType('FIFO');
        await AddWarehousePage.selectStatusType('Active');
        await AddWarehousePage.clickAddButton();
        // Verify that the warehouse list is displayed
        await browser.waitUntil(
            async () => await AddWarehousePage.isWarehouseListDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected warehouse list to be displayed'
            }
        );
        expect(await AddWarehousePage.isWarehouseListDisplayed()).toBeTruthy();
    });
    it('TC006 Verify that it should navigate back without adding a warehouse when "Back" button is clicked', async () => {
        await  logInPage.open();
        await logInPage.login('supriyasahoo@gmail.com', 'Supriya@12');
        await AddWarehousePage.clickAddWarehouseButton();
        await browser.waitUntil(
            async () => await AddWarehousePage.isAddWarehousePageDisplayed(),
            {
                timeout: 10000,
                timeoutMsg: 'Expected Add Warehouse page to be displayed'
            }
        );
     
        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight); // Scrolls to the bottom
        });
        
        // Click the "Back" button to navigate back
        await AddWarehousePage.clickBackButton();
      

        // Verify that the "No Warehouse Added" text is still displayed
        await browser.waitUntil(
            async () => await AddWarehousePage.isNoWarehouseTextDisplayed(),
            {
                timeout: 10000,
                timeoutMsg: 'Expected "No Warehouse Added" text to be displayed'
            }
        );
        expect(await AddWarehousePage.isNoWarehouseTextDisplayed()).toBeTruthy();
    });
    it.only('TC007  Verify that the add warehose button is disabled when the mandatory fields are not filled', async () => {  
        await  logInPage.open();
        await logInPage.login('supriyasahoo@gmail.com', 'Supriya@12');       
        await AddWarehousePage.clickAddWarehouseButton();
        await browser.waitUntil(
            async () => await AddWarehousePage.isAddWarehousePageDisplayed(),
            {
                timeout: 10000,
                timeoutMsg: 'Expected Add Warehouse page to be displayed'
            }
        );

        // Verify that the "Add" button is disabled
        expect(await AddWarehousePage.isAddButtonEnabled()).toBeFalsy();

        
    });              
    
});