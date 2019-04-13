
const
    express = require("express"),
    mongoose = require("mongoose")
    //,cookieParser = require('cookie-parser')

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
app.listen(6549);


//设置session参数
app.use(session({
    secret : "afei" //密钥，值随便填写
    ,rolling:true //只要用户和后端有交互（访问页面，跳转页面，ajax……），刷新存储时间
    ,resave:false //是否每次请求都重新存储session数据
    ,saveUninitialized:false //初始值
    ,cookie : {maxAge:1000*60*10} //设置session过期时间
    ,store : new mongooseSession({
        url : "mongodb://localhost:27017/blog"
    })//不设置store是服务器内存中存储session信息，我们可以通过设置store讲session数据存到数据库
}));


//默认中间件
//app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./public"));

//设置模板引擎
app.set("view engine","ejs");

//根路由
app.get("/",(req,res)=>{res.render("index")});

//注册路由
app.get("/reg",(req,res)=>{res.render("reg")});
app.post("/reg",require("./routers/reg"));

//实时检测用户名是否已存在
//app.post("/repeat",require("./routers/repeat"));

//登录路由
app.get("/login",(req,res)=>{res.render("login")});
app.post("/login",require("./routers/login"));

//用户中心的路由
app.get("/usercenter",require("./routers/usercenter"));



