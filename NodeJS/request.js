var http = require("http")
var url = require('url');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write("\nWelcome to Node JS");
    res.write(req.url);
    res.end();
}).listen(8080);