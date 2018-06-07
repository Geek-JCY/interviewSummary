/*
原型式继承的原理：

如下：
 */
// 原理函数
function object(o){
	function F(){}
	F.prototype = o;
	return new F();
}

// 已有对象
var person = {
	name: 'Jack',
	friends: ['jhon', 'lily']
}

var personA = object(person);
var personB = object(person);

personA.name = '李四';

console.log(personA.name ); // 李四

console.log(personB.name ); // Jack

console.log('---------------------------------------------');

console.log(personA.friends); // [ 'jhon', 'lily' ]

personA.friends.push('张三'); 

console.log(personA.friends); // [ 'jhon', 'lily', '张三' ]

console.log(personB.friends); // [ 'jhon', 'lily', '张三' ]

/*
原理解析：

通过在 给 objec函数传递一个 对象参数 o, 让 在object内部创建的构造函数 F() 的原型指向 对象参数o;

然后返回 F() 的实例；

所以我们 通过 object()函数创建的实例，都继承了 构造函数 F() 的原型的属性和方法, 也就是 o 的属性和方法；

其本质是对 给定对象的前复制；
 */


