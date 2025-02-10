// // параметри
// function greet(name) {
// 	console.log(`Hello, ${name}!`);
//     name = 'otherValue'
//     console.log(`Hello, ${name}!`);
// }

// // аргумент 
// greet('Anna'); // виведе Hello, Anna!

// const devide = (x, y) => {
//     if(typeof x !== 'number' || typeof y !== 'number'){
//         throw new Error('Used argument is of invalid type!');
//     }
//     if(x <= 0 || y <= 0) {
//         throw new Error('Divigin by 0 is not allowed!')
//     }
//     return x / y;
// }

// console.log(devide(1, 1))

// // -----

// const typeName = (firstName, lastName, shouldTypeLastName = false) => 
//     shouldTypeLastName ? 
//         console.log(`${firstName} ${lastName}`) : 
//         console.log(firstName);
    
// typeName('Andrii', 'Polonskyi');

// const typeNameExpression = function(firstName, lastName, shouldTypeLastName = false) {
//     if(shouldTypeLastName) 
//         return console.log(`${firstName} ${lastName}`);
//     // Alternative for this
//     // if(shouldTypeLastName) {
//     //     return console.log(`${firstName} ${lastName}`); 
//     // } 
//     return console.log(firstName)
// }
// typeNameExpression('Other', 'Name')


// ----- REST

// const restFunc1 = (arg1, arg2, ...someRest) => {
//     console.log(arg1, arg2);
//     console.log(someRest);
//     for (const unknownElem of someRest){
//         console.log(unknownElem);
//     }
//     for (const unknownKey in someRest){
//         console.log(unknownKey);
//     }
// }

// restFunc1('srt1', 5, false, 'qwe', undefined);

// const restFund2 = (...rest) => console.log(rest);
// restFund2(...[1,2,3])
// console.log([1,2,3])
// console.log(...[1,2,3])


// Arguments

// function sum() {
// 	let total = 0;

//     console.log(arguments)
//     for (const arg of arguments){
//         console.log(arg);
//     }
// 	for (let i = 0; i < arguments.length; i++) {
// 		total += arguments[i];
// 	}

// 	return total;
// }

// console.log(sum(2, 4, 6)); // виведе 12

