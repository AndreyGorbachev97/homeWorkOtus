"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.task8 = exports.getDay = exports.getDate = exports.diffDate = exports.dayOfWeek = void 0;
const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const getDate = input => {
  const [day, month, year] = input.split('.');
  return new Date(`${year}-${month}-${day}`);
};
exports.getDate = getDate;
const getDay = inputDate => inputDate.getDay();
exports.getDay = getDay;
const dayOfWeek = day => {
  return days[day];
};
exports.dayOfWeek = dayOfWeek;
const diffDate = () => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  console.log("day", day);
  console.log("month", month);
  console.log("year", year);
  const startDay = new Date(`${year}-${month + 1}-${day}`);
  console.log("startDay", startDay);
  const diff = currentDate - startDay;
  return diff / 1000 / 60;
};

// export const diffDate = (inputDate, currentDate) => {
//   const diff = currentDate - inputDate
//   return diff / 1000 / 60
// };
exports.diffDate = diffDate;
const task8 = () => {
  const input = prompt('Введите дату в формате ДД.ММ.ГГГГ: ');
  console.log('input', input);
  const inputDate = getDate(input);
  console.log('День недели', dayOfWeek(getDay(inputDate)));

  // количество минут прошедшее с начала дня
  console.log('количество минут прошедшее с введеной даты: ', diffDate(inputDate, Date.now()));
};
exports.task8 = task8;