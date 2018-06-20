/*
    解构赋值的一个用处，是扩展某个函数的参数，引入其他操作。
 */
function baseFunction(a, b){
    // ....
}
function wrapperFunction({x, y, ...restConfig}) {
    // 使用x和y参数进行操作
    // 其余参数传给原始函数
    return baseFunction(restConfig);
}

/*
上面代码中，原始函数baseFunction接受a和b作为参数，
函数wrapperFunction在baseFunction的基础上进行了扩展，能够接受多余的参数，并且保留原始函数的行为。
 */
