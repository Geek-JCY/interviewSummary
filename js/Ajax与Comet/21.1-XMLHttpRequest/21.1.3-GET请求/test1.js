/*
GET请求方式：
    可以将查询字符串参数追加到URL的末尾，以便将信息发送给服务器；
    对于 XHR而言，位于传入 open()方法的URL末尾的查询字符串必须经过正确的编码才行；
    
    GEI请求经常会发生的一个错误就是 格式错误的问题，所以，
    要求：
        1.所有的名称和值都必须使用 encodeURIComponent() 进行编码，然后才能放到 URL末尾；
        2.名称-值 对间要用 “&” 分隔

    一个辅助向现有 URL的末尾添加查询字符串参数的方法：
    function addURLParam(url, name, value){
        url += (url.indexOf("?") == -1 ? "?" : "&");
        url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
    }

    addURLParam() 函数可以确保查询字符串的格式良好，并可靠的应用于 XHR对象；

 */