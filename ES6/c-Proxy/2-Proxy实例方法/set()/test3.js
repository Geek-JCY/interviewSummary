/*
下面是set方法第四个参数的例子。
 */
const handler = {
    set: function(obj, prop, value, receiver){
        obj[prop] = receiver;
    }
};
const proxy = new Proxy({}, handler);
proxy.foo = 'bar' 
proxy.foo === proxy // true
/*
上面代码中，set方法的第四个参数receiver，总是返回this关键字所指向的那个对象，即proxy实例本身。

注意，如果目标对象自身的某个属性，不可写也不可配置，那么set不得改变这个属性的值，只能返回同样的值，否则报错。
 */