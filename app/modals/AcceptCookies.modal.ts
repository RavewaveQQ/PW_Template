import {Component} from '@page.object';
import { expect, Locator } from '@playwright/test';


export class AcceptCookies extends Component {

    private cookieModal: Locator = this.page.getByRole('dialog')
    readonly acceptButton: Locator = this.cookieModal.getByLabel('Consent', { exact: true })
    

   async expectLoaded(): Promise<void> {
        await expect(this.cookieModal).toBeVisible()
    }

}