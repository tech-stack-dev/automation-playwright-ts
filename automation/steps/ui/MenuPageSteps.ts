import { expect } from "@playwright/test";
import MenuPage from "../../pages/MenuPage";
import { driver } from "../../base/driver/Driver";

class MenuPageSteps {
    public async openAndClosesMenu() {
        await driver.getPage(MenuPage).clickOpenMenu();
        await driver.getPage(MenuPage).clickCloseButton();
    }

    public async clickContactUsButton() {
        await driver.getPage(MenuPage).contactUsButton.click();
    }

    public async seeLogo() {
        await expect(driver.getPage(MenuPage).logo).toBeVisible();
    }
}

var menuPageSteps = new MenuPageSteps();

export { menuPageSteps };