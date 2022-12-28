"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.monthMap = exports.max = exports.isIncluded = exports.getMonth = void 0;
// название месяца, соответствующее числу
const monthMap = {
  1: 'Январь',
  2: 'Февраль',
  3: 'Март',
  4: 'Апрель',
  5: 'Май',
  6: 'Июнь',
  7: 'Июль',
  8: 'Август',
  9: 'Сентябрь',
  10: 'Октябрь',
  11: 'Ноябрь',
  12: 'Декабрь'
};

// максимальное число
exports.monthMap = monthMap;
const max = (a, b) => a > b ? a : b;
exports.max = max;
const getMonth = index => {
  if (index < 1 || index > 12) {
    return 'Введено не корректное число';
  } else {
    return monthMap[index];
  }
};

// поместится ли круг в квадрат
exports.getMonth = getMonth;
const isIncluded = (circle, square) => {
  const circleD = 2 * Math.sqrt(circle / Math.PI);
  const squareD = Math.sqrt(square);
  return circleD < squareD;
};
exports.isIncluded = isIncluded;
const task2 = () => {
  console.log('Максимальное число: ', max(7, 5));
  const res = +prompt('Введите число от 1 до 12');
  console.log(getMonth(res));
  console.log('Круг поместиться в квадрат? ', isIncluded(4, 4));
};