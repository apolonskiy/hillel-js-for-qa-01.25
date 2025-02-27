// function saySmth(phrase, name) {
//   console.log(`${phrase} ${name}!`);
// }

// console.log('Sync Before');
// setTimeout(saySmth, 0, 'Hello', 'John');
// console.log('Sync After');

// function saySmth(phrase, name) {
//   console.log(`${phrase} ${name}!`);
// }

// const timerId = setTimeout(saySmth, 1000, 'Hello', 'John');

// // якщо ми вирішимо скасувати виконання функції, ми викликаємо clearTimeout з ідентифікатором таймера
// clearTimeout(timerId);

function saySmth(phrase, name) {
  console.log(`${phrase} ${name}!`);
}

// Запускаємо функцію saySmth кожну секунду (кожні 1000 мілісекунд)
console.log('Sync Before');
setInterval(saySmth, 1000, 'Hello', 'John');
console.log('Sync After');
