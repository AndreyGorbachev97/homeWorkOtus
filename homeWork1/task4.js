const task4 = () => {
  const user = {
    name: "Jone",
  }

  const resPrompt = prompt('Введите age: ');
  user.age = resPrompt;

  const copyUser = { ...user, name: "admin" }
  copyUser.role = "admin";

  let name = copyUser.name;
  let age = copyUser.age;
  let role = copyUser.role;

  console.log("user", user);
  console.log("copyUser", copyUser);

}