function createPerson(name, age, job){
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = 'Software Engineer';
	o.sayName = function(){
		console.log(this.name);
	}
	return o;
}

var person1 = createPerson('Jack', 22);
var person2 = createPerson('Leo');

/*
这就是工厂模式，通过传递不同参数，创建一个包含所有必要信息的对象；

显然，虽然这样的模式可以 无数次的调用 createPerson() 方法，得到不同对象；

但是这样创造出来的对象 每次都是包含 三个属性一个方法（有可能包含不必要的 属性或方法）的对象，所以就会出现浪费内存的问题；

而且，都是在 new Object() 实例上创建的，并不能知道一个对象的类型到底是什么；
 */