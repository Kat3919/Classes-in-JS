// //Задача 1.
function applyMa(x, y) {
  for (let u = 0; u < x.length; u++) {
    if (x[u] === y) {
      return true;
    }
  }
  return false;
}
console.log(applyMa([1, 2, 3, 4], -2));

//Задача 2

function fetchNumber(num) {
  let i = 1;
  let b = 0;
  const arr = new Array(num);
  console.log(arr[0]);
  while (arr[arr.length - 1] === undefined && i % 2 !== 0) {
    arr[b] = i;
    b++;
    i += 2;
  }
  return arr;
}
console.log(fetchNumber(3));

//Задача 3
function doubleArrey(arr) {
  const arrey = arr.slice();
  for (let t = 0; t < arr.length; t++) {
    arrey.push(arr[t]);
  }
  return arrey;
}
console.log(doubleArrey([2, 4, 6]));

//Задача 4

function getArreyOfpositives(wer) {
  const newobj = [];
  for (let w = 0; w <= wer.length; w++) {
    if (wer[w] > 0) {
      newobj.push(wer[w]);
    }
  }
  return newobj;
}
console.log(getArreyOfpositives([2, 9, 0, -8, -7]));

//Базовый уровень
//Задача 1.
//Написать функцию getSum , которая будет высчитывать сумму чисел от нуля до
//переданного в нее параметра. Если передадим число 100 то, надо вычислить
//сумму чисел от 0 до 100 (должно получится 5050)
let a = 100;
function receiveSum() {
  let sum = 0;
  for (let i = 0; i < 100; i++) {
    sum = sum + i;
  }
  console.log(sum);
}
receiveSum();

//Задача 2.
//Напишите функцию, она в качестве аргумента принимает в себя сумму кредита,
//который хочет получить клиент и верните результат переплаты по кредиту:
//- процентная ставка в год — 17%,
//- количество лет — 5.
//Мы пишем функцию для хорошего банка, поэтому сумма кредита не увеличивается

function getTheLoanAmount(sumLoan) {
  let year = 5;
  let interestRate = 17;
  let result = ((sumLoan * interestRate) / 100) * year;
  return result;
}
console.log(getTheLoanAmount(200));

//Задача 3.
//Написать функцию trimString , которая в качестве аргумента принимает три параметра:
//- строку
//- значение «от»
//- значение «по»
//После вызова функция должна вернуть переданную строку, обрезанную по значениям «от» и «по».
function trimString(str, from, by) {
  str = str.slice(from, by);
  return str;
}
console.log(trimString("Я живу дома", 1, 6));

//Задача 4.
//Написать функцию getSumNumbers . Она будет принимать число и вычислять
//сумму цифр, из которых состоит число. Для 2021 это будет 5.
function getSumNumbers(number) {
  let sum = 0;
  let numberStr = number.toString();
  for (let w = 0; w < numberStr.length; w++) {
    sum += numberStr[w] | 0;
  }
  return sum;
}
console.log(getSumNumbers(2029));

//Задача 6.
//Напишите функцию fooBoo которая принимает в качестве аргумента три параметра:
//- булевое значение
//- функцию foo которая выводит в консоль свое имя
//- функцию boo которая выводит в консоль свое имя
// Если переданное булевое значение true , то запускаем функцию foo, иначе boo
function foo() {
  console.log("FOO");
}
function boo() {
  console.log("BOO");
}
function fooBoo(boolean, foo, boo) {
  boolean == true ? foo() : boo();
}
fooBoo(false, foo, boo);

//Задача 5.
//Написать функцию getSum , которая принимает два целых числа a и b, они могут
//быть положительными или отрицательными, найти сумму всех чисел между
//ними, включая их, и вернуть ее. Если два числа равны, верните a или b
getSum(1, 0) == 1; // 1 + 0 = 1
getSum(1, 2) == 3; // 1 + 2 = 3
getSum(0, 1) == 1; // 0 + 1 = 1
getSum(1, 1) == 1; // 1 Since both are same
getSum(-1, 0) == -1; // -1 + 0 = -1
getSum(-1, 2) == 2; // -1 + 0 + 1 + 2 = 2
function getSum(a, b) {
  let sum = 0;

  for (; a > b; b++) {
    sum = sum + b;
  }
  for (; b > a; a++) {
    sum = sum + a;
  }

  if (a > b) {
    return sum + a;
  } else {
    return sum + b;
  }
}
getSum(1, 0);
console.log(getSum(1, 0));
console.log(getSum(1, 2));
console.log(getSum(0, 1));
console.log(getSum(1, 1));
console.log(getSum(-1, 0));
console.log(getSum(-1, 2));
