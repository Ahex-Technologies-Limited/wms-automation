import page from './page';
import { $, browser } from '@wdio/globals';
class supplerManagementPage extends page {
    public get supplierManagementSideBar() {
        return $(`//a[span[contains(text(), 'Supplier Management')]]`);
    }
    public get supplierPage() {
        return $(`//a[contains(@class, 'bredcrumb-text') and span[contains(text(), 'Suppliers')]]`);
    }
    public get supplierList() {
        return $(``);
    }
    public get searchBar() {
        return $(`//input[@type='text' and contains(@class, 'search-input')]`);
    }
    public get addSupplierButton() {
        return $(`//button[@label='Add' and span[contains(text(), 'Add')]]`);
    }
    public get supplierName() {
        return $(`//input[@formcontrolname='supplier_name']`);
    }
    public get supplierEmail() {
        return $(`//input[@id='name' and @formcontrolname='email']`);
    }
    public get countryCode() {
        return $(`(//p-dropdown[@id='contactPhonecode'])[1]`);
    }
    public get supplierPhoneNumber() {
        return $(`(//input[@id='name'][@formcontrolname='phone'][@type='text'])[1]`);
    }
    public get taxId() {
        return $(`(//input[@formcontrolname='tax_id'])[1]`);
    }
    public get currency() {
        return $(`//p-dropdown[@formcontrolname='currency']`);
    }
    public get paymentMethods() {
        return $(`//p-dropdown[@formcontrolname='payment_method']`);
    }
    public get markAsPrimaryCheckbox() {
        return $(`(//div[@data-pc-section='input']//ancestor::div[@class='p-checkbox-box'])[1]`);
    }
    public get primaryContactName() {
        return $(`//input[@formcontrolname='name' and @name='name' and @placeholder='Enter']`);
    }
    public get primaryContactEmail() {
        return $(`(//input[@formcontrolname='email'])[2]`);
    }
    public get primaryContactCountryCode() {
        return $(`(//p-dropdown[@formcontrolname='country_code'])[2]`);
    }
    public get primaryContactPhoneNumber() {
        return $(`(//input[@formcontrolname='phone'])[2]`);
    }
    public get addcontactLink() {
        return $(`//button[@type='button' and normalize-space(.//span[text()])='Add contact']`);
    }

    public get nextButtonInSupplierInfo() {
        return $(`(//div//button[contains(@class, 'button_add') and normalize-space(text())='Next'])[1]`);
    }
    public get backButtonInSupplierInfo() {
        return $(`(//div//button[contains(@class, 'button_back ') and normalize-space(text())='Back'])[1]`);
    }
    public get addressLine1() {
        return $(`(//textarea[@formcontrolname='address_line1'])[1]`);
    }
    public get addressLine2() {
        return $(`(//textarea[@formcontrolname='address_line2'])[1]`);
    }
    public get country() {
        return $(`(//div[contains(@id, 'contactPhonecode')]//span[contains(normalize-space(text()), 'Select')])[1]`);
    }
    public get state() {
        return $(`(//input[@formcontrolname='state'])[1]`);
    }
    public get city() {
        return $(`(//input[@formcontrolname='city'])[1]`);
    }
    public get pinCode() {
        return $(`(//input[@formcontrolname='postal_code'])[1]`);
    }
    public get markAsMailingAddressCheckbox() {
        return $(`(//div[@class='p-checkbox-box' and @data-pc-section='input' and @data-p-highlight='false'])[1]`);
    }
    public get MailingAddressLine1() {
        return $(`(//textarea[@formcontrolname='address_line1'])[1]`);
    }
    public get MailingAddressLine2() {
        return $(`(//textarea[@formcontrolname='address_line2'])[1]`);
    }
    public get MailingCountry() {
        return $(`(//span[@role='combobox' and @aria-label='Select' and contains(@class, 'p-dropdown-label')])[2]`);
    }
    public get MailingState() {
        return $(`(//input[@formcontrolname='state'])[2`);
    }

