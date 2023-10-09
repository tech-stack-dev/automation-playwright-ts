import { test as base } from '@playwright/test';
import { DesktopMobileSteps } from '../steps/ui/DesktopMobileSteps/DesktopMobileSteps';
import { desktopSteps } from '../steps/ui/DesktopMobileSteps/DesktopSteps';
import { mobileSteps } from '../steps/ui/DesktopMobileSteps/MobileSteps';

export let desktopMobileStep: DesktopMobileSteps;

export const test = base.extend<{ desktopMobile: void; }>({
    desktopMobile: [
        async ({ isMobile }, use) => {
            desktopMobileStep = isMobile ? mobileSteps : desktopSteps;

            await use();
        },
        { scope: 'test', auto: true },
    ],
});

export { expect } from '@playwright/test';