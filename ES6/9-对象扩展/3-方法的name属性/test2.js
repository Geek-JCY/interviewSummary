/*
有两种特殊情况：bind方法创造的函数，name属性返回bound加上原函数的名字；Function构造函数创造的函数，name属性返回anonymous。
 */
// eg1:
console.log( (new Function()).name );   // anonymous

// eg2:
var doSomething = function(){   

}
doSomething.bind().name;    // bound doSomething
console.log( doSomething.bind().name );
