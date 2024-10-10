import {test} from '@fixtures';
import {expect} from '@playwright/test';
import {faker} from '@faker-js/faker';

test('Register User', async ({app}) => {
    await app.home.navigateTo()
    await app.login.navigateTo()
    await app.login.expectLoaded()
    await app.login.signUp(faker.person.firstName(), faker.internet.exampleEmail({firstName: 'pw_auto'}))
    await app.signUp.checkGenderTitle('Mr.')
    await app.signUp.fillPassword('!Q2w3e4r')
    await app.signUp.selectDateOfBirth('5', 'July','2000')
    await app.signUp.newsLetterCheckbox.check()
    await app.signUp.specialOfferCheckBox.check()

});