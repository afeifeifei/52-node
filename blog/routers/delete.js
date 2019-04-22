const article = require("../model/article");

module.exports = (req,res)=>{

    let _id = req.body._id;

    if ( !_id ){
        return res.send({code:0,msg:"数据格式错误"});
    }

    article.deleteOne({_id})
        .then(data=>{
            res.send({code:1,msg:"删除成功！"});
        })
        .catch(e=>{
            res.send({code:0,msg:"服务器异常~请稍后再试~"})
        });
};