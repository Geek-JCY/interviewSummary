/*
Generator 函数总是返回一个遍历器，ES6 规定这个遍历器是 Generator 函数的实例，
也继承了 Generator 函数的 prototype对象上的方法。
 */
function* g() {}

g.prototype.hello = function(){
    return 'hi!';
}

let obj = g();

obj instanceof g // true
console.log(obj instanceof g);

obj.hello() // 'hi!'
console.log(obj.hello());
/*
上面代码表明，Generator 函数 g返回的遍历器 obj，是 g的实例，而且继承了 g.prototype。
但是，如果把 g当作普通的构造函数，并不会生效，因为 g返回的总是遍历器对象，而不是 this对象。
 */



