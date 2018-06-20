/*
ES6 的有些数据结构原生具备 Iterator 接口（比如数组），即不用任何处理，就可以被 for...of循环遍历。
原因在于，这些数据结构原生部署了Symbol.iterator属性（详见下文），另外一些数据结构没有（比如对象）。
凡是部署了 Symbol.iterator属性的数据结构，就称为部署了遍历器接口。
调用这个接口，就会返回一个遍历器对象。
 */
/*
原生具备 Iterator 接口的数据结构如下。

    - Array
    - Map
    - Set
    - String
    - TypedArray
    - 函数的 arguments 对象
    - NodeList 对象
 */

/*
下面的例子是数组的 Symbol.iterator属性。
 */
let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();

iter.next() // { value: 'a', done: false }
iter.next() // { value: 'b', done: false }
iter.next() // { value: 'c', done: false }
iter.next() // { value: undefined, done: true }
/*
上面代码中，变量 arr是一个数组，原生就具有遍历器接口，部署在 arr的 Symbol.iterator属性上面。
所以，调用这个属性，就得到遍历器对象。
 */



