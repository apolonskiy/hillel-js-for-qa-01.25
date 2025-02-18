const numbers = [1, 2, 3, 4, 5, 'df', undefined];
const slicedArray = numbers.slice(-3); // [3, 4, 5]
console.log(slicedArray)

// -- 
// console.log('\n')
// const colors = ["червоний", "зелений", "синій"];
// colors.splice(2, 0, "жовтий", "оранжевий");
// console.log(colors);

// console.log('\n')
// const colors = ["червоний", "зелений", "синій"];
// colors.splice(1, 10, "жовтий", "оранжевий");
// console.log(colors); 


console.log('\n')
const colors = ["червоний", "зелений", "синій"];
colors.splice(1, 2);
console.log(colors); 

// --- 


const array1 = [1, 2];
const array2 = [3, 4];
const concatenatedArray = array2.concat(array1);
console.log(concatenatedArray); // [1, 2, 3, 4]
console.log(array1);