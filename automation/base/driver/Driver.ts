import { Browser, chromium } from "@playwright/test";
import BaseDriver from "./BaseDriver";
import { BrowsersEnum } from "./BrowsersEnum";

class Driver extends BaseDriver {
    public browser: Browser;

    private headless: boolean = true;

    public async createBrowser(browserName: BrowsersEnum) {
        BaseDriver.focusedDriver = new Driver();

        if (BaseDriver.focusedDriver.browser === undefined) {
            // Uncomment if List of Chromium Commands needed
            BaseDriver.focusedDriver.browser = await chromium.launch({ headless: this.headless /*, args: driver.driver.args*/ });
        }

        BaseDriver.focusedDriver.DriverName = browserName;
        BaseDriver.focusedDriver.DriverContext = await BaseDriver.focusedDriver.browser.newContext();
        // Uncomment if permissions needed
        // await driver.driver.context.grantPermissions(driver.driver.permissions);
        BaseDriver.focusedDriver.Page = await BaseDriver.focusedDriver.DriverContext.newPage();
        BaseDriver.focusedDriver.ListOfPages.push(BaseDriver.focusedDriver.Page);
        BaseDriver.listOfDrivers.push(BaseDriver.focusedDriver);

        return this;
    }

    public async closeDrivers() {
        for (let driverToClose of BaseDriver.listOfDrivers) {
            BaseDriver.focusedDriver = driverToClose;

            try {
                await this.DriverContext.close();
            }
            catch (error) {
                console.error(`An error occurred while closing the browser context'${driverToClose}':`, error);
            }
            try {
                await this.close();
            } catch (error) {
                console.error(`An error occurred while closing browser'${driverToClose}':`, error);
            }
        }

        BaseDriver.listOfDrivers = [];
    }
}

var driver = new Driver();

export { driver };