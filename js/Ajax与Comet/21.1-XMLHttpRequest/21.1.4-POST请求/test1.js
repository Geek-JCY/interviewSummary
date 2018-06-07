/*
POST请求：
    多用于向服务器发送需要被保存的数据；
    POST请求应该把数据作为请求主体提交，POST请求主体可以包含非常多的数据，而且格式不限；
    
    POST请求的注意点：
    1. open() 方法的第一个参数的位置传入 "POST"，建立一个POST请求；
    2. send() 方法传入某些数据；

    模拟表单提交：
    1. 将 Content-Type头部信息设置为 "application/x-www-form-urlencoded", 也就是表单提交时的内容类型；
    2. 以适当的格式创建一个字符串；
    可参见 test1.html demo.

    与GET请求相比，POST请求消耗的资源会多一些；
    性能角度：发送相同的数据计算，GET请求的速度最多可达到POST请求的两倍；

 */