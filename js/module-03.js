//=====Модуль: 3=====//

//--4--//
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Пиши код ниже этой строки
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];
// // Пиши код выше этой строки
// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);

//--6--//
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Пиши код ниже этой строки
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Генри Сибола';
// apartment.tags.push('trusted');
// console.log(apartment);

//--10--//
// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Пиши код ниже этой строки
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

//--11--//
// Для того чтобы узнать есть в объекте собственное свойство или нет, используется метод hasOwnProperty(key), который возвращает true или false.
// Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.
// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Просторная квартира в центре';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Пиши код ниже этой строки

//   keys.push(key);
//   values.push(apartment[key]);

//   // Пиши код выше этой строки
// }
// решение
// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Просторная квартира в центре';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Пиши код ниже этой строки
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }

//   // Пиши код выше этой строки
// }
// console.log(keys);
// console.log(values);

//--12--//
// Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object. Используй переменную propCount для хранения количества свойств объекта.
// Вызов countProps({}) возвращает 0.
// Вызов countProps({ name: 'Mango', age: 2 }) возвращает 2.
// Вызов countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }) возвращает 3.
// function countProps(object) {
//   let propCount = 0;
//   // Пиши код ниже этой строки
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   // Пиши код выше этой строки
//   return propCount;
// }
// console.log(countProps({}));
// console.log(countProps({ name: 'Mango', age: 2 }));
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

//--13--//
// Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.
// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значение свойства
//   console.log(apartment[key]);
//   //добавление в массив
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

//--14--//
function countProps(object) {
  // Пиши код ниже этой строки
  //вариант 1:
  // let propCount = 0;
  // for (const prop of Object.keys(object)) {
  //   if (prop !== 0) {
  //     propCount += 1;
  //   }
  // }
  // return propCount;
  //вариант 2:
  // let propCount = 0;
  // propCount = Object.keys(object).length;
  // return propCount;
  // Пиши код выше этой строки
}

// console.log(countProps({}));
// console.log(countProps({ name: 'Mango', age: 2 }));
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

//--15--//
// Запиши в переменную keys массив ключей собственных свойств объекта apartment, а в переменную values массив всех значений его свойств. Используй методы Object.keys() и Object.values()
// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);

//--16--//
// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты.
// Вызов countTotalSalary({}) возвращает 0.
// Вызов countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) возвращает 330.
// Вызов countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) возвращает 400.
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Пиши код ниже этой строки
//   const keys = Object.keys(salaries);
//   for (const key of keys) {
//     totalSalary += salaries[key];
//   }
//   // Пиши код выше этой строки
//   return totalSalary;
// }
// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

//--17--//
// Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.
// Объявлена переменная colors.
// Значение переменной colors это массив.
// Объявлена переменная hexColors.
// Значение переменной hexColors это массив ['#f44336', '#2196f3', '#4caf50', '#ffeb3b'].
// Объявлена переменная rgbColors.
// Значение переменной rgbColors это массив ['244,67,54', '33,150,243', '76,175,80', '255,235,59'].
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

//--18--//
// Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null.
// Вызов getProductPrice('Радар') возвращает 1300.
// Вызов getProductPrice('Захват') возвращает 1200.
// Вызов getProductPrice('Сканер') возвращает 2700.
// Вызов getProductPrice('Дроид') возвращает 400.
// Вызов getProductPrice('Двигатель') возвращает null.
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Пиши код ниже этой строки
//   for (const product of products) {
//     console.table(products);
//     console.log(product.price);
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
//   // Пиши код выше этой строки
// }
// console.log(getProductPrice('Радар'));
// console.log(getProductPrice('Захват'));
// console.log(getProductPrice('Сканер'));
// console.log(getProductPrice('Дроид'));
// console.log(getProductPrice('Двигатель'));

//--19--//???
// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.
// Вызов getAllPropValues('name') возвращает ['Радар', 'Сканер', 'Дроид', 'Захват'].
// Вызов getAllPropValues('quantity') возвращает [4, 3, 7, 9].
// Вызов getAllPropValues('price') возвращает [1300, 2700, 400, 1200].
// Вызов getAllPropValues('category') возвращает [].

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Пиши код ниже этой строки
  //////////////////////вариант 1//////////////////////////////////////////
  // const allPropValues = [];
  // for (const product of products) {
  //   if (product[propName] !== undefined) {
  //     allPropValues.push(product[propName]);
  //   }
  // }
  // return allPropValues;
  //////////////////////вариант 2//////////////////////////////////////////
  // const propValues = [];
  // for (const product of products) {
  //   for (const property in product) {
  //     if (propName === property) {
  //       propValues.push(product[property]);
  //     }
  //   }
  // }
  // return propValues;
  //////////////////////////////////////////////////////////
  // Пиши код выше этой строки
}

