
const
    express = require("express"),
    mongoose = require("mongoose")
;

//创建app
let app = express();
app.listen(6159);

//默认中间件
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./public"));

//设置模板引擎
app.set("view engine","ejs");

//根路由
app.get("/",(req,res)=>{res.render("index")});

//注册路由
app.get("/reg",(req,res)=>{res.render("reg")});
app.post("/reg",(req,res)=>{

});



