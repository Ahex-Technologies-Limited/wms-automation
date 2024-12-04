import Page from './page';

import { $, browser } from '@wdio/globals';
class UserManagementListPage extends Page {

    //selectors
    public get manageUserList() { return $(`//*[@class="table-parents user-list"]`);}
    public get userManagementSideBar() { return $(`//span[contains(@class, 'p-menuitem-text') and text()='User Management']`); }
    public get mangeuserSideBar() { return $(`//span[contains(@class, 'p-menuitem-text') and text()='Manage User']`);}
    public get inviteUserButton() { return $(`//button[contains(@class, 'p-button') and .//span[text()='Invite User']]`);}
    public get viewUserButton() { return $(`//i[contains(@class, 'pi pi-eye')]`);}
    public get resendInviteButton() { return $(`//button[@tooltipposition='top' and contains(@class, 'p-element') and contains(@class, 'dropdown-item') and contains(@class, 'ng-star-inserted')]//i[@class='pi pi-refresh']`);}
    public get searchUser() { return $(`//input[@type='text' and @placeholder='Search...' and contains(@class, 'search-input')]`);}
    public get username() { return $(`//input[@type='text' and @placeholder='Enter name' and @formcontrolname='name' and contains(@class, 'focus:border-none')]`);}
    public get selectRole() { return $(`//*[@formcontrolname="roleId"]`);}
    public get emailId() { return $(`//*[@formcontrolname='email']`);}
    public get inviteUser() { return $(`//button[contains(text(), 'Invite User')]`);}
    public get cancelInviteButton() { return $(`//button[contains(text(),'Cancel')]`);}

//Methods

public async clickManageUserList() {
    await (await this.manageUserList).click();
}

public async clickUserManagementSideBar() {
    await (await this.userManagementSideBar).click();
}
public async clickMangeuserSideBar() {
    await (await this.mangeuserSideBar).click();
}

public async clickInviteUserButton() {
    await (await this.inviteUserButton).click();
}

public async clickViewUserButton() {
    await (await this.viewUserButton).click();
}

public async clickResendInviteButton() {
    await (await this.resendInviteButton).click();
}

public async searchUserInSideBar(user: string) {
    await (await this.searchUser).setValue(user);
}

public async enterUsername(username: string) {
    await (await this.username).setValue(username);
}

public async selectUserRole(role: string) {
    await (await this.selectRole).click();
    await browser.pause(2000);
    const roleOption = await $(`//li[contains(@class, "p-dropdown-item") and @aria-label="${role}"]`);
    console.log(roleOption);
    await roleOption.click();
}


public async enterEmailId(email: string) {
    await (await this.emailId).setValue(email);
}

public async clickInviteUser() {
    await (await this.inviteUser).click();
}

public async clickCancelInviteButton() {
    await (await this.cancelInviteButton).click();
}

async isInvitationSent(): Promise<boolean> {

    // Implementation to check if the invitation is sent

    const invitationSentMessage = await $(`//*[@class="table-parents user-list"]`);
    return invitationSentMessage.isDisplayed();

}
async isViewUserDisplayed(): Promise<boolean> {

    const userDetails = await $(`//*[@class='table-parents user-list']`); 

    return userDetails.isDisplayed();

}




}
export default new UserManagementListPage();
       
    
