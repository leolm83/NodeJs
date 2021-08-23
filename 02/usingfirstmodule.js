let http = require('http');
let meuModulo= require("./myfirstmodule.js")
http.createServer((req,res)=>{
 res.writeHead(200,{
     'Content-Type':'text/html;charset=utf-8'
 });
 res.write("O horário de Resposta da mensagem foi "+ meuModulo.myDateTime())
 res.end();
}).listen(8000)