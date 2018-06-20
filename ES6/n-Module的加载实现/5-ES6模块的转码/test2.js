/*
ES6 module transpiler

ES6 module transpiler是 square 公司开源的一个转码器，
可以将 ES6 模块转为 CommonJS 模块或 AMD 模块的写法，从而在浏览器中使用。
 */
/*
首先，安装这个转码器。
 */
$ npm install -g es6-module-transpiler
/*
然后，使用compile-modules convert命令，将 ES6 模块文件转码。
 */
$ compile-modules convert file1.js file2.js
/*
-o 参数可以指定转码后的文件名。
 */
$ compile-modules convert -o out.js file1.js



