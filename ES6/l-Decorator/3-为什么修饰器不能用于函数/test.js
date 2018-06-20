/*
修饰器只能用于类和类的方法，不能用于函数，因为存在函数提升。
 */
var counter = 0;

var add = function () {
  counter++;
};

@add
function foo() {
}

/*
上面的代码，意图是执行后 counter等于 1，但是实际上结果是 counter等于 0。
因为函数提升，使得实际执行的代码是下面这样。
 */
@add
function foo() {
}

var counter;
var add;

counter = 0;

add = function () {
  counter++;
};


