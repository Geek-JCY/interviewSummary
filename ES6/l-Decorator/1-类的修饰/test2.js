/*
如果觉得一个参数不够用，可以在修饰器外面再封装一层函数。
 */
function testable(isTestable) {
    return function(target){
        target.isTestable = isTestable;
    }
}

@testable(true)
class MyTestableClass {}
MyTestableClass.isTestable // true

@testable(false)
class MyClass {}
MyClass.isTestable // false
/*
上面代码中，修饰器 testable可以接受参数，这就等于可以修改修饰器的行为。
 */

/*
注意，修饰器对类的行为的改变，是代码编译时发生的，而不是在运行时。
这意味着，修饰器能在编译阶段运行代码。也就是说，修饰器本质就是编译时执行的函数。
 */

