import BasePage from "../base/page/BasePage";
import { Locator } from "playwright-core";

export default class AddUserPage extends BasePage {
    public userNameInput: Locator = this.page.locator("//input[@id='inputUserName']");

    public yearInputValidationMessage: Locator = this.page.locator(
        "//span[@class='text-danger field-validation-error']"
    );

    public cancelButton: Locator = this.page.locator("//a[@class='btn btn-secondary']");

    public createButton: Locator = this.page.locator("//button[@class='btn btn-primary']");
}
