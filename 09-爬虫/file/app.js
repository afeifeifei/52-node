

const request = require("request");
const fs = require("fs");
const path = require("path");


let str = "新垣结衣";
let word = encodeURI(str);

fs.mkdirSync(path.join(__dirname,str));

/*

在访问百度图片页面的时候，使用http和https协议得到的数据是不一样的，
http的数据图片链接只能访问一次？？
https的数据图片链接可以多次

 */

request({
    method : "GET",
    url : "https://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&ct=201326592&is=&fp=result&queryWord="+word+"&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=&z=&ic=&hd=&latest=&copyright=&word="+word+"&s=&se=&tab=&width=&height=&face=&istype=&qc=&nc=1&fr=&expermode=&force=&cg=star&pn=99999&rn=42",
    headers: {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36"}
},(err,res,body)=>{

    //console.log(typeof body);
    //console.log(JSON.parse(body));
    /*
    因为我们发现得到结果是个json字符串，所以没有必要进行正则表达式的操作了，直接转换成对象进行操作
     */
    let data = JSON.parse(body).data;
    data.pop();
    //console.log(data);
    //console.log(data.length);
    data.forEach((v,i)=>{
        //console.log(v.thumbURL);
        request(v.thumbURL).pipe( fs.createWriteStream(path.join(__dirname,str+"/"+i+".jpg")) );
    });
});




/*

    http://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&ct=201326592&is=&fp=result&queryWord=%E6%96%B0%E5%9E%A3%E7%BB%93%E8%A1%A3&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=&z=&ic=&hd=&latest=&copyright=&word=%E6%96%B0%E5%9E%A3%E7%BB%93%E8%A1%A3&s=&se=&tab=&width=&height=&face=&istype=&qc=&nc=1&fr=&expermode=&force=&cg=star&pn=30&rn=30

    http://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&ct=201326592&is=&fp=result&queryWord=%E6%96%B0%E5%9E%A3%E7%BB%93%E8%A1%A3&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=&z=&ic=&hd=&latest=&copyright=&word=%E6%96%B0%E5%9E%A3%E7%BB%93%E8%A1%A3&s=&se=&tab=&width=&height=&face=&istype=&qc=&nc=1&fr=&expermode=&force=&cg=star&pn=60&rn=30

    http://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&ct=201326592&is=&fp=result&queryWord=%E6%96%B0%E5%9E%A3%E7%BB%93%E8%A1%A3&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=&z=&ic=&hd=&latest=&copyright=&word=%E6%96%B0%E5%9E%A3%E7%BB%93%E8%A1%A3&s=&se=&tab=&width=&height=&face=&istype=&qc=&nc=1&fr=&expermode=&force=&cg=star&pn=90&rn=30

     */










