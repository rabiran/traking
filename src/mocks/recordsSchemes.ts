import dataTypes from './DataTypes/dataTypesList';
import * as miriTypes from './DataTypes/miriTypes';

type akaEmployeeRecord = {
  firstName: string;
  lastName: string;
  tz: string;
  mi: string;
  clearance: string;
  rnk: string;
  nstype: string;
  rld: string;
  hr: string;
  birthday: string;
  sex: string;
};

type akaTelephoneRecord = {
  mi: string;
  telephone: string;
  ktelephone: string;
  telephoneType: number;
};

type adsRecord = {
  kfirstName: string;
  klastName: string;
  guName: string;
  userPrincipalName: string;
  kjob: string;
  hierarchy: string;
  sAMAccountName: string;
  mail: string;
};

export { akaEmployeeRecord, akaTelephoneRecord, adsRecord };
