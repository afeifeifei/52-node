
const express = require("express");
const article = require("../model/article");
const user = require("../model/user");


let router = express.Router();

//get
router.get("/",(req,res)=>{
    if ( req.session.userInfo && req.session.userInfo._id== "5cbb38b2e133e62be4e66b0d" ){
        res.render("admin",req.session.userInfo);
    }else{
        res.redirect("/");
    }
});

//文章查询
router.post("/search",(req,res)=>{
    if(!req.session.userInfo){
        return res.send({code:0,msg:"登录失败，请重新登录"})
    }
    //关键词组成条件
    let keyword = req.body.keyword;
    let conditions = {};
    if ( keyword ){
        let reg = new RegExp(keyword);
        conditions = {
            $or:[
                {title:reg},
                {tags:reg},
                {content:reg}
            ]
        }
    }

    //开始查找
    article.find(conditions).populate("author")
           .then(data=>{
               if ( data.length ){
                   res.send({code:1,data});
               } else{
                   res.send({code:0,msg:"没有超找到相关数据"})
               }
           })
           .catch(e=>{
               res.send({code:0,msg:"服务器异常~请稍后再试~"})
           });
});

//用户查询
router.post("/usersearch",(req,res)=>{
    if(!req.session.userInfo){
        return res.send({code:0,msg:"登录失败，请重新登录"})
    }
    //关键词组成条件
    let keyword = req.body.keyword;
    let conditions = {};
    if ( keyword ){
        let reg = new RegExp(keyword);
        conditions = {
            username : reg
            ,$where: 'this.username !== "admin"'
        }
    }else{
        conditions = {
            $where: 'this.username !== "admin"'
        };
    }
    //开始查找
    user.find(conditions)
           .then(data=>{
               if ( data.length ){
                   res.send({code:1,data});
               } else{
                   res.send({code:0,msg:"没有超找到相关数据"})
               }
           })
           .catch(e=>{
               console.log(e);
               res.send({code:0,msg:"服务器异常~请稍后再试~"})
           });
});

//用户删除
router.post("/delete",(req,res)=>{
    let _id = req.body._id;
    if ( !_id ){
        return res.send({code:0,msg:"数据格式错误"});
    }
    user.deleteOne({_id})
           .then(data=>{
               res.send({code:1,msg:"删除成功！"});
           })
           .catch(e=>{
               res.send({code:0,msg:"服务器异常~请稍后再试~"})
           });
});

module.exports = router;