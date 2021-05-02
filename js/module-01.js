//=====Модуль: 1=====//
// const testNumber = 0.2 + '0.5';
// console.log(testNumber);
// console.log(0.1 + 0.2);

///////////////////////////////////////////////

// Немного занудства, но возможно, это окажется важным для Вас...
// При введении такого кода появляется сообщение "- Объявлена функция add(a, b, c)"(как ошибка):

// function add(a, b, c) {
//   const result = a + b + c;
//   console.log(`Результат сложения равен ${result}`);
//   // Пиши код выше этой строки
// };

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// Хотя при прочтении задания можно сделать довольно логичный вывод, что ничего кроме дополнений в console.log делать не нужно:). Но в задании не сказано, что нужно дополнить только console.log, т.е. теоретически - можно записать любые строчки, которые приведут к указанному результату:)). Результат есть, а выдаёт ошибку...

// function add(a, b, c) {

//   console.log(`Результат сложения равен ${a + b + c}`);
//   // Пиши код выше этой строки
// };

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);
////////////////////////////////////////////////////////

//--31--//
// const courseTopic = 'JavaSript для начинающих';
// // Пиши код ниже этой строки

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length -1];

// Пиши код выше этой строки

//--33--//
// function formatMessage(message, maxLength) {
//   let result;
// // Пиши код ниже этой строки
// if(message.length <= maxLength) {
// result = message;
// }
//   else if(message.length > maxLength) {
//   result = message.slice(0, maxLength) + '...';
//   }

// // Пиши код выше этой строки
//   return result;
// }

//--36--//
// function checkForSpam(message) {
//   let result;
//   // Пиши код ниже этой строки
//   if(message.toLowerCase().includes('spam')) {
//     result = true
//   }
//   else if(message.toLowerCase().includes('sale')) {
//     result = true;
//   }
//   else {
//     result = false;
//   };
//   // Пиши код выше этой строки
//   return result;
// }
// const result = checkForSpam('Get best sale offers now!');
// console.log(result);
