import { Browser, BrowserContext, Locator, Page } from "@playwright/test";
import BaseComponent from "../component/BaseComponent";
import { BrowsersEnum } from "./BrowsersEnum";

export default class BaseDriver {
    public static focusedDriver: BaseDriver;
    public static listOfDrivers: BaseDriver[] = [];

    private _driverContext: BrowserContext;
    private _page: Page;
    private _listOfPages: Page[] = [];
    private _driverName: BrowsersEnum;

    public browser: Browser;

    public get DriverContext(): BrowserContext {
        return BaseDriver.focusedDriver._driverContext;
    }

    public set DriverContext(value: BrowserContext) {
        BaseDriver.focusedDriver._driverContext = value;
    }

    public get Page(): Page {
        return BaseDriver.focusedDriver._page;
    }

    public set Page(value: Page) {
        BaseDriver.focusedDriver._page = value;
    }

    public get ListOfPages(): Page[] {
        return BaseDriver.focusedDriver._listOfPages;
    }

    public set ListOfPages(value: Page[]) {
        BaseDriver.focusedDriver._listOfPages = value;
    }

    public get DriverName(): BrowsersEnum {
        return this._driverName;
    }

    public set DriverName(value: BrowsersEnum) {
        this._driverName = value;
    }

    // All permissions https://playwright.dev/docs/api/class-browsercontext#browser-context-grant-permissions
    private _permissions: string[];

    // All args https://peter.sh/experiments/chromium-command-line-switches/
    private _args: string[];

    public get Permissions(): string[] {
        return BaseDriver.focusedDriver._permissions;
    }

    public set Permissions(permissions: string[]) {
        BaseDriver.focusedDriver._permissions = permissions;
    }

    public get Args(): string[] {
        return BaseDriver.focusedDriver._args;
    }

    public set Args(args: string[]) {
        BaseDriver.focusedDriver._args = args;
    }

    public async close() {
        await BaseDriver.focusedDriver.browser.close();
    }

    public async component<T extends BaseComponent>(type: { new(page: Page, identifier: string, parent: Locator | undefined): T; }, identifier: string, parent?: Locator): Promise<T> {
        return await this.componentBuild(new type(BaseDriver.focusedDriver.Page, identifier, parent));
    }

    private async componentBuild<T extends BaseComponent>(component: T): Promise<T> {
        if (component.Parent) {
            component.Element = component.Parent.locator(`xpath=${component.ComponentContext}`);
        } else {
            component.Element = component.Page.locator(`xpath=${component.ComponentContext}`);
        }
        return component;
    }

    public locator(selector: string, baseElement?: Locator): Locator {
        if (baseElement) {
            return baseElement.locator(selector);
        } else {
            return BaseDriver.focusedDriver.Page.locator(selector);
        }
    }

    public getByTestId(testId: string): Locator {
        return this.Page.getByTestId(testId);
    }

    public getPage<T>(type: { new (page: Page): T }) {
        return new type(BaseDriver.focusedDriver.Page);
    }

    public async executeFunc(func: any, attempts: number) {
        let error = null;
        for (let i = 0; i < attempts; i++) {
            try {
                await func();
                return;
            } catch (err) {
                console.log(`${i + 1} attempt to execute ${func.name}`);
                error = err;
            }
        }

        if (error) {
            throw error;
        }
    }
}
