const people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Mike", age: 40 }
];

console.log(people[0]); // { name: "John", age: 30 }
console.log(people[1].name); // "Jane"

for (const person of people) {
  console.log(`${person.name} is ${person.age} years old`);
}

// const extendedPeople = people.map((person, index) => {
//     person.name = `${index % 2 === 0 ? 'Mr. ': 'Mrs. '}${person.name}`
//     return {
//         name: person.name,
//         age: person.age,
//         gender: index % 2 === 0 ? 'male' : 'female'
//     }
// })
// const extendedPeople = people.map((person, index) => (
//     {
//         name: person.name,
//         age: person.age,
//         gender: index % 2 === 0 ? 'male' : 'female'
//     }
// ))

const extendedPeople = people.map(({name, age}, index) => {
    name = `${index % 2 === 0 ? 'Mr. ': 'Mrs. '}${name}`
    return {
        name,
        age,
        gender: index % 2 === 0 ? 'male' : 'female'
    }
})
console.log(extendedPeople)
console.log(people)