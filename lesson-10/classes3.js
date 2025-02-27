// class MathHelper {
//   static quote = 'Math is great';
//   static square(number) {
//     return number * number;
//   }
// }

// const instanceMath = new MathHelper();
// console.log(instanceMath.quote)

// console.log(MathHelper.square(5)); // 25
// console.log(MathHelper.quote)

class PersonGetSet {
    constructor(gender, age) {
        this.gender = gender;
        this._age = age;
    }

    get gender() {
        return this._gender
    }

    set gender(gender) {
        if(gender !== 'male' && gender !== 'female') {
            throw new Error('invalid gender input.')
        }
        this._gender = gender
    }

    printPersonInfo(){
        console.log(`${this.gender} and ${this._age}`)
    }
}

class ChildPerson extends PersonGetSet {
    constructor(name, gender, age){
        super(gender, age)
        this._name = name
    }

    printPersonInfo(){
        super.printPersonInfo()
        console.log(`My name is ${this._name}`)
    }
}

const person1 = new ChildPerson('Mike', 'male', 43);
person1.printPersonInfo()
// console.log(person1)