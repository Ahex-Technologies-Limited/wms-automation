import LoginPage from '../pageobjects/log-in.page';
import WarehouseListPage from '../pageobjects/warehouse-list.page';
import { expect } from '@wdio/globals';
import productListPage from '../pageobjects/product-list.page';
import { browser } from '@wdio/globals';
describe('Product Functionality', () => {
    before(async () => {
        await browser.url('http://143.244.132.143:8200/#/auth/login');
        await LoginPage.login('tester@gmail.com', 'Supriya@12');
        await browser.url('http://143.244.132.143:8200/#/admin/warehouse/list');
    });
    after(async () => {
        await browser.deleteCookies();
    });
    it('TC001 Verify that after clicking on the add button the user should be able to add a new product', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await productListPage.clickOnProductManagementSubMenu();
        await productListPage.clickOnProductSideBar();
        await productListPage.clickOnAddProductButton();
        await productListPage.enterProductName('Product 4');
        await productListPage.selectProductCategory('Fashion');
        await productListPage.selectSubCategory('KIDS CLOTHING');
        await productListPage.selectUOM('Meter');
        await productListPage.enterDescription('Test description 2');
        await productListPage.clickNextButtonInProductDetails();
        await productListPage.selectAttributes('Attribute 7');
        await productListPage.enterValues('red');
        await productListPage.clickConfigureButton();
        await productListPage.enterReorderLevel('12');
        await productListPage.enterQuantity('1234');
        await productListPage.clickNextButtonInAttributes();
        await productListPage.clickAddButtonInSupplier();


        await browser.waitUntil(
            async () => await productListPage.isProductListPageDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected role list to be displayed'
            }
        );
    });
    it ('TC002 Verify that the user should be able to search for a product', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await productListPage.clickOnProductManagementSubMenu();
        await productListPage.clickOnProductSideBar();
        await productListPage.enterSearchBar('Product 4');
        await browser.waitUntil(
            async () => await productListPage.isProductListPageDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected role list to be displayed'
            }
        );
    })
    it.only('TC003 Verify that the user should be able to edit a product', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await productListPage.clickOnProductManagementSubMenu();
        await productListPage.clickOnProductSideBar();
        await productListPage.clickOnSwapIconForlistView();
        await productListPage.clickEditIcon();
        const nameInput = await $(`//*[@formcontrolname='name']`);
        await nameInput.clearValue();
        await nameInput.setValue('Product 5');
        const selectbrandname = await $(`//*[@formcontrolname='brand']`);
        await selectbrandname.click();
        const brandoption = await $(`//span[contains(text(),'Brand 1')]`);
        console.log(await brandoption.getText());
        await brandoption.click();
        await productListPage.clickNextButtonInProductDetails();
        await productListPage.clickNextButtonInAttributes();
        await productListPage.clickAddButtonInSupplier();
        await browser.waitUntil(
            async () => await productListPage.isProductListPageDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected role list to be displayed'
            }
        );
    });
    it.only('TC004 Verify that the user should be able to delete a product', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await productListPage.clickOnProductManagementSubMenu();
        await productListPage.clickOnProductSideBar();
        await productListPage.clickOnSwapIconForlistView();
        await productListPage.clickDeleteIcon();
        await productListPage.clickYesButton();
        await browser.waitUntil(
            async () => await productListPage.isProductListPageDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected role list to be displayed'
            }
        );
    });

    it('TC005 Verify that the user should be able to view the product details', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await productListPage.clickOnProductManagementSubMenu();
        await productListPage.clickOnProductSideBar();
        await productListPage.clickOnSwapIconForlistView();
        await productListPage.clickViewIcon();
        await browser.waitUntil(
            async () => await productListPage.isProductDetailsPageDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected role list to be displayed'
            }
        );
    });
    it('TC006 Verify that the user should be able to cancel the delete operation', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await productListPage.clickOnProductManagementSubMenu();
        await productListPage.clickOnProductSideBar();
        await productListPage.clickOnSwapIconForlistView();
        await productListPage.clickDeleteIcon();
        await productListPage.clickNoButton();
        await browser.waitUntil(
            async () => await productListPage.isProductListPageDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected role list to be displayed'
            }
        );
    })
    it ('TC007 Verify that the user should be able to filter the product list', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await productListPage.clickOnProductManagementSubMenu();
        await productListPage.clickOnProductSideBar();
        await productListPage.clickFilterButton();
        await productListPage.selectCatagoryInFilter(' Fashion');
        await productListPage.clickApplyButtonInFilter();
        
        await browser.waitUntil(
            async () => await productListPage.isProductListPageDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected role list to be displayed'
            }
        );
    })
    it('TC008 Verify that the user should be able to clear the filter', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await productListPage.clickOnProductManagementSubMenu();
        await productListPage.clickOnProductSideBar();
        await productListPage.clickFilterButton();
        await productListPage.selectCatagoryInFilter(' Fashion');
       
        await productListPage.clickClearButtonInFilter();
        
        await browser.waitUntil(
            async () => await productListPage.isProductListPageDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected role list to be displayed'
            }
        );
    })

});