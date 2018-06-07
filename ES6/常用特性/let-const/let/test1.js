/*
ES5只有 函数作用域 和 全局作用域，没有 块级作用域，造成很多不合理的场景
 */
// 场景一：内层变量 覆盖 外层变量
var name = 'zach'
while(true){
    var name = "obama"
    console.log(name);
    break;
}
console.log(name);

// 场景二：用来计数的 循环变量 泄漏为全局变量
var a = [];
for(var i=0; i<10; i++){
    a[i] = function(){
        console.log(i);
    }
}
// var i = 66;
a[6]();
console.log(a.toString()); // function(){console.log(i)},function(){console.log(i)},......... 
/*
场景二 变量i是var声明的，在全局范围内有效。所以每循环一次，新的 i 值都会覆盖旧值，
导致最后 执行 a[6]() 函数时 输出的是最后一轮的i值。
 */




