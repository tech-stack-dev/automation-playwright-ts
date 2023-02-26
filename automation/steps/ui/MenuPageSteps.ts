import { expect } from "@playwright/test";
import MenuPage from "../../pages/MenuPage";
import { driver } from "../../base/driver/Driver";

export default class MenuPageSteps {
    public static async openAndClosesMenu() {
        await (await driver.getPage(MenuPage)).clickOpenMenu();
        await (await driver.getPage(MenuPage)).clickCloseButton();
    }

    public static async clickContactUsButton() {
        await (await driver.getPage(MenuPage)).contactUsButton().click();
    }

    public static async seeLogo() {
        await expect((await driver.getPage(MenuPage)).logo()).toBeVisible();
    }
}