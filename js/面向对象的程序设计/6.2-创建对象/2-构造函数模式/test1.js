function Person(name, age, sex){
	this.name = name;
	this.age = 22;
	this.sex = sex;
	// this.sayName = function(){
	// 	console.log(this.name);
	// }
    // 相当于
    this.sayName = new Function(console.log(this.name));
}

var person1 = new Person('张三', '22', '男');
var person2 = new Person('李四', '23', '女');

console.log(person1.constructor == Person); // true
console.log(person2.constructor == Person); // true

console.log(person1.sayName == person2.sayName); // false 
// 每个Person实例都包含一个不同的Function实例,所以不同实例上同名函数是不想等的

Person('张三', '22', '男');
sayName();
global.sayName();
console.log(global.age);

var obj = new Object();
Person.call(obj, '王五', '22', '男');
obj.sayName();


/*
构造函数 与 普通函数 不同的特点：
	1.一般 以一个大写字母开头
	2.必须用 New 操作符 实例化，创建一个新的实例
构造函数 与 普通函数 相同的特点：
    1.都是函数
    2.任何函数，只要通过 new 操作符来调用，那么它就可以作为构造函数；
      任何函数，如果不是通过 new 操作符来调用，那它跟普通函数也没有什么不同；

构造函数 实例化的过程，是将 构造函数的作用域赋给新对象（因此this 指向了这个新对象）
 */