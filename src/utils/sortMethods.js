/* eslint-disable prefer-const */
/* eslint-disable guard-for-in */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-restricted-syntax */

import getDate from './getDate';

const collator = new Intl.Collator('en');

const sortMethods = {
  sortString(data, isStringAsc, sortName) {
    switch (sortName) {
      case 'userName':
        if (isStringAsc) {
          return data.sort((a, b) => collator.compare(a.username, b.username));
        } return data.sort((a, b) => collator.compare(b.username, a.username));
      case 'email':
        if (isStringAsc) {
          return data.sort((a, b) => collator.compare(a.email, b.email));
        } return data.sort((a, b) => collator.compare(b.email, a.email));
      case 'name':
        if (isStringAsc) {
          return data.sort((a, b) => collator.compare(a.person.name, b.person.name));
        } return data.sort((a, b) => collator.compare(b.person.name, a.person.name));
      case 'surname':
        if (isStringAsc) {
          return data.sort((a, b) => collator.compare(a.person.surname, b.person.surname));
        } return data.sort((a, b) => collator.compare(b.person.surname, a.person.surname));
      default: {
        if (isStringAsc) {
          return data.sort((a, b) => collator.compare(a.username, b.username));
        } return data.sort((a, b) => collator.compare(b.username, a.username));
      }
    }
  },
  sortNumber(data, isNumberAsc, sortName) {
    switch (sortName) {
      case 'phone':
        if (isNumberAsc) {
          return data.sort((a, b) => collator.compare(a.phone, b.phone));
        } return data.sort((a, b) => collator.compare(b.phone, a.phone));
      case 'age':
        if (isNumberAsc) {
          return data.sort((a, b) => collator.compare(a.person.age, b.person.age));
        } return data.sort((a, b) => collator.compare(b.person.age, a.person.age));
      default: {
        if (isNumberAsc) {
          return data.sort((a, b) => collator.compare(a.person.age, b.person.age));
        } return data.sort((a, b) => collator.compare(b.person.age, a.person.age));
      }
    }
  },
  sortDate(data, isDateAsc) {
    if (isDateAsc) {
      return data.sort((a, b) => getDate(a) - getDate(b));
    } return data.sort((a, b) => getDate(b) - getDate(a));
  },
  search(data, input) {
    const newArr = JSON.parse(JSON.stringify(data));
    return newArr.filter((item) => {
      for (let key in item) {
        if (String(item[key]).toLowerCase().includes(input.toLowerCase())) {
          return String(item[key]).toLowerCase().includes(input.toLowerCase());
        } if (typeof (item[key]) === 'object') {
          for (let key2 in item[key]) {
            if (String(item[key][key2]).toLowerCase().includes(input.toLowerCase())) {
              return String(item[key][key2]).toLowerCase().includes(input.toLowerCase());
            }
          }
        }
      }
    });
  },
};

export default sortMethods;
