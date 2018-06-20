/*
Generator 函数执行后，返回一个遍历器对象。该对象本身也具有 Symbol.iterator属性，执行后返回自身。
 */
function* gen(){
    // some code
}

var g = gen();

g[Symbol.iterator]() = g;
// true

/*
上面代码中，gen是一个 Generator 函数，调用它会生成一个遍历器对象 g。
它的 Symbol.iterator属性，也是一个遍历器对象生成函数，执行后返回它自己。
 */




