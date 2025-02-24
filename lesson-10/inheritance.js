// const num1 = 1;

// console.log(num1.toString())

// Створення об'єкта "прототипу"
const animalPrototype = {
  speak() {
    console.log(`${this.name} says ${this.sound}`);
  }
};

// Створення об'єкта, який успадковує прототип
const dog = {
  name: "Dog",
  sound: "Woof",
  __proto__: animalPrototype,
  toString() {
    return 'Not so object';
  }
};
// dog.__proto__ = animalPrototype;

// // Виклик методу від успадкованого прототипу
console.log(animalPrototype.isPrototypeOf(dog));
console.log(dog.hasOwnProperty('speak'))
console.log(dog.toString())
// dog.speak(); // Dog says Woof


 // ------


//  class Animal {
//   constructor(name, sound) {
//     this.name = name;
//     this.sound = sound;
//   }

//   speak() {
//     console.log(`${this.name} says ${this.sound}`);
//   }
// }

// class Dog extends Animal {
//   constructor(name) {
//     super(name, "Woof");
//   }

//   speak() {
//     console.log(`${this.sound} is sayed by ${this.name}`);
//   }

//   sit() {
//     console.log(`${this.name} is sitting now!`)
//   }
// }

// const dog = new Dog("Dog");
// console.log(dog);
// dog.speak(); // Dog says Woof
// dog.sit(); 