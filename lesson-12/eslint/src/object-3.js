// const person = {
//   name: 'John',
//   age: 30,
//   city: 'New York'
// };

// for (let key in person) {
//   console.log(key + ': ' + person[key]);
// }

// for (let value of person) {
//   console.log(value);
// }

// const arr = [1,2,3]

// for(const key in arr){
//     console.log(key, arr[key])
// }

// ---

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Duke";

// console.log(dog);// {name: 'Duke'}
// console.log(dog.name);// 'Duke'
// console.log(dog.legs);// 4

// console.log("name" in dog);// true
// console.log("legs" in dog);// true

// // Повертає true тільки для власних властивостей
// console.log(dog.hasOwnProperty("name"));// true
// console.log(dog.hasOwnProperty("legs"));// false

// for (let key in dog) {
//   // Перевіряємо, чи властивість належить самому об'єкту dog
//   if (dog.hasOwnProperty(key)) {
//     console.log(`Key: ${key}, Value: ${dog[key]}`);
//   }
// }

// const objKeys = Object.keys(dog);
// console.log(objKeys)
// for(const key of Object.keys(dog)){
//     console.log(`key: ${key} has value ${dog[key]}`)
// }

// const person = {
//   name: "John",
//   age: 30,
//   isStudent: false
// };

// const values = Object.values(person);
// console.log(values); // ["John", 30, false]

// const entries = Object.entries(person);
// console.log(entries);
// [["name", "John"], ["age", 30], ["isStudent", false]]

/// -----

const users = {
  user1: {
    name: 'John',
    address: {
      city: 'Ney York',
      zipcode: '10001',
    },
  },
  user2: {
    name: 'Mark',
    address: {
      city: 'Boston',
      zipcode: '456456',
    },
  },
};
const usersArr = Object.keys(users);

for (const user of usersArr) {
  console.log(users[user].address.city);
}
