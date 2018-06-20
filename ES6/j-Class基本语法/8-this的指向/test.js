/*
this 的指向

类的方法内部如果含有 this，它默认指向类的实例。但是，必须非常小心，一旦单独使用该方法，很可能报错。
 */
class Logger {
  printName(name = 'there') {
    this.print(`Hello ${name}`);
  }

  print(text) {
    console.log(text);
  }
}

const logger = new Logger();
const { printName } = logger;
printName(); // TypeError: Cannot read property 'print' of undefined
/*
上面代码中，printName方法中的 this，默认指向 Logger类的实例。
但是，如果将这个方法提取出来单独使用，this会指向该方法运行时所在的环境，因为找不到 print方法而导致报错。
 */

/*
一个比较简单的解决方法是，在构造方法中绑定 this，这样就不会找不到 print方法了。
 */
class logger {
    constructor(){
        this.printName = this.printName.bind(this);
    }
    // ....
}

/*
另一种解决方法是使用箭头函数。
 */
class logger {
    constructor() {
        this.printName = (name = 'there') => {
            this.print(`Hello ${name}`);
        }
    }
    // ......
}

/*
还有一种解决方法是使用 Proxy，获取方法的时候，自动绑定 this。
 */
function selfish (target) {
  const cache = new WeakMap();
  const handler = {
    get (target, key) {
      const value = Reflect.get(target, key);
      if (typeof value !== 'function') {
        return value;
      }
      if (!cache.has(value)) {
        cache.set(value, value.bind(target));
      }
      return cache.get(value);
    }
  };
  const proxy = new Proxy(target, handler);
  return proxy;
}

const logger = selfish(new Logger());

