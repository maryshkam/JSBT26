
// # Модуль 1. Занятие 1. Переменные, типы и операторы

// ## Example 1 - Базовые математические операторы

// Выведи на экран общее количество яблок и винограда. Разницу яблок и винограда.

// ```js
// const apples = 47;
// const grapes = 135;
// const total = ;
// console.log(total);
// const diff = ;
// console.log(diff);
// ```

// ## Example 2 - Комбинированные операторы

// Замени выражение переопределения комбинированным оператором `+=`.

// ```js
// let students = 100;
// students = students + 50;

// console.log(students);

// ```

// ## Example 3 - Приоритет операторов

// Разбери приоритет операторов в инструкции присвоения значения переменной
// `result`.

// ```js
// const result = 108 + 223 - 2 * 5;
// console.log(result);
// ```

// ## Example 4 - Класс Math

// Напиши скрипт, который выводит в консоль округленные вверх/вниз и т.д. значения
// переменной `value`. Используй методы `Math.floor()`, `Math.ceil()` и
// `Math.round()`. Проверь что будет в консоли при значениях `27.3` и `27.9`.

// ```js
// const value = 27.7;
// 

// ```

// ## Example 5 - Шаблонные строки

// Составь фразу с помощью шаблонных строк `A has B bots in stock`, где A, B -
// переменные вставленные в строку.

// ```js
// const companyName = "Cyberdyne Systems";
// const repairBots = 150;
// const defenceBots = 50;

// console.log(message); // "Cyberdyne Systems has 200 bots in stock"
// // ```

// ## Example 6 - Методы строк и чейнинг

// Напиши скрипт который рассчитывает индекс массы тела человека. Для этого
// необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.

// Вес и высота хранятся в переменных `weight` и `height`, но не как числа, а в
// виде строк (специально для задачи). Нецелые числа могут быть заданы в виде
// `24.7` или `24,7`, то есть в качестве разделителя дробной части может быть
// запятая.

// Индекс массиы тела необходимо округлить до одной цифры после запятой;

// ```js
let weight = "88,3"; // 8 => 0 // 8 => 1 // ,=> 2 // 3 => 3
let height = "1.75";


// ```

// ## Example 7 - Операторы сравнения и приведение типов

// Каким будет результат выражений?

// ```js
// console.log(5 > 4);
// console.log(10 >= '7');
// console.log("2" > "12");
// const a = "1";
// const b = 2;
// console.log("Bob" > "Alice");
// console.log('B' > 'A');
// console.log("A" > "B");


// console.log(0 || "Mango"); 
// console.log(0 && "Mango"); 

// console.log(null || "false" || "mango");
// console.log(null && "false" && "mango");
// console.log(("mango" && null) || false); 
// console.log(("false" && "Mango") || null); 

// let i = 0;
// i += 1;
// i++;

// i++; // 0
// console.log(i); //postfix // 1
// ++i; // prefix // 1

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }

// console.log(50 > 49);

// console.log('2' < '12');

// console.log('4' == 4);

// console.log('6' === 6);

// console.log('false' === false);

// console.log(1 == true); 

// console.log(1 === true);

// console.log('0' == false); 

// console.log('0' === false);

// console.log('Papaya' < 'papaya');

// console.log('Papaya' === 'papaya');

// console.log(undefined == null);

// console.log(undefined === null);
// ```

// ## Example 8 - Логические операторы

// Каким будет результат выражений?

// ```js
// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0); // null > 0 // false

// console.log(null || (2 && 3) || 4);// null || 3 || 4// 3
// ```

// ## Example 10 - Опертор % и методы строк

// Напиши скрипт который переведёт значение `totalMinutes` (количество минут) в
// строку в формате часов и минут `HH:MM`.

// - 70 покажет 01:10
// - 450 покажет 07:30
// - 1441 покажет 24:01

// ```js
// const totalMinutes = 70;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
// ```

