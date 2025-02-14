const person = {
  name: 'Alice',
  greet: function() {
    console.log(`Hello, ${person.name}!`);
  }
};

// person.greet(); // Виведе "Hello, Alice!"

function Person(name) {
  this.name = name;
  this.greet = function() {
    console.log(`Hello, ${this.name}!`);
  };
}

// const anna = new Person('Anna');
// anna.greet(); // Виведе "Hello, Alice!"

// const obj = {
//   name: 'Alice',
//   sayHello: () => {
//     console.log(`Hello, ${this.name}!`);
//   }
// };

// obj.sayHello(); // Виведе "Hello, undefined!"

// Arrrow func takes `this` from one layer above current parrent

// const objFolded = {
//   name: 'Freddy',
//   innerObj: {
//     name: 'John',
//     sayHello: function() {
//         setTimeout(() => { 
//             console.log(this);
//             return console.log(`Hello, ${this.name}!`)
//         }, 1000);
//     },
//     alternativeShortFunc(someArg) {

//     },
//   }
// };

// console.log(this);
// objFolded.innerObj.sayHello(); // Виведе "Hello, undefined!"


// function greet() {
// console.log(this)
//   console.log(`Hello, ${this.name}!`);
// }
// greet();

// const person = { name: 'Alice' };
// greet.call(person); // Виведе: Hello, Alice!

// function greet(timesOfDay, weather) {
//   console.log(`Good ${timesOfDay}, ${this.name}! It's ${weather} today.`);
// }

// const person = { name: 'Bob' };
// greet.apply(person, ['morning', 'sunny']);

// function greet() {
//   console.log(`Hi, I'm ${this.name}`);
// }

// const person = { name: 'Charlie' };
// const greetPerson = greet.bind(person);
// greetPerson();