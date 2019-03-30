

const request = require("request");
const fs = require("fs")

request({
    method : "GET",
    url : "https://www.baidu.com"
} , (err,res,body)=>{
    console.log(body);
    fs.writeFile("1.html" , body,(err)=>{if(err)throw err});
});






