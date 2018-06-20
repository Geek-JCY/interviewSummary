/*
由于本质上，ES6 的类只是 ES5 的构造函数的一层包装，所以函数的许多特性都被 Class继承，包括 name属性。
 */
class Point {}
Point.name // "Point"
/*
name属性总是返回紧跟在 class关键字后面的类名。
 */

