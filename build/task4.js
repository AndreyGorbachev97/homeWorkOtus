"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.task4 = void 0;
const task4 = () => {
  const user = {
    name: 'Jone'
  };
  const resPrompt = prompt('Введите age: ');
  user.age = resPrompt;
  const copyUser = {
    ...user,
    name: 'admin'
  };
  copyUser.role = 'admin';
  console.log('user', user);
  console.log('copyUser', copyUser);
  return {
    user,
    copyUser
  };
};
exports.task4 = task4;