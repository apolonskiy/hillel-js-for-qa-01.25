// const numbers = [1, 2, 3];
// const newNumbers = [ 4, 5, ...numbers];

// console.log(newNumbers); // [1, 2, 3, 4, 5]

// // ---
// const person = { name: "John", age: 30 };
// const newPerson = {  gender: "male", name: 'Vasia', ...person};

// console.log(newPerson);
// // { name: "John", age: 30, gender: "male" }

/// ---


// const numbers = [1, 2, 3];
// const newNumbers = [...numbers, 4, 5];

// function add(...nums) {
//   return nums.reduce((total, num) => total + num, 0);
// }

// console.log(add(...newNumbers)); // 15

// --- OBJECT COPY

// const originalObject = { name: 'John', age: 30 };
// const copiedObject = { ...originalObject };
// copiedObject.name = 'Kevin'
// console.log(originalObject);

// console.log(copiedObject);


const person = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
    apartment: {
        floor: 4,
        number: 432
    }
  }
};
// const copiedPerson = JSON.parse(JSON.stringify(person));
const copiedPerson = structuredClone(person);

copiedPerson.address.city = 'Boston'
console.log(person)
console.log(copiedPerson)