import { DesktopMobileSteps } from "./DesktopMobileSteps";

class MobileSteps extends DesktopMobileSteps {
    async doSomething(): Promise<void> {
        throw new Error("Method not implemented.");
    }
}

const mobileSteps = new MobileSteps();
export { mobileSteps };