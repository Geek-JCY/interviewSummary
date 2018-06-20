/*
    不允许重复声明
 */
// 报错
function func1(){
    let a = 10;
    var a = 1;
}
// 报错
function func2(){
    let a = 10;
    let a = 1;
}
// 报错
function func3(arg) {
    let arg;    // 报错
}
// 不报错
function func4(arg){
    {
        let arg;    // 不报错
    }
}
