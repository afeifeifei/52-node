let express = require("express");
let fs = require("fs");
let path = require("path");
let app = express();

app.use((req,res,next)=>{
    res.header({
        "Access-Control-Allow-Origin":"*"
    });
    next();
});
app.get("/",(req,res)=>{
    if(req.hostname === "api.afei.fun"){
        res.send(`[
            {"name":"afei","age":"18"},
            {"name":"zhuque","age":"18"},
            {"name":"wula","age":"18"},
            {"name":"xinai","age":"18"},
            {"name":"wulv","age":"18"},
            {"name":"zhaoge","age":"18"}
        ]`);
    }
    res.send("???");
});

let http = require("http");
let https = require("https");

let httpsOptions = {
    key : fs.readFileSync(path.join(__dirname,"../ssl/2_www.afei.fun.key")),
    cert :fs.readFileSync(path.join(__dirname,"../ssl/1_www.afei.fun_bundle.crt"))
};
http.createServer(app).listen(80);//app.listen(80)
https.createServer(httpsOptions,app).listen(443);
