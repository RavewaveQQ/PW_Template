import {test} from '@fixtures';
import {addressInfoGenerator, signData} from '@test_data';

test('Register User', async ({app}) => {
    await app.login.navigateTo();
    await app.login.expectLoaded();
    await app.login.signUp(signData.name, signData.email);
    await app.signUp.checkGenderTitle('Mr.');
    await app.signUp.fillPassword('!Q2w3e4r');
    await app.signUp.selectDateOfBirth('5', 'July','2000');
    await app.signUp.newsLetterCheckbox.check();
    await app.signUp.specialOfferCheckBox.check();
    await app.signUp.fillAddressInfo(addressInfoGenerator);
    await app.signUp.choseCountry('United States');
    await app.signUp.createAccount.click();
    await app.signUp.expectAccountCreated();
    await app.signUp.continue.click();
    await app.signUp.header.expectedLoggedUser(signData.name);
    await app.signUp.header.deleteAccount.click();
    await app.signUp.expectAccountDeleted()
});