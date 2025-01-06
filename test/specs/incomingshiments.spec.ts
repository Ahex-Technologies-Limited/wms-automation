
import LoginPage from '../pageobjects/log-in.page';
import WarehouseListPage from "../pageobjects/warehouse-list.page";
import incomingshipmentsListPage from "../pageobjects/incomingshipments-list.page";
import { browser } from '@wdio/globals';
describe("Incoming Shipments Functionality", () => {
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
it.only("TC001 Verify that after clicking on the add button the user should be able to add a new incoming shipments", async () => {
    await incomingshipmentsListPage.clickOnShipmentsSideBar();
    await incomingshipmentsListPage.clickOnIncomingShipmentsSideBar();
    await incomingshipmentsListPage.clickOnAddIncomingShipmentButton();
    await incomingshipmentsListPage.selectExpectedArrivalDate('12/31/2024 10:03');
    await incomingshipmentsListPage.enterCarrierName('Carrier1');
    await incomingshipmentsListPage.selectAssignTo('SupriyaTester');
    await incomingshipmentsListPage.selectCountryCode('India (+91)');
    await incomingshipmentsListPage.enterCarrierContactNumber('8976545567');
    await incomingshipmentsListPage.selectDockDoor('Dock Door 1');
    await incomingshipmentsListPage.enterTrackingNumber('1234');
    await incomingshipmentsListPage.selectSupplier('SupplierA');
    await incomingshipmentsListPage.clickNextButtonInShipmentDetails();
    await incomingshipmentsListPage.selectSku('jjvabvT3zz');
    await incomingshipmentsListPage.enterOrderQuantity('100');
    await incomingshipmentsListPage.clickNextButtonInItems();
    await incomingshipmentsListPage.clickUploadButtonInBillingOfLading();
    await incomingshipmentsListPage.enterInvoiceNumber('12234');
    await incomingshipmentsListPage.clickAdd();
    await browser.waitUntil(
        async () => await incomingshipmentsListPage.isIncomingShipmentsListPageDisplayed(),
        {
            timeout: 5000,
            timeoutMsg: 'Expected role list to be displayed'
        }
    );
});

it("TC002 Verify that after clicking on the edit button the user should be able to edit the incoming shipments", async () => {
    await incomingshipmentsListPage.clickOnShipmentsSideBar();
    await incomingshipmentsListPage.clickOnIncomingShipmentsSideBar();
    await incomingshipmentsListPage.clickEditButton();
    await incomingshipmentsListPage.selectExpectedArrivalDate('12/31/2024 10:03');
    await incomingshipmentsListPage.selectActualArrivalDate('12/31/2024 ');
    await incomingshipmentsListPage.enterCarrierName('Carrier2');
    await incomingshipmentsListPage.selectReceivedBy('SupriyaTester');
    await incomingshipmentsListPage.clickUpdateButton();
    await browser.waitUntil(
        async () => await incomingshipmentsListPage.isIncomingShipmentsListPageDisplayed(),
        {
            timeout: 5000,
            timeoutMsg: 'Expected role list to be displayed'
        }
    );
});

it("TC003 Verify that the user should be able to seet the deatils of the incoming shipments", async () => {
    await incomingshipmentsListPage.clickOnShipmentsSideBar();
    await incomingshipmentsListPage.clickOnIncomingShipmentsSideBar();
    await incomingshipmentsListPage.clickViewButton();
    await browser.waitUntil(
        async () => await incomingshipmentsListPage.isIncomingshipmentsDetailsPageDisplayed(),
        {
            timeout: 5000,
            timeoutMsg: 'Expected role list to be displayed'
        }
    );


});
it("TC004 Verify that the user should be able to search for the incoming shipments", async () => {
    await incomingshipmentsListPage.clickOnShipmentsSideBar();
    await incomingshipmentsListPage.clickOnIncomingShipmentsSideBar();
    await incomingshipmentsListPage.clickSearchBar('Carrier2');
    await browser.waitUntil(
        async () => await incomingshipmentsListPage.isIncomingShipmentsListPageDisplayed(),
        {
            timeout: 5000,
            timeoutMsg: 'Expected role list to be displayed'
        }
    );

});
it("TC005 Verify that the user should be able to change the status of the incoming shipments", async () => {
    await incomingshipmentsListPage.clickOnShipmentsSideBar();
    await incomingshipmentsListPage.clickOnIncomingShipmentsSideBar();
    await incomingshipmentsListPage.clickStatus();
    await incomingshipmentsListPage.clickYesButton();
    await browser.waitUntil(
        async () => await incomingshipmentsListPage.isIncomingShipmentsListPageDisplayed(),
        {
            timeout: 5000,
            timeoutMsg: 'Expected role list to be displayed'
        }
    );

});


