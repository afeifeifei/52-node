
const fs = require("fs");
const path = require("path");

//console.log(fs);


let filePath = path.join(__dirname,"../test/1.txt");
//读取文件内容
fs.readFile("1.yxy",(err)=>{
    //throw err;
    console.log(err);
});

setTimeout(()=>{
    console.log("111");
},2000);