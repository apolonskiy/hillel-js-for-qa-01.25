// const person = {
//   name: "John",
//   age: 30,
//   gender: "male"
// };

// const name = 'Other Name'

// const { name: personName, age, gender = 'female' } = person;

// console.log(personName); // "John"
// console.log(age); // 30
// console.log(gender); // "male"

// // ---


// const people = [
//   { name: "John", age: 30 },
//   { name: "Jane", age: 25 }
// ];

// for (const { name, age } of people) {
//   console.log(`${name} is ${age} years old`);
// }

// ---

// const person = {name: 'John', age: 30, gender: 'male'};

// function printUserInfo({name, age, email = 'unknown'}) {
// 	console.log(`User "${name}" is ${age} y.o. and has "${email}" email address.`);
// }

// printUserInfo(person);

// ---

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

const { name, address: { city, country, apartment: { number } } } = person;

console.log(name); // "John"
console.log(city); // "New York"
console.log(country); // "USA"
// console.log(address); // "USA"
console.log(number); // "USA"