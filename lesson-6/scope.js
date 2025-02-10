// let userName = 'Anna';

// function showMessage() {
// 	userName = 'Alex';
// 	console.log(`Hello ${userName}`);
// }

// console.log(userName) // Anna

// showMessage(); // Hello, Alex

// console.log(userName) // Alex

// ------- 

// // showMessage(fN);

// // let fN = 'Anna'

// function showMessage() {
//   const message = "Hello"; // локальна змінна
//   console.log( message );
// }

// showMessage(); // Hello

// console.log( message ); // <-- Помилка! Змінна недоступна поза функцією

// ------------

const userName = 'Alex';

function showMessage() {
 const userName = 'Anna'; // оголошення локальної змінної

 const message = 'Hello, ' + userName;
  console.log(message); // Hello Anna
}

console.log( userName ); // Alex перед викликом функції showMessage

showMessage();

console.log( userName ); // Alex функція не змінила глобальну змінну