/*
overrideMimeType()方法，用于重写 XHR响应的 MIME类型。MIME类型决定了 XHR对象如何处理这个响应；

如：服务器返回的 MIME类型是 text/plain, 但是数据中包含的是 XML; 根据 MIME类型，即使数据是 XML，responseXML属性中仍然是 null;

	此时，通过 overrideMimeType()方法，可以保证把响应当作 XML而非纯文本来处理；

如下：
 */
var xhr = createXHR();
xhr.open('get','example.php', true);

xhr.overrideMimeType('text/xml');	// 重写 MIME类型

xhr.send(null);

/*
上面这个例子，强迫 XHR对象将响应当作 XML 而非纯文本来处理。

注意：调用 overrideMimeType() 方法 必须在 send() 方法之前，才能保证重写响应的 MIME类型；
 */

