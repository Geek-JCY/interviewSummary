/*
原型模式的问题：

1.省略了为构造函数传递参数的环节，所以，所有实例 默认都是取得相同的属性值；

2.
首先得说，原型模式对于 函数 和 需要共享的属性 是非常适合的，但是，

也是由于它的共享性，导致 包含引用类型值的属性来说，表现就不那么得体啦，如下：
 */
function Person(){}

Person.prototype = {
	name: 'Jhon',
	age: 33,
	friends: ['Jack', 'David'],
	sayName: function(){
		console.log('name--->',this.name);
	}
}

var person1 = new Person();
var person2 = new Person();

person1.friends.push('Leo');

console.log(person1.friends); // [ 'Jack', 'David', 'Leo' ]
console.log(person2.friends); // [ 'Jack', 'David', 'Leo' ]

/*
看到了吧，我们只是想给 person1 添加个新朋友，而并不想给 person2 添加，结果 person2 也添加上了；

这也就是 很少看到有人单独使用 原型模式的原因；
 */