    public get MailingCity() {
        return $(`(//input[@formcontrolname='city'])[2]`);
    }
    public get MailingPinCode() {
        return $(`(//input[@formcontrolname='postal_code'])[2]`);
    }
    public get addMailingAddressLink() {
        return $(`//span[contains(text(), 'Add Mailing Address')]`);
    }
    public get deleteIconInMailingAddress() {
        return $(`(//div[contains(@class, 'remove-icon')])[1]`);
    }
    public get nextButtonInSupplierAddress() {
        return $(`(//button[contains(@class, 'button_add')])[2]`);
    }
    public get backButtonInSupplierAddress() {
        return $(`(//button[contains(@class, 'button_back')])[2]`);
    }
    public get markAsPrimarycheckboxInFinancialInfo() {
        return $(`(//p-checkbox[@formcontrolname='is_primary']//input[@type='checkbox'])[2]`);
    }
    public get benificiaryName() {
        return $(`//input[@formcontrolname='beneficiary_name']`);
    }
    public get bankAccountNumber() {
        return $(`//input[@formcontrolname='account_number']`);
    }
    public get bankName() {

        return $(`//input[@formcontrolname='bank_name']`);
    }
    public get bankAddress() {
        return $(`//input[@formcontrolname='bank_address']`);
    }
    public get bankBranchCode() {
        return $(`//input[@formcontrolname='branch_code']`);
    }
    public get IBAN() {
        return $(`//input[@formcontrolname='iban']`);
    }
    public get swiftCode() {
        return $(`//input[@formcontrolname='swift_code']`);
    }
    public get addAccountLink() {
        return $(`//button//span[text()='Add Account']`);
    }
    public get nextButtonInSupplierFinancialInfo() {
        return $(`(//button[contains(@class, 'button_add')])[3]`);
    }
    public get backButtonInSupplierFinancialInfo() {
        return $(`(//button[contains(@class, 'button_back ')])[3]`);
    }
    public get deleteIconInFinancialInfo() {
        return $(`(//div[contains(@class, 'remove-icon')]//i[contains(@class, 'pi-trash')])[2]`);
    }
    public get startDate() {
        return $(`(//input[@placeholder='Select date' and @role='combobox'])[1]`);
    }
    public get endDate() {
        return $(`(//input[@placeholder='Select date' and @role='combobox'])[2]`);
    }
    public get description() {
        return $(`//textarea[@formcontrolname='description']`);
    }
    public get sku() {
        return $(`(//span[@role='combobox' and @aria-label='Select' and @aria-haspopup='listbox'])[2]`);
    }
    public get name() {
        return $(`//input[@formcontrolname='name' and @readonly and @placeholder='Enter']`);
    }
    public get catagory() {

        return $(`//input[@formcontrolname='category']`);
    }
    public get subCatagory() {
        return $(`//input[@formcontrolname='sub_category']`);
    }
    public get salesPrice() {
        return $(`//input[@formcontrolname='sales_price']`);
    }
    public get discount() {
        return $(`//input[@formcontrolname='discount_percentage']`);
    }
    public get removeIcon() {
        return $(`(//i[contains(@class, 'pi-trash') and contains(@class, 'text-red')])[2]`);
    }
    public get addItemLink() {
        return $(`//button[@label='Add item' and @icon='pi pi-plus']`);
    }
    public get uploadAnnexuresOrAttachments() {
        return $(`(//input[@aria-label='Browse Files'])[1]`);
    }
    public get uploadSupplierAgreement() {
        return $(`(//input[@aria-label='Browse Files'])[2]`);
    }
    public get uploadProofOfSigningAuthority() {
        return $(`(//input[@aria-label='Browse Files'])[3]`);
    }
    public get nextButtonInContactInfo() {
        return $(`(//button[@type='submit'])[4]`);
    }
    public get backButtonInContactInfo() {
        return $(`(//button[@type='button'])[9]`);
    }
    public get addButtonInComplianceAndDocumentation() {
        return $(`(//button[normalize-space(text())='Add'])[1]`);
    }

