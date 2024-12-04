import Page from './page';

import { $, browser } from '@wdio/globals';
class MangeRolesListPage extends Page {
    //selectors
    public get manageRolesList() {
        return $(`//span[contains(@class, 'ml-2') and text()='List']`);
    }
    public get userManagementSideBar() {
        return $(`//span[contains(@class, 'p-menuitem-text') and text()='User Management']`);
    }
    public get manageRolesSideBar() {
        return $(`//span[text()='Manage Roles']`);
    }
    public get addRoleButton() {
        return $(`//button[contains(@class, 'button_add') and contains(@class, 'p-button')]`);
    }
    public get roleName() {
        return $(`//input[@formcontrolname='name']`);
    }
    public get roleDescription() {
        return $(`//textarea[@formcontrolname='description']`);
    }
    public get roleAddButton() {
        return $(`//button[contains(@class, 'button_add') and contains(@class, 'p-button') and text()=' Add ']`);
    }
    public get roleEditButton() {
       
        return $(`//*[contains(text(),'New Role')]//ancestor::td/following-sibling::td//*[@class='pi pi-pencil']`);
    }
    public get selectPermission() {
        return $(`//label[@for='binary1' or normalize-space(text())='Warehouse']`);
    }
    public get backButton() {
        return $(`//button[contains(@class, 'button_back') and contains(@class, 'p-button')]`);
    }
    public get updateButton() {
        return $(`//button[@type='button' and normalize-space(text())='Update']`);
    }

    public get searchRole() {
        return $(`//input[@placeholder='Search...']`);
    }

    //Methods
    public async clickManageRolesList() {
        await (await this.manageRolesList).click();
    }
    public async clickUserManagementSideBar() {
        await (await this.userManagementSideBar).click();
    }

    public async clickMangeRolesSideBar() {
        await (await this.manageRolesSideBar).click();
    }
    public async clickAddRoleButton() {
        await (await this.addRoleButton).click();
    }
    public async enterRoleName(roleName: string) {
        await (await this.roleName).setValue(roleName);
    }
    public async enterRoleDescription(roleDescription: string) {
        await (await this.roleDescription).setValue(roleDescription);
    }
    public async isPermissionSelected(permission: string) {
        const permissionCheckbox =
            await browser.$(`//label[text()='${permission}']//parent::div/p-checkbox`);

        await (await permissionCheckbox).click();
    }
    public async clickRoleAddButton() {
        await (await this.roleAddButton).click();
    }
    public async clickBackButton() {
        await (await this.backButton).click();
    }
    public async clickRoleEditButton() {
        await (await this.roleEditButton).click();
    }
    public async clickUpdateButton() {
        await (await this.updateButton).click();
    }
    public async searchRoleInSearhbar(roleName: string) {
        await (await this.searchRole).setValue(roleName);
    }
    public async isRoleListDisplayed(): Promise<boolean> {
        const roleList = await $(`//span[contains(@class, 'ml-2') and text()='List']`);

        return roleList.isDisplayed();
    }
    async clickPermissionCheckbox() {

        const checkbox = await $(`//label[@for='binary1' or normalize-space(text())='Warehouse']`);

        await checkbox.click();

    }



}
export default new MangeRolesListPage();




