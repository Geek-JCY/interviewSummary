/*
通过 test1.js 的分析，终极写法 如下
 */
function Person(){}

Person.prototype = {
	constructor: Person,
	name: 'Jhon',
	sayName: function(){
		console.log('name---', this.name);
	}
}
Object.defineProperty(Person.prototype, 'constructor', {
	enumerable: false,
	value: Person
});


var person1 = new Person();
console.log(person1.name); // Jhon ----来自原型

console.log( Object.keys(Person.prototype) ); // [ 'name', 'sayName' ]