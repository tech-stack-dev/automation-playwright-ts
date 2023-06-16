import { driver } from "../../base/driver/Driver";
import MainPage from "../../pages/MainPage";

class MainPageSteps {
    public async checkLogo() {
        await (await driver.getPage(MainPage)).logo().isVisible();
    }

    public async clickLogo() {
        await (await driver.getPage(MainPage)).logo().click();
    }

    public async checkLastEditUserButton() {
        await (await driver.getPage(MainPage)).lastEditUserButton().isVisible();
    }

    public async clickLastEditUserButton() {
        await (await driver.getPage(MainPage)).lastEditUserButton().click();
    }
}

const mainPageSteps = new MainPageSteps();

export { mainPageSteps };
