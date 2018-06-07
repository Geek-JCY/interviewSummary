function Person(){}

Person.prototype.name = 'Jhon';
Person.prototype.sayName = function(){
	console.log('name--->',this.name);
}

var person1 = new Person();
var person2 = new Person();

console.log('-----------------------------------------------');

console.log(person1.name); // 'Jhon' ----来自原型
console.log(person1.hasOwnProperty('name')); // fasle

console.log('-----------------------------------------------');

person1.name = 'Jack';
console.log(person1.name); // 'Jack' ----来自实例
console.log(person1.hasOwnProperty('name')); // true

console.log('-----------------------------------------------');

console.log(person2.name); // 'Jhon' ----来自原型
console.log(person2.hasOwnProperty('name')); // false

console.log('-----------------------------------------------');

console.log('name' in person1); // true
console.log('name' in person2); // true

/*
介绍：

1.in操作符 有两种使用方式，单独使用 和 for-in 循环中使用；

	单独使用时，in 操作符会通过访问对象来判断 属性是否存在，无论是在 实例中 还是在 原型；只要存在，就会返回 true;

	for-in使用时，就是 in单独使用 的循环遍历；

2.in操作符 配合 hasOwnProperty() 方法，可判断 一个属性是 存在于 实例中还是存在于 原型中；

	如下：
 */
// 判断 属性在原型中
function hasPrototypeProperty(obj, attr){
	return !obj.hasOwnProperty(attr) && (attr in obj);
}

// eg:
console.log('-----------------------------------------------');
console.log( hasPrototypeProperty(person2, 'name') ); // true
console.log( hasPrototypeProperty(person1, 'name') ); // false
delete person1.name
console.log( hasPrototypeProperty(person1, 'name') ); // true