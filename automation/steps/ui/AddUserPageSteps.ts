import { expect } from "@playwright/test";
import { driver } from "../../base/driver/Driver";
import AddUserPage from "../../pages/AddUserPage";

class AddUserPageSteps {
    public async fillUserNameInput(userName: string) {
        await driver.getPage(AddUserPage).userNameInput.fill(userName);
    }

    public async checkYearInputValidationMessage(message: string) {
        await expect(driver.getPage(AddUserPage).yearInputValidationMessage).toHaveText(message);
    }

    public async clickCancelButton() {
        await driver.getPage(AddUserPage).cancelButton.click();
    }

    public async clickCreateButton() {
        await driver.getPage(AddUserPage).createButton.click();
    }
}

const addUserPageSteps = new AddUserPageSteps();

export { addUserPageSteps };
