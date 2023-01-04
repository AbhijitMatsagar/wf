var http = require('http');
var module = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + module.DateTime());
  res.end();
}).listen(8080);