// Вывести в консоль сумму всех целых чисел от 50 до 100
const sumOfIntegers = () => {
  let sum = 0;
  for (let i = 50; i < 100; i++) {
    sum += i;
  }
  console.log("сумма всех целыхчисел от 50 до 100: ", sum)
}

// Вывести в консоль таблицу умножения на 7.
const multiplicationTable = () => {
  console.log("таблица умножения на 7: ")
  for (let i = 1; i < 9; i++) {
    console.log(`7 * ${i} = `, i * 7)
  }
}

//Запросить у пользователя ввод числа N. Вывести в консоль среднее арифметическое всех нечётных чисел от 1 до N
const arithmeticMean = () => {
  const N = +prompt('Введите число: ');
  let sum = 0;
  let count = 0;
  for (let i = 1; i < N; i++) {
    if (i % 2 > 0) {
      sum += i;
      count++;
    }
  }
  console.log("Среднее арефметическое всех нечётных чисел:", sum / count)
}

const task3 = () => {
  sumOfIntegers();
  multiplicationTable();
  arithmeticMean();
}