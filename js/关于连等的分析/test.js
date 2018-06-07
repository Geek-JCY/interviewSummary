var a = 1;
var b = a;
a.x = a = 3;

// 相当于

var a = 1; // 此时 a = 1

var b = a; // 此时 a = 1, b = 1

a.x = 值;  // 此时，“值” 理应为 后边 (a=3）这个语句执行后, a的值，也就是3，但是 由于a是常量不能有属性，所以 a.x 为 undefined

a = 3;	   // a重新赋值了，此时, a = 3, b = 1


console.log(a); // 3

console.log(b); // 1

console.log(a.x); // undefined，(a=3)执行后 a是个常量, 根本没有 属性x, 所以是 undefined