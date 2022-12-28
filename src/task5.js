export const sumAllElArr = (arr) => arr.reduce((acc, el) => acc += el, 0)

export const arrX2 = (arr) => arr.map((el) => el * 2)

export const maxMinArr = (arr) => {
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

  return { max, min }
}

const task5 = () => {
  const arr = [3, 6, 1, 8, 9, 2, 5, 10, 4, 7];
  console.log('Начальный массив', arr);
  console.log('сумма всех элементов массива:', sumAllElArr(arr));
  console.log('Удвоенный массив', arrX2(arr));

  const resMaxMin = maxMinArr(arr)
  console.log('min', resMaxMin.min);
  console.log('max', resMaxMin.max);
};
