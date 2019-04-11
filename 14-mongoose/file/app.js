
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/dachui",{useNewUrlParser:true});

/*
//required验证
let userSchema = new Schema({
    name : {type:String,required:[true,"name字段必须存在"]}
});

let user = mongoose.model("user",userSchema);

user.create({
    //name : "afei"
    gg:10
}).then(data=>{
    console.log(data);
}).catch(e=>{
    console.log(e);
})
*/

/*
针对于Number String类型的Schema有对应的验证
Number
    min max

String
    enum   minlength  maxlength   match

 *
/*let userSchema = new Schema({
    length : {
        type:Number,
        required:true,
        min:50,
        max:400
    }
});

let user = mongoose.model("user",userSchema);

user.create({
    length : 40
}).then((data)=>{
    console.log(data);
}).catch(e=>{
    console.log(e);
});*/

/*let userSchema = new Schema({
    sex : {
        type:String,
        required:true,
        enum:["男","女"]
    }
});

let user = mongoose.model("user",userSchema);

user.create({
    sex : "公"
}).then((data)=>{
    console.log(data);
}).catch(e=>{
    console.log(e);
});*/
/*

let userSchema = new Schema({
    name : {
        type:String,
        required:true,
        minlength : 2,
        maxlength : 10
    }
});

let user = mongoose.model("user",userSchema);

user.create({
    name : "阿飞"
}).then((data)=>{
    console.log(data);
}).catch(e=>{
    console.log(e);
});
*/

let userSchema = new Schema({
    tel : {
        type:String,
        required:true,
        match:/^1\d{10}$/
    }
});

let user = mongoose.model("user",userSchema);

user.create({
    tel : "1575127515"
}).then((data)=>{
    console.log(data);
}).catch(e=>{
    console.log(e);
});




