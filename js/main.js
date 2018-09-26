'use strict';

/*  Task 1
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

//   ========================================================================

  /* Task 2
  Напишите функцию formatString(str)
  
  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее. 
  - Если длина больше 40 символов, то функция обрезает строку до 40-ти
    символов и добавляет в конец строки троеточие '...', после чего 
    возвращает укороченную версию.
*/


const formatString = function(str){
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

// =============================================================

  /* Task 3
  Напишите функцию checkForSpam(str)
  
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  
  PS: слова могут быть в произвольном регистре
*/
const checkForSpam = function(str) {
    const lowerStr = str.toLowerCase();
    return (lowerStr.includes('spam') || lowerStr.includes('sale'));
  }
  // Вызовы функции для проверки
  console.log('Latest technology news', checkForSpam('Latest technology news') ); // false
  
  console.log('JavaScript weekly newsletter', checkForSpam('JavaScript weekly newsletter') ); // false
  
  console.log('Get best sale offers now!', checkForSpam('Get best sale offers now!') ); // true
  
  console.log('[SPAM] How to earn fast money?', checkForSpam('[SPAM] How to earn fast money?') ); // true
  
//  =========================================================

//   Task 4
  
//   Написать функцию, getPx(str) 

//   Функция getPx должна получать строку вида '10px',
//   проверять была ли передана строка, если да, 
//   возвращать только числовую составляющую, к примеру 10.
    
//   Если была передана не строка, функция возвращает null.

const getPx = function(str){
    if (typeof str === 'string') {

       let strPars = Number.parseFloat(str);
       return strPars;
    } else {
        return null;
    }

}

// Вызовы функции для проверки
console.log( getPx("10px") === 10 ); // должно быть:  true
console.log( getPx("10.5") === 10.5 ); // должно быть:  true
console.log( getPx("0") === 0 ); // должно быть:  true
console.log( getPx(-1) ); // должно быть:  null
console.log( getPx(10) ); // должно быть:  null


// ===============================================================

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
	});
	
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

// =============================================
/*  Taask 6
  Создайте функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/
function findLargestNumber(numbers){
  
  for (let i = 0; i < numbers.length; i+=1) {
    if (numbers[i] > numbers[0]) {
      numbers[0] = numbers[i];
    }
    
  }
  return numbers[0];
}
// Вызовы функции для проверки
console.log(
  findLargestNumber([1, 2, 3])
); // вернет 3

console.log(
  findLargestNumber([27, 12, 18, 5])
); // вернет 27

console.log(
  findLargestNumber([31, 128, 14, 74])
); // вернет 128

// ====================================


/*  Task 7
  Есть массив уникальных чисел uniqueNumbers.
  
  Написать функцию, addUniqueNumbers(...), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/

const uniqueNumbers  = [2, 1, 4, 9];
// function addUniqueNumbers (...arg){
//   const arr = Array.from(arg);
//   for (let i = 0; i < uniqueNumbers.length; i += 1) {
    
//     if (uniqueNumbers.includes(arr[i]) === true) {
//       delete arr[i];
//     } else {
//       uniqueNumbers.push(arg[i]);
//     }
    
//   }
 
// }
const addUniqueNumbers = (...arg) => {
  for (let i = 0; i < arg.length; i += 1) {
    if (!uniqueNumbers.includes(arg[i])) {
      uniqueNumbers.push(arg[i]);
    }
  }
  return uniqueNumbers;
}

// Вызовы функции для проверки
addUniqueNumbers(1, 2, 3);
console.log(uniqueNumbers); // [2, 1, 4, 9, 3]

addUniqueNumbers(12, 2, 3, 19);
console.log(uniqueNumbers); // [2, 1, 4, 9, 3, 12, 19]

addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
console.log(uniqueNumbers); // [2, 1, 4, 9, 3, 12, 19, 5, 8]

// =================================
/* task 8
  Создайте функцию removeFromArray(arr), 
  которая получает 1 параметр, исходный массив arr.
  
  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел. 
  
  Удалите все элементы из исходного массива, 
  которые имеют такое же значение, что и аргументы.
*/

