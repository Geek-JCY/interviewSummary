function Person(){}

var person1 = new Person(); // 注意这里 这是先创建 的实例

// person1.sayHi(); // person1.sayHi is not a function

Person.prototype.sayHi = function(){
	console.log('----->hi');
}

person1.sayHi(); // ----->hi

/*
可以看到，我们是先创建的实例，再给 构造函数 Person()的原型对象添加的属性方法 sayHi(),然后再通过实例(person1)调用的 sayHi() 方法，

依然正常的输出了 '----->hi';

总结：

实例 与 原型 之间是松散连接关系，实例与原型之间是通过指针连接的，换句话说，构造函数的原型并不是实例的副本；

实例 person1 调用 sayHi() 方法时，首先 在实例 person1中进行查找，找不到 再通过 [[Prototype]]指针查找到 原型，

再在原型中查找，再执行；

所以，在调用属性之前，任何改变原型的属性 都会反应在实例当中来；

 */

