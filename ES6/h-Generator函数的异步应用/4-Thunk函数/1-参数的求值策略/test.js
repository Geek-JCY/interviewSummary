/*
Thunk 函数是自动执行 Generator 函数的一种方法。
 */
/*
参数的求值策略

Thunk 函数早在上个世纪 60 年代就诞生了。

那时，编程语言刚刚起步，计算机学家还在研究，编译器怎么写比较好。
一个争论的焦点是"求值策略"，即函数的参数到底应该何时求值。
 */
var x = 1;

function f(m) {
  return m * 2;
}

f(x + 5)
/*
上面代码先定义函数 f，然后向它传入表达式 x + 5。请问，这个表达式应该何时求值？

一种意见是"传值调用"（call by value），即在进入函数体之前，就计算 x + 5的值（等于 6），再将这个值传入函数 f。
C 语言就采用这种策略。
 */
f(x + 5)
// 传值调用时，等同于
f(6)
/*
传值调用和传名调用，哪一种比较好？

回答是各有利弊。传值调用比较简单，但是对参数求值的时候，实际上还没用到这个参数，有可能造成性能损失。
 */
function f(a, b){
  return b;
}

f(3 * x * x - 2 * x - 1, x);
/*
上面代码中，函数 f的第一个参数是一个复杂的表达式，但是函数体内根本没用到。
对这个参数求值，实际上是不必要的。
因此，有一些计算机学家倾向于"传名调用"，即只在执行时求值。
 */

