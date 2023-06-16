import BasePage from "../base/page/BasePage";

export default class AddUserPage extends BasePage {
    public userNameInput() {
        return this.page.locator("//input[@id='inputUserName']");
    }

    public cancelButton() {
        return this.page.locator("//a[@data-id='button-Cancel']");
    }
}
