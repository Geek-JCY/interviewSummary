/*
Generator 函数也不能跟new命令一起用，会报错。
 */
function* F() {
    yield this.x = 2;
    yield this.y = 3;
}

new F();
// TypeError: F is not a constructor
/*
上面代码中，new命令跟构造函数F一起使用，结果报错，因为F不是构造函数。

那么，有没有办法让 Generator 函数返回一个正常的对象实例，既可以用 next方法，又可以获得正常的 this？
 */

/*
下面是一个变通方法。
首先，生成一个空对象，使用 call方法绑定 Generator 函数内部的 this。
这样，构造函数调用以后，这个空对象就是 Generator 函数的实例对象了。
 */
function* F() {
    this.a = 1;
    yield this.b = 2;
    yield this.c = 3;
}

var obj = {};
var f = F.call(obj);

console.log( f.next() ); // { value: 2, done: false }
console.log( f.next() ); // { value: 3, done: false }
console.log( f.next() ); // { value: undefined, done: true }

console.log(obj.a); // a
console.log(obj.b); // b
console.log(obj.c); // c
/*
上面代码中，首先是 F内部的 this对象绑定 obj对象，然后调用它，返回一个 Iterator 对象。
这个对象执行三次 next方法（因为 F内部有两个 yield表达式），完成 F 内部所有代码的运行。
这时，所有内部属性都绑定在 obj对象上了，因此 obj对象也就成了 F的实例。
 */


