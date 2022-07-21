"use strict";
/*
 *  Масиви: літерал масива, елементи, індексація, довжина
 */

// const str = 'abs';// 'abs'= 'abs'
// const str2 = 'abs';
// const str3 = "abs";
// console.log(str===str3)

// const a = ['Bob', 'Alice', 'Traice']; //[3]===[3] [], link1
// const b = a; // link2
// // console.log(b === a);
// console.log(a);
// a.push('Sara');
// console.log(a);
// b.push('Ted', 'Ella', "Jonh");
// console.log(a)
// console.log(b)
//  const arr1 = [1, 2, 3];
//  const arr2 = [1, 2, 3];
//  console.log(arr1 === arr2);

// const fruit = "apple";

// if (fruit === "apple" || fruit === "strawberry") {
//   console.log("It is a red fruit!");
// }

// const someArr = [];
// const arr  = [3, 4, null, 7];
// // arr = [2,4,6];
// console.log(arr);
// console.log(arr.length);
// arr[2]= 5;
// console.log(arr[2]);
// // console.log(arr[13])
// arr[45]=89;
// console.log(arr);
// console.log(arr[11]);

/*
? Створіть масив genres з елементами Jazz і Blues.
? Додайте "Рок-н-рол" в кінець.
? Виведіть у консоль перший елемент масиву.
? Виведіть у консоль останній елемент масиву. Код має працювати для масиву довільної довжини.
? Видаліть перший елемент та виведіть його в консоль.
? Вставте «Country» та «Reggy» на початок масиву.
 */

// const genres = ['Jazz', 'Blues'];
// // genres[2]='Rock&Roll';
// genres.push('Rock&Roll');
// console.log(genres[0]);
// const lastIndex = genres.length-1;
// console.log(genres[lastIndex]);
// // genres.shift();
// const firstElement = genres.shift();
// console.log(genres);
// console.log(firstElement);
// genres.unshift('Country', 'Reggy');
// console.log(genres);

/*
 * Присвоєння за посиланням і за значенням
 */

/*
? Створіть змінну a = 10.
? Створіть та привласніть змінній b -> змінну a
? Виведіть до консолі обидві ці змінні
? Змініть значення змінної a і ще раз виведіть у консоль
*/

// let a = 10; //
// let b = 10; //10
// console.log(a);
// console.log(b);
// a=20;
// console.log(a);
// console.log(b);

/*
? Створіть масив arr1 = [1, 2, 3].
? Створіть та привласніть масиву arr2 -> масив arr1
? Виведіть до консолі обидва цих масива
? Додайте елемент в масив arr1 і ще раз виведете обидва масиви в консоль
*/

// const arr1 = [1, 2, 3]; //link1
// const arr2 = [1, 2, 3]; //link2
// console.log(arr1);
// console.log(arr2);
// arr1.push(4,5);
// console.log(arr1);
// console.log(arr2);

/*
 * Перебор масива циклами for та for...of
 */

