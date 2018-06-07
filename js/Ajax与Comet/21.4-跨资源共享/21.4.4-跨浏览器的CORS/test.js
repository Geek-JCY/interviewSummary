/*
跨浏览器的 CORS 实现:
	即使浏览器对 CORS的支持程度不同，但是所有的浏览器都支持简单的(非 Prefight和不带凭据的)请求；
	为了兼顾所有浏览器。首先，检测 XHR是否支持 CORS，最简单的方式就是检查是否存在 withCredentials属性。然后，结合检测 XDomainRequest对象是否存在；

实现方式：见test.html

共同的属性和方法：
	FireFox、Safari、Chrome中的 XMLHttpRequest对象，与 IE中的 XDomainRequest对象，它们共同的属性和方法如下：
	- abort(): 用于停止正在进行的请求；
	- onerror: 用于替代 onreadystatechange检测错误；
	- onload: 用替代 onreadystatchange检测成功；
	- responseText: 用于取得相应的内容；
	- send(): 用于发送请求；
	以上成员都包含在 createCORSRequest()函数返回的对象中，在所有浏览器中都能正常使用；
 */