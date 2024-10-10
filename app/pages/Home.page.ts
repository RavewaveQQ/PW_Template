import { Header } from '@components';
import {AppPage} from '@page.object';
import { expect, Locator } from '@playwright/test';
import { step } from '@step';


export class Home extends AppPage {
    readonly header: Header = new Header(this.page);
    
    public pagePath = '/';
    private homeCarousel: Locator = this.page.locator('.carousel slide').first();
    private featuresItems: Locator = this.page.locator('.features_items');
    private recommendedItems: Locator = this.page.locator('.carousel slide').nth(1);


    @step()
    async expectLoaded() {
        await expect(this.homeCarousel).toBeVisible();
        await expect(this.featuresItems).toBeVisible();
        await expect(this.recommendedItems).toBeVisible();
    };
}