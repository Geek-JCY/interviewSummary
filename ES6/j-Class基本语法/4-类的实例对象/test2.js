/*
与 ES5 一样，实例的属性除非显式定义在其本身（即定义在 this对象上），否则都是定义在原型上（即定义在 class上）。
 */
//定义类
class Point {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }

}

var point = new Point(2, 3);

point.toString(); // (2,3)

point.hasOwnProperty('x');                  // true
console.log( point.hasOwnProperty('x') );
point.hasOwnProperty('y');                  // true
console.log( point.hasOwnProperty('y') );
point.hasOwnProperty('toString');           // false
console.log( point.hasOwnProperty('toString') );
point.__proto__.hasOwnProperty('toString'); // true
console.log( point.__proto__.hasOwnProperty('toString') );

/*
上面代码中，x 和 y都是实例对象point自身的属性（因为定义在this变量上），所以 hasOwnProperty方法返回true，
而 toString是原型对象的属性（因为定义在 Point类上），所以 hasOwnProperty方法返回 false。
这些都与 ES5 的行为保持一致。
 */




