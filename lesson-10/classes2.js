// class BankAccount {
//   constructor(balance) {
//     this._balance = balance; // Захищена властивість
//   }

//   // Захищений метод
//   _getBalance() {
//     return this._balance;
//   }
// }

// const bankAcc = new BankAccount(123);

// console.log(bankAcc._getBalance());

class Circle {
  #radius;
  constructor(radius) {
    this.#radius = radius;
  }

  get radius() {
    return this.#radius;
  }

  set radius(radius){
    this.#radius = radius;
  }

  changeRadius(radius){
    this.#radius = radius;
  }

  get area() {
    return Math.PI * this.#radius ** 2;
  }
}

const circle = new Circle(5);
console.log(circle.radius); // 5
circle.radius = 8;
console.log(circle.radius); // 5
circle.changeRadius(15)
console.log(circle.radius);
console.log(circle.area); // 78.53981633974483