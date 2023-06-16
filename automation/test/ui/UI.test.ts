import { expect, test } from "@playwright/test";
import { BrowsersEnum } from "../../base/driver/BrowsersEnum";
import { driver } from "../../base/driver/Driver";
import { baseDriverSteps } from "../../base/step/BaseDriverSteps";
import ButtonByDataId from "../../components/Button/ButtonByDataId";
import UrlProvider from "../../providers/UrlProvider";
import { buttonSteps } from "../../steps/components/Button/ButtonSteps";
import { mainPageSteps } from "../../steps/ui/MainPageSteps";
import { addUserPageSteps } from "../../steps/ui/AddUserPageSteps";
import ActionButtons from "../../identifiers/buttons/ActionButtons";
import TableByDataId from "../../components/Table/TableByDataId";
import MainTable from "../../identifiers/MainTable";
import MainTableButtons from "../../identifiers/buttons/MainTableButtons";
import AddUserForm from "../../identifiers/forms/AddUserForm";


test.beforeEach(async () => {
    await baseDriverSteps.createsNewBrowser(BrowsersEnum.Browser_1);
    await baseDriverSteps.goToUrl(UrlProvider.mainPageUrl());
});

test("Test example", async () => {
    await mainPageSteps.clickLastEditUserButton();
    await mainPageSteps.clickLogo();
});

test("Test example with 2 browsers and 2 pages", async () => {
    await baseDriverSteps.createsNewBrowser(BrowsersEnum.Browser_2);
    await baseDriverSteps.goToUrl(UrlProvider.mainPageUrl());

    await mainPageSteps.clickLastEditUserButton();

    await baseDriverSteps.createNewPage();
    await baseDriverSteps.goToUrl(UrlProvider.addUserPageUrl());

    await addUserPageSteps.fillUserNameInput("testName");
    await addUserPageSteps.clickCancelButton();

    await baseDriverSteps.switchToBrowser(BrowsersEnum.Browser_1);
    await baseDriverSteps.closeBrowser();
});

test("Test example with components", async () => {
    await baseDriverSteps.goToUrl(UrlProvider.addUserPageUrl());
    await buttonSteps.clickButton(ButtonByDataId, ActionButtons.cancel);

    let tableComponent = await driver.component(TableByDataId, MainTable.UsersTable);
    await buttonSteps.clickLastButton(ButtonByDataId, MainTableButtons.editButton, tableComponent);
    await buttonSteps.clickButton(ButtonByDataId, ActionButtons.cancel)
});

test("Test example with testIdAttribute", async () => {
    await baseDriverSteps.goToUrl(UrlProvider.addUserPageUrl());

    await driver.getByTestId(ActionButtons.create).click();
    await expect(driver.getByTestId(AddUserForm.nameValidationMessage)).toHaveText("Name is requried");
    await driver.getByTestId(ActionButtons.cancel).click();

    await driver.getByTestId(MainTableButtons.deleteButton).last().click();
    await driver.getByTestId(ActionButtons.cancel).click();

    await driver.getByTestId(MainTableButtons.editButton).nth(0).click();
    await driver.getByTestId(ActionButtons.cancel).click();
});

test.afterEach(async () => {
    await driver.closeDrivers();
});
