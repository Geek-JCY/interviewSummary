/*
Reflect.get(target, name, receiver)
Reflect.get方法查找并返回target对象的name属性，如果没有该属性，则返回undefined。
 */
var myObject = {
    foo: 1,
    bar: 2,
    get baz(){
        return this.foo + this.bar
    }
};
Reflect.get(myObject, 'foo');   // 1
Reflect.get(myObject, 'bar');   // 2
Reflect.get(myObject, 'baz');   // 3

/*
如果name属性部署了读取函数（getter），则读取函数的 this 绑定 receiver。
 */
var myObject = {
  foo: 1,
  bar: 2,
  get baz() {
    return this.foo + this.bar;
  },
};
var myReceiverObject = {
  foo: 4,
  bar: 4,
};
Reflect.get(myObject, 'baz', myReceiverObject); // 8