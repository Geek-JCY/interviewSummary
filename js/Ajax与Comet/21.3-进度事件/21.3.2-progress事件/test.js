/*
Mozilla 对 XHR的另一个革新，就是添加了 progress事件，这个事件会在浏览器接收数据期间周期性的触发。

onprocess事件处理程序会接收到一个 event对象, 它包含：
	
	- target属性： 代表 XHR对象；
	- lengthComputable: 表示进度信息是否可用的布尔值；
	- position: 表示已经接收的字节数；
	- totalSize: 表示根据 Content-Length响应头部确定的预期字节数；

为了确保正常执行，必须在调用 open()方法之前，添加 onprogress事件处理程序。

最直接的一个应用就是 进度指示啦：

如：test.html
 */