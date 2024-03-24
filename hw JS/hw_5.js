//Базовый уровень
//Задача 1.
//Создать любой объект с двумя ключами и любыми значениями в них,
// а затем удалить ключи из объекта.
let me = {
  name: "Katsiaryna",
  age: 13,
};
//console.log("My name is" + " " + me.name);
//console.log(`I am ${me.age} years old`);
delete me.name;
delete me.age;

//Задача 2.
//Создать любой объект с двумя ключами и любыми значениями в них,
//а затем проверить есть ли в объекте определенный ключ и если есть вывести в консоль `true`.
let a = {
  name: "Katsiaryna",
  surname: "Povaren",
};
console.log(a.name);
console.log("name" in a);
console.log(a.surname);
console.log("age" in a);

//Задача 3.
//Дан объект.C помощью цикла for..in вывести в консоль сначала все ключи, потом
//значения ключей объекта.
const student = {
  name: "John",
  age: 19,
  isHappy: true,
};
for (let key in student) {
  console.log(key); //перебираем ключи
  console.log(student[key]); //перебираем свойства в ключах
}

//Задача 4.
//Дан объект. Вывести в консоль слова "красный" и "синий".
let ruPumPuRuRum = "ru pum pu ru rum";
const colors = {
  "ru pum pu ru rum": {
    red: "красный",
    green: "зеленый",
    blue: "синий",
  },
};
console.log(colors[ruPumPuRuRum].red + " и " + colors[ruPumPuRuRum].blue);
console.log(`${colors[ruPumPuRuRum].red} и ${colors[ruPumPuRuRum].blue}`);

//Задача 5.
//Дан объект.Вычислите среднюю зарплату сотрудников и результат поместите
//в соответствующую переменную.

let salaries = {
  andrey: 500,
  sveta: 413,
  anton: 987,
  igor: 664,
  alexandra: 199,
};
let averageSalaryOfEmployees =
  (salaries.andrey +
    salaries.sveta +
    salaries.anton +
    salaries.igor +
    salaries.alexandra) /
  5;
console.log(averageSalaryOfEmployees);

//Задача 6.
//Создать валидатор, запросить у пользователя логин и пароль для регистрации.
//Затем данные записать в объект.
//Потом попросить пользователя подтвердить данные. Если верно введен логин
//и пароль, вывести сообщение Добро пожаловать .
let login = prompt("Введите ваш логин:");
let password = prompt("Введите ваш пароль:");
let validator = {
  objLogin: login,
  obgPassword: password,
};
let confirmLoginDetails = prompt("Подтвердите ваш логин");
let confirmThePasswordData = prompt("Подтвердите ваш пароль");
if (
  validator.objLogin == confirmLoginDetails &&
  validator.obgPassword == confirmThePasswordData
) {
  alert("Добро пожаловать!");
} else {
  alert("Ошибка.Неверно введён логин или пароль.");
}

//Продвинутый уровень
//Задача 2.
//Даны два одинаковых объекта. Сравните их так, чтобы они были равны.

let student1 = {
  name: "Polina",
  age: 27,
};

let student2 = {
  name: "Polina",
  age: 27,
};
console.log(JSON.stringify(student1) === JSON.stringify(student2));

//Задача 3.
//У нас есть объект с животными. Наша задача узнать имя птицы и вывести его в консоль.
//Но произошла ошибка и в этом объекте нет птицы. Если попробуем узнать имя мы получим ошибку.
//Задача придумать, как обратиться к несуществующему объекту и не получить ошибку,
//чтобы наша программа работала дальше.
const animals = {
  cat: {
    name: "Енчик",
    age: 3,
  },
  dog: {
    name: "Орео",
    age: 2,
  },
};

const birds = animals.birds?.nonExistingProperty;
console.log(animals.birds);
console.log(animals.cat);

//Задача
//returns the arrey of string lengths from the specified string arrey
const getStrengsLenght = (arr) => {
  const newArrey = arr.map((value) => value.lenght);
  return newArrey;
};

//
const getHead = (arr, n) => {
  const newArr = arr.filter((index) => index < n - 1);
  return newArr;
};
console.log(getHead);

let arr = [1,2,3,]
