// We get http and fs from the NodeJS core.
var http = require('http');
var fs = require('fs');


http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var html = fs.readFileSync('./index.html', 'utf8');
    var message = 'Hello world...';
    html = html.replace('{Message}', message);
    res.end(html);

}).listen(1337, '127.0.0.1');