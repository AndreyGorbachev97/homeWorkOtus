"use strict";

// максимальное число
const max = (a, b) => a > b ? a : b;
max(7, 5)

// название месяца, соответствующее числу
const monthMap = {
  1: "Январь",
  2: "Февраль",
  3: "Март",
  4: "Апрель",
  5: "Май",
  6: "Июнь",
  7: "Июль",
  8: "Август",
  9: "Сентябрь",
  10: "Октябрь",
  11: "Ноябрь",
  12: "Декабрь",
}

const res = +prompt('Введите трехзначное число от 1 до 12');
if (res < 1 || res > 12) {
  console.log("Введено не корректное число");
} else {
  console.log(monthMap[res]);
}

// поместится ли круг в квадрат
const isIncluded = (circle, square) => {
  const circleD = 2 * Math.sqrt(circle / Math.PI);
  const squareD = Math.sqrt(square)
  console.log(circleD)
  console.log(squareD)
  console.log(circleD < squareD)
}

isIncluded(4, 4)