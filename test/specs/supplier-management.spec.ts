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
it.only("TC002 Verify that after clicking on the Add button the user should be able to add a new supplier", async () => {
    await SupplierManagementPage.clickOnSupplierManagementSideBar();
    await SupplierManagementPage.clickOnAddSupplierButton();
    await SupplierManagementPage.enterSupplierName("Test Supplier");
    await SupplierManagementPage.enterSupplierEmail("test@gmail.com");
    await SupplierManagementPage.selectCountryCode("+91");
    await SupplierManagementPage.enterSupplierPhoneNumber("1234567890");
    await SupplierManagementPage.enterTaxId("1234567890");
    await SupplierManagementPage.selectCurrency("Saudi Riyal");
    await SupplierManagementPage.selectPaymentMethods("Credit Card");
    await SupplierManagementPage.clickOnMarkAsPrimaryCheckbox();
    await SupplierManagementPage.enterPrimaryContactName("Test Contact");
    await SupplierManagementPage.enterPrimaryContactEmail("test@gmail.com");
    await SupplierManagementPage.clickOnNextButtonInSupplierInfo();
    await SupplierManagementPage.enterAddressLine1("Test Address");
    await SupplierManagementPage.enterAddressLine2("Test Address");
    await SupplierManagementPage.selectCountry("Saudi Arabia");
    await SupplierManagementPage.enterState("Test State");
    await SupplierManagementPage.enterCity("Test City");
    await SupplierManagementPage.enterPinCode("875656");
    await SupplierManagementPage.clickOnMarkAsMailingAddressCheckbox();
    await SupplierManagementPage.enterMailingAddressLine1("Test Address");
    await SupplierManagementPage.enterMailingAddressLine2("Test Address");
    await SupplierManagementPage.selectMailingCountry("Kuwait");
    await SupplierManagementPage.enterMailingState("Test State");
    await SupplierManagementPage.enterMailingCity("Test City");
    await SupplierManagementPage.enterMailingPinCode("875656");
    await SupplierManagementPage.clickOnNextButtonInSupplierAddress();
    await SupplierManagementPage.clickOnMarkAsPrimarycheckboxInFinancialInfo();
    await SupplierManagementPage.enterBenificiaryName("Test Benificiary");
    await SupplierManagementPage.enterBankAccountNumber("1234567890");
    await SupplierManagementPage.enterBankName("Test Bank");
    await SupplierManagementPage.enterBankAddress("Test Address");
    await SupplierManagementPage.enterBankBranchCode("123456");
    await SupplierManagementPage.enterIBAN("1234567890");
    await SupplierManagementPage.enterSwiftCode("123456");
    await SupplierManagementPage.clickOnNextButtonInSupplierFinancialInfo();
    await SupplierManagementPage.selectStartDate("2025-0-7");
    await SupplierManagementPage.selectEndDate("2025-0-23");
    await SupplierManagementPage.enterDescription("Test Description");
    await SupplierManagementPage.selectSku("MmRaTzXEqs");
    await SupplierManagementPage.enterDiscount("10%");
    await SupplierManagementPage.clickOnUploadButton();
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
    await SupplierManagementPage.clickOnSupplierManagementSideBar();
    await SupplierManagementPage.clickOnEditIcon();
    await SupplierManagementPage.enterSupplierName("Updated Supplier");
    await SupplierManagementPage.clickOnUpdateButton();
    await browser.waitUntil(
        async () => await SupplierManagementPage.isSupplierPageDisplayed(),
        {
            timeout: 5000,
            timeoutMsg: 'Expected role list to be displayed'
        }
    );
 
});
it("TC004 Verify that after clicking on the view button the user should be able to view the selected supplier details", async () => {
    await SupplierManagementPage.clickOnSupplierManagementSideBar();
    await SupplierManagementPage.clickOnViewIcon();
    await browser.waitUntil(
        async () => await SupplierManagementPage.isSupplierPageDisplayed(),
        {
            timeout: 5000,
            timeoutMsg: 'Expected role list to be displayed'
        }
    );

})
it ("TC005 Verify that after clicking on the searchbar the user should be able to search for a supplier", async () => {
    await SupplierManagementPage.clickOnSupplierManagementSideBar();
    await SupplierManagementPage.enterInSearchBar("Supplier");
    
  
    await browser.waitUntil(
        async () => await SupplierManagementPage.isSupplierPageDisplayed(),
        {
            timeout: 5000,
            timeoutMsg: 'Expected role list to be displayed'
        }
    );
});

});  