
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/dachui",{useNewUrlParser:true});

let userSchema = new Schema({
    name : {type:String,required:true},
    pwd : {type: String,required: true},
    age : Number,
    status : {type:String}
});

let user = mongoose.model("user",userSchema);

//增加数据
/*user.create(
        {
            name : "afei",
            pwd : "123456",
            age : 20
        },
        {
            name : "zhuque",
            pwd : "789456",
            age : 38
        }
    )
    .then(()=>{console.log("添加成功")})
    .catch((err)=>{if(err)throw err});*/

/*
find 第二个参数，表示返回的数据过滤
 */
/*user
    .find(
        {name:"afei"},
        {_id:0,name:1}
        )
    .then(data=>{
    console.log(data);
});*/
/*user
    .find(
        {name:"afei"},
        {},
        {skip:1,limit:2}
        )
    .then(data=>{
    console.log(data);
});*/

/*user
    .find(
        {name:/./},
        {},
        {sort:{age:-1}}
    )
    .then(data=>{
        console.log(data);
    });*/

user
    .findById(
        '5caca2b76001620794ccf2d9'
    )
    .then(data=>{
        console.log(data);
    });


