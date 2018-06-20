/*
Reflect.construct(target, args)
Reflect.construct方法等同于 new target(...args)，这提供了一种不使用new，来调用构造函数的方法。
 */
function Greeting(name){
    this.name = name;
}

// new 的写法
const instance = new Greeting('张三');
// Reflect.construct 的写法
const instance = Reflect.construct(Greeting, ['张三']);