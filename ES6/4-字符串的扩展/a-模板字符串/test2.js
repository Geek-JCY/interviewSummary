/*
    如果 需要引用模板字符串本身，在需要时执行 有如下写法
 */
// 写法一：
let str1 = 'return' + '`Hello ${name}`';
let func1 = new Function('name', str1);
console.log( func1('Jack') );

// 写法二：
let str2 = '(name) => `Hello ${name}`';
let func2 = eval.call(null, str2);
console.log( func2('Jhon') );

