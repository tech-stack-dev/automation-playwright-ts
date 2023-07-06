import BasePage from "../base/page/BasePage";
import { Locator } from "playwright-core";

export default class AddUserPage extends BasePage {
    public userNameInput: Locator = this.page.locator("//input[@id='inputUserName']");

    public yearInputValidationMessage: Locator = this.page.locator("//span[@data-id='inputError-YearOfBirth']");

    public cancelButton: Locator = this.page.locator("//a[contains(@class, 'btn btn-secondary')]");

    public createButton: Locator = this.page.locator("//button[contains(@class, 'btn btn-primary')]");
}
