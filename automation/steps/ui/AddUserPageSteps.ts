import { expect } from "@playwright/test";
import { driver } from "../../base/driver/Driver";
import AddUserPage from "../../pages/AddUserPage";

class AddUserPageSteps {
    public async fillUserNameInput(userName: string) {
        await (await driver.getPage(AddUserPage))
            .userNameInput()
            .fill(userName);
    }

    public async checkYearInputValidationMessage(message: string) {
        await expect((await driver.getPage(AddUserPage))
            .yearInputValidationMessage()).toHaveText(message);
    }

    public async clickCancelButton() {
        await (await driver.getPage(AddUserPage)).cancelButton().click();
    }

    public async clickCreateButton() {
        await (await driver.getPage(AddUserPage)).createButton().click();
    }
}

const addUserPageSteps = new AddUserPageSteps();

export { addUserPageSteps };
