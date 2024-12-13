import Page from './page';

import { $, browser } from '@wdio/globals';

class ContractsListPage extends Page {
  public get contractsList() {
        return $(`//li[@class='p-element ng-star-inserted']//span[text()='Contracts']`);
    }
   public get operationSideBar() {
       
        return $(`//span[contains(@class, 'p-menuitem-text') and text()='Operations']`);
   } 
   public get contractsSideBar() {
        return $(`//span[contains(@class, 'p-menuitem-text') and text()='Contracts']`);
    }
    public get addContractsButton() {
        return $(`//div[@class='zone flex justify-content-end px-3 py-3 align-items-center']//button[@class='p-element button_add justify-content-center p-button flex items-center outline-none w-full p-component ng-star-inserted' and @label='Add']`);
    }
    public get startDate() {
        return $(`//input[@type='text' and @placeholder='Select date']`);
    }
    public get endDate() {
        return $(`//input[@type='text' and @placeholder='Select Date']`);
    }
    public get carrierName() {
        return $(`//*[@formcontrolname='carrier_id']`);
    }
    // public get contactPerson() {
    //     return $(`//input[contains(@class, 'w-full') and @placeholder='Enter']`);
    // }
    public get contractType() {
        return $(`//*[@formcontrolname="contract_type"]`);
    }
    public get deliveryType() {
        return $(`//*[@formcontrolname="delivery_type"]`);
    }
  public get deliveryMode() {
        return $(`//*[@formcontrolname='delivery_mode']`);
    }
    public get nextButtonContractInfo() {
        return $(`//div[@class='block md:flex justify-content-center items-center']//button[contains(@class, 'button_add') and normalize-space(text())='Next']`);
    }
    public get searchBar() {
        
        return $(`//span[contains(@class, 'p-input-icon-left')]//input[@placeholder='Search...']`);
    }
    public get editiconButton() {
        
        return $(`//*[contains(text(),' Carrier3 ')]//ancestor::td/following-sibling::td//*[@class='pi pi-pencil text-success']`);
    }
    public get viewButton() {
        
        return $(`//*[contains(text(),' Carrier3 ')]//ancestor::td/following-sibling::td//*[@class='pi pi-eye']`);
    }
public get updateContractsNextButton() {
    
    return $(`//div[@class='block md:flex justify-content-center items-center']//button[contains(text(),'Next')]`);

}
public get updateContractsBackButton() {
    
    return $(`//div[@class='block md:flex justify-content-center items-center']//button[contains(text(),' Back ')]`);
}
public get nextButtonInDocument() {
    
    return $(`//div[@class='block md:flex justify-content-center items-center mt-4']//button[contains(text(),'Next')]`);
}
public get backButtonInDocument() {
    
    return $(`//div[@class='block md:flex justify-content-center items-center mt-4']//button[contains(text(),'Back')]`);
}
public get editIconInViewContract() {
    
    return $(`//button[span[@aria-hidden='false' and text()='Edit']]`);
}
public get clickToViewInDocuments() {
    
    return $(``);
}
public get clickToViewInCarrierRateSheet() {
    
    return $(``);
}
public get clickToViewInInsuranceCertificate() {
    
    return $(``);
    
}
public get clickToviewInLegalDocuments() {
    
    return $(``);
}
public get status() {
    
    return $(`//*[contains(text(),' Carrier ')]//ancestor::td/following-sibling::td//*[@class='p-dropdown p-component p-inputwrapper']`);

}
public get yesButton() {
    
    return $(`//button[contains(@class, 'button_yes') and text()=' Yes ']`);
    
    
}
public get noButton() {
    
    return $(`//button[contains(@class, 'button_no') and text()=' No ']`);
}
    //methods
    public async clickContractsList() {
        await (await this.contractsList).click();
    }
    public async clickOperationSideBar() {
        await (await this.operationSideBar).click();
    }
    public async clickContractsSideBar() {
        await (await this.contractsSideBar).click();
    }
    public async clickAddContractsButton() {
        await (await this.addContractsButton).click();
    }
    public async selectStartDate(startDate: string) {
        await this.startDate.click();
        await this.startDate.setValue(startDate);
    }
    public async selectEndDate(endDate: string) {
        await this.endDate.click();
        await this.endDate.setValue(endDate);
    }
    public async selectCarrierName(carrierName: string) {
        await this.carrierName.click();
        const carrierNameOption = await $(`//li[@aria-label='${carrierName}']`);
        console.log(carrierNameOption);
        await carrierNameOption.click();
    }
    // public async enterContactPerson(contactPerson: string) {
    //     await (await this.contactPerson).setValue(contactPerson);

    // }
    public  async selectContractType(contractType: string) {
        await this.contractType.click();
        const contractTypeOption = await $(`//li[@aria-label='${contractType}']`);
        console.log(contractTypeOption);
        await contractTypeOption.click();
    }
    public async selectDeliveryType(deliveryType: string) {
        await this.deliveryType.click();
        const deliveryTypeOption = await $(`//li[@aria-label='${deliveryType}']`);
        console.log(deliveryTypeOption);
        await deliveryTypeOption.click();
    }
    public async selectDeliveryMode(deliveryMode: string) {
        await this.deliveryMode.click();
        const deliveryModeOption = await $(`//li[@aria-label='${deliveryMode}']`);
        console.log(deliveryModeOption);
        await deliveryModeOption.click();
    }   
    public async clickNextButtonContractInfo() {
        await (await this.nextButtonContractInfo).click();
    }
    public async isContractListDisplayed() {
        return await this.contractsList.isDisplayed();
    }
    public async enterSearchContract(searchContract: string) {
        await this.searchBar.setValue(searchContract);
    }
public async clickEditionButton() {
    await (await this.editiconButton).click();

}
public async clickViewButton() {
    await (await this.viewButton).click();
}
public async clickNextButtonInDocument() {
    await (await this.nextButtonInDocument).click();
}
public async clickBackButtonInDocument() {
    await (await this.backButtonInDocument).click();
    
}
public async clickEditIconInViewContract() {
    await (await this.editIconInViewContract).click();
}
public async clickToViewForDocuments() {
    await (await this.clickToViewInDocuments).click();
}
public async clickToViewForCarrierRateSheet() {
    await (await this.clickToViewInCarrierRateSheet).click();
}
public async clickToViewForInsuranceCertificate() {
    await (await this.clickToViewInInsuranceCertificate).click();
}
public async clickToviewForLegalDocuments() {
    await (await this.clickToviewInLegalDocuments).click();
}
public async changeStatus(status: string) {
    await (await this.status).click();
    const statusOption = await $(`//li[contains(@class, "p-ripple p-element p-dropdown-item") and @aria-label='${status}']`);
    console.log(statusOption);
    await statusOption.click();
}
public async clickYesButton() {
    
    await (await this.yesButton).click();
}
public async clickNoButton() {
    
    await (await this.noButton).click();
}
}
export default new ContractsListPage();
    