/*
ES5 是先新建子类的实例对象this，再将父类的属性添加到子类上，由于父类的内部属性无法获取，导致无法继承原生的构造函数。
比如，Array构造函数有一个内部属性[[DefineOwnProperty]]，用来定义新属性时，更新 length属性，
这个内部属性无法在子类获取，导致子类的 length属性行为不正常。
 */

/*
下面的例子中，我们想让一个普通对象继承Error对象。
 */
var e = {};

Object.getOwnPropertyNames(Error.call(e))
// [ 'stack' ]

Object.getOwnPropertyNames(e)
// []
/*
上面代码中，我们想通过Error.call(e)这种写法，让普通对象e具有Error对象的实例属性。
但是，Error.call()完全忽略传入的第一个参数，而是返回一个新对象，e本身没有任何变化。
这证明了Error.call(e)这种写法，无法继承原生构造函数。
 */



