const task4 = () => {
  const user = {
    name: 'Jone',
  };

  const resPrompt = prompt('Введите age: ');
  user.age = resPrompt;

  const copyUser = { ...user, name: 'admin' };
  copyUser.role = 'admin';

  console.log('user', user);
  console.log('copyUser', copyUser);
};
