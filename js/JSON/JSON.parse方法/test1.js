/*
JSON.parse()方法 也可以接受第二个参数，该参数是一个函数，也叫还原函数(revier);

@函数： 接收两个参数 key value；

如果还原函数返回 undefined, 则表示要从结果中删除相应的键；
如果返回其它值，则将结果插入到结果中;
 */
var book = {
    name: "Professional JavaScrit",
    authors: ["Nicholas C. Zakas"],
    edition: 3,
    year: 2011,
    releaseDate: new Date(2011, 11, 11)
}
var jsonText = JSON.stringify(book);
console.log(jsonText);

var bookCopy = JSON.parse(jsonText, function(key, value){
    if(key === "releaseDate"){
        return new Date(value); // releaseDate的字符串值 存为一个 Date对象，这样后期才能直接通过它调用 Date()对象的方法；
    } else {
        return value;
    }
});
console.log(bookCopy);
console.log( bookCopy.releaseDate.getFullYear() )
/*
结果：
{ name: 'Professional JavaScrit',
  authors: [ 'Nicholas C. Zakas' ],
  edition: 3,
  year: 2011,
  releaseDate: 2011-12-10T16:00:00.000Z 
}
 */


