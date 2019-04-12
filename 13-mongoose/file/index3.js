
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/dachui",{useNewUrlParser:true});

let userSchema = new Schema({
    name : {type:String,required:true},
    pwd : {type: String,required: true},
    age : Number,
    status : {type:String},
    arr : [Number]
});

let user = mongoose.model("user",userSchema);

//增加数据
/*user.create(
        {
            name : "afei",
            pwd : "123456",
            age : 20,
            arr : [123,456]
        },
        {
            name : "zhuque",
            pwd : "789456",
            age : 38,
            arr : [456,789]
        }
    )
    .then(()=>{console.log("添加成功")})
    .catch((err)=>{if(err)throw err});*/

// all size
/*user
    .find({arr:{$all:[456,789]}})
    .then(data=>{
        console.log(data);
    });*/

// where 正则
/*user
    .find(
        {
            //$where:"this.age===20"
            //$where:"this.name==='afei'||this.name==='zhuque'"
            $where:function(){
                return this.age + 1 === 21;
            }
        }
    )
    .then(data=>{
        console.log(data);
    });*/
user.find(
        {
            name : /fei|zhu/
        }
    )
    .then(data=>{
        console.log(data);
    });



