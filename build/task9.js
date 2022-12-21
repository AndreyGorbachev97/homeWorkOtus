"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sAndL = exports.isRectangular = void 0;
const isRectangular = (a, b, c) => {
  // Определить, является ли треугольник прямоугольным.
  if (a > b && a > c) {
    return a ** 2 === b ** 2 + c ** 2;
  }
  if (b > a && b > c) {
    return b ** 2 === a ** 2 + c ** 2;
  }
  if (c > a && c > b) {
    return c ** 2 === b ** 2 + a ** 2;
  }
  return false;
};
exports.isRectangular = isRectangular;
const sAndL = R => {
  // Написать программу, которая выведет в консоль длину окружности и площадь круга с радиусом R.
  const l = 2 * Math.PI * R;
  const s = 2 * Math.PI * R ** 2;
  return {
    s,
    l
  };
};
exports.sAndL = sAndL;
const task9 = () => {
  const a = 7;
  const b = 24;
  const c = 25;
  console.log('Треугольник прямоугольныЙ с сторонами 7, 24, 25 ?', isRectangular(a, b, c));
  const R = prompt('Введите радиус круга R: ');
  console.log(`Площадь и длина окружности с радиусом ${R}:`, sAndL(R));
};