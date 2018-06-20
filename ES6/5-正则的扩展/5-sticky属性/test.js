/*
与y修饰符相匹配，ES6 的正则对象多了sticky属性，表示是否设置了y修饰符。
 */

var r = /hello\d/y;
r.sticky // true