// const months = ['March', 'Jan', 'Feb', 'Dec'];
// const sortedArr = months.sort();
// sortedArr.push(123)
// console.log(months); //  ["Dec", "Feb", "Jan", "March"]
// console.log(sortedArr)

// const fruits = ['banana', 'apple', 'orange', 'grape'];
// fruits.sort((prevValue, nextValue) => prevValue.localeCompare(nextValue)); 
// console.log(fruits)

// const arrNum = [1,5,7,3,2,2,7,112,4346,347,2,36]
// arrNum.sort((a, b) => {
//     if(a > b){
//         return 100;
//     } else if (a < b) {
//         return -1;
//     } 
//     return 0;
// })

// arrNum.sort((a, b) => a-b)
// console.log(arrNum);

// -- 

// const numbers = [1, 2, 3, 4, 5];
// numbers.reverse(); // [5, 4, 3, 2, 1]
// console.log(numbers)

// -- 

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator.toString() + currentValue.toString(), 3);
// console.log(sum)
// --


const numbers = [0, 2, 3, 4, 5];
const hasEvenNumber = numbers.some((number) => number > 5); // true

console.log(hasEvenNumber)

const allPosivtive = numbers.every((number) => number > 0); // true
console.log(allPosivtive)