function removeFromArray(arr, ...val){
  for (let i = 0; i < val.length; i += 1) {
    // console.log(val[i]);
    if (arr.indexOf(val[i])>0) {
      arr.splice(arr.indexOf(val), 1);
    }
    
  }
  return arr;
}

// Вызовы функции для проверки
console.log(
  removeFromArray([1, 2, 3, 4, 5], 2, 4)
); // [1, 3, 5]

console.log(
  removeFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
); // [12, 8, 17]

// =================================================================


/*
  Есть массив logins с логинами пользователей. Напишите скрипт добавления логина в массив logins.
  
  Добавляемый логин должен:
    - проходить проверку на длину от 4 до 16-ти символов включительно
    - быть уникален, то есть отсутствовать в массиве logins
 
  🔔 Разбейте задачу на подзадачи с помощью функций.
  
  Напишите функцию isLoginValid (login) {}, для которой проверьте количество символов 
  параметра login и верните true или false в зависимости от того, попадает ли длина параметра 
  в заданный диапазон от 4-х до 16-ти символов включительно.
 
  Создайте функцию isLoginUnique(allLogins, login) {}, которая принимает логин и список 
  всех логинов как параметры и проверяет наличие login в массиве allLogins, возвращая true 
  если такого логина еще нет и false если логин уже используется.
  Далее напишите функцию addLogin(logins, login) которая:
    - Принимает новый логин и массив всех логинов как параметры
    - Проверяет валидность логина используя вспомогательную функцию isLoginValid
    - Если логин не валиден, прекратить исполнение функции addLogin 
      и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
    - Если логин валиден, функция addLogin проверяеть уникальность логина 
      с помощью функции isLoginUnique
    - Если isLoginUnique вернет true, addLogin добавляет новый логин 
       в logins и возвращает строку 'Логин успешно добавлен!'
    - Если isLoginUnique вернет false, тогда addLogin не добавляет 
       логин в массив и возвращает строку 'Такой логин уже используется!'
       
  🔔 Принцип единственной ответственности функции - каждая функция делает что-то одно. Это 
     позволяет переиспользовать код и изменять логику работы функции только в одном месте, 
     не затрагивая работу программы в целом. Предикатные функции возвращают только true или 
     false. Такие функции принято называть начиная с is: isLoginUnique и isLoginValid в нашем случае.
      - isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false. 
      - isLoginValid только проверяет валидный ли логин и возвращает true или false.
      - addLogin добавляет или не добавляет логин в массив. При этом для проверок условия добавления 
        используются результаты вызовов других функций - isLoginUnique и isLoginValid.
*/



const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
const updatedLoginBase = [logins];
let login = prompt('Введите логин');

const isLoginValid = function(login) {
  if (4 <= login.length && login.length <= 16) {
    return true;
}
return false;

  // if (login.length <= 4 || login.length >= 16) {
	// return false;
	// } 
	// return true;
};
const checkIsLoginValid = isLoginValid(login);
  
// 	if (input === null) {
// 		console.log('Введите логин');
// 	} else if (input.length <= 4 || input.length >= 16) {
// 		console.log(false);
// 	} else {
// 		console.log(true);
// 	} return;
// };
// isLoginValid();

const isLoginUnique = function(logins, login) {
  if (logins.includes(login)) {
   return true;
  }
  return false;
  };

const checkIsLoginUnique = isLoginUnique(logins, login);

const addLogin = function(logins, login) {
  
  if (!checkIsLoginValid){
    return console.log('Ошибка! Логин должен быть от 4 до 16 символов');
  }
  if (!checkIsLoginUnique) {
    logins.push(login);
  }
  
};
addLogin(logins,login);

// Вызовы функции для проверки
// addLogin('Ajax'); // 'Логин успешно добавлен!'
// addLogin('robotGoogles'); // 'Такой логин уже используется!'
// addLogin('Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// addLogin('jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log('updated base of logins: ', logins);
