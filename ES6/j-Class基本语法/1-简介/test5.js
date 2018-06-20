/*
另外，类的内部所有定义的方法，都是不可枚举的（non-enumerable）。
 */
class Point {
  constructor(x, y) {
    // ...
  }

  toString() {
    // ...
  }
}

Object.keys(Point.prototype); // []
Object.getOwnPropertyNames(Point.prototype); // ['constructor', 'toString']
console.log(Object.keys(Point.prototype));
console.log(Object.getOwnPropertyNames(Point.prototype));

/*
上面代码中，toString方法是 Point类内部定义的方法，它是不可枚举的。这一点与 ES5 的行为不一致。
 */
// ES5 代码
var Point = function (x, y) {
  // ...
};

Point.prototype.toString = function() {
  // ...
};

Object.keys(Point.prototype) // ["toString"]
Object.getOwnPropertyNames(Point.prototype) // ["constructor","toString"]
/*
上面代码采用 ES5 的写法，toString方法就是可枚举的。
 */




