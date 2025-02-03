// console.log(40 + 2); // 42 - операція додавання 
// console.log(42 - 2); // 40 - операція віднімання 
// console.log(2 * 2); // 4 - операція множення
// console.log(4 / 2); // 2 - операція ділення

// console.log(40 * 'a');

// console.log(40 + Number('4') - 8);

// /// -------

// console.log( 5 % 2 ); // 1 — залишок від ділення 5 на 2
// console.log( 2 % 2 ); // 0 — залишок від ділення 2 на 2

// // -----

// let counter = 2;
// console.log(counter++); // Інкремент-працює так само, як counter = counter + 1, але запис коротше
// console.log(counter); // 3
// console.log('\n')
// console.log(++counter); 
// console.log(counter);

// counter--; // Декремент-працює так само, як counter = counter - 1, але запис коротше
// console.log(counter); // 3


// COMPARISON 

// console.log(3 < 4);
// console.log(3 > 4);

// console.log(3 >= 4);

// console.log(3 == 4);
// console.log(3 != 4);

// console.log(3 == '3');
// console.log(3 === '3');

// console.log( '2' > 1 );
// console.log('A'.charCodeAt(0));
// console.log( 'aa' > 'ab' ); // compares chareCodes in decimal table https://en.wikipedia.org/wiki/List_of_Unicode_characters

// console.log( 'a' < 1 ); // DO NOT DO THIS< always NaN results in false

// console.log(Boolean(''))
// console.log('' == false);
// console.log('' === false);

// console.log('q' == false);

// console.log(true == 1); // true  1 === 1
// console.log(false == 0); // true 0 === 0

// console.log('' == 0);

// console.log(undefined == '')

// console.log(!!undefined == '');
// console.log(Boolean(undefined) == '');
// console.log(!true)

// const someBool = true;

// if(someBool == false){

// }

///----------- OR


// console.log(true || true); // 1 + 1 = 2
// console.log(false || true); // 0 + 1 = 1
// console.log(true || false); // true
// console.log(false || false); // 0 + 0 = 0

// console.log(1 || 0); // 1 (1 є першим правдивим значенням)
// console.log(null || 1); // 1 (1 є першим правдивим значенням)
// console.log(null || 0 || 1); // 1 (перше правдиве значення)
// console.log(undefined || null || 0); // 0 (усі хибні, повертається останнє значення)

// ---- AND
// console.log(true && true); // 1 * 1 = 1
// console.log(false && true); // 0 * 1 = 0
// console.log(true && false); // 1 * 0 = 0
// console.log(false && false); // 0 * 0 = 0

// const someAssertion1 = someFunct1();
// const somesAssertion2 = isElementVisible1();

// if(someAssertion1 && somesAssertion2){
//     // some code
// } else {
//     // some other code
// }

// console.log(1 && 2); // 2
// console.log(null && 42); // null
// console.log(0 && "test"); // 0
// console.log(1 && 2 && null && 3); // null
// console.log(1 && 2 && 3); // 3, останнє

// Conditional value
// ||
// const someValue1 = 'not empty';
// const optionalValue = someValue1 || 'Some Fallback'
// console.log(optionalValue);

// ??
// const someValue1 = 0;
// const optionalValue = someValue1 ?? 10;
// console.log(optionalValue);




// --------------
// let num = 42;
// num += 5;
// num = num + 3;
// console.log(num)

// Teternary operator

// 'condition' ? truthy option (result) : falsy option (result)
function returnValue(arg){
    return arg;
}
const staticValue = 5;
const receivedValue = returnValue(3)
const ternaryValue = receivedValue < staticValue ? 'GOOOD' : 'BAAAAD';
console.log(ternaryValue);
let conditionalValue;
if(receivedValue < staticValue) {
    conditionalValue = 'Truthy';
} else {
    conditionalValue = 'Falsy';
}