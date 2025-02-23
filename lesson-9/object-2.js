const user = {
    name: "John",
    address: {
        city: '',
        zipcode: "10001"
    }
};

// Без оператора опціонального доступу
const city = user && user.address && user.address.city;
console.log(city)

// З оператором опціонального доступу
const cityOptional = user?.address?.city;
expect(user?.address?.city).toEqual("New York");
console.log(cityOptional)


// console.log(city); // "New York"
// console.log(cityOptional); // "New York"

// // А тепер спробуємо звернутися до неіснуючої властивості
// console.log(user.phones.mobile); // Помилка : TypeError: Cannot read properties of undefined (reading 'mobile')
// console.log(user.phones?.mobile); // undefined


// --- 
const someVar = process.env.SOME_VAR || 'some_default_value'
const someVarCoalescing = process.env.SOME_VAR ?? 'some_default_value' // ONLY Null or Undefined will be ignored
// 0, false, NaN, '' - valid in heve and will be assigend to someVarCoalescing