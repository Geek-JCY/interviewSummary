/*
4. import命令

使用 export命令定义了模块的对外接口以后，其他 JS 文件就可以通过 import命令加载这个模块。
 */
// main.js 
import {firstName, lastName, year} from './example/profile-1.js';
function setName(element){
    element.textContent = firstName + ' ' + lastName;
}
/*
上面代码的 import命令，用于加载 profile.js文件，并从中输入变量。
import命令接受一对大括号，里面指定要从其他模块导入的变量名。
大括号里面的变量名，必须与被导入模块（profile.js）对外接口的名称相同。
 */

/*
如果想为输入的变量重新取一个名字，import命令要使用as关键字，将输入的变量重命名。
 */
import {lastName as surname} from './example/profile-1.js';





