// const fs = require('fs');
const camelCaseOption = 'test';
const camelCAseOption = 'test';
// camelCaseOption = 'test2'; -- DO NOT DO THIS;

let GlobalVariable = 'Some var';
let GLOBAL_VARIABLE = ''

let regularVariable = 2;
console.log(regularVariable);
regularVariable = false;
console.log(regularVariable);

const num1 = 5;
const num2 = num1 + 5;

console.log(Boolean(1));
console.log(Boolean(0));
//  () - признак виклику методу

console.log(1 / 0); // Infinity
console.log(Infinity); // Infinity
console.log(typeof Infinity); // Infinity

console.log(NaN) 
console.log(typeof NaN) 

console.log('NOT A NUMBER>>> ',125 / 'a');

const str1 = 'string';
console.log(str1.length)

const num = 5;
console.log(typeof num)
console.log(typeof(num.toString()))
console.log(isNaN(125 / 'a'))

let var1 = 123; let var2 = 124;

const let1 = 'let1';
let2 = 'let2';
const let3 = 'let3';
let2 = 'SOME OTHER LET'

console.log(let1, let2, let3);


console.log(isNaN(123+2));

let aaa, bbb, ccc;
aaa = ccc = 'false'
bbb = false

console.log(aaa,bbb,ccc);


// --------------------- do not use unless you really need to
var someVar = 123;
console.log(someVar);
someVar = true
console.log(someVar);

// console.log(fs.readFileSync('./index.js').toString());