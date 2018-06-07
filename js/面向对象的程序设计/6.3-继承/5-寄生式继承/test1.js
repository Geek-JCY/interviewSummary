/*
寄生式继承是与原型式继承紧密相关的一种继承方式；

如下：
 */
// 原理函数
function object(o){
	function F(){}
	F.prototype = o;
	return new F();
}

// 创建 克隆 对象的方法
function createObject(original){
	// var clone = Object.create(original);
	var clone = object(original); // ---->也可等于 var clone = Object.create(original);
	clone.sayHi = function(){
		console.log('Hi');
	}
	return clone;
}

// 已有对象
var person = {
	name: 'Jack',
	friends: ['jhon', 'lily']
}

// 创建相似对象
var person1 = createObject(person);

console.log(person1.name); // Jack

person1.sayHi(); // Hi

console.log('----------------------------------');

var person2 = createObject(person);

person1.friends.push('张三');

console.log(person1.friends); // [ 'jhon', 'lily', '张三' ]
console.log(person2.friends); // [ 'jhon', 'lily', '张三' ]

/*
person1 不仅有 person的所有属性和方法，同时 还有自己的 sayHi() 方法；

这样的 寄生式继承，虽然 返回了具有自己方法的 clone 对象，

但是，还是没有 解决引用类型共享的问题；

而且，也没有做到函数复用，效率会降低；

如果，只是考虑对象，而不考虑自定义类型和构造函数的情况下，还是可取的；
 */

