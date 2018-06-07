/*
在 test1.js 的理解下，如果我们 创建了实例之后，重写了 原型，那结果会大不一样；

如下：
 */

function Person(){}

var person1 = new Person(); // 注意这里 这是先创建 的实例

Person.prototype = {
	constructor: Person,
	sayHi: function(){
		console.log('------>Hi');
	}
}

person1.sayHi(); // TypeError: person1.sayHi is not a function

/*
与 test1.js 不同的是，我们我们先创建实例 --> 再重写的 Person()的原型对象(注意 这里是重写，而不是在原型对象上添加或修改)

--> 再调用的 person1.sayHi() 方法， 结果报错了，找不到 person1.sayHi

总结：

重写原型对象 切断了现有原型与之前已经存在的对象实例之间的连系，它们引用的仍是最初的原型；

可以这样理解，

重写原型 相当于让 Person.prototype 指向了存有新对象的 栈，

而之前的实例的 [[Prototype]]还指向 存有原来对象的 栈，

所以相当于切断了现有原型与之前已经存在的对象实例之间的连系；

 */