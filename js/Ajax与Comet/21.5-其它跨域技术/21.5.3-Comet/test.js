/*
Ajax是一种从页面向服务器请求数据的技术；

而 Comet是一种服务器向页面推送数据的技术，Comet是 Ajax的进一步扩展,它能让服务器几乎能够实时的向客户端推送数据；
非常适合比赛分数和股票报价等领域；

Comet的两种实现方式：长轮询 和 HTTP流；所有浏览器都支持 长轮询，只有部分浏览器原生支持 HTTP流；

->.轮询：

短轮询：
    浏览器定时向服务器发送请求，浏览器在接收到请求后，不管有没有数据更新，即时做出响应；
    浏览器接收到响应后，浏览器关闭连接；再次到达定时时间后，再次向服务器发起请求，重复上述步骤；

长轮询：
    浏览器发起一个到服务器的请求，然后服务器一直保持打开状态，知道有数据可发送，才做出响应；
    浏览器接收到响应后，浏览器关闭连接，然后随即又发起一个请求，再次等待服务器做做出响应，重复上述步骤；

短轮询 和 长轮询：
    共同点：浏览器在接收数据之前，都是先要发起对向服务器服务器的连接；也就是首先由 浏览器发起请求；
    不同点：服务器发送数据的方式不同；
            短轮询：服务器接收到请求后，无论数据是否有效，立即发送响应；
            长轮询：服务器接收到请求后，等到服务器有有效数据后，才发送响应；

轮询的优势：
    所有浏览器都支持，使用 XHR对象 和 setTimeout()就能实现；


->.HTTP流：

HTTP流与轮询的不同：
    HTTP流在页面的整个生命周期内，只使用了一个HTTP连接；

HTTP流的实现过程：
    浏览器向服务器发起一个请求，而服务器保持连接一直打开，然后周期性的向浏览器发送数据；

    主要利用了服务端语言支持打印到输出缓存然后刷新(将输出缓存中的内容一次性全部发送到客户端)的功能；

下面是一个 XHR实现 HTTP流的例子：如下
 */
// DEMO:
function createStreamimgClient(url, progress, finished){
    var xhr = new XMLHttpRequest(),
        receive = 0;

    xhr.open('get', url, true);
    xhr.onreadystatechange = function(){
        var result;

        if(xhr.readyState == 3){
            // 只取得最新的数据并调整计数器
            result = xhr.responseText.substring(received);
            received += result.length;

            // 调用 process回调函数
            process(result); // 在接收到数据时调用的函数
        } else if ( xhr.readyState == 4 ){
            // 调用 finished函数
            finished(xhr.responseText); // 关闭连接时调用的函数
        }
    }
    xhr.send(null);
    return xhr;
} 

var client = createStreamimgClient('streaming.php', function(data){
    alert("Received: "+ data);
},function(data){
    alert("Done!");
});
/*
上例，只要 onreadystatechange事件发生，而且 readyState值为3，就对 responseText进行分割以取得最新数据；

随着不断从服务器接收数据，readyState的值会周期性的变为 3；当 readyState变为 3时，调用 process()函数，让responseTexts属性中就会保存数据；

当 readyState变为4时，则执行 finished()函数返回所有 responseText中保存的所有数据；
 */


