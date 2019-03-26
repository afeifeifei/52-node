

const express = require("express");

const app = express();

app.listen(9875);


//在处理请求之前，先处理中间件函数
app.use( (req,res,next)=>{
    req.goudan = "狗蛋中间件";
    next();
} );


app.get("/",(req,res)=>{
    res.send("访问了 / 路由 " + req.goudan);
});

app.get("/main",(req,res)=>{
    res.send(req.goudan + " 访问了 /main 路由") ;
});






