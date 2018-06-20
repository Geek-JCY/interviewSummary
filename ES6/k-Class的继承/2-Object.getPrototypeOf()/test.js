/*
Object.getPrototypeOf方法可以用来从子类上获取父类。
 */
class Point {}

class ColorPoint extends Point {}

Object.getPrototypeOf(ColorPoint) === Point; // true
console.log(Object.getPrototypeOf(ColorPoint) === Point);

/*
因此，可以使用这个方法判断，一个类是否继承了另一个类。
 */
