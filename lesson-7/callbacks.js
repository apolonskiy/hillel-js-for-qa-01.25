// const isOdd = (n) => {
//   return n % 2 !== 0;
// }

// let printMsg = (callback, num) => {
//   const isNumOdd = callback(num);
//   console.log(`The number ${num} is an odd number: ${isNumOdd}.`)
// }

// // Pass in isEven as the callback function
// printMsg(isOdd, 4); 
// // Prints: The number 4 is an even number: True.

// function myFunc(url, callback) {
//   fetch(url)
//     .then(response => response.json())
//     .then(data => callback(data))
//     .catch(error => console.log(error));
// }

// const cbFetch = function(data) {
//   console.log(data.title);
// }

// myFunc('https://jsonplaceholder.typicode.com/todos/1', cbFetch);
// SAME AS 
// myFunc('https://jsonplaceholder.typicode.com/todos/1', function(data) {
//   console.log(data);
// });

const numbers = [10, 25, 33, 42, 54];

// const evenNumbers = numbers.filter(function(elem, ind, arr) {
//     // return ind >= 0;
//     return elem % 2 === 0; 
// });

const evenNumbers = numbers.filter((elem, ind) => elem % 2 === 0 && ind > 2);

console.log(evenNumbers)
