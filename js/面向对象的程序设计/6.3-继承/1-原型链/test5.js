/*
原型链继承存的问题：

如下：
 */
function SuperType(){
	this.colors = ['red', 'green'];
}

function SubType(){}

SubType.prototype = new SuperType();

var instance1 = new SubType();
var instance2 = new SubType();

instance1.colors.push('yellow');

console.log(instance1.colors); // [ 'red', 'green', 'yellow' ]

console.log(instance2.colors); // [ 'red', 'green', 'yellow' ]
/*
问题 1：

我们想让 instance1 和 instance2 都拥有自己的 colors 属性，也就是 

instacne1.colors = [ 'red', 'green', 'yellow' ]

instance2.colors = [ 'red', 'green' ],

可是结果却不是如我们预期的一样，这就是 问题1：包含引用类型值的原型，会有属性共享的问题

究其原因，在 SubType.prototype = new SuperType() 实现原型继承的时候，

SuperType的实例属性 梳理成章的成为了 SupType的原型属性；

而原型属性是有共享性的，即，SupType的所有实例都共享一个 SupType.prototype.colors 属性，

当instance1 改变 SupType.prototype.colors时，其它实例在获取 SupType.prototype.colors 也是获得改变后的值；
 */
/*
问题 2：在创建子类实例时，不能向超类的构造函数中传递参数；
 */
function Super(age){
	this.age = age;
}
Super.prototype.sayAge = function(){
	console.log(this.age);
}
function Sub(name){
	this.name = name;
}

// 1.先继承
Sub.prototype = new Super();
// 2.再添加 新方法，否则会找不到 方法
Sub.prototype.sayName = function(){
	console.log(this.name);
}

var s = new Sub('jack'); // 在创建子类时，不能给超类传递参数

s.sayName();
s.sayAge();

/*
综上两个问题，实践中很少单独使用原型链；
 */



