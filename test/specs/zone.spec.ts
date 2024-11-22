//write test based on the zonelist page
import LoginPage from '../pageobjects/log-in.page';
import WarehouseListPage from '../pageobjects/warehouse-list.page';
import AddWarehousePage from '../pageobjects/add-warehouse.page';
import { expect } from'@wdio/globals';
import zoneListPage from '../pageobjects/zone-list.page';


describe('Zone Functionality', () => {
    before(async () => {
        await browser.url('http://143.244.132.143:8200/#/auth/login');
        await LoginPage.login('tester@gmail.com', 'Supriya@12');
        await browser.url('http://143.244.132.143:8200/#/admin/warehouse/list');
});
    it('TC001 Verify that after clicking on the add button the user should be able to add a new zone', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await zoneListPage.clickZoneSidebar();
        await zoneListPage.clickAddZoneButton();
        await zoneListPage.enterZoneName('Zone5');
        await zoneListPage.enterDescription('Test Description');
        await zoneListPage.selectZoneType('Storage');
        await zoneListPage.selectStatus('Active');
        await zoneListPage.selectSubInventoryAssociation('Subinventory2');
        await zoneListPage.selectCapacity('Square Feet (sq.ft)');
        await zoneListPage.enterCapacity('100');
        await zoneListPage.selectDimension('Meters (m)');
        await zoneListPage.enterLength('10');
        await zoneListPage.enterWidth('10');
        await zoneListPage.enterHeight('10');
        await zoneListPage.enterCycleCountFrequency('5');
        await zoneListPage.enterOperationHoursStartTime('08:00');
        await zoneListPage.enterOperationHoursEndTime('17:00');
        await zoneListPage.selectTemperatureControlled('No');
        await zoneListPage.clickAddButton();
        await browser.waitUntil(
            async () => await zoneListPage.isZoneListDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected zone list to be displayed'
            }
        );

       
       // await expect(await zoneListPage.successfullMessage.isDisplayed()).toBe(true);
    
    });

    it('TC002 Verify that after clicking on the edit button the user should be able to edit the selected zone', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await zoneListPage.clickZoneSidebar();
        await zoneListPage.clickEditZoneIcon();
        const nameInput = await $(`//*[@formcontrolname='name']`);
        const descriptionInput = await $(`//*[@formcontrolname='description']`);
        // Clear the current values and enter new ones
        await nameInput.clearValue();
        await nameInput.setValue('Zone5');
        await descriptionInput.clearValue();
        await descriptionInput.setValue('Updated Address');
       
        await zoneListPage.clickUpdateButton();
        await browser.waitUntil(
            async () => await zoneListPage.isZoneListDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected zone list to be displayed'
            }
        );
        //await expect(await zoneListPage.successfullMessage.isDisplayed()).toBe(true);
    
 }); 

    it('TC003 Verify that after clicking on the delete button the user should be able to delete the selected zone', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await zoneListPage.clickZoneSidebar();
        await zoneListPage.clickDeleteZoneIcon();
        const reasonInput = await $(`//input[@placeholder='Enter']`);
        await reasonInput.setValue('Test Reason');
        // click the yes button
        const yesButton = await $(`//button[contains(@class, 'button_yes')]`);
        await yesButton.click();

        await browser.waitUntil(
            async () => await zoneListPage.isZoneListDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected zone list to be displayed'
            }
        );
       // await expect(await zoneListPage.successfullMessage.isDisplayed()).toBe(true);
    });
    it('TC004 Verify that the search functionality is working as expected', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await zoneListPage.clickZoneSidebar();
        await zoneListPage.enterSearchZone('Zone1');
        await browser.waitUntil(
            async () => await zoneListPage.isZoneListDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected zone list to be displayed'
            }
        );
    });
    it('TC005 Verify that the flter functionality is working as expected based on the type', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await zoneListPage.clickZoneSidebar();
        await zoneListPage.selectZoneTypeFilter('Storage') 
        await browser.waitUntil(
            async () => await zoneListPage.isZoneListDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected warehouse list to be displayed'
            }
        );
    });
    it.only('TC006 Verify that the flter functionality is working as expected based on the status', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await zoneListPage.clickZoneSidebar();
        await zoneListPage.selectStatusFilter('Active') 
        await browser.waitUntil(
            async () => await zoneListPage.isZoneListDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected warehouse list to be displayed'
            }
        );
    });
});

            