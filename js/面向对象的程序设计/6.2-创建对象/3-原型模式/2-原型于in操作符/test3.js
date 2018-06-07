function Person(){}

Person.prototype.name = 'Jhon';
Person.prototype.age = 33;
Person.prototype.sex = '男';
Person.prototype.sayName = function(){
	console.log('name--->',this.name);
}

var person1 = new Person();

// Object.keys(obj) 方法
console.log( Object.keys(Person.prototype) ); // [ 'name', 'age', 'sex', 'sayName' ]
console.log( Object.keys(person1) ); // []
console.log('-----------------------------------------------');
person1.name = 'Jack';
console.log( Object.keys(person1) ); // [ 'name' ]

console.log('-----------------------------------------------');

// Object.getOwnPropertyNames(obj) 方法
console.log( Object.getOwnPropertyNames(Person.prototype) ); // [ 'constructor', 'name', 'age', 'sex', 'sayName' ]
delete person1.name;
console.log( Object.getOwnPropertyNames(person1) ); // []
console.log('-----------------------------------------------');
person1.name = 'Jack';
console.log( Object.getOwnPropertyNames(person1) ); // [ 'name' ]



/*

1.Object.keys(obj): 得到 所传入对象(也就是 obj)的所有 可枚举的 属性；
	
	注意：obj 只是这个传入的对象，不包含 obj 的原型； 

2.Object.getOwnPropertyNames(obj)：得到 所传入对象(也就是 obj)的所有 可枚举的 和 不可枚举的 属性；

	注意：obj 只是这个传入的对象，不包含 obj 的原型； 

3.以上两个方法 可以用来替换 for-in循环
 */