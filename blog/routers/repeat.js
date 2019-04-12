

const user = require("../model/user");

module.exports = function(req,res){

    user.findOne({username:req.body.username})
        .then((data)=>{
            if ( data ) {
                res.send("用户名已存在！");
            }else{
                res.send("用户可用");
            }
        });
};