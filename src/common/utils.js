/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
const getFullDate = (date, isTable) => {
  const fullDate = date.split('.');

  if (fullDate[2].length === 2) {
    fullDate[2] = `19${fullDate[2]}`;
  }

  if (isTable) {
    return fullDate.join('.');
  } return fullDate.reverse().join('-');
};

const getUserAge = (date) => {
  const userDate = new Date(getFullDate(date));
  const currentDate = new Date();
  let age = currentDate.getFullYear() - userDate.getFullYear();
  const monthDiff = currentDate.getMonth() - userDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < userDate.getDate())) {
    age--;
  }

  return age;
};

const addAge = (usersData) => {
  const newObj = JSON.parse(JSON.stringify(usersData));
  newObj.forEach((item) => {
    item.person.birthday = getFullDate(item.person.birthday, true);
    item.person.age = getUserAge(item.person.birthday);
  });
  return newObj;
};

const getDate = (user) => new Date(getFullDate(user.person.birthday));

const collator = new Intl.Collator('en');

const sortMethods = {
  sortString(data, isStringAsc, sortName) {
    switch (sortName) {
      case 'User Name':
        if (isStringAsc) {
          return data.sort((a, b) => collator.compare(a.username, b.username));
        } return data.sort((a, b) => collator.compare(b.username, a.username));
      case 'Email':
        if (isStringAsc) {
          return data.sort((a, b) => collator.compare(a.email, b.email));
        } return data.sort((a, b) => collator.compare(b.email, a.email));
      case 'Name':
        if (isStringAsc) {
          return data.sort((a, b) => collator.compare(a.person.name, b.person.name));
        } return data.sort((a, b) => collator.compare(b.person.name, a.person.name));
      case 'Surname':
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
      case 'Phone':
        if (isNumberAsc) {
          return data.sort((a, b) => collator.compare(a.phone, b.phone));
        } return data.sort((a, b) => collator.compare(b.phone, a.phone));
      case 'Age':
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
};

export {
  getFullDate,
  getUserAge,
  addAge,
  sortMethods,
};
