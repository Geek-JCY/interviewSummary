/*
yeild 错误应用 三：

yield表达式如果用在另一个表达式之中，必须放在圆括号里面。
 */
function* demo(){
    console.log('Hello' + yield);       // SyntaxError: Unexpected identifier

    console.log('Hello' + yield 123);   // SyntaxError: Unexpected identifier

    console.log('Hello' + (yield));     // OK

    console.log('Hello' + (yield 123)); // OK
}

/*
yield表达式用作函数参数 或 放在赋值表达式的右边，可以不加括号。
 */
function* demo(){
    foo(yield 'a', yield 'b');  // OK (用作参数)

    let input =  yield;         // OK (放在函数表达式的右边)
}