/*
? Напиши скрипт для перебору масиву fruits циклом for.
? Для кожного елемента масиву виведіть у консоль рядок у форматі номер_елемента: значення_елемента.
? Нумерація елементів має починатися з першого.
*/

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for( let i=0; i < fruits.length; i+=1) {
//   console.log(`${i+1}: ${fruits[i]}`)
// }

// for(const fruit of fruits) {
//   const index = fruits.indexOf(fruit);
//   console.log(`${index+1}: ${fruit}`);
// }

/*
? Напиши скрипт пошуку найменшого числа у масиві.
? Код має працювати для будь-якого масиву чисел.
? Використовуйте цикл для вирішення задачі.
*/

// const numbers = [2, 17, 94, 1, -20, -1, -23, 23, 40, 35, -50];
// let min = "чисел не знайдено";
// if (numbers.length) {
//   min = 0;
//   for (let i = 0; i < numbers.length; i += 1) {

//     if(numbers[i] < min) {
//       min = numbers[i];
//     }
// }
// let min = numbers[0];


// for (const item of numbers) {
//   if (item < min) {
//     min = item;
//   }
// }
// // }
// console.log(min);

/*
? У нас є масив із зарплатами працівників, потрібно порахувати загальну суму зарплат
*/

// const salaries = [200, 450, 600, 150, 300];

// let total = 0;

// for (let i =0; i < salaries.length; i+=1){
//   total +=salaries[i];
// }

// for( const salary of salaries) {
//   total += salary;
// }

// console.log(total);
// const salaries = [200, 450, 600, 150, 300];
// let item = 0
// while(item < salaries.length){
//  total+= salaries[item];
//  item +=1;
// }

// console.log(total);

// do {
//   total+= salaries[item];
//   item +=1;
// } while (item < salaries.length);
// console.log(total);
/*
? У нас є кілька масивів із зарплатами працівників із різних відділів, потрібно порахувати загальну суму зарплат
*/

// const managerSalaries = [100, 150, 250, 400, 500];
// const developersSalaries = [800, 1500, 4000];

// let total = 0;

// const allSalaries = managerSalaries.concat(developersSalaries);
// for (const salary of allSalaries) {
//   if(salary > 1000) {
//     const newSalary = salary + 200;
//     total += newSalary
//   } else {
//     total += salary;
//   }
  
// }
// console.log(total);

/*
 * Базові методи: split та join, indexOf та includes, push, slice та splice, concat
 */

/*
? Напиши скрипт для обчислення площі прямокутника зі сторонами,
? значення яких зберігаються в змінній values у вигляді рядка.
? Значення гарантовано розділені пробілом.
*/
// const newValue = [];
// const values = '8 11';
// const newValue = [];
// newValue.push(values);
// console.log(newValue)
// const sidesArr = values.split(" ");
// console.log(sidesArr);

// const result = Number.parseInt(sidesArr[0]) * Number.parseInt(sidesArr[1]);
// console.log(result);

/*
? Напиши скрипт, який виводить в консоль ім'я та телефонний номер користувача.
? У змінних names і phones зберігаються рядки імен та телефонних номерів, розділені комами.
? Порядковий номер імен та телефонів у рядках вказують на відповідність.
? Кількість імен та телефонів гарантовано однакова.
*/

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const nameArr = names.split(',');
// const phonesArr = phones.split(',');
// console.log(nameArr);
// console.log(phonesArr);

// for( let i=0; i < nameArr.length; i +=1) {
//   console.log(`${i+1}: ${nameArr[i]} - ${phonesArr[i]}`)
// }


/*
? Напиши скрипт, який «розгортає» рядок (зворотний порядок букв)
? та виводить її в консоль.
*/
// const string = 'Welcome to the future';

// const charsArr = string.split('');
// console.log(charsArr)
// const reversCharsArr = [];

// for (let i=charsArr.length-1; i>=0; i -=1){
//   reversCharsArr.push(charsArr[i]);
// }
// console.log(reversCharsArr);

// const revertStr = reversCharsArr.join('');
// console.log(revertStr);
// const charsArr = string.split('');
// const reversChar = charsArr.reverse();
// const resultString = reversChar.join('');
// console.log(resultString);

// const charsArr = string.split('').reverse().join('');
// console.log(charsArr);
/*
? У нас є масив співробітників, відсортуйте його, щоб співробітники не повторювалися
*/

// const employees = ['Dennis', 'Dennis', 'Shaw', 'Watkins', 'Ray', 'Shaw', 'Watkins'];
// const filteredEmployees = [];

/*
1 Ітерація
0 === 0
2 Ітерація
1 === 0
3 Ітерація
2 === 2
4 Ітерація
3 === 3
5 Ітерація
4 === 4
6 Ітерація
5 === 2
7 Ітерація
6 === 3
*/

//? Співробітник Shaw звільнився, видаліть його з масиву

//? Додати нового співробітника Thornton, перед Watkins;

// ## Example 5 - Массивы и строки

// // Напиши скрипт который выводит в консоль все слова строки кроме первого и
// // последнего. Результирующая строка не должна начинаться или заканчиваться
// // пробельным символом. Скрипт должен работать для любой строки.

// // ```js
// // const string = "Welcome to the future";

// // ```

// // ## Example 6 - Массивы и строки

// // Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит
// // ее в консоль.

// // ```js
// // const string = 'Welcome to the future';
// // ```

// // ## Example 7 - Сортировка массива с циклом

// // Напиши скрипт сортировки массива строк в алфавитном порядке по первой букве
// // элемента.

// // ```js
// // const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// // ```

// // ## Example 8 - Поиск элемента

// // Напиши скрипт поиска самого маленького числа в массиве. Код должен работать для
// // любого массива чисел. Используй цикл для решения задачи.

// // ```js
// // const numbers = [2, 17, 94, 1, 23, 37];
// // let min;
// // console.log(min); // 1
// // ```


const scores = [1, 2, 3, 4, 5];
const colors = ["red", "green", ["blue", 'yellow']];

// // Удаляем три элемента массива, начиная с первого элемента (индекс 0)
// const deletedScores = scores.splice(0, 3);
// console.log(deletedScores);
// // console.log(scores);
// const addedScores = scores.splice(1, 0, "6");
// scores.splice(1, 2, 6, 7);
const replaceScores = scores.splice(-1, 0, colors);
// console.log(scores);
console.log(scores[4][2][1]);
// console.log(replaceScores)


// const colors = ["red", "green", "blue"];

colors.splice(2, 0, "purple");
console.log(colors); // ["red", "green", "purple", "blue"]

// Теперь массив scores содержит два элемента
// console.log(scores); // [4, 5]

// А массив deletedScores содержит три удаленных элемента
// console.log(deletedScores); // [1, 2, 3]