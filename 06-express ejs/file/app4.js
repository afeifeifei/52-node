

const express = require("express");
const path = require("path");

const app= express();

app.listen(5689);

app.get("/",(req,res)=>{
    res.sendFile( path.join(__dirname,"view/index4.html") );
});

app.get("/goudan",(req,res)=>{

    /*
    通常在获取客户端发送的数据时候，用到的几个api
        req.body

        req.query
            存储客服端GET请求发送过来的数据

     */
    //console.log(req.body);
    console.log(req.query);


    res.send(`您的用户名是${req.query.user}，您的密码是：${req.query.pwd}`);
});






