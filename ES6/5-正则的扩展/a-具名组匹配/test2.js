/*
    “具名组匹配”在圆括号内部，模式的头部添加“问号 + 尖括号 + 组名”（?<year>），
    然后就可以在exec方法返回结果的groups属性上引用该组名。
    同时，数字序号（matchObj[1]）依然有效    
 */
const RE_DATE = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const matchObj = RE_DATE.exec('1999-12-31');
const year = matchObj.groups.year; // 1999
const month = matchObj.groups.month; // 12
const day = matchObj.groups.day; // 31


console.log('matchObj------>', matchObj);
console.log('year------>', year);
console.log('month------>', month);
console.log('day------>', day);
