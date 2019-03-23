

const fs = require("fs");

const path =require("path");

let fp = path.join(__dirname,"../test");

fs.stat(fp,(err,stats)=>{
    if(err)throw err;
    console.log(stats.isDirectory());
});