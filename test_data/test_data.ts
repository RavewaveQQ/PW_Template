import {faker} from '@faker-js/faker';
import {AddressInfoModel} from '@type'


export const ENV = process.env.ENV || 'dev';

export const BASE_URL = {
    dev:'https://automationexercise.com',
    stage: 'https://stage.example.com',
    prod: 'https://www.example.com',
};

export const sessionJsonPath = './session.json';

export const addressInfoGenerator:AddressInfoModel = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    company: faker.company.name(),
    address: faker.location.streetAddress(),
    state: faker.location.state(),
    city: faker.location.city(),
    zipCode: faker.location.zipCode(),
    mobileNumber: faker.phone.number()
}

export const signData = {
    name: faker.person.firstName(), 
    email: faker.internet.exampleEmail({firstName: 'pw_auto'})
}