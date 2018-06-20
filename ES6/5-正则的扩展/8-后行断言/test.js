/*
    ”先行断言“指的是，x只有在y前面才匹配，必须写成/x(?=y)/.
    “先行断言”的括号之中的部分（(?=y)）,不计入返回结果。
 */
// eg:
var rs1 = /\d+(?=%)/.exec('100% of US presidents have been male');
console.log('rs1------>', rs1);

/*
    ”先行否定断言“指的是，x只有不在y前面才匹配，必须写成/x(?!y)/。
    “先行否定断言”的括号之中的部分（(?!y)）,不计入返回结果。
 */
// eg:
var rs2 = /\d+(?!%)/.exec('that’s all 44 of them');
var rs3 = /\d+(?!%)/.exec('that’s all 44 of them 66% dd 88');
console.log('rs2------>', rs2);
console.log('rs3------>', rs3);

/*
    “后行断言”正好与“先行断言”相反，x只有在y后面才匹配，必须写成/(?<=y)x/。
    “后行断言”的括号之中的部分（(?<=\$)）,不计入返回结果。
 */
// eg:
var rs4 = /(?<=\$)\d+/.exec('Benjamin Franklin is on the $100 bill');   // ["100"]
console.log('rs4---------------->', rs4);

/*
    ”后行否定断言“则与”先行否定断言“相反，x只有不在y后面才匹配，必须写成/(?<!y)x/。
    “后行否定断言”的括号之中的部分（(?<!\$)）,不计入返回结果。
 */
// eg:
var rs5 = /(?<!\$)\d+/.exec('it’s is worth about €90'); // ["90"]
console.log('rs5------------>', rs5);