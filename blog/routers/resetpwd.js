

const user = require("../model/user");
const crypto = require("crypto");

module.exports = (req,res)=>{

    //假设传过来的数据格式不正确
    if(!(req.body.oldpwd && req.body.newpwd)){
        return res.send({code:0,msg:"传输的数据格式不正确"});
    }

    //判断旧密码对不对
    user.findById(req.session.userInfo._id)
        .then(data=>{
            if ( data ){
                let oldp = crypto.createHash('sha256').update( req.body.oldpwd ).digest("hex");

                //原密码和数据库密码比对
                if ( oldp === data.password ){
                    data.password = req.body.newpwd;
                    data.save().then(()=>{
                        res.send({code:1,msg:"密码修改成功"});
                    });
                }else{
                    res.send({code:0,msg:"原始密码不正确"});
                }
            }else{
                //不存在，理论不会出现这种情况
                res.send({code:0,msg:"用户信息加载出错…"})
            }
        })
        .catch(e=>{
            res.send({code:0,msg:"服务器异常~请稍后重试~"})
        });
};