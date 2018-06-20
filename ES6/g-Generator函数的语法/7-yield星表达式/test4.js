/*
从语法角度看，如果 yield表达式后面跟的是一个遍历器对象，
需要在 yield表达式后面加上星号，表明它返回的是一个遍历器对象。这被称为 yield*表达式。
 */
let delegatedIterator = (function* () {
    yield 'Hello!';
    yield 'Bye!';
}());

let delegatingIterator = (function* (){
    yield 'Greetings!';
    yield* delegatedIterator;
    yield 'Ok, bye.';
}());

for(let value of delegatingIterator){
    console.log(value);
}

// Greetings!
// Hello!
// Bye!
// Ok, bye.

/*
上面代码中，delegatingIterator是代理者，delegatedIterator是被代理者。
由于 yield* delegatedIterator语句得到的值，是一个遍历器，所以要用星号表示。
运行结果就是使用一个遍历器，遍历了多个 Generator 函数，有递归的效果。
 */



