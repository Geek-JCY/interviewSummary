/*
如果要使用的常量非常多，可以建一个专门的 constants目录，将各种常量写在不同的文件里面，保存在该目录下。
 */
// constants/db.js
export const db = {
  url: 'http://my.couchdbserver.local:5984',
  admin_username: 'admin',
  admin_password: 'admin password'
};

// constants/user.js
export const users = ['root', 'admin', 'staff', 'ceo', 'chief', 'moderator'];

/*
然后，将这些文件输出的常量，合并在index.js里面。
 */
// constants/index.js
export {db} from './db';
export {user} from './users';
/*
使用的时候，直接加载 index.js就可以了。
 */
// script.js
import {db, user} from './index';



