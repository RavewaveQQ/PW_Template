import { Header } from '@components';
import {AppPage} from '@page.object';
import { expect, Locator } from '@playwright/test';
import { step } from '@step';
import {Gender, Month, AddressInfoModel, County} from './../../type'


export class SignUp extends AppPage{
    readonly header: Header = new Header(this.page)

    public pagePath = '/signup'

    readonly newsLetterCheckbox: Locator = this.page.locator('[name="newsletter"]');
    readonly specialOfferCheckBox: Locator = this.page.locator('[name="optin"]');
    private firstName: Locator = this.page.locator('[name="first_name"]');
    private lastName: Locator = this.page.locator('[name="last_name"]');
    private company: Locator = this.page.locator('[name="company"]');
    private address1:Locator = this.page.locator('[name="address1"]');
    private adderss2: Locator = this.page.locator('[name="address2"]');
    private state: Locator = this.page.locator('[name="state"]');
    private city: Locator = this.page.locator('[name="city"]') ;
    private zipCode: Locator = this.page.locator('[name="zipcode"]');
    private phone: Locator = this.page.locator('[name="mobile_number"]')
    private country: Locator = this.page.locator('[name="country"]')
    readonly createAccount: Locator = this.page.getByRole('button', {name: 'Create Account'})
    readonly continue: Locator = this.page.locator('[data-qa="continue-button"]')
    

    @step()
    async expectLoaded(message = 'Enter Account Information is Visible') {
        await expect(this.page.getByText('Enter Account Information')).toBeVisible();
    };

    @step()
    async checkGenderTitle(gender: Gender) {
        await this.expectLoaded();
        await this.page.getByLabel(gender).check();
    };

    @step()
    async fillPassword(password: string){
        await this.page.getByTestId('password').fill(password);
    };

    @step()
    async selectDateOfBirth(day: string, month: Month, year: string) {
        await this.page.getByTestId('days').selectOption(day);
        await this.page.getByTestId('months').selectOption(month);
        await this.page.getByTestId('years').selectOption(year);
    };

    @step()
    async fillAddressInfo(addressInfo: AddressInfoModel) {
        await this.firstName.fill(addressInfo.firstName)
        await this.lastName.fill(addressInfo.lastName)
        await this.company.fill(addressInfo.company)
        await this.address1.fill(addressInfo.address)
        await this.state.fill(addressInfo.state)
        await this.city.fill(addressInfo.city)
        await this.zipCode.fill(addressInfo.zipCode)
        await this.phone.fill(addressInfo.mobileNumber)
    };

    @step()
    async choseCountry(country: County) {
        await this.country.selectOption(country)
    }

    @step()
    async expectAccountCreated() {
        await expect(this.page.locator('[data-qa="account-created"]')).toHaveText('Account Created!')
    }
    
    @step()
    async expectAccountDeleted() {
        await expect(this.page.locator('[data-qa="account-deleted"]')).toHaveText('Account Deleted!')
    }
}