/*
Generator 函数 g返回的遍历器 obj，是 g的实例，而且继承了 g.prototype。
但是，如果把 g当作普通的构造函数，并不会生效，因为 g返回的总是遍历器对象，而不是 this对象。
 */
function* g() {
    this.a = 'a';
}

let obj = g();
obj.a // undefined
/*
上面代码中，Generator 函数 g在 this对象上面添加了一个属性 a，但是 obj对象拿不到这个属性。
 */



