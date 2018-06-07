function Person(name, age, job){
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = 'Software Engineer';
	o.sayName = function(){
		console.log(this.name);
	}
	return o;
}

var person1 = new Person('Jack', 22);
var person2 = new Person('Leo');
/*
可以看的出来，除了

1.使用 new 操作符 创建实例

2.函数名 首字母 大写，我们称其 为构造函数

其它的 与工厂模式 没有有什么不同；
 */