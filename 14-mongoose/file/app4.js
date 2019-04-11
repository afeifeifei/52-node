
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/dachui",{useNewUrlParser:true});

//用户Schema
let userSchema = new Schema({
    name : String,
    pwd : String
});

//建立user表
let user = mongoose.model("user",userSchema);

/*user.create(
    {name:"afei",pwd:"123456"},
    {name:"zhuque",pwd:"456789"},
    {name:"xinai",pwd:"789456"},
    {name:"yanxin",pwd:"456"}
)*/




//文章Schema
let articleSchema = new Schema({
    title : String,
    content : String,
    author : {
        type : Schema.Types.ObjectId,
        ref : "user"
    }
});

//建立article表
let article = mongoose.model("article",articleSchema);

/*
article.create({
    title : "标题",
    content : "随便先写点东西",
    author : "5caf454f21671d23d86e8eab"
});

article.create({
    title : "标题",
    content : "随便先写点东西",
    author : "5caf454f21671d23d86e8eab"
});
*/


//进入文章页的时候，找到所有的文章，整理好数据返回给前面
article.find().populate("author").then(data=>{
    //console.log(data);
    let d = [];
    data.forEach(v=>{
        //console.log(v.author.name);
        d.push({
            title : v.title,
            content : v.content,
            author : v.author.name
        });
    });

    //
    console.log(d);
});


