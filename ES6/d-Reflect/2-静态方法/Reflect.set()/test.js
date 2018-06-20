/*
Reflect.set(target, name, value, receiver)
Reflect.set 方法设置 target 对象的 name 属性等于 value。
 */
var myObject = {
    foo: 1,
    set bar(value) {
        return this.foo = value;
    }
}

myObject.foo // 1
console.log(myObject.foo)

Reflect.set(myObject, 'foo', 2)
myObject.foo // 2
console.log(myObject.foo)

Reflect.set(myObject, 'bar', 3)
myObject.foo // 3
console.log(myObject.foo)





