/*
下面是另一个例子。
 */
var readOnly = require("some-decorator");

@readOnly
function foo() {
}
/*
上面代码也有问题，因为实际执行是下面这样。
 */
var readOnly;

@readOnly
function foo() {
}

readOnly = require("some-decorator");
/*
总之，由于存在函数提升，使得修饰器不能用于函数。类是不会提升的，所以就没有这方面的问题。
 */

