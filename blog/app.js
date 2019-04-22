
const
    express = require("express"),
    mongoose = require("mongoose")
    //,cookieParser = require('cookie-parser') //放弃cookie方案

    //引入express-session
    ,session = require("express-session")
    ,mongooseSession = require("connect-mongo")(session)
;

//启动数据库
mongoose
    .connect("mongodb://localhost:27017/blog",{useNewUrlParser:true})
    .then(()=>{console.log("数据库连接成功")})
    .catch(()=>{console.log("数据库连接失败")});

//创建app
let app = express();
app.listen(7894);


//设置session参数
app.use(session({
    secret : "afei" //密钥，值随便填写
    ,rolling:true //只要用户和后端有交互（访问页面，跳转页面，ajax……），刷新存储时间
    ,resave:false //是否每次请求都重新存储session数据
    ,saveUninitialized:false //初始值
    ,cookie : {maxAge:1000*60*10} //设置session过期时间
    ,store : new mongooseSession({
        url : "mongodb://localhost:27017/blog"
    })//不设置store是服务器内存中存储session信息，我们可以通过设置store将session数据存到数据库
}));


//默认中间件
//app.use(cookieParser())//放弃cookie方案
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./public"));
//设置模板引擎
app.set("view engine","ejs");



//根 路由
app.get("/",(req,res)=>{res.render("index")});
//注册 路由
app.post("/reg",require("./routers/reg"));
//登录 路由
app.post("/login",require("./routers/login"));
//登出 路由
app.get("/logout",(req,res)=>{
    //清除session
    req.session.destroy();
    //重定向到首页
    res.redirect("/");
});
//用户中心的路由 //用于检测用户登录与否的路由
app.get("/usercenter",require("./routers/usercenter"));
app.post("/usercenter",(req,res)=>{res.send({login:!!req.session.userInfo})});
//更新 路由
app.post("/update",require("./routers/update"));
//改密 路由
app.post("/resetpwd",require("./routers/resetpwd"));
//文章子路由
app.use("/article",require("./routers/article"));
//删除文章
app.post("/delete",require("./routers/delete"));
//文章查找
app.post("/search",require("./routers/search"));
//评论添加与删除
app.use("/comment",require("./routers/comment"));
//上传路由
app.use("/upload",require("./routers/upload"));
//管理员 路由
app.use("/admin",require("./routers/admin"));
