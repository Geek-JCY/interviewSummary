function Person(){}

Person.prototype.name = 'Jhon';
Person.prototype.age = 33;
Person.prototype.sayName = function(){
	console.log('name--->',this.name);
}

// 封装的写法，常用的 用一个包含所有属性和方法的对象字面量来重写整个原型对象；
// 改写为：
Person.prototype = {
	name: 'Jhon',
	age: 33,
	sayName: function(){
		console.log('name--->',this.name);
	}
}
/*
这样的 写法，相当于重写了 Person.prototype, 但是有个例外，对象字面量的 constructor不在指向 [Function: Person], 而是指向了 Object构造函数；

所以，要想完全保持一直，我们可以这么写，如下：
 */
Person.prototype = {
	constructor: Person,
	name: 'Jhon',
	age: 33,
	sayName: function(){
		console.log('name--->',this.name);
	}
}
/*
上面的写法，重写定义了 constructor，但是有个 弊端，这样的写法 constructor变成了可枚举的 属性(默认 constructor 是 不可枚举的)，如下:

用 Object.keys() 方法 可以枚举出 'constructor' 属性
 */
console.log( Object.keys(Person.prototype) ); // [ 'constructor', 'name', 'age', 'sayName' ]

/*
所以 更完善写法，是在 兼容 ECMAScript 5 的引擎下，可以用 Object.defineProperty()方法，重设构造函数；

如下：
 */
// 重设构造函数，只使用于 ECMAScript 5 兼容的浏览器
Object.defineProperty(Person.prototype, 'constructor', {
	enumerable: false,
	value: Person
});
console.log( Object.keys(Person.prototype) ); // [ 'name', 'age', 'sayName' ]


