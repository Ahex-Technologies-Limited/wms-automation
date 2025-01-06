import LoginPage from '../pageobjects/log-in.page';
import WarehouseListPage from '../pageobjects/warehouse-list.page';
import { expect } from '@wdio/globals';

import { browser } from '@wdio/globals';
import SupplierManagementPage from '../pageobjects/supplier-management.page';

describe('Supplier Management Functionality', () => {
    before(async () => {
        await browser.url('http://143.244.132.143:8200/#/auth/login');
        await LoginPage.login('tester@gmail.com', 'Supriya@12');
        await browser.url('http://143.244.132.143:8200/#/admin/warehouse/list');
        await WarehouseListPage.selectWarehousecardname.click();
    });
    after(async () => {
        await browser.deleteCookies();
    });
});
it("TC001 Verify that Supplier Management page is displayed", async () => {
    await SupplierManagementPage.clickOnSupplierManagementSideBar();
    await browser.waitUntil(
        async () => await SupplierManagementPage.isSupplierPageDisplayed(),
        {
            timeout: 5000,
            timeoutMsg: 'Expected role list to be displayed'
        }
    );

});
it("TC002 Verify that after clicking on the Add button the user should be able to add a new supplier", async () => {
    await SupplierManagementPage.clickOnAddSupplierButton();
    await SupplierManagementPage.enterSupplierName("Test Supplier");
    await SupplierManagementPage.enterSupplierEmail("2s4Qc@example.com");
    await SupplierManagementPage.selectCountryCode("United States");
    await SupplierManagementPage.enterSupplierPhoneNumber("1234567890");
    await SupplierManagementPage.enterTaxId("1234567890");
    await SupplierManagementPage.selectCurrency("Indian Rupee");
    await SupplierManagementPage.selectPaymentMethods("Credit Card");
    await SupplierManagementPage.clickOnMarkAsPrimaryCheckbox();
    await SupplierManagementPage.enterPrimaryContactName("Test Contact");
    await SupplierManagementPage.enterPrimaryContactEmail("2s4Qc@example.com");
    await SupplierManagementPage.clickOnNextButtonInSupplierFinancialInfo();
    await SupplierManagementPage.enterAddressLine1("Test Address");
    await SupplierManagementPage.enterAddressLine2("Test Address");
    await SupplierManagementPage.selectCountry("Test State");
    await SupplierManagementPage.enterState("Test State");
    await SupplierManagementPage.enterCity("Test City");
    await SupplierManagementPage.enterPinCode("875656");
    await SupplierManagementPage.enterMailingAddressLine1("Test Address");
    await SupplierManagementPage.enterMailingAddressLine2("Test Address");
    await SupplierManagementPage.selectMailingCountry("Test State");
    await SupplierManagementPage.enterMailingState("Test State");
    await SupplierManagementPage.enterMailingCity("Test City");
    await SupplierManagementPage.enterMailingPinCode("875656");
    await SupplierManagementPage.clickOnNextButtonInSupplierAddress();
    await SupplierManagementPage.enterBenificiaryName("Test Benificiary");
    await SupplierManagementPage.enterBankAccountNumber("1234567890");
    await SupplierManagementPage.enterBankName("Test Bank");
    await SupplierManagementPage.enterBankAddress("Test Address");
    await SupplierManagementPage.enterBankBranchCode("123456");
    await SupplierManagementPage.enterIBAN("1234567890");
    await SupplierManagementPage.enterSwiftCode("123456");
    await SupplierManagementPage.clickOnNextButtonInSupplierFinancialInfo();
    await SupplierManagementPage.selectStartDate("02-12-2024");
    await SupplierManagementPage.selectEndDate("09-12-2024");
    await SupplierManagementPage.enterDescription("Test Description");
    await SupplierManagementPage.selectSku("MmRaTzXEqs");
    await SupplierManagementPage.clickOnUploadAnnexuresOrAttachments();
    await SupplierManagementPage.clickOnUploadProofOfSigningAuthority();
    await SupplierManagementPage.clickOnUploadSupplierAgreement();
    await SupplierManagementPage.clickOnNextButtonInContactInfo();
    await SupplierManagementPage.clickOnAddButtonInComplianceAndDocumentation();
    await browser.waitUntil(
        async () => await SupplierManagementPage.isSupplierPageDisplayed(),
        {
            timeout: 5000,
            timeoutMsg: 'Expected role list to be displayed'
        }
    );

});
it("TC003 Verify that after clicking on the edit button the user should be able to edit the Suppllier details", async () =>{

});

