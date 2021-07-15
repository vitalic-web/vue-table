const getISODate = (date) => date.split('.').reverse().join('-');

const addYear = (obj) => {
  const newObj = JSON.parse(JSON.stringify(obj));
  newObj.data.forEach((item) => {
    // eslint-disable-next-line no-param-reassign
    item.year = new Date(getISODate(item.date)).getFullYear();
  });
  return newObj;
};

export {
  getISODate,
  addYear,
};
