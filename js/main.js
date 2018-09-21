'use strict';

//alert('you!');



// const add = function (a, b, c){
// 	return a * b / c;
// };

// let newAdd = add (3, 8, 6);

// console.log(newAdd);

// function nam (a, b, c) {
//   return a + b + c;
// }

// let newNam = nam (3, 8, 6);

// console.log(newNam);

// add(1, 2, 3); // 6
// print("I go in"); // text


// function add (a, b, c) {
//   return a + b + c;
// }

// function print (str) {
//   console.log(str);
// }

// const showTestDays = function(name = "Пользователь", days = 30, weaks = 2) {
//   return `Имя - ${name}, использовано ${days} тестовых дня(ей) на протяжении ${weaks}`;
// }

// console.log( showTestDays("Екатерина", 10, 6) );
// // "Имя - Екатерина, использовано 10 тестовых дня(ей)"

// console.log( showTestDays("Михаил") );
// // "Имя - Михаил, использовано 30 тестовых дня(ей)"

// console.log( showTestDays() );
// // "Имя - Пользователь, использовано 30 тестовых дня(ей)"

// const pow = function (base, exponent) {
//   return Math.pow(base, exponent);
// };

// console.log(`2 ** 10 =  ${pow(2, 10)}`); // "2 ** 10 =  1024"

// console.log(`10 ** 2 =  ${pow(10, 2)}`); // "10 ** 2 =  100"

// const summ = function() {
//   const max = arguments.length;
//   let total = 0;

//   for (let i = 0; i < max; i += 1) {
//     total += arguments[i];
//   }

//   return total;
// };

// console.log(`sum = ${summ(3, 2)}`); // "sum = 15"

// const nav = function (w, d, a) {
// 	console.log('My name is Igor.');
// 	console.log(d);
// 	console.log(w);
// 	console.log(a);
// 	return w + d + a;

// };

// let res = nav (5, 8, 85);
// console.log(res);

// const fn = (a, b, c) => a + b + c;

// const add = fn(2, 3, 7);

// console.log(fn);
// console.log(add);


/* Task 1
  Напишите функцию checkNumberType(num)
  
  Функция получает число num как аргумент и возвращает 
  строку "Even" если число четное и строку "Odd" если не четное.
*/
const checkNumberType = function (num){
	if (num % 2 === 0) {
		num = 'Even';
	} else {
		num = 'Odd';
	}
  return num;
}

// Вызовы функции для проверки
console.log( checkNumberType(2) ); // 'Even'

console.log( checkNumberType(46) ); // 'Even'

console.log( checkNumberType(3) ); // 'Odd'

console.log( checkNumberType(17) ); // 'Odd'


// const strin = prompt('hello world i white color', ' ');

// let newStrin;

// if (strin.length <= 10) {
// 	newStrin = strin;
// } else {
// 	newStrin = 'this text is no valid';
// }

// console.log(newStrin);

/* Task 2
  Напишите функцию formatString(str)
  
  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее. 
  - Если длина больше 40 символов, то функция обрезает строку до 40-ти
    символов и добавляет в конец строки троеточие '...', после чего 
    возвращает укороченную версию.
*/

const formatString = function (str) {
	// while (str.length <= 40) {
	// 	console.log(str);
	// 	return;
	// }
	// if (str.length <= 40) {
	// 	console.log(str);
	// 	return
	// } else if (str.length >= 40) {
	// 	console.log(str.substr(0, 40) + '...');
	// 	return
	// } else {}

	if (str.length > 40) {
		return str.substr(0, 41) + '...';
		
	} else {
		return str;

	}
}

// Вызовы функции для проверки
console.log(
  formatString("Curabitur ligula sapien, tincidunt non.")
); // вернется оригинальная строка
console.log(
  formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
); // вернется форматированная строка

console.log(
  formatString("Curabitur ligula sapien.")
); // вернется оригинальная строка

console.log(
  formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
); // вернется форматированная строка


/* Task 3
  Напишите функцию checkForSpam(str)
  
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  
  PS: слова могут быть в произвольном регистре
*/
function checkForSpam(str) {
  	const lowersStr = str.toLowerCase();

  return (lowersStr.includes('spam') || lowersStr.includes('sale'));
  
}
// Вызовы функции для проверки
console.log( checkForSpam('Latest technology news') ); // false

console.log( checkForSpam('JavaScript weekly newsletter') ); // false

console.log( checkForSpam('Get best sale offers now!') ); // true

console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true


// =====================================
/*  Task 5
  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы
  и символы букв и цифр!
*/


// Вызовы функции для проверки

const findLongestWord = function(str){
	let strSplit = str.split(' ');
	let lengthStr = 0;
	let strReturn = ' ';
	
	strSplit.forEach(function(strSplit){
		if (lengthStr < strSplit.length) {
			lengthStr = strSplit.length;
			strReturn = strSplit;
		}
	})
	
	return strReturn;
} 


console.log(
  findLongestWord("The quick brown fox jumped over the lazy dog")
); // вернет 'jumped'

console.log(
  findLongestWord("Google do a roll")
); // вернет 'Google'

console.log(
  findLongestWord("May the force be with you")
); // вернет 'force'

