/*
FormData:
    现代 web应用中频繁使用表单序列化的功能，XMLHttpRequest 2级为此定义了 FromData类型；

FormData 都做了什么：
    1. 不必再在 XHR对象上设置请求头；
    2. 也不用再 对键、值进行编码；

FormData 用法：
    用法1：直接用 formData 的append() 方法，添加数据 key-value；
        var data = new FormData();
        data.append('name', 'Jack');
    用法2：用表单元素的数据预先向其添加键值对；
        var data = new FormData( document.forms[0] );

    创建了 FormData实例之后，可以将它直接传给 XHR对象的 send()方法；


 */