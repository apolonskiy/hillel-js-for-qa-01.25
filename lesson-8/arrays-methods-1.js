const sentence = "Це-речення-має-кілька слів";
const words = sentence.split("-");
console.log(words); // ["Це", "речення", "має", "кілька", "слів"]

// ---- 
const fruits = ["яблуко", "банан", "полуниця"];
const fruitString = fruits.join(", ");
console.log(fruitString); // "яблуко, банан, полуниця"

// ---

const numbers = [10, 30, 30, 30, 50];
const index = numbers.indexOf(60);
console.log(index); // 2

// --- 

const colors = ["червоний", "зелений", "синій"];
const hasGreen = colors.includes("зелений");
console.log(hasGreen); // true

// -- 

const stack = [1, 2];
const newLenght = stack.push(3, 4, 'ffff');
console.log(stack); // [1, 2, 3, 4]
console.log(newLenght); 

// ---
console.log('\n')
const stack1 = [1, 2, 3, 4];
const poppedValue = stack1.pop();
console.log(poppedValue); // 4
console.log(stack1); // [1, 2, 3]

// -- 
console.log('\n')
const queue = ["A", "B", "C"];
const shiftedValue = queue.shift();
console.log(shiftedValue); // "A"
console.log(queue); // ["B", "C"]

// --
console.log('\n')
const queue1 = ["B", "C"];
queue1.unshift("A", 3, 5);
console.log(queue1); // ["A", "B", "C"]