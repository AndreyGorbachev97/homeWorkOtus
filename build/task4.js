"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.task4 = exports.destructuring = exports.createUser = exports.addAdmin = void 0;
const createUser = name => {
  const user = {
    name
  };
  const resPrompt = prompt('Введите age: ');
  user.age = resPrompt;
  return user;
};
exports.createUser = createUser;
const addAdmin = user => {
  user.role = 'admin';
  return user;
};
exports.addAdmin = addAdmin;
const destructuring = obj => {
  const {
    name,
    age,
    role
  } = obj;
  console.log(name);
  console.log(age);
  console.log(role);
};
exports.destructuring = destructuring;
const task4 = () => {
  const user = createUser("John");
  const copyUser = {
    ...user,
    name: 'admin'
  };
  addAdmin(copyUser);
  destructuring(copyUser);
  console.log('user', user);
  console.log('copyUser', copyUser);
  return {
    user,
    copyUser
  };
};
exports.task4 = task4;