console.log(getAllPropValues('name'));
console.log(getAllPropValues('quantity'));
console.log(getAllPropValues('price'));
console.log(getAllPropValues('category'));

//--20--//
// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.
// Вызов calculateTotalPrice('Бластер') возвращает 0.
// Вызов calculateTotalPrice('Радар') возвращает 5200.
// Вызов calculateTotalPrice('Дроид') возвращает 2800.
// Вызов calculateTotalPrice('Захват') возвращает 10800.
// Вызов calculateTotalPrice('Сканер') возвращает 8100.
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let TotalPrice = 0;

//   for (const product of products) {
//     if (product.name === productName) {
//       TotalPrice = product.price * product.quantity;
//     }
//   }
//   return TotalPrice;
//   // Пиши код выше этой строки
// }
// console.log(calculateTotalPrice('Бластер'));
// console.log(calculateTotalPrice('Радар'));
// console.log(calculateTotalPrice('Дроид'));
// console.log(calculateTotalPrice('Захват'));
// console.log(calculateTotalPrice('Сканер'));

//--21--//
// Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю температуру за три дня (meanTemperature). Замени объявления переменных yesterday, today и tomorrow одной операцией деструктуризации свойств объекта highTemperatures.
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const { yesterday, today, tomorrow } = highTemperatures;

// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);

//--22--//
// В прогнозе максимальных температур также может быть необязательное свойство icon - иконка погоды. Замени объявления переменных yesterday, today, tomorrow и icon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для icon - строку 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;

// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);
// console.log(icon);

//--23--//
// Изменение имени переменной
// Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для highIcon - строку 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;

// // Пиши код выше этой строки
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// console.log(highYesterday);
// console.log(highToday);
// console.log(highTomorrow);
// console.log(highIcon);

//--24--//
// Деструктуризация в циклах
// При переборе массива объектов циклом for...of получаются множественные обращения к свойствам объекта.
// Для того, чтобы сократить количество повторений, можно деструктуризировать свойства объекта в локальные переменные в теле цикла.
// Если в объекте немного свойств, деструктуризацию можно выполнить прямо в месте объявления переменной
// Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта..
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

//решение
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

//--25--//
// Глубокая деструктуризация
// Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами, а также необязательными иконками.Замени объявления всех переменных одной операцией деструктуризации свойств объекта forecast.Задай значение по умолчанию для иконок, переменных todayIcon и tomorrowIcon - строку 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.
// Объявлена переменная forecast.
// Значение переменной forecast это объект.
// Объявлена переменная highToday с помощью деструктуризации.
// Значение переменной highToday это число 32.
// Объявлена переменная lowToday с помощью деструктуризации.
// Значение переменной lowToday это число 28.
// Объявлена переменная todayIcon с помощью деструктуризации.
// Значение переменной todayIcon это строка 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg'.
// Объявлена переменная highTomorrow с помощью деструктуризации.
// Значение переменной highTomorrow это число 31.
// Объявлена переменная lowTomorrow с помощью деструктуризации.
// Значение переменной lowTomorrow это число 27.
// Объявлена переменная tomorrowIcon с помощью деструктуризации.
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Пиши код ниже этой строки

// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
// } = forecast;

// console.log(highToday);
// console.log(lowToday);
// console.log(todayIcon);
// console.log();
// console.log(highTomorrow);
// console.log(lowTomorrow);

//--26--//
// Паттерн «Объект настроек»
// Функция calculateMeanTemperature(forecast) принимает один параметр forecast - объект температур на два дня следующего формата.

// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }
// Замени объявления переменных todayLow, todayHigh, tomorrowLow и tomorrowHigh одной операцией деструктуризации свойств объекта forecast.

// Тесты
// Объявлена функция calculateMeanTemperature(forecast).
// В теле функции используется деструктуризация объекта.
// В теле функции объявлена переменная todayHigh с помощью деструктуризации.
// В теле функции объявлена переменная todayLow с помощью деструктуризации.
// В теле функции объявлена переменная tomorrowLow с помощью деструктуризации.
// В теле функции объявлена переменная tomorrowHigh с помощью деструктуризации.
// Вызов calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }) возвращает 28.5.
// Вызов calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }) возвращает 37.

