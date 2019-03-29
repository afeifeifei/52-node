

const express = require("express");
const path = require("path");

const app= express();

app.listen(5689);

app.get("/",(req,res)=>{
    res.sendFile( path.join(__dirname,"view/index.html") );
});






