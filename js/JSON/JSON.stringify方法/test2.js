/*
有时候，JSON.stringify()还是不能满足对某些的自定义序列化的需求，在这些情况可以通过对象上调用 toJSON()方法，
返回其自身的JSON数据格式；

toJSON可以作为函数过滤器的补充；
JSON.stringify() 序列化该对象的顺序 如下：
    (1). 如果JavaScript对象中存在 toJSON()方法 而且 能通过它取得有效值，则先调用该方法。否则，按正常顺序执行序列化；
    (2). 如果提供了第二个参数，应用这个函数过滤器。传入函数过滤器的值是 (1)步返回的值；
    (3). 对第二步返回的每个值进行相应的序列化；
    (4). 如果提供了第三个参数的话，执行相应的格式化；
 */

var book = {
    name: "Professional JavaScrit",
    authors: ["Nicholas C. Zakas"],
    edition: 3,
    year: 2011,
    toJSON: function(){
        return this.name;
    }
}

var jsonText = JSON.stringify(book,  function(key, value){
    switch(key){
        case "Professional JavaScrit":
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
});
console.log(jsonText); // "Professional JavaScrit"