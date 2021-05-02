//=====Модуль: 2=====//
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   // Пиши код ниже этой строки

//   if (password === ADMIN_PASSWORD) {
//     return 'Добро пожаловать!';
//     // Пиши код выше этой строки
//   }
//   return 'Доступ запрещен, неверный пароль!'
// }
// console.log(checkPassword('mangohackzor'));

//--3--//
// function checkStorage(available, ordered) {
//   // Пиши код ниже этой строки

//   if (ordered === 0) {
//     return'В заказе еще нет товаров';
//   }
//   if (ordered > available) {
//     return 'Слишком большой заказ, на складе недостаточно товаров!';
//   }
//     return 'Заказ оформлен, с вами свяжется менеджер';

//   // Пиши код выше этой строки
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

//--8--//
// Стартовый код
// const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// // Пиши код ниже этой строки
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElement);

//--9--//
// function getExtremeElements(array) {
//     // Пиши код ниже этой строки

// return [array.shift(), array.pop()];

//     // Пиши код выше этой строки
// }
//   console.log(getExtremeElements([1, 2, 3, 4, 5]));

//--10--//
// function splitMessage(message, delimeter) {
//   let words;
//   // Пиши код ниже этой строки
//   words = message.split(delimeter);

//   // Пиши код выше этой строки
//   return words;
// }
// console.log(splitMessage('Манго спешит на поезд', ' '));

//--11--//
// function calculateEngravingPrice(message, pricePerWord) {
//   // Пиши код ниже этой строки

//   return message.split(' ').length * pricePerWord;

//   // Пиши код выше этой строки
// }
// console.log(calculateEngravingPrice('JavaScript у меня в крови', 10));
// console.log(calculateEngravingPrice('JavaScript у меня в крови', 20));

//--13--//
// function slugify(title) {
//   // Пиши код ниже этой строки

//  return title.toLowerCase().split(' ').join('-');

//   // Пиши код выше этой строки
// }
// console.log(slugify('Английский для разработчика'));

//--14--//
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// // Пиши код ниже этой строки
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);
// console.log(lastThreeEls);

//--16--//
// function makeArray(firstArray, secondArray, maxLength) {
//     // Пиши код ниже этой строки

//   return firstArray.concat(secondArray).length > maxLength ? firstArray.concat(secondArray).slice(0, maxLength) : firstArray.concat(secondArray);

//     // Пиши код выше этой строки
// }

// console.log(makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3));
// console.log(makeArray(['Манго', 'Поли', 'Хьюстон'], ['Аякс', 'Челси'], 4));
// console.log(makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 4));

//--18--//
// function calculateTotal(number) {
//   // Пиши код ниже этой строки
// let total = 0;

// for (let i = 0; i <= number; i += 1) {
//   total += i;
//   console.log(i);
// }
//   return total;
//   // Пиши код выше этой строки
// }

// console.log(calculateTotal(3));

//--20--//
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки
// for(i=0; i<order.length; i+=1) {
// total+=order[i];
// }
//   // Пиши код выше этой строки
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

//--21--//
// function findLongestWord(string) {
//   // Пиши код ниже этой строки
//   let arrayFromString = string.split(' ');
//   let longestWord = arrayFromString[0];

//   for (let i = 0; i < arrayFromString.length; i+=1) {
//     if (arrayFromString[i].length > longestWord.length) {
//       longestWord = arrayFromString[i];
//     }

//   }
// return longestWord;
//   // Пиши код выше этой строки
// }
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// console.log(findLongestWord('Google do a roll'));
// console.log(findLongestWord('May the force be with you'));

//--22--//
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Пиши код ниже этой строки
//   numbers[0] = min;
//   for (let i = min; i < max; i += 1) {
//     if (numbers.length < max) {
//       numbers.push((min += 1));
//     }
//   }

//   // Пиши код выше этой строки
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));

//--23--//
// Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).
// Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5].
// Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает [].
// Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76].
// Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76].
// Вызов функции filterArray() со случайным массивом и числом возвращает правильный массив.
// В цикле for использовался метод push.
// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   let filteredArray = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       filteredArray.push(numbers[i]);
//     }
//   }
//   return filteredArray;
//   // Пиши код выше этой строки
// }
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