    //Methods
    public async clickOnSupplierManagementSideBar() {
        await (await this.supplierManagementSideBar).click();
    }
    public async clickOnSupplierPage() {
        await (await this.supplierPage).click();
    }
    public async clickOnSupplierList() {
        await (await this.supplierList).click();
    }
    public async enterInSearchBar(searchBar: string) {
        await (await this.searchBar).setValue(searchBar);
    }
    public async clickOnAddSupplierButton() {
        await (await this.addSupplierButton).click();
    }
    public async enterSupplierName(supplierName: string) {
        await (await this.supplierName).setValue(supplierName);
    }
    public async enterSupplierEmail(supplierEmail: string) {
        await (await this.supplierEmail).setValue(supplierEmail);
    }
    public async selectCountryCode(countryCode: string) {
        await (await this.countryCode).click();
        const countryCodeElement = await $(`//li[@aria-label='${countryCode}']`);
        console.log(countryCodeElement);
        await countryCodeElement.click();
    }
    public async enterSupplierPhoneNumber(supplierPhoneNumber: string) {
        await (await this.supplierPhoneNumber).setValue(supplierPhoneNumber);
    }
    public async enterTaxId(taxId: string) {
        await (await this.taxId).setValue(taxId);
    }
    public async selectCurrency(currency: string) {
        await (await this.currency).click();
        const currencyElement = await $(`//li[@aria-label='${currency}']`);
        console.log(currencyElement);
        await currencyElement.click();
    }
    public async selectPaymentMethods(paymentMethods: string) {
        await (await this.paymentMethods).click();
        const paymentMethodsElement = await $(`//li[@aria-label='${paymentMethods}']`);
        console.log(paymentMethodsElement);
        await paymentMethodsElement.click();

    }
    public async clickOnMarkAsPrimaryCheckbox() {
        await (await this.markAsPrimaryCheckbox).click();
    }
    public async enterPrimaryContactName(primaryContactName: string) {
        await (await this.primaryContactName).setValue(primaryContactName);
    }
    public async enterPrimaryContactEmail(primaryContactEmail: string) {
        await (await this.primaryContactEmail).setValue(primaryContactEmail);
    }
    public async selectPrimaryContactCountryCode(primaryContactCountryCode: string) {
        await (await this.primaryContactCountryCode).click();
        const primaryContactCountryCodeElement = await $(`//li[@aria-label='${primaryContactCountryCode}']`);
        console.log(primaryContactCountryCodeElement);
        await primaryContactCountryCodeElement.click();
    }
    public async enterPrimaryContactPhoneNumber(primaryContactPhoneNumber: string) {
        await (await this.primaryContactPhoneNumber).setValue(primaryContactPhoneNumber);
    }
    public async clickOnAddcontactLink() {
        await (await this.addcontactLink).click();
    }
    public async clickOnNextButtonInSupplierInfo() {
        await (await this.nextButtonInSupplierInfo).click();
    }
    public async clickOnBackButtonInSupplierInfo() {
        await (await this.backButtonInSupplierInfo).click();
    }
    public async enterAddressLine1(addressLine1: string) {
        await (await this.addressLine1).setValue(addressLine1);
    }
    public async enterAddressLine2(addressLine2: string) {
        await (await this.addressLine2).setValue(addressLine2);
    }
    public async selectCountry(country: string) {
        await (await this.country).click();
        const countryElement = await $(`//li[@aria-label='${country}']`);
        console.log(countryElement);
        await countryElement.click();
    }
    public async enterState(state: string) {
        await (await this.state).setValue(state);
    }
    public async enterCity(city: string) {
        await (await this.city).setValue(city);
    }
    public async enterPinCode(pinCode: string) {
        await (await this.pinCode).setValue(pinCode);
    }
    public async clickOnMarkAsMailingAddressCheckbox() {
        await (await this.markAsMailingAddressCheckbox).click();
    }
    public async enterMailingAddressLine1(MailingAddressLine1: string) {
        await (await this.MailingAddressLine1).setValue(MailingAddressLine1);
    }
    public async enterMailingAddressLine2(MailingAddressLine2: string) {
        await (await this.MailingAddressLine2).setValue(MailingAddressLine2);
    }
    public async selectMailingCountry(MailingCountry: string) {
        await (await this.MailingCountry).click();
        const MailingCountryElement = await $(`//li[@aria-label='${MailingCountry}']`);
        console.log(MailingCountryElement);
        await MailingCountryElement.click();
    }
    public async enterMailingState(MailingState: string) {
        await (await this.MailingState).setValue(MailingState);
    }
    public async enterMailingCity(MailingCity: string) {
        await (await this.MailingCity).setValue(MailingCity);
    }
    public async enterMailingPinCode(MailingPinCode: string) {
        await (await this.MailingPinCode).setValue(MailingPinCode);
    }
    public async clickOnAddMailingAddressLink() {
        await (await this.addMailingAddressLink).click();
    }
    public async clickOnDeleteIconInMailingAddress() {
        await (await this.deleteIconInMailingAddress).click();
    }
    public async clickOnNextButtonInSupplierAddress() {
        await (await this.nextButtonInSupplierAddress).click();
    }
    public async clickOnBackButtonInSupplierAddress() {
        await (await this.backButtonInSupplierAddress).click();
    }
    public async clickOnMarkAsPrimarycheckboxInFinancialInfo() {
        await (await this.markAsPrimarycheckboxInFinancialInfo).click();
    }
    public async enterBenificiaryName(benificiaryName: string) {
        await (await this.benificiaryName).setValue(benificiaryName);
    }
    public async enterBankAccountNumber(bankAccountNumber: string) {
        await (await this.bankAccountNumber).setValue(bankAccountNumber);
    }
    public async enterBankName(bankName: string) {
        await (await this.bankName).setValue(bankName);
    }
    public async enterBankAddress(bankAddress: string) {
        await (await this.bankAddress).setValue(bankAddress);
    }
    public async enterBankBranchCode(bankBranchCode: string) {
        await (await this.bankBranchCode).setValue(bankBranchCode);
    }
    public async enterIBAN(IBAN: string) {
        await (await this.IBAN).setValue(IBAN);
    }
    public async enterSwiftCode(swiftCode: string) {
        await (await this.swiftCode).setValue(swiftCode);
    }
    public async clickOnAddAccountLink() {
        await (await this.addAccountLink).click();
    }
    public async clickOnNextButtonInSupplierFinancialInfo() {
        await (await this.nextButtonInSupplierFinancialInfo).click();
    }
    public async clickOnBackButtonInSupplierFinancialInfo() {
        await (await this.backButtonInSupplierFinancialInfo).click();
    }
    public async clickOnDeleteIconInFinancialInfo() {
        await (await this.deleteIconInFinancialInfo).click();
    }
    public async selectStartDate(startDate: string) {
        await (await this.startDate).click();

        const startDateElement = await $(`//span[@data-date='${startDate}']`);
        console.log(startDateElement);
        await startDateElement.click();
    }
    public async selectEndDate(endDate: string) {
        await (await this.endDate).click();
        const endDateElement = await $(`//span[@data-date='${endDate}']`);
        console.log(endDateElement);
        await endDateElement.click();

    }
    public async enterDescription(description: string) {
        await (await this.description).setValue(description);
    }
    public async selectSku(sku: string) {
        await (await this.sku).click();
        const skuElement = await $(`//li[@aria-label='${sku}']`);
        console.log(skuElement);
        await skuElement.click();

    }
    public async enterName(name: string) {
        await (await this.name).setValue(name);
    }
    public async selectCatagory(catagory: string) {
        await (await this.catagory).click();
        const catagoryElement = await $(``);
        console.log(catagoryElement);
        await catagoryElement.click();
    }
    public async selectSubCatagory(subCatagory: string) {
        await (await this.subCatagory).click();
        const subCatagoryElement = await $(``);
        console.log(subCatagoryElement);
        await subCatagoryElement.click();
    }
    public async enterSalesPrice(salesPrice: string) {
        await (await this.salesPrice).setValue(salesPrice);
    }
    public async enterDiscount(discount: string) {
        await (await this.discount).setValue(discount);
    }
    public async clickOnRemoveIcon() {
        await (await this.removeIcon).click();
    }
    public async clickOnAddItemLink() {
        await (await this.addItemLink).click();
    }
    public async clickOnUploadAnnexuresOrAttachments() {
        await (await this.uploadAnnexuresOrAttachments).click();
    }
    public async clickOnUploadSupplierAgreement() {
        await (await this.uploadSupplierAgreement).click();
    }
    public async clickOnUploadProofOfSigningAuthority() {
        await (await this.uploadProofOfSigningAuthority).click();
    }
    public async clickOnNextButtonInContactInfo() {
        await (await this.nextButtonInContactInfo).click();
    }
    public async clickOnBackButtonInContactInfo() {
        await (await this.backButtonInContactInfo).click();
    }
    public async clickOnAddButtonInComplianceAndDocumentation() {
        await (await this.addButtonInComplianceAndDocumentation).click();
    }
    public async isSupplierListDisplayed() {
        return (await this.supplierList).isDisplayed();
    }
    public async isSupplierPageDisplayed() {
        return (await this.supplierPage).isDisplayed();
    }


}
export default new supplerManagementPage();