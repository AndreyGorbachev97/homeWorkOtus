"use strict";

// сумма двух чисел
export const sum = (a, b) => a + b;

// суммарное количество символов в обоихстроках
const sumStrLen = (str1, str2) => sum(str1.length, str2.length);

// сумма цифр введённого числа
const sumStrNum = (str) => str.split("").reduce((acc, el) => acc + +el, 0)

const task1 = () => {
  console.log("Сумма двух чисел", sum(2, 3))
  console.log("Сумма длин строк", sumStrLen("qwerty", "test"))

  const result = prompt('Введите трехзначное число');
  console.log("Сумма чисел:", sumStrNum(result))
}