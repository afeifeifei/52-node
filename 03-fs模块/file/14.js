
const fs = require("fs");
const path = require("path");



let fp = path.join(__dirname,"../ggg");



delDir("E:/UpupooResource");


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


/*delDir(fp,(err)=>{
    //console.log("删除完成");
});*/

/*fs.stat(fp,(err,stats)=>{
    if(err)callback(err);
    if ( stats.isFile() ){
        fs.unlink(fp,(err)=>{if(err)callback(err)});
    }
    if ( stats.isDirectory() ){
        fs.readdir(fp,(err,fList)=>{
            if(err)callback(err);
            if ( fList.length ){
                fList.forEach(p=>{
                    p = path.join(fp,p);
                    delDir(p,()=>{
                        fs.rmdir(fp,(err)=>{if(err)callback(err)});
                    });
                });
            } else{
                fs.rmdir(fp,(err)=>{if(err)callback(err)});
            }
        });
    }
});*/