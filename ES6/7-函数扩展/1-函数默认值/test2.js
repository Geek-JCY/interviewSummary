/*
    1. 参数变量是默认声明的，所以不能用let或const再次声明。
 */
function foo(x = 5) {
    let x =1;   // error
    const x = 2;    // error
}

/*
    2. 使用参数默认值时，函数不能有同名参数
 */
// 不报错
function foo(x, x, y) {
  // ...
}

// 报错
function foo(x, x, y = 1) {
  // ...
}
// SyntaxError: Duplicate parameter name not allowed in this context