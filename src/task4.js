export const createUser = (name) => {
  const user = { 
    name,
  };

  const resPrompt = prompt('Введите age: ');
  user.age = resPrompt;

  return user
}

export const addAdmin = (user) => {
  user.role = 'admin'
  return user;
}

export const destructuring = (obj) => { 
  const {name, age, role} = obj
  console.log(name)
  console.log(age)
  console.log(role)
}

export const task4 = () => {

  const user = createUser("John")
  const copyUser = { ...user, name: 'admin' };
  addAdmin(copyUser)
  destructuring(copyUser)
  console.log('user', user);
  console.log('copyUser', copyUser);
  return { user, copyUser }
};
