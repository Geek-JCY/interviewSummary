/*
如果对同一个键多次赋值，后面的值将覆盖前面的值。
 */
cosnt map = new Map();
map
.set(1, 'aaa')
.set(1, 'bbb');

map.get(1); // 'bbb'
/*
上面代码对键1连续赋值两次，后一次的值覆盖前一次的值。
 */