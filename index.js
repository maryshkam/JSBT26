// let name = "Bob";
// let age;

// const a = 5;
// const b = "5";

// console.log(a == b); // true
// визначає тип порівгня
// a - тип number
// b - тип string
// конвертує змінну b в число
// і порівнює змінні a і b
// console.log(a === b); // false

// console.log(0.1 + 0.2); // 0.30000000000000004
// clg(2.1 + 3.2 == 5.3); // true

// 0
// false
// null
// undefined
// NaN
// ""
//-0

// const valueB = "Strrng";
// console.log(Number(valueB)); // NaN
// console.log(typeof NaN); // number

// # Модуль 1. Занятие 1. Переменные, типы и операторы

// ## Example 1 - Базовые математические операторы

// Выведи на экран общее количество яблок и винограда. Разницу яблок и винограда.

// ```js
// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log("сума", total);
// const diff = apples - grapes;
// console.log("різниця", diff);
// ```

// ## Example 2 - Комбинированные операторы

// Замени выражение переопределения комбинированным оператором `+=`.

// ```js
// let students = 100;
// // students = students + 50;
// students += 50;
// console.log(students);
// 1) в students записано 100
// 2) до цифри 100 додаємо 50
// 3) в students записано 150
// Copilot
// ```

// ## Example 3 - Приоритет операторов

// Разбери приоритет операторов в инструкции присвоения значения переменной
// `result`.

// ```js
// const result = (108 + 223) - 2 * 5;
// console.log(result);
// ```

// ## Example 4 - Класс Math

// Напиши скрипт, который выводит в консоль округленные вверх/вниз и т.д. значения
// переменной `value`. Используй методы `Math.floor()`, `Math.ceil()` и
// `Math.round()`. Проверь что будет в консоли при значениях `27.3` и `27.9`.

// ```js
// const value = 27.7;
// console.log(Math.floor(value)); // 27
// console.log(Math.ceil(value)); // 28
// console.log(Math.round(value)); // 28

// ```

// ## Example 5 - Шаблонные строки

// Составь фразу с помощью шаблонных строк `A has B bots in stock`, где A, B -
// переменные вставленные в строку.

// ```js
// const companyName = "Cyberdyne Systems";
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
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

// let convertedWeight = parseFloat(weight);
// let convertedHeight = parseFloat(height);

// console.log(convertedWeight);
// console.log(convertedHeight);

// const bmi = convertedWeight / Math.pow(convertedHeight, 2);
// console.log(bmi); // 28.8

// 1) потрібно знайти порядковий номер коми в рядочкус (indexOf)
// 2) відділити число від коми (slice)
// 3) отримати значення після коми (slice)
// 4) потрібно зробити парвильне дробове значення (template string)
// 5) можемо користуватися результатом

// const index = weight.indexOf(",");
// const weightWithoutComma = weight.slice(0, index);
// const weightAfterComma = weight.slice(index + 1); // 2 + 1
// const newWeight = `${weightWithoutComma}.${weightAfterComma}`;
// console.log(newWeight);
// const bmi = newWeight / Math.pow(height, 2);

// console.log(bmi);

// let convertWeight = Number(weight);
// let convertHeight = Number(height);

// console.log(convertWeight);
// console.log(convertHeight);

// ```

// ## Example 7 - Операторы сравнения и приведение типов

// Каким будет результат выражений?

// ```js
// console.log(5 > 4);

// console.log(10 >= '7');
// 1) конвертує в число строку "7"
// 1.1) Number("7") => 7
// 2) порівнює числа між собою

// console.log("2" > "12");

// const a = "1";
// const b = 2;

// console.log("Bob" > "Alice");
// console.log('B' > 'A');
// console.log("A" > "B");

// "Bob".charCodeAt(1); // 50
// "Blice".charCodeAt(1); // 49

// console.log(0 || "Mango"); // false || true
// console.log(0 && "Mango"); // false && true

// console.log(null || "false" || "mango");
// console.log(null && "false" && "mango");
// console.log(("mango" && null) || false); // null || false
// console.log(("false" && "Mango") || null); // "Mango" || null
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

// console.log(1 == true); // 1 == 1

// console.log(1 === true);

// console.log('0' == false); // 0 == 0

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

// # Модуль 1. Занятие 2. Ветвления. Циклы

// ## Example 1 - Ввод пользователя и ветвления

// Используя конструкцию if..else и prompt, напиши код, который будет спрашивать:
// `"Какое официальное название JavaScript?"`. Если пользователь вводит
// `ECMAScript`, то показывай alert со строкой `"Верно!"`, в противном случае -
// `"Не знаете? ECMAScript!"`