// const forecast = {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 },
// };
// // Пиши код ниже этой строки
// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;

//   // Пиши код выше этой строки
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(
//   calculateMeanTemperature({
//     today: { low: 28, high: 32 },
//     tomorrow: { low: 25, high: 29 },
//   }),
// );
// console.log(
//   calculateMeanTemperature({
//     today: { low: 37, high: 40 },
//     tomorrow: { low: 33, high: 38 },
//   }),
// );

//--27--//
// Операция spread при передаче аргументов
// Синтаксис ... (spread) позволяет распылить коллекцию элементов(массив, строку или объект) в место, где ожидается набор отдельных значений.Конечно есть некоторые ограничения, например нельзя распылить массив в объект и наоборот.
// Можно привести аналогию с ящиком яблок. Поставив ящик на пол не вынимая из него яблоки, получим аналог массива значений. Если высыпать яблоки из ящика на пол, произойдёт распыление - набор отдельных значений.

// Отличие всего одно - в JavaScript распыление не изменяет оригинальную коллекцию, то есть делается копия каждого элемента. После распыления останется и ящик полный яблок, и копия каждого яблока на полу.

// Например, метод Math.max(аргументы) ищет и возвращает самый большой из аргументов (чисел), то есть ожидает не массив значений, а произвольное количество аргументов.

// const temps = [14, -4, 25, 8, 11];

// // В консоли будет массив
// console.log(temps);
// // ❌ Так не сработает, потому что передаём целый массив
// console.log(Math.max(temps)); // NaN

// // В консоли будет набор отдельных чисел
// console.log(...temps);
// // ✅ Распылим коллекцию элементов как отдельные аргументы
// console.log(Math.max(...temps)); // 25
// То есть запись Math.max(...[14, -4, 25, 8, 11]), после интерпретации превращается в Math.max(14, -4, 25, 8, 11) - синтаксис ... возвращает распакованный массив, то есть распыляет его элементы как отдельные аргументы.

// Задание
// В переменной scores хранится массив результатов тестирования. Используя распыление и методы Math.max() и Math.min() дополни код так, чтобы в переменной bestScore был самый высокий балл, а в worstScore самый низкий.

// Тесты
// Объявлена переменная scores.
// Значение переменной scores это массив [89, 64, 42, 17, 93, 51, 26].
// Объявлена переменная bestScore.
// Значение переменной bestScore это число 93.
// Объявлена переменная worstScore.
// Значение переменной worstScore это число 17.
// Для передачи аргументов методу Math.max() используется синтаксис ... на массиве scores.
// Для передачи аргументов методу Math.min() используется синтаксис ... на массиве scores.
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Пиши код ниже этой строки
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);

//--28--//
// Операция spread при создании нового массива
// Операция spread позволяет создать копию массива или «склеить» произвольное количество массивов в один новый. Раньше для этого использовали методы slice() и concat(), но операция распыления позволяет сделать тоже самое в более краткой форме.

// const temps = [14, -4, 25, 8, 11];

// // Это точная, но независимая копия массива temps
// const copyOfTemps = [...temps];
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]
// В примере выше у нас есть ящик яблок temps и мы хотим сделать его точную копию. Берём пустой ящик и пересыпаем в него яблоки из исходного ящика temps - распыляем его в другую коллекцию. При этом ящик temps не изменится, в нём все ещё будут яблоки, а в новом ящике - их точные копии.

// В следующем примере мы ссыпаем яблоки из двух ящиков в один новый. Оригинальные ящики (массивы) не изменятся, а в новом будут копии всех их яблок (элементов). Порядок распыления важен - он влияет на порядок элементов в новой коллекции.

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]
// Задание
// В переменных firstGroupScores, secondGroupScores и thirdGroupScores хранятся результаты тестирования отдельных групп. Используя распыление дополни код так, чтобы:

