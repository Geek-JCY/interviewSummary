/*
yeild 错误应用 一：

另外需要注意，yield表达式只能用在 Generator 函数里面，用在其他地方都会报错。
 */
(function(){
    yield 1;
})();
// SyntaxError: Unexpected number
/*
上面代码在一个普通函数中使用 yield表达式，结果产生一个句法错误。
 */











