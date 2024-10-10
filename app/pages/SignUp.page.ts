import { Header } from '@components';
import {AppPage} from '@page.object';
import { expect, Locator } from '@playwright/test';
import { step } from '@step';


type Gender = 'Mr.' | 'Mrs.'
type Month = 'January' | 'February' | 'March' | 'April' | 'May' | 'June' | 'July' | 'August' | 'September' | 'October' | 'November' | 'December';

export class SignUp extends AppPage{
    private header: Header = new Header(this.page)

    public pagePath = '/signup'

    readonly newsLetterCheckbox: Locator = this.page.getByTestId('newsletter')
    readonly specialOfferCheckBox: Locator = this.page.getByTestId('optin')

    async expectLoaded(message = 'Enter Account Information is Visible') {
        await expect(this.page.getByText('Enter Account Information')).toBeVisible();
    };

    async checkGenderTitle(gender: Gender) {
        await this.expectLoaded();
        await this.page.getByLabel(gender).check();
    }

    async fillPassword(password: string){
        await this.page.getByTestId('password').fill(password);
    };

    async selectDateOfBirth(day: string, month: Month, year: string) {
        await this.page.getByTestId('days').selectOption(day);
        await this.page.getByTestId('months').selectOption(month);
        await this.page.getByTestId('years').selectOption(year);
    };
}