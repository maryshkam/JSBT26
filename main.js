"use strict";
/*
 * Функціональний вираз та оголошення функції.
 * Параметри, аргументи, повернення.
 */



// hello('Bob', "Black", "red", "baseball");

// function hello (name,surname = "Anonim", ...args) {
//   const newName = name.toUpperCase();
//   console.log(`Say Hello Dear ${name}`);
//   console.log(`Say Hello Dear ${newName}`);
//   console.log(name);
//   console.log(surname);
//   console.log(arguments);
//   console.log(args);
//  const newArr = Array.from(arguments);
//  console.log(newArr);
// }
// hello('Bob');

// const hello = function (name) {
//   const newName = name.toUpperCase();
//   console.log(`Say Hello Dear ${name}`);
//   console.log(`Say Hello Dear ${newName}`);
// }

// hello('Bob');

// const str ='new string';
// const number = 15;
// for(){

// }
//while, do while, for, if
// if(number>10) {

//   const res = number;
//   // console.log(res);
//   // console.log(str)
// }
// console.log(number);
// console.log(res);

// {

// }

// function multiply(x, y, z) {
//   console.log(`Результат умножения равен ${x * y * z}`);
// }

// console.log("Лог до вызова функции multiply");
// multiply(2, 3, 5); // Результат умножения равен 30
// console.log("Лог после вызова функции multiply");

// function назва_функції(параметр_1, параметр_2...) {
// тіло функції
// }

// function showMessage(userFirstName, userLastName = '') {
//   const message = `Hello ${userFirstName} ${userLastName}`;

//   console.log(message);
// }

// showMessage('Craig');

// showMessage('Craig', 'Morris');

// const showMessage = function (userFirstName, userLastName = '') {
//   const message = `Hello ${userFirstName} ${userLastName}`;

//   console.log(message);
// };

// showMessage('Oleksii');

// showMessage('Craig', 'Morris');

// function fn(number) {
//   if (number > 10) {
//     return 'Число більше 10';
//   }

//   return 'Число менше 10';
// }

// const result = fn(0);

// console.log(result);

/*
? Напиши функцію calcBMI(weight, height) яка розраховує і повертає індекс маси тіла людини.
? Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.
? Вага і висота будуть спеціально передані як рядки. Нецілі числа можуть бути задані у вигляді 24.7 або 24,7,
? тобто як роздільник дробової частини може бути кома.
? Індекс маси тіла необхідно округлити до однієї цифри після коми;
*/

// function calcBMI (weight,height) {
//   weight = Number.parseFloat(weight.replace(',', '.'));//88.3
//   height= Number.parseFloat(height.replace(',', '.'));//1.75
//   const resultBMI =weight/Math.pow(height,2);
//   // console.log(resultBMI);
//   return Number(resultBMI.toFixed(1));
// }

// const calcBMI = function (weight,height) {
//   weight = Number.parseFloat(weight.replace(',', '.'));//88.3
//   height= Number.parseFloat(height.replace(',', '.'));//1.75
//   const resultBMI =weight/Math.pow(height,2);
//   // console.log(resultBMI);
//   return Number(resultBMI.toFixed(1));
// }

// const userBMI = calcBMI('88,3', '1.75');
// console.log(userBMI);
/*
? Напишіть функцію min(a, b), яка повертає менше з чисел a і b.
*/

// const result = function (a, b) {
//   return a < b ? a : b;
//   // if(a<b){
//   //   return a;
//   // }
//   //   return b;

// }
// console.log(result(2,4));
// console.log(result(3, -1));
// console.log(result(1,1));

/*
? Напишіть функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами,
? значення яких буде передано до параметра dimensions у вигляді рядка.
? Значення гарантовано розділені пробілом.
*/

// const getRectArea= function (dimensions) {
//   const sidesArr = dimensions.split(' ');
//   console.log(sidesArr);
//   return Number(sidesArr[0])*Number(sidesArr[1]);

// }

// console.log(getRectArea('8 11'));
// console.log(getRectArea('18 11'));
// console.log(getRectArea('8 21'));

/*
? Напиши функцію logItems(items), яка отримує масив і використовує цикл for,
? який для кожного елемента масиву буде виводити до консоля повідомлення
? у форматі < номер елемента > - < значення елемента >. Нумерація елементів повинна починатися з 1.
? Наприклад, для першого елемента масиву ['Mango','Poly','Ajax'] з індексом 0 буде виведено 1 - Mango,
? а для індексу 2 виведе 3 - Ajax.
*/

