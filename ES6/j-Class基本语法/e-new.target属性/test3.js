/*
需要注意的是，子类继承父类时，new.target会返回子类。
 */
class Rectangle {
    constructor(length, width){
        console.log(new.target);
        console.log(new.target === Rectangle);
    }
}

class Square extends Rectangle {
    constructor(length) {
        super(length, length);
    }
}

var obj = new Square(3); 
// [Function: Square]
// false

/*
上面代码中，new.target会返回子类。

利用这个特点，可以写出不能独立使用、必须继承后才能使用的类。
 */
class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error('本类不能实例化');
    }
  }
}

class Rectangle extends Shape {
    constructor(length, width){
        super();
        // ...
    }
}

var x = new Shape(); // 报错
var y = new Rectangle(3, 4); // 正确
/*
上面代码中，Shape类不能被实例化，只能用于继承。

注意，在函数外部，使用 new.target会报错。
 */

