/*
Generator 函数返回的遍历器对象，还有一个 return方法，可以返回给定的值，并且终结遍历 Generator 函数。
 */
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

var g = gen();

g.next();                     // { value: 1, done: false }
// g.return('foo');           // { value: "foo", done: true }
console.log( g.return() );    // { value: undefined, done: true }
g.next();                     // { value: undefined, done: true }
console.log( g.next(33) );    // { value: undefined, done: true }
/*
上面代码中，遍历器对象 g调用 return方法后，返回值的 value属性就是 return方法的参数 foo。
并且，Generator 函数的遍历就终止了，返回值的 done属性为 true，以后再调用 next方法，done 属性总是返回true。

如果 return方法调用时，不提供参数，则返回值的value属性为 undefined。
 */