import LoginPage from '../pageobjects/log-in.page';
import WarehouseListPage from '../pageobjects/warehouse-list.page';
import { expect } from '@wdio/globals';
import attributesListPage from '../pageobjects/attributes-list.page';
describe('Attributes functionality', () => {
    before(async () => {
        await browser.url('http://143.244.132.143:8200/#/auth/login');
        await LoginPage.login('tester@gmail.com', 'Supriya@12');
        await browser.url('http://143.244.132.143:8200/#/admin/user-management/list');
    });
    after(async () => {
        await browser.deleteCookies();
    });
    it.only('TC001 Verify that after clicking on the add button the user should be able to add a new attribute', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await attributesListPage.clickOperationSideBar();
        await attributesListPage.clickAttributesSideBar();
        await attributesListPage.clickAddAttributesButton();
        await attributesListPage.enterAttributeName('Attribute 10');
        await attributesListPage.enterAttributeDescription('Test description');
        await attributesListPage.clickAddAttribute();
        await browser.waitUntil(
            async () => await attributesListPage.isAttributeListDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected role list to be displayed'
            }
        );
    });
    it('TC002 Verify that the user should be able to search for a attribute', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await attributesListPage.clickOperationSideBar();
        await attributesListPage.clickAttributesSideBar();
        await attributesListPage.enterSearchAttribute('Attribute2');
        await browser.waitUntil(
            async () => await attributesListPage.isAttributeDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected role list to be displayed'
            }
        );
    })
    it('TC003 Verify that the user should be able to edit the selected attribute', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await attributesListPage.clickOperationSideBar();
        await attributesListPage.clickAttributesSideBar();
        await attributesListPage.clickEditButton();
        const nameInput = await $(`//input[@type='text' and @formcontrolname='name' and @placeholder='Enter attribute name']`);
        const descriptionInput = await $(`//*[@type='text' and @formcontrolname='description' and @placeholder='Enter description']`);
        await nameInput.clearValue();
        await nameInput.setValue('Updated Attribute');
        await descriptionInput.clearValue();
        await descriptionInput.setValue('Updated description');


        await attributesListPage.clickUpdateButton();
        await browser.waitUntil(
            async () => await attributesListPage.isAttributeUpdated(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected role list to be displayed'
            }
        );
    });
    it('TC004 Verify that the user should be able to delete the selected attribute', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await attributesListPage.clickOperationSideBar();
        await attributesListPage.clickAttributesSideBar();
        await attributesListPage.clickDeleteButton();
        await attributesListPage.clickYesButton();
        await browser.waitUntil(
            async () => await attributesListPage.isAttributeDeletedMessage(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected role list to be displayed'
            }
        );
    });
    it('TC005 Verify that the user should be able to cancel the delete operation', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await attributesListPage.clickOperationSideBar();
        await attributesListPage.clickAttributesSideBar();
        await attributesListPage.clickDeleteButton();
        await attributesListPage.clickNoButton();
        await browser.waitUntil(
            async () => await attributesListPage.isAttributeListDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected role list to be displayed'
            }
        );
    });
    
});