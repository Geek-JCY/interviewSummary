/*
什么是原型链？

我们让一个 类型A(也就是构造函数A)的实例(instance_A)的 [[prototype]](内部指针)所指的原型对象 

等于 另一个 类型B(也就是构造函数B)的实例(instance_B)，

而 类型B(也就是构造函数B)的实例(instance_B)的 [[prototype]](内部指针)所指的原型对象

等于 另一个 类型C(也就是构造函数C)的实例(instance_C)，

依此类推，层层递进，就构成了实例与原型的链条，这就是所谓的原型链；
*/

function SuperType(){
	this.property = 'super';
}

SuperType.prototype.getSuperValue = function(){
	console.log( this.property );
}

function SubType(){
	this.subproperty = 'sub';
}

// 继承了 SuperType
SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function(){
	console.log( this.subproperty );
}

var instance = new SubType();

console.log(instance instanceof SubType); 	// true
console.log(instance instanceof SuperType); // true

/*
可以看到 SubType的实例 instance，即是 SubType的实例，又是 SuperType的实例，

说明 instance不但拥有了 SubType的 实例属性和原型方法，也拥有了 SuperType的 实例属性和原型方法

如下；
 */
instance.getSubValue(); // sub ---->调用 subType.prototype的方法

instance.getSuperValue(); // super ---->调用 SuperType.prototype的方法
console.log(instance.property); // super ---->调用 SuperType的属性

/*
值得注意的是 instance.constructor 是 SuperType,

这是因为 instance 内部指针[[Prototype]]所指的原型对象是 new SuperType()(SuperType的实例)，

new SuperType()的 内部指针[[Prototype]]所指的原型对象 SuperType.prototype.constructor 是 SuperType;

也就是，subType.prototype 没有自己的 constructor 属性，应用的是 SuperType.prototype的 constructor 属性；
 */
console.log(instance.constructor); // [Function: SuperType]




