function divideNumbers(a, b) {
  if (b === 0) {
    throw Error("Ділення на нуль недопустиме!");
  }
  return a / b;
}


try {
  const result = divideNumbers(10, 1);
  console.log(result);  // Цей рядок не буде виконано через throw вище
} catch (error) {
  console.error("Сталася помилка:", error.message);
  console.error("Сталася помилка:", error.name);
  console.error("Сталася помилка:", error.stack);
} finally {
    console.log('ALWAYS!')
}

