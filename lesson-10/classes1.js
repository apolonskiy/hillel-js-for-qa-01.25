function PersonConstructor(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

class Person {
  proeprtyOne = 123;
  #propertyTwo = 'SomeSring'  
  propertyThree = null
  #age = 111;
  constructor(name, age) {
    this.name = name;
    console.log(this.#age);
    this.#age = age;
  }
  #oldPerson = new PersonConstructor('OldGuy', 99)

  greetClassic = function() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.#age} years old.`);
  }

  #oldPersonGreet(){
    console.log(this.#oldPerson.name, 'also here')
  }
  greet() {
    this.#oldPersonGreet();
    console.log(`Hello, my name is ${this.name} and I'm ${this.#age} years old.`);
  }
}

const andrii = new Person('Andrii', 29);
const andriiOld = new PersonConstructor('Andrii2', 92)

andrii.greet();
andrii.oldPersonGreet();
// console.log(andrii.);
// console.log(andriiOld)