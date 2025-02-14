// function iterator (array) {
//   let nextIndex = 0
//   return {
//     next: function () {
//       if (nextIndex < array.length) {
//         return {
//           value: array[nextIndex++],
//           done: false
//         }
//       }
//       return {
//         value: undefined,
//         done: true
//       }
//     }
//   }
// }

// const array = ['banana', 'apple', 'orange', 'kiwi', 'cherry']
// const arrayIterator = iterator(array)

// console.log(arrayIterator.next());
// console.log(arrayIterator.next());
// console.log(arrayIterator.next());
// console.log(arrayIterator.next());
// console.log(arrayIterator.next());
// console.log(arrayIterator.next());

// const array = ['banana', 'apple', 'orange', 'kiwi', 'cherry']
// const arrayIterator = array[Symbol.iterator]()

// console.log(arrayIterator.next()) // { value: 'banana', done: false }
// console.log(arrayIterator.next()) // { value: 'apple', done: false }
// console.log(arrayIterator.next()) // { value: 'orange', done: false }
// console.log(arrayIterator.next()) // { value: 'kiwi', done: false }
// console.log(arrayIterator.next()) // { value: 'cherry', done: false }
// console.log(arrayIterator.next()) // { value: undefined, done: true }



// ---------


function* myGenerator () {
  yield 1
  yield 2
  yield 3
}

const generator = myGenerator()
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());