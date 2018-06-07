/*
在来个经典的例子
 */
var result = new Array();

// for(var i=0; i<10; i++){
//     result[i] = function(){
//         console.log(i);
//     }
// }
// result[5](); // 结果是 10
// result[6](); // 结果是 10
/*
原因：
    result[5] => function(){console.log(i)}
 
    result[5]在作为函数执行的时候，因为从作用域上查找 变量i的值的时候，取的是全局变量对象中的变量i;

    而，全局变量i的值最后等于10; 所以 result[5]() 的输出结果为 10；
 */
// 改造 1：
// for(var i=0; i<10; i++){
//     result[i] = function(arg){
//         console.log(arg);
//     }.bind(null,i);
// }

// result[2]();

// 改造 2：
// for(var i=0; i<10; i++){
//     result[i] = function(arg){
//         return function(){
//             console.log(arg);
//         }
//     }(i);
// }

// result[2]();

// 改造 3：
for(var i=0; i<10; i++){
    result[i] = function(){
        var arg = i;
        return function(){
            console.log(arg);
        }
    }();
}

result[2]();
