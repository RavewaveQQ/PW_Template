import { Header } from '@components';
import {AppPage} from '@page.object';
import { expect, Locator } from '@playwright/test';
import { step } from '@step';


export class Home extends AppPage {
    readonly header: Header = new Header(this.page);
    
    public pagePath = '';
    private featuresItems: Locator = this.page.locator('.features_items');



    @step()
    async expectLoaded() {
        await expect(this.featuresItems).toBeVisible();
    };
}