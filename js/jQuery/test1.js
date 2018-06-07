/*
利用模块和闭包 构建 jQuery
 */
// 使用函数自执行的方式创建模块
(function(window,undefined){
    // 声明jQuery构造函数
    var jQuery = function(name){

        // 主动在构造函数中 返回一个jQuery实例
        return new jQuery.fn.init(name);
    }

    // 添加原型方法
    jQuery.prototype = jQuery.fn = {
        constructor: jQuery,
        init: function(){
            // ...
        },
        css: function(){
            // ...
        }
    }
    jQuery.fn.init.prototype = jQuery.fn;

    // 将jQuery改名为$，并将引用保存在window上，形成闭包，对外开发jQueryg构造函数，这样我们就可以访问所有挂载在jQuery原型对象上的方法了；
    window.jQuery = window.$ = jQuery;

})(window);

// 在使用时，我们可以直接执行构造函数，因为jQuery中通过一些手段返回的是一个jQuery实例，这样我们就不用每次使用jQuery的时候自己new了
$("#id");
