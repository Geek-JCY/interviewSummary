/*
COSR的两种请求方式：
	1.简单请求(simple request) 
	2.非简单请求(not-so-simple requese)

-> 1.简单请求	
限制条件：
	(1).请求方法是三种方法之一：GET、POST、HEAD
	(2).Content-Type: 仅限于 application/x-www-form-urlencoded、multipart/form-data、text/plain
	(3).不能使用 setRequestHeader() 设置自定义头部
	(4).不能发送和接受 cookie
	(5).调用 getAllResponseHeaders() 方法总会返回空字符串
	由于无论是否同源都使用相同的接口会产生歧义，所以，最好对于本地资源使用相对URL，对于远程资源时使用绝对URL，是比较不错的选择，
	这样即消除了歧义，又避免出现限制访问头部或本地cookie信息等问题；

基本流程：
	.->浏览器发现这次请求是 跨源请求
	.->浏览器自动在头信息中添加一个 Orign字段(Origin:字段用来说明 本次请求来自哪个源：协议 + 域名 + 端口)
	.->向服务器发送请求
	.->服务器根据 Origin字段的值，决定是否同意这次请求

	.->如果，Origin指定的源不在许可范围内，服务器会返回一个正常的 HTTP响应，但这个响应头部信息不包含 Access-Control-Allow-Origin字段，
		->.浏览器发现没有这个字段，知道这次请求是不在许可范围内的，然后抛出一个错误，
		->.这个错误被 XMLHttpRequest 的 onerror回调函数捕获；
		注意：这种错误无法通过状态识别码识别，因为HTTP响应的状态码可能是 200;
			换句话说就是，这个过程完成了一次请求和响应的过程，只是响应返回的信息是告诉浏览器这次请求是不在允许范围内的；

	.->如果，Origin指定的域名在许可范围内，服务器返回 HTTP响应时，会多出几个头信息字段:
		DEMO:
			Access-Control-Allow-Origin: http://api.bob.com
			Access-Control-Allow-Credentials: true
			Access-Control-Expose-Headers: FooBar
			Content-Type: text/html; charset=utf-8

		- Access-Control-Allow-Origin: 该字段是必须的。它的值是请求是 Origin字段的值，或者是 *(表示接受任意域名的请求)；
		- Access-Control-Allow-Credentials: 
			可选。默认情况下，跨源请求不提供凭据(cookie、HTTP认证及客户端 SSL证明等)，通过设置 XHR对象的 withCredentials属性值为 true,
			可以指定某个请求应该发送凭据。如果服务器接受带凭据的请求，会用"Access-Control-Allow-Credentials: true" 的 HTTP头部来响应;
			并且要注意的是，这个值也只能设置为 true,如果服务器不要浏览器发送凭据的话，直接去掉此字段即可；
			而且，必须前后端都进行设置，缺一不可，即：
				前端：xhr.withCredentials = true; （可取值：true  or  false）
				后端：Access-Control-Allow-Credentials: true; (可取值：设置此字段 或者 不设置此字段)
			支持 withCredentials属性的浏览器 FireFox 3.5+、Safari 4+、Chrome, IE 10及更早版本都不支持；
		- Access-Control-Expose-Headers: 
			可选。CORS请求时，XMLHttpRequest对象的getResponseHeader()方法只能拿到6个基本字段：
			Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma。
			如果想拿到其他字段，就必须在Access-Control-Expose-Headers里面指定。
			上面的例子指定了"Access-Control-Expose-Headers: FooBar"，所以，getResponseHeader('FooBar')可以返回FooBar字段的值。
		- Content-Type: 必选。指定了返回的内容是什么格式和编码；
		->.浏览器根据响应头中多出来的这几个字段来整理响应的数据，给 XHR对象的 responseText 或者 responseXML赋值；


-> 2.非简单请求

基本介绍：
	非简单请求的 CORS请求，会在正式请求之前，增加一次 HTTP查询请求，称为“预检”请求(Preflighted Requests);
	这种 Preflighted Requests是一种头透明服务器验证机制，支持开发人员使用自定义的头部、GET或POST之外的方法、不同类型的主体内容；
	如：使用 DELETE或 PUT请求方法，或者 Content-Type: application/json 主体内容时，会触发非简单请求；

发送预检请求：	
	在使用非简单请求时，浏览器首先会发送一次 Preflight请求，这种请求使用 OPTIONS方法，表示这个信息是用来询问的，发送下列头部：
		Origin: 页面的源信息
		Access-Control-Request-Method: 请求自身使用的方法
		Access-Control-Request-Headers: (可选)自定义头部信息，多个头部用逗号分隔
	也就是浏览器先询问服务器，网页所在的域名是否在服务器允许的名单之内，以及可以使用哪些 HTTP方法和头信息字段。
	只有得到肯定答复之后，浏览器才会发出正式的 XMLHttpRequest请求，否则就会报错；

预检请求的响应：
	服务器接收到 preflight request后，服务器会决定是否允许这种类型的请求。服务器会在响应中发送头部信息来与浏览器进行沟通，如下：
		Access-Control-Allow-Origin: 
			必选。它的值是请求时的 Origin字段的值，或者是 *(表示接受任意域名的请求)；
		Access-Control-Allow-Methods: 
			必选。表明服务器支持的所有跨域请求的方法,多个用逗号分隔；
			(注意：这里是所有服务器允许跨域请求的方法，而不限于 preflight请求的方法，这是为了避免多次 "预检"请求)
		Access-Control-Allow-Headers: 
			如果浏览器请求中包括 Access-Control-Request-Headers字段，那么响应中 Access-Control-Allow-Headers字段 是必须的；
			它表明浏览器所支持的所有头部信息字段，多个用逗号分隔，不限于浏览器在  Preflight请求中的自定义头部字段；
		Access-Control-Allow-Credentials:
			可选。这与简单请求是相同的，表明都是是否接收带有的凭据的请求；
		Access-Control-Max-Age:
			表示这个 Preflight请求缓存多长时间(毫秒)，在此时间之内，再发送相同请求的时候，不用先执行 Preflight请求；
	也就是说，在一次 Preflight请求结束后，结果将按照响应中的指定时间缓存起来；在 Access-Control-Max-Age时间之内，再次发生此请求，
	不用再进行 Preflight请求，直接发送 XMLHttpRequest请求即可；

支持：
	FireFox 3.5+、Safari 4+、Chorme。IE10 及更早版本不支持；
 */