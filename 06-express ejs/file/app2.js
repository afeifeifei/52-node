

const express = require("express");
const path = require("path");

const app= express();

app.listen(5689);

app.get("/",(req,res)=>{
    res.send("Hello express~")
});

//添加上网页自动发送的icon图标请求
app.get("/favicon.ico",(req,res)=>{
    //res.send("随便写点什么。");
    //图标请求，我们要给客户端返回一个图片
    res.sendFile( path.join(__dirname,"images/icon.png") );
});






