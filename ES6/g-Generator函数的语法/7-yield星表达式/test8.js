/*
再看一个例子。
 */
function* genFuncWithReturn() {
    yield 'a';
    yield 'b';
    return 'The result';
}

function* logReturned(genObj) {
    let result = yield* genObj;
    console.log(result);
}

[...logReturned(genFuncWithReturn())]
// The Result
// 值为 ['a', 'b']

/*
上面代码中，存在两次遍历。
第一次是扩展运算符遍历函数 logReturned返回的遍历器对象，
第二次是 yield*语句遍历函数 genFuncWithReturn返回的遍历器对象。
这两次遍历的效果是叠加的，最终表现为扩展运算符遍历函数 genFuncWithReturn返回的遍历器对象。
所以，最后的数据表达式得到的值等于[ 'a', 'b' ]。
但是，函数 genFuncWithReturn的 return语句的返回值 The result，
会返回给函数 logReturned内部的 result变量，因此会有终端输出。
 */



