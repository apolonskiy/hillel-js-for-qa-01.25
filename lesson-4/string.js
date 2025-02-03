// const arr = ['val1', 'val2', 'val3']; 

// console.log(arr[1])

// arr[1] = 'changed value'
// console.log(arr)

// const str1 = 'This!';

// console.log(str1[1]);
// console.log(str1.length);

// console.log(str1[str1.length - 1]);


    // let str2 = "Це\nрядок\nз переносами"; // Відбувається перенос на новий рядок після кожного слова
    // console.log(str2)
    // console.log(str2.length);

    // let str4 = "Ще один приклад: \uD83D\uDE00"; // Використання спеціальних символів (емоджі)
    // console.log(str4)
    // console.log(str4.length);

// let str = "Hello";

// str[0] = 'h';
// console.log( str[0] ); // не працює

// Concatenation

// OLD WAY

// const firstName = "John";
// const lastName = "Doe";
// const fullName = 'John' + " " + lastName; // Конкатенація
// console.log(fullName); // Виведе: "John Doe"

// console.log(firstName.concat(" ", lastName));

// String.concat(firstName, " ", lastName);


// New way

// const name = "Alice";
// const age = 30;

// let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
// console.log(greeting);


///_---------
const text = "JavaScript";
console.log(text.substring(4));


const originText = 'This is QA School QA';
const replacedText = originText.replace(/QA/gi, 'JS');
console.log(replacedText);