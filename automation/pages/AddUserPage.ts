import BasePage from "../base/page/BasePage";

export default class AddUserPage extends BasePage {
    public userNameInput() {
        return this.page.locator("//input[@id='inputUserName']");
    }

    public yearInputValidationMessage() {
        return this.page.locator("//span[@class='text-danger field-validation-error']");
    }

    public cancelButton() {
        return this.page.locator("//a[@class='btn btn-secondary']");
    }

    public createButton() {
        return this.page.locator("//button[@class='btn btn-primary']");
    }
}
