/*
14. new.target 属性

new 是从构造函数生成实例对象的命令。
ES6 为 new命令引入了一个 new.target属性，该属性一般用在构造函数之中，返回 new命令作用于的那个构造函数。
如果构造函数不是通过 new命令调用的，new.target会返回 undefined，因此这个属性可以用来确定构造函数是怎么调用的。
 */
function Person(name){
    if(new.target !== undefined){
        this.name = name;
    }
    else {
        throw new Error('必须使用 new 命令生成实例');
    }
}

// 另一种写法
function Person(name){
    if(new.target === Person){
        this.name = name;
    }
    else {
        throw new Error('必须使用 new 命令生成实例');
    }
}

var person = new Person('张三'); // 正确
var notAPerson = Person.call(person, '张三'); // 报错
/*
上面代码确保构造函数只能通过 new命令调用。
 */



