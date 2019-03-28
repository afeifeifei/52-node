

const express = require("express");
const path = require("path");

const app= express();
app.listen(5689);

app.get("/",(req,res)=>{
    res.sendFile( path.join(__dirname,"view/index7.html") );
});

app.use( express.urlencoded({extended:true}) );
app.all("/goudan",(req,res)=>{

    //console.log(req.query);
    //console.log(req.body);

    //let data = req.query && req.body; //这行不通
    let data = {...req.query,...req.body};

    console.log(data);


    res.send(`您的用户名是${data.user}，您的密码是：${data.pwd}`);
});







