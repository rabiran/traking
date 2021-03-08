import fs from 'fs';
import faker from 'faker';
import utils from './mockUtils';

import { dataTypes } from './DataTypes/dataTypesList';
import { akaEmployeeRecord, akaTelephoneRecord, adsRecord } from './recordsSchemes';

const akaAmount = 400;
const adsAmount = 250;

const mis : string[] = [];
const tzs : string[]  = [];
const employees: akaEmployeeRecord[] = [];
const telephones: akaTelephoneRecord[] = [];
const adUsers = [];
const pictures = [];

// Generating employee and telephones objects for aka
for (let i = 0; i < akaAmount; i++) {
  employees.push({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    tz: tzs[i],
    mi: mis[i],
    clearance: faker.random.number({ min: 0, max: 10 }).toString(),
    rnk: utils.randomElement(dataTypes.RANK),
    nstype: utils.randomElement(dataTypes.SERVICE_TYPE),
    rld: faker.date.between(faker.date.future(10),
                            faker.date.past(10)).toISOString(),
    hr: utils.randomElement(dataTypes.UNIT),
    birthday: faker.date.between(faker.date.past(18),
                                 faker.date.past(40)).toISOString(),
    sex: utils.randomElement(['m', 'f']),
  });
  telephones.push({
    mi: mis[i],
    telephone: utils.generateNumberBody(),
    ktelephone: utils.generateNumberPrefix(),
    telephoneType: faker.random.number({ min: 1, max: 2 }),
  });
}
