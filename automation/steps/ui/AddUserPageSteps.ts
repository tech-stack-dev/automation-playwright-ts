import { driver } from "../../base/driver/Driver";
import AddUserPage from "../../pages/AddUserPage";

class AddUserPageSteps {
    public async fillUserNameInput(userName: string) {
        await (await driver.getPage(AddUserPage))
            .userNameInput()
            .fill(userName);
    }

    public async clickCancelButton() {
        await (await driver.getPage(AddUserPage)).cancelButton().click();
    }
}

const addUserPageSteps = new AddUserPageSteps();

export { addUserPageSteps };
