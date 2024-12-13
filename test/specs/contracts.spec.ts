import LoginPage from '../pageobjects/log-in.page';
import WarehouseListPage from '../pageobjects/warehouse-list.page';
import { expect } from '@wdio/globals';
import contractsListPage from '../pageobjects/contracts-list.page';
import { browser } from '@wdio/globals';

describe('Contracts Functionality', () => {
    before(async () => {
        await browser.url('http://143.244.132.143:8200/#/auth/login');
        await LoginPage.login('tester@gmail.com', 'Supriya@12');
        await browser.url('http://143.244.132.143:8200/#/admin/warehouse/list');
    });
    after(async () => {
        await browser.deleteCookies();
    });
    it('TC001 Verify that after clicking on the add button the user should be able to add a new contract', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await contractsListPage.clickOperationSideBar();
        await contractsListPage.clickContractsSideBar();
        await contractsListPage.clickAddContractsButton();
        await contractsListPage.selectStartDate('02-12-2024');
        await contractsListPage.selectEndDate('09-12-2024');
        await contractsListPage.selectCarrierName('Carrier 1');
        // await contractsListPage.enterContactPerson('Contact Person 1');
        await contractsListPage.selectContractType('Fixed-Price Contract');
        await contractsListPage.selectDeliveryType('Standard Delivery');
        await contractsListPage.selectDeliveryMode('Air Freight');
        await contractsListPage.clickNextButtonContractInfo();
        await browser.waitUntil(
            async () => await contractsListPage.isContractListDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected role list to be displayed'
            }
        );
    });
    it('TC002 Verify that the user should be able to search for a contract', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await contractsListPage.clickOperationSideBar();
        await contractsListPage.clickContractsSideBar();
        await contractsListPage.enterSearchContract('Carrier 1');
        await browser.waitUntil(
            async () => await contractsListPage.isContractListDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected contract list to be displayed'
            }
        );
    })
    it('TC003 Verify that the user should be able to edit a contract', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await contractsListPage.clickOperationSideBar();
        await contractsListPage.clickContractsSideBar();
        await contractsListPage.clickEditionButton();
        await contractsListPage.selectCarrierName('Carrier3');
        await contractsListPage.clickNextButtonContractInfo();
        await contractsListPage.clickNextButtonInDocument();
        await browser.waitUntil(
            async () => await contractsListPage.isContractListDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected carrier to be updated'
            }
        );




    });
    it('TC004 Verify that the user should be able to view the details of the selected contract', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await contractsListPage.clickOperationSideBar();
        await contractsListPage.clickContractsSideBar();
        await contractsListPage.clickViewButton();
        await browser.waitUntil(
            async () => await contractsListPage.isContractListDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected carrier to be displayed'
            }
        );
    })     
    it('TC005 Verify that the user should be able to edit the selected contract in the viewdetails page', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await contractsListPage.clickOperationSideBar();
        await contractsListPage.clickContractsSideBar();
        await contractsListPage.clickViewButton();
        await contractsListPage.clickEditIconInViewContract();
        await contractsListPage.selectCarrierName('Carrier 1');
        await contractsListPage.clickNextButtonContractInfo();
        await contractsListPage.clickNextButtonInDocument();
        await browser.waitUntil(
            async () => await contractsListPage.isContractListDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected carrier to be updated'
            }
        );
    });
    it('TC006 Verify that the user should be able to search for the  contract', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await contractsListPage.clickOperationSideBar();
        await contractsListPage.clickContractsSideBar();
        await contractsListPage.enterSearchContract('Contract 1');
        await browser.waitUntil(
            async () => await contractsListPage.isContractListDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected contract list to be displayed'
            }
        );
    })
    it('TC007 Verify that the user should be able to change the status of the selected contract', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await contractsListPage.clickOperationSideBar();
        await contractsListPage.clickContractsSideBar();
        await contractsListPage.changeStatus('Active');
        await browser.waitUntil(
            async () => await contractsListPage.isContractListDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected contract list to be displayed'
            }
        );
    })


});