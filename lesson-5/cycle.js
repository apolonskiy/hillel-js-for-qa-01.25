// for (let i = 0; i < 3; i++) {
//   console.log(i)
// }

// console.log('\n\n')
// for (let i = 10; i > 0; i -= 2) { // i = i - 2
//   console.log(i)
// }

// // let j = 10

// // for (; j > 5; j -= 2) { // i = i - 2
// //   console.log(i)
// // }

// console.log('\n\n')
// let j = 10

// for (; j > 5; ) { // i = i - 2
//   console.log(j -= 2);
// }

// console.log('\n\n')
// const arr1 = ['apple', 'banana', 'orange'];
// for (let i = 0; i < arr1.length; i++){
//     // if(i % 2 === 0){
//     //     console.log(arr1[i]);
//     // } 

//     const isEven = i % 2;
//     if(!isEven){
//         console.log(arr1[i]);
//     } 
// }


/// WHILE

// let count = 0;
// while (count < 3) {
//     console.log(count); // Виведе числа 0, 1, 2
//     count++;
// }

// let isElementEnabled = false; // Some imaginary func
// let maxCount = 0;
// while(!isElementEnabled && maxCount < 10) {
//     // sleep(2000)
//     isElementEnabled = false;
//     maxCount++;
// }

// let count = 10;
// do {
//     console.log(count); // Виведе числа 0, 1, 2
//     count++;
// } while (count < 3)


// CONTINUE && BREAK

// for (let i = 0; i < 5; i++) {
//     // if (i === 2 || i === 3) {
//     //     continue; // пропустити ітерацію якщо значення 2
//     // }
//     if (i % 2) {
//         continue; // пропустити ітерацію якщо значення 2
//     }
//     console.log(i); // Виведе числа 0, 1, 3, 4
// }

// for (let i = 0; i < 5; i++) {
//     if (i === 3) {
//         break; // Завершити цикл при значенні 3
//     }
//     console.log(i); // Виведе числа 0, 1, 2
// }

// const nonFlatArr = [['apple', 'orange'], ['tomato', 'cucumber', 'plum', 'a', 'b', 'c']]

// for(let i = 0; i < nonFlatArr.length; i++){
//     for(let j = 0; j < nonFlatArr[i].length; j++) { 
//         console.log(nonFlatArr[i][j]);
//     }
// }

// for (let i = 1; i <= 9; i++) {
//     // if(i === 2) break;
// 	for (let j = 1; j <= 3; j++) {
// 		console.log(i, j);
// 	}
// }