/*
如果单独使用ejs模块，需要require引入ejs
如果在express模块下使用ejs的话，是不用require引入ejs的
 */

const express = require("express")

let app = express()

app.listen(7532)


//使用set加载模板引擎
app.set("view engine" , "ejs");

app.get("/",(req,res)=>{

    /*
        render调用模板引擎，处理完成成之后，自动发送给客户端

        模板路径可以是绝对路径，但是我们一般使用相对路径
        render默认会去views文件夹里面去找模板引擎文件
     */
    res.render( "index" );
});





