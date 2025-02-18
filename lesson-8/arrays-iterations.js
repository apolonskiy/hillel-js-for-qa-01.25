// const numbers = [1, 2, 3, 4, 5];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]); // Виведе всі числа з масиву
// }

// // --- 


// const colors = ['red', 'green', 'blue', 'yellow'];

// for (const color of colors) {
//     console.log(color);
// }

// assignment by value vs assignment by link (pointer)

// let num1 = 5;
// let num2 = num1;

// console.log(num1);
// console.log(num2);

// num1 = 66;
// console.log(num1);
// console.log(num2);
// num2 = 9

// console.log(num1);
// console.log(num2);

// --- 
// const arrA = [1, 2, 3];
// const arrB = arrA; // Посилання на той самий масив
// console.log(arrA);
// console.log(arrB);

// arrB.push('ABC');
// console.log(arrA);
// console.log(arrB);

// ----

const numbers = [1, 2, 3, 4, 5];
// function doubleNumbers(nums) {
//     nums.push('123')
// 	return nums.map((num) => num * 2);
// }

// const doubledNumbers = doubleNumbers(numbers);
const doubledNumbers = numbers.map((num) => num * 2)
console.log(numbers)
console.log(doubledNumbers);