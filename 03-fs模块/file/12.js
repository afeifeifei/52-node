
/*


rmdir 删除文件夹 - 只能删除空的文件夹

 */


const fs = require("fs");

const path =require("path");

let fp = path.join(__dirname,"../hh");

fs.rmdir(fp,(err)=>{if(err)throw err});