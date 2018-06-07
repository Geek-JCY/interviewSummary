// 前端中什么叫优雅降级和渐进增强?

// 渐进增强(progressive enhancement):
/*
	首先，针对 低版本浏览器 进行构建页面，保证最基本的功能；
	然后，再针对 高级浏览器 进行效果、交互等改进和追加功能；
	达到更好的用户体验；
 */

// 优雅降级(graceful degradation):
/*
	首先，构建完整的功能；
	然后，再针对 低版本浏览器 进行兼容；
 */

// 解决方案：
/*
	1. JS的兼容性写法，如：addEventListener('click', callback) 和 attachEvent('onclick', callback)

	2. css3中 浏览器私有属性的使用，如 -webkit、-ms、-moz、-o

	3. css hack的使用, 详细可参考：https://www.duitang.com/static/csshack.html
		主要针对IE的 hack，如下：
			'\9':（使用方式：background-color:#ff000\9;） （识别：IE6、7、8识别）
			'+':（使用方式：+background-color:#ff000;） （识别：IE6、7识别）
			'_':（使用方式：_background-color:#ff000;） （识别：仅IE6识别）
			'*+':（使用方式：_background-color:#ff000;） （识别：仅IE7识别）

	4. css 中 !important 语法的使用；
		用法：如：div{color: red!impotant; color: green;}  // 结果：div 优先应用 color: red;
		作用：提升指定样式规则的应用优先权；
		注意：IE6及更早浏览器下，!important在同一条样式内不生效；
			  	如：
			  		div{color: red!impotant; color: green;}  // 结果：div 优先应用 color: green;

			  IE6及更早浏览器下，正确使用方式：在分散的样式条目中使用
					如：
						div{color: red!impotant;}
					    div{color: green;}
					    // 结果：div 优先应用 color: red;

	5. html中 <!--[if IE version] xxxxx <![endif]--> 判断语句使用：
		如下：
			注意：以下用法不支持IE10和IE11
			<!--[if !IE]><!--> 除IE外都可识别（不是IE） <!--<![endif]-->
			<!--[if IE]> 所有的IE可识别 <![endif]-->
			<!--[if IE 6]> 仅IE6可识别 <![endif]-->
			<!--[if lt IE 6]> IE6以及IE6以下版本可识别 <![endif]-->
			<!--[if gte IE 6]> IE6以及IE6以上版本可识别 <![endif]-->
			<!--[if IE 7]> 仅IE7可识别 <![endif]-->
			<!--[if lt IE 7]> IE7以及IE7以下版本可识别 <![endif]-->
			<!--[if gte IE 7]> IE7以及IE7以上版本可识别 <![endif]-->
			<!--[if IE 8]> 仅IE8可识别 <![endif]-->
			<!--[if IE 9]> 仅IE9可识别 <![endif]-->
			
		详细参考：https://www.cnblogs.com/zhangruiqi/p/7569663.html


 */