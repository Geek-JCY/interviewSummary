/*
使用 XHR 对象时，
第一个方法 open(),它接受是三个参数：要发送的请求的类型（get、post等）、请求的URL、表示是否为异步请求的布尔值；

    如： xhr.open('get', "example.php", false);

    注意：- URL相对于的地址相对于当前页面，也可以绝对路径；
          - open()方法并不会真正的发送请求，只是启动一个请求以备发送；


第二个方法 send(),它接受一个参数：作为请求主体发送的数据；如果，不需要发送数据的话，则必须传入null,因为对于有些浏览器这个参数是必须；
    如：xhr.send(null);


XHR对象属性：收到请求后，服务器会做出响应，在浏览器收到响应之后，响应的数据会自动填充到 XHR对象的属性，相关属性：
    - responseText: 作为相应主体被返回的文本
    - responseXML: 如果响应的内容类型是"text/xml" 或 "application/xml",这个属性中将保存包含着响应数据的 XML DOM文档；
    - status: 响应的HTTP状态；
    - statusText: HTTP状态说明；


接收到响应之后，第一步是检查 status属性，以确定响应已成功返回：
    HTTP状态码：
        200：响应已成功返回；
        304：请求的资源并没有被修改，可以直接使用浏览器中缓存的版本；
    判断HTTP状态码的正确方式：如下
        if( (xhr.status>=200 && xhr.status<300) || xhr.status=304) {
            console.log(xhr.responseText);
        } else {
            console.log("Request was unsucessful: "+ xhr.status);
        }    
    注意：
        - 一般我们要通过检测 status来决定下一步的操作，不要依赖 statusText，因为 statusText 在跨浏览器使用时并不可靠；
        - 无论内容类型是什么，都会保存在 responseText属性中；
        - 对于非XML数据而言，responseXML属性的值将为 null;


同步的时候，因为是顺序执行，可以直接判断 xhr.status HTTP状态码；但是大多数的时候，为了不必等待响应，我们都是异步方式通信；
这个时候，我们就要使用异步通信的方式啦，此时呢我们可以通过检测 XHR对象的 readyState属性，它表示 请求/响应 过程的当前活动阶段；
其可取的值，如下：
    - 0: 未初始化。尚未调用 open() 方法；
    - 1: 启动。已经调用 open()方法, 但还未调用 send() 方法；
    - 2: 发送。已经调用 send()方法, 但还尚未接收到响应；
    - 3: 接收。已经接收到部分响应数据。
    - 4: 完成。已经接收完全部数据，并且可以在客户端使用；

只要 readyState的值从一个值变为另一个值，就会触发一次 onreadystatechange 事件，所以我们可以利用这个事件来检测 readyState 的值，
来判断当前处于 请求/响应 的哪个阶段，通常我们只对 readyState 等于 4的值感兴趣，因为这时所有的数据已经准备就绪；
    注意：
        - 必须在调用 open() 方法之前指定 onreadystatechange 事件处理程序才能确保跨浏览器兼容性；
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
    xhr.send(null);


在接收到响应之前，还可以调用 abort() 来取消异步请求，如：xhr.abort();
调用这个方法，XHR对象会停止触发事件，也不再允许访问任何与响应有关的属性；
终止请求后，还应该对 XHR对象进行 解索引的操作；

 */