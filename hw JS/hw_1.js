console.log("Hello World");
// "use strict";

console.log("Hello World!");

let number = 5; //переменная
console.log(number);

// const Number = 6;
// console.log(Number);

console.log(leg);
var leg = 3;

// типы данных
let na = 20 / 0;
console.log(na);

let nam = 20 / -0;
console.log(nam);

let nama = "eee" / 5;
console.log(nama);

let namb = 25689908765n;
console.log(namb);

// let String = "gjhih 34566   hkhgf";
// console.log(String);

let checkAcess = true;
console.log(checkAcess);

let far = undefined;
console.log(far);

let myid = Symbol(113);
console.log(myid);

let myId = "rerere";
console.log(typeof myId);

let myID = true;
console.log(typeof myID);

//Строковое преобразование:
let numbere = 5;
let One = `${numbere} text`; //шаблонный литерал  м-д интерполяции
console.log(One);
console.log(typeof One);

let num = 6;
let Two = "" + num; //контанцинация
console.log(Two);
console.log(typeof Two);

let numb = 7;
let Three = numb.toString();
console.log(Three);
console.log(typeof Three);

let year = 1978;
let yearStringFour = String(year);
console.log(yearStringFour);
console.log(typeof yearStringFour);

//Логическое преобразование
let Age = 45;
let ageBooleanOne = Boolean(Age);
console.log(ageBooleanOne);
console.log(typeof ageBooleanOne);

let age = 455;
let ageBooleanTwo = !!age;
console.log(ageBooleanTwo);
console.log(typeof ageBooleanTwo);

//let wer = 0; // 0,-0,+0,"",false,null,NaN,undefined
//let ageBooleanThree = !!wer;
//console.log(ageBooleanThree);
//console.log(typeof ageBooleanThree);

//Числовое преобразование

let stringe = "25";
let stringeNumberOne = Number(stringe);
console.log(stringeNumberOne);
console.log(typeof stringeNumberOne);

let string = "43";
let stringNumberTwo = +string;
console.log(stringNumberTwo);
console.log(typeof stringNumberTwo);

let str = "54";
let strNmbThree = parseInt(str);
console.log(strNmbThree);
console.log(typeof strNmbThree);

let strc = "67fmhgjh";
let strcNmbrFour = +strc;
console.log(strcNmbrFour);
console.log(typeof strcNmbrFour); //должно быть NaN?

//Функции браузера

//alert("Привет!");

//let user = prompt("Как тебя зовут?");
//alert(user);

//let isUserReady = confirm("Ты готов?");
//alert(isUserReady);

let a = 1;
let b = 1;
console.log(++a); //2
console.log(b++); //1
console.log(a); //2
console.log(b); //2

let a1 = 1;
let b1 = "1";
let c1 = "3";
console.log(a1 == b1);
console.log(a1 === c1);

let d = {
  year: 27,
};
let r = {
  year: 27,
};
console.log(d == r); //т к идёт ссылкой
// console.log(d===r);//тк ещё и проверяет тип

for (let i = 1; i < 10; i++) {
  console.log(i);
}

for (let e = 2; e <= 10; e++) {
  if (e % 2 == 0) {
    console.log(e);
  }
}
function Mum(i) {
  if (i % 5 == 0) {
    return "Неправильно";
  } else return "Правильно";
}
console.log(Mum(24));

function toStart(type) {
  switch (type) {
    case 1:
      "Start";
      console.log("Start");
      break;
    case 2:
      "End";
      console.log("End");
      break;
    case 3:
      "Exet";
      console.log("Exit");
      break;
    default:
      "Совпадений нет.";
      console.log("Совпадений нет.");
      break;
  }
}
console.log(toStart(4));

// let weu = function(){
//  let result=0;
// for(let i=1; i,6; i++){
// result=result + i;
// } return result
// }

function multiplyNumber(i) {
  for (let g = 1; g <= 5; g++) {
    console.log(g * i);
  }
}
console.log(multiplyNumber(4));

let e = true;
let t = "";
if (e && !t) {
  console.log("молодец");
}

let k = 1;
let obg = {};
if (k || obg) {
  console.log("молодец");
}

function getResult(numbereee, numberDegree) {
  return numbereee ** numberDegree;
}
console.log(getResult(2, 3));

function getPet(a, b) {
  !(a && b) ? console.log("Кот") : console.log("Собака");
}
console.log(getPet(1, 1));

const input = [
  { value: "abcd", order: 4, expired: false },
  { value: "qwer", order: 2, expired: true },
  { value: "xyz1", order: 1, expired: false },
  { value: "abx2", order: 3, expired: false },
];
function newResult() {
  let sortedInput = input
    .filter((item) => !item.expired)
    .sort((a, b) => a.order - b.order);
  let result = sortedInput
    .map((item) => item.value)
    .join("")
    .split("")
    .reverse()
    .join("");

  result;
}
console.log(newResult());