// const logItems = function(items){
//   const res= [];
//   for (let i=0; i < items.length; i +=1) {
//     res.push(`${i+1}: ${items[i]}`) ;
//     // console.log(`${i+1}: ${items[i]}`)
//   }
//   const str = res.join(' ');
//   console.log(str);
//   return str;
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/*
? Напишіть функцію printContactsInfo(names, phones), яка виводить у консоль ім'я і телефонний номер користувача.
? Параметри names і phones будуть передані рядками, розділені комами.
? Порядковий номер імен і телефонів у рядках вказують на відповідність.
? Кількість імен і телефонів гарантовано однакова.
*/

// const printContactsInfo = function (names, phones) {
//   names = names.split(",");
//   phones = phones.split(",");
//   for (let i = 0; i < names.length; i += 1) {
//     console.log(`${names[i]}: ${phones[i]}`);
//   }
//   return
// };

// printContactsInfo(
//   "Jacob,William,Solomon,Artemis",
//   "89001234567,89001112233,890055566377,890055566300"
// );

// printContactsInfo(
//   "Vera,Carr,Violet,Sherman",
//   "89001234567,89001112233,890055566377,890055566300"
// );

/*
? Напишіть функцію findLargestNumber(numbers) яка шукає найбільше число в масиві.
*/

// const findLargestNumber = function(numbers) {
// let max = numbers[0];
// for(let i=1; i < numbers.length; i +=1) {
//   if(numbers[i] > max) {
//     max = numbers [i]
//   }
// }
// return max;
// }


// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

/*
? Напишіть функцію calcAverage() яка приймає довільну кількість аргументів і повертає їх середнє значення.
? Всі аругменти будуть тільки числами.
*/

// const calcAverage = function(){
//   // arguments - псевдомасив
//   let total = 0;
//   for(const number of arguments){
//     total += number;
//   }
//   return total/arguments.length;
// }

// console.log(calcAverage(1, 2, 3, 4)); // 2.5
// console.log(calcAverage(14, 8, 2)); // 8
// console.log(calcAverage(27, 43, 2, 8, 36)); // 23.2

/*
? Напишіть функції для роботи з колекцією навчальних курсів courses:
? addCourse(name) - додає курс в кінець колекції
? removeCourse(name) - видаляє курс з колекції
? updateCourse(oldName, newName) - змінює назву курса
*/

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// const addCourse = function (name) {
//   // courses.push(name);
//   if(courses.includes(name)){
//     console.log('У вас такий іже курс записаний');
//     return;
//   }
//   courses.push(name);
// }

// const removeCourse = function(name) {
//   if(!courses.includes(name)) {
//     console.log('Курс з такою назвою не знайдено!');
//     return;
//   }
//   const idxOfCourse = courses.indexOf(name);
//   courses.splice(idxOfCourse,1);
// }

// const updateCourse = function(oldName, newName) {
//   console.log(arguments);
//   // console.log(arg);
//   // const new2 = arguments[2];
//   // console.log(new2);
//   if(!courses.includes(oldName)) {
//     console.log('Курс з такою назвою не знайдено!');
//     return;
//   }
//   const idxOfCourse = courses.indexOf(oldName);
//   courses.splice(idxOfCourse, 1, newName);
// }

// console.log(courses);
// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'У вас вже є такий курс'

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс за такою назвою не знайдено'

// updateCourse('Express', 'NestJS', 'node');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// updateCourse('С++', 'PHP'); // 'Курса за такою назвою не знайдено'

//
// const fn1 = function () {
//   console.log('другий при виводі');

//   fn2();
//   console.log('сьомий при виводі');
// };

// const fn2 = function () {
//   console.log('третій при виводі');

//   fn3();
//   console.log('шостий при виводі');
// };

// const fn3 = function () {
//   console.log('четвертий при виводі');
//   console.log('пʼятий при виводі');
// };
// console.log('Я буду першим при виводі')
// fn1();
// console.log('восьмий при виводі');

// const fnSurname = function(surname){
//   console.log(surname)
// };
// const fnQuestion = function(){
//   const str = prompt('What do you want?');
//   console.log(str);
//   return str;
// }

// const fnStr = function (name) {
//   console.log("hello");
//   fnQuestion();
//   console.log(`name`);
//   fnSurname("Jonson");
// }
// console.log("good");
// fnStr('Bob');
// console.log('bye');



// add(2,3);
// function add (a,b) { // function declaration
//   console.log(a+b);
//   return a + b;
// }



// const add = function(a,b) { //function expression
//   console.log(a+b);
//   return a + b;
// }

// add(2,3);

// const add = (a,b) => {
//   console.log(a+b);
//   return a + b;
// }

// let a;
// function sum (){
//   let new;
// a;
// }

// if(a<0) {
//   console.log(a);
//   let total = 0; 
//   for(let i=1; ;){
// a
// total
// i
//   }
//   i ?
// }

// total ?


const res = function (a,b) {
  return a+b;
}

function res2 (a,b) {
  return a +b;
}

if(true){
  
  res2(2,2);
}