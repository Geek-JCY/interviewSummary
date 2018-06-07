function Person(){}

Person.prototype.name = 'John';
Person.prototype.age = 18;
Person.prototype.job = 'Software Engineer';
Person.prototype.sayName = function(){ console.log(this.name) }
/*
上边的一大堆，相当于 如下：
*/
// Person.prototype = {
//     name: 'Jhon',
//     age: 18,
//     job: 'Software Engineer',
//     sayName: function(){
//         console.log(this.name);
//     }
// };

console.log(Person.prototype);

console.log(Person.prototype.constructor);

var person1 = new Person();
console.log( Object.getPrototypeOf(person1) ); // 得到 实例person1 的 [[Prototype]]指向
console.log( Person.prototype.isPrototypeOf(person1) ); // true 验证 实例 person1的 [[Prototype]]指向 是不是 Person.prototype



/*
1.只要创建一个新函数，就会根据一组特定的规则创建一个 prototype属性，这个属性指向函数的原型对象；

2.所有原型对象都会默认获得一个 constructor(构造函数) 属性，这个属性包含一个 指向 prototype属性所在的函数的 指针。
	如上：Person.prototype.constructor 指向 [Function: Person]
  
  而原型对象除了包含 constructor属性外，还包含后来添加的其它属性，
	所以：
		Person.prototype == {
			constructor:[Function: Person],

			name: 'Jhon',
			....
		};

3.当调用构造函数 创建一个实例后，该实例包含一个指针(内部属性 [[Prototype]],浏览器中为 __proto__), 指向构造函数的原型对象；
	如上：
		var person1 = new Person();
		person1.__proto__ == Person.prototype
	特别注意的是，这个指针指向的是 构造函数的原型对象，而不是构造函数本身；

 */
