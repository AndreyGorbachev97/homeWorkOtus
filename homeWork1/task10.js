const task10 = () => {
  const str = prompt('Введите строку: ');
  const regData = /\d{1,2}[\.\/]\d{2}[\.\/]\d{2,4}/
  const regEmail = /[\da-z\.]+@[\da-z]+\.[a-z]+/
  const regPhone = /\+\d[\s\(\-]{0,1}\d{3}[\s\)\-]{0,1}\d{3}[\s\-]{0,1}\d{2}[\s\-]{0, 1}\d{2}/
  console.log("Дата?", regData.test(str));
  console.log("Почта?", regEmail.test(str));
  console.log("Телефон?", regPhone.test(str));
} 