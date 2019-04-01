

/*

假设你需要爬去的是一个网页
你需要的内容和html结构关系比较密切，也就是说如果能使用DOM操作的话，会更方便的拿取到内容
虽然nodejs里面没有DOM操作，但是我们可以通过一些包，来实现虚拟DOM

 */

const request = require("request");

//第一个学习的 虚拟DOM包 解析后可以使用原生js相关的DOM操作
//const {JSDOM} = require("jsdom");

const cheerio = require("cheerio");

console.log(cheerio);


request({
    method : "GET",
    url : "http://www.17k.com/chapter/1398783/21555988.html",
    headers: {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36"}
},(err,res,body)=>{
    //console.log(body);

    //使用JSDOM
    //传入一个html内容的字符串，
    //let window = new JSDOM(body).window;
    // console.log(window);
    //console.log(window.document.querySelector("#readArea .p").innerHTML);


    //使用cheerio
    let $ = cheerio.load(body);
    console.log($("#readArea .p").text());

});






