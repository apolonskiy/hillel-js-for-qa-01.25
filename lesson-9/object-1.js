// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   "age of my friend": 30,
//   isStudent: false
// };
// console.log(person)

// const copyPerson = person;

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.constantValue = 'someValue'
// }

// const john = new Person("John", 30);
// // console.log(john);

// const person = {
//   name: {
//     first: "John",
//     last: "Doe"
//   },
//   "friends from school": ['Vasia', 'Petro'],
//   age: 30
// };

// console.log(person.age)
// console.log(person['friends from school'])

// console.log(person.name.first)


// console.log(person)

// person.name.first = 'Klint'
// console.log(person.Iryna)
// // const Iryna = 'New Value'
// person.Iryna = 'New Value'
// console.log(person); 
// const objCopy = {...person}
// delete person.name
// console.log(person);



// ----

// const age = 25;
// const name = "John"

// const person = { name, age };

// console.log(person.age); // 25
// console.log(person.name); // John

// const prop = "age";
// const value = [1,2,3]
// const person = {
//   [prop]: value
// };
// console.log(person.age); // 28

// ---- 

// const person = {
//   name: "John",
//   greet: function() {
//     console.log(this)
//     console.log(`Hello, my name is John`);
//   },

// };

// person.greet(); // "Hello, my name is John"

// --- 

// const person = {
//     name: "John",
//     greet: function() {
//         console.log(`Hello, my name is ${this.name}`);
//     },
//     friends: [],
//     addFriend(friendName){
//         this.friends.push(friendName)
//     }
// };

// person.greet(); // "Hello, my name is John"
// console.log(person.friends) // []
// person.addFriend("Stanislav");
// console.log(person.friends) // [ 'Stanislav' ]
// person.addFriend("Oleg");
// console.log(person.friends) // [ 'Stanislav' ]

