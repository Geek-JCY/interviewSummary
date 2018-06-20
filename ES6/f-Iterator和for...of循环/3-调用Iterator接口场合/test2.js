//（3）yield*
// yield* 后面跟的是一个可遍历的解构，他会调用该结构的遍历器接口。
let generator = function* () {
    yield 1;
    yield* [2, 3, 4];
    yield 5;
}

var iterator = generator();

iterator.next() // { value: 1, done: false }
iterator.next() // { value: 2, done: false }
iterator.next() // { value: 3, done: false }
iterator.next() // { value: 4, done: false }
iterator.next() // { value: 5, done: false }
iterator.next() // { value: undefined, done: true }

//（4）其他场合
// 由于数组的遍历会调用遍历器接口，所以任何接受数组作为参数的场合，其实都调用了遍历器接口。
/*
    下面是一些例子:
        - for...of
        - Array.from()
        - Map(), Set(), WeakMap(), WeakSet()（比如 new Map([['a',1],['b',2]])）
        - Promise.all()
        - Promise.race()
 */ 



