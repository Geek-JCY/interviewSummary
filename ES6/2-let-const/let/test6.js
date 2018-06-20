/*
    块级作用域 可以替代 立即执行函数
 */
// IIFE 写法
(function(){
    var tmp = '666';
    console.log(tmp);
})();

// 块级作用域的写法
{
    let tmp = '8888';
    console.log(tmp);
}