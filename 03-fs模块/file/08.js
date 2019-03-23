
/*

writeFile

 */

const fs = require("fs");
const path = require("path");


let fp = path.join(__dirname,"../test/2.txt");

fs.writeFile(
    fp,
    "朱雀老师真可爱，就是有点胖……",
    {flag : "a"},
    (err)=>{
        if(err)throw err;
    }
);

//fs.writeFileSync()