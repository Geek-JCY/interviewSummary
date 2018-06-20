/*
我们知道，this关键字总是指向函数所在的当前对象，ES6 又新增了另一个类似的关键字super，指向当前对象的原型对象。
 */
// 例子：
const proto = {
    foo: 'hello'
};
const obj = {
    find() {
        return super.foo;
    }
};
Object.setPrototypeOf(obj, proto);
obj.find();

console.log( obj.find() );