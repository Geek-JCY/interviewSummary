/*
Progress Events规范了 W3C 的一个工作草案，定义了与客户端服务器通信的有关事件；

事件如下：

	- loadstart : 在接受响应的数据的第一个字节时触发；

	- progress ： 在接受响应期间持续不断的触发；

	- error ：请求发生错误的时候触发；

	- abort : 在因为调用 abort() 方法而终止连接时触发；

	- load : 在接收完完整的响应数据时触发；

	- loadend : 在通信完成 或者 触发 error、abort、load事件后触发；

	整个触发过程为，在触发 loadstart事件开始，接着是一个或多个 progress事件，然后触发 error、abort、或者 load事件中的一个，最后触发 loadend事件；

	目前 支持前 5事件的浏览器：Firefox 3.5+、Safari 4+、Chrome、iOS版Safari、Android版 WebKit;

	Opera 11+、IE8+ 只支持 load事件；

	还没有 浏览器支持 loadend事件；
 */