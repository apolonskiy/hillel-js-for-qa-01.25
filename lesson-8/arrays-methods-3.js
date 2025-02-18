// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((number, ind, arr) => {
// //   console.log(ind, arr)
//   console.log(number * 2);
// });

// --- 
// const strings = ['sddg', 'dhdh', 'fg', 'dfhfdhdhdhd', 'dfhdfh'];
// const longString = strings
//                     .filter((str) => str.length > 4 || str.startsWith('dhd'))
//                     .slice(1).find(str => str.length < 7).split('');
// console.log(longString);
// console.log(strings)

// -- 

// const numbers = [1, 2, 3, 4, 5];
// const firstEvenNumber = numbers.find((number) => number % 2 === 0);
// console.log(firstEvenNumber);

// const strings = ['sddg', 'dhdh', 'fg', 'dfhfdhdhdhd', 'dfhdfh'];
// const longString = strings.find((str) => str.length > 4);
// console.log(longString);
// console.log(strings)

// ----

// const numbers = [1, 2, 3, 4, 5];
// const firstEvenNumberIndex = numbers.findIndex((number) => number % 2 === 0);
// console.log(firstEvenNumberIndex)

// const strings = ['sddg', 'dhdh', 'fg', 'dfhfdhdhdhd', 'dfhdfh'];
// const longString = strings.findIndex((str) => str.length > 4);
// console.log(longString);
// console.log(strings)

// --- 

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map((number) => number * 2);
// console.log(doubledNumbers)

// -- 
const nestedArray = [[[1], [2, [[[]]]]], [3, 4], [5, 6]];
const flatArray = nestedArray.flat(7); // [1, 2, 3, 4, 5, 6]
console.log(flatArray)

// -- 
const numbers = [1, 2, 3];
const doubledAndFlattened = numbers.flatMap((number) => [number * 2, number * 3]); // [2, 3, 4, 6, 6, 9]