/*
    *. 标签模板
    *它可以紧跟在一个函数名后面，该函数将被调用来处理这个模板字符串。
    *这被称为“标签模板”功能（tagged template）
 */

let func = (name) => 'hello '+name;
console.log(  func`Jack` );