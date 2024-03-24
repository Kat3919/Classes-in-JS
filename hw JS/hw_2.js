// Знакомство с Javascript
// Блок1: Работа с переменными

//Задача 1
//- Объявить 2 переменные: `name`, `student`
//- В `name` записать своё имя
//- В `student` записать значение из `name`
//- Вывести в консоль значения переменных `name` и `student`
let name = "Katsiaryna";
let student = name;
console.log(student + " " + name);
console.log(`${student} ${name}`);

//Задача 2
//Объявить свои 4 переменные, где имя каждой type + Имя переменной из условия. Например, для text будет typeText.
//Записать в них результат выполнения оператора typeof и соответствующей переменной из условия.
//Вывести значения новых переменных в консоль.
let typeText = "Hello";
let typecounter = 100500;
let typeisOpen = true;
let typesomeValue = null;
console.log(typeof typeText);
console.log(typeof typecounter);
console.log(typeof typeisOpen);

//Задача 3
//Какой результат будет после выполнения каждого преобразования?
String(5); //"5"
String(-2); //"-2"
Boolean("Some string"); //true
Boolean(""); //false
Boolean(" "); //true
String(0); //"0"
String(NaN); //"NaN"
Number(false); //0
Number("Hi"); //NaN
Boolean(-25) + " "; //"true"
Number(" \n \t "); //0
String(undefined) + null; //"undefinednull"
Boolean(undefined); //false
Number(undefined); //NaN

//Задача 4
//Сперва запросить при помощи prompt у пользователя имя, затем фамилию.
//Соединить полученные значения в одну строку (не забудь пробел) и показать результат в alert.

//let myName = prompt("Ваше имя:");
//alert(myName == "Катерина");
//let mySurname = prompt("Ваша фамилия:");
//alert(mySurname == "Поварень");
//let myNameSurname = myName + " " + mySurname;
//alert(myNameSurname);

//Задача 5
//У Павла зарплата 1500, у Ольги 1200, а у Марка 2100.
//Создать понятную переменную для каждого сотрудника и записать туда его зарплату.
//Сколько ребята получают суммарно? Результат показать в сообщении через alert.

//let employeePavel = 1500;
//let employeeOlga = 1200;
//let employeeMark = 2100;
//let employeePavelOlgaMark = employeePavel + employeeOlga + employeeMark;
//alert(employeePavelOlgaMark);

//Блок 2:Базовый уровень

//Задача 1
//Создайте переменные, затем сложите их и выведите результат в консоль
//разработчика.
let x = 20;
let y = 58;
let z = 42;
console.log(x + y + z);

//Задача 2
//Создайте переменные:
//- количество секунд в минуте
//- количество минут в часу
//- количество часов в сутках
//- количество суток в году
// Посчитайте ваш возраст в секундах и поместите результат в
// переменную myAgeInSeconds

let secondsMinute = 60;
let minuteHour = 60;
let hourDay = 24;
let dayYear = 365;
let myAgeInSeconds = 66 * secondsMinute * minuteHour * hourDay * dayYear;
console.log(myAgeInSeconds);

//Задача 3
//let count = 42
//let userName = '42'
//Создайте две переменные. Поместите в них переменную count и превратите в
//строку, а userName наоборот в число. Попробуйте реализовать задачу двумя
//разными способами.

//let count = 42; //1 способ - шаблонный литерал
//let oneCount = `${count}`;
//console.log(oneCount);
//console.log(typeof oneCount);

let count = 42; //2 способ - контанцинация
let twoCount = "" + count;
console.log(twoCount);
console.log(typeof twoCount);

//let userName = "42"; //1 способ с parseInt
//let oneuserName = parseInt(userName);
//console.log(oneuserName);
//console.log(typeof oneuserName);

let userName = "42"; //2 способ
userName = Number(userName);
console.log(userName);
console.log(typeof userName);

//Задача 4
//Имеется три переменные:
//let a = 1
//let b = 2
//let c = 'белых медведей'
//Сложите переменные так, чтобы в результате получилось выражение: 12 белых
//медведей и результат выведите в консоль.

let a = 1;
let b = 2;
let c = "белых медведей";
console.log("1" + "2" + " " + "белых медведей"); //1 способ
//console.log(`${a}${b}  ${c}`);//2 способ

//Задача 5
//Создайте переменные и поместите в них нижеприведенные слова. Затем
//создайте еще одну переменную lengthWords и посчитайте в ней длину всех слов
//из списка:
//- морпех
//- наледь
//- попрек
//- рубило
let q = "морпех";
let w = "наледь";
let e = "попрек";
let r = "рубило";
let lengthWords = q + w + e + r;
console.log(lengthWords);

//Задача 6
//Создать 3 переменные разных типов и вывести в консоль для каждой из них
//строку следующего вида:
//`Variable: %variable name% have type: %type variable%`
let oneS = "Оля";
console.log(`Variable: oneS  have type: ${typeof oneS}`);

let twoN = 25;
console.log(`Variable: twoN  have type: ${typeof twoN}`);

let threeB = true;
console.log(`Variable: threeB  have type: ${typeof threeB}`);

//Задача 7
//Запросить у пользователя имя и возраст и вывести их в консоль (сделала в браузер)
//let _name = prompt("Ваше имя:");
//alert("Ваше имя" + " " + _name);
//let _age = prompt("Ваш возраст:");
//alert("Ваш возраст" + " " + _age);

//Продвинутый уровень

//Задача 1
//Поменяйте значение переменных местами не создавая дополнительной переменной:
//let aA = 4
//let bB = 3
let aA = 4;
let bB = 3;
[aA, bB] = [bB, aA];
console.log(`${aA} ${bB}`); // сопоставление массива деструктурирующих назначений

//Задача 2
//В данном послании скрыт шифр! Чтобы его разгадать нам нужно соединить все вторые символы слов!
//let codeWord1 = "обернись";
//let codeWord2 = "неужели";
//let codeWord3 = "огурцы";
//let codeWord4 = "липкие";
//let codeWord5 = "?!";
//Создайте переменную cipher и поместите туда необходимые символы
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
let cipher =
  codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1]; //пишем [1],тк отсчёт начинается с 0
console.log(cipher);
