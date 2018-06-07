/*
组合继承

就是集 原型链模式 继承 和 借用构造函数模式 继承 的优点为一体 的一种继承模式；

用原型链模式 实现，原型方法和属性的继承；

用借用构造函数模式 实现，实例属性的继承；

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
	// 继承属性
	SuperType.call(this, name);

	this.age = age;
}

// 继承方法
SubType.prototype = new SuperType();

SubType.prototype.sayAge = function(){
	console.log(this.age);
}

var instance1 = new SubType('jack', 22);
var instance2 = new SubType('jhon', 20);

instance1.sayName(); // jack
instance2.sayName(); // jhon

console.log('----------------------------------------');

instance1.sayAge(); // 22
instance2.sayAge(); // 20

console.log('----------------------------------------');

instance1.colors.push('yellow');
console.log(instance1.colors); // [ 'red', 'green', 'yellow' ]

console.log(instance2.colors); // [ 'red', 'green' ]

/*
可以看出来，这种方式 解决了：

原型链 模式：

1. 引用类型 共享 的问题

2. 创建子类时 不能向超类传递参数 的问题

借用构造函数 模式：

1. 超类原型 不可见 的问题；

2. 属性或方法 复用 的问题；

综上，这是 JavaScript 中最常用的继承模式；

 */