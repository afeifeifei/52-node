
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
            pwd : "123456"
        },
        {
            name : "zhuque",
            pwd : "789456"
        }
    )
    .then(()=>{console.log("添加成功")})
    .catch((err)=>{if(err)throw err});*/

//查
/*
 .find( conditions, [projection], [options], [callback]  )

 conditions 查询条件
 */
/*user
    .find({name:"afei"})
    .then(data=>{
        console.log(data);
    });*/
/*
    $gt $gte $lt $lte $ne
 */
/*user
    .find({age:{$gt:20}})
    .then(data=>{
        console.log(data);
    });*/

/*user
    .find(
        {
            age:{
                $gte:20,
                $lte:60
            }
        }
    )
    .then(data=>{
        console.log(data);
    });*/

/*user
    .find(
        {
            age:{
                $ne:20
            }
        }
    )
    .then(data=>{
        console.log(data);
    });*/

// or nor
/*user
    .find(
        {
            $or:[
                {name:"afei"},
                {age:{$gt:15}}
            ]
        }
    )
    .then(data=>{
        console.log(data);
    });*/
/*user
    .find(
        {
            $nor:[
                {name:"afei"},
                {age:{$gt:50}}
            ]
        }
    )
    .then(data=>{
        console.log(data);
    });*/

// in nin
/*user
    .find(
        {
            //name:{$in:["afei","zhuque"]}
            age : {$in:[20,99,80,73]}
        }
    )
    .then(data=>{
        console.log(data);
    });*/

// $exists
/*user.find(
        {
            age : {$exists:true}
        }
    )
    .then(data=>{
        console.log(data);
    });*/

//user.where("age").gte(20).lte(99).exec(function(err,data){})
/*user.where("age").exists(true).exec((err,data)=>{
    console.log(err);
    console.log(data);
});*/












