/*
原型模式的重要性不仅提现在 创建自定义类型上，更重要的是 就连所有原生的引用类型，都是采用的这种模式创建的；

所有原生的引用类型(Array, Object, String 等等) 都是在其构造函数的原型上定义了方法；

如下：
 */

console.log(typeof Array.prototype.sort);		// function
console.log(typeof String.prototype.substring); // function

/*
以上 足可以证明，原生的引用类型的方法，也是在 构造函数的原型上定义的；
 
 当然，既然这样的话，我们也可以在原生的引用类型上扩展方法， 如下：
 */
String.prototype.startWith = function(str){
	return this.indexOf(str) == 0;
}

var msg = 'Hello World';
console.log(msg.startWith('Hello')); // true

/*
虽然，我们可以轻易的原生引用类型上扩展方法，但并不推荐这样做，因为可以会造成 命名冲突 或 重写了原生方法；
 */


