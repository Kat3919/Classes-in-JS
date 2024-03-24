//Базовый уровень
//Задача 1.
//Дан массив. Выведите в консоль его длину.
const colors = ["red", "green", "blue"];
console.log(colors.length);

//Задача 2.
//Дан массив. Выведите в консоль его последний элемент вне зависимости от его длинны.
const animals = ["monkey", "dog", "cat"];
let lastElement = animals[animals.length - 1];
console.log(lastElement);

//Задача 3.
//Дан массив. Удалите все элементы в массиве и выведите в консоль полученный результат.
//Реализуйте решение двумя способами.
const numbers = [5, 43, 63, 23, 90]; // 1 способ
let newNumbers = numbers.slice(1, 1);
console.log(newNumbers);

const number = [5, 43, 63, 23, 90]; // 2 способ
let rec = number.filter((elem) => elem > 100);
console.log(rec);

const numbe = [5, 43, 63, 23, 90]; // 3 способ
delete numbe[0];
delete numbe[1];
delete numbe[2];
delete numbe[3];
delete numbe[4];
console.log(numbe);

const numb = [5, 43, 63, 23, 90]; // 4 способ
numb.length = 0;
console.log(numb);

//Задача 4.
//Дан массив.
//- 1.Удалите последний элемент массива, затем вместо него добавьте в массив студента Borya .
//- 2.Удалите первый элемент массива, затем вместо него добавьте в массив студента Andrey .
//- Полученный результат не забудьте вывести в консоль.
const students = ["Polina", "Dasha", "Masha"]; //1.
let newArreyOne = students.splice(2, 2, "Borya");
console.log(students);

let newArreyTwo = students.splice(0, 1, "Andrey"); //2.
console.log(students);

//Задача 5.
//Дан массив.Выведите в консоль все элементы массива. Сначала через цикл for ,затем for..of
const cats = ["Gachito", "Tom", "Batman"];
for (let r = 0; r < cats.length; r++) {
  console.log(cats[r]);
}
for (let element of cats) {
  console.log(element);
}

//Задача 6.
//1.Соедините два массива чисел в один.
//2.В полученном массиве попробуйте найти индекс числа 8.
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

let newNum = evenNumbers.concat(oddNumbers); //1.
console.log(newNum);

let longArrey = [].concat(evenNumbers, oddNumbers); //1.
console.log(longArrey);

console.log(longArrey.indexOf(8)); //2.

//Задача 7.
//1.Дан массив.Наш бинарный массив неполный, в нем явно не хватает единиц.
//2.Превратите данный массив в строку. [0, 0, 0, 0] -> '0101010'

const binary = [0, 0, 0, 0];
let newArreyWithUnits = binary.splice(1, 2, 1, 0, 1, 0, 1); //1.
console.log(binary);
console.log(binary.join("")); //2.

//Продвинутый уровень
//Задача 1.
//Для решения задач используйте циклы for или for..of.
//Реализуйте функцию, которая будет проверять, является ли слово палиндромом.
//1 вариант
function isPal(value) {
  var palArr = value.split("");
  var reverseVal = "";
  for (var g = 0; g < palArr.length; g++) {
    if (palArr[g] === "") palArr.splice(g, 1);
  }
  var inputValue = palArr.join("").toLowerCase();
  reverseVal = palArr.reverse().join("").toLowerCase();
  if (inputValue.indexOf(reverseVal) != -1) return true;
  else return false;
}
console.log(isPal("Шалаш"));
console.log(isPal("1234"));
console.log(isPal("123321"));

//2 вариант
function palindrome(str) {
  return str === str.split("").reverse("").join("");

  //сравниваем 2 строки и вторую отзеркаливаем(переворачиваем)
  //вторая - разбиваем в массив(split),отзеркаливаем массив(reverse),собираем в строку(join)
}
console.log(palindrome("шалаш"));
console.log(palindrome("мама"));
console.log(palindrome("2332"));

//Задача 2.
//Выведите в консоль среднее значение чисел в многомерном массиве.
let avr = 0;
const matrix = [
  [12, 98, 78, 65, 23],
  [54, 76, 98, 43, 65],
  [13, 324, 65, 312],
  [9092, 22, 45, 90000],
];
//1 вариант
for (let q = 0; q < matrix.length; q++) {
  let temp = 0;
  for (let k = 0; k < matrix[q].length; k++) {
    temp += matrix[q][k];
  }
  avr += temp;
}
console.log(
  `Среднее значение равно ${avr}/${matrix.length} = ${avr / matrix.length}`
);

// 2 вариант

let summ = matrix.flat(Infinity).reduce((acc, val) => acc + val, 0);
console.log(summ); //сумма всех чисел в массиве

let averageValueNumbers = summ / matrix.length;
console.log(averageValueNumbers);

//Задача 3.
//Дан массив.
//Создайте два массива, в один поместите все положительные числа включая 0,
//в другой все отрицательные. Оба массива затем выведите в консоль.
const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4];
// 1 вариант
let positiveNumbers = mixedNumbers.filter((element) => {
  if (element >= 0) {
    return true;
  } else {
    return false;
  }
});
console.log(positiveNumbers);
let negativeNumbers = mixedNumbers.filter((element) => {
  if (element < 0) {
    return true;
  } else {
    return false;
  }
});
console.log(negativeNumbers);

//2 вариант
let positiveNumber = mixedNumbers.filter((element) => element >= 0);
console.log(positiveNumber);
let negativeNumber = mixedNumbers.filter((element) => element < 0);
console.log(negativeNumber);

//Задача 4.
//Создать массив длинной не менее 5, из динамически созданных случайных
//чисел. Далее написать алгоритм, который берет все числа из исходного
//массива, возводит их в куб и записывает в новый массив. В конце вывести оба
//массива в консоль
function getRandomArrey(num) {
  let array = [];
  let newArray = [];
  for (let v = 0; v < num; v++) {
    //сгенерируем рандомное число
    let element = Math.round(Math.random() * 100 - 50); //числа и положит. и отриц. если -50
    array.push(element);
  }
  for (let b = 0; b < array.length; b++) {
    newArray[b] = array[b] ** 3; // возводим все элементы массива в куб
  }
  return console.log("Current array:", array, "New array array:", newArray);
  // будут любые рандомные числа в массиве и каждое возведено в куб
}
getRandomArrey(5);
