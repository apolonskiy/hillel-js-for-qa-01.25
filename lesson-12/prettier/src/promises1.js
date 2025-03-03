const promiseExample = (decider) =>
    new Promise((resolve, reject) => {
        if (decider) {
            resolve({
                status: 'OK',
            });
        } else {
            reject({
                status: 'FAILURE',
            });
        }
    });

const user = {
    name: 'John',
    address: {
        city: '',
        zipcode: '10001',
    },
};

const arrow = (arg) => arg;

// const result = promiseExample(true)
//     .then(res => {return new Promise(resolve => resolve({firstPromise: res}))})
//     .then(result2 => {console.log(result2)})
//     .catch(err => {console.log(err)})
// console.log(result)
// promiseExample(false)
//     .then(res => {console.log(res)})
//     .catch(err => {console.log(err)})
//     .finally(() => {
//         console.log('finally');
//     })
// console.log(promise2);

// const promiseAll1 = promiseExample(true);
// const promiseAllFail = promiseExample(false);
// const promiseAll2 = promiseExample(true);

// Promise.all([promiseAll1, promiseAllFail, promiseAll2])
//     .then(res => {console.log(res)})
//     .catch(err => {console.log(err)});

// Promise.allSettled([promiseAll1, promiseAllFail, promiseAll2])
//     .then(res => {console.log(res)})
//     // .catch(err => {console.log(err)});

const getDelay = (from, to) =>
    Math.floor(Math.random() * (to - from + 1)) + from;

const promiseA = new Promise((resolve) => {
    const time = getDelay(100, 500);
    console.log('First', time);
    setTimeout(resolve, time, 'First');
});
const promiseB = new Promise((resolve, reject) => {
    const time = getDelay(100, 500);
    console.log('Second', time);
    setTimeout(reject, time, 'Second');
});
const promiseC = new Promise((resolve) => {
    const time = getDelay(100, 500);
    console.log('Third', time);
    setTimeout(resolve, time, 'Third');
});

Promise.race([promiseA, promiseB, promiseC])
    .then((x) => console.log('Fulfilled: ', x))
    .catch((x) => console.log('Rejected: ', x));

Promise.any([promiseA, promiseB, promiseC])
    .then((x) => console.log('Fulfilled: ', x))
    .catch((x) => console.log('Rejected: ', x));
