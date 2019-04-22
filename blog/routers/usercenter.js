

const user = require("../model/user");
const fs = require("fs");

module.exports = function(req,res){

    //console.log(req.session.goudan);
    //console.log(req.session.userInfo);

    if ( req.session.userInfo ){
        user.findById(req.session.userInfo._id).then(data=>{
            res.render("usercenter",data);
        });
    } else{
        res.render("usercenter",{_id:null});
    }
};