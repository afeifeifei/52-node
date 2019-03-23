
const fs = require("fs");
const path = require("path");
function delDir(fp){
    let stats = fs.statSync(fp);
    if ( stats.isDirectory() ) {
        let list = fs.readdirSync(fp);
        if ( list.length ){
            list.forEach(p=>{
                p = path.join(fp,p);
                delDir(p);
            });
        }
        fs.rmdirSync(fp);
    }
    if ( stats.isFile() ){
        fs.unlinkSync(fp);
    }
}

module.exports = delDir;
