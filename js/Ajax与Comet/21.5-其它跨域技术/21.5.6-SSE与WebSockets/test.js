/*
SSE与 Web Sockets都能实现 客户端与服务端的数据通信，在考虑使用 SSE 还是 Web Sockets时，可以从以下几个方面考虑：
	1.考虑现有服务器是否可以使用 Web Socktes通信，因为 Web Socket通信，要求服务器支持 Web Sockets协议；
	  倒是SSE对服务器要求不高，因为它使用的是 HTTP通信，一般服务器都支持；
	2.是否需要双向通信，如果只需读取服务器数据(如比赛成绩)，那么 SSH容易实现；
	  如果用例必须双向通信(如聊天室)，那么 Web Sockets会更好，
	  当然，如果不使用 Web Sockets的情况下，使用 SSE 和 XHR也能实现双向通信；
 */