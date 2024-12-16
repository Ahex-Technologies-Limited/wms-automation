import LoginPage from '../pageobjects/log-in.page';
import WarehouseListPage from '../pageobjects/warehouse-list.page';
import { expect } from '@wdio/globals';
import productListPage from '../pageobjects/product-list.page';
import { browser } from '@wdio/globals';
import InventoryListPage from '../pageobjects/inventory-list.page';
describe('Inventory-List Functionality', () => {
    before(async () => {
        await browser.url('http://143.244.132.143:8200/#/auth/login');
        await LoginPage.login('tester@gmail.com', 'Supriya@12');
        await browser.url('http://143.244.132.143:8200/#/admin/warehouse/list');
    });
    after(async () => {
        await browser.deleteCookies();
    });
    it('TC001 Verify that after clicking on the add button the user should be able to add a new inventory', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await InventoryListPage.clickOnProductManagementSubMenu();
        await InventoryListPage.clickOnInventoryListSideBar();
        await InventoryListPage.clickOnAddInventoryButton();
        await InventoryListPage.selectSku('MmRaTzXEqs');
        await InventoryListPage.enterShipmentId('1234');
        await InventoryListPage.enterQuantity('100');
        await InventoryListPage.enterLotNumber('1234');
        await InventoryListPage.enterCost('100');
        await InventoryListPage.enterSellingPrice('100');
        await InventoryListPage.selectExpiryDate('12/25/2024')
        await InventoryListPage.clickAddButton();
        await browser.waitUntil(
            async () => await InventoryListPage.isInventoryListPageDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected role list to be displayed'
            }
        );
    });
    it('TC002 Verify that the user should be able to search for a inventory', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await InventoryListPage.clickOnProductManagementSubMenu();
        await InventoryListPage.clickOnInventoryListSideBar();
        await InventoryListPage.clickOnSearchBar('MmRaTzXEqs');

        await browser.waitUntil(
            async () => await InventoryListPage.isInventoryListPageDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected role list to be displayed'
            }
        );
    })
    it('TC003 Verify that the user should be able to edit a inventory', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await InventoryListPage.clickOnProductManagementSubMenu();
        await InventoryListPage.clickOnInventoryListSideBar();
        await InventoryListPage.clickViewButton();
        await InventoryListPage.clickEditInventoryDetails();
        const costPrice = await $(`//input[@formcontrolname='cost_price' and @type='number']`);
        await costPrice.clearValue();
        await costPrice.setValue('200');
        const sellingPrice = await $(`//input[@formcontrolname='sales_price' and @type='number']`);
        await sellingPrice.clearValue();
        await sellingPrice.setValue('200');
        await InventoryListPage.clickUpdateButton();
        await browser.waitUntil(
            async () => await InventoryListPage.isInventoryListPageDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected role list to be displayed'
            }
        );
    })
    it('TC004 Verify that the user should be able to filter a inventory', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await InventoryListPage.clickOnProductManagementSubMenu();
        await InventoryListPage.clickOnInventoryListSideBar();
        await InventoryListPage.clickFilterButton();
        await InventoryListPage.selectUomInFilter('Milliliter');
        await InventoryListPage.selectCatagoryInFilter('Books');
        await InventoryListPage.clickApplyButton();
        await browser.waitUntil(
            async () => await InventoryListPage.isInventoryListPageDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected role list to be displayed'
            }
        );
    });
    it.only('TC005 Verify that the user should be able to view details of a inventory', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await InventoryListPage.clickOnProductManagementSubMenu();
        await InventoryListPage.clickOnInventoryListSideBar();
        await InventoryListPage.clickViewButton();
   
        await browser.waitUntil(
            async () => await InventoryListPage.isDetailsInventoryPageDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected role list to be displayed'
            }
        );
    });
    it('TC006 Verify that the user should be able to clear the filter', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await InventoryListPage.clickOnProductManagementSubMenu();
        await InventoryListPage.clickOnInventoryListSideBar();
        await InventoryListPage.clickFilterButton();
        await InventoryListPage.selectUomInFilter('Milliliter');
        await InventoryListPage.clickClearButton();
        await browser.waitUntil(
            async () => await InventoryListPage.isInventoryListPageDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected role list to be displayed'
            }
        );
    });

});






