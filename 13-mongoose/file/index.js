
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

//删除数据
user
    .deleteOne({name:"zhuque"})
    .catch((err)=>{if(err)throw err});


