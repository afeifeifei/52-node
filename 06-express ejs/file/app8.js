

const express = require("express");
const path = require("path");

const app= express();
app.listen(5689);

/*
express.public()
    公开一个文件夹，客户端可以直接的访问到里面的文件
 */

app.use( express.static( path.join(__dirname,"public") )  );

app.get("/",(req,res)=>{
    res.sendFile( path.join(__dirname,"view/indexstatic.html") );
});

/*

app.get("/public/css/index.css",(req,res)=>{
    res.sendFile( path.join(__dirname,"public/css/index.css")  );
});

*/
