import { Page } from "@playwright/test";
import BaseComponent from "../../base/component/BaseComponent";

export default class TableRowByStreetAddress extends BaseComponent {
    constructor(page: Page, address: string) {
        super(page, address);
        this.ComponentContext = `//td[@data-id='td-StreetAddress' and contains(text(),'${address}')]//ancestor::tr`;
    }
}