import Page from './page';

import { $, browser } from '@wdio/globals';
class ProductListPage extends Page {
   public  get productList() {
        return $(`//span[contains(@class, 'ml-2') and text()='List']`);
    }
public get productManagementSubMenu() {
    return $(`//span[contains(text(), 'Product Management')]`);
  }
public get productSideBar() {
    return $(`//span[contains(@class, 'p-menuitem-text') and text()='Product']`);
  }
  public get swapIconForlistView() {
    return $(`//button[.//barsicon]`);
  }
  public get swapiconForgridView() {
    return $(`//button[.//thlargeicon]`);
  }
public get addProductButton() {
    return $(`//div[@class='flex gap-2']//button[contains(@class, 'button_add')]`);
  }
public get productName() {
    return $(`//*[@formcontrolname='product_name']`);
  }
// public get brand() {
//     return $(``);
//   }
// public get manufacturer() {
//     return $(`//input[@placeholder='Product Description']`);
//   }
public get productCategory() {
    return $(`//*[@formcontrolname='category_id']`);
  }
public get subCategory() {
    return $(`//*[@formcontrolname='sub_category_id']`);
}
public get uom() {
    return $(`//*[@formcontrolname='uom']`);
}
public get description() {
    return $(`//*[@formcontrolname='description']`);
}
public get nextButtonInProductDetails() {
    return $(`//button[contains(@class, 'button_next') and text()=' Next ']`);
}
public get attributes() {
    return $(`//*[@formcontrolname="attribute"]`);
}
public get values() {
   return $(`//li[@role="option" and contains(@class, 'p-chips-input-token')]//input
`);
 }
public get deleteButtonInAttributes() {
    return $(`(//table//tr//i[contains(@class, 'pi-trash')])[1]`);
}
public get addAttributesLink() {
    return $(`//button[span[@class='p-button-label ng-star-inserted' and text()='Add Attribute']]`);
}
public get configureButton() {
    return $(`//button[contains(@class, 'button_add') and contains(text(), 'Configure')]`);
}
public get reorderLevel() {
    return $(`//*[@formcontrolname='reorderLevel']`);
}
public get quantity() {
    return $(`//*[@formcontrolname='available_quantity']`);
    
}
public get deleteButtonInItem   () {
    return $(`(//tbody//tr//td//div[@class='icon-border']//i[contains(@class, 'pi-trash')])[2]`);
}
public get copytoallInReorderLevel() {
    return $(`//*[contains(text(),'Reorder Level ')]//a[text()='Copy to All' and contains(@class, 'no-underline')]`);
}
public get copytoallInQuantity() {
    return $(`//th[contains(text(), 'Quantity')]//a[text()='Copy to All' and contains(@class, 'no-underline')]`);
}

public get nextButtonInAttributes() {
    return $(`//button[contains(text(), 'Next') and contains(@class, 'button_add')]`);
}
public get backButtonInAttributes() {
    return $(`//button[contains(text(), 'Back') and contains(@class, 'button_back')]`);
}
// public get supplierName() {
//     return $(``);
// }
// public get deliveryLeadDays() {
//     return $(``);
// }
// public get discount() {
//     return $(``);
// }
// public get currency() {
//     return $(``);
// }
// public get deleteiconInSupplier() {
//     return $(``);
// }
// public get addSupplier() {
//     return $(``);
// }
public get addButtonInSupplier() {
    return $(`//button[contains(text(), 'Add') and contains(@class, 'button_add')]`);
}
public get viewIcon() {
    return $(`(//tr//td[contains(@class, 'actions-cell')]//button[1]//i[contains(@class, 'pi-eye')])[1]`);
}
public get editIcon() {
    return $(`(//tr//td[contains(@class, 'actions-cell')]//button[2]//i[contains(@class, 'pi-pencil')])[1]`);
}
public get deleteIcon() {
    return $(`(//tr//td[contains(@class, 'actions-cell')]//button[3]//i[contains(@class, 'pi-trash')])[1]`);
}
public get searchBar() {
    return $(`//input[@placeholder='Search...']`);
}
public get filterButton() {
    return $(`//span[text()='Filters']`);
}
public get catagoryInFilter() {
    return $(`//li[span[text()='Category']]`);
    
}
public get applyButtonInFilter() {
    return $(`//span[@class='p-button-label' and text()='Apply']`);
}
public get clearButtonInFilter() {
    return $(`//button[@class='p-element button_clear justify-content-center p-button flex items-center outline-none w-full p-component' and @label='Clear']`);
}
public get productDetailsPage() {
    return $(`//span[@class='ml-2' and text()='Product Details']`);
}
public get UpdateButton() {
    return $(`//button[contains(text(),'Update')]`);
}
public get backButton() {
    return $(`//button[contains(text(),'Back')]`);
}
public get yesButton() {
    return $(`//button[contains(text(),'Yes')]`);
}
public get noButton() {
    return $(`//button[contains(text(),'No')]`);
}
//methods

public async clickOnProductList() {
    await (await this.productList).click();
}

public async clickOnProductManagementSubMenu() {    
    await (await this.productManagementSubMenu).click();
}
public async clickOnProductSideBar() {
    await (await this.productSideBar).click();
}

public async clickOnSwapIconForlistView() {
    await (await this.swapIconForlistView).click();
}
public async clickOnSwapiconForgridView() {
    await (await this.swapiconForgridView).click();
}
public async clickOnAddProductButton() {
    await (await this.addProductButton).click();
}
public async enterProductName(productName: string) {
    await (await this.productName).setValue(productName);
}
public async selectProductCategory(productCategory: string) {
    await (await this.productCategory).click();
    const category = await $(`//li[@role='option' and @aria-label='${productCategory}']`);
    console.log(category);
    await category.click();
}
public async selectSubCategory(subCategory: string) {
    await (await this.subCategory).click();
    const subcategory = await $(`//li[@role='option' and @aria-label='${subCategory}']`);
    console.log(subcategory);
    await subcategory.click();
}
public async selectUOM(uom: string) {
    await (await this.uom).click();
    const uomOption = await $(`//li[@role='option' and @aria-label='${uom}']`);
    console.log(uomOption);
    await uomOption.click();
}
public async enterDescription(description: string) {
    await (await this.description).setValue(description);

}
public async clickNextButtonInProductDetails() {
    await (await this.nextButtonInProductDetails).click();
}
public async  selectAttributes(attributes: string) {
    await (await this.attributes).click();
    const attributesOption = await $(`//li[@role='option' and @aria-label='${attributes}']`);
    console.log(attributesOption);
    await attributesOption.click();
}
public async enterValues(values: string) {
    await (await this.values).setValue(values);
   await browser.keys('Enter');

}
public async clickDeleteButtonInAttributes() {
    await (await this.deleteButtonInAttributes).click();
}
public async clickAddAttributesLink() {
    await (await this.addAttributesLink).click();
}
public async clickConfigureButton() {
    await (await this.configureButton).click();
}
public async enterReorderLevel(reorderLevel: string) {
    await (await this.reorderLevel).setValue(reorderLevel);
}
public async enterQuantity(quantity: string) {
    await (await this.quantity).setValue(quantity);
}
public async clickDeleteButtonInItem() {
    await (await this.deleteButtonInItem).click();
}
public async clickCopytoallInReorderLevel() {
    await (await this.copytoallInReorderLevel).click();
}
public async clickCopytoallInQuantity() {
    await (await this.copytoallInQuantity).click();
}
public async clickNextButtonInAttributes() {
    await (await this.nextButtonInAttributes).click();
}
public async clickBackButtonInAttributes() {
    await (await this.backButtonInAttributes).click();
}
// public async selectSupplierName(supplierName: string) {
//     await (await this.supplierName).click();
//     const supplierNameOption = await $(`//option[text()='${supplierName}']`);
//     console.log(supplierNameOption);
//     await supplierNameOption.click();
// }
// public async selectDeliveryLeadDays(deliveryLeadDays: string) {
//     await (await this.deliveryLeadDays).click();
//     const deliveryLeadDaysOption = await $(`//option[text()='${deliveryLeadDays}']`);
//     console.log(deliveryLeadDaysOption);
//     await deliveryLeadDaysOption.click();
// }
// public async selectDiscount(discount: string) {
//     await (await this.discount).click();
//     const discountOption = await $(`//option[text()='${discount}']`);
//     console.log(discountOption);
//     await discountOption.click();
// }
// public async selectCurrency(currency: string) {
//     await (await this.currency).click();
//     const currencyOption = await $(`//option[text()='${currency}']`);
//     console.log(currencyOption);
//     await currencyOption.click();
// }
// public async clickDeleteiconInSupplier() {
//     await (await this.deleteiconInSupplier).click();
// }
// public async clickAddSupplier() {
//     await (await this.addSupplier).click();
// }
public async clickAddButtonInSupplier() {
    await (await this.addButtonInSupplier).click();
}
public async clickViewIcon() {
    await (await this.viewIcon).click();
}
public async clickEditIcon() {
    await (await this.editIcon).click();
}
public async clickDeleteIcon() {
    await (await this.deleteIcon).click();
}
public async enterSearchBar(searchBar: string) {
    await (await this.searchBar).setValue(searchBar);
}   
public async clickFilterButton() {
    await (await this.filterButton).click();
}
public async selectCatagoryInFilter(catagoryInFilterOption: string) {
    await (await this.catagoryInFilter).click();
    const catagoryInFilterOptionElement = await $(`//p-checkbox//label[text()='${catagoryInFilterOption}']`);
    console.log(catagoryInFilterOptionElement);
    await catagoryInFilterOptionElement.click();
}
public async clickApplyButtonInFilter() {
    await (await this.applyButtonInFilter).click();
}
public async clickClearButtonInFilter() {
    await (await this.clearButtonInFilter).click();
}
public async clickProductDetailsPage() {
    await (await this.productDetailsPage).click();
}
public async clickUpdateButton() {
    await (await this.UpdateButton).click();
}
public async clickBackButton() {
    await (await this.backButton).click();
}
public async clickYesButton() {
    await (await this.yesButton).click();
}
public async clickNoButton() {
    await (await this.noButton).click();
}
public async isProductListPageDisplayed() {
    return (await this.productList).isDisplayed();
}
public async successfullyAddedProductMessage() {
    const message = await $(``);
    console.log(message);
    return message.isDisplayed();


}
public async isProductDetailsPageDisplayed() {
    return await (await this.productDetailsPage).isDisplayed();
}
}
export default new ProductListPage();
