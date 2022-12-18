const task5 = () => {
  const arr = [3, 6, 1, 8, 9, 2, 5, 10, 4, 7];
  console.log('Начальный массив', arr);
  console.log('сумма всех элементов массива:', arr.reduce((acc, el) => acc += el, 0));
  const arrX2 = arr.map((el) => el * 2);
  console.log('Удвоенный массив', arrX2);

  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  console.log('min', min);
  console.log('max', max);
};
