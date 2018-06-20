/*
Proxy 实例的方法
 */
/*
1.get()
get 方法用于拦截某个属性的读取操作，可以接受三个参数，
依次为 目标对象、属性名 和 Proxy实例本身(即 this关键字指向的那个对象)，其中最后一个参数可选。
get方法的用法，上文已经有一个例子，下面是另一个拦截读取操作的例子。
 */
var person = {
    name: '张三'
};

var proxy = new Proxy(person, {
    get: function(target, property){
        if(property in target){
            return target[property];
        } else {
             throw new ReferenceError("Property \"" + property + "\" does not exist.");
        }
    }
});
console.log(proxy.name); // "张三"
console.log(proxy.age); // 抛出个错误

/*
上面代码表示，如果访问目标对象不存在的属性，会抛出一个错误。
如果没有这个拦截函数，访问不存在的属性，只会返回undefined。
 */


