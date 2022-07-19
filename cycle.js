'use strict';

// for (let i = 1; i <= 20; i += 1) {
//   console.log(i);
// }

// let i = 0;
// if (i <= 20) {
//   console.log(i);
//   i +=1
// }

/*
 * Циклы (while, do while, for)
 */

/*
 * While
 */

// while (condition) {
// код, тіло цикла (statement)
// }

/*
? Виведіть числа від 1 до 50
*/

// let iterator = 1;

// while (iterator < 50) {
//   console.log(iterator);
//   iterator += iterator + 1;
// }

// console.log(iterator);

/*
? Знайдіть суму чисел від 1 до 100
 */




/*
? Дано число n = 1000.
? Ділить його на 2 стільки разів, поки результат поділу не стане менше 50.
? Яке число вийде?
? Порахуйте кількість ітерацій, необхідних для цього, та запишіть його в змінну num.
*/



/*
 * Do While
 */
// do {
// statement
// } while (condition);

/*
? Напишіть цикл, який пропонує prompt ввести число більше 100.
? Якщо відвідувач ввів інше число – попросити ввести ще раз.
? Цикл повинен запитувати число, поки відвідувач не введе число, більше 100.
? Передбачається, що відвідувач вводить лише числа;
*/
// let number;
// do {
//   number = Number(prompt("Введіть число більше 100"));
// } while (number < 100);


// let number = Number(prompt("Введіть число більше 100"));
// while(number< 100) {
//   number = Number(prompt("Введіть число більше 100"));
// }
const fruits =["pear",'apple', 'pear', 'grape', 'apple', 'cherry'];
for (let i=0; i<fruits.length; i++){
  if(fruits[i] === "apple") continue;
  console.log(fruits[i]);
}
// for (let i = 0; i < 10; i++) {

//   // если true, пропустить оставшуюся часть тела цикла
//   if (i % 2 == 0) {
//     continue;
//   }
  
//   console.log(i); // 1, затем 3, 5, 7, 9
// }






/*
 * For
 */
// for (initialization; condition; post - expression) {
//   statements
// }

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }

/*
? За допомогою циклу for виведіть парні числа від 2 до 10.
*/






/*
? Напишіть програму, яка виводить через console.log усі числа від 1 до 100, з двома винятками.
? Для чисел, що націло діляться на 3, вона повинна виводити 'Fizz',
? а для чисел, що діляться на 5 – 'Buzz'.
? Для чисел які кратні 3 та 5 = 'FizzBuzz'
*/



/*
 ? Виведіть методом console.log() зірочки від 1 до 7 штук у вигляді трикутника таким чином:
 ? *
 ? **
 ? ***
 ? ****
 ? *****
 ? ******
 ? *******
 */


