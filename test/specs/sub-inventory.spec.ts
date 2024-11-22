import LoginPage from '../pageobjects/log-in.page';
import WarehouseListPage from '../pageobjects/warehouse-list.page';
import AddWarehousePage from '../pageobjects/add-warehouse.page';
import { expect } from '@wdio/globals';
import warehouseListPage from '../pageobjects/warehouse-list.page';
import subinventoryListPage from '../pageobjects/sub-inventory-list.page';


describe('SubInventory Functionality', () => {
    before(async () => {
        await browser.url('http://143.244.132.143:8200/#/auth/login');
        await LoginPage.login('tester@gmail.com', 'Supriya@12');
        await browser.url('http://143.244.132.143:8200/#/admin/warehouse/list');
        
    });
    it.only('TC001 Verify that after clicking on the add button the user should be able to add a new sub-inventory', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await subinventoryListPage.clickSubInventorySidebar();
        await subinventoryListPage.clickSubInventoryAddButton();
        await subinventoryListPage.enterSubInventoryName('Subinventory5');
        await subinventoryListPage.enterDescription('Test Description');
        await subinventoryListPage.selectSubInventoryType('Raw Materials');
        await subinventoryListPage.enterCapacity('100');
        await subinventoryListPage.selectDimension('Inches (in)');
        await subinventoryListPage.enterLength('10');
        await subinventoryListPage.enterWidth('10');
        await subinventoryListPage.enterHeight('10');
        await subinventoryListPage.selectStatus('Active');
        await subinventoryListPage.selectTemperatureControlled('No');
        await subinventoryListPage.clickAddButton();
        await browser.waitUntil(
            async () => await subinventoryListPage.isSubInventoryListDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected subinventory list to be displayed'
            }
        );
        //await expect(await subinventoryListPage.successfullMessage.isDisplayed()).toBe(true);
    });
    it('TC002 Verify that after clicking on the edit button the user should be able to edit the selected sub-inventory', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await subinventoryListPage.clickSubInventorySidebar();
        await subinventoryListPage.clickEditSubInventoryButton();
        const nameInput = await $(`//input[@placeholder='Enter sub-inventory name']`);
        const descriptionInput = await $(`#inventoryDetails`);
        await nameInput.clearValue();
        await nameInput.setValue('SubInventory');
        await descriptionInput.clearValue();
        await descriptionInput.setValue('Updated Address');

        await subinventoryListPage.clickUpdateButton();
        await browser.waitUntil(
            async () => await subinventoryListPage.isSubInventoryListDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected subinventory list to be displayed'
            }
        );
        // await expect(await subinventoryListPage.successfullMessage.isDisplayed()).toBe(true);
    });

    it('TC003 Verify that after clicking on the delete button the user should be able to delete the selected sub-inventory', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await subinventoryListPage.clickSubInventorySidebar();
        await subinventoryListPage.clickDeleteButton();
        const reasonInput = await $(`//input[@placeholder='Enter']`);
        await reasonInput.setValue('Test Reason');
        // click the yes button
        const yesButton = await $(`button.button_yes`);
        await yesButton.click();
        await browser.waitUntil(
            async () => await subinventoryListPage.isSubInventoryListDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected subinventory list to be displayed'
            }
        );
        //await expect(await subinventoryListPage.successfullMessage.isDisplayed()).toBe(true);
    });

    it('TC004 Verify that the search functionality is working as expected', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await subinventoryListPage.clickSubInventorySidebar();
        await subinventoryListPage.searchSubInventory('Subinventory1');
        await browser.waitUntil(
            async () => await subinventoryListPage.isSubInventoryListDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected subinventory list to be displayed'
            }
        );
        //await expect(await subinventoryListPage.successfullMessage.isDisplayed()).toBe(true);
    });
    it('TC005 Verify that the filter functionality is working as expected based on type', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await subinventoryListPage.clickSubInventorySidebar();
        await subinventoryListPage.filterSubInventoryType('Raw Materials');
       
        await browser.waitUntil(
            async () => await subinventoryListPage.isSubInventoryListDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected subinventory list to be displayed'
            }
        );
        //await expect(await subinventoryListPage.successfullMessage.isDisplayed()).toBe(true);
    });
    it('TC006 Verify that the filter functionality is working as expected based on status', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await subinventoryListPage.clickSubInventorySidebar();
        
        await subinventoryListPage.filterStatus('Active');
        await browser.waitUntil(
            async () => await subinventoryListPage.isSubInventoryListDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected subinventory list to be displayed'
            }
        );
        await expect(await subinventoryListPage.successfullMessage.isDisplayed()).toBe(true);
    });
});