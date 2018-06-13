/*
主题：call、apply、bind 方法的异同？

相同点：

都能改变 this 指向

不同点： 
1. call apply 方法是立即执行方法，调用即执行；

2. bind 方法调用后，会返回一个新函数，然后再次调用时执行；

3. 传递参数有所不同
	call方法，传递参数 为 argument list形式
	apply方法，传递参数 为 数组形式；
	bind方法，传递参数也是 argument list形式，但是 它可以在 call()方法被调用的时候传递，也可以在后续 返回的新方法被调用时传递； 
 */