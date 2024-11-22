import LoginPage from '../pageobjects/log-in.page';
import WarehouseListPage from '../pageobjects/warehouse-list.page';
import AddWarehousePage from '../pageobjects/add-warehouse.page';
import { expect } from '@wdio/globals';
import warehouseListPage from '../pageobjects/warehouse-list.page';
import subinventoryListPage from '../pageobjects/sub-inventory-list.page';
import { browser } from '@wdio/globals';
import locatorListPage from '../pageobjects/locator-list.page';

describe('Locator Functionality', () => {
    before(async () => {
        await browser.url('http://143.244.132.143:8200/#/auth/login');
        await LoginPage.login('tester@gmail.com', 'Supriya@12');
        await browser.url('http://143.244.132.143:8200/#/admin/warehouse/list');
    });
    it.only('TC001 Verify that after clicking on the add button the user should be able to add a new locator', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await locatorListPage.clickLocatorSidebar();
        await locatorListPage.clickLocatorAddButton();
        await locatorListPage.enterLocatorName('Locator3');
        await locatorListPage.selectLocatorType('Level');
        await locatorListPage.enterDescription('Test Description');
        await locatorListPage.selectStatus('Active');
        await locatorListPage.selectAssociatedLocator('Locator1');
        await locatorListPage.selectLocatorCapacityUnit('Square Feet (sq.ft)');
        await locatorListPage.enterLocatorCapacity('100');
        await locatorListPage.selectDimension('Meters (m)');
        await locatorListPage.enterLength('10');
        await locatorListPage.enterWidth('10');
        await locatorListPage.enterlocatorHeight('10');
        await locatorListPage.enterGroundSlot('5');
        await locatorListPage.enterHeight('5');
        await locatorListPage.enterNumberOfLevelesOrRows('5');
        await locatorListPage.enterStartingRangeAB('AB');
        await locatorListPage.enterStartingRange01('01');
        await locatorListPage.enterEndingRangeAB('CD');
        await locatorListPage.enterEndingRange01('05');
        await locatorListPage.clickAddButton();
        await browser.waitUntil(
            async () => await locatorListPage.isLocatorListDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected locator list to be displayed'
            }
        );
    });
    it('TC002 Verify that after clicking on the edit button the user should be able to edit the selected locator', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await locatorListPage.clickLocatorSidebar();
        await locatorListPage.clickEditLocatorButton();
        const nameInput = await $(`//*[@formcontrolname="name"]`);
        const descriptionInput = await $(`//*[@formcontrolname="description"]`);
        await nameInput.clearValue();
        await nameInput.setValue('Locator');
        await descriptionInput.clearValue();
        await descriptionInput.setValue('Updated Address');
        await locatorListPage.clickUpdateButton();
        await browser.waitUntil(
            async () => await locatorListPage.isLocatorListDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected locator list to be displayed'
            }
        );
    }
    );
    it('TC003 Verify that after clicking on the delete button the user should be able to delete the selected locator', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await locatorListPage.clickLocatorSidebar();
        await locatorListPage.clickDeleteButton();
        const reasonInput = await $(`//input[@placeholder='Enter']`);
        await reasonInput.setValue('Test Reason');
        const yesButton = await $(`//button[contains(@class, 'button_yes')]`);
        await yesButton.click();
        await browser.waitUntil(
            async () => await locatorListPage.isLocatorListDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected locator list to be displayed'
            }
        );
    });
    it('TC004 Verify that search functionality is working as expected', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await locatorListPage.clickLocatorSidebar();
        await locatorListPage.enterSearchBar('Locator');
        await browser.waitUntil(
            async () => await locatorListPage.isLocatorListDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected locator list to be displayed'
            }
        );

    });
    it('TC005 Verify that the filter functionality is working as expected based on the locator type', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await locatorListPage.clickLocatorSidebar();
        await locatorListPage.selectLocatorTypeFilter('Level');
        await browser.waitUntil(
            async () => await locatorListPage.isLocatorListDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected locator list to be displayed'
            }
        );
    });
    it('TC006 Verify that the filter functionality is working as expected based on the status', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await locatorListPage.clickLocatorSidebar();
        await locatorListPage.selectStatusFilter('Active');
        await browser.waitUntil(
            async () => await locatorListPage.isLocatorListDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected locator list to be displayed'
            }
        );
    });
});