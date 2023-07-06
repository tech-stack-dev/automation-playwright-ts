import { Locator } from "playwright-core";
import BasePage from "../base/page/BasePage";

export default class HomePage extends BasePage {
    public logo: Locator = this.page.locator("//a[contains(@class, 'navbar-brand')]");

    public addUserButton: Locator = this.page.locator("//a[contains(., 'Add User')]");
}
