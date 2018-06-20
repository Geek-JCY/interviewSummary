/*
    正则表达式使用圆括号进行组匹配
 */
const RE_DATE = /(\d{4})-(\d{2})-(\d{2})/;

const matchObj = RE_DATE.exec('1999-12-31');
const year = matchObj[1];
const month = matchObj[2];
const day = matchObj[3];
console.log('matchObj------>', matchObj);
console.log('year------>', year);
console.log('month------>', month);
console.log('day------>', day);