/*
	4.构造函数 和 原型方法中的 this

	浏览器环境下：
		
		严格模式下：以构造函数名命名的新对象

		非严格模式下： 以构造函数名命名的新对象
 */
 	"use strict"
 	
 	function Person(){

		console.log(this);	// Person {}

		this.name = 'jack';

		console.log(this);	// Person {name: "jack"}
	}

	Person.prototype.sayThis = function(){
		console.log(this);
	}

	Person.prototype.sayThis();	// {sayThis: ƒ}

	new Person();	// Person {} --> // Person {name: "jack"}
	
	/*
	分析 1：
	 
		构造函数与普通函数的最重要的不同之处，就是构造函数可通过 new操作符，创造实例；

		那么在利用构造函数创造实例的过程到底发生了什么呢？ 其实呢，是要经历以下几个过程的：

			1.创造一个 新对象，作为执行上下文的环境对象；（注意：这里为什么说成是新对象，而不说成是空对象呢，因为 function默认是有 prototype属性存在的，它指向原型对象）

			2.构造函数开始执行，它的执行上下文环境对象就为这个新对象，也就是说 this指向这个新对象；

			3.利用 this来给这个新对象赋值；

			4.返回这个被赋值之后的 新对象；
		
		通过上面 new Person() 执行后输出的结果来看，确实是这样的一个过程；没有没给 this赋值前输出的是 Person{}, 赋值后，输出的 Person{name:'jack'};

		所以 概括：

			构造函数中的执行上下文的环境对象为，以构造函数名命名的新对象；

	分析 2：

		至于原型方法中 this, 其实，在我们了解了 “函数上下文的 this” 之后，应该很清楚了，它指向给它指定的环境对象，也就是确定了的 构造函数的原型对象；

		所以，Person.prototype.sayThis() 执行后，输出的结果是 Person构造函数的原型对象 --> Person.prototype 对象；
	 */