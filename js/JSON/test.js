/*
JSON只是一种数据结构格式，很多语言都实现了针对JSON的解析器和序列化；

JSON中的三种简单类型值：
    1.简单值：字符串、布尔、数值、null
    2.对象
    3.数组

    不支持 变量、函数 或 对象实例；

使用方式：
    1.字符串必须是双引号，单引号号回出错
    2.null 和 布尔值 也是有效的JSON形式；
    3.JSON中的对象形式 与 JavaScript中对象不同的就是 JSON对象中的属性 也必须加双引号；
        如：
        {
            "name":"jack",
            "age": "18"
        }
    4.与JavaScript对象字面量相比，JSON中对象的两个不同点：
        (1).没有声明变量（JSON中没有变量的概念）
        (2).没有末尾分号
    5.数组字面量 同样没有声明变量 和 没有末尾分号

ES5对解析JSON的行为进行了规范，定义了全局对象JSON。
JSON对象的方法：
    1. stringify() : 把JavaScript对象 序列化为 JSON字符串；
    2. parse() : 把JSON字符串解析为原生的JavaScript值；
    如下：
    var book = {
        name: "Professional JavaScrit",
        authors: ["Nicholas C. Zakas"],
        edition: 3,
        year: 2011
    }
    var jsonText = JSON.stringify(book); // JavaScript对象转化为 JSON字符串
    var bookCopy = JSON.parse(jsonText); // JSON字符串转化为JavaScript对象



 */