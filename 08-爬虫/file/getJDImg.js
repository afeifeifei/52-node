

const request = require("request");
const fs = require("fs")

function getImg(word , path){
    let URIWord = encodeURI( word );
    let data = "";
    (function start(page){
        let options = {
            method: "GET",
            url: "https://search.jd.com/Search?keyword="+URIWord+"&enc=utf-8&qrst=1&rt=1&stop=1&vt=2&page="+page,
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36"
            }
        };
        request(options , (err,res,body)=>{
            if ( err ) {
                write();
                return;
            }
            let reg = /\/\/img\d+\.360buyimg\.com\/n7\/jfs\/t1[0-9a-z\/]+\.jpg/gi;
            let infoArr = body.match(reg);

            if ( !infoArr ){
                write();
                return;
            }

            infoArr.forEach(v=>{
                data+=v+"\n";
            });
            start(page+2);
        });
    })(1);

    function write(){
        fs.writeFile(path,data,(err)=>{if(err)throw err})
    }
}

module.exports = getImg;




