

const express = require("express");
const path = require("path");

const app= express();
app.listen(5689);

app.get("/",(req,res)=>{
    res.sendFile( path.join(__dirname,"view/index6.html") );
});


//在处理POST请求的时候，我们需要使用中间件将客户端传过来的数据格式化一下
app.use( express.urlencoded({extended:true}) );
app.post("/goudan",(req,res)=>{

    /*
    通常在获取客户端发送的数据时候，用到的几个api
        req.body
            这个不能直接的拿到POST请求传过来的数据，需要先使用express.urlencoded中间件

        req.query
            存储客服端GET请求发送过来的数据
            不适用于POST请求

     */
    console.log(req.body);



    res.send(`您的用户名是${req.body.user}，您的密码是：${req.body.pwd}`);
});






