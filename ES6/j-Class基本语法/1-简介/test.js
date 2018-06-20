/*
1.简介

JavaScript 语言中，生成实例对象的传统方法是通过构造函数。下面是一个例子。
 */
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function(){
    return '(' + this.x + ', ' + this.y + ')';
}

var p = new Point(1, 2);
/*
上面这种写法跟传统的面向对象语言（比如 C++ 和 Java）差异很大，很容易让新学习这门语言的程序员感到困惑。
 */
/*
ES6 提供了更接近传统语言的写法，引入了 Class（类）这个概念，作为对象的模板。通过 class关键字，可以定义类。
 */
/*
基本上，ES6 的 class可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，
新的 class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。
上面的代码用 ES6 的 class改写，就是下面这样。
 */
// 定义类
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString(){
        return '(' + this.x + ', ' + this.y + ')';
    }
}
/*
上面代码定义了一个“类”，可以看到里面有一个 constructor方法，这就是构造方法，而 this关键字则代表实例对象。
也就是说，ES5 的构造函数 Point，对应 ES6 的 Point类的构造方法。
 */
/*
Point类除了构造方法，还定义了一个 toString方法。
注意，定义“类”的方法的时候，前面不需要加上 function这个关键字，直接把函数定义放进去了就可以了。
另外，方法之间不需要逗号分隔，加了会报错。
 */




