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
        return $(``);
    }
    public get addressLine2() {
        return $(``);
    }


    public get country() {
        return $(``);
    }
    public get state() {
        return $(``);
    }
    public get city() {
        return $(``);
    }
    public get pinCode() {
        return $(``);
    }
    public get markAsMailingAddressCheckbox() {
        return $(``);
    }
    public get MailingAddressLine1() {
        return $(``);
    }
    public get MailingAddressLine2() {
        return $(``);
    }
    public get MailingCountry() {
        return $(``);
    }
    public get MailingState() {
        return $(``);
    }

    public get MailingCity() {
        return $(``);
    }
    public get MailingPinCode() {
        return $(``);
    }
    public get addMailingAddressLink() {
        return $(``);
    }
    public get deleteIconInMailingAddress() {
        return $(``);
    }
    public get nextButtonInSupplierAddress() {
        return $(``);
    }
    public get backButtonInSupplierAddress() {
        return $(``);
    }
    public get markAsPrimarycheckboxInFinancialInfo() {
        return $(``);
    }
    public get benificiaryName() {
        return $(``);
    }
    public get bankAccountNumber() {
        return $(``);
    }
    public get bankName() {

        return $(``);
    }
    public get bankAddress() {
        return $(``);
    }
    public get bankBranchCode() {
        return $(``);
    }
    public get IBAN() {
        return $(``);
    }
    public get swiftCode() {
        return $(``);
    }
    public get addAccountLink() {
        return $(``);
    }
    public get nextButtonInSupplierFinancialInfo() {
        return $(``);
    }
    public get backButtonInSupplierFinancialInfo() {
        return $(``);
    }
    public get deleteIconInFinancialInfo() {
        return $(``);
    }
    public get startDate() {
        return $(``);
    }
    public get endDate() {
        return $(``);
    }
    public get description() {
        return $(``);
    }
    public get sku() {
        return $(``);
    }
    public get name() {
        return $(``);
    }
    public get catagory() {

        return $(``);
    }
    public get subCatagory() {
        return $(``);
    }
    public get salesPrice() {
        return $(``);
    }
    public get discount() {
        return $(``);
    }
    public get removeIcon() {
        return $(``);
    }
    public get addItemLink() {
        return $(``);
    }
    public get uploadAnnexuresOrAttachments() {
        return $(``);
    }
    public get uploadSupplierAgreement() {
        return $(``);
    }
    public get uploadProofOfSigningAuthority() {
        return $(``);
    }
    public get nextButtonInContactInfo() {
        return $(``);
    }
    public get backButtonInContactInfo() {
        return $(``);
    }
    public get addButtonInComplianceAndDocumentation() {
        return $(``);
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
        const countryCodeElement = await $(``);
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
        const currencyElement = await $(``);
        console.log(currencyElement);
        await currencyElement.click();
    }
    public async selectPaymentMethods(paymentMethods: string) {
        await (await this.paymentMethods).click();
        const paymentMethodsElement = await $(``);
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
        const primaryContactCountryCodeElement = await $(``);
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
        const countryElement = await $(``);
        console.log(countryElement);
        await countryElement.click();
    }
    public async selectState(state: string) {
        await (await this.state).click();
        const stateElement = await $(``);
        console.log(stateElement);
        await stateElement.click();
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
        const MailingCountryElement = await $(``);
        console.log(MailingCountryElement);
        await MailingCountryElement.click();
    }
    public async selectMailingState(MailingState: string) {
        await (await this.MailingState).click();
        const MailingStateElement = await $(``);
        console.log(MailingStateElement);
        await MailingStateElement.click();
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

        const startDateElement = await $(``);
        console.log(startDateElement);
        await startDateElement.click();
    }
    public async selectEndDate(endDate: string) {
        await (await this.endDate).click();
        const endDateElement = await $(``);
        console.log(endDateElement);
        await endDateElement.click();

    }
    public async enterDescription(description: string) {
        await (await this.description).setValue(description);
    }
    public async selectSku(sku: string) {
        await (await this.sku).click();
        const skuElement = await $(``);
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