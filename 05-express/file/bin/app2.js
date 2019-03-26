

const express = require("express");

let app = express();

app.listen(9875);

/*
只有监听过的路由，才能正常访问
 */

app.get("/",(req,res)=>{
    req.goudan = "狗蛋";

    res.send("访问了 / 路由 " + req.goudan);
});

app.get("/main",(req,res)=>{
    req.goudan = "狗蛋";

    res.send(req.goudan + " 访问了 /main 路由") ;
});


/*
app.get("/gg",(req,res)=>{
   res.send("访问了 /gg 路由");
});

app.get("/goudan",(req,res)=>{
    res.send("什么乱七八糟");
});
*/
