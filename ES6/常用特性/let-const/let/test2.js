/*
用 let 就不会出现 test1.js的问题，因为 let声明的变量，只在 let命令所在的代码块内有效，
也就是，所谓的 块级作用域 内有效
 */
// 场景一：规避 --> 内层变量 覆盖 外层变量
let name = 'zach'
while(true){
    let name = "obama"
    console.log(name);
    break;
}
console.log(name);

// 场景二：规避 --> 用来计数的 循环变量 泄漏为全局变量
var a = [];
for(let i=0; i<10; i++){
    a[i] = function(){
        console.log(i);
    }
}
a[6]();