// В переменной allScores хранился массив всех результатов от первой до третьей группы.
// В переменной bestScore был самый высокий общий балл.
// В переменной worstScore был самый низкий общий балл.
// Тесты
// Объявлена переменная firstGroupScores.
// Значение переменной firstGroupScores это массив [64, 42, 93].
// Объявлена переменная secondGroupScores.
// Значение переменной secondGroupScores это массив [89, 14, 51, 26].
// Объявлена переменная thirdGroupScores.
// Значение переменной thirdGroupScores это массив [29, 47, 18, 97, 81].
// Объявлена переменная allScores.
// Значение переменной allScores это массив [64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81].
// Объявлена переменная bestScore.
// Значение переменной bestScore это число 97.
// Объявлена переменная worstScore.
// Значение переменной worstScore это число 14.
// При присвоении значения переменной allScores использовался синтаксис ... для заполнения массива.
// Для передачи аргументов методу Math.max() используется синтаксис ... на массиве allScores.
// Для передачи аргументов методу Math.min() используется синтаксис ... на массиве allScores.
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Пиши код ниже этой строки
// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

//--29--//
// Операция spread позволяет распылить свойства произвольного количества объектов в один новый.

// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }
// Порядок распыления имеет значение. Имена свойств объекта уникальные, поэтому свойства распыляемого объекта могут перезаписать значение уже существующего свойства, если их имена совпадают.

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }
// Если бы яблоки в ящике имели наклейки с метками, то в одном ящике не может быть двух яблок с одинаковыми метками. Поэтому при пересыпании второго ящика, все яблоки, метки которых совпадут с теми что уже есть в новом, заменят те что уже есть.

// Во время распыления можно добавлять свойства в произвольное место. Главное помнить про уникальность имени свойства и о том, что его значение может быть перезаписано.

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }
// Задание
// В конструкторе можно создавать новые тесты, для которых есть настройки по умолчанию которые хранятся в переменной defaultSettings. Во время создания теста, все или часть настроек можно переопределить, они хранятся в переменной overrideSettings.

// Для того чтобы получить финальные настройки теста, необходимо взять настройки по умолчанию и поверх них применить переопределённые настройки. Дополни код так, чтобы в переменной finalSettings получился объект финальных настроек теста.

// Тесты
// Объявлена переменная defaultSettings.
// Значение переменной defaultSettings это объект.
// Объявлена переменная overrideSettings.
// Значение переменной overrideSettings это объект.
// Объявлена переменная finalSettings.
// Значение переменной finalSettings это объект.
// Значение свойства finalSettings.theme равно 'light'.
// Значение свойства finalSettings.public равно 'false'.
// Значение свойства finalSettings.withPassword равно 'true'.
// Значение свойства finalSettings.minNumberOfQuestions равно 10.
// Значение свойства finalSettings.timePerQuestion равно 30.
// При присваивании значения переменной finalSettings используется синтаксис ....
// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Пиши код ниже этой строки
// const finalSettings = { ...defaultSettings, ...overrideSettings };

// console.log(finalSettings.theme);
// console.log(finalSettings.public);
// console.log(finalSettings.withPassword);
// console.log(finalSettings.minNumberOfQuestions);
// console.log(finalSettings.timePerQuestion);

//--30--//???
// Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.

// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data. В новом объекте должно быть свойство completed, значение которого хранится в одноимённой локальной переменной.

// В параметре data гарантированно будет только свойство text, а остальные два, category и priority, могут отсутствовать. Тогда, в новом объекте задачи, в свойствах category и priority должны быть значения по умолчанию, хранящиеся в одноимённых локальных переменных.

// Тесты
// Объявлена функция makeTask(data).
// Вызов makeTask({}) возвращает { category: 'Общее', priority: 'Обычный', completed: false }.
// Вызов makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' }) возвращает { category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор', completed: false }.
// Вызов makeTask({ category: 'Финансы', text: 'Забрать проценты' }) возвращает { category: 'Финансы', priority: 'Обычный', text: 'Забрать проценты', completed: false }.
// Вызов makeTask({ priority: 'Низкий', text: 'Выбрать шампунь' }) возвращает { category: 'Общее', priority: 'Низкий', text: 'Выбрать шампунь', completed: false }.
// Вызов makeTask({ text: 'Купить хлеб' }) возвращает { category: 'Общее', priority: 'Обычный', text: 'Купить хлеб', completed: false }.
// function makeTask(data) {
//   const completed = false;
//   const category = 'Общее';
//   const priority = 'Обычный';
//   // Пиши код ниже этой строки
//   firstTask = {
//     category,
//     priority,
//     completed,
//   };

//   const finalTask = { ...firstTask, ...data };

//   return finalTask;
//   // Пиши код выше этой строки
// }

