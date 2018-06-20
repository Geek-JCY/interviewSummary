/*
构造函数的 prototype属性，在 ES6 的“类”上面继续存在。事实上，类的所有方法都定义在类的 prototype属性上面。
 */
class Point {
    constuctor() {
        // ...
    }
    toString() {
        // ...
    }
    toValue() {
        // ...
    }
}

// 等同于
Point.prototype = {
    constructor() {},
    toString() {},
    toValue() {},
}





