var http = require("http")
var calc = require('./calc')
result = calc.add(34,67)
result_sub = calc.sub(134,67)
result_mul = calc.mul(13,6)
result_div = calc.div(132,8)
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write("<h2>Arithmetic Operations</h2>");
    res.write("<h4>The result of Addition = " + result+"</h4>");
    res.write("<h4>The result of Subtraction = " + result_sub+"</h4>");
    res.write("<h4>The result of Multiplication = " + result_mul+"</h4>");
    res.write("<h4>The result of Division = " + result_div+"</h4>");
    res.end();
}).listen(8000);