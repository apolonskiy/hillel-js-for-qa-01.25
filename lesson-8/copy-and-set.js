// const originalArray = [1, 2, 3, 4, 5];
// const copiedArray = originalArray.slice();
// copiedArray.push('qwe')
// console.log(originalArray)
// console.log(copiedArray)

//
// const originalArray = [1, 2, 3, 4, 5];
// const copiedArray = [].concat(originalArray);

// const originalArray = [1, 2, 3, 4, 5];
// const copiedArray = [...originalArray];
// console.log(originalArray);
// console.log(...originalArray, 'qq', 'ddd');

// const originalArray = [1, 2, 3, 4, 5];
// const copiedArray = Array.from(originalArray);


////// --------
// const set = new Set(); // Порожній об'єкт Set
// const setFromArray = new Set([1, 2, 3, 3, 4, 6/2,  4, 5]); // Створення з масиву
// console.log(set)
// console.log(setFromArray)
// setFromArray.add(6)
// console.log(setFromArray)
// setFromArray.delete(3)
// console.log([...setFromArray])

const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 4, 5]);

const union = [...new Set([...set1, ...set2])]; // [1, 2, 3, 4, 5]
console.log(union);