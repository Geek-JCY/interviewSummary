/*
修饰器不仅可以修饰类，还可以修饰类的属性。
 */
class Person {
    @readonly
    name() { return `${this.first} ${this.last}` }
}
/*
上面代码中，修饰器readonly用来修饰“类”的 name方法。
 */

/*
修饰器函数readonly一共可以接受三个参数。
 */
function readonly(target, name, descriptor){
  // descriptor对象原来的值如下
  // {
  //   value: specifiedFunction,
  //   enumerable: false,
  //   configurable: true,
  //   writable: true
  // };
  descriptor.writable = false;
  return descriptor;
}

readonly(Person.prototype, 'name', descriptor);
// 类似于
Object.defineProperty(Person.prototype, 'name', descriptor);

/*
修饰器第一个参数是类的原型对象，上例是 Person.prototype，修饰器的本意是要“修饰”类的实例，
    但是这个时候实例还没生成，所以只能去修饰原型（这不同于类的修饰，那种情况时 target参数指的是类本身）；
第二个参数是所要修饰的属性名，
第三个参数是该属性的描述对象。
 
另外，上面代码说明，修饰器（readonly）会修改属性的描述对象（descriptor），然后被修改的描述对象再用来定义属性。
 */



