/*
从 ES5 开始，在严格模式之中，八进制就不再允许使用前缀0表示，ES6 进一步明确，要使用前缀0o表示。
 */
// 非严格模式
(function(){
    console.log(0o11 === 011);  //true
})();

// 严格模式
(function(){
    console.log(0o11 === 011);  // Uncaught SyntaxError: Octal literals are not allowed in strict mode.
})();