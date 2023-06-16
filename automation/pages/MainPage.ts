import BasePage from "../base/page/BasePage";

export default class MainPage extends BasePage {
    public logo() {
        return this.page.locator("//a[@class='navbar-brand']");
    }

    public lastEditUserButton() {
        return this.page.locator("//a[@data-id='button-Edit']").last();
    }
}
