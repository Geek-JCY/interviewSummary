	/*
	5.应用 call、apply、bind 方法后的 this

	了解：call、apply、bind 这三个方法是 Function对象才有的方法；它们的作用，主要是指定函数中 this中的指向，只是用法稍有不同；
	
	浏览器环境下：
		
		严格模式下：this指向 这三个方法所指定的这个值，无论是什么，即使是 null、undefined, this 也指向它们；

		非严格模式下：this指向 这三个方法所指定的这个值，null 和 undefined 值会被转换为全局对象 window；

	 */
	
	"use strict"
	
	// demo 1:
	var o1 = {
		a: 11,
		b: 12,
		sayA: function(){
			console.log(this.a);
		}
	}

	var o2 = {
		a: 21,
		b: 22
	}

	o1.sayA.call(o2);	// 21

	// demo 2:
	function sayB(){
		console.log(this.b);
	}

	sayB.call(o2);	// 22
	sayB.apply(o2);	// 22

	var bSayB = sayB.bind(o2);
	bSayB();		// 22
	
	/*
	其实这块不应该单提出来一个作总结分析的，完全可以规划到“函数上下文的 this”中去，只是在我们平时 coding的时候, 

	这三个方法是经常要用到的 所以单拿出来，以作记忆吧；

	 */	