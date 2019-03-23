
/*

unlink  删除文件  不能删除文件夹

 */

const fs = require("fs");
const path = require("path");


let fp = path.join(__dirname,"../hh");

fs.unlink(fp,(err)=>{if(err)throw err});




