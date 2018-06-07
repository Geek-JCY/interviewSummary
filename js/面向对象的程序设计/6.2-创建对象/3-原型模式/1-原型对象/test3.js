function Person(){
	this.name = 'Lee'
}

Person.prototype.name = 'John';
Person.prototype.age = 20;
Person.prototype.job = 'Software Engineer';
Person.prototype.sayName = function(){ console.log(this.name) }

var person1 = new Person();


// 下面我们来做个测试
// person1.name = 'Jack';
console.log(person1.name); // Lee



/*
会发现 输出的 输出的 是 lee,

原因分析:
	
	因为 构造函数的实例化过程，是将 构造函数的作用域 赋给 实例化后的新对象（如上 person1）,

	也就是说，Person()构造函数当中的 this 此时指向的是 person1对象，

	也就是说，Person()构造函数中的 this.name=‘Lee’，执行后，相当于执行了 person1.name='Lee'，

	也就是 给 person1 创建了一个 name属性； 

而后，

	搜索 person1的 name属性的过程，就是正常的 先从自身对象中搜索具名属性，找不到的话再到 内部属性[[Prototype]] 所指向的原型对象中搜索;


 */