//--24--//
// Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.
// Дополни код функции так, что если:
// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.

// function checkFruit(fruit) {
//   const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

//   return fruits.includes(fruit); // Дополни эту строку
// }
// console.log(checkFruit('слива'));
// console.log(checkFruit('мандарин'));

//--25--//
// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.
// Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2].
// Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2].
// Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3].
// function getCommonElements(array1, array2) {
//   // Пиши код ниже этой строки
//   let commonElements;
//   let arrayFromCommonElements = [];

//   for (let i = 0; i < array1.length; i += 1) {
//     commonElements = array1[i];
//     if (array2.includes(commonElements)) {
//       arrayFromCommonElements.push(commonElements);
//     }
//   }
//   return arrayFromCommonElements;
//   // Пиши код выше этой строки
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

//--26--//
// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.
// Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138.
// Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503.
// Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116.
// Вызов функции calculateTotalPrice([]) возвращает 0.
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки
//   for (const prises of order) {
//     total += prises;
//   }
//   // for (let i = 0; i < order.length; i += 1) {
//   //   total += order[i];
//   // }

//   // Пиши код выше этой строки
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([]));

//--27--//
// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.
// Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5].
// Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5].
// Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает [].
// Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76].
// Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76].

// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   const filteredNumbers = [];

//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   const number = numbers[i];

//   //   if (number > value) {
//   //     filteredNumbers.push(number);
//   //   }
//   // }

//   return filteredNumbers;
//   // Пиши код выше этой строки
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

//--29--//
// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка.
// function getEvenNumbers(start, end) {
//   // Пиши код ниже этой строки
//   const evenNumbers = [];
//   const allNumbers = [];

//   allNumbers[0] = start;
//   for (let i = start; i < end; i += 1) {
//     if (allNumbers.length < end) {
//       allNumbers.push((start += 1));
//     }
//   }

//   for (const number of allNumbers) {
//     if (number % 2 === 0) {
//       evenNumbers.push(number);
//     }
//   }
//   return evenNumbers;
//   // Пиши код выше этой строки
// }
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(7, 7));

//--30--//
// Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//   }
// }

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

//--31--//
// Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:
// возвращала первое число от start до end, которое делится на divisor без остатка;
// не использовала оператор break;
// не использовала переменную number.
// function findNumber(start, end, divisor) {
//   // Пиши код ниже этой строки
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       break;
//     }
//   }

//   return number;
//   // Пиши код выше этой строки
// }
// Вызов findNumber(2, 6, 5) возвращает 5.
// Вызов findNumber(8, 17, 3) возвращает 9.
// Вызов findNumber(6, 9, 4) возвращает 8.
// Вызов findNumber(16, 35, 7) возвращает 21.
// function findNumber(start, end, divisor) {
//   // Пиши код ниже этой строки

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }

//   // Пиши код выше этой строки
// }
// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(6, 9, 4));
// console.log(findNumber(16, 35, 7));

//--32--//
// Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.
// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).
// Вызов includes([1, 2, 3, 4, 5], 3) возвращает true.
// Вызов includes([1, 2, 3, 4, 5], 17) возвращает false.
// Вызов includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Юпитер') возвращает true.

// function includes(array, value) {
//   // Пиши код ниже этой строки
//   for (const element of array) {
//     if (element === value) {
//       return true;
//     }
//   }
//   return false;
//   // Пиши код выше этой строки
// }
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(
//   includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Юпитер'),
// );

//-------------------------------------------------------------------------
// //многомерные массивы:
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let total = 0;

// for (let i = 0; i < matrix.length; i += 1) {
//   console.log('Подмассив матрицы matrix[i]: ', matrix[i]);

//   for (let j = 0; j < matrix[i].length; j += 1) {
//     console.log('Элемент подмассива матрицы matrix[i][j]: ', matrix[i][j]);
//     total += matrix[i][j];
//   }
// }

// console.log(total); // 45
