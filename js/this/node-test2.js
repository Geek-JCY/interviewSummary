/*
	2.函数上下文中的 this

	Node环境下：

		严格模式下: this 指向被指定的环境对象，即使指定的是 null 或者 undefined；

		非严格模式下：this 指向被指定的环境对象，如果指定的是 null 或者 undefined，会转为全局对象 global对象； 
	 */

"use strict"

// demo 1:
function aa(){
	console.log(this);
}

aa(); // 作为单独函数执行(没有指定 环境对象)：strict-->"undefined"	nostrict-->"global"


// demo 2:
var obj = {
	a: 1,
	b: function(){
		console.log(this);
	}
}

obj.b(); // 作为对象方法执行： strict-->obj	nostrict-->obj

// demo 3:
aa.call(obj); // 作为单独函数执行(指定 环境对象为 obj)： strict-->obj	nostrict-->obj

// demo 4:
aa.call(null); // 作为单独函数执行(指定 环境对象为 null)：strict-->null	nostrict-->global

// demo 5:
aa.call(undefined); //作为单独函数执行(指定 环境对象为 undefined)：strict-->undefined	nostrict-->global 

/*
总结：函数上下文中的 this

Node环境 严格模式下：

	函数作为单独函数 执行：

		1.函数执行上下文的环境对象 是指定的，指定什么就是什么；this指向这个指定的环境对象；即使指定的是 null 或者 undefined；

	函数作为对象方法 执行：

		2.这个函数执行上下文的环境对象就是这个拥有它的对象；this指向这个拥有它的对象；


Node环境 非严格模式下：

	函数作为单独函数 执行：

		1.函数执行上下文的环境对象 是指定的，指定什么就是什么；this指向这个指定的环境对象，如果指定的是 null 或者 undefined，会转为全局对象 global对象； 

	函数作为对象方法 执行：

		2.这个函数执行上下文的环境对象就是这个拥有它的对象；this指向这个拥有它的对象；
 */


