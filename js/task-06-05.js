// Вам дан массив. Значения в массиве будут либо числами, либо строками, либо их комбинацией. Ваша задача - вернуть массив, в котором будут идти сначала числа, отсортированные в порядке возрастания, а затем строки, отсортированные в алфавитном порядке. Значения должны сохранить свой исходный тип. Если на входе была строка, то и вернуться должна строка, если число - число.

// Пример кода:
// example([6, 2, 3, 4, 5]) = > [2, 3, 4, 5, 6]
// example([14, 32, 3, 5, 5]) = > [3, 5, 5, 14, 32]
// example([1, 2, 3, 4, 5]) = > [1, 2, 3, 4, 5]
// example(['Banana', 'Orange', 'Apple', 'Mango', 0, 2, 2]) = > [0, 2, 2, 'Apple', 'Banana', 'Mango', 'Orange']

//вариант 1:
function sortArray1(array) {
  if (array.some(el => typeof el === 'number')) {
    const firstArr = array
      .filter(el => typeof el === 'number')
      .sort((a, b) => a - b);
    const secondArr = array.filter(el => typeof el === 'string').sort();
    return [...firstArr, ...secondArr];
  }

  return array.sort();
}

console.log(sortArray1([6, 2, 3, 4, 5]));
console.log(sortArray1([14, 32, 3, 5, 5]));
console.log(sortArray1([1, 2, 3, 4, 5]));
console.log(sortArray1(['Banana', 'Orange', 'Apple', 'Mango', 0, 2, 2]));
console.log(sortArray1(['Banana', 'Orange', 'Apple', 'Mango']));

//вариант 2:
function sortArray2(array) {
  const firstArr = [];
  const secondArr = [];
  array.map(el => {
    if (typeof el === 'number') {
      firstArr.push(el);
      firstArr.sort((a, b) => a - b);
    }
    if (typeof el === 'string') {
      secondArr.push(el);
      secondArr.sort();
    }
  });
  return firstArr.concat(secondArr);
}

console.log(sortArray2([6, 2, 3, 4, 5]));
console.log(sortArray2([14, 32, 3, 5, 5]));
console.log(sortArray2([1, 2, 3, 4, 5]));
console.log(sortArray2(['Banana', 'Orange', 'Apple', 'Mango', 0, 2, 2]));
console.log(sortArray2(['Banana', 'Orange', 'Apple', 'Mango']));

// Тренажер, где можно нормально поgovnoкодить и попаяться. Сравнение объектов
const data = { a: 1, b: { c: 1, d: 2 }, f: { p: 5, q: 6 } };
const data2 = { a: 1, b: { c: 1, d: 2 }, f: { p: 5, q: 6 } };
const data3 = { a: 1, b: { c: 2 }, l: { m: 2 } };
const data4 = { a: 1, b: 2, c: { d: 6, e: 8 } };
const data5 = { a: 1, b: 2, c: { d: 6, e: 8 } };

function isEqual(obj1, obj2) {
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return false;
  }
  if (obj1 === undefined || obj2 === undefined) {
    return false;
  }
  if (obj1 === null || obj2 === null) {
    return false;
  }
  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  for (let i = 0; i < obj1Keys.length; i++) {
    if (obj2Keys.includes(obj1Keys[i]) === false) {
      return false;
    }
  }
  for (let i = 0; i < obj1Keys.length; i++) {
    if (typeof obj1[obj1Keys[i]] === 'object') {
      return isEqual(obj1[obj1Keys[i]], obj2[obj1Keys[i]]);
    }
    if (obj1[obj1Keys[i]] !== obj2[obj2Keys[i]]) {
      return false;
    }
  }
  return true;
}

console.log(isEqual(data, data2)); // Выводит true
console.log(isEqual(data, data3)); // Выводит false
console.log(isEqual(data4, data5)); // Выводит true

/**
 * Напиши функцию getAllPropValues(propName)
 * которая вернет все значения заданного
 * свойства
 * Например getAllPropValues('name') возвращает ['Asus', 'Huawei', 'HP', 'Dell']
 * getAllPropValues('category') возвращает []
 */

const products = [
  { name: 'Asus', price: 1300, quantity: 4 },
  { name: 'Huawei', price: 2700, quantity: 3 },
  { name: 'HP', price: 400, quantity: 7 },
  { name: 'Dell', price: 1200, quantity: 9 },
  { name: 'Apple', price: 1400 },
];

const getAllPropValues = propName => {
  return products.map(prop => prop[propName]).filter(prop => prop);
};

console.log(getAllPropValues('name')); // ['Asus', 'Huawei', 'HP', 'Dell', 'Apple']
console.log(getAllPropValues('quantity')); // [4, 3, 7, 9]
console.log(getAllPropValues('category')); // []
