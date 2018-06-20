/*
最后，export通过接口，输出的是同一个值。不同的脚本加载这个接口，得到的都是同样的实例。
 */
// mod.js
function C() {
  this.sum = 0;
  this.add = function () {
    this.sum += 1;
  };
  this.show = function () {
    console.log(this.sum);
  };
}

export let c = new C();
/*
上面的脚本mod.js，输出的是一个C的实例。不同的脚本加载这个模块，得到的都是同一个实例。
 */
// x.js
import {c} from './mod';
c.add();

// y.js
import {c} from './mod';
c.show();

// main.js
import './x';
import './y';

/*
现在执行main.js，输出的是1。
 */
$ babel-node main.js
1
/*
这就证明了x.js和y.js加载的都是C的同一个实例。
 */



