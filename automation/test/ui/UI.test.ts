import { expect, test } from "@playwright/test";
import { BrowsersEnum } from "../../base/driver/BrowsersEnum";
import { driver } from "../../base/driver/Driver";
import { baseDriverSteps } from "../../base/step/BaseDriverSteps";
import ButtonByDataTestId from "../../components/Button/ButtonByDataTestId";
import UrlProvider from "../../providers/UrlProvider";
import { buttonSteps } from "../../steps/components/Button/ButtonSteps";
import { homePageSteps } from "../../steps/ui/HomePageSteps";
import { addUserPageSteps } from "../../steps/ui/AddUserPageSteps";
import Buttons from "../../identifiers/buttons/Buttons";
import AddUserForm from "../../identifiers/forms/AddUserForm";
import UrlPath from "../../providers/UrlPath";
import FormByRole from "../../components/Form/FormByRole";
import TextFieldById from "../../components/Form/TextFieldById";
import { formSteps } from "../../steps/components/Button/FormSteps";

test.beforeAll(async () => {
    await driver.executeFunc(async () => {
        await baseDriverSteps.createsNewBrowserAndGoToUrl(UrlProvider.homePageUrl(), BrowsersEnum.Browser_1);
        await driver.Page.waitForLoadState();
    }, 3);
});

test.beforeEach(async () => {
    await baseDriverSteps.createsNewBrowser(BrowsersEnum.Browser_1);
    await baseDriverSteps.goToUrl(UrlProvider.homePageUrl());
});

test("Test example", async () => {
    await homePageSteps.clickAddUserButton();
    await addUserPageSteps.clickCancelButton();
    await homePageSteps.checkLogo();
});

test("Test example with 2 browsers and 2 pages", async () => {
    await baseDriverSteps.createsNewBrowser(BrowsersEnum.Browser_2);
    await baseDriverSteps.goToUrl(UrlProvider.homePageUrl());

    await homePageSteps.checkLogo();

    await baseDriverSteps.createNewPage();
    await baseDriverSteps.goToUrl(UrlProvider.urlBuilder(UrlPath.AddUser));

    await addUserPageSteps.fillUserNameInput("testName");
    await addUserPageSteps.clickCreateButton();
    await addUserPageSteps.checkYearInputValidationMessage("Year of Birth is requried");

    await baseDriverSteps.switchToBrowser(BrowsersEnum.Browser_1);
    await baseDriverSteps.closeBrowser();
});

test("Test example with components", async () => {
    await baseDriverSteps.goToUrl(UrlProvider.urlBuilder(UrlPath.AddUser));

    let addUserForm = await driver.component(FormByRole, "main");

    await formSteps.fillTextField("testData", TextFieldById, "inputUserName", addUserForm);
    await formSteps.fillTextField("1900", TextFieldById, "inputYearOfBirth", addUserForm);

    await buttonSteps.clickButton(ButtonByDataTestId, Buttons.Cancel);
});

test("Test example with testIdAttribute", async () => {
    await baseDriverSteps.goToUrl(UrlProvider.urlBuilder(UrlPath.AddUser));

    await driver.getByTestId(Buttons.Create).click();
    await expect(driver.getByTestId(AddUserForm.NameValidationMessage)).toHaveText("Name is requried");
    await driver.getByTestId(Buttons.Cancel).click();

    await expect(driver.getByTestId(Buttons.Delete).last()).toHaveCSS("background-color", "rgb(220, 53, 69)");

    await driver.getByTestId(Buttons.Edit).nth(0).click();
    await driver.getByTestId(Buttons.Cancel).click();
});

test.afterEach(async () => {
    await driver.closeDrivers();
});
