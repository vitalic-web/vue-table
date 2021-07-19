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

export {
  getFullDate,
  getUserAge,
  addAge,
};
