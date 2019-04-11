
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/dachui",{useNewUrlParser:true});

/*
自定义验证：
 */

let userSchema = new Schema({
    pwd : {
        type:String,
        required:true,
        validate:{
            validator(value){
                //检测长度是否合格
                let ifLen = value.length < 6 || value.length >18;
                if(ifLen)return false;

                //验证是否是纯数字
                let ifNum = /^\d+$/.test(value);
                if(ifNum)return false;

                //验证是否纯小字母
                let ifLow = /^[a-z]+$/.test(value);
                if(ifLow)return false;

                //验证是否纯大写字母
                let ifUp = /^[A-Z]$/.test(value);
                if(ifUp)return false;

                //……

                return true;
            },
            message:"密码验证失败！"
        }
        /*validate:function(value){
            //检测长度是否合格
            let ifLen = value.length < 6 || value.length >18;
            if(ifLen)return false;

            //验证是否是纯数字
            let ifNum = /^\d+$/.test(value);
            if(ifNum)return false;

            //验证是否纯小字母
            let ifLow = /^[a-z]+$/.test(value);
            if(ifLow)return false;

            //验证是否纯大写字母
            let ifUp = /^[A-Z]$/.test(value);
            if(ifUp)return false;

            //……

            return true;
        }*/
    }
});

let user = mongoose.model("user",userSchema);

user.create({
    pwd : "1575127515"
}).then((data)=>{
    console.log(data);
}).catch(e=>{
    console.log(e);
});




