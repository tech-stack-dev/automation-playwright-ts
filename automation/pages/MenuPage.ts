import { Locator } from "playwright-core";
import BasePage from "../base/page/BasePage";

export default class MenuPage extends BasePage {
    public logo: Locator = this.page.locator("//div[@id='logo-header']");
    public contactUsButton: Locator = this.page.locator("//a[@id='header-book-link']");
    public menuButton: Locator = this.page.locator("//a[@id='menu-btn']");
    public closeButton: Locator = this.page.locator("//div[@id='close-menu-modal-menu']");

    public async clickOpenMenu() {
        await this.menuButton.click();
    }

    public async clickCloseButton() {
        await this.closeButton.click();
    }
}