/*
IE对 CROS的实现：
	IE8 中引入XDR(XDomainRequest)类型，它与 XHR类似，但有些不同之处：
		- cookie不能随意发送，也不会随响应返回；
		- 只能设置请求头部信息中的 Content-Type字段；
		- 不能访问响应的头部信息；
		- 只支持 GET 和 POST请求；
	XDR的使用方法与XHR也类似，都是先创建 XDR实例，然后使用 open()、send()方法；
	不同之处:
		- open()方法只接受两个参数(请求类型，url)；
		- XDR请求都是异步的执行的，不能创建同步执行；
		- 响应之后只能访问响应的原始文本，不能确定响应的状态码；
		- 如果响应失败(响应中缺少 Access-Control-Request-Orign头部字段)，并触发 error事件，error中只有错误本身，并没有其它信息可用；
	相同之处：
		- 请求返回之前可以调用 abort() 方法终止请求；
		- 通过设置 timeout, 规定响应的最大时长；
		- 请求返回之后，都会触发 load事件；
		- 响应的数据保存在 responseText属性中；
	如下 DEMO:
		var xdr = new XDomainRequest();
		xdr.onload = function(){
			console.log(xdr.responseText);
		}
		xdr.onerror = function(){
			console.log('An error occured.');
		}
		xdr.timeout = 1000;
		xdr.ontimeout = function(){
			console.log("Request timeout");
		}
		xdr.open('get', 'example.txt');
		xdr.send(null);

	为了支持 POST请求，XDR对象提供了 contentType属性，用来表示发送数据的格式, 使用方式如下：
		var xdr = new XDomainRequest();
		xdr.open('get', 'example.txt');
		xdr.contentType = "application/x-www-form-urlencoded"
		xdr.send(null);
 */