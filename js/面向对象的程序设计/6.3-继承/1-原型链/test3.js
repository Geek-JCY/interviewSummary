/*
默认的原型 ----> Object.prototype

记住：所有引用类型 默认原型 都是 Obejct.prototype, 这也是为什么所有自定义类型都会继承 toString()、valueOf()方法的原因；

理解如下：
 */
function SuperType(){
	this.property = 'super';
}

SuperType.prototype.getSuperValue = function(){
	console.log( this.property );
}

function SubType(){
	this.subproperty = 'sub';
}

// 继承了 SuperType
SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function(){
	console.log( this.subproperty );
}

var instance = new SubType();

console.log(instance instanceof SubType); 	// true
console.log(instance instanceof SuperType); // true
console.log(instance instanceof Object); // true ----> instance 也是 Object的实例,可以使用 Object的方法


console.log(SuperType.__proto__.constructor) // [Function: Function]
console.log(SuperType.__proto__.constructor instanceof Object) // true
/*
通过上边可以看出来， 构造函数相当于 [Function: Function]的实例，而[Function: Function]是又是 Object的实例，

所以可以看出来，所有引用类型的 默认原型 都是Object.prototype,

可以说 Object.prototype 是所有引用类型 原型链 继承的最顶端
 */
