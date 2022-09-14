const users = [
  {
    name: "Ramin",
    age: 18,
    password: "crytek",
    isLogin: true,
  },
  {
    name: "Islam",
    age: 21,
    password: "lagaga",
    isLogin: true,
  },
  {
    name: "Daniel",
    age: 19,
    password: "lohhh",
    isLogin: true,
  },
];

let newUser = {
  name: null,
  age: null,
  password: null,
  isLogin: false,
};

const userName = prompt("name");
const userAge = prompt("age");
const userPassword = prompt("password");
let checkPassword = prompt("Write your password again");
if (checkPassword != userPassword) {
  let checkPassword = prompt("Write your password again");
}

newUser.name = userName;
newUser.age = userAge;
newUser.password = userPassword;

function registerUser() {
  let { age, name, password } = newUser;
  if (age !== null && name !== null && password !== null) {
    const checkUniqueUsername = users.find(item => item.name === newUser.name);
    if (checkUniqueUsername) return alert("Такое имя пользователя уже есть");
    users.push(newUser);
  }
}

function checkRegister() {
  const checkLogin = users.find(item => item.name === newUser.name);
  if (checkLogin) newUser.isLogin = true;
}

function updateUserAccount() {
  user = confirm("")
}

registerUser();
checkRegister();
console.log(newUser);
console.log(users);
