import BasePage from "../base/page/BasePage";

export default class HomePage extends BasePage {
    public logo() {
        return this.page.locator("//a[@class='navbar-brand']");
    }

    public addUserButton() {
        return this.page.locator("//a[text()='Add User']");
    }
}
