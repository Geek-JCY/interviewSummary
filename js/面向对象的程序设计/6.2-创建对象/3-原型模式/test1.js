function Person() {}

Person.prototype.name = 'John';
Person.prototype.age = 18;
Person.prototype.job = 'Software Engineer';
Person.prototype.sayName = function(){ console.log(this.name) }
/* 
理解：
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

var person1 = new Person();
person1.sayName();

var person2 = new Person();
person2.sayName();

console.log(person1.sayName == person2.sayName); // true
// 达到共用一个方法的目的啦

console.log(person1.prototype);
console.log(Person.prototype);


/*
我们创建的每一个函数都有一个 prototype （原型）属性，这个属性是一个指针，指向一个对象，

而这个对象的用途是 包含可以由 特定类型（如上person1 是 Person 类型）的所有实例 共享的属性和方法；
 
Person.prototype 是通过调用构造函数（如上 new Person()）而创建的那个对象实例（如上 person1、person2） 的原型对象；

使用原型对象的好处是，可以让所有对象实例（如 person1/person2/...）共享它所包含的属性和方法；
 */

