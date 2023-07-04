import { expect } from "@playwright/test";
import { driver } from "../../base/driver/Driver";
import HomePage from "../../pages/HomePage";

class HomePageSteps {
    public async checkLogo() {
        await expect(driver.getPage(HomePage).logo).toBeVisible();
    }

    public async clickLogo() {
        await driver.getPage(HomePage).logo.click();
    }

    public async clickAddUserButton() {
        await driver.getPage(HomePage).addUserButton.click();
    }
}

const homePageSteps = new HomePageSteps();

export { homePageSteps };
