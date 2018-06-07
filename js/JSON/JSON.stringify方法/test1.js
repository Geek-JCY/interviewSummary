/*
JSON.stringify() 除了要序列化的JavaScript对象外，还可以接受两个参数，这两个参数用于指定不同的方式序列化JavaScript对象；

    第一参数：要序列化的JavaScriptd对象：
    第二参数：过滤器，可以是一个数组，也可以是一个函数,也叫替换函数(replacer)：
    第三个参数：字符串缩进
 */
// JavaScript对象
var book = {
    name: "Professional JavaScrit",
    authors: ["Nicholas C. Zakas"],
    edition: 3,
    year: 2011
}
/*
    第二参数：过滤器, 两种方式 
        @1：数组
        @2：函数: 接受两个参数 key value
    如下：
 */
// @1: 过滤器 - 数组过滤方式
var jsonText = JSON.stringify(book, ["name","authors"]);
console.log(jsonText);  // 结果：{"name":"Professional JavaScrit","authors":["Nicholas C. Zakas"]}

// @2: 过滤器 - 函数过滤方式
var jsonText2 = JSON.stringify(book, function(key, value){
    switch(key){
        case "name":
            return "jcy";
        case "authors":
            return value.join(',');
        case "edition":
            return undefined;
        case "year":
            return 5000;
        default:
            return value;
    }
})
console.log(jsonText2); // 结果：{"name":"jcy","authors":"Nicholas C. Zakas","year":5000}


/*
    第三参数：字符串缩进

    如果这个参数是一个数值，表示的是每个级别缩进的空格数；最多是10，超过10 按10处理；

    也可以是字符串，对多是10个字符数，多了按10个处理；

    两种方式 都自带换行符；
    如下：
 */
// @字符缩进 - 数值
var jsonText3 = JSON.stringify(book, null, 4);
console.log(jsonText3);
/*
结果：
{
    "name": "Professional JavaScrit",
    "authors": [
        "Nicholas C. Zakas"
    ],
    "edition": 3,
    "year": 2011
}
 */

// @字符缩进 - 字符
var jsonText4 = JSON.stringify(book, null, "----");
console.log(jsonText4);
/*
结果：
{
----"name": "Professional JavaScrit",
----"authors": [
--------"Nicholas C. Zakas"
----],
----"edition": 3,
----"year": 2011
}
 */



