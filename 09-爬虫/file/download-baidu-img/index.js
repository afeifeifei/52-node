

const request = require("request");
const fs = require("fs");
const Path = require("path");

function REQ(pn,rn,word,path){
    request({
        method : "GET",
        url : "https://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&ct=201326592&is=&fp=result&queryWord="+word+"&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=&z=&ic=&hd=&latest=&copyright=&word="+word+"&s=&se=&tab=&width=&height=&face=&istype=&qc=&nc=1&fr=&expermode=&force=&cg=star&pn="+pn+"&rn="+rn,
        headers: {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36"}
    },(err,res,body)=>{
        let data = JSON.parse(body).data;
        data.pop();
        data.forEach((v,i)=>{
            let date = new Date().getTime();
            date = date.toString(36);
            request(v.thumbURL).pipe( fs.createWriteStream(Path.join(path,date+i+".jpg")) );
        });
    });
}

/*
options
    word * : 搜索关键词,
    path : 图片存储路径,
    num : 数量，最大限制499
 */

module.exports = function({word,path,num=99}){
    if(num<=0)return;

    //变量
    let URIWord = encodeURI(word),
        max,
        rn=0,
        pn=0
    ;

    //得到path 与 创建文件夹
    path = path || Path.join(__dirname,"../"+word);
    try{fs.mkdirSync(path)}catch ( e ){console.log(e)}

    //执行请求
    num = Math.min(num,499);
    max = Math.floor(num/60);
    for(let i = 0; i <= max; i++) {
        console.log(1);
        pn = i*60;
        rn = Math.min((i+1)*60,num-pn);
        REQ(pn,rn,URIWord,path);
    }
};








