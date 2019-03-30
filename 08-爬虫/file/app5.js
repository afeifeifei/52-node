

const request = require("request");
const fs = require("fs");
const path = require("path");

request({
    method : "GET",
    url : "https://image.baidu.com/search/index?tn=baiduimage&word=%E6%96%B0%E5%9E%A3%E7%BB%93%E8%A1%A3",
    headers: {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36"}
},(err,res,body)=>{

    //console.log(body);

    /*
    https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3781523752,821883184&fm=26&gp=0.jpg
    https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=860575086,3645812163&fm=26&gp=0.jpg
    https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1530332580,3101356039&fm=26&gp=0.jpg
    https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4266805017,1485230914&fm=26&gp=0.jpg
     */
    //  https://ss数字.bdstatic.com  / 数字 字母 _ = , &  .jpg

    let reg = /https:\/\/ss\d+\.bdstatic\.com[\/0-9a-z_=,&]+\.(jpg|png|webp|gif)/ig;

    let infoArr = body.match(reg);
    infoArr = [...new Set(infoArr)];

    //console.log(infoArr);
    //保存图片的操作
    infoArr.forEach((v,i)=>{
        /*
        如果request只传入options参数（或者直接填入url）
        它返回的是一个可读流，直接通过pipeAPI写入到可写流
        */
        request(v).pipe( fs.createWriteStream(path.join(__dirname,"baiduimg/"+i+".jpg")) );
    });

})










