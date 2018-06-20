/*
另一个新的 API，Reflect.ownKeys方法可以返回所有类型的键名，包括常规键名和 Symbol 键名。
 */ 
let obj = {
    [Symbol('my_key')]: 1,
    enum: 2,
    nonEnum: 3
};

Reflect.ownKeys( obj ); // [ 'enum', 'nonEnum', Symbol(my_key) ]

console.log( Reflect.ownKeys( obj ) );