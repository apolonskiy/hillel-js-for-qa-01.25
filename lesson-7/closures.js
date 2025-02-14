// function outer() {
//     let outerVar = 10;

//     function inner() {
//         console.log(outerVar);
//     }

//     return inner;
// }

// // closureFn = {
//  //       console.log(outerVar);
//   //  }

// let closureFn = outer();
// closureFn();

function multiplier(factor) {
    return function(x) {
        return x * factor;
    };
}

let doubleRes = multiplier(2)(5);
console.log(doubleRes);
// console.log(double(5)); // Виведе 10

const testEnv = process.env.PROD || 'dev'