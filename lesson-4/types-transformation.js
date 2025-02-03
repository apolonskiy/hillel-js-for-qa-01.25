// const age = 30;
// const name = "Alice";
// const isActive = true;
// const person = { firstName: "Bob", lastName: "Smith" };
// const greet = function() { console.log("Hello!"); };
// const numbers = [1, 2, 3, 4, 5];

// console.log(typeof age); // Виведе: number
// console.log(typeof name); // Виведе: string
// console.log(typeof isActive); // Виведе: boolean
// console.log(typeof person); // Виведе: object
// console.log(typeof greet); // Виведе: function
// console.log(typeof numbers); // Виведе: object

// let unknownVariable;
// console.log(typeof unknownVariable); // Виведе: undefined

// const nullValue = null;
// console.log(typeof nullValue); // Виведе: object

// console.log(Boolean(-3)); // true
// console.log(Boolean(0)); // false
// console.log(Boolean("test")); // true
// console.log(Boolean("")); // false

// console.log(Boolean({})); // true
// console.log(Boolean([])); // true

// let str = Number("test");
// console.log(str); // NaN, помилка перетворення

// console.log(Number("238s")); // NaN (помилка на місці символу "s")
// console.log(Number("   32   ")); // 32 - Пробіли на початку та з кінця видаляються
// console.log(Number(true));  // 1
// console.log(Number(false)); // 0
// console.log(Number(undefined)); // NaN
// console.log(Number(null)); // 0

// console.log(parseInt('100px123')); // 100
// console.log(parseFloat('10.5rem')); // 10.5
// console.log(parseInt('15.6')); // 15, тільки частина цілого числа
// console.log(parseFloat('48.54')); // 48.5, друга крапка зупиняє зчитування
// console.log(parseFloat("2.5test")); //2.5
// console.log( parseInt('a123') ); // 

// let value = true;
// console.log(typeof value); // boolean
// console.log(value); // string

// value = String(value); // тепер value - це рядок "true"
// console.log(typeof value); // string
// console.log(value); // string


// let testNumber = 5;
// const mutatedString = testNumber.toString()
// // testNumber = String(testNumber);
// console.log(typeof testNumber); // string
// console.log(mutatedString); // string

console.log('15' - 5);
console.log(5 * '15');