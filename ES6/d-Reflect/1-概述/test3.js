/*
（4）Reflect对象的方法与 Proxy对象的方法一一对应，只要是Proxy对象的方法，就能在Reflect对象上找到对应的方法。
    这就让Proxy对象可以方便地调用对应的Reflect方法，完成默认行为，作为修改行为的基础。
    也就是说，不管Proxy怎么修改默认行为，你总可以在Reflect上获取默认行为。
 */
Proxy(target, {
    set: function(target, name, value, receiver){
        var success = Reflect.set(target, name, value, receiver);
        if(success){
             log('property ' + name + ' on ' + target + ' set to ' + value);
        }
        return success;
    }
});
/*
上面代码中，Proxy方法拦截target对象的属性赋值行为。
它采用Reflect.set方法将值赋值给对象的属性，确保完成原有的行为，然后再部署额外的功能。
 */

// 下面是另一个例子
var loggedObj = new Proxy(obj, {
  get(target, name) {
    console.log('get', target, name);
    return Reflect.get(target, name);
  },
  deleteProperty(target, name) {
    console.log('delete' + name);
    return Reflect.deleteProperty(target, name);
  },
  has(target, name) {
    console.log('has' + name);
    return Reflect.has(target, name);
  }
});
/*
上面代码中，每一个Proxy对象的拦截操作（get、delete、has），
内部都调用对应的 Reflect方法，保证原生行为能够正常执行。
添加的工作，就是将每一个操作输出一行日志。
 */

/*
有了Reflect对象以后，很多操作会更易读。
 */
// 老写法
Function.prototype.apply.call(Math.floor, undefined, [1.75]);
// 新写法
Reflect.apply(Math.floor, undefined, [1.75]);