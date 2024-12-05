import Page from './page';

import { $, browser } from '@wdio/globals';
class attributesListPage extends Page {
    //selectors
    public get attributesList() { return $(`//a[contains(@class, 'bredcrumb-text') and .//span[text()='Attributes']]`) };
    public get operationSideBar() { return $(`//span[contains(@class, 'p-menuitem-text') and text()='Operations']`) };
    public get attributesSideBar() { return $(`//a[contains(@class, 'p-menuitem-link') and @href='#/admin/operations/attributes/list' and .//span[text()='Attributes']]`) };
    public get addAttributesButton() { return $(`//div[@class='zone flex justify-content-end px-3 py-3 align-items-center']//button[@label='Add' and @icon='pi pi-plus']`) };
    public get attributeName() { return $(`//input[@type='text' and @formcontrolname='name' and @placeholder='Enter attribute name']`) };
    public get attributeDescription() { return $(`//textarea[@type='text' and @rows='6' and @formcontrolname='description' and @placeholder='Enter description']`) };
    public get addAttribute() { return $(`//button[@type='submit' and contains(@class, 'button_add') and text()[normalize-space()='Add']]`) };
    public get backButton() { return $(`//button[@type='button' and contains(@class, 'button_back') and text()[normalize-space()='Back']]`) };
    public get editButton() { return $(`//*[contains(text(),'Attribute3')]//ancestor::td/following-sibling::td//*[@class='pi pi-pencil text-success']`) };
    public get deleteButton() { return $(`//*[contains(text(),' Attribute ')]//ancestor::td/following-sibling::td//*[@class='pi pi-trash text-danger']`) };
    public get updateButton() { return $(`//button[@type='submit' and contains(@class, 'button_add') and text()[normalize-space()='Update']]`) };
    public get searchAttribute() { return $(`//input[@type='text' and @placeholder='Search...' and contains(@class, 'search-input')]`) };
    public get yesButton() { return $(`//*[@type='button'  and contains(@class, 'p-element button_yes')]`) };
    public get noButton() { return $(`//*[@type='button'  and contains(@class, 'p-element button_no')]`) };
    public get deleteMessage() { return $(`//div[contains(@class, 'p-toast-message') and contains(@class, 'p-toast-message-success')]`) };
    //Methods
    public async clickAttributesList() { await (await this.attributesList).click(); }
    public async clickOperationSideBar() { await (await this.operationSideBar).click(); }
    public async clickAttributesSideBar() { await (await this.attributesSideBar).click(); }
    public async clickAddAttributesButton() { await (await this.addAttributesButton).click(); }
    public async enterAttributeName(attributeName: string) { await (await this.attributeName).setValue(attributeName); }
    public async enterAttributeDescription(attributeDescription: string) { await (await this.attributeDescription).setValue(attributeDescription); }
    public async clickAddAttribute() { await (await this.addAttribute).click(); }
    public async clickBackButton() { await (await this.backButton).click(); }
    public async clickEditButton() { await (await this.editButton).click(); }
    public async clickDeleteButton() { await (await this.deleteButton).click(); }
    public async clickUpdateButton() { await (await this.updateButton).click(); }
    public async enterSearchAttribute(searchAttribute: string) { await (await this.searchAttribute).setValue(searchAttribute); }
    public async clickYesButton() { await (await this.yesButton).click(); }
    public async clickNoButton() { await (await this.noButton).click(); }
    public async isAttributeAdded() { return await (await this.addAttributesButton).isDisplayed(); }
    public async isAttributeUpdated() { return await (await this.updateButton).isDisplayed(); }
    public async isAttributeDeletedMessage() { return await (await this.deleteMessage).isDisplayed(); }
    public async isAttributeDisplayed() { return await (await this.attributesList).isDisplayed(); }
    public async isAttributeEditDisplayed() { return await (await this.editButton).isDisplayed(); }
    public async isAttributeListDisplayed() { return await (await this.attributesList).isDisplayed(); }

}
export default new attributesListPage();
