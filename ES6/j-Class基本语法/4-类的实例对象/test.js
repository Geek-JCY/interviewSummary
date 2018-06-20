/*
4. 类的实例对象

生成类的实例对象的写法，与 ES5 完全一样，也是使用 new命令。
前面说过，如果忘记加上 new，像函数那样调用 Class，将会报错。
 */
class Point { // ... }

// 报错
var point = Point(2, 3);

// 正确
var point = new Point(2, 3);



