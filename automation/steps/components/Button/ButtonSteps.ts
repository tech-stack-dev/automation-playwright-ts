import { Locator, Page } from "@playwright/test";
import BaseComponent from "../../../base/component/BaseComponent";
import { driver } from "../../../base/driver/Driver";

class ButtonSteps {
    public async clickButton<T extends BaseComponent>(type: { new(page: Page, identifier: string): T; }, identifier: string, parent?: Locator) {
        await (await driver.component(type, identifier, parent)).click();
    }

    public async clickLastButton<T extends BaseComponent>(type: { new(page: Page, identifier: string): T; }, identifier: string, parent?: Locator) {
        await (await driver.component(type, identifier, parent)).last().click();
    }
}

var buttonSteps = new ButtonSteps();

export { buttonSteps };