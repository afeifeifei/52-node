

/*
const url = require("url")

console.log(url.URL);*/

//const URL = require("url").URL;

const {URL} = require("url");

let x = new URL("https://www.baidu.com:88/s?wd=%E9%98%BF%E9%A3%9E&rsv_spt=1&rsv_iqid=0xd277bd380006a96d&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_sug3=6&rsv_sug1=2&rsv_sug7=100&rsv_sug2=0&inputT=689&rsv_sug4=1771#ggghhh");

console.log(x);
console.log(x.searchParams.get("rsv_iqid"));
