
const express = require("express")

let app = express()

app.listen(7532)

app.set("view engine" , "ejs");



app.get("/teacher",(req,res)=>{

    //假装这是从数据库拿到的老师信息
    //我们现在要把这些老师信息渲染到前端页面
    let data = [
            {name:"阿飞",age:18,sex:1},
            {name:"心艾",age:18,sex:0},
            {name:"朱雀",age:31,sex:1},
            {name:"言心",age:28,sex:0},
            {name:"朝歌",age:37,sex:1},
            {name:"风屿",age:40,sex:1}
        ]

    //在调用模板引擎的时候，第二个参数传入数据
    res.render( "index" , {teachers:data});
});





