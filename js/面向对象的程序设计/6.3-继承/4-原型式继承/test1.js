/*
什么是 原型式继承 ？

就是在 不必创建自定义类型的情况下，借助原型基于已有的对象创建新对象；

如下：
 */
// 现在 我有一个 已存在的对象 person
var person = {
	name: 'Jack',
	friends: ['jhon', 'lily']
}
// 想要创建 一个类似于 person 的新对象，又不想兴师动众的 创建构造函数 搞继承关系
// 我们有一个简单的方式 Object.create(obj, props) (ECMAScript 5 新增的方法，规范原型式继承)
// Object.create() ----> 第二个参数 与 Object.defineProperties 参数格式一样； 
var personA = Object.create(person, {
	name: {
		value: '张三'
	}
});

var personB = Object.create(person, {
	name: { // 修改原有属性
		value: '李四'
	},
	age: { // 后添加的属性
		value: 22, // 与 get set 不能混用
		enumerable: false,
		writable: false,
		configurable: false
	}
});

console.log('------------------------------------------');

console.log(personA.name);  // 张三
console.log(personA.friends); // [ 'jhon', 'lily' ]

console.log('------------------------------------------');

console.log(personB.name);  // 李四
console.log(personB.friends); // [ 'jhon', 'lily' ]

console.log('------------------------------------------');

personA.friends.push('李四');
console.log(personA.friends); // [ 'jhon', 'lily', '李四' ]

console.log('------------------------------------------');

console.log(personB.friends); // [ 'jhon', 'lily', '李四' ]

console.log('------------------------------------------');

console.log(personB.age);

/*
如果说，就是想要 可以快速简单的创建一个相似于 person的对象的话，这种 原型式继承的方式 是完全可以胜任的；

但是，这还是与使用 原型链模式继承 一样，引用类型 还是会共享；

 */




