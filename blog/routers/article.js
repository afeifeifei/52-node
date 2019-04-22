
const express = require("express");
const article = require("../model/article");
const comment = require("../model/comment");

let router = express.Router();

//发表文章
router.post("/",(req,res)=>{
    let {title,tags,content} = req.body;

    if(!(title&&tags.length&&content)){
        return res.send({code:0,msg:"格式错误"});
    }

    article.create({
        title
        ,content
        ,tags:tags.join(",")
        ,author: req.session.userInfo._id
    }).then((data)=>{
        if ( data ){
            res.send({code:1,msg:"文章发表成功"});
        } else{
            res.send({code:0,msg:"服务器异常~请稍后重试~"});
        }
    }).catch(e=>{
        res.send({code:0,msg:"服务器异常~请稍后重试~"});
    });
});

//访问文章页面
router.get("/:_id",(req,res)=>{
    let _id = req.params._id;
    if ( !_id ) {
        res.render("article",{code:0,msg:"没有对应的文章"});
    }else{
        article.findById(_id).populate("author")
               .then(data=>{
                   if ( data ){

                       comment.find({article:_id}).populate("author")
                              .then(commentData=>{
                                  res.render("article",{code:1,data,commentData});
                              })
                              .catch(e=>{
                                  res.render("article",{code:1,data,comentData:[]});
                              });
                   } else{
                       res.render("article",{code:0,msg:"没有对应的文章"});
                   }
               })
               .catch(e=>{
                   res.render("article",{code:0,msg:"服务器异常"});
               });

    }
});

module.exports = router;