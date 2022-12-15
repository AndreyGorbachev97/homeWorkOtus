const isRectangular = (a, b, c) => {
  // Определить, является ли треугольник прямоугольным.
  if (a > b && a > c) {
    return a ** 2 === b ** 2 + c ** 2
  } else if (b > a && b > c) {
    return b ** 2 === a ** 2 + c ** 2
  } else if (c > a && c > b) {
    return c ** 2 === b ** 2 + a ** 2
  }
}

const sAndL = (R) => {
  // Написать программу, которая выведет в консоль длину окружности и площадь круга с радиусом R.
  const l = 2 * Math.PI * R
  const s = 2 * Math.PI * R ** 2
  return { s, l }
}
const task9 = () => {
  let a = 7; b = 24; c = 25;
  console.log("Треугольник прямоугольныЙ с сторонами 7, 24, 25 ?", isRectangular(a, b, c))
  const R = prompt('Введите радиус круга R: ');
  console.log(`Площадь и длина окружности с радиусом ${R}:`, sAndL(R))

}