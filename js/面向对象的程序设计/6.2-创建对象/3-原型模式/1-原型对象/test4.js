function Person(){
}

Person.prototype.name = 'John';
Person.prototype.age = 20;
Person.prototype.job = 'Software Engineer';
Person.prototype.sayName = function(){ console.log(this.name) }

var person1 = new Person();
var person2 = new Person();


// 下面我们来做个测试
person1.name = 'Jack';
// person1.name = null;
console.log(person1.name); // Jack ----来自实例
console.log(person2.name); // Jhon ----来自原型

console.log(person1.hasOwnProperty('name')); // true
console.log(person2.hasOwnProperty('name')); // false

delete person1.name
console.log( person1.name); // Jhon ----来自原型

console.log(person1.hasOwnProperty('name')); // false



/*
综上 总结：

1.当为对象实例添加属性时，这个属性就会屏蔽原型对象中保存的同名属性，
	
	注：只是阻止访问，并不是修改了原型对象中同名属性，不然，person2也会获得同 person1同样的 name值啦；

2.实例属性设置为 null/空，都不会 删除实例的属性，恢复其指向原型对象的同名属性 的访问，

  而 delete操作符可以做到这一点，完全删除实例属性，恢复对原型对象的同名属性 的访问；

3.hasOwnProperty()方法 可以检测一个属性是存在于 实例中，还是存在于 原型中；
 */