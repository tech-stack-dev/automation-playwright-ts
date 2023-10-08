import { driver } from "../driver/Driver";
import { BrowsersEnum } from "../driver/BrowsersEnum";
import BaseDriver from "../driver/BaseDriver";

class BaseDriverSteps {
    public async createsNewBrowser(browserName: BrowsersEnum) {
        await driver.createBrowser(browserName);
    }

    public async createsNewBrowserAndGoToUrl(url: string, browserName: BrowsersEnum) {
        await driver.createBrowser(browserName);
        await this.goToUrl(url);
    }

    public async createNewPage() {
        let newPage = await driver.DriverContext.newPage();
        driver.Page = newPage;
        driver.ListOfPages.push(newPage);
    }

    public async switchToBrowser(browserName: BrowsersEnum) {
        BaseDriver.focusedDriver = BaseDriver.listOfDrivers.find((x) => x.DriverName === browserName)!;
    }

    public async switchToBrowserTab(tabNumber: number) {
        driver.Page = driver.ListOfPages[tabNumber];
    }

    public async closeBrowser() {
        await driver.DriverContext.close();
    }

    public async closeBrowserTab() {
        await driver.Page.close();
    }

    public async goToUrl(url: string) {
        await driver.Page.goto(url);
    }
}

var baseDriverSteps = new BaseDriverSteps();

export { baseDriverSteps };
