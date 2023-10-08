import { DesktopMobileSteps } from "./DesktopMobileSteps";

class DesktopSteps extends DesktopMobileSteps {
    async doSomething(): Promise<void> {
        throw new Error("Method not implemented.");
    }
}

const desktopSteps = new DesktopSteps();
export { desktopSteps };