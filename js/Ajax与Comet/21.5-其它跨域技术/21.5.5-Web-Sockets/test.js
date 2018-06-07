/*
Web Sockets特点：
	在一个单独的持久连接上提供全双工、双向通信；

与服务器建立连接的过程：
	在JavaScript中创建了 Web Socket之后，会由浏览器发起一个HTTP请求以建立连接，在取得服务器响应之后，建立的连接会使 HTTP协议升级交换为 Web Socket协议；
	也就是说标准的 HTTP服务器是无法实现 Web Sockets的，只有在支持这种协议的专门服务器才能正常工作；

Web Sockets协议：
	Web Sockets使用了自定义的协议，URL的模式有些不同；
	HTTP协议，未加密的连接为 http://, 加密的连接为 https://
	Web Sockets协议, 未加密的连接为 ws://, 加密的连接为 wss://

Web Sockets协议 相比于 HTTP协议 ：
	优点：
		1.能够在客户端和服务端之间发送非常少量的数据，不必担心 HTTP那样字节级的开销。
		2.由于传递的数据包很小，所以适合移动应用；
	缺点：
		1.制定自定义协议的时间 要比 制定JavaScript API的时间要长；
		2.也还存在一些 一致性 和 安全性 的隐患；

支持：
	FireFox 6+、Safari 5+、Chrome、iOS 4+版Safari

Web Sockets API:
	1.创建 Web Socket:
		var socket = new WebSocket("ws://www.example.com/server.php");
		注意：传入的 URL必须是绝对 URL，同源策略对 Web Sockets不适用；能否建立通信，主要取决于服务器；
	
		实例化 WebSocket对象之后，浏览器会马上尝试创建连接；WebSocket也有表示当前状态的 readyState属性，但也与 XHR的 readyState有些不同：
		- 0: WebSocket.OPENING, 正在建立连接；
		- 1：WebSocket.OPEN, 已经建立连接；
		- 2：WebScoket.CLOSING, 正在关闭连接；
		- 3：WebSocket.CLOSE, 已经关闭连接；
		WebSocket没有readystatechange事件；但是它如上的四种事件对应着不同状态，readyState永远从 0开始；

		关闭连接：
			socket.close(); 
		调用 close()事件之后，readyState的值立即变为 2(正在关闭连接)，而关闭连接后会变为 3；
	
	2.发送和接收数据
		->.发送数据：
			// 创建连接
			var socket = new WebSocket("ws://www.example.com/server.php");
			// 发送纯文本数据的方式
			socket.send('Hello World');
			注意：WebSocket只能发送纯文本数据，所以对于复杂的数据结构，就要在通过连接发送数据之前，将数据序列化，如下；

			var message = {
				time: new Date(),
				text: "Hello World!",
				clientId: "asdkjfkj1223"
			}
			// 发送 JavaScript对象数据
			socket.send( JSON.stringfy(message) );	// 注意：这里这里可以给 服务器发送数据，这也就是它能够实现双向通信的基础

		->.接收数据
			服务器接收到请求，讲数据进行读取和解析；

		->.服务器做出响应
			服务器做出响应，向客户端发送消息，这时 WebSocket会触发 message事件，这个 message事件，同样携带一个 event对象作参数，
			event.data中保存了服务器发来的数据，如下：
				socket.onmessage = function(event){
					var data = event.data;
					// do something......
				}
			值得注意的是，这个 event.data中的数据也是纯字符串，要想得到其它格式的数据，只能手动解析啦；

	3.其它事件
		- open: 成功建立连接时触发；
		- error: 在发生错误是触发，连接不能持续；
		- close: 在关闭连接时触发；
		使用方式：
			var socket = new WebSocket("ws://www.example.com/server.php");
			socket.onopen = function(){
				alert('Connection established.');
			}

			socket.onerror = function(){
				alert('Connection error.');
			}

			socket.onclose = function(event){
				alert('Connection closed.');
			}

		其中，只有colse()事件中的event对象提供了额外的信息，它有三个额外的属性：
			event.wasClean : 布尔值，表示连接是否已经明确的关闭；
			event.code : 服务器返回的数值状态码；
			event.reason : 字符串，包含服务器发回的消息；
		可以把这三个信息显示给用户，也可以记录日志以便将来分析，如下：
		socket.onclose = function(event){
			console.log('Was clean? '+ event.wasClean + " Code: " + event.code + " Reason: " + event.reason );
		}

 */