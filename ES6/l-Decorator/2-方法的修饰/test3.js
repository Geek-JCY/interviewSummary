/*
下面的 @log修饰器，可以起到输出日志的作用。
 */
class Math {
    @log
    add(a, b){
        return a + b;
    }
}

function log(target, name, descriptor){
    var oldValue = descriptor.value;

    descriptor.value = function() {
        console.log(`Calling ${name} with`, arguments);
        return oldValue.apply(null, arguments);
    };

    return descriptor;
}

const math = new Math();

// passed parameters should get logged now
math.add(2, 4);
/*
上面代码中，@log修饰器的作用就是在执行原始的操作之前，执行一次 console.log，从而达到输出日志的目的。
 */


