import {chromium} from '@playwright/test';
import {AcceptCookies} from '@modals';
import { BASE_URL, sessionJsonPath } from '@test_data';

export default async function globalSetup() {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto(BASE_URL, {waitUntil: 'domcontentloaded'});
    const acceptCookieModal = new AcceptCookies(page);
    await acceptCookieModal.expectLoaded();
    await acceptCookieModal.acceptButton.click();
    await acceptCookieModal.acceptButton.waitFor({state:'hidden'});
    await page.context().storageState({path: sessionJsonPath});
    await browser.close();
};