/*
图像 Ping的方式 是借助<img>标签 在网页中可以加载任意域下的图片的特性；这也是在线广告跟踪浏览量的主要方式。

可以动态创建图像，使用 onload 和 onerror事件处理程序来确定是否接收到响应；

图像Ping 是与服务器进行简单的、单向的跨域通信一种方式，请求的数据是以查询字符串的方式发送的，而响应可以是任意内容，通常是像素图或204响应；

通过 图像Ping浏览器得不到任何具体数据，但是通过侦听 load 和 error事件，可以知道响应什么时候接受到的；

DEMO 如 test.html
	var img = new Image();
	img.onload = img.onerror = function(response){
		console.log(response);
		alert("Done!");
	}
	img.src = "https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png?where=super";

为什么要让 onload 和 onerror 等于同一个函数？因为只有这样 才能无论是什么类型的响应，都能在请求完成后得到通知；

图像Ping 缺点：
	1.只能发送 GET请求；
	2.无法访问服务器的响应文本；
	由于这两个缺点，所以 图像Ping只能用于浏览器和服务器间的单向通信；

 */