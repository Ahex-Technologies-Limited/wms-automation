import Page from './page';

import { $, browser } from '@wdio/globals';

class WarehouseListPage extends Page {
    // Selectors
    public warehouseCard(name: string) {
        // Locator for the warehouse card based on the warehouse name
        return $(``);
    }

    public editButtonInWarehouseList(name: string) {
        // Locator for the edit button within a specific warehouse card
        return this.warehouseCard(name).parentElement().$('');
    }

    // Method to select a warehouse and click the edit button
    public async selectWarehouseAndEdit(warehouseName: string) {
        const warehouseCard = this.warehouseCard(warehouseName);
        const editButton = this.editButtonInWarehouseList(warehouseName);

        // Wait for the warehouse card to be visible
        await warehouseCard.waitForDisplayed({
            timeout: 20000,
            timeoutMsg: `Warehouse card with name ${warehouseName} was not visible after 20 seconds`
        });

        // Click the edit button for the specific warehouse
        await editButton.waitForDisplayed({
            timeout: 5000,
            timeoutMsg: `Edit button for ${warehouseName} was not visible after 5 seconds`
        });
        await editButton.click();
    }
}





export default new WarehouseListPage();
