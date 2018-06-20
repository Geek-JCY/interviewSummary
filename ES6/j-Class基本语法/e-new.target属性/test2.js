/*
Class 内部调用new.target，返回当前 Class。
 */
class Rectangle {
    constructor(length, width){
        console.log(new.target === Rectangle);
        this.length = length;
        this.width = width;
    }
}
var obj = new Rectangle(3, 4); // true





