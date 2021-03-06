/*
yield*命令可以很方便地取出嵌套数组的所有成员。
 */
function* iterTree(tree) {
  if (Array.isArray(tree)) {
    for(let i=0; i < tree.length; i++) {
      yield* iterTree(tree[i]);
    }
  } else {
    yield tree;
  }
}

const tree = [ 'a', ['b', 'c'], ['d', 'e'] ];

for(let x of iterTree(tree)){
    console.log(x);
}
// a
// b
// c
// d
// e



