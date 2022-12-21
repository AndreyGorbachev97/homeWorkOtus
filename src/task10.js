export const task10 = () => {
  const str = prompt('Введите строку: ');
  const regData = /\d{1,2}[./]\d{2}[./]\d{2,4}/;
  const regEmail = /[\da-z.]+@[\da-z]+\.[a-z]+/;
  const regPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
  console.log('Дата?', regData.test(str));
  console.log('Почта?', regEmail.test(str));
  console.log('Телефон?', regPhone.test(str));
  return { isData: regData.test(str), isEmail: regEmail.test(str), isPhone: regPhone.test(str) }
};
