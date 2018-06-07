/*
浏览器社区认为 Comet是未来 Web的一个重要组成部分，为了简化这一技术，又我 Comet创建了两个新的接口；

SSE(Server-Send Event, 服务器发送事件) 和 Web Sockets;

->.SSE:
    SSE是围绕只读 Comet交互推出的 API或者模式；
    SSE API用于创建到服务器的单向连接，服务器通过这个连接可以发送任意数量的数据。
    服务器响应的 MIME类型必须是 text/event-stream；而且必须是以 浏览器中 JavaScript API能解析的格式输出；
    SSE支持 短轮询、长轮询、HTTP流，而且能在断开连接时自动确定何时重新连接；

SSE API使用：
    首先，要预定新的事件流，创建一个新的 EventSource对象，并传入一个入口点；
        var source = new EventSource('myevents.php'); // 注意,传入的URL 必须与创建对象的页面同源

    EventSource的实例有一个 readyState属性，属性值：
        - 0：表示正在建立连接
        - 1：表示打开了连接
        - 2：表示关闭了连接

    EventSource的实例，还有以下三个事件：
        - open: 在建立连接时触发
        - message: 从服务器接收到新事件时触发
        - error: 在无法建立连接时触发

使用方式, 如下：
 */
// DEMO:
var source = new EventSource('myevents.php'); 
source.onmessage = function(event){
    var data = evetn.data;
}
source.onerror = function(){
    // do something...
}
/*
默认情况下，EventSource对象会保持与服务的活动链接。如果断开，还会重新连接。这就意味着 SSE适合长轮询和HTTP流；

如果想强制断开连接，可以使用 close() 方法；如 source.close();
 */
/*
->.事件流：
    服务器事件会通过一个持久的 HTTP响应发送，这个响应的 MIME类型为 text/event-stream, 响应的格式纯文本；
    最简单的情况是 每个数据都带有前缀 data:, 如下：
    // DEMO:
    data: foo

    data: bar

    data:foo
    data:bar

    对于以上的响应而言，事件流中的
        第一个 message事件返回的 event.data 值为 "foo",
        第二个 message事件返回的 event.data 值为 "bar",
        第三个 message事件返回的 event.data 值为 "for\nbar"(注意换行符)
    注意的点：
        1.只有data:的数据行后面有空行时，才会触发 message事件，因此在服务器上生成事件流时不能忘了添加这一行；
        2.多个连续的data:开头的数据行，将作为多段数据解析，每个值之间以一个换行分隔；

设置ID：
    通过 id: 前缀可以给特定的事件指定一个关联的ID，这个ID行位于 data: 行前后皆可以；如下：
        // DEMO:
        data:foo
        id: 1
    
    作用：
        设置ID后，EventSource对象会跟踪上一次触发的事件。如果连接断开了，会想服务器发送一个包含名为 Last-Event-ID的特殊 HTTP头部请求；
        以便 服务器知道下一次 要触发哪个事件。
        这种机制在多次连接的事件流中，可以确保浏览器以正确的顺序收到连接的数据段；
 */




