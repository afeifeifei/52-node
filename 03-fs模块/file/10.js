

/*

readdir 读取目录信息
 */


const fs = require("fs");
const path = require("path");


let fp = path.join(__dirname,"../test");

fs.readdir(fp,(err,info)=>{
    if(err)throw err;
    console.log(info);
});