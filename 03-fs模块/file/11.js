
/*

rename 重命名+移动

 */

const fs = require("fs");

const path =require("path");

/*let oldFp = path.join(__dirname,"../test/images/11");
let newFp = path.join(__dirname,"../test/images/22");*/


let oldFp = path.join(__dirname,"../test/images/22");
let newFp =path.join(__dirname,"../test/3.txt");

fs.rename(oldFp,newFp,(err)=>{if(err)throw err});
