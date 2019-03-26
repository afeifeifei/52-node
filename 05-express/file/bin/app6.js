

const express = require("express");

const app = express();

app.listen(9875);

//在中间件比较长的时候，我们会把它提出来（其实为了保证代码可读性，不长也可以提出来）
/*app.use("/index",(req,res,next)=>{
    req.goudan = "狗蛋中间件";
    /!*
    假设这里代码特别的长

    假设这里代码特别的长

    假设这里代码特别的长

    假设这里代码特别的长

    假设这里代码特别的长
     *!/
    next();
} );*/

app.use("/index",require("../middleware/index"));

app.get("/index",(req,res)=>{
    res.send("访问了 /index/hh 路由 " + req.goudan);
});

app.get("/main",(req,res)=>{
    res.send(req.goudan + " 访问了 /main 路由") ;
});






