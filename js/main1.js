'use strict';

//Task #2-1
/*
  Есть массив имен пользователей.
  В первом console.log вывести длину массива.
  
  В последующих console.log дополнить конструкцию
  так, чтобы в консоль вывелись указаные в комментариях 
  элементы массива.
*/

const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];
const lengthMas = (users).length;

console.log(lengthMas); // 4

console.log(users[1]); // Poly
console.log(users[3]); // Chelsey
console.log(users[0]); // Mango
console.log(users[2]); // Ajax

//================================================

//Task #2-2

/* Есть массив имен пользователей */

const users1 = ["Mango", "Poly", "Ajax", "Chelsey"];

/* Используя методы массива, последовательно выполнить следующие операции */
console.log('users1:', users1);
// Удалить из начала массива нулевой элемент
const usShif = users1.shift();
console.log('usShif:', usShif);
console.log('usShif:', users1); // ["Poly", "Ajax", "Chelsey"]

// Удалить из конца массив последний элемент
const usPop = users1.pop();
console.log('usPop:', usPop);
console.log('usPop:', users1); // ["Poly", "Ajax"]

// Добавить в начало массива любое имя

const usUn = users1.unshift('Barsa');
console.log('usUn:', usUn);
console.log('usUn:', users1); // ["добавленое имя", "Poly", "Ajax"]

// Добавить в конец массива два любых имени за одну операцию
const usSplice = users1.splice(2, 2, 'Poli', 'Ajax');
console.log('usSplice:', usSplice);
console.log(users1); //  ["добавленое ранее имя", "Poly", "Ajax", "имя 1", "имя 2"]

//=================================================

//Task 2-3

/*
  Попросить пользователя ввести произвольную строку
  и записать ее в переменную string
  
  PS: для перебора массива используте цикл for или for...of
*/

let string = prompt('Введите произвольную строку');
let newString = string.split(' ');
let arr = [];

// Разбить строку в массив, пусть разделителем будет пробел, и записать в переменную arr

for (let i = 0; i < newString.length; i += 1 ) {
    arr.push(newString[i]);
    
}
console.log('massivString :',arr);

// // Используя цикл, вывести в консоль все индексы массива arr

for (let i = 0; i < newString.length; i += 1 ) {
    arr.push(newString[i]);
    console.log('massivString :', i);
    
}


// // Используя цикл, вывести в консоль все элементы массива arr

for(let value of newString){
    arr.push(newString);
  console.log(value);
}


// // Используя цикл, bывести в консоли все пары индекс:значение массива arr

for (let mas = 0; mas < newString.length; mas += 1 ) {
    arr.push(newString[mas]);
    console.log('massivString :', mas + arr[mas] );
}

//=======================================================//

//Task 2-4

/*
  Напишите цикл, который предлагает, через prompt, ввести число больше 100. 
  
  Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

  Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, 
  либо не нажмёт кнопку Cancel.
  
  Предполагается, что посетитель вводит только числа, обрабатывать невалидный ввод 
  вроде строк 'qweqwe' в этой задаче необязательно.
  
  PS: используйте цикл do...while
*/

let max = 100;
let userMan;
let num;
let userFal = false;


do {
  userMan = prompt('Введите число больше 100', '');
  num = Number(userMan);
  userFal = num >= max;
} while (userMan !== null && !userFal);

console.log(userMan);

// ======================================================================= //

//Task 2-5


/*
  Напишите скрипт, который выводит через console.log все 
  числа от min до max, с двумя исключениями: 
    
    - Для чисел, нацело делящихся на 3, вместо числа выводится строка 'Fizz'
    
    - Для чисел, нацело делящихся на 5, но не на 3, вместо числа выводится строка 'Buzz'
    
  PS: используйте цикл for
*/

const minOne = 1;
const maxOne = 100;

let arrMax = [0];

for ( let i = minOne; i < maxOne; i += 1) {
  arrMax.push(i);
  if (arrMax[i] % 3 === 0 ) {
    arrMax[i] = 'Fizz';
    
  } else if(arrMax[i] % 5 === 0 ) {
    arrMax[i] = 'Buzz';
    
  }
  
}
console.log(arrMax);




// ======================================================================= //

//Task 2-6

/*
  Напишите скрипт, который выбирает из массива numbers 
  все числа, которые больше чем значение переменной num, 
  записывая эти числа в массив newArray.
      
  В результате в массиве newArray будут все подходяшие числа.
      
  PS: используйте цикл for или for...of и оператор ветвления if
*/

const numbersN = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
const num1 = 10;
const newArray = [];

for( let i = 0; i< numbersN.length; i += 1){
  if(numbersN[i]>num1){
    newArray.push(numbersN[i]);
  }
}
// for( let i = 0, max2 = numbersN.length; i < max2; i += 1){
//   if(max[i]>num1){
//     newArray.push(max2[i]);
//   }
// }
console.log(numbersN)
console.log(newArray);

// ======================================================================= //

//Task 2-7

/*
  Напишите скрипт, который проверяет произвольную строку 
  в переменной string и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/

const longString = "May the force be with you";
let masString = longString.split(' ');
let longestWord = [0];

for (let i = 0; i < masString.length; i+=1) {
  let word = masString[i];
  if ( longestWord.length < word.length) {
      longestWord = word
  }
  
}

console.log(longestWord); // 'force'



// ======================================================================= //

//Task 2-8
