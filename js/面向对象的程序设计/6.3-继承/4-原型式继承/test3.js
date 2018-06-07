/*
个人感觉 原型式继承 最佳使用场景：

就是 创建包含共享方法的类似对象时，使用起来应该就合理了， ----> 估计一般 封装 插件包的时候应用的多

至于属性的话，就在实例中 定义就好了；

如下：
 */
var methodObj = {
	sayHi: function(){
		console.log('Hi');
	},
	sayWord: function(){
		console.log('Hello World!!!');
	}
}

var obj1 = Object.create(methodObj);
var obj2 = Object.create(methodObj);

obj1.sayHi(); // Hi
obj2.sayHi(); // Hi

obj1.name = 'jack';
console.log(obj1.name); // jack

console.log(obj2.name); // undefined