/*
再看一个通过 next方法的参数，向 Generator 函数内部输入值的例子。
 */
function* dataConsumer() {
    console.log('Started');
    console.log(`1. ${yield}`);
    console.log(`2. ${yield}`);
    return 'result';
}

let genObj = dataConsumer();

genObj.next(); // Started
genObj.next('a'); // 1. a
genObj.next('b'); // 2. b

/*
上面代码是一个很直观的例子，每次通过next方法向 Generator 函数输入值，然后打印出来。
 */
/*
如果想要第一次调用next方法时，就能够输入值，可以在 Generator 函数外面再包一层。
 */
function wrapper(generatorFunction){
    return function (...args) {
        let generatorObject = generatorFunction(...arg);
        generatorObject.next();
        return generatorObject;
    }
}

const wrapped = wrapper(function* (){
    console.log(`First input: ${yield}`);
    return 'DONE';
});

wrapped().next('hello!');
// First input: hello!



