
const express = require("express");
const path = require("path");

let router = express.Router();

router.get("/index" , (req,res)=>{
    res.send("访问了 index 路由")
});

router.use("/teachers" , require(path.join(__dirname,"teacher")));

module.exports = router;