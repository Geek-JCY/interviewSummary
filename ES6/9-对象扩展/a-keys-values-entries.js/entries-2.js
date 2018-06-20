/*
    1. Object.entries的基本用途是遍历对象的属性。
 */
let obj = { one: 1, two: 2 };
for ( let [k, v] of Object.entries(obj) ) {
    console.log(
        `${JSON.stringify(k)}: ${JSON.stringify(v)}`
      );
}
// "one": 1
// "two": 2


/*
    2. Object.entries方法的另一个用处是，将对象转为真正的Map结构。
 */
const obj = { foo: 'bar', baz: 42 };
const map = new Map(Object.entries(obj));
map // Map { foo: "bar", baz: 42 }
