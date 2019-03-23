
const fs = require("fs");
const path = require("path");

//console.log(fs);


let filePath = path.join(__dirname,"../test/1.txt");
//读取文件内容
/*
readFile
    参数： 路径  编码(可选)  回调
 */
fs.readFile(filePath,"utf8",(err,data)=>{
    if(err)throw err;

    console.log(data);
});
