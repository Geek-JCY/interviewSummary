/*
IE8 为 XHR对象添加了一个 timeout属性，表示请求在等待响应多少毫秒之后就终止；

timeout属性 设置值之后，在规定时间之内浏览器还没有接收到响应，就会触发 timeout事件，进而调用 ontimeout事件处理程序。
 */