var a = 10
var b = 9
var c = a + b
 
var http = require("http")
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write("<h3> The result is " + c + "</h3>");
    res.write("<h3>Welcome to Node JS</h3>");
    res.end();
}).listen(8000);

