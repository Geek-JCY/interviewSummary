// HTTP 与 HTTPS 的区别
// 参考：https://www.cnblogs.com/cnblogs-jcy/p/9148524.html

// 主要区别：
/*
	1.  https协议需要到CA申请证书，一般免费证书较少，因而需要一定的费用；
	2.  http是超文本传输协议，信息是明文传输；
		https则是具有安全性的SSL加密传输协议；
	3.  http和https使用的是完全不同的连接方式：
		http: 连接很简单，是无状态的；
		https: 由 ssl协议+http协议构建的可进行加密的连接方式，
			   利用回话秘钥进行加密通讯；	
	4.  http和https应用端口不一样：
		http: 用 80端口；
		https: 用 443接口；
 */