var fn = function(bar, num){
    return bar() + num;
}

var a = fn(function(){  // 匿名函数
    return 10;
}, 20);

console.log(a);

/*
匿名函数作为 参数传递给 fn()
 */

