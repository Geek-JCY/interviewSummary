/*
在类的实例上面调用方法，其实就是调用原型上的方法。
 */
class B {}
let b = new B();

b.constructor === B.prototype.constructor;  // true
/*
上面代码中，b是 B类的实例，它的 constructor方法就是 B类原型的 constructor方法。
 */
/*
由于类的方法都定义在 prototype对象上面，所以类的新方法可以添加在 prototype对象上面。
Object.assign 方法可以很方便地一次向类添加多个方法。
 */
class Point {
  constructor(){
    // ...
  }
}

Object.assign(Point.prototype, {
    toString(){},
    toValue(){}
});

/*
prototype对象的 constructor属性，直接指向“类”的本身，这与 ES5 的行为是一致的。
 */
Point.prototype.constructor === Point // true

