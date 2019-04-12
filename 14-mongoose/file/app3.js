
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/dachui",{useNewUrlParser:true});

/*
中间件
 */

let userSchema = new Schema({
    name : String,
    pwd : String
});

/*//user表所有find操作之前，先执行这个中间件
userSchema.pre("find",function(next){
    console.log("我是pre中间件");
    next();
});*/

//user表所有 find 操作之后，会执行这个函数
userSchema.post("find",function(){
    console.log("我是post中间件，我会在find操作之后执行");
});


let user = mongoose.model("user",userSchema);

/*user.find({name:"afei"}).then(data=>{
    console.log(data);
})*/
user.find({name:"afei"},(e,data)=>{
    console.log(data);
});
