function Person(name, age, job){
	// 属性
	this.name = name;
	this.age = age;
	this.job = job;
	this.friends = ['jack', 'jessica'];
	
	// 方法
	if(typeof this.sayName != 'function'){
		Person.prototype.sayName = function(){
			console.log(this.name);
		}
	}
}

var person1 = new Person('Jack', 22, 'Software Engineer');

person1.sayName(); // Jack

/*
注意，这里的 sayName 方法，只有在 实例中没有这个方法时，才会将它添加到原型中；

这段代码只有在初次调用构造函数时，才会执行。之后，原型已经完成初始化，不需要再做修改；

而且这样的模式，还有好处就是 非字面量形式 的原型模式的好处 --> 任何时候修改原型对象，都会反应在实例对象中来；

不像字面量形式 的原型模式，重写了原型对象，会切断 之前创建的实例 与 新的原型对象的 连系；

所以要注意的是，使用动态原型模式，就不能用 对象字面量的形式重写原型啦；
 */