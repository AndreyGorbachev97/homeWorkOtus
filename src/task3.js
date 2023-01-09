// Вывести в консоль сумму всех целых чисел от 50 до 100
export const sumOfIntegers = () => {
  let sum = 50;
  for (let i = 51; i < 100; i += 1) {
    sum += i;
  }
  return sum
};

export const multiplicationTable = () => {
  let table = `таблица умножения на 7:`
  for (let i = 1; i < 9; i += 1) {
    table += `\n7 * ${i} = ${i * 7}`
  }

  console.log(table);
};

// Запросить у пользователя ввод числа N. Вывести в консоль среднее арифметическое всех нечётных чисел от 1 до N
export const arithmeticMean = (N) => {
  if (N <= 1) return 1;
  let sum = 0;
  let count = 0;
  for (let i = 1; i < N; i += 2) {
    sum += i;
    count += 1;
  }
  return sum / count;
};

const task3 = () => {
  console.log('сумма всех целых чисел от 50 до 100: ', sumOfIntegers());

  multiplicationTable();
  const N = +prompt('Введите число: ');
  console.log('Среднее арефметическое всех нечётных чисел:', arithmeticMean(N));
};
