var http = require('http');
var server = http.createServer(function(req,res)
{
    res.write('hello world');
    res.end();

}).listen(8087);