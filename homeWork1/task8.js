const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const task8 = () => {
  const input = prompt('Введите дату в формате ДД.ММ.ГГГГ: ');
  console.log('input', input);
  const [day, month, year] = input.split('.');
  const inputDate = new Date(`${year}-${month}-${day}`);

  console.log('День недели', days[inputDate.getDay()]);

  // количество минут прошедшее с начала дня
  let diff = Date.now() - inputDate;
  diff = diff / 1000 / 60;
  console.log('количество минут прошедшее с введеной даты: ', diff);
};
