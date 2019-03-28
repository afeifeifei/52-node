

const express = require("express");

const app= express();
app.listen(5689);
/*

app.get("/user/:gg",(req,res)=>{
    console.log(req.params.gg);
    //
    res.send("");
});*/

app.get("/lol",(req,res)=>{

    res.set({
        "Access-Control-Allow-Origin" : "*"
    });

    console.log("success");
    res.send("请求返回了！");
});
