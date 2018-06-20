/*
最后，由于对象总是继承其他对象的，所以可以在任意一个对象中，使用 super关键字。
 */
var obj = {
    toString() {
        return "MyObject: " + super.toString();
    }
}

obj.toString(); // MyObject: [object Object]


