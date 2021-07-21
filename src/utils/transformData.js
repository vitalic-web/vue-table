/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */

import getFullDate from './getFullDate';
import getUserAge from './getUserAge';

export default function transformData(usersData) {
  const newObj = JSON.parse(JSON.stringify(usersData));
  const do_not_show_it_in_UI = Symbol('do_not_show_it_in_UI');

  newObj.forEach((item) => {
    item[do_not_show_it_in_UI] = item.do_not_show_it_in_UI;
    delete item.do_not_show_it_in_UI;
    item.person.birthday = getFullDate(item.person.birthday, true);
    item.person.age = getUserAge(item.person.birthday);
  });
  return newObj;
}