// console.log(makeTask({}));
// console.log(
//   makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' }),
// );
// console.log(makeTask({ category: 'Финансы', text: 'Забрать проценты' }));
// console.log(makeTask({ priority: 'Низкий', text: 'Выбрать шампунь' }));

//--31--//
// Операция rest для сбора всех аргументов функции
// Операция ... (rest) позволяет собрать группу независимых элементов в новую коллекцию. Синтаксически это близнец операции распыления, но отличить их просто - распыление это когда ... находится в правой части операции присваивания, а сбор это когда ... находится в её левой части.

// Вернёмся к аналогии с яблоками. Если на полу лежат яблоки и у нас есть пустой ящик, то операция rest позволит «собрать» яблоки в ящик. При этом оригинальные яблоки останутся на полу, а в ящике будет копия каждого яблока.

// Одна из областей применения операции rest это создание функций которые могут принимать произвольное количество аргументов.

// // Как объявить параметры функции так,
// // чтобы можно было передать любое кол-во аргументов?
// function multiply() {
//   // ...
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);
// Если убрать весь «синтаксический шум» и посмотреть на аргументы и параметры функции, то аргументы находятся в правой части операции присваивания, а параметры в левой, потому что значения аргументов присваиваются объявленным параметрам. Значит можно «собрать» все аргументы функции в один параметр используя операцию rest.

// function multiply(...args) {
//   console.log(args); // массив всех аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);
// Имя параметра может быть произвольным. Чаще всего его называют args, restArgs или otherArgs, сокращённое от arguments.

// Задание
// Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов, считала и возвращала их сумму.

// Тесты
// Объявлена функция add.
// Функция add использует параметр args.
// Для сбора аргументов в переменную args, в подписи функции используется синтаксис ... (оперетор rest).
// Вызов add(15, 27) возвращает 42.
// Вызов add(12, 4, 11, 48) возвращает 75.
// Вызов add(32, 6, 13, 19, 8) возвращает 78.
// Вызов add(74, 11, 62, 46, 12, 36) возвращает 241.

// Пиши код ниже этой строки
// function add(...args) {
//   let argsTotal = 0;
//   for (let i = 0; i < args.length; i += 1) {
//     argsTotal += args[i];
//   }

//   return argsTotal;
//   // Пиши код выше этой строки
// }
// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));
// console.log(add(32, 6, 13, 19, 8));
// console.log(add(74, 11, 62, 46, 12, 36));

//--32--//
// Операция rest для сбора части аргументов функции
// Операция ... (rest) также позволяет собрать в массив только ту часть аргументов, которая необходима, объявив параметры до «сбора».

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значение первого аргумента
//   console.log(secondNumber); // Значение второго аргумента
//   console.log(otherArgs); // Массив остальных аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);
// Все аргументы, для которых будут объявлены параметры, передадут им свои значения, остальные аргументы будут помещены в массив. Операция rest собирает все оставшиеся аргументы и поэтому должна идти последней в подписи функции, иначе будет ошибка.

// Задание
// Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело функции addOverNum() так, чтобы она считала сумму только тех аргументов, которые больше чем заданное число. Это число должно быть первым параметром функции.

// Тесты
// Объявлена функция addOverNum().
// Вызов addOverNum(50, 15, 27) возвращает 0.
// Вызов addOverNum(10, 12, 4, 11, 48, 10, 8) возвращает 71.
// Вызов addOverNum(15, 32, 6, 13, 19, 8) возвращает 51.
// Вызов addOverNum(20, 74, 11, 62, 46, 12, 36) возвращает 218.
// Пиши код ниже этой строки
// function addOverNum(number, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > number) {
//       total += arg;
//     }
//   }

//   return total;
//   // Пиши код выше этой строки
// }

// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));

//--33--//
// Задача. Массив совпадений
// Задание
// Функция findMatches() принимает произвольное количество аргументов. Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.

// Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента.

// Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2], потому что только они есть в массиве первого аргумента.

// Тесты
// Объявлена функция findMatches().
// Вызов findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) возвращает [1, 2].
// Вызов findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2) возвращает [17, 89, 2].
// Вызов findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41) возвращает [24, 9, 41].
// Вызов findMatches([63, 11, 8, 29], 4, 7, 16) возвращает [].

