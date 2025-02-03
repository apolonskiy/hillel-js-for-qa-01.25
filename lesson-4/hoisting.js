//Scope and Hoisting

// Все що не в {} фігурних дужках - це глобальна область видимості (не обмежена)

// let letter1 = 'a';

// function printLetter() {
//     console.log(letter1);
//     letter1 = 'b'
// }
// printLetter();
// console.log(letter1);

// все що визначено в {} - обмежено своєю областю. Або функціональною, або блочною.

// function printNumber() {
//     const num1 = 4;
//     console.log(num1);
// }

// printNumber()
// console.log(num1)
// num1 = 5

// умови як приклад блоку коду

// if(3 < 5) {
//     const bool1 = true;
//     console.log(bool1)
// } else {
//     let bool2 = false;
//     console.log(bool2)
// }

// console.log(bool1);





// ----- VAR -----

// functional - same as let and const

// function printNumber() {
//     var num1 = 4;
//     console.log(num1);
// }

// printNumber()
// console.log(num1)
// num1 = 5

// if(3 < 5) {
//     var bool1 = true;
//     console.log(bool1)
// } else {
//     var bool2 = false;
//     console.log(bool2)
// }

// console.log(bool1);




// ______________ HOISTING (підняття по файлу) _______________


// console.log(abc);
// var abc = 'abc';
// console.log(abc);

// ----------

// someFunc();

// function someFunc() {
//     console.log('it works!')
// }

//-----------

// funcExpression()

// const funcExpression = function () {
//     console.log('does it work?')
// }

// ----------

// arrowFunc();

// const arrowFunc = () => console.log('also does not work!')