//*** 为什么需要块级作用域

// 1. 第一种场景，内层变量可能会覆盖外层变量
var tmp = new Date();
function f() {
    console.log(tmp);
    if(false){
        var tmp = 'hello world';
    }
}
f();    // undefined

// 2. 第二种场景，用来计数的循环变量泄露为全局变量
var s = 'hello';
for(var i=0; i<s.length; i++){
    console.log(s[i]);
}
console.log(i); // 5