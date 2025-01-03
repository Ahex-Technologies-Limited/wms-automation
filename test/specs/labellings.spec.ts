import LoginPage from '../pageobjects/log-in.page';
import WarehouseListPage from '../pageobjects/warehouse-list.page';
import { expect } from '@wdio/globals';

import { browser } from '@wdio/globals';
import labellingsPage from '../pageobjects/labellings.page';

describe('Labellings functionality', () => {
    before(async () => {
        await browser.url('http://143.244.132.143:8200/#/auth/login');
        await LoginPage.login('tester@gmail.com', 'Supriya@12');
        await browser.url('http://143.244.132.143:8200/#/admin/warehouse/list');
    });
    after(async () => {
        await browser.deleteCookies();
    });
    it('TC001 Verify that after clicking on the add button the user should be able to add a new labelling', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await labellingsPage.clickOnLabelSideBar();
        await labellingsPage.clickOnAddLabelButton();
        await labellingsPage.selectLabelType('SKU');
        await labellingsPage.selectFormat('Custom Text');
        await labellingsPage.enterShowValue('1234');
        await labellingsPage.selectSeparator();
        await labellingsPage.clickOnAddFormatLink();
        await labellingsPage.selectFormat('Brand');
        await labellingsPage.selectSeparator();
        await labellingsPage.clickOnPreviewButton();
        await labellingsPage.clickOnCreateButton();
        await browser.waitUntil(
            async () => await labellingsPage.isLabelListDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected labelling list to be displayed'
            }
        );
    });
    it('TC002 Verify that the user should be able to search for a labelling', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await labellingsPage.clickOnLabelSideBar();
        await labellingsPage.enterInSearchBar('SKU');
        await browser.waitUntil(
            async () => await labellingsPage.isLabelPageDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected labelling list to be displayed'
            }
        );
    });
    it('TC003 Verify that the user should be able to change the status of the labellings', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await labellingsPage.clickOnLabelSideBar();
        await labellingsPage.selectStatus();
        await browser.waitUntil(
            async () => await labellingsPage.isLabelPageDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected labelling list to be displayed'
            }
        );
    });
    it('TC004 Verify that the user should be able to delete the labelling', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await labellingsPage.clickOnLabelSideBar();
        await labellingsPage.clickOnAddLabelButton();
        await labellingsPage.selectLabelType('SKU');
        await labellingsPage.selectFormat('Custom Text');
        await labellingsPage.enterShowValue('1234');    
        await labellingsPage.selectSeparator(); 
        await labellingsPage.clickOnDeleteIcon();
        await browser.waitUntil(
            async () => await labellingsPage.istemplatePageDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected labelling list to be displayed'
            }
        );
    });
    it('TC005 Verify that the the filter functionality is working correctly', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await labellingsPage.clickOnLabelSideBar();
        await labellingsPage.clickOnFilterButton();
        await labellingsPage.selectFilterStatus('Active');
        await labellingsPage.clickOnApplyButton();
     
        await browser.waitUntil(
            async () => await labellingsPage.isLabelPageDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected labelling list to be displayed'
            }
        );
    });
    it.only('TC006 Verify that the user should be able to clear the filter', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await labellingsPage.clickOnLabelSideBar();
        await labellingsPage.clickOnFilterButton();
        await labellingsPage.selectFilterStatus('Active');
       
        await labellingsPage.clickOnClearButton();
        await browser.waitUntil(
            async () => await labellingsPage.isLabelPageDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected labelling list to be displayed'
            }
        );
    });
});
    
