

const express = require("express");

const app = express();

app.listen(9875);


app.get("/index",(req,res,next)=>{
    req.goudan = "狗蛋中间件";
    //res.send("我是第一次中间件的响应。");
    next();
} );

app.get("/index",(req,res)=>{
    res.send("我是第二次中间件的响应。" + req.goudan);
});






