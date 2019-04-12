
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//定义Schema
let userSchema = new Schema({
    username : {
        type:String,
        required:true,
        match : /^[\d_a-z\u4e00-\u9fa5]{2,18}$/i
    },
    password : {
        type: String,
        required: true,
        match: /^[\da-z_,!@#\$%\^&*()+\[\]{}\-=\.<>?]{6,18}$/i
    }
});

//密码加密 中间件
userSchema.pre("save",function(next){

    //console.log("我是保存之前的中间件函数");
    //console.log(this.password);
    //this.password = "我的天啦！";

    next();
});



//建表，并返回
//let user = mongoose.model("user",userSchema);
//module.exports = user;
module.exports = mongoose.model("user",userSchema);
