

const user = require("../model/user");

module.exports = function(req,res){

    //console.log(req.session.goudan);
    console.log(req.session.userInfo);


    let data = {};
    if ( req.session.userInfo ){
        data = req.session.userInfo;
    } else{
        data = {_id:null}
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