/*
FireFox 引入了 load事件，以替代 readystatechange事件。响应接收完毕后就会触发 load事件，因此也就没有必要去检查 readyState属性了。

而 onload事件处理程序会接收到一个 event对象，其 target属性就指向 XHR对象实例，因而可以访问到 XHR对象的所有方法和属性。

但是，并非所有浏览器都为这个事件实现了适当的事件对象。开发人员还是要像下面这样 被迫使用 XHR对象变量；

如下：
 */
var xhr = createXHR();

xhr.onload = function(){
	if( (xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 ){
		console.log(xhr.responseText);
	} else {
		console.log('Request was unsucessful: ' + xhr.status );
	}
}

xhr.open('get','example.php', true);
xhr.send(null);

/*
只要浏览器接收到服务器的响应，不管其状态如何，都会触发 load事件。

这也就意味着 你可以不用检查 readState属性，但是必须 检查 status属性，才能确定响应的数据是否真的可用了；

FireFox、Opera、Chrome、Safari 都支持 load事件；
 */




