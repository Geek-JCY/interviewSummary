/*
此外，Map 还有一个forEach方法，与数组的forEach方法类似，也可以实现遍历。
 */
const map = new Map()
  .set(1, 'a')
  .set(2, 'b')
  .set(3, 'c');

map.forEach(function(value, key, map){
    console.log("Key: %s, Value: %s", key, value);
});
// Key: 1, Value: a
// Key: 2, Value: b
// Key: 3, Value: c


/*
    forEach方法还可以接受第二个参数，用来绑定this。
 */ 
const reporter = {
  report: function(key, value) {
    console.log("Key: %s, Value: %s", key, value);
  }
};

map.forEach(function(value, key, map){
    this.report(key, value);
}, reporter);
// Key: 1, Value: a
// Key: 2, Value: b
// Key: 3, Value: c

// 上面代码中，forEach方法的回调函数的this，就指向reporter。