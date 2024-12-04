
import LoginPage from '../pageobjects/log-in.page';
import WarehouseListPage from '../pageobjects/warehouse-list.page';
import AddWarehousePage from '../pageobjects/add-warehouse.page';

import { expect } from '@wdio/globals';
import userManagementListPage from '../pageobjects/user-management-list.page';
import mangeRolesListPage from '../pageobjects/mange-roles-list.page';
describe('Manage Roles', () => {
    before(async () => {
        await browser.url('http://143.244.132.143:8200/#/auth/login');
        await LoginPage.login('tester@gmail.com', 'Supriya@12');
        await browser.url('http://143.244.132.143:8200/#/admin/user-management/list');
    });
    after(async () => {
        await browser.deleteCookies();
    });
    it('TC001 Verify that after clicking on the add button the user should be able to add a new user role', async () => {
        await WarehouseListPage.selectWarehousecardname.click();
        await mangeRolesListPage.clickUserManagementSideBar();
        await mangeRolesListPage.clickMangeRolesSideBar();
        await mangeRolesListPage.clickAddRoleButton();
        await mangeRolesListPage.enterRoleName('New Role');
        await mangeRolesListPage.enterRoleDescription('Test description');
        await mangeRolesListPage.isPermissionSelected('Warehouse');
        // await mangeRolesListPage.isPermissionSelected('Zone');
        // await mangeRolesListPage.isPermissionSelected('SubInventory');
        // await mangeRolesListPage.isPermissionSelected('Locator');
        await mangeRolesListPage.clickRoleAddButton();
        await browser.waitUntil(
            async () => await mangeRolesListPage.isRoleListDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Expected role list to be displayed'
            }
        );


        
});
it('TC002 Verify that after clicking on the edit button the user should be able to edit the selected user role', async () => {
    await WarehouseListPage.selectWarehousecardname.click();
    await mangeRolesListPage.clickUserManagementSideBar();
    await mangeRolesListPage.clickMangeRolesSideBar();
    await mangeRolesListPage.clickRoleEditButton();
    const nameInput = await $(`//input[@formcontrolname='name']`);
    const descriptionInput = await $(`//*[@formcontrolname='description']`);
    await nameInput.clearValue();
    await nameInput.setValue('Role Updated');
    await descriptionInput.clearValue();
    await descriptionInput.setValue('Updated description');     
    await mangeRolesListPage.clickPermissionCheckbox();
    await mangeRolesListPage.isPermissionSelected('Warehouse');
     await mangeRolesListPage.isPermissionSelected('Zone');
     await mangeRolesListPage.isPermissionSelected('Sub Inventory');
     await mangeRolesListPage.isPermissionSelected('Locator');
    await mangeRolesListPage.clickUpdateButton();
    await browser.waitUntil(
        async () => await mangeRolesListPage.isRoleListDisplayed(),
        {
            timeout: 5000,
            timeoutMsg: 'Expected role list to be displayed'
        }
    );
});
it('TC003 Verify that after clicking on the back button the user should be able to go back to the user role list', async () => {
    await WarehouseListPage.selectWarehousecardname.click();
    await mangeRolesListPage.clickUserManagementSideBar();
    await mangeRolesListPage.clickMangeRolesSideBar();
    await mangeRolesListPage.clickAddRoleButton();
    await mangeRolesListPage.clickBackButton();
    await browser.waitUntil(
        async () => await mangeRolesListPage.isRoleListDisplayed(),
        {
            timeout: 5000,
            timeoutMsg: 'Expected role list to be displayed'
        }
    );
});
it('TC004 Verify that the user should be able to search for a user role', async () => {
    await WarehouseListPage.selectWarehousecardname.click();
    await mangeRolesListPage.clickUserManagementSideBar();
    await mangeRolesListPage.clickMangeRolesSideBar();
    await mangeRolesListPage.searchRole.setValue('Role Updated');
    await browser.waitUntil(
        async () => await mangeRolesListPage.isRoleListDisplayed(),
        {
            timeout: 5000,
            timeoutMsg: 'Expected role list to be displayed'
        }
    );
});






});