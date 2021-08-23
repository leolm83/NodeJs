let http = require('http');

http.createServer((req,res)=>{
 res.writeHead(200,{
     'Content-Type':'text/html;charset=utf-8'
 });
 res.write("Lendo uma Query String que veio da requisicao " + req.url)
 res.end();
}).listen(8000)