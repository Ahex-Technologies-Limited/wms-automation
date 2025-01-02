import page from './page';
import { $, browser } from '@wdio/globals';

class labellingsPage extends page {
    //Locators
    public get labellingsidebar() {
        return $(`//span[contains(@class, 'p-menuitem-text') and contains(text(), 'Labellings')]`);
    }
    public get labelPage() {
        return $(`//span[contains(@class, 'ml-2') and text()='label']`);
    }
    public get labellist() {
        return $(`//span[@class='ml-2' and text()='Label List']`);
    }
    public get addLabelButton() {
        return $(`//button[contains(@class, 'button_add') and contains(@class, 'p-button')]`);
    }
    public get labelType() {
        return $(`//span[@role='combobox' and @aria-label='Select Label Type']`);
    }
    public get format() {
        return $(`//span[@role='combobox' and @aria-label='Select Format']`);
    }
    public get showValue() {
        return $(`//input[@formcontrolname='show']`);
    }
    public get separator() {
        return $(`//p-dropdown[@formcontrolname='separator']`);
    }
    public get deleteIcon() {
        return $(`//i[contains(@class, 'pi-trash') and contains(@class, 'text-red')]`);
    }
    public get addFormatLink() {
        return $(`//span[@class='p-button-label ng-star-inserted' and text()='Add format']`);
    }
    public get previewButton() {
        return $(`//button[@type='submit' and normalize-space(text())='Preview' and contains(@class, 'button_add')]`);
    }
    public get createButton() {
        return $(`//button[@type='button' and normalize-space(text())='Create' and contains(@class, 'button_add')]`);
    }
    public get searchBar() {
        return $(`//input[normalize-space(@placeholder)='Search...' and contains(@class, 'search-input')]`);
    }
    public get filterButton() {
        return $(`//button//span[normalize-space(text())='Filters']`);
    }
    public get filterStatus() {
        return $(`//li[normalize-space(.//span[text()='Status'])]`);
    }
    public get status() {
        return $(`//p-dropdown[normalize-space(@placeholder)='Select Status']`);
    }
    public get applyButton() {
        return $(`//span[normalize-space(text())='Apply']`);
    }
    public get clearButton() {
        return $(`//span[normalize-space(text())='Clear']`);
    }
//Methods
    public async clickOnLabelSideBar() {
        await (await this.labellingsidebar).click();
    }
    public async clickOnLabelPage() {
        await (await this.labelPage).click();
    }
    public async clickOnLabelList() {
        await (await this.labellist).click();
    }
    public async clickOnAddLabelButton() {
        await (await this.addLabelButton).click();
    }
    public async selectLabelType(labelType: string) {
        await (await this.labelType).click();
        const labelTypeElement = await $(`//li[normalize-space(@aria-label)='SKU']//span[normalize-space(text())='${labelType}']`);
        console.log(labelTypeElement);
        await labelTypeElement.click();
    }
    public async selectFormat(format: string) {
        await (await this.format).click();
        const formatElement = await $(`//li[@aria-label='${format}' ]`);
        console.log(formatElement);
        await formatElement.click();
    }
    public async enterShowValue(showValue: string) {
       await (await this.showValue).setValue(showValue);
    }
    public async selectSeparator() {
        await (await this.separator).click();
        await browser.keys('ArrowDown');
        await browser.keys('ArrowUp');
        await browser.keys('Enter');
    }
    public async clickOnDeleteIcon() {
        await (await this.deleteIcon).click();
    }
    public async clickOnAddFormatLink() {
        await (await this.addFormatLink).click();
    }
    public async clickOnPreviewButton() {
        await (await this.previewButton).click();
    }
    public async clickOnCreateButton() {
        await (await this.createButton).click();
    }
    public async enterInSearchBar(searchBar: string) {
        await (await this.searchBar).setValue(searchBar);
    }
    public async clickOnFilterButton() {
        await (await this.filterButton).click();
    }
    public async selectFilterStatus(filterStatus: string) {
        await (await this.filterStatus).click();
        const statusElement = $(`//p-checkbox//label[normalize-space(text())='${filterStatus}']`);
        console.log(statusElement);
        await statusElement.click();
    }
    public async selectStatus() {
        await (await this.status).click();
        await browser.keys('ArrowDown');
        await browser.keys('Enter');
    }
    public async clickOnApplyButton() {
        await (await this.applyButton).click();
    }
    public async clickOnClearButton() {
        await (await this.clearButton).click();
    }
    public async isLabelPageDisplayed() {
        return (await this.labelPage).isDisplayed();
    }
    public async isLabelListDisplayed() {
        return (await this.labellist).isDisplayed();
    }
    public async istmplatePageDisplayed() {
        const templatePage = $(`//span[contains(@class, 'ml-2') and normalize-space(text())='Template']`);
        return await templatePage.isDisplayed();
    }

}   
export default new labellingsPage();

