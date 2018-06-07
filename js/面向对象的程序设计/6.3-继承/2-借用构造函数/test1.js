/*
在解决 原型链继承，原型中包含引用类型所带来的问题时，

然后开发人员创造了 借用构造函数（也叫 伪造对象 或 经典继承）的技术；

思想很简单：就是在 子类型构造函数中调用 超类型的构造函数，

重点了解：函数只不过是 在特定环境下 执行代码的对象而已；

所以，我们可以用 call() 或 apply() 方法，让超类型构造函数 在子类型中调用（相当于 超类的代码在子类中 创建了一套副本），

这样一来，就可以在 子类型中执行 超类型 中定义的所有初始化代码；

如下：
 */
function SuperType(name){
	this.name = name;
	this.colors = ['red', 'green'];
}
SuperType.prototype.sayName = function(){
	console.log(this.name);
}

function SubType(name, age){

	SuperType.call(this, name);

	this.age = age;
}

SubType.prototype.say = function(){
	console.log('name---->'+this.name, 'age---->'+this.age);
}


var sub = new SubType('jack', 22); 
sub.say(); // name---->jack age---->22 // 解决的问题 1：可以传递 超类 所需要的参数了

sub.colors.push('yellow');
console.log(sub.colors); // [ 'red', 'green', 'yellow' ]

var sub2 = new SubType('jack', 22); 
console.log(sub2.colors); // [ 'red', 'green' ] // 解决的问题 2: 引用类型共享的问题

/*
虽然这种方式解决了

1：可以传递 超类 所需要的参数

2: 引用类型共享的问题

但是这种方式也是存在问题的

如下：
 */
console.log('--------------------------------------------');

console.log(sub instanceof SubType); // true

console.log(sub instanceof SuperType); // false // ---->问题 1： sub 不再是 Supertype的实例

console.log(SuperType.prototype.isPrototypeOf(sub)); // false SuperType.prototype 没有在原型链中出现过

// sub.sayName(); // TypeError: sub.sayName is not a function // ---->问题 2： 调用不到 SuperType.prototype 中定义的方法或属性
/*
问题：
 
1. 超类原型定义的属性和方法 是 不可见的

2. 继承的方法都在超类的构造函数中定义，函数复用就无从谈起了，也就是说 连共享的函数方法，也是每次都要创建个新副本的

其实个人感觉 这不能算是继承的一种吧，只是将超类构造函数中的属性和方法 创建了一套副本在子类构造函数中；
 */