// Пиши код ниже этой строки
// function findMatches(arr, ...args) {
//   const matches = []; // Не изменяй эту строку
//   for (const arg of args) {
//     if (arr.includes(arg)) {
//       matches.push(arg);
//     }
//   }
//   // Пиши код выше этой строки
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

//--34--//
// Методы объекта
// До сих пор мы рассматривали объекты только как хранилища взаимосвязанных данных, например информация о книге и т. п. Объекты-хранилища обычно находятся в массиве таких же объектов, который представляет коллекцию однотипных элементов.

// Объекты могут хранить не только данные, но и функции для работы с этими данными - методы. Если значение свойства это функция, такое свойство называется методом объекта.

// // ✅ Логиески и синтаксически сгруппированные сущности
// const bookShelf = {
//   books: ['Последнее королевство', 'Страж снов'],
//   // Это метод объекта
//   getBooks() {
//     console.log('Этот метод будет возвращать все книги - свойство books');
//   },
//   // Это метод объекта
//   addBook(bookName) {
//     console.log('Этот метод будет добавлять новую книгу в свойство books');
//   },
// };

// // Вызовы методов
// bookShelf.getBooks();
// bookShelf.addBook('Новая книга');
// Такие объекты можно назвать «моделями». Они связывают данные и методы для работы с этими данными. Например, можно было объявить переменную books и две функции getBooks() и addBook(bookName), но тогда это были бы три независимые сущности без явной синтаксической, и со слабой логической связями.

// // ❌ Слабосвязанные, независмые сущности
// const books = [];
// function getBooks() {}
// function addBook() {}
// Задание
// Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать просто строки по аналогии с getBooks() и addBook(bookName).

// Метод removeBook(bookName) будет удалять книгу по имени. Возвращает строку 'Удаляем книгу <имя книги>', где <имя книги> это значение параметра bookName.

// Метод updateBook(oldName, newName) будет обновлять название книги на новое. Возвращает строку 'Обновляем книгу <старое имя> на <новое имя>', где <старое имя> и <новое имя>это значения параметров oldName и newName соотвественно.

// Тесты
// Объявлена переменная bookShelf.

// Значение переменной bookShelf это объект.

// Значение свойства bookShelf.getBooks это метод объекта.

// Вызов метода bookShelf.getBooks() возвращает строку 'Возвращаем все книги'.

// Значение свойства bookShelf.addBook это метод объекта.

// Вызов метода bookShelf.addBook('Мгла') возвращает строку 'Добавляем книгу Мгла'.

// Значение свойства bookShelf.removeBook это метод объекта.

// Вызов метода bookShelf.removeBook('Красный закат') возвращает строку 'Удаляем книгу Красный закат'.

// Значение свойства bookShelf.updateBook это метод объекта.

// Вызов метода bookShelf.updateBook('Пески Дюны', 'Дюна') возвращает строку 'Обновляем книгу Пески Дюны на Дюна'.
// const bookShelf = {
//   // Пиши код ниже этой строки
//   books: ['Последнее королевство', 'Страж снов'],
//   getBooks() {
//     return 'Возвращаем все книги';
//   },
//   addBook(bookName) {
//     return `Добавляем книгу ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Удаляем книгу ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Обновляем книгу ${oldName} на ${newName}`;
//   },
//   // Пиши код выше этой строки
// };
// console.log(bookShelf.getBooks());
// console.log(bookShelf.addBook('Мгла'));
// console.log(bookShelf.removeBook('Красный закат'));
// console.log(bookShelf.updateBook('Пески Дюны', 'Дюна'));

//--35--//
// Доступ к свойствам объекта в его методах
// Методы используются для работы со свойствами объекта, их изменения. Для доступа к объекту в методе используется не имя переменной, например bookShelf, а ключевое слово this - контекст. Значением this будет объект перед «точкой», то есть объект который вызвал этот метод, в нашем случае это ссылка на объект bookShelf.

// const bookShelf = {
//   books: ['Последнее королевство'],
//   getBooks() {
//     console.log(this);
//   },
// };

// // Перед точкой стоит объект bookShelf,
// // поэтому при вызове метода, this будет хранить ссылку на него.
// bookShelf.getBooks(); // {books: ['Последнее королевство'], getBooks: f}
// Для того, чтобы получить доступ к свойствам объекта в методах, мы обращаемся к нему через this и дальше как обычно - «через точку» к свойствам.

