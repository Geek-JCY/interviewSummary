/*
如果对象的方法是一个 Symbol 值，那么name属性返回的是这个 Symbol 值的描述。
 */
const key1 = Symbol('description');
const key2 = Symbol();

let obj = {
    [key1]() {},
    [key2]() {}
};
obj[key1].name;
obj[key2].name;

console.log( obj[key1].name );
console.log( obj[key2].name );