// ## Example 2 - Отображение времени (if...else)

// Напиши скрипт для отображения часов и минут в консоли браузера в виде строки
// формата `"14 ч. 26 мин."`. Если значение переменной `minutes` равно `0`, то
// выводи строку `"14 ч."`, без минут.

// ```js

// ```

// ## Example 3 - Ветвеления

// Напиши скрипт, который выводит в консоль строку `"Это положительное число"`,
// если в prompt пользователь ввел число больше нуля. Если был введен ноль, выводи
// в консоль строку `"Это ноль"`. Если передали отрицательное число, в консоли
// должна быть строка `"Это отрицательное число"`.

// ```js

// ```



// ## Example 4 - Вложенные ветвления

// Напиши скрипт, который сравнивает числа в переменных `a` и `b`. Если оба
// значения больше `100`, то выведи в консоль максимальное из них. В противном
// случае в консоли должна быть сумма значения `b` и числа 512.

// ```js
// const a = 120;
// const b = 18;
// ```


// ## Example 8 - if...else и логические операторы

// Напиши скрипт который будет выводить в консоль браузера строку в зависимости от
// значения переменной `hours`.

// Если значение переменной `hours`:

// - меньше `17`, выводи строку `"Pending"`
// - больше либо равно `17` и меньше либо равно 24, выводи строку `"Expires"`
// - больше `24` , выводи строку `"Overdue"`

// ```js
// const hours = 10;
// ```

// ## Example 9 - Дедлайн сдачи проекта (if...else)

// Напиши скрипт для отображения времени дедлайна сдачи проекта. Используй
// конструкцию `if...else`.

// - Eсли до дедлайна 0 дней - выведи строку `"Сегодня"`
// - Eсли до дедлайна 1 день - выведи строку `"Завтра"`
// - Eсли до дедлайна 2 дня - выведи строку `"Послезавтра"`
// - Eсли до дедлайна 3+ дней - выведи строку `"Дата в будущем"`

// ```js
// const daysUntilDeadline = 5;
// // Пиши код ниже этой строки
// ```

// ## Example 10 - Дедлайн сдачи проекта (switch)

// Выполни рефакторинг кода задачи номер 5 используя `switch`.

// ```js
// const daysUntilDeadline = 5;

// if (daysUntilDeadline === 0) {
//   console.log('Сегодня');
// } else if (daysUntilDeadline === 1) {
//   console.log('Завтра');
// } else if (daysUntilDeadline === 2) {
//   console.log('Послезавтра');
// } else {
//   console.log('Дата в будущем');
// }
// ```

// ## Example 11 - Цикл for

// Напиши цикл for который выводит в консоль браузера числа по возрастанию от `min`
// до `max`, но только если число кратное `5`.

// ```js
// const max = 100;
// const min = 20;
// ```




// ## Example 12 - Ввод пользователя и ветвления

// Напиши скрипт, который будет спрашивать логин с помощью `prompt` и логировать
// результат в консоль браузера.

// - Если посетитель вводит `"Админ"`, то `prompt` запрашивает пароль
// - Если ничего не введено или нажата клавиша Esc - вывести строку `"Отменено"`
// - В противном случае вывести строку `"Я вас не знаю"`

// Пароль проверять так:

// - Если введён пароль `"Я админ"`, то вывести строку `"Здравствуйте!"`
// - Иначе выводить строку `"Неверный пароль"`

// console.log(true && 3); //3
// console.log(false && 3); //false
// console.log(true && 4 && "kiwi"); //kiwi
// console.log(true && 0 && 'kiwi'); // 0
// console.log(true||3);//true
// console.log(true || 3 || 4);// true
// console.log(true || false || 7);//true
// console.log(null || 2 || undefined) //2
// console.log((1 && null && 2) > 0); //false
// console.log(null || (2 && 3) || 4); // 3

// console.log(2 + 5 + '' + 1 + 0 );// "710";
// console.log("5jskf" + 1 - 1); //

// console.log(true + false); //1
// console.log(6 / '3'); //2    6/3
// console.log('2'  * '3');  // 6
// console.log(4 + 5 + 'px')// "9px"
// console.log( '0'+ 4 + 5 + '$'); //
// console.log( '$' +4 + 5 + 0 * 5 ); //
// console.log("4" - 2); // 2
// console.log(7/0); // infinity
// console.log(' -9 1' + 5); // " -9 15"
// console.log(null + 1); // 1




