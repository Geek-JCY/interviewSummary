/*
类的属性名，可以采用表达式。
 */
 let methodName = 'getArea';

class Square {
  constructor(length) {
    // ...
  }

  [methodName]() {
    // ...
  }
}
/*
上面代码中，Square类的方法名 getArea，是从表达式得到的。
 */


