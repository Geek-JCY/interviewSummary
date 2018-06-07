/*
每个HTTP 请求 和 响应都会带有相应的头部信息；
默认发送 XHR请求的同时，还会发送下列头部信息，如下：
    - Accept: 浏览器能够处理的内容类型；
    - Accept-CharSet: 浏览器能够显示的字符集；
    - Accept-Encoding: 浏览器能能够处理的压缩编码；
    - Accept-Language: 浏览器当前设置的语言；
    - Connection: 浏览器与服务器之间的连接类型；
    - Cookie: 当前页面设置的任何Cookie;
    - Host: 发送请求的页面所在的域；
    - Referer: 发送请求的页面URI；
    - User-Agent: 浏览器的用户代理字符串；
 
扩展：URI、URL、URN
    URI：Uniform Resource Identifier, 统一资源标识符；
    URL: Uniform Resource Locator, 统一资源定位符；
    URN: Uniform Resource Name, 统一资源名称;
    URL、URN 是 URI 的子集；

设置自定义请求头部信息：xhr.setRequestHeader(), 它接受两个参数：
    - 头部字段的名称
    - 头部字段的值
    注意：为了成功发送请求头部信息，必须在 open() 方法之后，send()方法之前，设置自定义的头部信息；
        如下：
            var xhr = createXHR();
            xhr.onreadystatechange = function(){
                if( xhr.readyState == 4 ){
                    if( (xhr.status>=200 && xhr.status<300) || xhr.status=304) {
                        console.log(xhr.responseText);
                    } else {
                        console.log("Request was unsucessful: "+ xhr.status);
                    }     
                }
            }
            xhr.open('get', 'example.php', true);
            xhr.setRequestHeader("MyHeader", "MyValue");
            xhr.send(null);
    鼓励使用 自定义头部信息，而不更改原头部信息；

取得响应的头部信息:
    - getResponseHeader(): 传入相应的头部字段名称，可以得到相应的头部信息；
    - getAllResponseHeaders(): 可以得到一个包含所有头部信息的长字符串；





 */