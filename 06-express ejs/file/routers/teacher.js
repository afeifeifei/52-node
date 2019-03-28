
const express = require("express");

const router = express.Router();


router.get("/afei",(req,res)=>{
    res.send("这是afei的主页")
});


router.get("/zhuque",(req,res)=>{
    res.send("这是zhuque的主页")
});


module.exports = router;