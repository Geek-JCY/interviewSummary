/*
ES6 的类，完全可以看作构造函数的另一种写法。
 */
class Point {
    // ....
}

typeof Point; // "function"
Point === Point.prototype.constructor; // true
console.log(typeof Point);
console.log(Point === Point.prototype.constructor);
/*
上面代码表明，类的数据类型就是函数，类本身就指向构造函数。
 */
/*
使用的时候，也是直接对类使用 new命令，跟构造函数的用法完全一致。
 */
class Bar {
    doStuff() {
        console.log('stuff');
    }
}
var b = new Bar();
b.doStuff(); // "stuff"





