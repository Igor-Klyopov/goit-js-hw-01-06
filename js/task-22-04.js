// Напишите функцию
// makeCounter() - которая возвращает обект счетчик
// у которого есть методы
// increment() - увеличить на 1
// decrement() - уменьшить на 1
// reset() - сбросить счетчик на 0
// show() - вывести текущее значение в консоль

// const makeCounter = count => {
//   return {
//     increment() {
//       count += 1;
//     },
//     decrement() {
//       count -= 1;
//     },
//     reset() {
//       count = 0;
//     },
//     show() {
//       console.log(count);
//     },
//   };
// };

// const counter = makeCounter(0);

// counter.increment();
// counter.show();

// const counter2 = makeCounter(5);

// counter2.show();

///////////////////////////////////////////////////
/**
 * Композиция - создание сложной функциональности за счет
 * объединения более простых функций. В некотором смысле,
 * композиция - это вложение функций, каждая из которых
 * передает свой результат в качестве входных данных для другой функции.
 */
// Напишите функцию compose
// Которая принимает несколько функций
// и возвращает функцию, принимающую число
// и применяющую к нему эти функции поочередно
// https://learn.javascript.ru/array-iteration

// const add3 = n => n + 3;
// const mult5 = n => n * 5;
// const pow2 = n => n ** 2;

// const f1 = add3(1);
// const f2 = mult5(f1);
// const f3 = pow2(f2);

// const compose = function (...fns) {
//   return n => {
//     for (const func of fns) {
//       n = func(n);
//     }
//     return n;
//   };
// };

// console.log(pow2(mult5(add3(1))));
// const composed = compose(add3, mult5, pow2);
// console.log(composed(1));
////////////////////////////////////////////////////

// Есть функция changeSalary
// и пользователи
// напишите функцию, которая принимает пользователя и число
// и меняет ему зарплату на число с помощью ф-ии changeSalary

// const changeSalary = function (value) {
//   this.salary += value;
// };

// const user1 = {
//   name: 'Den',
//   salary: 1300,
// };

// const user2 = {
//   name: 'Ann',
//   salary: 2500,
// };

// const changeUserSalary = function (user, value) {
//   changeSalary.apply(user, [value]);
// };
// changeUserSalary(user1, 100);
// changeUserSalary(user2, -100);
// console.log(user1);
// console.log(user2);
// function changeUserSalary(user, )

// changeUserSalary = 2;

////////////////////////////////////////////////////
// Напишите функцию сложения вида add(num1)(num2)
// console.log(add(2)(5)(7)()); // 14
// add() // 0

// const add = function (n) {
//   let result = 0;
//   const addToResult = function (num) {
//     if (num === undefined) return result;

//     result += num;
//     return addToResult;
//   };
//   return addToResult(n);
// };

// console.log(add());
// console.log(add(2)(5)(8)());

////////////////////////////////////////////////
// Напишите функцию, которая принимает число - степень
// и возвращает функцию,
// которая принимает число и возводит его в переданную
// ранее степень

// const makePower1 = powNum => {
//   ///////////////////////////////3///////10
//   return currentNum => Math.pow(powNum, currentNum);
// };

// const makePower2 = currentNum => Math.pow.bind(null, currentNum);

// const powTwo1 = makePower1(3);
// const powTwo2 = makePower2(3);

// console.log(powTwo1(10));
// console.log(powTwo2(10));
///////////////////////////////////////////////////
