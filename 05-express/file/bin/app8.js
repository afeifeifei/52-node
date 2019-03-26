

const express = require("express");

let app = express();

app.listen(9875);

//使用use调用子路由
app.use("/index/info/teacher",require("../routers/teacher"));



/*
app.get("/index/info/teacher/zhuque",(req,res)=>{
    res.send("访问了 zhuque 的主页 ");
});

app.get("/index/info/teacher/afei",(req,res)=>{
    res.send("访问了 afei 的主页 ")
});

app.get("/index/info/teacher/wulv",(req,res)=>{
    res.send("访问了 wulv 的主页 ")
});

app.get("/index/info/teacher/xinai",(req,res)=>{
    res.send("访问了 xinai 的主页 ")
});

*/


