

const user = require("../model/user");

module.exports = function(req,res){

    //console.log(req.session.goudan);
    let data = {};
    if ( req.session.goudan ){
        data = {msg:"登陆成功"}
    } else{
        data = {msg:null}
    }

    res.render("usercenter",data);

};





/*user.findById(req.cookies._id)
        .then(data=>{
            console.log(data);

            if ( data ){
                res.render("usercenter",{username:data.username});
            } else{
                res.render("usercenter",{username:null});
            }


        });
*/