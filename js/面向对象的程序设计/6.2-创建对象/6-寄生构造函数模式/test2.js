/*
这种模式 可以在特殊情况下用来创建构造函数；

如，假设我们想要创建一个 具有额外方法的特殊数组，由于不能直接修改 Array 构造函数，因此可以使用这种 模式
 */
function SpecialArray(){
	// 创建数组
	var values = new Array();

	// 添加属性
	values.push.apply(values, arguments);

	// 添加方法
	values.toPipedString = function(){
		return this.join('|');
	}

	return values;
}

var colors = new SpecialArray('red', 'yellow', 'blue');

console.log(colors); // [ 'red', 'yellow', 'blue', toPipedString: [Function] ]

console.log(colors.toPipedString()); // red|yellow|blue

/*
寄生构造函数模式：

返回的对象 与 构造函数 和 构造函数的原型属性之间 没有什么关系；也就是相当于 在构造函数外部随便创建的对象没有什么区别；

也不能用 instanceof操作符 判断 对象类型，所以，在能使用其它模式的情况下，尽量不使用这种模式；
 */
