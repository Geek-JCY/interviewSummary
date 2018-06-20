/*
    3. 暂时性死区
 */
var tmp = '6666';

if (true) {
    // TDZ 开始
    tmp = 'abc';    // ReferenceError
    console.log(tmp);   // ReferenceError

    let tmp;    // TDZ 结束
    console.log(tmp);   // undefined

    tmp = 123;
    console.log(tmp);   // 123
}

/*
    上面代码中, 存在全局变量tmp，但是块级作用域内let又声明了一个局部变量tmp，导致后者绑定这个块级作用域，所以在let声明变量前，对tmp赋值会报错。
    
    上面代码中，在let命令声明变量tmp之前，都属于变量tmp的“死区”。

 */