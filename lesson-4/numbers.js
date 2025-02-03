const x = 0.1;
const y = 0.2;
const sum = x + y;

console.log(sum); // Виведе: 0.30000000000000004 (не точне значення)
// console.log(0.1 + 0.2 === 0.3);// false

console.log(sum * 100);
const roundNum = Math.round(sum * 100)/100
console.log(roundNum);

console.log(sum.toFixed(2))

/// -----
console.log(Math.PI, Math.E, Math.SQRT2);

// Math.random()  [0, 1);
console.log(Math.random());
const randomNum = Math.floor(Math.random() * 11);
console.log(randomNum);
console.log(10/0);
