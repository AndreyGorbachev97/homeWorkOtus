const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

export const getDate = (input) => {
  const [day, month, year] = input.split('.');
  return new Date(`${year}-${month}-${day}`);
}

export const getDay = (inputDate) => inputDate.getDay()

export const dayOfWeek = (day) => {
  return days[day]
}

export const diffDate = () => {
  const currentDate = new Date()
  const day = currentDate.getDate()
  const month = currentDate.getMonth()
  const year = currentDate.getFullYear()
  const startDay = new Date(`${year}-${month}-${day}`);
  console.log("startDay", startDay)
  const diff = currentDate - startDay
  return diff / 1000 / 60
};

// export const diffDate = (inputDate, currentDate) => {
//   const diff = currentDate - inputDate
//   return diff / 1000 / 60
// };

export const task8 = () => {
  const input = prompt('Введите дату в формате ДД.ММ.ГГГГ: ');
  console.log('input', input);
  const inputDate = getDate(input)

  console.log('День недели', dayOfWeek(getDay(inputDate)));

  // количество минут прошедшее с начала дня
  console.log('количество минут прошедшее с введеной даты: ', diffDate(inputDate, Date.now()));
};
