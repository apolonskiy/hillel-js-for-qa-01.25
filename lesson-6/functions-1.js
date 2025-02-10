// declaredFunc('BeforeInit')


function declaredFunc(arg1, someOtherArg) {
    if(!someOtherArg) {
        console.log(`${arg1} and ${someOtherArg}`)
        console.log('End of func')  
    } else {
        console.log('2nd arg was truthy')
    }
}
console.log(declaredFunc.name)
// console.log('beforeCall');
// declaredFunc('textArg', true)
// console.log('beforeCall');


// ------

const funcExpression = function() {
    console.log('simple expression func')
};
// console.log(funcExpression.name)

funcExpression()

// -------


const arrowFunc = (num1, num2) => {
    return num1 + num2;
}
// console.log(arrowFunc.name)

// const mathRes = arrowFunc(1,3);
// console.log(mathRes)
// console.log(arrowFunc(5,6))


const arrowFuncShort = (x, y) => x > 0 & y > 0 ? x * y : NaN;

// console.log(arrowFuncShort(3,5))