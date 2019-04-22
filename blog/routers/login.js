// login 登录验证


//引入 user表
const user = require("../model/user");
//引入 加密模块
const crypto = require("crypto");


/*
返回的数据模板
{code , msg}
code
    0  登录失败
    1  登录成功
msg
    字符串
 */

module.exports = function(req,res){
    // console.log(req.body);

    //用过用户名查找数据
    user.findOne({username:req.body.username})
        .then(data=>{
            if ( data ){
                //用户存在
                //验证密码匹不匹配
                let pwd = crypto.createHash('sha256').update( req.body.password ).digest("hex");

                if ( pwd === data.password ){
                    //登录成功之后，给客户端设置一个cookie
                    //res.cookie("_id",data._id,{maxAge:1000*60*60});

                    //登录成功之后，标识该用户已经登录
                    //req.session.goudan = true;
                    //再存一个session信息，用来存储登录的是谁
                    req.session.userInfo = data;

                    //密码正确
                    res.send({code:1,msg:"登录成功"});
                } else{
                    //密码错误
                    res.send({code:0,msg:"密码错误"});
                }
            } else{
                //用户不存在
                res.send({code:0,msg:"用户不存在"});
            }
        })
        .catch(e=>{
            res.send({code:0,msg:"服务器异常，请稍后重试。"});
        });
};