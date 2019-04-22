

const express = require("express");
const multer = require("multer");
const path = require("path");
const user = require("../model/user");

let router = express.Router();


//让上传的文件，存储到磁盘
let storage = multer.diskStorage({
    //存储目录，必须先创建好
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname,"../public/photo/"));
    },
    //保存的文件名
    filename: function (req, file, cb) {
        if ( req.session.userInfo ){
            let fileName = req.session.userInfo._id + file.originalname.match(/\.[^\.]+$/g)[0];
            req.fileName =fileName;
            cb(null, fileName);
        }else{
            cb(null, file.fieldname + '-' + Date.now());
        }
    }
});

let upload = multer({
    storage: storage //代表存储到硬盘而不是内存
    ,fileFilter(req, file, cb){
        cb(null,/\.(jpg|png|gif)$/.test(file.originalname));
    }
    ,limits : {
        fileSize : 1024*100 //限制文件大小100k
    }
}).single("file");


//头像上传
router.post("/photo",(req,res)=>{
    //运行与错误的监听
    upload(req, res, function (err) {
        if (err) {
            res.send({code:0,msg:"上传失败"});
        }else{
            user.updateOne(
                {_id:req.session.userInfo._id}
                ,{"userInfo.photo":req.fileName}
            ).catch(e=>{});
            res.send({code:1,msg:"上传成功"});
        }
    });
});


module.exports = router;