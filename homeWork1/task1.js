"use strict";

const task1 = () => {
  // сумма двух чисел
  const sum = (a, b) => console.log(a + b);
  sum(2, 3)

  // суммарное количество символов в обоихстроках
  const sumStrLen = (str1, str2) => sum(str1.length, str2.length);
  sumStrLen("qwerty", "test")

  // сумма цифр введённого числа
  const result = prompt('Введите трехзначное число');
  console.log("Сумма чисел:", result.split("").reduce((acc, el) => acc + +el, 0))
}