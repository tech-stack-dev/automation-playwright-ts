import { test } from "@playwright/test";
import { BrowsersEnum } from "../../base/driver/BrowsersEnum";
import { driver } from "../../base/driver/Driver";
import BaseDriverSteps from "../../base/step/BaseDriverSteps";
import ButtonById from "../../components/Button/ButtonById";
import ModalWindowById from "../../components/ModalWindow/ModalWindowById";
import Header from "../../identifiers/Header";
import ModalMenu from "../../identifiers/ModalMenu";
import NavigationTab from "../../identifiers/NavigationTab";
import UrlProvider from "../../providers/UrlProvider";
import ButtonSteps from "../../steps/components/Button/ButtonSteps";
import MenuPageSteps from "../../steps/ui/MenuPageSteps";

test.beforeEach(async () => {
    await BaseDriverSteps.createsNewBrowser(BrowsersEnum.Browser_1);
    await BaseDriverSteps.goToUrl(UrlProvider.webSiteUrl());
});

test("Test example", async () => {
    await MenuPageSteps.openAndClosesMenu();
    await MenuPageSteps.seeLogo();
});

test("Test example with 2 browsers and 2 pages", async () => {
    await BaseDriverSteps.createsNewBrowser(BrowsersEnum.Browser_2);
    await BaseDriverSteps.goToUrl(UrlProvider.webSiteUrl());

    await MenuPageSteps.openAndClosesMenu();

    await BaseDriverSteps.createNewPage();
    await BaseDriverSteps.goToUrl(UrlProvider.webSiteUrl());

    await MenuPageSteps.clickContactUsButton();

    await BaseDriverSteps.switchToBrowser(BrowsersEnum.Browser_1);
    await BaseDriverSteps.closeBrowser();
});

test("Test example with components", async () => {
    await ButtonSteps.clickButton(ButtonById, Header.MenuButton);
    
    let modalMenuComponent = await driver.component(ModalWindowById, ModalMenu.ModalMenu);
    await ButtonSteps.clickButton(ButtonById, ModalMenu.CloseModalMenuButton, modalMenuComponent);
});

test("Test example with testIdAttribute", async () => {
    await BaseDriverSteps.goToUrl(UrlProvider.careerUrl());

    await driver.getByTestId(NavigationTab.AboutUs).nth(0).click();
    await driver.getByTestId(NavigationTab.Reviews).nth(0).click();
    await driver.getByTestId(NavigationTab.ContactUs).nth(0).click();
    await driver.getByTestId(NavigationTab.Jobs).nth(0).click();
});

test.afterEach(async () => {
    await driver.closeDrivers();
})