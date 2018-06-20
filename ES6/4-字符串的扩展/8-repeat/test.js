// 1.repeat方法返回一个新字符串，表示将原字符串重复n次
console.log( 'x'.repeat(3) );   // xxx
console.log( 'hello'.repeat(2) );  // hellohello
console.log( 'na'.repeat(0) ); // ""

// 2.参数如果是小数，会被取整
console.log( 'na'.repeat(2.9) );

// 3. 如果repeat的参数是负数或者Infinity，会报错
// 'na'.repeat(Infinity); // RangeError
// 'na'.repeat(-1); // RangeError

// 4.如果参数是 0 到-1 之间的小数，则等同于 0，
// 这是因为会先进行取整运算。0 到-1 之间的小数，取整以后等于-0，repeat视同为 0
console.log( 'na'.repeat(-0.9) ); // ""

// 5. 参数NaN 等同于 0
console.log( 'na'.repeat(NaN) ); // ""

// 6. 如果repeat的参数是字符串，则会先转换成数字
console.log(  'na'.repeat('na') ); // ""
console.log(  'na'.repeat('3') ); // "nanana" 