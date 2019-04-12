
/*

request
    在node里面向其他服务端发起请求的模块


 */

const request = require("request");

//console.log(request);

//向百度发起请求
request({
    method : "GET",
    url : "https://www.baidu.com"
} , (err,res,body)=>{
    //错误信息
    //console.log(err);

    //请求返回时候的信息
    //console.log(res);

    //请求返回的数据
    console.log(body);
});






