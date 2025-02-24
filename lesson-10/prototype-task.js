// Rewrite code so that when we feed one hamster, second one does not get his food pushed.

const hamster = {
    food: [],
    feed(food) {
        this.food.push(food);
    }
}

const jerry = {
    name: 'Jerry',
    __proto__: hamster
}

const tom = {
    name: 'Tom',
    __proto__: hamster
}

jerry.feed('corn');
console.log(jerry.food); // ['corn'] - OK
console.log(tom.food);// ['corn'] - wrong, must be empty