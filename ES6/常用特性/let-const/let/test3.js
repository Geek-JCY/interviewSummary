/*
闭包的方式 解决 test1.js 中的问题
 */

var closeBag = function(i){
    var a = function(e){
        console.log(i);
    }
    return a;
}

var arr = [];
for(var i=0; i<10; i++){
    arr[i] = closeBag(i);
}

arr[6]();

