const http = require("http");
http.createServer((req,res)=>{
    res.write("<h1>hello mind</h1>");
    res.end();
}).listen(4500);