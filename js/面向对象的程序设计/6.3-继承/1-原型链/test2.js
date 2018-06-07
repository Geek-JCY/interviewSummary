/*
原型链的继承方式 相当于 重写了原型对象，只不过，这个重写的原型对象 等于 另一个类型的实例而已；

如下 可以说明这一点：
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

// 注意这里
SubType.prototype.name = function(){
	console.log('subType');
}

// 实现继承
SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function(){
	console.log(this.subproperty + '---->second');
}

// 实例化
var instance = new SubType();

console.log(instance.name); // undefined

/*
发现，我们在实现继承之前 给 SubType.prototype 添加了个属性 name,

而 在继承之后，却找不到 属性 name了，原因就是 SubType.prototype 被重写了，继承之前所添加的属性都没有了；

所以，我们在使用的时候 也一定要注意，要在 明确了继承关系后，再添加属性或方法；
 */
