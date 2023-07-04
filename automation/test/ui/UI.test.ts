import { expect, test } from "@playwright/test";
import { BrowsersEnum } from "../../base/driver/BrowsersEnum";
import { driver } from "../../base/driver/Driver";
import { baseDriverSteps } from "../../base/step/BaseDriverSteps";
import ButtonByDataId from "../../components/Button/ButtonByDataId";
import UrlProvider from "../../providers/UrlProvider";
import { buttonSteps } from "../../steps/components/Button/ButtonSteps";
import { homePageSteps } from "../../steps/ui/HomePageSteps";
import { addUserPageSteps } from "../../steps/ui/AddUserPageSteps";
import Buttons from "../../identifiers/buttons/Buttons";
import TableByDataId from "../../components/Table/TableByDataId";
import UsersAndAddressesTable from "../../identifiers/tables/UsersAndAddressesTable";
import AddUserForm from "../../identifiers/forms/AddUserForm";
import UrlPath from "../../providers/UrlPath";
import TableRowByStreetAddress from "../../components/Table/TableRowByStreetAddress";

test.beforeEach(async () => {
    await baseDriverSteps.createsNewBrowser(BrowsersEnum.Browser_1);
    await baseDriverSteps.goToUrl(UrlProvider.homePageUrl());
});

test("Test example", async () => {
    await homePageSteps.clickAddUserButton();
    await homePageSteps.checkLogo();
});

test("Test example with 2 browsers and 2 pages", async () => {
    await baseDriverSteps.createsNewBrowser(BrowsersEnum.Browser_2);
    await baseDriverSteps.goToUrl(UrlProvider.homePageUrl());

    await homePageSteps.checkLogo();

    await baseDriverSteps.createNewPage();
    await baseDriverSteps.goToUrl(UrlProvider.urlBuilder(UrlPath.AddUser));

    await addUserPageSteps.fillUserNameInput("testName");
    await addUserPageSteps.clickCreateButton()
    await addUserPageSteps.checkYearInputValidationMessage("Year of Birth is requried")

    await baseDriverSteps.switchToBrowser(BrowsersEnum.Browser_1);
    await baseDriverSteps.closeBrowser();
});

test("Test example with components", async () => {
    await baseDriverSteps.goToUrl(UrlProvider.urlBuilder(UrlPath.AddUser));
    await buttonSteps.clickButton(ButtonByDataId, Buttons.Cancel);

    let tableComponent = await driver.component(TableByDataId, UsersAndAddressesTable.AddressesTable);
    let tableRow = await driver.component(TableRowByStreetAddress, "178 Broadway", tableComponent);
    await buttonSteps.clickButton(ButtonByDataId, Buttons.Delete, tableRow)

});

test("Test example with testIdAttribute", async () => {
    await baseDriverSteps.goToUrl(UrlProvider.urlBuilder(UrlPath.AddUser));

    await driver.getByTestId(Buttons.Create).click();
    await expect(driver.getByTestId(AddUserForm.NameValidationMessage)).toHaveText("Name is requried");
    await driver.getByTestId(Buttons.Cancel).click();

    await expect(driver.getByTestId(Buttons.Delete).last()).toHaveCSS('background-color', 'rgb(220, 53, 69)');

    await driver.getByTestId(Buttons.Edit).nth(0).click();
    await driver.getByTestId(Buttons.Cancel).click();
    
});

test.afterEach(async () => {
    await driver.closeDrivers();
});
