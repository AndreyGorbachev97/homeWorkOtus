"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sumStrNum = exports.sumStrLen = exports.sum = void 0;
// сумма двух чисел
const sum = (a, b) => a + b;

// суммарное количество символов в обоихстроках
exports.sum = sum;
const sumStrLen = (str1, str2) => sum(str1.length, str2.length);

// сумма цифр введённого числа
exports.sumStrLen = sumStrLen;
const sumStrNum = str => str.split('').reduce((acc, el) => acc + +el, 0);
exports.sumStrNum = sumStrNum;
const task1 = () => {
  console.log('Сумма двух чисел', sum(2, 3));
  console.log('Сумма длин строк', sumStrLen('qwerty', 'test'));
  const result = prompt('Введите трехзначное число');
  console.log('Сумма чисел:', sumStrNum(result));
};