/*
目前，Babel 转码器已经支持 Decorator。

首先，安装 babel-core和 babel-plugin-transform-decorators。
由于后者包括在 babel-preset-stage-0 之中，所以改为安装 babel-preset-stage-0 亦可。
 */
$ npm install babel-core babel-plugin-transform-decorators
/*
然后，设置配置文件.babelrc。
 */
{
  "plugins": ["transform-decorators"]
}
/*
这时，Babel 就可以对 Decorator 转码了。
 */

/*
脚本中打开的命令如下。
 */
babel.transform("code", {plugins: ["transform-decorators"]})
/*
Babel 的官方网站提供一个在线转码器，只要勾选 Experimental，就能支持 Decorator 的在线转码。
 */


