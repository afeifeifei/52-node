
const express = require("express")

let app = express()

app.listen(7532)

app.set("view engine" , "ejs");

app.get("/teacher",(req,res)=>{
    res.render("index4" , {
        header:"阿飞",
        footer:"朱雀"
    });
});








