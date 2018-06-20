/*
如果一个对象的属性是 Generator 函数，可以简写成下面的形式。
 */
let obj = {
  * myGeneratorMethod() {
    // ...
  }
};
/*
上面代码中，myGeneratorMethod属性前面有一个星号，表示这个属性是一个 Generator 函数。

它的完整形式如下，与上面的写法是等价的。
 */
let obj = {
  myGeneratorMethod: function* () {
    // ...
  }
};






