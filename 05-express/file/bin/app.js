

/*

    接受与处理http请求

 */

/*//引入express
const express = require("express");

//创建app应用
let app = express();

//监听端口
app.listen(6589);

//监听请求，对应给客户端返回数据
app.get("/",(req,res)=>{
    //最简单的返回
    res.send("Hello World!");
});*/

//引入express
const express = require("express");

//创建app应用
let app = express();

//监听端口
app.listen(6589);

//监听请求，对应给客户端返回数据
app.get("/",(req,res)=>{
    //最简单的返回
    res.send(`
<!DOCTYPE HTML>
<html>
<head></head>
<body>

    <h1>这是我的第一个HTTP服务</h1>
    <p><span style="color: red">Hello</span> world!</p>
    
</body>   
</html>
    `);
});





