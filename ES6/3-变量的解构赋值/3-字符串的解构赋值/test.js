/*
    字符串也可以解构赋值，字符串被转换成了一个类似数组的对象
 */
const [a, b, c, d, e] = 'hello';
console.log('a-------------->', a);
console.log('b-------------->', b);
console.log('c-------------->', c);
console.log('d-------------->', d);
console.log('e-------------->', e);

// 类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
let {length: len} = 'hello';
console.log('len----------->', len);