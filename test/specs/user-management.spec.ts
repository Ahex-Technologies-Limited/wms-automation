import LoginPage from '../pageobjects/log-in.page';
import WarehouseListPage from '../pageobjects/warehouse-list.page';
import AddWarehousePage from '../pageobjects/add-warehouse.page';

import { expect } from '@wdio/globals';
import userManagementListPage from '../pageobjects/user-management-list.page';

describe('User Management Functionality', () => {
    before(async () => {
        await browser.url('http://143.244.132.143:8200/#/auth/login');
        await LoginPage.login('tester@gmail.com', 'Supriya@12');
        await browser.url('http://143.244.132.143:8200/#/admin/user-management/list');
    });
    it('TC001 Verify that after clicking on the add button the user should be able to add a new user', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await userManagementListPage.clickUserManagementSideBar();
        await userManagementListPage.clickMangeuserSideBar();
        await userManagementListPage.clickInviteUserButton(); await userManagementListPage.clickInviteUserButton();
        await userManagementListPage.enterUsername('TestUser');
        await userManagementListPage.selectUserRole('manager');
        await userManagementListPage.enterEmailId('supriyasahoo1399@gmail.com');
        await userManagementListPage.clickInviteUser();

        await browser.waitUntil(

            async () => await userManagementListPage.isInvitationSent(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected invitation to be sent'
            }
        );
    }
    );

    it('TC002 Verify that after clicking on the view button the user should be able to view the details of the  user', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await userManagementListPage.clickUserManagementSideBar();
         await userManagementListPage.clickMangeuserSideBar();
        await userManagementListPage.clickViewUserButton();
        await browser.waitUntil(
            async () => await userManagementListPage.isViewUserDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected user details to be displayed'
            }
        );
    });
    it('TC003 Verify that after clicking on the resend button the user should be able to resend the invitation to the user', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await userManagementListPage.clickUserManagementSideBar();
        await userManagementListPage.clickMangeuserSideBar();
        await userManagementListPage.clickResendInviteButton();
        await browser.waitUntil(
            async () => await userManagementListPage.isInvitationSent(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected invitation to be sent'
            }
        );
    });
    it('TC004 Verify that after searching for a user the user should be able to view the user details', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await userManagementListPage.clickUserManagementSideBar();
        await userManagementListPage.clickMangeuserSideBar();
        await userManagementListPage.searchUserInSideBar('TestUser');
        await browser.waitUntil(
            async () => await userManagementListPage.isViewUserDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected user details to be displayed'
            }
        );
    });
    it.only('TC005 Verify that after clicking on the cancel button the user should be able to cancel the invitation', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await userManagementListPage.clickUserManagementSideBar();
        await userManagementListPage.clickMangeuserSideBar();
        await userManagementListPage.clickInviteUserButton();
        await userManagementListPage.clickCancelInviteButton();
        await browser.waitUntil(
            async () => await userManagementListPage.isInvitationSent(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected invitation to be cancelled'
            }
        );
    });




});