const age = 19;
const gender = 'male';
const nationality = 'ua'

const isStringEmtpy = (bool) => bool ? '' : 'not empty';

// if (age >=18) {
//     console.log('Person is adult.')
// } else if (age >= 14 && age < 18) {
//     console.log('Person is teenager.')
// } else {
//     console.log('Person it not old enough!')
// }

const isPersonTeenager = age >= 14 && age < 18;
const isPersonAdult = age >= 18;
const ageCheck = isPersonTeenager || isPersonAdult

if (ageCheck) {
    console.log('Person is teenager or older.')
} else {
    console.log('Person it not old enough!')
}

// if(ageCheck) {
//     if(gender === 'male'){
//         if(nationality === 'ua'){

//         } else {

//         }
//     } else {
//         if(nationality === 'ua'){

//         } else {

//         }
//     }
// } else {

// }

if(ageCheck) {
    if(gender === 'male' && nationality === 'ua'){
        // some code
    } else if(gender === 'female' && nationality === 'ua') {
        // some code
    } else if(gender === 'male' && nationality !== 'ua') {
        // some code
    } else if( gender === 'female' && nationality !== 'ua') {
        // some code
    }
}



// ---------------- SWITCH --------------

// const fruit = 'banana';

// switch (fruit) {
//     case 'apple':
//         console.log('Regular Apple')
//         break;
//     case 'banana':
//         console.log('Tropical Banana')
//         break;
//     case 'orange':
//         console.log('Turkish Orange')
//         break;
//     default:
//         console.log('no fruit match!')
// }

// const fruits = ['apple', 'banana', 'orange']
// const fruits2 = ['apple', 'banana', 'orange']
// console.log(fruits === fruits2)

const fruit = 'orange';

switch (fruit) {
    case 'apple':
        console.log('Regular Apple')
        break;
    case 'banana':
    case 'lichi':
    case 'orange':
        console.log('Tropical!')
        break;
    default:
        console.log('no fruit match!')
}

const age2 = 15

// if(ageCheck){
    switch (true) {
    case age2 > 18:
        console.log('Особа повнолітня');
        break;
    case age2 > 14:
        console.log('Особа неповнолітня');
        break;
    }
// }
