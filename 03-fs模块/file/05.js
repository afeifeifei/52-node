

//写同步代码的时候，捕捉错误



try {
    console.log(a);
}catch(e){
    console.log("try里面内容出错了！");
    console.log( e);
    //throw e;
}

console.log(3);





/*
const fs = require("fs");

try {
    fs.readFile("../test/1.txt",()=>{})
}catch ( e ) {
    console.log(e);
}

*/







