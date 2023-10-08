export abstract class DesktopMobileSteps {
    abstract doSomething(): Promise<void>;

    public async commonStep(): Promise<void> {
        throw new Error("Method not implemented.");
    }
}