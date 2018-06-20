/*
上一章说过，任意一个对象的 Symbol.iterator方法，等于该对象的遍历器生成函数，调用该函数会返回该对象的一个遍历器对象。

由于 Generator 函数就是遍历器生成函数，因此可以把 Generator 赋值给对象的 Symbol.iterator属性，
从而使得该对象具有 Iterator 接口。
 */
var myIterable = {};
myIterable[Symbol.iterator] = function* (){
    yield 1;
    yield 2;
    yield 3;
}

[...myIterable] // [1, 2, 3]
/*
上面代码中，Generator 函数赋值给 Symbol.iterator属性，
从而使得 myIterable对象具有了 Iterator 接口，可以被...运算符遍历了。
 */




