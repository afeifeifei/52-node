
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/dachui",{useNewUrlParser:true});

let userSchema = new Schema({
    name : {type:String,required:true},
    pwd : {type: String,required: true},
    age : Number,
    status : {type:String},
    userInfo : {
        status : String,
        sex : String
    },
    arr : []
});

let user = mongoose.model("user",userSchema);

//增加数据
/*user.create(
        {
            name : "afei",
            pwd : "123456",
            age : 20,
            userInfo:{
                status : "这人很吊"
            }
        },
        {
            name : "zhuque",
            pwd : "789456",
            age : 38
        }
    )
    .then(()=>{console.log("添加成功")})
    .catch((err)=>{if(err)throw err});*/

/*user
    .updateMany(
        {name:"afei"},
        //{userInfo: {sex : "男"}}
        {
            //$set:{"userInfo.sex":"男"}
            $set:{"arr.0" : "159"}
        }

    )
    .then(data=>{
        console.log(data);
    })
    .catch((err)=>{if(err)throw err})*/
/*user
    .updateMany(
        {name:"afei"},
        {
            $inc:{age:2}
        }

    )
    .then(data=>{
        console.log(data);
    })
    .catch((err)=>{if(err)throw err})*/
/*user
    .updateMany(
        {name:"afei"},
        {
            $unset:{arr:1}
        }

    )
    .then(data=>{
        console.log(data);
    })
    .catch((err)=>{if(err)throw err});*/
user
    .updateMany(
        {name:"afei"},
        //{$push:{arr:789}}
        {$push:{arr:{$each:[123,456],$slice:-3}}}
    )
    .then(data=>{
        console.log(data);
    })
    .catch((err)=>{if(err)throw err});





