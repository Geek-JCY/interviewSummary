/*
寄生组合模式 的核心思想 就是通过 创建 超类的原型的副本，赋值给 子类的原型 的方式，

节省 test1.js 中的第一次调用 SuperType()

即： SubType.prototype = SuperType.prototype的副本

为什么可以这样做？

因为 我们已经通过 借用构造函数的继承模式，把 超类的实例属性给了 子类；

所以 子类的原型无需再一次 得到 超类的实例属性；
 
实现如下：
 */

// 实现 SubType.prototype = SuperType.prototype的副本
// method 1:
function inheritPrototype(SubClass, SuperClass){
	var colnePrototype = Object.create(SuperClass.prototype); // 创建对象
	colnePrototype.constructor = SubClass;					  // 加强对象
	SubClass.prototype = colnePrototype;					  // 指定对象
}

// 应用 寄生组合式继承
function SuperType(name){
	this.name = name;
	this.colors = ['red', 'green'];
}

SuperType.prototype.sayName = function(){
	console.log(this.name);
}

function SubType(name, age){
	SuperType.call(this, name); // 当创建 SubType实例时，调用一次 SuperType()

	this.age = age;
}

inheritPrototype(SubType, SuperType); // 令 SubType.prototype = SuberType.prototype的副本

SubType.prototype.sayAge = function(){
	console.log(this.age);
}

var instance1 = new SubType('Jack', 22);

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

/*
优点：

1.只调用了一次 超类构造函数；

2.继承了 所有 组合继承的优点；

所以 寄生组合继承是 最有效的继承方法；

 */


