import { Component } from '@page.object';
import { expect, Locator } from '@playwright/test';
import { step } from '@step';

export class Header extends Component {

    private logo: Locator = this.page.locator('[class*=logo]');
    private navBar: Locator = this.page.locator('[class*=navbar]')
    readonly deleteAccount: Locator = this.navBar.locator('li', {hasText: ' Delete Account'})
    
    @step()
    async expectLoaded(message = 'Expected header loaded') {
        await expect(this.logo).toBeVisible();
        await expect(this.navBar).toBeVisible();
    };

    @step()
    async expectedLoggedUser(name: string) {
        await expect(this.navBar.locator('li').last()).toHaveText(`Logged in as ${name}`)
    }
}