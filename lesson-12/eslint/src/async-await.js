const asyncFunc = async (arg) => {
  throw new Error('ASYNC ERROR');
//   return arg;
};

async function classicAsyncFunc(arg) {
  return arg;
}

// await asyncFunc('qwe')

asyncFunc('qwe')
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.message);
  });

// console.log()
// console.log(classicAsyncFunc('asd'))

const asyncCaller = async () => {
  try {
    console.log(await asyncFunc('some value'));
  } catch (e) {
    console.log(e.message);
  }

  const secondValue = await classicAsyncFunc('BBB');
  console.log(secondValue);
};

asyncCaller();

// test('Test name', async () => {
//     await callApiBlaBla()
// })
