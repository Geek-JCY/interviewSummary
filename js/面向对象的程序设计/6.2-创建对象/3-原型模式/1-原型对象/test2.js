function Person(){
}

Person.prototype.name = 'John';
Person.prototype.age = 20;
Person.prototype.job = 'Software Engineer';
Person.prototype.sayName = function(){ console.log(this.name) }

console.log( Person.prototype.name );
console.log( Person.prototype.constructor );

var person1 = new Person();

console.log( Object.getPrototypeOf(person1) ); // 得到 实例 person1 内部属性指向，换句话说，得到 Person的原型对象
console.log( Object.getPrototypeOf(person1).name ); // 得到 Person.prototype(Person的原型对象) 的属性 age


// 下面我们来做个测试
// person1.name = 'Jack';
console.log(person1.name); // Jack, 如果把 person1.name = 'Jack' 注释掉， 会得到 Jhon



/*
综上，我们可以总结出 在读取某个对象的某个属性时，整个的读取过程，

1.首先在本对象内部进行一次具名属性的搜索，如果搜到，则返回这个属性值，结束搜索过程；

2.如果没搜到，则继续在 对象内部属性[[Prototype]] 所指向的原型对象 中搜索，搜索到，则返回这个属性值，结束搜索过程；

 */