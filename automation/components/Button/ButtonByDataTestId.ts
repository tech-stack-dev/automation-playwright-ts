import { Locator, Page } from "@playwright/test";
import BaseComponent from "../../base/component/BaseComponent";

export default class ButtonByDataTestId extends BaseComponent {
    constructor(page: Page, identifier: string, parent?: Locator) {
        super(page, identifier, parent);
        this.ComponentContext = `//*[@data-testid="${identifier}"]`;
    }

    public async clickButton() {
        await this.Element.click();
    }
}
