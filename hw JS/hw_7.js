//Базовый уровень
//Задача 1.
//Выведи все элементы массива в консоль с помощью метода forEach .
//Реализуйте решение двумя способами, используя function declaration & arrow function.
const fibonacci = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];
//1 вариант
fibonacci.forEach((element, arrey) => {
  console.log(`Element: ${element}; In arrey ${arrey};`);
});

//2 варант
const fibonaci = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];
fibonaci.forEach(function (element) {
  console.log(element);
});

//Задача 2.
//Используя метод map создайте новый массив, на основе массива users , в
//котором каждый элемент массива будет содержать строку вида:
//['member 1: Darya', 'member 2: Masha', ... etc]
//Реализуйте решение двумя способами, используя function declaration & arrow function.
const users = ["Darya", "Masha", "Denis", "Vitaliy", "Polina", "Anton"];
//1способ
let newUsers = users.map((element, index) =>
  console.log(`member ${index}:${element};`)
);
//2 способ
users.map(function (element, index) {
  console.log(`member ${index}:${element};`);
});

//Задача 3.
//С помощью метода filter создайте новый массив в котором не будет отрицательных чисел.
//Реализуйте решение двумя способами, используя function declaration & arrow function.
const numbers = [7, -4, 32, -90, 54, 32, -21];
//1способ
let positiveNumbers = numbers.filter((element) => {
  if (element >= 0) {
    return true;
  } else {
    return false;
  }
});
console.log(positiveNumbers);
//2 способ
let positiveNumber = numbers.filter((element) => element >= 0);
console.log(positiveNumber);

//Задача 4.
//Используя метод reduce получите сумму всех чисел массива.
//Реализуйте решение двумя способами, используя function declaration & arrow function.
const fibonaccii = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];
//1 способ
let sum = 0;
fibonaccii.forEach((element) => {
  sum += element;
});
console.log("sumSum using forEach metod: " + sum);
//2 способ
let summ = fibonaccii.reduce((accum, element) => accum + element); //accum-промежуточное значение
console.log("sumSum using Reduse metod and the arrow function: " + summ);
//3 способ
let summa = 0;
for (let i = 0; i < fibonaccii.length; i++) {
  summa += fibonaccii[i];
}
console.log("Summa using the For loop " + summa);
//4способ
let sumSum = fibonaccii.reduce(function (a, b) {
  return a + b;
}, 0);
console.log("sumSum using Reduse metod: " + sumSum);

//Задача 5.
//Используя метод find найдите в массиве первое четное число.
//Реализуйте решение двумя способами, используя function declaration & arrow function.
const numberse = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
//1 способ
let result = numberse.find((element) => element % 2 === 0);
console.log(result);
//2способ
let outcome = numberse.find(function (element) {
  return element % 2 === 0;
});
console.log(outcome);

//Продвинутый уровень.
//Задача 1.
// - Написать функцию конструктор Student
// - В каждом объекте студента должны быть поля salary , rate , name
// - Внутри объекта также должен быть метод который на основе рейтинга
//   возвращает сумму возможного кредита.
// - На основе функции создать минимум 5 студентов и имя каждого студента
//   должно соответствовать имени студента из вашей группы.
// - Создать массив students и поместить в него студентов.
// - Написать функцию, которая принимает массив студентов. И вычисляет
//   общую сумму кредитов которую можно выдать группе.
//   rate имеет 4 категории A B C D:
// - A - отличный рейтинг и мы можем дать человеку кредит как 12 его зарплат
// - B - хороший рейтинг и мы можем дать человеку кредит как 9 его зарплат
// - C - неплохой рейтинг и мы можем дать человеку кредит как 6 его зарплат
// - D - плохой рейтинг и мы не можем дать кредит

function Student(salary, rate, name) {
  let credit = 0;
  this.salary = salary;
  this.rate = rate;
  this.name = name;
  this.sumOfCredit = function () {
    switch (this.rate) {
      case "A":
        credit = this.salary * 12;
        console.log(
          "Отличный рейтинг, можем предоставить кредит в размере: ",
          credit
        );
        break;

      case "B":
        credit = this.salary * 9;
        console.log(
          "Хороший рейтингг, можем предоставить кредит в размере:  ",
          credit
        );
        break;

      case "C":
        credit = this.salary * 6;
        console.log(
          "Неплохой рейтинг, можем предоставить кредит в размере:  ",
          credit
        );
        break;

      case "D":
        console.log(" im sorry, we cant afford this present for u!!");
        break;

      default:
        console.log("its must be a mistake");
    }
    return credit;
  };
}

let student1 = new Student(1500, "A", "Kate");
let student2 = new Student(1200, "B", "Vanya");
let student3 = new Student(1000, "C", "Pavel");
let student4 = new Student(800, "D", "Yuliya");
let student5 = new Student(2000, "A", "Violette");

let students = [student1, student2, student3, student4, student5];

function sumOfCredits(students) {
  let totalCredits = 0;
  for (let i = 0; i < students.length; i++) {
    totalCredits += students[i].sumOfCredit();
  }
  return totalCredits;
}

console.log(
  "Общая сумма кредитов для группы студентов: " + sumOfCredits(students)
);

// Задача 2.
// Примечание: для этой задачи y не считается гласной.
// Тролли атакуют наш раздел с комментариями!!!
// Единственный способ справиться с этой ситуацией - удалить все гласные из
// комментариев троллей, нейтрализуя угрозу.

