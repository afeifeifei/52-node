
const express = require("express")

let app = express()

app.listen(7532)

app.set("view engine" , "ejs");



app.get("/teacher",(req,res)=>{

    let h = "";

    res.render( "test" ,(err,html)=>{
        h += html;
    });

    res.render( "test2",(err,html)=>{
        h += html;
        res.send(h);
    } );



});





