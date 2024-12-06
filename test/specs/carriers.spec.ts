import LoginPage from '../pageobjects/log-in.page';
import WarehouseListPage from '../pageobjects/warehouse-list.page';
import { expect } from '@wdio/globals';
import carriersListPage from '../pageobjects/carriers-list.page';
import { browser } from '@wdio/globals';
describe('Carriers Functionality', () => {
    before(async () => {
        await browser.url('http://143.244.132.143:8200/#/auth/login');
        await LoginPage.login('tester@gmail.com', 'Supriya@12');
        await browser.url('http://143.244.132.143:8200/#/admin/user-management/list');

    });
    after(async () => {
        await browser.deleteCookies();
    
    });    
    it('TC001 Verify that after clicking on the add button the user should be able to add a new carrier', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await carriersListPage.clickOperationSideBar();
        await carriersListPage.clickCarriersSideBar();
        await carriersListPage.clickAddCarriersButton();
        await carriersListPage.enterCarrierName('Carrier 1');
        await carriersListPage.selectCarrierType('Parcel');
        await carriersListPage.enterContactPerson('PersonA');
        await carriersListPage.enterContactPhoneNumber('1234567890');
        await carriersListPage.enterContactEmail('supriyasahoo1399@gmail.com');
        await carriersListPage.enterDotNumber('1234567');
        await carriersListPage.enterMcNumber('MC123456');
        await carriersListPage.selectInsuranceType('Cargo Insurance');
        await carriersListPage.selectSafetyRating('Unsatisfactory');
        await carriersListPage.selectEquipmentType('Bulk Trailers');
        await carriersListPage.enterCapacity('10');
        await carriersListPage.clickNextButton();
        await browser.waitUntil(
            async () => await carriersListPage.isCarrierListDisplayed(),    
            {
                timeout: 5000,
                timeoutMsg: 'Expected carriers list to be displayed'    
        }
    );   
});
it('TC002 Verify that the user should be able to search for a carrier', async () => {
    await WarehouseListPage.selectWarehousecardname.click();
    await carriersListPage.clickOperationSideBar();
    await carriersListPage.clickCarriersSideBar();
    await carriersListPage.enterSearchCarriers('Carrier1');
    await browser.waitUntil(
        async () => await carriersListPage.isCarrierListDisplayed(),
        {
            timeout: 5000,
            timeoutMsg: 'Expected carrier list to be displayed'
        }
    );
}); 
it('TC003 Verify that the user should be able to edit the selected carrier', async () => {
    await WarehouseListPage.selectWarehousecardname.click();
    await carriersListPage.clickOperationSideBar();
    await carriersListPage.clickCarriersSideBar();
    await carriersListPage.clickEditButton();
    const nameInput = await $(`//input[@formcontrolname='name' and contains(@class, 'outline-none')]`);
    const contactPersonInput = await $(`//input[@formcontrolname='contact_person' and contains(@class, 'outline-none')]`);
    await nameInput.clearValue();
    await nameInput.setValue('Carrier');
    await contactPersonInput.clearValue();
    await contactPersonInput.setValue('Updated Person');
    await carriersListPage.clickNextButton();
    await carriersListPage.clickNextButtonInUpdateCarrier();
    await browser.waitUntil(
        async () => await carriersListPage.isCarrierListDisplayed(),
        {
            timeout: 5000,
            timeoutMsg: 'Expected carrier to be updated'
        }
    );
}); 
it('TC004 Verify that the user should be able to delete the selected carrier', async () => {
    await WarehouseListPage.selectWarehousecardname.click();
    await carriersListPage.clickOperationSideBar();
    await carriersListPage.clickCarriersSideBar();
    await carriersListPage.clickDeleteButton();
    await carriersListPage.clickYesButton();
    await browser.waitUntil(
        async () => await carriersListPage.isCarrierListDisplayed(),
        {
            timeout: 5000,
            timeoutMsg: 'Expected carrier to be deleted'
        }
    );
});
it('TC005 Verify that the user should be able to view the selected carrier', async () => {
    await WarehouseListPage.selectWarehousecardname.click();
    await carriersListPage.clickOperationSideBar();
    await carriersListPage.clickCarriersSideBar();
    await carriersListPage.clickViewButton();
    await browser.waitUntil(
        async () => await carriersListPage.isCarrierDisplayed(),
        {
            timeout: 5000,
            timeoutMsg: 'Expected carrier to be displayed'
        }
    );
}); 
it('TC006 Verify that the user should be able to cancel the delete operation', async () => {
    await WarehouseListPage.selectWarehousecardname.click();
    await carriersListPage.clickOperationSideBar();
    await carriersListPage.clickCarriersSideBar();
    await carriersListPage.clickDeleteButton();
    await carriersListPage.clickNoButton();
    await browser.waitUntil(
        async () => await carriersListPage.isCarrierListDisplayed(),
        {
            timeout: 5000,
            timeoutMsg: 'Expected carrier list to be displayed'
        }
    ); 
});
it('TC007 Verify that the user should be able to update the status of the selected carrier', async () => {
    await WarehouseListPage.selectWarehousecardname.click();
    await carriersListPage.clickOperationSideBar();
    await carriersListPage.clickCarriersSideBar();
    await carriersListPage.changeStatus('Active');
    await browser.waitUntil(
        async () => await carriersListPage.isCarrierListDisplayed(),
        {
            timeout: 5000,
            timeoutMsg: 'Expected carrier list to be displayed'
        }
    );
}); 
it('TC008 Verify that the user should be able to update the carrier details in the carrier view page', async () => {
    await WarehouseListPage.selectWarehousecardname.click();
    await carriersListPage.clickOperationSideBar();
    await carriersListPage.clickCarriersSideBar();
    await carriersListPage.clickViewButton();
    await carriersListPage.clickEditButtonInViewPage();
    const nameInput = await $(`//input[@formcontrolname='name' and contains(@class, 'outline-none')]`);
    const contactPersonInput = await $(`//input[@formcontrolname='contact_person' and contains(@class, 'outline-none')]`);
    await nameInput.clearValue();
    await nameInput.setValue('Carrier 1');
    await contactPersonInput.clearValue();
    await contactPersonInput.setValue('PersonA');
    await carriersListPage.clickNextButton();
    await carriersListPage.clickNextButtonInUpdateCarrier();
    await browser.waitUntil(                                                    
        async () => await carriersListPage.isCarrierListDisplayed(),    
        {
            timeout: 5000,
            timeoutMsg: 'Expected carrier to be updated'                                                    
        }

    );
});
});