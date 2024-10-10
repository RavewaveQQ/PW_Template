import { Header } from '@components';
import {AppPage} from '@page.object';
import { expect, Locator } from '@playwright/test';
import { step } from '@step';

export class Login extends AppPage {
    readonly header: Header = new Header(this.page);
    
    public pagePath = '/login';

    private loginEmail: Locator = this.page.getByTestId('login-email');
    private loginPassword: Locator = this.page.getByTestId('login-password');
    private loginButton: Locator = this.page.getByTestId('login-button');
    private signUpName: Locator = this.page.getByTestId('signup-name');
    private signUpEmail: Locator = this.page.getByTestId('signup-email');
    private signUpButton: Locator = this.page.getByTestId('signup-button');


    @step()
    async expectLoaded() {
        await expect(this.loginEmail).toBeVisible();
        await expect(this.loginPassword).toBeVisible();
        await expect(this.loginButton).toBeVisible();
        await expect(this.signUpName).toBeVisible();
        await expect(this.signUpEmail).toBeVisible();
        await expect(this.signUpButton).toBeVisible();
    };

    @step()
    async signUp(name: string, email: string) {
        await this.expectLoaded();
        await this.signUpName.fill(name);
        await this.signUpEmail.fill(email);
        await this.signUpButton.click();
    };
}