// const bookShelf = {
//   books: ['Последнее королевство'],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // []
// bookShelf.addBook('Мгла');
// bookShelf.addBook('Страж снов');
// console.log(bookShelf.getBooks()); // ['Последнее королевство', 'Мгла', 'Страж снов']
// bookShelf.removeBook('Мгла');
// console.log(bookShelf.getBooks()); // ['Последнее королевство', 'Страж снов']
// Будет логично задуматься - почему бы не использовать при обращении к свойствам имя объекта, ведь мы явно не собираемся его менять. Дело в том, что имя объекта штука не надежная, методы одного объекта можно копировать в другой (с другим именем), а в будущем узнаем, что часто, при создании объекта мы заранее вовсе не знаем имени. Использование this гарантирует, что метод работает именно с тем объектом, который его вызвал.

// Задание
// Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books. Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент.

// Тесты
// Объявлена переменная bookShelf.

// Значение переменной bookShelf это объект.

// Значение свойства bookShelf.updateBook это метод объекта.

// После вызова метода bookShelf.updateBook('Мгла', 'Хроники подземелий'), значение свойства books это массив ['Последнее королевство', 'Хроники подземелий', 'Страж снов'].

// После вызова метода bookShelf.updateBook('Последнее королевство', 'Дюна'), значение свойства books это массив ['Дюна', 'Мгла', 'Страж снов'].

// const bookShelf = {
//   books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//   updateBook(oldName, newName) {
//     // Пиши код ниже этой строки

//     for (const book of this.books) {
//       if (book === oldName) {
//         const indexOfOldName = this.books.indexOf(oldName);
//         this.books.splice(indexOfOldName, 1, newName);
//       }
//     }
//     return this.books;

//     // Пиши код выше этой строки
//   },
// };

// console.log(bookShelf.updateBook('Мгла', 'Хроники подземелий'));

//--36--//
// К нам обратилась владелица лавки зелий «У старой жабы» и заказала программу для ведения инвентаря - добавления, удаления, поиска и обновления зелий. Добавь объекту atTheOldToad свойство potions, значением которого сделай пустой массив.

// Тесты
// Объявлена переменная atTheOldToad.
// Значение переменной atTheOldToad это объект.
// Значение свойства atTheOldToad.potions это массив [].
// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions: [],
//   // Пиши код выше этой строки
// };
// console.log(atTheOldToad.potions);

//--37--//
// Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.

// Тесты
// Объявлена переменная atTheOldToad.
// Значение переменной atTheOldToad это объект.
// Значение свойства atTheOldToad.potions это массив ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'].
// Значение свойства atTheOldToad.getPotions это метод объекта.
// Вызов метода atTheOldToad.getPotions() возвращает ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'].
// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   getPotions() {
//     return this.potions;
//   },
//   // Пиши код выше этой строки
// };
// console.log(atTheOldToad.getPotions());

//--38--//
// Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива зелий в свойстве potions.

// Тесты
// Объявлена переменная atTheOldToad.

// Значение переменной atTheOldToad это объект.

// Значение свойства atTheOldToad.potions это массив ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'].

// Значение свойства atTheOldToad.addPotion это метод объекта.

// После первого вызова метода atTheOldToad.addPotion('Невидимка'), в свойстве potions будет массив ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа', 'Невидимка'].

// После второго вызова метода atTheOldToad.addPotion('Зелье силы'), в свойстве potions будет массив ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа', 'Невидимка', 'Зелье силы'].
// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   addPotion(potionName) {
//     // Пиши код ниже этой строки
//     this.potions.push(potionName);
//     return this.potions;
//     // Пиши код выше этой строки
//   },
// };
// console.log(atTheOldToad.addPotion('Невидимка'));
// console.log(atTheOldToad.addPotion('Зелье силы'));

//--39--//
// Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.

// Тесты
// Объявлена переменная atTheOldToad.
// Значение переменной atTheOldToad это объект.
// Значение свойства atTheOldToad.potions это массив ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'].
// Значение свойства atTheOldToad.removePotion это метод объекта.
// После первого вызова метода atTheOldToad.removePotion('Дыхание дракона'), в свойстве potions будет массив ['Зелье скорости', 'Каменная кожа'].
// После вотрого вызова метода atTheOldToad.removePotion('Зелье скорости'), в свойстве potions будет массив ['Каменная кожа'].
// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   removePotion(potionName) {
//     // Пиши код ниже этой строки
//     indexOfPotion = this.potions.indexOf(potionName);
//     this.potions.splice(indexOfPotion, 1);