// Ваша задача - написать функцию, которая принимает строку и возвращает
// новую строку с удаленными гласными.
// Например, строка «This website is for losers LOL!» станет «Ths wbst s fr lsrs LL!».

//1 способ
function removeVowels(str1) {
  var vowels = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"];
  var str2 = "";
  for (var i = 0; i < str1.length; i++) {
    if (vowels.indexOf(str1[i]) === -1) {
      str2 += str1[i];
    }
  }

  return str2;
}
console.log(removeVowels("We are learning  js thankful to Mukhamed!"));

// 2-ый способ
function deleteVowels(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  return str
    .split("")
    .map((element) => {
      for (let i = 0; i < vowels.length; i++) {
        if (element === vowels[i]) {
          return "";
        }
      }
      return element;
    })
    .join("");
}

// Можно было и упростить, 3-ой способ
function deleteVowels(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  return str
    .split("")
    .map((element) => (vowels.includes(element) ? "" : element))
    .join("");
}
console.log(deleteVowels(comment));

// Задача 3.
// Нет истории, нет теории
// В приведенных ниже примерах показано, как написать функцию:
// accum("abcd"); // -> 'A-Bb-Ccc-Dddd'
// accum("RqaEzty"); // -> 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'
// accum("cwAt"); // -> 'C-Ww-Aaa-Tttt'
// Параметр — это строка, которая включает только буквы от a...z и A...Z.

//1 способ
function accum(str) {
  let str2 = "";
  for (let i = 0; i < str.length; i++) {
    const symbol = str[i];
    const upper = symbol.toUpperCase();
    const repeatedChar = upper + symbol.toLowerCase().repeat(i);
    str2 += repeatedChar;

    if (i !== str.length - 1) {
      str2 += "-";
    }
  }
  return str2;
}
console.log(accum("abcd"));

//2 способ
function printSymbols(str) {
  const arr = str.split("");
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].repeat(i + 1));
  }
  return newArr.join("-");
}

console.log(printSymbols("RqaEzty"));

//Задача 4.
//Самый высокий и самый низкий
//В этом небольшом задании вам дается строка чисел, разделенных пробелами,
//и вы должны возвращать наибольшее и наименьшее число.
//Строка вывода должна состоять из двух чисел, разделенных одним пробелом,
//при этом наибольшее число должно быть первым.
highAndLow("1 2 3 4 5"); // return '5 1'
highAndLow("1 2 -3 4 5"); // return '5 -3'
highAndLow("1 9 3 4 -5"); // return '9 -5'
//1 вариант
function highAndLow(str) {
  let arrey = str.split(" ");
  let numbMin = [];
  numbMin[0] = arrey.reduce((a, b) => (a > b ? a : b));
  numbMin[1] = arrey.reduce((a, b) => (a < b ? a : b));
  return console.log("return ", numbMin.join(" "));
}
// 2 вариант
function highAndLow(numbers) {
  let arr = numbers.split(" ").map(Number);
  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return `${max} ${min}`;
}

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));

//Задача 5.
//Изограмма - это слово, в котором нет повторяющихся букв, последовательных
//или непоследовательных. Реализуйте функцию, которая определяет, является
//ли строка, содержащая только буквы, изограммой. Предположим, что пустая
//строка является изограммой. Регистр букв мы игнорируем.
// isIsogram("Dermatoglyphics") == true;
// isIsogram("aba") == false;
// isIsogram("moOse") == false; // -- ignore letter case

function isIsogram(str) {
  str = str.toLowerCase();

  let repeatedChars = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char !== " " && repeatedChars[char]) {
      return false;
    } else {
      repeatedChars[char] = 1;
    }
  }

  return true;
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));

// Задача 6.
// Считаем коды символов
// Учитывая строку, превратите каждый символ в его код символа ASCII и
// соедините их вместе, чтобы создать число. Поместите результат в
// переменную total1 .
// Затем замените все числа 7 на число 1 и назовите это число total2 .
// После верните разницу между суммой цифр total1 и total2 .
// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
function calculateDifference(str) {
  let total1 = "";
  let total2 = "";

  for (let i = 0; i < str.length; i++) {
    total1 += str[i].charCodeAt(0);
  }

  for (let i = 0; i < total1.length; i++) {
    if (total1[i] === "7") {
      total2 += "1";
    } else {
      total2 += total1[i];
    }
  }

  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < total1.length; i++) {
    sum1 += parseInt(total1[i]);
    sum2 += parseInt(total2[i]);
  }

  return sum1 - sum2;
}
console.log(calculateDifference("ABC"));

// Задача 7.
// Дубликаты
// Цель этого упражнения — преобразовать строку в новую строку, где каждый
// символ в новой строке равен ( , если этот символ появляется только один раз в
// исходной строке, или ) , если этот символ встречается более одного раза в
// исходной строке. Игнорируйте использование заглавных букв при определении
// дубликата символа.

// "din"; // => '((('
// "recede"; // => '()()()'
// "Success"; // => ')())())'
// "(( @"; // => '))(("'

function transformString(str) {
  const charCount = {};
  let result = "";
  for (let char of str.toLowerCase()) {
    charCount[char] = charCount[char] + 1;
  }
  for (let char of str.toLowerCase()) {
    if (charCount[char] > 1) {
      result += ")";
    } else {
      result += "(";
    }
  }

  return result;
}

console.log(transformString("din"));
console.log(transformString("recede"));
console.log(transformString("Success"));
console.log(transformString("(( @"));
