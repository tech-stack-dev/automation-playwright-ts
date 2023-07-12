import { Locator, Page } from "@playwright/test";
import BaseComponent from "../../../base/component/BaseComponent";
import { driver } from "../../../base/driver/Driver";

class FormSteps {
    public async fillTextField<T extends BaseComponent>(text: string, type: { new(page: Page, identifier: string): T; }, identifier: string, parent?: Locator) {
        await (await driver.component(type, identifier, parent)).fill(text);
    }
}

var formSteps = new FormSteps();

export { formSteps };