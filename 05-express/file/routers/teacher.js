

const express = require("express");

//新建一个子路由
let router = express.Router();

router.get("/zhuque",(req,res)=>{
    res.send("访问了 zhuque 的主页 ");
});

router.get("/afei",(req,res)=>{
    res.send("访问了 afei 的主页 ")
});

router.get("/wulv",(req,res)=>{
    res.send("访问了 wulv 的主页 ")
});

router.get("/xinai",(req,res)=>{
    res.send("访问了 xinai 的主页 ")
});

module.exports = router;
