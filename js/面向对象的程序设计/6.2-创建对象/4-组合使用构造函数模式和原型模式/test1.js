/*
组合使用构造函数模式和原型模式，这种方法是目前来讲使用 最广泛的方法，

构造函数模式 用来定义实例属性，原型模式 用来定义共享的 属性和方法，集二者之长与一身；

如下：
 */
function Person(name, age, job){
	this.name = name;
	this.age = age;
	this.job = job;
	this.friends = ['jack', 'jessica']
}

Person.prototype = {
	constructor: Person,
	sayName: function(){
		console.log('sayName----->',this.name);
	}
}

var person1 = new Person('Nicholas', 29, 'Software Engineer');
var person2 = new Person('Greg', 22, 'Doctor');

person1.friends.push('leo');

console.log(person1.friends); // [ 'jack', 'jessica', 'leo' ]
console.log(person2.friends); // [ 'jack', 'jessica' ]

/*
上面的例子中，实例属性都是在 构造函数中定义的，共享的 constructor和方法 都是在原型中定义的，

充分解决了，工厂模式不能确定对象类型的问题，构造函数模式 不共享的问题，原型模式 多余共享的问题；

所以是目前 ECMAScript中使用最广泛，认同度最高的模式；
 */
