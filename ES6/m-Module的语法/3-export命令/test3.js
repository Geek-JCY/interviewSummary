/*
通常情况下，export 输出的变量就是本来的名字，但是可以使用 as 关键字重命名。
 */
function v1() { ... }
function v2() { ... }

export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion
};
/*
上面代码使用 as关键字，重命名了函数 v1和 v2的对外接口。重命名后，v2可以用不同的名字输出两次。
 */

