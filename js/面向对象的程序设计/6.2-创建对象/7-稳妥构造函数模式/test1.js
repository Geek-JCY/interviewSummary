/*
稳妥对象 概念：

	没有公共属性，而且其它方法也不引用 this 对象；适合应用在一些安全的环境（这些环境中会禁止使用 this 和 new）;

稳妥构造函数模式 与 寄生构造函数模式 有些相似，但是 有两点不同；

	1.新创建的方法 不引用 this

	2.不使用 new 操作符调用构造函数

形式 如下：
 */
function Person(name, age, job){
	// 创建 要返回的对象
	var o = new Object();

	// 可以在这里定义私有变量和函数
	
	// 添加方法	
	o.sayName = function(){
		console.log('name---->', name);
	}

	// 返回对象
	return o;
}

var person1 = Person('Jack', 22, 'Software Engineer');

person1.sayName(); // name----> Jack

/*
为什么说它是一种稳妥、安全的模式呢，因为，如果我们想要知道 person1 的数据成员的话，只有调用 sayName()方法一种方法；

也不可能有其它的 访问到传入构造函数的原始数据的方法；

它同 寄生构造函数模式 一样，返回的对象 与 构造函数 和 构造函数的原型属性之间 没有什么关系；也就是相当于 在构造函数外部随便创建的对象没有什么区别；

也不能用 instanceof操作符 判断 对象类型，所以，在能使用其它模式的情况下，尽量不使用这种模式；
 */