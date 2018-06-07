/*
Web Worker中正在执行的JS代码完全在另一个作用域中，与当前网页代码不共享作用域；

Web Worker有个重要特点就是，Web Worker中的代码不能访问DOM，也无法通过任何方式影响页面外观；

Web Worker有自己的全局作用域，它的全局对象是 worker对象本身，也就这是在这个全局作用域中 this 和 self引用的都是worker对象；

Web Worker本身也是一个最小化的运行环境；

    1.最小化的 navigator对象，包括 onLine、appName、appVersion、userAgent、platform 属性

    2.只读的 location对象;

    3.setTimeout()、setInterval()、clearTimeout()、clearInterval() 方法

    4.XMLHttpRequest构造函数

使用方式:
    专用worker：专用worker仅仅能被生成它的脚本所使用

    共享worker：共享worker可以被多个脚本使用——即使这些脚本正在被不同的window、iframe或者worker访问
 */