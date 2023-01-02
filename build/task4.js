"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.task4 = exports.createUser = exports.addAdmin = void 0;
const createUser = () => {
  const user = {
    name: 'Jone'
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
const task4 = () => {
  const user = createUser();
  const copyUser = {
    ...user,
    name: 'admin'
  };
  addAdmin(copyUser);
  console.log('user', user);
  console.log('copyUser', copyUser);
  return {
    user,
    copyUser
  };
};
exports.task4 = task4;