

/*

1.安装mongoose

2.连接&使用数据库
    * 引入
    * 连接
    * Schema
    * 建表
    * 增
    * 删
 */


//引入
const mongoose = require("mongoose");
//拿到Schema类
const Schema = mongoose.Schema;

//连接
/*
 mongodb://localhost:27017/数据库名
  */
mongoose
    .connect("mongodb://localhost:27017/goudan", {useNewUrlParser: true})
    //connect API 返回一个Promise，所以我们可以使用 .then .catch来监听数据库是否连接成功
    .then(()=>{console.log("数据库连接成功")})
    .catch(()=>{console.log("数据库连接失败")});

//建表之前，先要指定你所将要建立的表的数据规则 Schema
const userSchema = new Schema({
    name : {type:String,required:true},
    password : {type:String,required:true},
    age : Number,
    status : {type:String,required:false,default:"这人很吊，没有写签名。"}
},
    {versionKey:false} //这可以加上这个参数，在保存的时候不要 __v 属性
    );

//可以建表了，定义变量接受返回值进行接下来的增删改查操作
const user = mongoose.model("user",userSchema);

/*//增 - 添加数据
user.create({
    name : "afei",
    password : "123456"
});

//Schema没有规定的属性，可以传，但是不保存
user.create({
    name : "朱雀",
    password : "789456",
    sex : "女"
});*/

//删
//user.remove( {name:"afei"} , (err)=>{if(err)throw err});//被废弃了
//user.deleteOne( {name:"afei"} , (err)=>{if(err)throw err});
//user.deleteMany({name:"朱雀"},(err)=>{if(err)throw err});
/*user.deleteOne( {name:"afei"} , (err,info)=>{
    console.log(err);
    console.log(info);
});*/
user
    .deleteOne( {name:"afei"} )
    .catch((err)=>{
        console.log(err);
    });






















































/*
//检测 - 数据库连上了还是没有连上
//数据库连接成功，会触发open事件
mongoose.connection.on("open",()=>{
    console.log("数据库连接成功");
});
//数据库连接失败，会触发error事件
mongoose.connection.on("error",()=>{
    console.log("数据库连接失败");
});*/





/*

new Promise(()=>{})
    .then()
    .then()
    .catch();
*/







