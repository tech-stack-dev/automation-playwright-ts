import { test } from "@playwright/test";
import { BrowsersEnum } from "../../base/driver/BrowsersEnum";
import { driver } from "../../base/driver/Driver";
import { baseDriverSteps } from "../../base/step/BaseDriverSteps";
import ButtonById from "../../components/Button/ButtonById";
import ModalWindowById from "../../components/ModalWindow/ModalWindowById";
import Header from "../../identifiers/Header";
import ModalMenu from "../../identifiers/ModalMenu";
import NavigationTab from "../../identifiers/NavigationTab";
import UrlProvider from "../../providers/UrlProvider";
import { buttonSteps } from "../../steps/components/Button/ButtonSteps";
import { menuPageSteps } from "../../steps/ui/MenuPageSteps";

test.beforeEach(async () => {
    await baseDriverSteps.createsNewBrowser(BrowsersEnum.Browser_1);
    await baseDriverSteps.goToUrl(UrlProvider.webSiteUrl());
});

test("Test example", async () => {
    await menuPageSteps.openAndClosesMenu();
    await menuPageSteps.seeLogo();
});

test("Test example with 2 browsers and 2 pages", async () => {
    await baseDriverSteps.createsNewBrowser(BrowsersEnum.Browser_2);
    await baseDriverSteps.goToUrl(UrlProvider.webSiteUrl());

    await menuPageSteps.openAndClosesMenu();

    await baseDriverSteps.createNewPage();
    await baseDriverSteps.goToUrl(UrlProvider.webSiteUrl());

    await menuPageSteps.clickContactUsButton();

    await baseDriverSteps.switchToBrowser(BrowsersEnum.Browser_1);
    await baseDriverSteps.closeBrowser();
});

test("Test example with components", async () => {
    await buttonSteps.clickButton(ButtonById, Header.MenuButton);
    
    let modalMenuComponent = await driver.component(ModalWindowById, ModalMenu.ModalMenu);
    await buttonSteps.clickButton(ButtonById, ModalMenu.CloseModalMenuButton, modalMenuComponent);
});

test("Test example with testIdAttribute", async () => {
    await baseDriverSteps.goToUrl(UrlProvider.careerUrl());

    await driver.getByTestId(NavigationTab.AboutUs).nth(0).click();
    await driver.getByTestId(NavigationTab.Reviews).nth(0).click();
    await driver.getByTestId(NavigationTab.ContactUs).nth(0).click();
    await driver.getByTestId(NavigationTab.Jobs).nth(0).click();
});

test.afterEach(async () => {
    await driver.closeDrivers();
})