//     return this.potions;
//     // Пиши код выше этой строки
//   },
// };
// console.log(atTheOldToad.removePotion('Дыхание дракона'));

//--40--//
// Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.

// Тесты
// Объявлена переменная atTheOldToad.
// Значение переменной atTheOldToad это объект.
// Значение свойства atTheOldToad.potions это массив ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'].
// Значение свойства atTheOldToad.updatePotionName это метод объекта.
// После первого вызова метода atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'), в свойстве potions будет массив ['Зелье скорости', 'Полиморф', 'Каменная кожа'].
// После второго вызова метода atTheOldToad.updatePotionName('Каменная кожа', 'Невидимка'), в свойстве potions будет массив ['Зелье скорости', 'Полиморф', 'Невидимка'].
// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   updatePotionName(oldName, newName) {
//     // Пиши код ниже этой строки
//     for (const potion of this.potions) {
//       if (potion === oldName) {
//         let indexOfOldName = this.potions.indexOf(oldName);
//         this.potions.splice(indexOfOldName, 1, newName);
//       }
//     }
//     return this.potions;
//     // Пиши код выше этой строки
//   },
// };
// console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'));

//--41--//
// Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими характеристиками. Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.

// {
//   name: 'Дыхание дракона',
//   price: 700
// }
// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.
// Тесты
// Объявлена переменная atTheOldToad.
// Значение переменной atTheOldToad это объект.
// Значение свойства atTheOldToad.getPotions это метод объекта.
// Вызов метода atTheOldToad.getPotions() для исходного объекта возвращает [ { name: 'Зелье скорости', price: 460 }, { name: 'Дыхание дракона', price: 780 }, { name: 'Каменная кожа', price: 520 } ].
// Значение свойства atTheOldToad.addPotion это метод объекта.
// Для исходного объекта после вызова метода atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }), в массиве potions последним элементом будет этот объект.
// Для исходного объекта после вызова метода atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 }), в массиве potions последним элементом будет этот объект.
// Значение свойства atTheOldToad.removePotion это метод объекта.
// Для исходного объекта после вызова метода atTheOldToad.removePotion('Дыхание дракона'), в свойстве potions будет массив [ { name: 'Зелье скорости', price: 460 }, { name: 'Каменная кожа', price: 520 } ].
// Для исходного объекта после вызова метода atTheOldToad.removePotion('Зелье скорости'), в свойстве potions будет массив [ { name: 'Дыхание дракона', price: 780 }, { name: 'Каменная кожа', price: 520 } ].
// Значение свойства atTheOldToad.updatePotionName это метод объекта.
// Для исходного объекта после вызова метода atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'), в свойстве potions будет массив [ { name: 'Зелье скорости', price: 460 }, { name: 'Полиморф', price: 780 }, { name: 'Каменная кожа', price: 520 } ].
// Для исходного объекта после вызова метода atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости'), в свойстве potions будет массив [ { name: 'Зелье скорости', price: 460 }, { name: 'Дыхание дракона', price: 780 }, { name: 'Зелье неуязвимости', price: 520 } ].

// const atTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
//   ],
//   // Пиши код ниже этой строки

//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     if (this.potions.includes(potionName)) {
//       return `Зелье ${potionName} уже есть в инвентаре!`;
//     }

//     this.potions.push(potionName);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Зелья ${potionName} нет в инвентаре!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Зелья ${oldName} нет в инвентаре!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Пиши код выше этой строки
// };

//решение
// const atTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
//   ],
//   // Пиши код ниже этой строки
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       console.log(this.potions);
//       if (this.potions.includes(potionName)) {
//         return `Зелье ${potionName} уже есть в инвентаре!`;
//       }
//       this.potions.push(potionName);
//     }
//   },
//   removePotion(potionName) {
//     const { potions } = this;
//     for (let i = 0; i < potions.length; i += 1) {
//       const { name } = potions[i];
//       if (potionName === name) {
//         potions.splice(i, 1);
//       }
//     }
//   },
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === oldName) {
//         this.potions[i].name = newName;
//       }
//     }
//     return `Зелья ${oldName} нет в инвентаре!`;
//   },
//   // Пиши код выше этой строки
// };

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }));
// console.log(atTheOldToad.potions);
// console.log(atTheOldToad.removePotion('Дыхание дракона'));
// console.log(atTheOldToad.potions);
// console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'));
