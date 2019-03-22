
/*

因为模块在局部运行，所以不会和你当前文件的变量起冲突
模块返回的数据，可以由我们自己起名字来接受

 */


let g = require("./03");

let k = require("./02");


console.log(g);
// g();

console.log(k);