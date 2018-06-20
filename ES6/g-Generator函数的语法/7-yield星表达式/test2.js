/*
这个就需要用到 yield*表达式，用来在一个 Generator 函数里面执行另一个 Generator 函数。
 */
function* foo() {
  yield 'a';
  yield 'b';
}

function* bar() {
    yield 'x';
    yield* foo(); // yield* 表达式
    yield 'y';
}

// 等同于
function* bar() {
    yield 'x';
    yield 'a';
    yield 'b';
    yield 'y';
}

// 等同于
function* bar() {
    yield 'x';
    for(let v of foo()){
        yield v;
    }
    yield 'y';
}

for(let v of bar()){
    console.log(v);
}
// "x"
// "a"
// "b"
// "y"


