/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

import faker from 'faker';

const utils = {
  createCheckDigit: (param: string) => {
    // tslint:disable-next-line: max-line-length
    const rawCheckDigit = param
      .toString()
      .split('')
      .reduce((accumulator: number, currChar: string, currIndex: number) => {
        const digitWeight = Number(currChar) * ((currIndex % 2) + 1);

        // tslint:disable-next-line: no-parameter-reassignment
        return (accumulator += digitWeight > 9 ? digitWeight - 9 : digitWeight);
      }, 0);

    return rawCheckDigit % 10 ? 10 - (rawCheckDigit % 10) : 0;
  },

  randomElement: (array: any[]): string =>
    array[Math.floor(Math.random() * array.length)],
  generateID: (): string => {
    const tz = faker.random.number({ min: 10000000, max: 99999999 }).toString();
    return tz + utils.createCheckDigit(tz);
  },
  generateNumberBody: (): string =>
    faker.random.number({ min: 1000000, max: 9999999 }).toString(),
  generateNumberPrefix: (): string =>
    faker.random.number({ min: 50, max: 59 }).toString(),
};

export default utils;
