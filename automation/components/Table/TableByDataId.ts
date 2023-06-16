import { Page } from "@playwright/test";
import BaseComponent from "../../base/component/BaseComponent";

export default class TableByDataId extends BaseComponent {
    constructor(page: Page, identifier: string) {
        super(page, identifier);
        this.ComponentContext = `//table[@data-id="${identifier}"]`;
    }
}