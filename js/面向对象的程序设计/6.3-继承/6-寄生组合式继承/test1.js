/*
虽然 前面提到的 组合式继承 是JavaScript最常用的组合模式，但它也有自己的不足；

组合式最大的问题是，无论在什么情况下都会调用两次 超类型构造函数；
 
 如下：
 */
function SuperType(name){
	this.name = name;
	this.colors = ['red', 'green'];
}

SuperType.prototype.sayName = function(){
	console.log(this.name);
}

function SubType(name, age){
	SuperType.call(this, name); // 当创建 SubType实例时，这是第二次调用 SuperType()

	this.age = age;
}

SubType.prototype = new SuperType(); // 第一次调用 SuperType()

SubType.prototype.sayAge = function(){
	console.log(this.age);
}

var instance1 = new SubType('Jack', 22); // 调用 SubType() 实例，在这里 第二次调用了 SuperType()

instance1.sayName(); // Jack
 
instance1.sayAge(); // 22

console.log('---------------------------------------');

console.log(instance1 instanceof SubType); // true
console.log(instance1 instanceof SuperType); // true

console.log(SubType.prototype.isPrototypeOf(instance1)); // true
console.log(SuperType.prototype.isPrototypeOf(instance1)); // true

console.log('---------------------------------------');

var instance2 = new SubType('Jhon', 33);

instance1.colors.push('yellow');

console.log(instance1.colors); // [ 'red', 'green', 'yellow' ]

console.log(instance2.colors); // [ 'red', 'green' ]

