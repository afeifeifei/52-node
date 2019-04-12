

const request = require("request");
const fs = require("fs")
const path = require("path")



let word = encodeURI("潭州教育")

request({
    method : "GET",
    url : "https://search.jd.com/Search?keyword="+word+"&enc=utf-8",


    //在发起请求的时候，尽量将自己模拟成前端浏览器环境
    headers:{
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36"
    }

} , (err,res,body)=>{

    /*
    //img13.360buyimg.com/n7/jfs/t1/28497/21/6422/373426/5c528df6E3ce8c2b9/f3f083c220816034.jpg
    //img11.360buyimg.com/n7/jfs/t18382/90/2093400202/304405/7f27a635/5ae2820bN3d6bd5b8.jpg
    //img11.360buyimg.com/n7/jfs/t1/25663/12/6539/288954/5c529e53E1bdc5d6d/3ba7524db04c7d21.jpg
    //img12.360buyimg.com/n7/jfs/t1/29062/11/12041/184362/5c94a2e7E7d2febdf/c5354ae72a71c2ed.jpg
     */

    //  //img数字.360buyimg.com/n7/jfs/t1 数字 字母 / .jpg
    let reg = /\/\/img\d+\.360buyimg\.com\/n7\/jfs\/t1[0-9a-z\/]+\.jpg/gi;

    let infoArr = body.match(reg);


    console.log(infoArr);

    let data = "";
    infoArr.forEach(v=>{
        data+=v+"\n";
    });
    fs.writeFile(path.join(__dirname,"/info/img.txt"),data,(err)=>{if(err)throw err})


    //fs.writeFile(path.join(__dirname,"/info/jd.html"),body,(err)=>{if(err)throw err})
});






