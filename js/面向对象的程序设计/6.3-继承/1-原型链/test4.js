/*
判断 原型和实例 的关系

方法：

1.第一种方式，用 instanceof 操作符，它可以测试 实例与原型链中出现过的 构造函数；
 */
function Father(){
	this.name = 'Jack'
}
Father.prototype.sayName = function(){
	console.log(this.name);
}

function Son(){
	this.name = 'Jhon'
}
Son.prototype = new Father();

Son.prototype.sayName = function(){
	console.log(this.name);
}

var son = new Son();
console.log(son instanceof Son);	// true
console.log(son instanceof Father); // true
console.log(son instanceof Object); // true

console.log('--------------------------------------------');
/*
2.第二种方式，用isPrototypeOf()方法，它可以检测 只要是原型链中出现过的原型；
 */
console.log(Son.prototype.isPrototypeOf(son));	  // true
console.log(Father.prototype.isPrototypeOf(son)); // true
console.log(Object.prototype.isPrototypeOf(son)); // true
