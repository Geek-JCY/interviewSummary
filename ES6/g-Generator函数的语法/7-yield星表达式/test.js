/*
如果在 Generator 函数内部，调用另一个 Generator 函数，默认情况下是没有效果的。
 */
function* foo() {
    yield 'a';
    yield 'b';
}

function* bar() {
    yield 'x';
    foo();
    yield 'y';
}

for (let v of bar()) {
    console.log(v);
}
// x
// y

/*
上面代码中，foo和 bar都是 Generator 函数，在 bar里面调用 foo，是不会有效果的。
 */



