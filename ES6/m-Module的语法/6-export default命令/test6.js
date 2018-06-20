/*
有了export default命令，输入模块时就非常直观了，以输入 lodash 模块为例。
 */
import _ from 'lodash';

/*
如果想在一条 import语句中，同时输入默认方法和其他接口，可以写成下面这样。
 */
import _, { each, each as forEach } from 'lodash';

/*
对应上面代码的 export语句如下。
 */
export default function (obj) {
  // ···
}

export function each(obj, iterator, context) {
  // ···
}

export { each as forEach };
/*
上面代码的最后一行的意思是，暴露出 forEach接口，默认指向 each接口，即 forEach和 each指向同一个方法。
 */